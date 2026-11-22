import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AmazonAffiliateBox from "@/components/AmazonAffiliateBox";
import BensSpotlight from "@/components/BensSpotlight";
import ProductosHubClient from "./ProductosHubClient";
import {
  getAllProductosSummaries,
  PRODUCTO_CLUSTERS,
  type ProductoCluster,
} from "@/data/productos";
import { BIOMAGNETISMO_CATALOG } from "@/lib/amazon";
import { SITE_NAME, SITE_URL, clampDescription, fitTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: fitTitle("Productos de Biomagnetismo: Imanes, Camillas y Guías"),
  description: clampDescription(
    "105 reseñas técnicas, comparativas Producto vs Producto y guías de compra de imanes de neodimio N52, ferrita, camillas de madera, cintas 3M y gaussímetros en Amazon."
  ),
  alternates: {
    canonical: `${SITE_URL}/productos/`,
  },
  openGraph: {
    title: `Productos y Equipamiento de Biomagnetismo: 105 Reseñas, Comparativas VS y Guías | ${SITE_NAME}`,
    description: clampDescription(
      "Catálogo técnico y comparativas de los mejores imanes terapéuticos forrados en cuero, camillas plegables de madera, gaussímetros digitales e insumos de consultorio."
    ),
    url: `${SITE_URL}/productos/`,
    type: "website",
    locale: "es_419",
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/images/blog/kit-de-imanes-para-biomagnetismo.webp`,
        width: 1536,
        height: 1024,
        alt: "Kits de imanes, camillas e instrumentos para biomagnetismo",
      },
    ],
  },
};

export default function ProductosIndexPage() {
  const articles = getAllProductosSummaries();

  const topShowcaseProducts = [
    BIOMAGNETISMO_CATALOG.IMANES_NEODIMIO_N52_CUERO,
    BIOMAGNETISMO_CATALOG.KIT_PROFESIONAL_30_IMANES,
    BIOMAGNETISMO_CATALOG.CINTA_3M_MICROPORE_CAJA,
  ] as [
    typeof BIOMAGNETISMO_CATALOG.IMANES_NEODIMIO_N52_CUERO,
    typeof BIOMAGNETISMO_CATALOG.KIT_PROFESIONAL_30_IMANES,
    typeof BIOMAGNETISMO_CATALOG.CINTA_3M_MICROPORE_CAJA,
  ];

  const clinicShowcaseProducts = [
    BIOMAGNETISMO_CATALOG.CAMILLA_PLEGABLE_MADERA_2ZONAS,
    BIOMAGNETISMO_CATALOG.GAUSSIMETRO_DIGITAL_WT10A,
    BIOMAGNETISMO_CATALOG.MALETIN_RIGIDO_ESPUMA_IMANES,
  ] as [
    typeof BIOMAGNETISMO_CATALOG.CAMILLA_PLEGABLE_MADERA_2ZONAS,
    typeof BIOMAGNETISMO_CATALOG.GAUSSIMETRO_DIGITAL_WT10A,
    typeof BIOMAGNETISMO_CATALOG.MALETIN_RIGIDO_ESPUMA_IMANES,
  ];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Laboratorio y Guías de Productos de Biomagnetismo — ${SITE_NAME}`,
    description:
      "105 reseñas técnicas, comparativas producto vs producto y guías de compra de imanes de neodimio y ferrita, camillas de madera, gaussímetros y accesorios de consultorio.",
    url: `${SITE_URL}/productos/`,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    hasPart: articles.slice(0, 35).map((a) => ({
      "@type": "TechArticle",
      headline: a.title,
      description: a.excerpt,
      url: `${SITE_URL}/productos/${a.slug}/`,
      datePublished: a.publishedAt,
      image: `${SITE_URL}${a.imageUrl}`,
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-teal-950 text-white py-14 px-4 border-b border-amber-500/20">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs items={[{ label: "Productos de Biomagnetismo" }]} />
          <div className="mt-6 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-500/15 px-3.5 py-1 text-xs font-extrabold text-amber-300">
                🧲 {articles.length} Análisis Técnicos, Comparativas VS y Guías de Compra
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-400/40 bg-teal-500/15 px-3 py-1 text-xs font-bold text-teal-200">
                🛒 Selección Verificada en Amazon.com y Amazon.es
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Guía de Productos para Biomagnetismo: Imanes, Camillas, Gaussímetros y Consultorio
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Compara Gauss reales en superficie, aleaciones de Neodimio N52 vs Ferrita C8, forros de cuero vacuno, camillas plegables de madera sin interferencia metálica, cintas hipoalergénicas 3M Micropore e instrumentos de polaridad con envío directo desde Amazon.
            </p>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                <span className="text-amber-400 font-black text-lg block">32</span>
                <span className="text-slate-300 font-semibold">Reseñas a Fondo de Equipos</span>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                <span className="text-amber-400 font-black text-lg block">28</span>
                <span className="text-slate-300 font-semibold">Duelos Producto vs Producto</span>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                <span className="text-amber-400 font-black text-lg block">25</span>
                <span className="text-slate-300 font-semibold">Rankings & Guías de Compra</span>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-3">
                <span className="text-amber-400 font-black text-lg block">20</span>
                <span className="text-slate-300 font-semibold">Guías de Gauss & Mantenimiento</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        {/* Top 3 Best Sellers Showcase */}
        <AmazonAffiliateBox
          variant="showcase"
          sectionTitle="Los 3 Productos Más Vendidos para Practicar Biomagnetismo"
          sectionSubtitle="La combinación esencial de imanes forrados en cuero bicolor y cinta hipoalergénica 3M Micropore para sesiones en camilla o en casa."
          products={topShowcaseProducts}
        />

        {/* Interactive Filter & 105 Cards Grid */}
        <ProductosHubClient articles={articles} />

        {/* Second Showcase: Clinic Furniture & Meters */}
        <AmazonAffiliateBox
          variant="showcase"
          sectionTitle="Top 3 en Camillas de Madera, Gaussímetros y Maletines Anti-Impacto"
          sectionSubtitle="Equipamiento profesional libre de interferencia ferromagnética para montar o actualizar tu consultorio."
          products={clinicShowcaseProducts}
        />

        {/* Bens Online Course & Lima Booking Spotlight */}
        <div className="my-12">
          <h2 className="text-2xl font-black text-slate-900 mb-2">
            ¿Ya tienes tu kit de imanes? Aprende a rastrear paso a paso desde cero
          </h2>
          <p className="text-sm text-slate-600 mb-6">
            Complementa tus herramientas con la formación online de Bencio Lingán (7+ años y 20.000+ terapias) o reserva tu sesión presencial en Surco, Lima:
          </p>
          <BensSpotlight variant="home" campaign="productos-hub" primary="curso" />
        </div>

        {/* Full Crawlable Index of all 105 pages grouped by Cluster */}
        <section
          aria-labelledby="indice-productos"
          className="mt-14 rounded-2xl border border-slate-200 bg-white p-8"
        >
          <h2
            id="indice-productos"
            className="text-xl sm:text-2xl font-black text-slate-900"
          >
            Índice Completo de las {articles.length} Páginas de Productos por Categoría
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Acceso directo a cada reseña de imanes y camillas, duelo comparativo Producto vs Producto, guía de compra y manual técnico de medición:
          </p>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {(Object.keys(PRODUCTO_CLUSTERS) as ProductoCluster[]).map(
              (clusterKey) => {
                const inCluster = articles.filter(
                  (a) => a.cluster === clusterKey
                );
                return (
                  <div
                    key={clusterKey}
                    className="rounded-xl border border-slate-100 bg-slate-50/60 p-5"
                  >
                    <h3 className="text-sm font-extrabold uppercase tracking-wider text-teal-800 border-b border-slate-200 pb-2">
                      {PRODUCTO_CLUSTERS[clusterKey]} ({inCluster.length})
                    </h3>
                    <ul className="mt-3 space-y-1.5 text-xs sm:text-sm">
                      {inCluster.map((a) => (
                        <li key={a.id}>
                          <Link
                            href={`/productos/${a.slug}/`}
                            className="text-slate-700 hover:text-teal-700 hover:underline font-medium"
                          >
                            {a.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
