import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import BensSpotlight from "@/components/BensSpotlight";
import ListingCard from "@/components/ListingCard";
import { CITIES, CITY_BY_SLUG, COUNTRY_BY_SLUG, citiesOf } from "@/data/countries";
import { byCity } from "@/data/biomagnetistas";
import { SITE_URL, clampDescription, fitTitle } from "@/lib/site";

export function generateStaticParams() {
  return CITIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const city = CITY_BY_SLUG[slug];
  if (!city) return {};
  const country = COUNTRY_BY_SLUG[city.countrySlug];
  const title =
    city.slug === "lima"
      ? "Biomagnetismo en Lima: biomagnetista recomendado (Surco)"
      : `Biomagnetistas en ${city.name}: los mejores de 2026`;
  const description = `${title}. ${city.intro} Precios referenciales: ${country.sessionPrice}.`;
  return {
    title: fitTitle(title),
    description: clampDescription(description),
    alternates: { canonical: `${SITE_URL}/ciudad/${city.slug}/` },
  };
}

export default async function CityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const city = CITY_BY_SLUG[slug];
  if (!city) notFound();
  const country = COUNTRY_BY_SLUG[city.countrySlug];
  const listings = byCity(city.slug);
  const isLima = city.slug === "lima";
  const siblings = citiesOf(country.slug).filter((c) => c.slug !== city.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumbs
        items={[{ label: `${country.flag} ${country.name}`, href: `/pais/${country.slug}/` }, { label: city.name }]}
      />
      <header className="mt-6 max-w-4xl">
        <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-5xl">
          {isLima ? "Biomagnetismo en Lima: el biomagnetista que recomendamos" : `Mejores biomagnetistas en ${city.name}`}{" "}
          {country.flag}
        </h1>
        <p className="mt-4 text-lg text-slate-600">{city.intro}</p>
        <p className="mt-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
          💰 {country.sessionPrice}
        </p>
      </header>

      <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {listings.map((b, i) => (
          <ListingCard key={b.slug} b={b} rank={i + 1} />
        ))}
      </section>
      {listings.length === 0 && (
        <p className="mt-6 rounded-xl bg-slate-50 p-5 text-slate-600">
          Aún estamos verificando biomagnetistas en {city.name}. Revisa el{" "}
          <Link href={`/pais/${country.slug}/`} className="font-bold text-teal-700 underline">
            ranking de {country.name}
          </Link>{" "}
          o aprende a aplicarlo con el curso online.
        </p>
      )}

      <section className="mt-14">
        <BensSpotlight variant="home" campaign={`ciudad-${city.slug}`} primary={isLima ? "reserva" : "curso"} />
      </section>

      {siblings.length > 0 && (
        <section className="mt-12">
          <h2 className="text-xl font-black text-slate-900">Otras ciudades de {country.name}</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {siblings.map((s) => (
              <Link
                key={s.slug}
                href={`/ciudad/${s.slug}/`}
                className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-teal-50"
              >
                📍 {s.name}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
