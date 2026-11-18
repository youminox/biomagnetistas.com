import Link from "next/link";
import { BENS, cursoLink, reservaLink } from "@/lib/site";

type Variant = "home" | "article" | "sidebar" | "inline-reserva" | "inline-curso";

interface Props {
  variant?: Variant;
  /** Para UTM campaign */
  campaign?: string;
  /** Qué tarjeta destacar primero */
  primary?: "reserva" | "curso";
}

function ReservaCard({ campaign, compact = false }: { campaign: string; compact?: boolean }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-teal-200 bg-white shadow-sm">
      {!compact && (
        <img
          src="/images/bens/terapia-imanes-bens-surco.jpg"
          alt="Sesión real de biomagnetismo en el consultorio de Biomagnetismo Bens en Surco, Lima"
          className="h-44 w-full object-cover"
          loading="lazy"
        />
      )}
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 inline-flex w-fit items-center gap-1 rounded-full bg-teal-50 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-teal-700">
          🇵🇪 Presencial · Lima (Surco)
        </span>
        <h3 className="text-lg font-extrabold leading-snug text-slate-900">
          Reserva tu sesión de biomagnetismo con Bencio Lingán
        </h3>
        <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
          <li>✓ {BENS.years} años de experiencia · {BENS.therapies} terapias</li>
          <li>✓ Imanes sobre la ropa, en camilla</li>
          <li>✓ Elige día y hora en el calendario online</li>
        </ul>
        <a
          href={reservaLink(campaign)}
          target="_blank"
          rel="sponsored noopener"
          className="mt-5 block rounded-xl bg-teal-700 py-3 text-center text-sm font-extrabold text-white shadow transition hover:bg-teal-800"
        >
          Reservar mi cita en Lima →
        </a>
      </div>
    </div>
  );
}

function CursoCard({ campaign, compact = false }: { campaign: string; compact?: boolean }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-red-200 bg-gradient-to-br from-slate-950 via-slate-900 to-red-950 text-white shadow-sm">
      {!compact && (
        <img
          src="/images/bens/curso-biomagnetismo-online-bens.jpg"
          alt="Plataforma del Curso Completo de Biomagnetismo online de Biomagnetismo Bens"
          className="h-44 w-full object-cover object-top"
          loading="lazy"
        />
      )}
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 inline-flex w-fit items-center gap-1 rounded-full bg-red-500/20 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-red-200">
          🌎 Online · Todo Latinoamérica
        </span>
        <h3 className="text-lg font-extrabold leading-snug">Curso Completo de Biomagnetismo desde cero</h3>
        <ul className="mt-3 space-y-1.5 text-sm text-slate-300">
          <li>✓ 7 módulos + manual y libro de protocolos</li>
          <li>✓ Comunidad privada y Zoom mensual por 1 año</li>
          <li>✓ Acceso vitalicio y actualizaciones</li>
        </ul>
        <p className="mt-3 text-sm">
          <span className="text-2xl font-black text-white">{BENS.cursoPrice}</span>{" "}
          <span className="text-slate-400">pago único</span>
        </p>
        <a
          href={cursoLink(campaign)}
          target="_blank"
          rel="sponsored noopener"
          className="mt-4 block rounded-xl bg-red-600 py-3 text-center text-sm font-extrabold text-white shadow transition hover:bg-red-500"
        >
          Ver el curso online →
        </a>
      </div>
    </div>
  );
}

export default function BensSpotlight({ variant = "home", campaign = "home", primary = "reserva" }: Props) {
  if (variant === "inline-reserva" || variant === "inline-curso") {
    const isCurso = variant === "inline-curso";
    return (
      <aside className="not-prose my-8 flex flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:flex-row">
        <img
          src={isCurso ? "/images/bens/bencio-lingan-biomagnetista.png" : "/images/bens/sesion-biomagnetismo-bens-lima.jpg"}
          alt={isCurso ? "Bencio Lingán, terapeuta y formador de biomagnetismo" : "Sesión de biomagnetismo en Biomagnetismo Bens, Lima"}
          className="h-24 w-24 shrink-0 rounded-xl bg-white object-cover"
          loading="lazy"
        />
        <div className="flex-1 text-center sm:text-left">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-teal-700">
            {isCurso ? "Recomendado · Curso online" : "Recomendado en Lima"}
          </p>
          <p className="mt-1 font-bold text-slate-900">
            {isCurso
              ? `Aprende biomagnetismo desde cero con Bencio Lingán (${BENS.therapies} terapias)`
              : `Sesión presencial con Biomagnetismo Bens en ${BENS.district}`}
          </p>
        </div>
        <a
          href={isCurso ? cursoLink(campaign, "inline") : reservaLink(campaign, "inline")}
          target="_blank"
          rel="sponsored noopener"
          className={`shrink-0 rounded-xl px-5 py-3 text-sm font-extrabold text-white ${isCurso ? "bg-red-600 hover:bg-red-500" : "bg-teal-700 hover:bg-teal-800"}`}
        >
          {isCurso ? "Ver curso →" : "Reservar →"}
        </a>
      </aside>
    );
  }

  if (variant === "sidebar") {
    return (
      <div className="space-y-4">
        {primary === "curso" ? (
          <>
            <CursoCard campaign={campaign} compact />
            <ReservaCard campaign={campaign} compact />
          </>
        ) : (
          <>
            <ReservaCard campaign={campaign} compact />
            <CursoCard campaign={campaign} compact />
          </>
        )}
      </div>
    );
  }

  const cards =
    primary === "curso"
      ? [<CursoCard key="c" campaign={campaign} />, <ReservaCard key="r" campaign={campaign} />]
      : [<ReservaCard key="r" campaign={campaign} />, <CursoCard key="c" campaign={campaign} />];

  return (
    <section className={variant === "article" ? "not-prose my-10" : ""}>
      {variant === "article" && (
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
          Recomendación de Biomagnetistas.com ·{" "}
          <Link href="/divulgacion-de-afiliados/" className="underline">
            enlaces patrocinados
          </Link>
        </p>
      )}
      <div className="grid gap-5 md:grid-cols-2">{cards}</div>
    </section>
  );
}
