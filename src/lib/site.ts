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
const MAX_TITLE = 62;

/** Devuelve un título ≤ ~62 caracteres: con sufijo de marca si cabe, si no absoluto y recortado. */
export function fitTitle(title: string): Metadata["title"] {
  if (title.length + TITLE_SUFFIX_LENGTH <= 65) return title;
  if (title.length <= MAX_TITLE) return { absolute: title };
  const cut = title.slice(0, MAX_TITLE - 1);
  const last = cut.lastIndexOf(" ");
  return { absolute: `${cut.slice(0, last > 40 ? last : cut.length).replace(/[\s,;:.—(|-]+$/, "")}…` };
}

export const DEFAULT_OG_IMAGE = {
  url: "https://biomagnetistas.com/images/bens/terapia-imanes-bens-surco.jpg",
  width: 1200,
  height: 680,
  alt: "Terapia de biomagnetismo con imanes sobre la ropa",
};

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
