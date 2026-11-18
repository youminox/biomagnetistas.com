"use client";

import { useMemo, useState } from "react";
import type { Biomagnetista, CountrySlug } from "@/data/types";
import { COUNTRIES, CITY_BY_SLUG } from "@/data/countries";
import ListingCard from "./ListingCard";

interface Props {
  listings: Biomagnetista[];
  initialCountry?: CountrySlug | "all";
  limit?: number;
}

const norm = (s: string) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

export default function DirectoryExplorer({ listings, initialCountry = "all", limit = 12 }: Props) {
  const [country, setCountry] = useState<CountrySlug | "all">(initialCountry);
  const [q, setQ] = useState("");
  const [showAll, setShowAll] = useState(false);

  const results = useMemo(() => {
    const nq = norm(q.trim());
    return listings.filter((b) => {
      if (country !== "all" && b.countrySlug !== country) return false;
      if (!nq) return true;
      const city = CITY_BY_SLUG[b.citySlug]?.name ?? "";
      return norm(`${b.name} ${city} ${b.district ?? ""} ${b.specialties.join(" ")}`).includes(nq);
    });
  }, [listings, country, q]);

  const visible = showAll ? results : results.slice(0, limit);

  return (
    <div>
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <label className="sr-only" htmlFor="q">
          Buscar biomagnetista
        </label>
        <input
          id="q"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Busca por ciudad, distrito o nombre (ej. Lima, Bogotá, Madrid)…"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-teal-600"
        />
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setCountry("all")}
            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-bold ${
              country === "all" ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700"
            }`}
          >
            🌎 Todos
          </button>
          {COUNTRIES.map((c) => (
            <button
              key={c.slug}
              onClick={() => setCountry(c.slug)}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-bold ${
                country === c.slug ? "bg-teal-700 text-white" : "bg-slate-100 text-slate-700"
              }`}
            >
              {c.flag} {c.name}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500">{results.length} biomagnetistas encontrados</p>
      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((b, i) => (
          <ListingCard key={b.slug} b={b} rank={i + 1} />
        ))}
      </div>
      {results.length > limit && !showAll && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50"
          >
            Ver los {results.length} biomagnetistas
          </button>
        </div>
      )}
    </div>
  );
}
