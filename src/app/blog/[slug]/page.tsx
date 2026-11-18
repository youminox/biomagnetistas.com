import Pic from "@/components/Pic";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import BensSpotlight from "@/components/BensSpotlight";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLES, ARTICLE_BY_SLUG, CATEGORY_LABELS, articleImage, relatedArticles } from "@/data/blog";
import { COUNTRY_BY_SLUG } from "@/data/countries";
import { SITE_NAME, SITE_URL, clampDescription, fitTitle, formatDateEs } from "@/lib/site";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = ARTICLE_BY_SLUG[slug];
  if (!a) return {};
  const url = `${SITE_URL}/blog/${a.slug}/`;
  return {
    title: fitTitle(a.seoTitle),
    description: clampDescription(a.metaDescription),
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: a.seoTitle,
      description: clampDescription(a.metaDescription),
      url,
      publishedTime: a.publishedAt,
      modifiedTime: a.updatedAt,
      images: [{ url: `${SITE_URL}${articleImage(a)}`, width: 1536, height: 1024, alt: a.imageAlt }],
    },
  };
}

/** Inserta un marcador antes del 3.er <h2> (tras 2 secciones) para la tarjeta inline. */
function splitContent(html: string): [string, string] {
  const re = /<h2[\s>]/g;
  let count = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    count++;
    if (count === 3) return [html.slice(0, m.index), html.slice(m.index)];
  }
  return [html, ""];
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = ARTICLE_BY_SLUG[slug];
  if (!a) notFound();
  const url = `${SITE_URL}/blog/${a.slug}/`;
  const [first, rest] = splitContent(a.content);
  const related = relatedArticles(a, 3);
  const campaign = `blog-${a.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: a.title,
        description: a.metaDescription,
        image: `${SITE_URL}${articleImage(a)}`,
        datePublished: a.publishedAt,
        dateModified: a.updatedAt,
        inLanguage: "es",
        mainEntityOfPage: url,
        author: { "@type": "Organization", name: `Redacción ${SITE_NAME}`, url: `${SITE_URL}/nosotros/` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        keywords: a.focusKeyword,
      },
      ...(a.faqs.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: a.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={[{ label: "Blog", href: "/blog/" }, { label: CATEGORY_LABELS[a.category] }]} />

      <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article>
          <span className="text-xs font-extrabold uppercase tracking-wider text-teal-700">
            {CATEGORY_LABELS[a.category]}
          </span>
          <h1 className="mt-2 text-3xl font-black leading-tight text-slate-900 md:text-[2.6rem]">{a.title}</h1>
          <p className="mt-4 text-lg text-slate-600">{a.excerpt}</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
            <span>Por <Link href="/nosotros/" className="font-semibold underline">Redacción Biomagnetistas.com</Link></span>
            <span>Actualizado: {formatDateEs(a.updatedAt)}</span>
            <span>{a.readTime} de lectura</span>
            {a.relatedCountrySlugs.slice(0, 4).map((c) => (
              <span key={c}>{COUNTRY_BY_SLUG[c]?.flag}</span>
            ))}
          </div>

          <Pic
            src={articleImage(a)}
            alt={a.imageAlt}
            className="mt-6 aspect-[3/2] w-full rounded-2xl object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 900px"
          />

          {a.keyTakeaways.length > 0 && (
            <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-6">
              <p className="font-black text-teal-900">Lo esencial en 30 segundos</p>
              <ul className="mt-3 space-y-2 text-sm text-teal-900">
                {a.keyTakeaways.map((k) => (
                  <li key={k}>✓ {k}</li>
                ))}
              </ul>
            </div>
          )}

          {a.toc.length > 0 && (
            <nav className="mt-6 rounded-2xl border border-slate-200 p-6" aria-label="Índice">
              <p className="font-black text-slate-900">Contenido</p>
              <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm">
                {a.toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="text-slate-700 hover:text-teal-700 hover:underline">
                      {t.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="article-content mt-8" dangerouslySetInnerHTML={{ __html: first }} />
          {rest && (
            <>
              <BensSpotlight variant={a.primaryCta === "curso" ? "inline-curso" : "inline-reserva"} campaign={campaign} />
              <div className="article-content" dangerouslySetInnerHTML={{ __html: rest }} />
            </>
          )}

          <BensSpotlight variant="article" campaign={`${campaign}-end`} primary={a.primaryCta} />

          {a.faqs.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-black text-slate-900">Preguntas frecuentes</h2>
              <div className="mt-4 divide-y divide-slate-200 rounded-2xl border border-slate-200">
                {a.faqs.map((f) => (
                  <details key={f.question} className="p-5">
                    <summary className="cursor-pointer list-none font-bold text-slate-900">{f.question}</summary>
                    <p className="mt-3 text-slate-600">{f.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <p className="mt-10 rounded-xl bg-amber-50 p-4 text-xs text-amber-900">
            <strong>Aviso médico:</strong> contenido informativo. El biomagnetismo es una práctica complementaria y no
            sustituye el diagnóstico ni el tratamiento de un profesional de la salud. Ante síntomas persistentes o
            graves, consulta a tu médico. <Link href="/aviso-medico/" className="underline">Leer el aviso médico completo</Link>.
          </p>
        </article>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <BensSpotlight variant="sidebar" campaign={`${campaign}-side`} primary={a.primaryCta} />
          <div className="rounded-2xl border border-slate-200 p-5">
            <p className="font-black text-slate-900">Busca por país</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {Object.values(COUNTRY_BY_SLUG).map((c) => (
                <Link
                  key={c.slug}
                  href={`/pais/${c.slug}/`}
                  className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700 hover:bg-teal-50"
                >
                  {c.flag} {c.name}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-black text-slate-900">Sigue leyendo</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ArticleCard key={r.slug} a={r} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
