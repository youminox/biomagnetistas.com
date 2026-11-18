import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { COUNTRIES, CITIES } from "@/data/countries";
import { BIOMAGNETISTAS } from "@/data/biomagnetistas";
import { ARTICLES } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-11-17");
  const staticPages = [
    "", "/blog/", "/curso-biomagnetismo-online/", "/biomagnetista-cerca-de-mi/", "/nosotros/", "/metodologia/",
    "/contacto/", "/aviso-medico/", "/divulgacion-de-afiliados/", "/aviso-legal/", "/politica-de-privacidad/", "/politica-de-cookies/",
  ].map((p) => ({ url: `${SITE_URL}${p || "/"}`, lastModified: now, priority: p === "" ? 1 : 0.5 }));
  return [
    ...staticPages,
    ...COUNTRIES.map((c) => ({ url: `${SITE_URL}/pais/${c.slug}/`, lastModified: now, priority: 0.9 })),
    ...CITIES.map((c) => ({ url: `${SITE_URL}/ciudad/${c.slug}/`, lastModified: now, priority: 0.8 })),
    ...BIOMAGNETISTAS.map((b) => ({ url: `${SITE_URL}/biomagnetista/${b.slug}/`, lastModified: now, priority: b.featured ? 0.9 : 0.6 })),
    ...ARTICLES.map((a) => ({ url: `${SITE_URL}/blog/${a.slug}/`, lastModified: new Date(a.updatedAt), priority: a.pillar ? 0.9 : 0.7 })),
  ];
}
