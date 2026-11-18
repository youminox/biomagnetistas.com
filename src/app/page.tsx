import Pic from "@/components/Pic";
import Link from "next/link";
import BensSpotlight from "@/components/BensSpotlight";
import DirectoryExplorer from "@/components/DirectoryExplorer";
import ArticleCard from "@/components/ArticleCard";
import Stars from "@/components/Stars";
import { COUNTRIES } from "@/data/countries";
import { BIOMAGNETISTAS, byCountry, slim } from "@/data/biomagnetistas";
import { ARTICLES } from "@/data/blog";
import { BENS, SITE_URL, cursoLink, reservaLink } from "@/lib/site";

const FAQS = [
  {
    q: "¿Qué es un biomagnetista?",
    a: "Es un terapeuta que aplica el Par Biomagnético: identifica puntos del cuerpo mediante rastreo y coloca pares de imanes de mediana intensidad, generalmente sobre la ropa. Es una terapia complementaria y no sustituye la atención médica.",
  },
  {
    q: "¿Cuál es el mejor biomagnetista en Lima?",
    a: "Nuestra recomendación en Perú es Biomagnetismo Bens, dirigido por Bencio Lingán en Santiago de Surco, con más de 7 años de experiencia y más de 20.000 terapias. La reserva se hace online.",
  },
  {
    q: "¿Cómo elaboran el ranking de Biomagnetistas.com?",
    a: "Valoramos trayectoria verificable, formación, transparencia sobre los límites de la terapia, información pública disponible, facilidad de reserva y opiniones públicas cuando existen. Explicamos todo en nuestra página de metodología.",
  },
  {
    q: "¿Puedo aprender biomagnetismo online?",
    a: "Sí. El Curso Completo de Biomagnetismo de Bencio Lingán enseña desde cero con 7 módulos, manual, comunidad privada y acompañamiento en vivo por Zoom durante un año.",
  },
  {
    q: "¿Cuánto cuesta una sesión de biomagnetismo?",
    a: "Depende del país: en Lima suele estar entre S/ 100 y S/ 250, en México entre MX$ 500 y 1.500 y en España entre 50 y 90 €. Revisa la página de cada país para ver precios referenciales.",
  },
];

export default function HomePage() {
  const latest = ARTICLES.slice(0, 6);
  const totalByCountry = Object.fromEntries(COUNTRIES.map((c) => [c.slug, byCountry(c.slug).length]));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        name: "Mejores biomagnetistas de Latinoamérica, España y EE.UU.",
        itemListElement: BIOMAGNETISTAS.slice(0, 20).map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/biomagnetista/${b.slug}/`,
          name: b.name,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <Pic
          src="/images/brand/hero-home.webp"
          alt="Consultorio de biomagnetismo con imanes rojo y negro sobre una camilla"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          priority
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-200">
            Guía 2026 · 16 países · {BIOMAGNETISTAS.length}+ biomagnetistas
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-6xl">
            Encuentra a los mejores <span className="text-teal-300">biomagnetistas</span> de tu país
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Rankings por país y ciudad con valoraciones, precios referenciales y consejos para elegir terapeuta de Par
            Biomagnético en Perú, Latinoamérica, España y EE.UU.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {COUNTRIES.map((c) => (
              <Link
                key={c.slug}
                href={`/pais/${c.slug}/`}
                className="rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold backdrop-blur hover:bg-white/20"
              >
                {c.flag} {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* #1 BENS */}
      <section className="mx-auto -mt-10 max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl border-2 border-amber-300 bg-white shadow-2xl">
          <span className="absolute left-0 top-0 z-10 rounded-br-2xl bg-amber-400 px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-900">
            🏆 #1 Recomendado · 🇵🇪 Perú
          </span>
          <div className="grid md:grid-cols-5">
            <div className="relative h-72 md:col-span-2 md:h-auto">
              <Pic
                src="/images/bens/sesion-biomagnetismo-bens-lima.jpg"
                alt="Paciente recibiendo terapia de biomagnetismo con imanes sobre la ropa en Biomagnetismo Bens, Surco"
                className="absolute inset-0 h-full w-full object-cover object-[50%_60%]"
                width={1050}
                height={1400}
                sizes="(max-width: 768px) 100vw, 520px"
              />
            </div>
            <div className="p-6 md:col-span-3 md:p-10">
              <div className="flex items-center gap-3">
                <Pic
                  src="/images/bens/bencio-lingan-biomagnetista.png"
                  alt="Bencio Lingán, biomagnetista en Lima"
                  className="h-16 w-16 rounded-full border border-slate-200 bg-slate-50 object-cover object-top"
                  width={540}
                  height={540}
                  sizes="64px"
                />
                <div>
                  <h2 className="text-2xl font-black text-slate-900 md:text-3xl">Biomagnetismo Bens</h2>
                  <p className="text-sm text-slate-500">Bencio Lingán · Santiago de Surco, Lima</p>
                </div>
              </div>
              <div className="mt-3">
                <Stars value={5} size="lg" label="Valoración editorial Biomagnetistas.com" />
              </div>
              <p className="mt-4 text-slate-600">
                El centro que recomendamos en Perú: <strong>{BENS.years} años de experiencia</strong> y{" "}
                <strong>{BENS.therapies} terapias</strong> aplicando el Par Biomagnético con rastreo bioenergético. Sesión
                en camilla con imanes sobre la ropa, explicación clara del proceso y reserva online en minutos.
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xl font-black text-teal-700">{BENS.years}</p>
                  <p className="text-[11px] text-slate-500">años</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xl font-black text-teal-700">{BENS.therapies}</p>
                  <p className="text-[11px] text-slate-500">terapias</p>
                </div>
                <div className="rounded-xl bg-slate-50 p-3">
                  <p className="text-xl font-black text-teal-700">Online</p>
                  <p className="text-[11px] text-slate-500">reserva y curso</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={reservaLink("home-hero")}
                  target="_blank"
                  rel="sponsored noopener"
                  className="rounded-xl bg-teal-700 px-6 py-3 text-sm font-extrabold text-white hover:bg-teal-800"
                >
                  Reservar cita en Lima →
                </a>
                <a
                  href={cursoLink("home-hero")}
                  target="_blank"
                  rel="sponsored noopener"
                  className="rounded-xl bg-red-600 px-6 py-3 text-sm font-extrabold text-white hover:bg-red-500"
                >
                  🎓 Curso online {BENS.cursoPrice}
                </a>
                <Link
                  href={`/biomagnetista/${BENS.slug}/`}
                  className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50"
                >
                  Ver ficha
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTORY */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-black text-slate-900">Ranking de biomagnetistas por país</h2>
        <p className="mt-2 max-w-3xl text-slate-600">
          Filtra por país o busca tu ciudad. Cada ficha incluye modalidad, datos de contacto públicos, valoración
          editorial y, cuando existen, calificaciones públicas verificadas.
        </p>
        <div className="mt-8">
          <DirectoryExplorer listings={BIOMAGNETISTAS.map(slim)} />
        </div>
      </section>

      {/* SPOTLIGHT */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-black text-slate-900">¿Atención presencial en Lima o aprender desde casa?</h2>
          <p className="mb-8 mt-2 max-w-3xl text-slate-600">
            Dos caminos con Biomagnetismo Bens: una sesión en su consultorio de Surco o el curso online para aplicar el
            biomagnetismo contigo y tu familia, estés en el país que estés.
          </p>
          <BensSpotlight variant="home" campaign="home-spotlight" />
        </div>
      </section>

      {/* COUNTRIES */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl font-black text-slate-900">Biomagnetistas en 16 países</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COUNTRIES.map((c) => (
            <Link
              key={c.slug}
              href={`/pais/${c.slug}/`}
              className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-teal-400 hover:shadow-md"
            >
              <span className="text-4xl">{c.flag}</span>
              <span>
                <span className="block font-extrabold text-slate-900">{c.name}</span>
                <span className="text-xs text-slate-500">
                  {c.slug === "peru" ? "Centro recomendado" : `${totalByCountry[c.slug]} biomagnetistas`}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* BLOG */}
      {latest.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex items-end justify-between">
              <h2 className="text-3xl font-black text-slate-900">Guías de biomagnetismo</h2>
              <Link href="/blog/" className="text-sm font-bold text-teal-700 hover:underline">
                Ver los {ARTICLES.length} artículos →
              </Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {latest.map((a) => (
                <ArticleCard key={a.slug} a={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <h2 className="text-3xl font-black text-slate-900">Preguntas frecuentes</h2>
        <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200">
          {FAQS.map((f) => (
            <details key={f.q} className="group p-5">
              <summary className="cursor-pointer list-none font-bold text-slate-900">{f.q}</summary>
              <p className="mt-3 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 rounded-xl bg-amber-50 p-4 text-xs text-amber-900">
          <strong>Aviso:</strong> el biomagnetismo es una práctica complementaria. La información de este sitio es
          educativa y no sustituye el diagnóstico ni el tratamiento de un profesional de la salud.{" "}
          <Link href="/aviso-medico/" className="underline">
            Leer aviso médico
          </Link>
          .
        </p>
      </section>
    </>
  );
}
