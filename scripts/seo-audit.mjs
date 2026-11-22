// Auditoría SEO del sitio en vivo: recorre el sitemap y revisa cada URL.
// Uso: node scripts/seo-audit.mjs [baseUrl]
const BASE = process.argv[2] || "https://biomagnetistas.com";
const sm = await (await fetch(`${BASE}/sitemap.xml`)).text();
const urls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const issues = {};
const add = (k, u, d = "") => (issues[k] ??= []).push(d ? `${u} — ${d}` : u);
const titles = new Map();
const descs = new Map();
const imgs = new Set();
const internal = new Set();
let bytes = 0;

async function audit(u) {
  const r = await fetch(u, { redirect: "manual" });
  if (r.status !== 200) return add("status≠200", u, r.status);
  const h = await r.text();
  bytes += h.length;
  const get = (re) => (h.match(re) || [])[1];
  const title = get(/<title>([^<]*)<\/title>/);
  const desc = get(/<meta name="description" content="([^"]*)"/);
  const canon = get(/<link rel="canonical" href="([^"]*)"/);
  const h1s = (h.match(/<h1[\s>]/g) || []).length;
  if (!title) add("sin title", u);
  else {
    const t = title.replace(/&amp;/g, "&");
    if (t.length > 65) add("title > 65", u, t.length);
    if (t.length < 25) add("title < 25", u, t);
    titles.set(t, [...(titles.get(t) || []), u]);
  }
  if (!desc) add("sin meta description", u);
  else {
    if (desc.length > 165) add("description > 165", u, desc.length);
    if (desc.length < 90) add("description < 90", u, desc.length);
    descs.set(desc, [...(descs.get(desc) || []), u]);
  }
  if (!canon) add("sin canonical", u);
  else if (canon !== u) add("canonical ≠ url", u, canon);
  if (h1s !== 1) add("h1 ≠ 1", u, h1s);
  if (!/property="og:image"/.test(h)) add("sin og:image", u);
  if (/noindex/.test(h)) add("noindex", u);
  for (const m of h.matchAll(/<img\b[^>]*>/g)) {
    const tag = m[0];
    if (!/alt="[^"]+"/.test(tag)) add("img sin alt", u, tag.slice(0, 80));
    const src = (tag.match(/src="([^"]+)"/) || [])[1];
    if (src?.startsWith("/")) imgs.add(src.replace(/&amp;/g, "&"));
  }
  for (const m of h.matchAll(/href="(\/[^"#?]*)"/g)) internal.add(m[1]);
}

const q = [...urls];
await Promise.all(Array.from({ length: 8 }, async () => { while (q.length) await audit(q.shift()); }));

for (const [t, us] of titles) if (us.length > 1) add("title duplicado", t, us.length);
for (const [d, us] of descs) if (us.length > 1) add("description duplicada", d.slice(0, 60), us.length);

// Enlaces internos e imágenes rotas
const smSet = new Set(urls.map((x) => x.replace(BASE, "")));
const toCheck = [...internal].filter((p) => !p.startsWith("/_next") && !smSet.has(p) && !/\.(svg|png|jpg|webp|ico)$/.test(p));
for (const p of toCheck) {
  const r = await fetch(BASE + p, { redirect: "manual" });
  if (r.status >= 400) add("enlace interno roto", p, r.status);
  else if (r.status >= 300) add("enlace interno redirige", p, `${r.status} → ${r.headers.get("location")}`);
}
const iq = [...imgs];
await Promise.all(Array.from({ length: 8 }, async () => {
  while (iq.length) {
    const p = iq.shift();
    const r = await fetch(BASE + p, { method: "HEAD" });
    if (r.status !== 200) add("imagen rota", p, r.status);
    const len = Number(r.headers.get("content-length") || 0);
    if (len > 300_000) add("imagen pesada > 300KB", p, Math.round(len / 1024) + "KB");
  }
}));

console.log(`URLs en sitemap: ${urls.length} · HTML medio: ${Math.round(bytes / urls.length / 1024)} KB · imágenes únicas: ${imgs.size} · enlaces internos únicos: ${internal.size}`);
for (const [k, v] of Object.entries(issues)) {
  console.log(`\n## ${k} (${v.length})`);
  v.slice(0, 12).forEach((x) => console.log("  - " + x));
}
