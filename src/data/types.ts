/**
 * Tipos compartidos de Biomagnetistas.com
 * - Directorio: países → ciudades → biomagnetistas
 * - Blog: artículos SEO (HTML en `content`)
 */

export type CountrySlug =
  | "peru"
  | "mexico"
  | "colombia"
  | "argentina"
  | "chile"
  | "ecuador"
  | "bolivia"
  | "venezuela"
  | "guatemala"
  | "costa-rica"
  | "panama"
  | "republica-dominicana"
  | "uruguay"
  | "paraguay"
  | "espana"
  | "estados-unidos";

export interface Country {
  slug: CountrySlug;
  name: string;
  /** Emoji de bandera, p.ej. 🇲🇽 */
  flag: string;
  /** ISO 3166-1 alpha-2 */
  iso: string;
  /** Moneda local para precios referenciales */
  currency: string;
  /** Rango de precio referencial por sesión (texto libre) */
  sessionPrice: string;
  /** Introducción editorial (1–2 párrafos, texto plano) */
  intro: string;
  /** Orden en listados (Perú siempre 1) */
  order: number;
}

export interface City {
  slug: string;
  name: string;
  countrySlug: CountrySlug;
  /** Introducción editorial breve (texto plano) */
  intro: string;
}

export interface Review {
  author: string;
  /** YYYY-MM o texto como "2025" */
  date: string;
  rating: number;
  text: string;
  /** Fuente pública verificable: "Google", "Facebook", "Doctoralia", "Sitio web" */
  source: string;
}

export type Modality = "presencial" | "a-distancia";

export interface Biomagnetista {
  slug: string;
  /** Nombre comercial real del centro o terapeuta */
  name: string;
  countrySlug: CountrySlug;
  citySlug: string;
  district?: string;
  address?: string;
  modalities: Modality[];
  website?: string;
  instagram?: string;
  facebook?: string;
  phone?: string;
  googleMapsUrl?: string;
  /** Rating público verificado (solo si existe fuente) */
  publicRating?: number;
  publicReviewCount?: number;
  publicRatingSource?: string;
  /** Valoración editorial de Biomagnetistas.com (1.0 – 5.0) */
  editorialScore: number;
  specialties: string[];
  /** Precio referencial (si se conoce) */
  priceNote?: string;
  /** Descripción editorial original, 80–160 palabras, texto plano */
  description: string;
  highlights: string[];
  /** Reseñas/testimonios reales y públicos (puede estar vacío) */
  reviews: Review[];
  /** URLs donde se verificó la existencia del negocio */
  sourceUrls: string[];
  /** Prompt para imagen ilustrativa de ambiente (sin rostros ni logos) */
  imagePrompt: string;
  /** Ruta de imagen (se rellena tras generar) */
  image?: string;
  featured?: boolean;
}

export type BlogCategory =
  | "fundamentos"
  | "formacion"
  | "local"
  | "bienestar"
  | "elegir-terapeuta"
  | "comparativas";

export type PrimaryCta = "reserva" | "curso";

export interface BlogArticle {
  slug: string;
  title: string;
  /** <= 60 caracteres */
  seoTitle: string;
  /** 140–158 caracteres */
  metaDescription: string;
  focusKeyword: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string; // YYYY-MM-DD
  updatedAt: string; // YYYY-MM-DD
  readTime: string; // "9 min"
  keyTakeaways: string[];
  toc: { id: string; label: string }[];
  /** HTML semántico: <p>, <h2 id>, <h3>, <ul>, <ol>, <table>, <blockquote>, <a> */
  content: string;
  faqs: { question: string; answer: string }[];
  primaryCta: PrimaryCta;
  relatedCountrySlugs: CountrySlug[];
  /** Slugs de artículos relacionados (deben existir en el mapa de keywords) */
  relatedSlugs: string[];
  imagePrompt: string;
  imageAlt: string;
  pillar?: boolean;
}
