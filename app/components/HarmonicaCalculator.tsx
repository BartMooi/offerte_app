"use client";
import { ProductConfigurator } from "@/app/components/ProductConfigurator";
import { HarmonicadeurSVG } from "@/lib/harmonicadeur-svgs";
import { HARMONICA_BEGINMATEN, HARMONICA_CATALOGUS, HARMONICA_GRENZEN, HARMONICA_INFO } from "@/lib/harmonicadeuren";

export const HARMONICA_NAMEN: Record<string, string> = {
  "aluminium-harmonicadeur-3delig": "Driedelig",
  "aluminium-harmonicadeur-4delig": "Vierdelig",
  "aluminium-harmonicadeur-5delig": "Vijfdelig",
};
const secties = (slug: string): 3 | 4 | 5 => (slug.includes("5") ? 5 : slug.includes("4") ? 4 : 3);
// Oude links gebruikten driedelig, vierdelig en vijfdelig.
const naarSlug = (id?: string) =>
  id?.includes("vijf") || id?.includes("5") ? "aluminium-harmonicadeur-5delig" : id?.includes("vier") || id?.includes("4") ? "aluminium-harmonicadeur-4delig" : id ? "aluminium-harmonicadeur-3delig" : undefined;

/** De calculator van de klant voor een aluminium harmonicadeur. */
export function HarmonicaCalculator({ startSlug, matrix, voorbeeld }: { startSlug?: string; matrix?: unknown; voorbeeld?: boolean }) {
  return (
    <ProductConfigurator
      catalogus={HARMONICA_CATALOGUS}
      namen={HARMONICA_NAMEN}
      beginmaten={HARMONICA_BEGINMATEN}
      grenzen={HARMONICA_GRENZEN}
      info={HARMONICA_INFO}
      tekening={(slug) => <HarmonicadeurSVG sections={secties(slug)} />}
      matrixSleutel="alu_harmonicadeur_matrix"
      productNaam="Aluminium harmonicadeur"
      typeTitel="Verdeling"
      startSlug={naarSlug(startSlug)}
      matrix={matrix}
      voorbeeld={voorbeeld}
    />
  );
}
