import Breadcrumbs from "./Breadcrumbs";

export default function LegalPage({
  title,
  updated = "17 de noviembre de 2026",
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Breadcrumbs items={[{ label: title }]} />
      <h1 className="mt-6 text-3xl font-black text-slate-900 md:text-4xl">{title}</h1>
      <p className="mt-2 text-xs text-slate-500">Última actualización: {updated}</p>
      <div className="article-content mt-8">{children}</div>
    </div>
  );
}
