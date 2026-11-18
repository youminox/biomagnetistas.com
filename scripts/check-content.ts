/**
 * QA de contenidos: enlaces internos rotos, slugs duplicados, longitud SEO,
 * palabras YMYL prohibidas y número de palabras.
 * Uso: npx tsx scripts/check-content.ts
 */
import { ARTICLES } from "../src/data/blog";
import { BIOMAGNETISTAS } from "../src/data/biomagnetistas";
import { COUNTRIES, CITIES } from "../src/data/countries";

const valid = new Set<string>([
  "/",
  "/blog/",
  "/curso-biomagnetismo-online/",
  "/biomagnetista-cerca-de-mi/",
  "/nosotros/",
  "/metodologia/",
  "/contacto/",
  "/aviso-medico/",
  "/divulgacion-de-afiliados/",
  ...ARTICLES.map((a) => `/blog/${a.slug}/`),
  ...COUNTRIES.map((c) => `/pais/${c.slug}/`),
  ...CITIES.map((c) => `/ciudad/${c.slug}/`),
  ...BIOMAGNETISTAS.map((b) => `/biomagnetista/${b.slug}/`),
]);

const RISKY = [/\bcura(?:r|n|rá|ción)?\b(?![^<]{0,40}(?:no|promete))/i, /garantiza(?:do|mos)?\b/i, /\belimina (?:el|la) (?:cáncer|diabetes|vih)/i];

let errors = 0;
const seen = new Set<string>();
let totalWords = 0;

for (const a of ARTICLES) {
  const issues: string[] = [];
  if (seen.has(a.slug)) issues.push("slug duplicado");
  seen.add(a.slug);
  if (a.seoTitle.length > 65) issues.push(`seoTitle ${a.seoTitle.length} chars`);
  if (a.metaDescription.length < 120 || a.metaDescription.length > 165)
    issues.push(`metaDescription ${a.metaDescription.length} chars`);
  const words = a.content.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  totalWords += words;
  if (words < 1000) issues.push(`solo ${words} palabras`);
  for (const m of a.content.matchAll(/href="(\/[^"#?]*)"/g)) {
    let href = m[1];
    if (!href.endsWith("/")) href += "/";
    if (!valid.has(href)) issues.push(`enlace roto ${m[1]}`);
  }
  for (const s of a.relatedSlugs) if (!valid.has(`/blog/${s}/`)) issues.push(`relatedSlug inexistente ${s}`);
  for (const id of a.toc.map((t) => t.id)) if (!a.content.includes(`id="${id}"`)) issues.push(`toc id sin h2: ${id}`);
  for (const r of RISKY) {
    const m = a.content.match(r);
    if (m) issues.push(`revisar YMYL: "${m[0]}"`);
  }
  if (issues.length) {
    errors += issues.length;
    console.log(`\n${a.slug}\n  - ${issues.join("\n  - ")}`);
  }
}

console.log(`\n${ARTICLES.length} artículos · ${totalWords.toLocaleString("es")} palabras · ${BIOMAGNETISTAS.length} biomagnetistas · ${errors} avisos`);
