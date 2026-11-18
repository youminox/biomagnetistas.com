import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { OWNER_EMAIL, OWNER_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contacta con Biomagnetistas.com para correcciones, inclusión de terapeutas o consultas generales.",
  alternates: { canonical: `${SITE_URL}/contacto/` },
};

export default function Page() {
  return (
    <LegalPage title="Contacto">
      <p className="lead">¿Eres biomagnetista y quieres aparecer en la guía o corregir tus datos? ¿Tienes una sugerencia?</p>
      <p>Escríbenos a <a href={`mailto:${OWNER_EMAIL}`}>{OWNER_EMAIL}</a>. Respondemos en un plazo de 2 a 5 días hábiles.</p>
      <ul>
        <li><strong>Titular:</strong> {OWNER_NAME}</li>
        <li><strong>Domicilio:</strong> Lima, Perú</li>
      </ul>
      <p>Para reservar una sesión en Lima, hazlo directamente en el sitio de Biomagnetismo Bens; no gestionamos citas.</p>
    </LegalPage>
  );
}
