import Pic from "@/components/Pic";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import BensSpotlight from "@/components/BensSpotlight";
import ListingCard from "@/components/ListingCard";
import ArticleCard from "@/components/ArticleCard";
import { COUNTRIES, COUNTRY_BY_SLUG, citiesOf } from "@/data/countries";
import { byCountry, byCity } from "@/data/biomagnetistas";
import { articlesForCountry } from "@/data/blog";
import type { CountrySlug } from "@/data/types";
import { BENS, DEFAULT_OG_IMAGE, SITE_URL, clampDescription, fitTitle } from "@/lib/site";

export function generateStaticParams() {
  return COUNTRIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = COUNTRY_BY_SLUG[slug as CountrySlug];
  if (!c) return {};
  const title =
    c.slug === "peru"
      ? "Biomagnetismo en Perú: el biomagnetista recomendado en Lima"
      : `Mejores biomagnetistas en ${c.name} (ranking 2026)`;
  const description =
    c.slug === "peru"
      ? "Biomagnetismo en Perú: conoce a Biomagnetismo Bens (Surco, Lima), el centro recomendado. Precios referenciales, cómo es la sesión y reserva online."
      : `Ranking de biomagnetistas en ${c.name} ${c.flag}: centros por ciudad, valoraciones, precios referenciales (${c.sessionPrice}) y cómo elegir terapeuta.`;
  return {
    title: fitTitle(title),
    description: clampDescription(description),
    alternates: { canonical: `${SITE_URL}/pais/${c.slug}/` },
    openGraph: {
      title,
      description: clampDescription(description),
      url: `${SITE_URL}/pais/${c.slug}/`,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function CountryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = COUNTRY_BY_SLUG[slug as CountrySlug];
  if (!c) notFound();
  const listings = byCountry(c.slug);
  const cities = citiesOf(c.slug);
  const articles = articlesForCountry(c.slug, 6);
  const isPeru = c.slug === "peru";

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: isPeru ? "Biomagnetista recomendado en Perú" : `Mejores biomagnetistas en ${c.name}`,
    itemListElement: listings.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE_URL}/biomagnetista/${b.slug}/`,
      name: b.name,
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={[{ label: `${c.flag} ${c.name}` }]} />

      <header className="mt-6 max-w-4xl">
        <p className="text-5xl">{c.flag}</p>
        <h1 className="mt-3 text-3xl font-black leading-tight text-slate-900 md:text-5xl">
          {isPeru ? "Biomagnetismo en Perú: el centro que recomendamos" : `Mejores biomagnetistas en ${c.name}`}
        </h1>
        <p className="mt-4 text-lg text-slate-600">{c.intro}</p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">
            💰 {c.sessionPrice}
          </span>
          {!isPeru && (
            <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-700">
              📋 {listings.length} biomagnetistas verificados
            </span>
          )}
        </div>
      </header>

      {cities.length > 1 && (
        <nav className="mt-8 flex flex-wrap gap-2">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/ciudad/${city.slug}/`}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-teal-500 hover:text-teal-700"
            >
              📍 {city.name} ({byCity(city.slug).length})
            </Link>
          ))}
        </nav>
      )}

      <section className="mt-10">
        <h2 className="text-2xl font-black text-slate-900">
          {isPeru ? "Biomagnetista recomendado en Lima" : `Ranking de biomagnetistas en ${c.name}`}
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((b, i) => (
            <ListingCard key={b.slug} b={b} rank={i + 1} />
          ))}
        </div>
        {listings.length === 0 && (
          <p className="mt-4 rounded-xl bg-slate-50 p-5 text-slate-600">
            Estamos verificando biomagnetistas en {c.name}. Mientras tanto, puedes aprender a aplicar el biomagnetismo
            con el curso online recomendado.
          </p>
        )}
      </section>

      {isPeru && (
        <section className="mt-12 grid gap-8 rounded-3xl bg-slate-50 p-6 md:grid-cols-2 md:p-10">
          <div>
            <h2 className="text-2xl font-black text-slate-900">¿Por qué recomendamos solo a Biomagnetismo Bens en Perú?</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li>✅ <strong>Trayectoria verificable:</strong> {BENS.years} años y {BENS.therapies} terapias aplicadas.</li>
              <li>✅ <strong>Proceso claro:</strong> conversación inicial, revisión en camilla, imanes sobre la ropa (~10 min) y cierre con preguntas.</li>
              <li>✅ <strong>Honestidad:</strong> explica que la práctica no sustituye la evaluación médica.</li>
              <li>✅ <strong>Reserva online</strong> con calendario y confirmación por correo.</li>
              <li>✅ <strong>Formador de terapeutas:</strong> su curso online es referencia en Latinoamérica.</li>
            </ul>
          </div>
          <Pic
            src="/images/bens/terapia-imanes-bens-surco.jpg"
            alt="Terapia de biomagnetismo en el consultorio de Biomagnetismo Bens en Surco"
            className="h-full w-full rounded-2xl object-cover"
          />
        </section>
      )}

      <section className="mt-14">
        <h2 className="mb-6 text-2xl font-black text-slate-900">
          {isPeru ? "Reserva o aprende con Bens" : `¿No encuentras biomagnetista cerca en ${c.name}? Aprende online`}
        </h2>
        <BensSpotlight variant="home" campaign={`pais-${c.slug}`} primary={isPeru ? "reserva" : "curso"} />
      </section>

      {articles.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-black text-slate-900">Guías relacionadas</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <ArticleCard key={a.slug} a={a} />
            ))}
          </div>
        </section>
      )}

      <section className="mt-14">
        <h2 className="text-xl font-black text-slate-900">Otros países</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {COUNTRIES.filter((x) => x.slug !== c.slug).map((x) => (
            <Link
              key={x.slug}
              href={`/pais/${x.slug}/`}
              className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-teal-50"
            >
              {x.flag} {x.name}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
