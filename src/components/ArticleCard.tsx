import Pic from "./Pic";
import Link from "next/link";
import type { BlogArticle } from "@/data/types";
import { CATEGORY_LABELS, articleImage } from "@/data/blog";

export default function ArticleCard({ a }: { a: BlogArticle }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
      <Link href={`/blog/${a.slug}/`}>
        <Pic src={articleImage(a)} alt={a.imageAlt} className="h-44 w-full object-cover" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[11px] font-extrabold uppercase tracking-wider text-teal-700">
          {CATEGORY_LABELS[a.category]}
        </span>
        <h3 className="mt-1.5 font-extrabold leading-snug text-slate-900 group-hover:text-teal-700">
          <Link href={`/blog/${a.slug}/`}>{a.title}</Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm text-slate-600">{a.excerpt}</p>
        <span className="mt-auto pt-3 text-xs text-slate-500">{a.readTime} de lectura</span>
      </div>
    </article>
  );
}
