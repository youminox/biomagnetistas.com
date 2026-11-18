import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { OWNER_EMAIL, OWNER_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Cómo trata Biomagnetistas.com tus datos personales conforme a la Ley N.º 29733 de Protección de Datos Personales del Perú.",
  alternates: { canonical: `${SITE_URL}/politica-de-privacidad/` },
};

export default function Page() {
  return (
    <LegalPage title="Política de privacidad">
      <p className="lead">Respetamos tu privacidad. Esta política explica qué datos tratamos y con qué fines, conforme a la Ley N.º 29733 y su reglamento.</p>
      <h2 id="responsable">Responsable</h2>
      <p>{OWNER_NAME}, Lima, Perú — <a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a>.</p>
      <h2 id="datos">Datos que tratamos</h2>
      <ul>
        <li>Datos de navegación anónimos o seudonimizados (páginas visitadas, dispositivo, país aproximado) mediante herramientas de analítica.</li>
        <li>Datos que nos envíes voluntariamente por correo electrónico.</li>
      </ul>
      <p>No solicitamos tu ubicación precisa: la función &quot;cerca de mí&quot; usa la zona horaria de tu navegador, sin enviarla a nuestros servidores.</p>
      <h2 id="finalidad">Finalidad</h2>
      <p>Mejorar el sitio, medir audiencias y responder tus consultas. No vendemos tus datos.</p>
      <h2 id="terceros">Terceros</h2>
      <p>Al hacer clic en enlaces externos (por ejemplo, para reservar o comprar un curso) pasarás a sitios con sus propias políticas de privacidad.</p>
      <h2 id="derechos">Tus derechos</h2>
      <p>Puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición escribiendo a {OWNER_EMAIL}.</p>
    </LegalPage>
  );
}
