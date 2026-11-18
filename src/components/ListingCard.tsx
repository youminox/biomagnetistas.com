import Pic from "./Pic";
import Link from "next/link";
import type { Biomagnetista } from "@/data/types";
import { COUNTRY_BY_SLUG, CITY_BY_SLUG } from "@/data/countries";
import { imageFor } from "@/data/biomagnetistas";
import Stars from "./Stars";

export default function ListingCard({ b, rank }: { b: Biomagnetista; rank?: number }) {
  const country = COUNTRY_BY_SLUG[b.countrySlug];
  const city = CITY_BY_SLUG[b.citySlug];
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg ${
        b.featured ? "border-amber-300 ring-2 ring-amber-200" : "border-slate-200"
      }`}
    >
      <Link href={`/biomagnetista/${b.slug}/`} className="relative block">
        <Pic
          src={imageFor(b)}
          alt={`${b.name} — biomagnetista en ${city?.name ?? ""}, ${country?.name ?? ""}`}
          className="h-48 w-full object-cover"
        />
        {rank && (
          <span className="absolute left-3 top-3 rounded-full bg-slate-900/90 px-3 py-1 text-xs font-black text-white">
            #{rank}
          </span>
        )}
        {b.featured && (
          <span className="absolute right-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-[11px] font-black uppercase text-slate-900">
            ★ Recomendado n.º 1
          </span>
        )}
        <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-slate-800">
          {country?.flag} {city?.name}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-extrabold leading-snug text-slate-900">
          <Link href={`/biomagnetista/${b.slug}/`} className="hover:text-teal-700">
            {b.name}
          </Link>
        </h3>
        <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
          <Stars value={b.editorialScore} size="sm" label="valoración editorial" />
          {b.publicRating && b.publicReviewCount ? (
            <span className="text-xs text-slate-500">
              {b.publicRating.toFixed(1)}★ en {b.publicRatingSource} ({b.publicReviewCount})
            </span>
          ) : null}
        </div>
        {b.district && <p className="mt-1 text-xs text-slate-500">📍 {b.district}</p>}
        <p className="mt-3 line-clamp-3 text-sm text-slate-600">{b.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {b.modalities.map((m) => (
            <span key={m} className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
              {m === "presencial" ? "Presencial" : "A distancia"}
            </span>
          ))}
        </div>
        <Link
          href={`/biomagnetista/${b.slug}/`}
          className={`mt-4 block rounded-xl py-2.5 text-center text-sm font-bold ${
            b.featured ? "bg-teal-700 text-white hover:bg-teal-800" : "bg-slate-100 text-slate-800 hover:bg-slate-200"
          }`}
        >
          Ver ficha completa
        </Link>
      </div>
    </article>
  );
}
