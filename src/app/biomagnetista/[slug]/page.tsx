import Pic from "@/components/Pic";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import BensSpotlight from "@/components/BensSpotlight";
import ListingCard from "@/components/ListingCard";
import Stars from "@/components/Stars";
import { CITY_BY_SLUG, COUNTRY_BY_SLUG } from "@/data/countries";
import { BIOMAGNETISTAS, BIOMAGNETISTA_BY_SLUG, byCity, byCountry, imageFor } from "@/data/biomagnetistas";
import { SITE_NAME, SITE_URL, clampDescription, cursoLink, fitTitle, reservaLink } from "@/lib/site";

export function generateStaticParams() {
  return BIOMAGNETISTAS.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const b = BIOMAGNETISTA_BY_SLUG[slug];
  if (!b) return {};
  const city = CITY_BY_SLUG[b.citySlug];
  const cityName = city?.name ?? "";
  const candidates = [`${b.name}: biomagnetista en ${cityName}`, `${b.name} (${cityName})`, `${b.name}`];
  const title = b.featured
    ? "Biomagnetismo Bens (Surco, Lima): opiniones y reserva"
    : (candidates.find((t) => t.length <= 62) ?? candidates[2]);
  return {
    title: fitTitle(title),
    description: clampDescription(b.description),
    alternates: { canonical: `${SITE_URL}/biomagnetista/${b.slug}/` },
    openGraph: { title, images: [`${SITE_URL}${imageFor(b)}`] },
  };
}

const BENS_GALLERY = [
  { src: "/images/bens/sesion-biomagnetismo-bens-lima.jpg", alt: "Sesión de biomagnetismo en camilla con imanes sobre la ropa" },
  { src: "/images/bens/terapia-imanes-bens-surco.jpg", alt: "Imanes de biomagnetismo durante una terapia en Surco" },
  { src: "/images/bens/bencio-lingan-biomagnetista.png", alt: "Bencio Lingán sosteniendo un par biomagnético" },
  { src: "/images/bens/curso-biomagnetismo-online-bens.jpg", alt: "Curso completo de biomagnetismo online de Bens" },
  { src: "/images/bens/manual-biomagnetismo-bens.jpg", alt: "Manual completo de biomagnetismo de Biomagnetismo Bens" },
  { src: "/images/bens/imanes-para-casa-bens.jpg", alt: "Guía visual Imanes para Casa de Biomagnetismo Bens" },
];

export default async function ListingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const b = BIOMAGNETISTA_BY_SLUG[slug];
  if (!b) notFound();
  const country = COUNTRY_BY_SLUG[b.countrySlug];
  const city = CITY_BY_SLUG[b.citySlug];
  const others = (byCity(b.citySlug).length > 1 ? byCity(b.citySlug) : byCountry(b.countrySlug))
    .filter((x) => x.slug !== b.slug)
    .slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": `${SITE_URL}/biomagnetista/${b.slug}/#business`,
    name: b.name,
    description: b.description,
    image: `${SITE_URL}${imageFor(b)}`,
    url: b.website ?? `${SITE_URL}/biomagnetista/${b.slug}/`,
    ...(b.phone ? { telephone: b.phone } : {}),
    address: {
      "@type": "PostalAddress",
      ...(b.address ? { streetAddress: b.address } : {}),
      addressLocality: city?.name,
      addressCountry: country.iso,
    },
    sameAs: [b.website, b.instagram, b.facebook].filter(Boolean),
    review: {
      "@type": "Review",
      author: { "@type": "Organization", name: SITE_NAME },
      reviewRating: { "@type": "Rating", ratingValue: b.editorialScore, bestRating: 5, worstRating: 1 },
      reviewBody: b.description,
    },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs
        items={[
          { label: `${country.flag} ${country.name}`, href: `/pais/${country.slug}/` },
          { label: city?.name ?? "", href: `/ciudad/${b.citySlug}/` },
          { label: b.name },
        ]}
      />

      <div className="mt-6 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {b.featured && (
            <span className="inline-block rounded-full bg-amber-400 px-3 py-1 text-xs font-black uppercase text-slate-900">
              🏆 Biomagnetista recomendado n.º 1 en {country.name}
            </span>
          )}
          <h1 className="mt-3 text-3xl font-black leading-tight text-slate-900 md:text-4xl">{b.name}</h1>
          <p className="mt-2 text-slate-500">
            {country.flag} {b.district ? `${b.district}, ` : ""}
            {city?.name}, {country.name}
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-4">
            <Stars value={b.editorialScore} size="lg" label="Valoración editorial" />
            {b.publicRating && b.publicReviewCount ? (
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                {b.publicRating.toFixed(1)}★ · {b.publicReviewCount} reseñas en {b.publicRatingSource}
              </span>
            ) : null}
          </div>

          <Pic
            src={imageFor(b)}
            alt={`${b.name}, biomagnetismo en ${city?.name}`}
            className="mt-6 h-80 w-full rounded-2xl object-cover md:h-[28rem]"
            priority
            sizes="(max-width: 1024px) 100vw, 820px"
          />
          {!b.featured && (
            <p className="mt-2 text-xs text-slate-500">Imagen ilustrativa de ambiente. No corresponde al local.</p>
          )}

          <section className="mt-8">
            <h2 className="text-2xl font-black text-slate-900">Nuestra opinión</h2>
            <p className="mt-3 leading-relaxed text-slate-700">{b.description}</p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {b.highlights.map((h) => (
                <li key={h} className="rounded-xl bg-teal-50 px-4 py-3 text-sm font-semibold text-teal-900">
                  ✓ {h}
                </li>
              ))}
            </ul>
          </section>

          {b.featured && (
            <>
              <section className="mt-10">
                <h2 className="text-2xl font-black text-slate-900">Fotos reales de Biomagnetismo Bens</h2>
                <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3">
                  {BENS_GALLERY.map((g) => (
                    <Pic
                      key={g.src}
                      src={g.src}
                      alt={g.alt}
                      className="h-48 w-full rounded-xl bg-slate-50 object-cover"
                      sizes="(max-width: 768px) 50vw, 280px"
                    />
                  ))}
                </div>
              </section>
              <section className="mt-10">
                <h2 className="text-2xl font-black text-slate-900">Cómo es una sesión con Bens</h2>
                <ol className="mt-4 space-y-3">
                  {[
                    ["Comenzamos escuchándote", "Conversación sobre el motivo de tu visita y tus preguntas."],
                    ["Revisión en camilla", "Recostado, se realiza el procedimiento de revisión (rastreo)."],
                    ["Aplicación de imanes", "Los imanes se colocan sobre la ropa durante unos 10 minutos."],
                    ["Cierre", "Espacio para resolver dudas e indicaciones finales."],
                  ].map(([t, d], i) => (
                    <li key={t} className="flex gap-4 rounded-xl border border-slate-200 p-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-700 text-sm font-black text-white">
                        {i + 1}
                      </span>
                      <span>
                        <strong className="text-slate-900">{t}.</strong> <span className="text-slate-600">{d}</span>
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 text-xs text-slate-500">
                  Esta práctica no sustituye una evaluación médica ni los tratamientos indicados por profesionales de
                  salud.
                </p>
              </section>
            </>
          )}

          <section className="mt-10">
            <h2 className="text-2xl font-black text-slate-900">Especialidades y modalidad</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {b.specialties.map((s) => (
                <span key={s} className="rounded-full border border-slate-200 px-3 py-1.5 text-sm text-slate-700">
                  {s}
                </span>
              ))}
              {b.modalities.map((m) => (
                <span key={m} className="rounded-full bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white">
                  {m === "presencial" ? "Presencial" : "A distancia"}
                </span>
              ))}
            </div>
            {b.priceNote && <p className="mt-4 text-sm text-slate-600">💰 {b.priceNote}</p>}
          </section>

          {b.reviews.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-black text-slate-900">Opiniones públicas</h2>
              <div className="mt-4 space-y-4">
                {b.reviews.map((r, i) => (
                  <blockquote key={i} className="rounded-xl border border-slate-200 p-5">
                    <Stars value={r.rating} size="sm" />
                    <p className="mt-2 text-slate-700">“{r.text}”</p>
                    <footer className="mt-2 text-xs text-slate-500">
                      — {r.author} · {r.date} · vía {r.source}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </section>
          )}

          <section className="mt-12">
            <BensSpotlight
              variant="article"
              campaign={`ficha-${b.slug}`}
              primary={b.countrySlug === "peru" ? "reserva" : "curso"}
            />
          </section>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h2 className="font-black text-slate-900">Datos de contacto</h2>
            <dl className="mt-4 space-y-3 text-sm">
              {b.address && (
                <div>
                  <dt className="font-semibold text-slate-500">Dirección</dt>
                  <dd className="text-slate-800">{b.address}</dd>
                </div>
              )}
              {b.phone && (
                <div>
                  <dt className="font-semibold text-slate-500">Teléfono</dt>
                  <dd className="text-slate-800">{b.phone}</dd>
                </div>
              )}
            </dl>
            <div className="mt-5 space-y-2">
              {b.featured ? (
                <>
                  <a
                    href={reservaLink(`ficha-${b.slug}-aside`)}
                    target="_blank"
                    rel="sponsored noopener"
                    className="block rounded-xl bg-teal-700 py-3 text-center text-sm font-extrabold text-white hover:bg-teal-800"
                  >
                    Reservar cita →
                  </a>
                  <a
                    href={cursoLink(`ficha-${b.slug}-aside`)}
                    target="_blank"
                    rel="sponsored noopener"
                    className="block rounded-xl bg-red-600 py-3 text-center text-sm font-extrabold text-white hover:bg-red-500"
                  >
                    🎓 Ver curso online
                  </a>
                </>
              ) : (
                b.website && (
                  <a
                    href={b.website}
                    target="_blank"
                    rel="nofollow noopener"
                    className="block rounded-xl bg-slate-900 py-3 text-center text-sm font-bold text-white"
                  >
                    Sitio web ↗
                  </a>
                )
              )}
              {b.instagram && (
                <a
                  href={b.instagram}
                  target="_blank"
                  rel={b.featured ? "noopener" : "nofollow noopener"}
                  className="block rounded-xl border border-slate-300 py-3 text-center text-sm font-bold text-slate-800"
                >
                  Instagram ↗
                </a>
              )}
              {b.facebook && (
                <a
                  href={b.facebook}
                  target="_blank"
                  rel="nofollow noopener"
                  className="block rounded-xl border border-slate-300 py-3 text-center text-sm font-bold text-slate-800"
                >
                  Facebook ↗
                </a>
              )}
              {b.googleMapsUrl && (
                <a
                  href={b.googleMapsUrl}
                  target="_blank"
                  rel="nofollow noopener"
                  className="block rounded-xl border border-slate-300 py-3 text-center text-sm font-bold text-slate-800"
                >
                  Ver en Google Maps ↗
                </a>
              )}
            </div>
            <p className="mt-4 text-[11px] text-slate-500">
              Datos públicos verificados en noviembre de 2026.{" "}
              <Link href="/metodologia/" className="underline">
                Metodología
              </Link>
            </p>
          </div>
          {!b.featured && <BensSpotlight variant="sidebar" campaign={`ficha-${b.slug}-side`} primary="curso" />}
        </aside>
      </div>

      {others.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-black text-slate-900">Otros biomagnetistas en {country.name}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <ListingCard key={o.slug} b={o} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
