import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Divulgación de afiliados",
  description: "Biomagnetistas.com puede recibir comisiones por algunos enlaces. Te explicamos cuáles y cómo afecta a nuestras recomendaciones.",
  alternates: { canonical: `${SITE_URL}/divulgacion-de-afiliados/` },
};

export default function Page() {
  return (
    <LegalPage title="Divulgación de afiliados">
      <p className="lead">Creemos en la transparencia total con nuestros lectores.</p>
      <p>Algunos enlaces de este sitio, en particular los dirigidos al <strong>Curso Completo de Biomagnetismo</strong> de Biomagnetismo Bens (biomagnetismobens.pe), son <strong>enlaces de afiliado</strong>: si compras a través de ellos, podemos recibir una comisión sin coste adicional para ti.</p>
      <p>También mantenemos una relación de colaboración con Biomagnetismo Bens para la promoción de sus citas presenciales en Lima. Estos enlaces están marcados como patrocinados (<code>rel=&quot;sponsored&quot;</code>).</p>
      <p>Esta relación es la razón por la que Biomagnetismo Bens aparece destacado. Aun así, solo lo recomendamos porque cumple nuestros criterios de trayectoria y transparencia, descritos en la metodología.</p>
    </LegalPage>
  );
}
