import Link from "next/link";
import { COUNTRIES } from "@/data/countries";
import { cursoLink, reservaLink } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center gap-0.5 rounded-xl bg-slate-900">
            <span className="h-4 w-2 rounded-sm bg-red-600" />
            <span className="h-4 w-2 rounded-sm bg-slate-400" />
          </span>
          <span className="text-lg font-black tracking-tight text-slate-900">
            Biomagnetistas<span className="text-teal-700">.com</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
          <details className="group relative">
            <summary className="cursor-pointer list-none hover:text-teal-700">Países ▾</summary>
            <div className="absolute left-0 top-8 grid w-[30rem] grid-cols-2 gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
              {COUNTRIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/pais/${c.slug}/`}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-teal-50"
                >
                  <span className="text-lg">{c.flag}</span> {c.name}
                </Link>
              ))}
            </div>
          </details>
          <Link href="/biomagnetista-cerca-de-mi/" className="hover:text-teal-700">
            Cerca de mí
          </Link>
          <Link href="/curso-biomagnetismo-online/" className="hover:text-teal-700">
            Curso online
          </Link>
          <Link href="/blog/" className="hover:text-teal-700">
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={cursoLink("header", "nav")}
            target="_blank"
            rel="sponsored noopener"
            className="hidden rounded-xl border border-red-200 px-3 py-2 text-xs font-extrabold text-red-700 hover:bg-red-50 sm:block"
          >
            🎓 Curso
          </a>
          <a
            href={reservaLink("header", "nav")}
            target="_blank"
            rel="sponsored noopener"
            className="rounded-xl bg-teal-700 px-3 py-2 text-xs font-extrabold text-white hover:bg-teal-800"
          >
            🇵🇪 Reservar en Lima
          </a>
        </div>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-slate-100 px-4 py-2 text-xs font-semibold text-slate-600 lg:hidden">
        <Link href="/blog/">Blog</Link>
        <Link href="/curso-biomagnetismo-online/">Curso</Link>
        <Link href="/biomagnetista-cerca-de-mi/">Cerca de mí</Link>
        {COUNTRIES.map((c) => (
          <Link key={c.slug} href={`/pais/${c.slug}/`} className="whitespace-nowrap">
            {c.flag} {c.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
