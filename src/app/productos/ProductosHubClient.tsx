"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Pic from "@/components/Pic";
import {
  PRODUCTO_CLUSTERS,
  type ProductoCluster,
  type ProductoSummary,
} from "@/data/productos";

interface Props {
  articles: ProductoSummary[];
}

const CATEGORY_FILTERS = [
  { id: "ALL", label: "Todas las Categorías" },
  { id: "imanes", label: "🧲 Imanes & Kits" },
  { id: "camilla", label: "🛏️ Camillas & Mobiliario" },
  { id: "cinta", label: "🩹 Cintas 3M & Sujeción" },
  { id: "gauss", label: "📊 Gaussímetros & Polaridad" },
  { id: "higiene", label: "🧴 Higiene, Anatomía & pH" },
];

export default function ProductosHubClient({ articles }: Props) {
  const [selectedCluster, setSelectedCluster] = useState<
    ProductoCluster | "ALL"
  >("ALL");
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      if (selectedCluster !== "ALL" && a.cluster !== selectedCluster) {
        return false;
      }
      if (selectedCategory !== "ALL") {
        const hay = `${a.slug} ${a.title} ${a.brand}`.toLowerCase();
        if (selectedCategory === "imanes") {
          if (
            !hay.includes("iman") &&
            !hay.includes("neodimio") &&
            !hay.includes("ferrita") &&
            !hay.includes("parche") &&
            !hay.includes("maletin") &&
            !hay.includes("estuche") &&
            !hay.includes("forrar")
          ) {
            return false;
          }
        } else if (selectedCategory === "camilla") {
          if (
            !hay.includes("camilla") &&
            !hay.includes("cojin") &&
            !hay.includes("bolster") &&
            !hay.includes("taburete") &&
            !hay.includes("carrito") &&
            !hay.includes("escalon") &&
            !hay.includes("peldano") &&
            !hay.includes("manta")
          ) {
            return false;
          }
        } else if (selectedCategory === "cinta") {
          if (
            !hay.includes("cinta") &&
            !hay.includes("micropore") &&
            !hay.includes("transpore") &&
            !hay.includes("velcro") &&
            !hay.includes("banda") &&
            !hay.includes("pegar") &&
            !hay.includes("sujetar")
          ) {
            return false;
          }
        } else if (selectedCategory === "gauss") {
          if (
            !hay.includes("gauss") &&
            !hay.includes("polaridad") &&
            !hay.includes("polo") &&
            !hay.includes("brujula") &&
            !hay.includes("wt10a") &&
            !hay.includes("espesor")
          ) {
            return false;
          }
        } else if (selectedCategory === "higiene") {
          if (
            !hay.includes("sabana") &&
            !hay.includes("papel") &&
            !hay.includes("toallita") &&
            !hay.includes("desinfect") &&
            !hay.includes("anatom") &&
            !hay.includes("torso") &&
            !hay.includes("ph") &&
            !hay.includes("electrolito") &&
            !hay.includes("antifaz") &&
            !hay.includes("difusor") &&
            !hay.includes("consultorio") &&
            !hay.includes("botiquin") &&
            !hay.includes("zapato")
          ) {
            return false;
          }
        }
      }
      if (!q) return true;
      return (
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.brand.toLowerCase().includes(q) ||
        a.slug.toLowerCase().includes(q)
      );
    });
  }, [articles, selectedCluster, selectedCategory, query]);

  const countsByCluster = useMemo(() => {
    const map: Record<string, number> = { ALL: articles.length };
    for (const a of articles) {
      map[a.cluster] = (map[a.cluster] || 0) + 1;
    }
    return map;
  }, [articles]);

  return (
    <div className="space-y-8">
      {/* Search & Filters */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xs space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700 block">
              🔍 Buscador de Equipamiento para Biomagnetismo
            </span>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
              Explora las {articles.length} Reseñas, Comparativas VS y Guías
            </h2>
          </div>
          <div className="relative w-full md:w-96">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar producto (ej: Neodimio N52, Camilla, 3M Micropore, Gaussímetro)..."
              aria-label="Buscar productos de biomagnetismo"
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-teal-600 focus:bg-white focus:outline-hidden"
            />
          </div>
        </div>

        {/* Cluster Tabs */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedCluster("ALL")}
            className={`rounded-xl px-3.5 py-2 text-xs font-extrabold transition cursor-pointer ${
              selectedCluster === "ALL"
                ? "bg-slate-950 text-amber-400 shadow-xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Todos ({countsByCluster.ALL})
          </button>
          {(Object.keys(PRODUCTO_CLUSTERS) as ProductoCluster[]).map((cl) => (
            <button
              key={cl}
              type="button"
              onClick={() => setSelectedCluster(cl)}
              className={`rounded-xl px-3.5 py-2 text-xs font-extrabold transition cursor-pointer ${
                selectedCluster === cl
                  ? "bg-amber-500 text-slate-950 shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {PRODUCTO_CLUSTERS[cl]} ({countsByCluster[cl] || 0})
            </button>
          ))}
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
          <span className="text-[11px] font-bold text-slate-500 mr-1">
            Línea de Equipo:
          </span>
          {CATEGORY_FILTERS.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-full px-3 py-1 text-xs font-bold transition cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-teal-700 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1">
        <span>
          Mostrando {filtered.length} de {articles.length} análisis y guías de productos
        </span>
        {(selectedCluster !== "ALL" || selectedCategory !== "ALL" || query) && (
          <button
            type="button"
            onClick={() => {
              setSelectedCluster("ALL");
              setSelectedCategory("ALL");
              setQuery("");
            }}
            className="text-teal-700 hover:underline font-extrabold cursor-pointer"
          >
            Limpiar filtros ✕
          </button>
        )}
      </div>

      {/* Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs transition hover:-translate-y-0.5 hover:border-amber-400 hover:shadow-lg"
          >
            <div>
              <Link href={`/productos/${item.slug}/`} className="block relative">
                <Pic
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className="h-44 w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-slate-950/90 px-3 py-1 text-[11px] font-extrabold text-amber-300">
                  {item.badgeLabel}
                </span>
              </Link>

              <div className="p-5">
                <div className="flex items-center justify-between gap-2 text-[11px] font-bold">
                  <span className="text-teal-700 uppercase tracking-wider">
                    {item.clusterLabel}
                  </span>
                  <span className="text-slate-500">{item.readTime}</span>
                </div>

                <h3 className="mt-1.5 text-base font-extrabold leading-snug text-slate-900 group-hover:text-teal-700">
                  <Link href={`/productos/${item.slug}/`}>{item.title}</Link>
                </h3>

                <p className="mt-2 line-clamp-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.excerpt}
                </p>
              </div>
            </div>

            <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-slate-100">
              <span className="text-xs font-bold text-slate-500">
                🏷️ {item.brand}
              </span>
              <Link
                href={`/productos/${item.slug}/`}
                className="inline-flex items-center gap-1 text-xs font-extrabold text-amber-700 group-hover:translate-x-0.5 transition"
              >
                <span>Ver análisis y precio</span>
                <span>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
