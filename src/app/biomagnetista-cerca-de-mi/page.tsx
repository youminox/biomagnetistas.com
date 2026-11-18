import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import BensSpotlight from "@/components/BensSpotlight";
import NearMe from "@/components/NearMe";
import { BIOMAGNETISTAS } from "@/data/biomagnetistas";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Biomagnetista cerca de mí: encuentra uno en tu país",
  description:
    "Encuentra un biomagnetista cerca de ti en Perú, México, Colombia, Argentina, Chile, España, EE.UU. y más. Ranking verificado por país y ciudad.",
  alternates: { canonical: `${SITE_URL}/biomagnetista-cerca-de-mi/` },
};

export default function NearMePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumbs items={[{ label: "Biomagnetista cerca de mí" }]} />
      <h1 className="mt-6 text-3xl font-black text-slate-900 md:text-5xl">Biomagnetista cerca de mí</h1>
      <p className="mt-3 max-w-3xl text-lg text-slate-600">
        Detectamos tu país de forma aproximada (sin pedir tu ubicación) y te mostramos los biomagnetistas recomendados.
        Si estás en Lima, nuestra recomendación es Biomagnetismo Bens en Surco.
      </p>
      <div className="mt-8">
        <NearMe listings={BIOMAGNETISTAS} />
      </div>
      <section className="mt-14">
        <h2 className="mb-6 text-2xl font-black text-slate-900">¿No hay un biomagnetista cerca? Aprende online</h2>
        <BensSpotlight variant="home" campaign="cerca-de-mi" primary="curso" />
      </section>
    </div>
  );
}
