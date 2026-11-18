/**
 * Genera imágenes faltantes (blog + fichas) vía Supabase Edge Function
 * `biomagnetistas-images` (proyecto charlielingan → OpenAI gpt-image).
 *
 * Uso:  npx tsx scripts/generate-images.mts [--only=blog|listings] [--limit=N] [--force]
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import type { BlogArticle, Biomagnetista } from "../src/data/types";

// Carga tolerante: permite generar imágenes de los lotes ya terminados.
async function safeImport<T>(path: string, key: string): Promise<T[]> {
  try {
    const mod = await import(path);
    return (mod[key] as T[]) ?? [];
  } catch (e) {
    console.warn(`(omitido ${path}: ${(e as Error).message.split("\n")[0]})`);
    return [];
  }
}
const ARTICLES: BlogArticle[] = (
  await Promise.all(
    [1, 2, 3, 4, 5].map((n) => safeImport<BlogArticle>(`../src/data/blog/blog-0${n}.ts`, `BLOG_0${n}`)),
  )
).flat();
const BIOMAGNETISTAS: Biomagnetista[] = (
  await Promise.all([
    safeImport<Biomagnetista>("../src/data/biomagnetistas/region-mx-ca.ts", "BIOMAGNETISTAS_MX_CA"),
    safeImport<Biomagnetista>("../src/data/biomagnetistas/region-andina.ts", "BIOMAGNETISTAS_ANDINA"),
    safeImport<Biomagnetista>("../src/data/biomagnetistas/region-sur-es-us.ts", "BIOMAGNETISTAS_SUR_ES_US"),
  ])
).flat();

function loadEnv() {
  const p = join(process.cwd(), ".env.local");
  if (!existsSync(p)) return;
  for (const line of readFileSync(p, "utf8").split("\n")) {
    const m = line.match(/^([A-Z_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim();
  }
}
loadEnv();

const FN_URL = process.env.SUPABASE_FN_URL!;
const KEY = process.env.SUPABASE_ANON_KEY!;
const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? "true"];
  }),
);
const LIMIT = Number(args.limit ?? 1e9);
const FORCE = args.force === "true";
const CONCURRENCY = 4;

type Job = { slug: string; prompt: string; folder: "blog" | "biomagnetistas"; out: string };

const jobs: Job[] = [];
if (args.only !== "listings") {
  for (const a of ARTICLES) {
    jobs.push({ slug: a.slug, prompt: a.imagePrompt, folder: "blog", out: `public/images/blog/${a.slug}.webp` });
  }
}
if (args.only !== "blog") {
  for (const b of BIOMAGNETISTAS) {
    if (b.image || !b.imagePrompt) continue;
    jobs.push({
      slug: b.slug,
      prompt: b.imagePrompt,
      folder: "biomagnetistas",
      out: `public/images/biomagnetistas/${b.slug}.webp`,
    });
  }
}

const pending = jobs.filter((j) => FORCE || !existsSync(j.out)).slice(0, LIMIT);
console.log(`Imágenes pendientes: ${pending.length} de ${jobs.length}`);

async function run(job: Job, attempt = 1): Promise<void> {
  try {
    const r = await fetch(FN_URL, {
      method: "POST",
      headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ slug: job.slug, prompt: job.prompt, folder: job.folder }),
    });
    const j = (await r.json()) as { ok: boolean; url?: string; error?: string; model?: string };
    if (!j.ok || !j.url) throw new Error(j.error || `HTTP ${r.status}`);
    const img = await fetch(j.url);
    const buf = Buffer.from(await img.arrayBuffer());
    mkdirSync(join(process.cwd(), job.out, ".."), { recursive: true });
    writeFileSync(job.out, buf);
    console.log(`✓ ${job.out} (${Math.round(buf.length / 1024)} KB, ${j.model})`);
  } catch (e) {
    if (attempt < 3) {
      console.warn(`↻ ${job.slug}: ${(e as Error).message} — reintento ${attempt + 1}`);
      await new Promise((res) => setTimeout(res, 4000 * attempt));
      return run(job, attempt + 1);
    }
    console.error(`✗ ${job.slug}: ${(e as Error).message}`);
  }
}

const queue = [...pending];
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) await run(queue.shift()!);
  }),
);
console.log("Listo.");
