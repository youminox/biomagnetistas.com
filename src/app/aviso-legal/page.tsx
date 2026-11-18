import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { OWNER_EMAIL, OWNER_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso legal",
  description: "Aviso legal de Biomagnetistas.com: titularidad, condiciones de uso, propiedad intelectual y responsabilidad.",
  alternates: { canonical: `${SITE_URL}/aviso-legal/` },
};

export default function Page() {
  return (
    <LegalPage title="Aviso legal">
      <h2 id="titular">1. Titular</h2>
      <p>El sitio web biomagnetistas.com es titularidad de <strong>{OWNER_NAME}</strong>, persona natural domiciliada en Lima, Perú. Correo: <a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a>.</p>
      <h2 id="uso">2. Condiciones de uso</h2>
      <p>El acceso al sitio es gratuito e implica la aceptación de este aviso. El usuario se compromete a hacer un uso lícito de los contenidos.</p>
      <h2 id="contenido">3. Contenidos</h2>
      <p>La información publicada es orientativa y educativa. Los datos de terapeutas proceden de fuentes públicas y pueden cambiar; recomendamos confirmarlos directamente con cada profesional.</p>
      <h2 id="propiedad">4. Propiedad intelectual</h2>
      <p>Los textos, diseño y estructura del sitio pertenecen a su titular. Las marcas y fotografías de terceros pertenecen a sus respectivos propietarios y se usan con fines informativos.</p>
      <h2 id="responsabilidad">5. Responsabilidad</h2>
      <p>El titular no se responsabiliza de los servicios prestados por los terapeutas listados ni de los contenidos de sitios externos enlazados.</p>
      <h2 id="ley">6. Legislación aplicable</h2>
      <p>Este aviso se rige por la legislación de la República del Perú, incluida la Ley N.º 29571 (Código de Protección y Defensa del Consumidor).</p>
    </LegalPage>
  );
}
