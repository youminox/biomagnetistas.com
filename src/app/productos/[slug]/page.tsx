import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import AmazonAffiliateBox from "@/components/AmazonAffiliateBox";
import BensSpotlight from "@/components/BensSpotlight";
import Pic from "@/components/Pic";
import {
  getAllProductosArticles,
  getProductoBySlug,
  getRelatedProductos,
} from "@/data/productos";
import { resolveBiomagnetismoAmazonProducts } from "@/lib/amazon";
import {
  SITE_NAME,
  SITE_URL,
  clampDescription,
  fitTitle,
  formatDateEs,
} from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProductosArticles().map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getProductoBySlug(slug);

  if (!article) {
    return { title: `Producto no encontrado | ${SITE_NAME}` };
  }

  const canonicalUrl = `${SITE_URL}/productos/${article.slug}/`;
  const absoluteImageUrl = `${SITE_URL}${article.imageUrl}`;
  const metaDescription = clampDescription(article.excerpt);

  return {
    title: fitTitle(article.seoTitle),
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.seoTitle,
      description: metaDescription,
      url: canonicalUrl,
      type: "article",
      locale: "es_419",
      siteName: SITE_NAME,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      images: [
        {
          url: absoluteImageUrl,
          width: 1536,
          height: 1024,
          alt: article.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: metaDescription,
      images: [absoluteImageUrl],
    },
  };
}

export default async function ProductoDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getProductoBySlug(slug);

  if (!article) {
    notFound();
  }

  const amazonProducts = resolveBiomagnetismoAmazonProducts(
    article.amazonProductKeys,
    article.slug,
    article.title
  );
  const relatedProducts = getRelatedProductos(article.slug, 4);
  const canonicalUrl = `${SITE_URL}/productos/${article.slug}/`;
  const absoluteImageUrl = `${SITE_URL}${article.imageUrl}`;

  const allInCluster = getAllProductosArticles()
    .filter((a) => a.cluster === article.cluster)
    .sort((a, b) => a.id - b.id);
  const idxInCluster = allInCluster.findIndex((a) => a.slug === article.slug);
  const clusterNav =
    allInCluster.length > 2
      ? {
          prev: allInCluster[
            (idxInCluster - 1 + allInCluster.length) % allInCluster.length
          ],
          next: allInCluster[(idxInCluster + 1) % allInCluster.length],
        }
      : null;

  const breadcrumbItems = [
    { label: "Productos", href: "/productos/" },
    { label: article.clusterLabel },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": `${canonicalUrl}#article`,
        headline: article.title,
        description: article.excerpt,
        image: [absoluteImageUrl],
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        inLanguage: "es",
        articleSection: article.clusterLabel,
        author: {
          "@type": "Organization",
          name: `Redacción ${SITE_NAME}`,
          url: `${SITE_URL}/nosotros/`,
        },
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mb-4">
        <Link
          href="/productos/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-teal-700"
        >
          ← Volver al Catálogo de Productos de Biomagnetismo (105 Guías)
        </Link>
      </div>

      <Breadcrumbs items={breadcrumbItems} />

      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        {/* ================= MAIN ARTICLE COLUMN ================= */}
        <article className="min-w-0">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-amber-500/15 border border-amber-400/50 px-3 py-1 text-xs font-extrabold text-amber-900">
              {article.clusterLabel}
            </span>
            <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-extrabold text-amber-300">
              {article.badgeLabel}
            </span>
            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800">
              🏷️ {article.brand}
            </span>
            <span className="text-xs font-medium text-slate-500">
              Actualizado: {formatDateEs(article.updatedAt)} · {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl font-black leading-tight text-slate-900 md:text-[2.5rem]">
            {article.title}
          </h1>

          <p className="mt-4 text-lg text-slate-600">{article.excerpt}</p>

          {/* Featured Image */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <Pic
              src={article.imageUrl}
              alt={article.imageAlt}
              priority
              sizes="(max-width: 1024px) 100vw, 880px"
              className="aspect-[3/2] w-full object-cover max-h-[420px]"
            />
            <div className="bg-slate-950 text-slate-200 px-4 py-2.5 text-xs flex flex-wrap items-center justify-between gap-2">
              <span>📸 {article.imageAlt}</span>
              <span className="text-amber-400 font-bold">
                Guía Técnica Biomagnetistas.com
              </span>
            </div>
          </div>

          {/* Top Amazon Affiliate Box: VS Card for comparativas, Verdict Card for reviews/guides */}
          <AmazonAffiliateBox
            variant={article.cluster === "comparativa" ? "vs" : "verdict"}
            products={amazonProducts}
          />

          {/* Technical Specifications Table */}
          <section
            aria-label="Ficha de especificaciones técnicas"
            className="my-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs"
          >
            <div className="bg-slate-900 px-5 py-3.5 text-white flex items-center justify-between">
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-amber-400">
                ⚙️ Ficha Técnica & Especificaciones Verificadas
              </h2>
              <span className="text-xs font-bold text-slate-300">
                {article.brand}
              </span>
            </div>
            <div className="divide-y divide-slate-200 text-xs sm:text-sm">
              {article.specs.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4 px-5 py-3 odd:bg-slate-50/70"
                >
                  <span className="font-extrabold text-slate-900">
                    {row.label}
                  </span>
                  <span className="sm:col-span-2 text-slate-700 font-medium">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Pros & Cons Grid */}
          <section
            aria-label="Ventajas y puntos a considerar"
            className="my-8 grid gap-5 sm:grid-cols-2"
          >
            <div className="rounded-2xl border-2 border-teal-500/40 bg-teal-50/50 p-5">
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-teal-950 flex items-center gap-2">
                <span>✅</span> Lo Mejor (Ventajas en Consulta)
              </h2>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-800">
                {article.pros.map((pro, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-teal-700 font-black mt-0.5">✓</span>
                    <span className="leading-relaxed">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-amber-500/40 bg-amber-50/40 p-5">
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-amber-950 flex items-center gap-2">
                <span>⚠️</span> Puntos a Tener en Cuenta
              </h2>
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-800">
                {article.cons.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-600 font-black mt-0.5">•</span>
                    <span className="leading-relaxed">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Key Takeaways Box */}
          <div className="my-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
            <h2 className="text-sm font-black uppercase tracking-wider text-teal-900 mb-3 flex items-center gap-2">
              <span>⚡</span> Conclusiones Rápidas para el Biomagnetista
            </h2>
            <ul className="space-y-2 text-sm text-teal-900">
              {article.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-teal-700 font-black mt-0.5">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Table of Contents */}
          {article.toc.length > 1 && (
            <nav
              aria-label="Tabla de contenidos"
              className="my-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs"
            >
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-2.5">
                📋 Contenido del Análisis
              </p>
              <ol className="list-decimal space-y-1.5 pl-5 text-sm">
                {article.toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-slate-700 hover:text-teal-700 hover:underline font-medium"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#preguntas-frecuentes"
                    className="text-slate-700 hover:text-teal-700 hover:underline font-medium"
                  >
                    Preguntas Frecuentes (FAQ)
                  </a>
                </li>
              </ol>
            </nav>
          )}

          {/* First Half of Editorial Content */}
          <div
            className="article-content mt-8 max-w-none"
            dangerouslySetInnerHTML={{ __html: article.contentFirstHalf }}
          />

          {/* Mid-Article Inline Amazon Affiliate Card */}
          <AmazonAffiliateBox variant="inline" products={amazonProducts} />

          {/* Second Half of Editorial Content */}
          {article.contentSecondHalf && (
            <div
              className="article-content mt-8 max-w-none"
              dangerouslySetInnerHTML={{
                __html: article.contentSecondHalf,
              }}
            />
          )}

          {/* Bottom 3-Product Showcase */}
          <AmazonAffiliateBox
            variant="showcase"
            sectionTitle={`Imanes y Equipamiento Recomendados (${article.brand})`}
            sectionSubtitle="Compara disponibilidad y precios actuales en tu tienda Amazon con envío internacional."
            products={amazonProducts}
          />

          {/* Biomagnetismo Bens Course & Booking Block */}
          <BensSpotlight
            variant="article"
            campaign={`prod-${article.slug}`}
            primary="curso"
          />

          {/* FAQ Section */}
          <section
            id="preguntas-frecuentes"
            className="mt-12 pt-8 border-t border-slate-200"
          >
            <h2 className="text-2xl font-black text-slate-900 mb-6">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-4">
              {article.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5"
                >
                  <h3 className="text-base font-extrabold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* YMYL Medical Notice */}
          <p className="mt-10 rounded-xl bg-amber-50 p-4 text-xs text-amber-900">
            <strong>Aviso médico y de seguridad:</strong> el biomagnetismo es una
            práctica complementaria y no sustituye el diagnóstico ni el
            tratamiento médico. Los imanes terapéuticos están contraindicados en
            personas con marcapasos, desfibriladores u otros dispositivos
            electrónicos implantados.{" "}
            <Link href="/aviso-medico/" className="underline">
              Leer el aviso médico completo
            </Link>
            .
          </p>

          {/* Cluster Prev / Next Navigation Ring */}
          {clusterNav && (
            <nav
              aria-label="Navegación en la misma categoría de productos"
              className="mt-10 grid gap-4 sm:grid-cols-2 pt-8 border-t border-slate-200"
            >
              <Link
                href={`/productos/${clusterNav.prev.slug}/`}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-amber-400 hover:bg-white"
              >
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                  ← Anterior en {article.clusterLabel}
                </span>
                <p className="mt-1 text-sm font-extrabold text-slate-900 group-hover:text-teal-700">
                  {clusterNav.prev.title}
                </p>
              </Link>
              <Link
                href={`/productos/${clusterNav.next.slug}/`}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 text-right transition hover:border-amber-400 hover:bg-white"
              >
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                  Siguiente en {article.clusterLabel} →
                </span>
                <p className="mt-1 text-sm font-extrabold text-slate-900 group-hover:text-teal-700">
                  {clusterNav.next.title}
                </p>
              </Link>
            </nav>
          )}

          {/* Related Products Grid */}
          <section className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-black text-slate-900">
                Más Reseñas y Comparativas de Productos
              </h2>
              <Link
                href="/productos/"
                className="text-xs font-extrabold text-teal-700 hover:underline"
              >
                Ver los 105 productos →
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/productos/${rel.slug}/`}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs transition hover:border-amber-400 hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-extrabold text-amber-900">
                      {rel.badgeLabel}
                    </span>
                    <h3 className="mt-2 text-sm font-extrabold text-slate-900 group-hover:text-teal-700 leading-snug">
                      {rel.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-slate-600 line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <span className="mt-3 text-xs font-extrabold text-amber-700">
                    Ver análisis y precios →
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </article>

        {/* ================= STICKY RIGHT SIDEBAR ================= */}
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <AmazonAffiliateBox variant="sidebar" products={amazonProducts} />

          {/* Quick Cluster Navigation Box */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-900">
              🧲 Catálogo de Productos
            </h3>
            <ul className="mt-3 space-y-2 text-xs font-bold text-slate-700">
              <li>
                <Link
                  href="/productos/"
                  className="flex items-center justify-between rounded-lg bg-white px-3 py-2 border border-slate-200 hover:border-amber-400"
                >
                  <span>🏆 Reseñas de Imanes & Equipos</span>
                  <span className="text-amber-700">32</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/productos/"
                  className="flex items-center justify-between rounded-lg bg-white px-3 py-2 border border-slate-200 hover:border-amber-400"
                >
                  <span>⚔️ Producto vs Producto</span>
                  <span className="text-amber-700">28</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/productos/"
                  className="flex items-center justify-between rounded-lg bg-white px-3 py-2 border border-slate-200 hover:border-amber-400"
                >
                  <span>🛒 Rankings & Guías Compra</span>
                  <span className="text-amber-700">25</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/productos/"
                  className="flex items-center justify-between rounded-lg bg-white px-3 py-2 border border-slate-200 hover:border-amber-400"
                >
                  <span>📊 Gauss & Info Técnica</span>
                  <span className="text-amber-700">20</span>
                </Link>
              </li>
            </ul>
          </div>

          <BensSpotlight
            variant="sidebar"
            campaign={`prod-side-${article.slug}`}
            primary="curso"
          />
        </aside>
      </div>
    </div>
  );
}
