import {
  PRODUCTO_CLUSTERS,
  type ProductoArticle,
  type ProductoCluster,
  type ProductoSeed,
  type ProductoSummary,
} from "./types";
import { PRODUCTOS_01 } from "./productos-01";
import { PRODUCTOS_02 } from "./productos-02";
import { PRODUCTOS_03 } from "./productos-03";
import { PRODUCTOS_04 } from "./productos-04";
import { PRODUCTOS_05 } from "./productos-05";

export {
  PRODUCTO_CLUSTERS,
  type ProductoArticle,
  type ProductoCluster,
  type ProductoSeed,
  type ProductoSummary,
};

export const ALL_PRODUCTOS_SEEDS: ProductoSeed[] = [
  ...PRODUCTOS_01,
  ...PRODUCTOS_02,
  ...PRODUCTOS_03,
  ...PRODUCTOS_04,
  ...PRODUCTOS_05,
];

function slugifyHeading(text: string, idx: number): string {
  const clean = text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return clean || `seccion-${idx + 1}`;
}

function renderParagraphsHtml(paragraphs: string[]): string {
  return paragraphs
    .map((p) => {
      if (p.includes("\n")) {
        const lines = p
          .split("\n")
          .map((l) => l.trim())
          .filter(Boolean);
        const listItems = lines.filter((l) => l.startsWith("•") || /^\d+\)/.test(l));
        if (listItems.length >= 2) {
          return `<ul>${lines
            .map((l) => `<li>${l.replace(/^(•|\d+\))\s*/, "")}</li>`)
            .join("")}</ul>`;
        }
      }
      return `<p>${p}</p>`;
    })
    .join("\n");
}

function hydrateProductoArticle(seed: ProductoSeed): ProductoArticle {
  const toc = seed.sections.map((sec, idx) => ({
    id: slugifyHeading(sec.heading, idx),
    label: sec.heading,
  }));

  const splitIndex = Math.max(1, Math.ceil(seed.sections.length / 2));

  const firstSections = seed.sections.slice(0, splitIndex);
  const secondSections = seed.sections.slice(splitIndex);

  const contentFirstHalf = firstSections
    .map((sec, idx) => {
      const id = toc[idx].id;
      return `<section id="${id}"><h2>${sec.heading}</h2>${renderParagraphsHtml(
        sec.paragraphs
      )}</section>`;
    })
    .join("\n");

  const contentSecondHalf = secondSections
    .map((sec, idx) => {
      const id = toc[splitIndex + idx].id;
      return `<section id="${id}"><h2>${sec.heading}</h2>${renderParagraphsHtml(
        sec.paragraphs
      )}</section>`;
    })
    .join("\n");

  return {
    ...seed,
    clusterLabel: PRODUCTO_CLUSTERS[seed.cluster],
    toc,
    contentFirstHalf,
    contentSecondHalf,
  };
}

let cachedArticles: ProductoArticle[] | null = null;

export function getAllProductosArticles(): ProductoArticle[] {
  if (!cachedArticles) {
    cachedArticles = ALL_PRODUCTOS_SEEDS.map(hydrateProductoArticle);
  }
  return cachedArticles;
}

export function getAllProductosSummaries(): ProductoSummary[] {
  return getAllProductosArticles().map((a) => ({
    id: a.id,
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    cluster: a.cluster,
    clusterLabel: a.clusterLabel,
    brand: a.brand,
    badgeLabel: a.badgeLabel,
    imageUrl: a.imageUrl,
    imageAlt: a.imageAlt,
    readTime: a.readTime,
    publishedAt: a.publishedAt,
    updatedAt: a.updatedAt,
  }));
}

export function getProductoBySlug(slug: string): ProductoArticle | undefined {
  return getAllProductosArticles().find((a) => a.slug === slug);
}

export function getRelatedProductos(
  currentSlug: string,
  limit = 4
): ProductoSummary[] {
  const all = getAllProductosSummaries();
  const current = all.find((a) => a.slug === currentSlug);
  if (!current) return all.slice(0, limit);

  const sameCluster = all.filter(
    (a) => a.slug !== currentSlug && a.cluster === current.cluster
  );
  const others = all.filter(
    (a) => a.slug !== currentSlug && a.cluster !== current.cluster
  );

  return [...sameCluster, ...others].slice(0, limit);
}
