import type { Metadata } from "next";

export const SITE_NAME = "Biomagnetistas.com";
export const SITE_URL = "https://biomagnetistas.com";
export const SITE_DESCRIPTION =
  "Guía de biomagnetistas en Perú, Latinoamérica, España y EE.UU.: rankings por país y ciudad, valoraciones, precios referenciales y cómo elegir terapeuta de Par Biomagnético.";

export const OWNER_NAME = "Carlos Lingán Borja";
export const OWNER_CITY = "Lima, Perú";
export const OWNER_EMAIL = "info@charlielingan.com";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

/* ---------- Biomagnetismo Bens (socio recomendado) ---------- */
const UTM = (campaign: string, medium = "card") =>
  `utm_source=biomagnetistas.com&utm_medium=${medium}&utm_campaign=${encodeURIComponent(campaign)}`;

export const BENS = {
  name: "Biomagnetismo Bens",
  therapist: "Bencio Lingán",
  site: "https://biomagnetismobens.pe/",
  reservaUrl: "https://biomagnetismobens.pe/products/reserva",
  cursoUrl: "https://biomagnetismobens.pe/pages/curso",
  manualUrl: "https://biomagnetismobens.pe/pages/manual-libro-completo-de-biomagnetismo",
  imanesCasaUrl:
    "https://biomagnetismobens.pe/pages/imanes-para-casa-guia-visual-practica-para-el-bienestar-diario-en-tu-hogar",
  instagram: "https://www.instagram.com/biomagnetismobens/",
  address: "Av. Encalada (frente al C.C. El Polo), Santiago de Surco, Lima",
  district: "Santiago de Surco",
  years: "7+",
  therapies: "20.000+",
  cursoPrice: "US$ 199",
  slug: "biomagnetismo-bens-lima",
};

export function reservaLink(campaign: string, medium?: string) {
  return `${BENS.reservaUrl}?${UTM(campaign, medium)}`;
}
export function cursoLink(campaign: string, medium?: string) {
  return `${BENS.cursoUrl}?${UTM(campaign, medium)}`;
}

/* ---------- SEO helpers ---------- */
const TITLE_SUFFIX_LENGTH = ` | ${SITE_NAME}`.length;

export function fitTitle(title: string): Metadata["title"] {
  return title.length + TITLE_SUFFIX_LENGTH <= 65 ? title : { absolute: title };
}

export function clampDescription(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 100 ? lastSpace : cut.length).replace(/[\s,;:.—(-]+$/, "")}…`;
}

export function formatDateEs(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("es-PE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
