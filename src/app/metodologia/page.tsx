import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Metodología del ranking de biomagnetistas",
  description: "Cómo seleccionamos y valoramos a los biomagnetistas de nuestra guía: verificación pública, trayectoria, transparencia, reserva y opiniones.",
  alternates: { canonical: `${SITE_URL}/metodologia/` },
};

export default function Page() {
  return (
    <LegalPage title="Metodología del ranking">
      <p className="lead">Cada biomagnetista de la guía pasa por una verificación básica y recibe una valoración editorial de 1 a 5.</p>
      <h2 id="verificacion">1. Verificación</h2>
      <p>Solo incluimos centros o terapeutas cuya actividad podemos comprobar en al menos una fuente pública: sitio web, perfil de Google Maps, directorios de salud o redes sociales activas.</p>
      <h2 id="criterios">2. Criterios de valoración editorial</h2>
      <table><thead><tr><th>Criterio</th><th>Peso</th></tr></thead><tbody>
        <tr><td>Trayectoria y experiencia comprobable</td><td>30%</td></tr>
        <tr><td>Transparencia (proceso, precios, límites de la terapia)</td><td>25%</td></tr>
        <tr><td>Información pública y facilidad de reserva</td><td>20%</td></tr>
        <tr><td>Opiniones públicas de pacientes (si existen)</td><td>15%</td></tr>
        <tr><td>Formación y aporte a la comunidad</td><td>10%</td></tr>
      </tbody></table>
      <h2 id="opiniones">3. Opiniones y calificaciones</h2>
      <p>No publicamos reseñas inventadas. Cuando mostramos una calificación pública (por ejemplo, de Google), indicamos su fuente. La valoración editorial es una opinión de nuestro equipo.</p>
      <h2 id="imagenes">4. Imágenes</h2>
      <p>Usamos fotos reales cuando el negocio las publica y autoriza su difusión. En el resto de fichas mostramos imágenes ilustrativas de ambiente, señaladas como tales.</p>
      <h2 id="actualizacion">5. Actualización y correcciones</h2>
      <p>Revisamos la guía periódicamente. Si eres terapeuta y quieres corregir tus datos o solicitar tu inclusión o retiro, escríbenos desde la página de contacto.</p>
    </LegalPage>
  );
}
