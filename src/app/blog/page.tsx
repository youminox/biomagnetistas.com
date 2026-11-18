import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLES, CATEGORY_LABELS } from "@/data/blog";
import type { BlogCategory } from "@/data/types";
import { SITE_URL, fitTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: fitTitle("Blog de biomagnetismo: guías, precios y cursos"),
  description:
    "Guías de biomagnetismo: qué es el Par Biomagnético, cómo es una sesión, precios por país, cómo elegir biomagnetista y cómo formarte como terapeuta.",
  alternates: { canonical: `${SITE_URL}/blog/` },
};

export default function BlogIndex() {
  const cats = Object.keys(CATEGORY_LABELS) as BlogCategory[];
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Breadcrumbs items={[{ label: "Blog" }]} />
      <h1 className="mt-6 text-3xl font-black text-slate-900 md:text-5xl">Blog de biomagnetismo</h1>
      <p className="mt-3 max-w-3xl text-lg text-slate-600">
        {ARTICLES.length} guías prácticas y honestas sobre el Par Biomagnético: fundamentos, formación, precios por país
        y cómo elegir terapeuta.
      </p>
      <nav className="mt-6 flex flex-wrap gap-2">
        {cats.map((c) => (
          <a key={c} href={`#${c}`} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-teal-50">
            {CATEGORY_LABELS[c]}
          </a>
        ))}
      </nav>
      {cats.map((c) => {
        const list = ARTICLES.filter((a) => a.category === c);
        if (!list.length) return null;
        return (
          <section key={c} id={c} className="mt-14">
            <h2 className="text-2xl font-black text-slate-900">{CATEGORY_LABELS[c]}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((a) => (
                <ArticleCard key={a.slug} a={a} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
