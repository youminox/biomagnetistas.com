import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import { OWNER_EMAIL, OWNER_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quiénes somos",
  description: "Biomagnetistas.com es una guía independiente para encontrar biomagnetistas en Latinoamérica, España y EE.UU. Conoce al equipo y nuestra misión.",
  alternates: { canonical: `${SITE_URL}/nosotros/` },
};

export default function Page() {
  return (
    <LegalPage title="Quiénes somos">
      <p className="lead">Biomagnetistas.com nació para resolver una pregunta muy concreta: <strong>¿dónde encuentro un biomagnetista serio cerca de mí?</strong></p>
      <p>Somos una guía editorial que reúne, verifica y ordena información pública sobre terapeutas de Par Biomagnético en 16 países: Perú, México, Colombia, Argentina, Chile, Ecuador, Bolivia, Venezuela, Guatemala, Costa Rica, Panamá, República Dominicana, Uruguay, Paraguay, España y Estados Unidos.</p>
      <h2 id="mision">Nuestra misión</h2>
      <p>Ayudar a las personas a elegir con información clara: qué es el biomagnetismo, qué esperar de una sesión, cuánto cuesta en cada país y cómo reconocer a un terapeuta responsable que no prometa curas milagrosas.</p>
      <h2 id="independencia">Independencia y relación comercial</h2>
      <p>Somos transparentes: mantenemos una relación de colaboración con <strong>Biomagnetismo Bens</strong> (Lima, Perú) y recibimos comisiones de afiliado por inscripciones a su curso online. Lo explicamos en nuestra <Link href="/divulgacion-de-afiliados/">divulgación de afiliados</Link>. Los criterios del ranking están descritos en nuestra <Link href="/metodologia/">metodología</Link>.</p>
      <h2 id="titular">Titular del sitio</h2>
      <p>{OWNER_NAME}, domiciliado en Lima, Perú. Contacto: <a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a>.</p>
      <h2 id="salud">Compromiso con la salud</h2>
      <p>El biomagnetismo es una práctica complementaria. Nuestros contenidos son educativos y no sustituyen el consejo médico. Lee nuestro <Link href="/aviso-medico/">aviso médico</Link>.</p>
    </LegalPage>
  );
}
