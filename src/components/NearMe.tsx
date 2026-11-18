"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Biomagnetista, CountrySlug } from "@/data/types";
import { COUNTRIES, COUNTRY_BY_SLUG } from "@/data/countries";
import ListingCard from "./ListingCard";

const TZ_TO_COUNTRY: Record<string, CountrySlug> = {
  "America/Lima": "peru",
  "America/Mexico_City": "mexico",
  "America/Monterrey": "mexico",
  "America/Merida": "mexico",
  "America/Cancun": "mexico",
  "America/Tijuana": "mexico",
  "America/Chihuahua": "mexico",
  "America/Hermosillo": "mexico",
  "America/Mazatlan": "mexico",
  "America/Bogota": "colombia",
  "America/Argentina/Buenos_Aires": "argentina",
  "America/Argentina/Cordoba": "argentina",
  "America/Argentina/Mendoza": "argentina",
  "America/Buenos_Aires": "argentina",
  "America/Santiago": "chile",
  "America/Guayaquil": "ecuador",
  "America/La_Paz": "bolivia",
  "America/Caracas": "venezuela",
  "America/Guatemala": "guatemala",
  "America/Costa_Rica": "costa-rica",
  "America/Panama": "panama",
  "America/Santo_Domingo": "republica-dominicana",
  "America/Montevideo": "uruguay",
  "America/Asuncion": "paraguay",
  "Europe/Madrid": "espana",
  "Atlantic/Canary": "espana",
  "America/New_York": "estados-unidos",
  "America/Chicago": "estados-unidos",
  "America/Los_Angeles": "estados-unidos",
  "America/Denver": "estados-unidos",
  "America/Phoenix": "estados-unidos",
};

export default function NearMe({ listings }: { listings: Biomagnetista[] }) {
  const [country, setCountry] = useState<CountrySlug | null>(null);

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setCountry(TZ_TO_COUNTRY[tz] ?? null);
    } catch {
      setCountry(null);
    }
  }, []);

  const list = country ? listings.filter((b) => b.countrySlug === country) : [];
  const c = country ? COUNTRY_BY_SLUG[country] : null;

  return (
    <div>
      <div className="rounded-2xl border border-teal-200 bg-teal-50 p-5">
        {c ? (
          <p className="font-bold text-teal-900">
            Parece que estás en {c.flag} {c.name}. Estos son los biomagnetistas recomendados:
          </p>
        ) : (
          <p className="font-bold text-teal-900">Elige tu país para ver los biomagnetistas recomendados:</p>
        )}
        <div className="mt-3 flex flex-wrap gap-2">
          {COUNTRIES.map((x) => (
            <button
              key={x.slug}
              onClick={() => setCountry(x.slug)}
              className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                country === x.slug ? "bg-teal-700 text-white" : "bg-white text-slate-700"
              }`}
            >
              {x.flag} {x.name}
            </button>
          ))}
        </div>
      </div>
      {c && (
        <>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((b, i) => (
              <ListingCard key={b.slug} b={b} rank={i + 1} />
            ))}
          </div>
          <p className="mt-6 text-sm">
            <Link href={`/pais/${c.slug}/`} className="font-bold text-teal-700 underline">
              Ver el ranking completo de {c.name} →
            </Link>
          </p>
        </>
      )}
    </div>
  );
}
