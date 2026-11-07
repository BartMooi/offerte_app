"use client";
import { ProductConfigurator } from "@/app/components/ProductConfigurator";
import { InbouwRolluikSVG, RolluikSVG, ScreenSVG } from "@/lib/rolluik-svgs";
import { ROLLUIK_BEGINMATEN, ROLLUIK_CATALOGUS, ROLLUIK_GRENZEN, ROLLUIK_INFO, ROLLUIK_NAMEN } from "@/lib/rolluiken";

export const rolluikTekening = (slug: string) => (slug === "inbouw-rolluik" ? <InbouwRolluikSVG /> : slug === "screen" ? <ScreenSVG /> : <RolluikSVG />);

/** De calculator van de klant voor rolluiken, inbouwrolluiken en screens. */
export function RolluikCalculator({ startSlug, matrix, voorbeeld }: { startSlug?: string; matrix?: unknown; voorbeeld?: boolean }) {
  return (
    <ProductConfigurator
      catalogus={ROLLUIK_CATALOGUS}
      namen={ROLLUIK_NAMEN}
      beginmaten={ROLLUIK_BEGINMATEN}
      grenzen={ROLLUIK_GRENZEN}
      info={ROLLUIK_INFO}
      tekening={rolluikTekening}
      matrixSleutel="rolluiken_matrix"
      productNaam="Rolluiken"
      typeTitel="Soort"
      startSlug={startSlug}
      matrix={matrix}
      voorbeeld={voorbeeld}
    />
  );
}
