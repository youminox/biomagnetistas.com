import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ label: "Inicio", href: "/" }, ...items];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${SITE_URL}${c.href}` } : {}),
    })),
  };
  return (
    <nav aria-label="Migas de pan" className="text-xs text-slate-500">
      <ol className="flex flex-wrap items-center gap-1.5">
        {all.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {c.href && i < all.length - 1 ? (
              <Link href={c.href} className="hover:text-teal-700 hover:underline">
                {c.label}
              </Link>
            ) : (
              <span className="font-semibold text-slate-700">{c.label}</span>
            )}
            {i < all.length - 1 && <span aria-hidden>›</span>}
          </li>
        ))}
      </ol>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </nav>
  );
}
