import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso médico",
  description: "El biomagnetismo es una práctica complementaria. La información de Biomagnetistas.com es educativa y no sustituye el consejo médico.",
  alternates: { canonical: `${SITE_URL}/aviso-medico/` },
};

export default function Page() {
  return (
    <LegalPage title="Aviso médico">
      <p className="lead">El contenido de Biomagnetistas.com tiene fines exclusivamente informativos y educativos.</p>
      <ul>
        <li>El biomagnetismo (Par Biomagnético) es una <strong>práctica complementaria</strong>. La evidencia científica sobre su eficacia es limitada y no concluyente.</li>
        <li>No sustituye el diagnóstico, tratamiento ni seguimiento de médicos u otros profesionales de la salud.</li>
        <li>No abandones ni modifiques un tratamiento médico sin consultarlo con tu médico.</li>
        <li>Ante síntomas graves, persistentes o de urgencia, acude a un servicio de salud.</li>
        <li>Si estás embarazada, tienes marcapasos u otros dispositivos implantados, consulta a tu médico antes de cualquier terapia con imanes.</li>
      </ul>
      <p>Los terapeutas listados son responsables de su práctica. Biomagnetistas.com no presta servicios de salud.</p>
    </LegalPage>
  );
}
