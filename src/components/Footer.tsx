import Link from "next/link";
import { COUNTRIES } from "@/data/countries";
import { BENS, OWNER_EMAIL, OWNER_NAME, cursoLink, reservaLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-20 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <p className="text-lg font-black text-white">
            Biomagnetistas<span className="text-teal-400">.com</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Guía independiente para encontrar biomagnetistas en Latinoamérica, España y EE.UU. Información
            educativa: el biomagnetismo es una terapia complementaria y no sustituye la atención médica.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Países</p>
          <ul className="grid grid-cols-2 gap-1.5 text-sm">
            {COUNTRIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/pais/${c.slug}/`} className="hover:text-white">
                  {c.flag} {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Recomendado</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href={`/biomagnetista/${BENS.slug}/`} className="hover:text-white">
                Biomagnetismo Bens (Lima)
              </Link>
            </li>
            <li>
              <a href={reservaLink("footer", "footer")} target="_blank" rel="sponsored noopener" className="hover:text-white">
                Reservar sesión en Lima ↗
              </a>
            </li>
            <li>
              <a href={cursoLink("footer", "footer")} target="_blank" rel="sponsored noopener" className="hover:text-white">
                Curso de biomagnetismo online ↗
              </a>
            </li>
            <li>
              <Link href="/blog/" className="hover:text-white">
                Blog de biomagnetismo
              </Link>
            </li>
            <li>
              <Link href="/biomagnetista-cerca-de-mi/" className="hover:text-white">
                Biomagnetista cerca de mí
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-white">Legal</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/nosotros/" className="hover:text-white">Quiénes somos</Link></li>
            <li><Link href="/metodologia/" className="hover:text-white">Metodología del ranking</Link></li>
            <li><Link href="/contacto/" className="hover:text-white">Contacto</Link></li>
            <li><Link href="/aviso-medico/" className="hover:text-white">Aviso médico</Link></li>
            <li><Link href="/divulgacion-de-afiliados/" className="hover:text-white">Divulgación de afiliados</Link></li>
            <li><Link href="/aviso-legal/" className="hover:text-white">Aviso legal</Link></li>
            <li><Link href="/politica-de-privacidad/" className="hover:text-white">Política de privacidad</Link></li>
            <li><Link href="/politica-de-cookies/" className="hover:text-white">Política de cookies</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Biomagnetistas.com · Titular: {OWNER_NAME}, Lima, Perú ·{" "}
        <a href={`mailto:${OWNER_EMAIL}`} className="hover:text-white">
          {OWNER_EMAIL}
        </a>{" "}
        · Algunos enlaces son patrocinados o de afiliado.
      </div>
    </footer>
  );
}
