import type { BlogArticle, BlogCategory } from "../types";
import { BLOG_01 } from "./blog-01";
import { BLOG_02 } from "./blog-02";
import { BLOG_03 } from "./blog-03";
import { BLOG_04 } from "./blog-04";
import { BLOG_05 } from "./blog-05";

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  fundamentos: "Fundamentos",
  formacion: "Formación y curso",
  local: "Guías por país y ciudad",
  bienestar: "Bienestar",
  "elegir-terapeuta": "Cómo elegir terapeuta",
  comparativas: "Comparativas",
};

export const ARTICLES: BlogArticle[] = [...BLOG_01, ...BLOG_02, ...BLOG_03, ...BLOG_04, ...BLOG_05].sort(
  (a, b) => b.publishedAt.localeCompare(a.publishedAt),
);

export const ARTICLE_BY_SLUG: Record<string, BlogArticle> = Object.fromEntries(
  ARTICLES.map((a) => [a.slug, a]),
);

export function articleImage(a: BlogArticle) {
  return `/images/blog/${a.slug}.webp`;
}

export function relatedArticles(a: BlogArticle, n = 3): BlogArticle[] {
  const picked = a.relatedSlugs.map((s) => ARTICLE_BY_SLUG[s]).filter(Boolean);
  const fill = ARTICLES.filter(
    (x) => x.slug !== a.slug && x.category === a.category && !picked.includes(x),
  );
  return [...picked, ...fill].slice(0, n);
}

export function articlesForCountry(country: string, n = 4): BlogArticle[] {
  return ARTICLES.filter((a) => a.relatedCountrySlugs.includes(country as never)).slice(0, n);
}
