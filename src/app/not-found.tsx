import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="text-6xl">🧲</p>
      <h1 className="mt-4 text-3xl font-black text-slate-900">Página no encontrada</h1>
      <p className="mt-3 text-slate-600">La página que buscas no existe o cambió de dirección.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="rounded-xl bg-teal-700 px-5 py-3 text-sm font-bold text-white">Ir al inicio</Link>
        <Link href="/blog/" className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold">Ver el blog</Link>
      </div>
    </div>
  );
}
