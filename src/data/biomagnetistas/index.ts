import type { Biomagnetista, CountrySlug } from "../types";
import { BENS_LISTING } from "./bens";
import { BIOMAGNETISTAS_MX_CA } from "./region-mx-ca";
import { BIOMAGNETISTAS_ANDINA } from "./region-andina";
import { BIOMAGNETISTAS_SUR_ES_US } from "./region-sur-es-us";

const OTHERS: Biomagnetista[] = [
  ...BIOMAGNETISTAS_MX_CA,
  ...BIOMAGNETISTAS_ANDINA,
  ...BIOMAGNETISTAS_SUR_ES_US,
]
  // Regla de negocio: en Perú solo Bens.
  .filter((b) => b.countrySlug !== "peru")
  .map((b) => ({ ...b, editorialScore: Math.min(b.editorialScore, 4.8) }));

export const BIOMAGNETISTAS: Biomagnetista[] = [BENS_LISTING, ...OTHERS];

export const BIOMAGNETISTA_BY_SLUG: Record<string, Biomagnetista> = Object.fromEntries(
  BIOMAGNETISTAS.map((b) => [b.slug, b]),
);

function rank(list: Biomagnetista[]) {
  return [...list].sort(
    (a, b) =>
      Number(!!b.featured) - Number(!!a.featured) ||
      b.editorialScore - a.editorialScore ||
      (b.publicReviewCount ?? 0) - (a.publicReviewCount ?? 0),
  );
}

export function byCountry(country: CountrySlug) {
  return rank(BIOMAGNETISTAS.filter((b) => b.countrySlug === country));
}

export function byCity(city: string) {
  return rank(BIOMAGNETISTAS.filter((b) => b.citySlug === city));
}

/** Versión ligera para componentes cliente (reduce el HTML/JS de la home). */
export function slim(b: Biomagnetista): Biomagnetista {
  return {
    slug: b.slug,
    name: b.name,
    countrySlug: b.countrySlug,
    citySlug: b.citySlug,
    district: b.district,
    modalities: b.modalities,
    editorialScore: b.editorialScore,
    publicRating: b.publicRating,
    publicReviewCount: b.publicReviewCount,
    publicRatingSource: b.publicRatingSource,
    specialties: b.specialties.slice(0, 3),
    description: b.description.length > 170 ? `${b.description.slice(0, 167)}…` : b.description,
    highlights: [],
    reviews: [],
    sourceUrls: [],
    imagePrompt: "",
    image: b.image,
    featured: b.featured,
  };
}

export function imageFor(b: Biomagnetista) {
  return b.image ?? `/images/biomagnetistas/${b.slug}.webp`;
}
