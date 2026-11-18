import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLES } from "@/data/blog";
import { BENS, SITE_URL, cursoLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Curso de biomagnetismo online: el mejor de 2026 (comparativa)",
  description:
    "Comparamos cómo elegir un curso de biomagnetismo online y por qué recomendamos el Curso Completo de Bencio Lingán: 7 módulos, comunidad, Zoom mensual y acceso vitalicio.",
  alternates: { canonical: `${SITE_URL}/curso-biomagnetismo-online/` },
};

const CRITERIA = [
  ["Experiencia real del docente", `${BENS.years} años y ${BENS.therapies} terapias aplicadas`, "Muchas veces no se informa"],
  ["Desde cero y sin tecnicismos", "Sí, con material visual", "Variable"],
  ["Práctica de rastreo y colocación", "Nivel 1 y nivel avanzado", "A menudo solo teoría"],
  ["Acompañamiento", "Comunidad WhatsApp 24/7 + Zoom mensual 1 año", "Foro o sin soporte"],
  ["Material incluido", "Manual completo + libro de protocolos", "Pago aparte"],
  ["Cómo conseguir pacientes", "Módulo de marketing de tu terapia", "Rara vez"],
  ["Acceso", "Vitalicio con actualizaciones", "Limitado en el tiempo"],
  ["Precio", `${BENS.cursoPrice} pago único, acceso vitalicio`, "US$ 150 – 600+"],
];

const MODULES = [
  ["Bienvenida e historia", "Historia del biomagnetismo, conceptos esenciales y descarga del manual completo."],
  ["Principios básicos", "Ecuación de la enfermedad, pH, tipos de imanes, emociones y respuesta del cuerpo."],
  ["Práctica nivel 1", "Rastreo preciso de puntos y colocación correcta de los imanes."],
  ["Nivel avanzado: teoría", "Bioenergética, microbiota, emociones y campos electromagnéticos."],
  ["Práctica avanzada", "Técnicas avanzadas de rastreo, tips de colocación y protocolos completos."],
  ["Promociona tu terapia", "Marketing, boca a boca y redes sociales para atraer pacientes."],
  ["Protocolos específicos", "Protocolos por situación y recomendaciones para distintos tipos de pacientes."],
];

export default function CursoLanding() {
  const formacion = ARTICLES.filter((a) => a.category === "formacion").slice(0, 6);
  const campaign = "landing-curso";
  return (
    <div>
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2">
          <div>
            <Breadcrumbs items={[{ label: "Curso de biomagnetismo online" }]} />
            <p className="mt-6 inline-block rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-200">
              🏆 Curso recomendado 2026 · 🌎 Online para todo el mundo
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              El mejor curso de biomagnetismo online para aprender desde cero
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Tras comparar formaciones, recomendamos el <strong className="text-white">Curso Completo de Biomagnetismo</strong>{" "}
              de Bencio Lingán (Biomagnetismo Bens): práctica real, acompañamiento en vivo y acceso de por vida.
            </p>
            <div className="mt-6 flex items-end gap-3">
              <span className="text-5xl font-black">{BENS.cursoPrice}</span>
              <span className="pb-1 text-lg text-slate-400">pago único · acceso vitalicio</span>
            </div>
            <a
              href={cursoLink(campaign, "hero")}
              target="_blank"
              rel="sponsored noopener"
              className="mt-6 inline-block rounded-xl bg-red-600 px-8 py-4 text-base font-extrabold shadow-lg hover:bg-red-500"
            >
              Quiero inscribirme al curso →
            </a>
            <p className="mt-3 text-xs text-slate-400">
              Enlace de afiliado: si te inscribes, podemos recibir una comisión sin coste adicional para ti.
            </p>
          </div>
          <img
            src="/images/bens/bencio-lingan-biomagnetista.png"
            alt="Bencio Lingán, docente del curso de biomagnetismo online"
            className="mx-auto max-h-[28rem] rounded-3xl bg-white/5 object-contain"
          />
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-3xl font-black text-slate-900">Cómo elegir un curso de biomagnetismo: comparativa</h2>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-4">Criterio</th>
                <th className="p-4 text-teal-800">Curso Bens ⭐</th>
                <th className="p-4 text-slate-500">Curso promedio</th>
              </tr>
            </thead>
            <tbody>
              {CRITERIA.map(([c, b, o]) => (
                <tr key={c} className="border-t border-slate-200">
                  <td className="p-4 font-semibold text-slate-800">{c}</td>
                  <td className="p-4 font-semibold text-teal-800">✓ {b}</td>
                  <td className="p-4 text-slate-500">{o}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-14 text-3xl font-black text-slate-900">Qué aprenderás: 7 módulos</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {MODULES.map(([t, d], i) => (
            <li key={t} className="rounded-2xl border border-slate-200 p-5">
              <p className="text-xs font-black uppercase text-red-600">Módulo {i + 1}</p>
              <p className="mt-1 font-extrabold text-slate-900">{t}</p>
              <p className="mt-1 text-sm text-slate-600">{d}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            ["👥", "Comunidad privada", "Grupo de estudiantes en WhatsApp con soporte continuo."],
            ["🎥", "Zoom en vivo 1 año", "Asesoría el 1.º de cada mes a las 18:00 UTC."],
            ["♾️", "Acceso vitalicio", "Todas las futuras actualizaciones sin coste extra."],
          ].map(([i, t, d]) => (
            <div key={t} className="rounded-2xl bg-slate-50 p-6 text-center">
              <p className="text-3xl">{i}</p>
              <p className="mt-2 font-extrabold text-slate-900">{t}</p>
              <p className="mt-1 text-sm text-slate-600">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-slate-900 p-8 text-center text-white">
          <h2 className="text-2xl font-black">Empieza hoy a formarte como terapeuta de biomagnetismo</h2>
          <p className="mt-2 text-slate-300">Aprende a aplicarlo contigo, tu familia y, si lo deseas, de forma profesional.</p>
          <a
            href={cursoLink(campaign, "bottom")}
            target="_blank"
            rel="sponsored noopener"
            className="mt-6 inline-block rounded-xl bg-red-600 px-8 py-4 font-extrabold hover:bg-red-500"
          >
            Ver el curso por {BENS.cursoPrice} →
          </a>
        </div>

        <p className="mt-8 text-xs text-slate-500">
          El biomagnetismo es una práctica complementaria; el curso tiene fines formativos y no habilita para
          diagnosticar ni sustituir tratamientos médicos. <Link href="/divulgacion-de-afiliados/" className="underline">Divulgación de afiliados</Link>.
        </p>

        {formacion.length > 0 && (
          <section className="mt-14">
            <h2 className="text-2xl font-black text-slate-900">Guías de formación</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {formacion.map((a) => (
                <ArticleCard key={a.slug} a={a} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
