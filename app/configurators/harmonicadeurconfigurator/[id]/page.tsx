import Link from "next/link";

/** Kunststof harmonicadeuren zijn er niet als standaardproduct; wel in aluminium. */
export default function KunststofHarmonicadeurPagina() {
  return (
    <div className="mx-auto max-w-xl px-4 py-16 text-center">
      <h1 className="text-xl font-bold text-slate-900">Harmonicadeuren in aluminium</h1>
      <p className="mt-3 text-sm text-slate-600">
        Een harmonicadeur maken we in aluminium, in drie, vier of vijf delen. Kunststof is hiervoor niet beschikbaar.
      </p>
      <Link href="/aluminium/harmonicadeur" className="mt-6 inline-block rounded-lg bg-brand px-5 py-3 text-sm font-bold text-white hover:bg-brand-dark">
        Bekijk aluminium harmonicadeuren
      </Link>
    </div>
  );
}
