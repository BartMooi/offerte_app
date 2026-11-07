"use client";
import { ProductConfigurator } from "@/app/components/ProductConfigurator";
import { InzethorSVG, KlemhorSVG, PlisseHordeurSVG } from "@/lib/hor-svgs";
import { HOR_BEGINMATEN, HOR_CATALOGUS, HOR_GRENZEN, HOR_INFO } from "@/lib/horren";

const NAMEN: Record<string, string> = { inzethor: "Inzethor", klemhor: "Klemhor", "plisse-hordeur": "Plissé hordeur" };

/** De calculator van de klant voor een hor: inzethor, klemhor of plissé hordeur. */
export function HorCalculator({ startSlug, matrix, voorbeeld }: { startSlug?: string; matrix?: unknown; voorbeeld?: boolean }) {
  return (
    <ProductConfigurator
      catalogus={HOR_CATALOGUS}
      namen={NAMEN}
      beginmaten={HOR_BEGINMATEN}
      grenzen={HOR_GRENZEN}
      info={HOR_INFO}
      tekening={(slug) => (slug === "klemhor" ? <KlemhorSVG /> : slug === "plisse-hordeur" ? <PlisseHordeurSVG /> : <InzethorSVG />)}
      matrixSleutel="horren_matrix"
      productNaam="Hor"
      typeTitel="Soort hor"
      startSlug={startSlug}
      matrix={matrix}
      voorbeeld={voorbeeld}
    />
  );
}

export { NAMEN as HOR_NAMEN };
