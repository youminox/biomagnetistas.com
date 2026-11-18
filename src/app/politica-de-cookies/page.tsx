import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Qué cookies técnicas, analíticas y de afiliados utiliza Biomagnetistas.com y cómo puedes gestionarlas o bloquearlas desde tu navegador.",
  alternates: { canonical: `${SITE_URL}/politica-de-cookies/` },
};

export default function Page() {
  return (
    <LegalPage title="Política de cookies">
      <p className="lead">Una cookie es un pequeño archivo que el navegador guarda al visitar un sitio web.</p>
      <h2 id="tipos">Cookies que usamos</h2>
      <table><thead><tr><th>Tipo</th><th>Finalidad</th></tr></thead><tbody>
        <tr><td>Técnicas</td><td>Funcionamiento básico del sitio.</td></tr>
        <tr><td>Analíticas (Google Analytics)</td><td>Medir visitas de forma agregada para mejorar los contenidos.</td></tr>
        <tr><td>De terceros (enlaces de afiliado)</td><td>Atribuir compras realizadas en sitios asociados.</td></tr>
      </tbody></table>
      <h2 id="gestion">Cómo gestionarlas</h2>
      <p>Puedes bloquear o eliminar cookies desde la configuración de tu navegador (Chrome, Safari, Firefox, Edge). Bloquearlas puede afectar algunas funciones.</p>
    </LegalPage>
  );
}
