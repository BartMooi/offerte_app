"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image, { getImageProps } from "next/image";

const GEVELS = [
  { id: "rood", naam: "Rode steen" },
  { id: "stuc", naam: "Wit stucwerk" },
  { id: "donker", naam: "Donkere steen" },
] as const;

export type GevelId = (typeof GEVELS)[number]["id"];

// De meest gekozen kozijnkleuren in Nederland. De sleutel is ook de sleutel in de prijsinstellingen.
export const KOZIJN_KLEUREN = [
  { id: "wit", naam: "Wit (RAL 9016)", hex: "#F6F6F6" },
  { id: "antraciet", naam: "Antraciet (RAL 7016)", hex: "#383E42" },
  { id: "zwart", naam: "Zwart (RAL 9005)", hex: "#111625" },
] as const;

// Kozijntypes waarvan er nagekeken foto's zijn. Andere types houden de tekening.
const TYPES_MET_FOTO = new Set(["dk-13-vast-23"]);

// Telefoon eerst: de foto is de hele breedte, op desktop 7 van de 12 kolommen.
const FOTO_SIZES = "(min-width: 1024px) 652px, calc(100vw - 32px)";
const TEGEL_SIZES = "(min-width: 1024px) 210px, 30vw";

const fotoPad = (gevel: string, slug: string, kleur: string) => `/gevels/${gevel}-${slug}-${kleur}.jpg`;
const isFotoKleur = (kleur: string) => KOZIJN_KLEUREN.some((k) => k.id === kleur);

/** Is er voor dit type en deze kleur een foto (en dus een gevelkeuze)? */
export function heeftGevelFoto(slug: string, kleur: string) {
  return TYPES_MET_FOTO.has(slug) && isFotoKleur(kleur);
}

/**
 * Toont het kozijn als foto op een gekozen gevel. Is er voor dit type geen foto,
 * dan blijft de tekening (children) staan. De gevel telt niet mee in de prijs.
 */
export function GevelFoto({
  slug,
  kozijnNaam,
  kleur,
  gevel,
  children,
}: {
  slug: string;
  kozijnNaam: string;
  kleur: string;
  gevel: GevelId;
  children: ReactNode;
}) {
  const metFoto = TYPES_MET_FOTO.has(slug);

  // Haal alle foto's van dit type alvast op, zodat wisselen geen flits geeft.
  useEffect(() => {
    if (!metFoto) return;
    for (const g of GEVELS) {
      for (const k of KOZIJN_KLEUREN) {
        const { props } = getImageProps({ src: fotoPad(g.id, slug, k.id), alt: "", fill: true, sizes: FOTO_SIZES });
        const img = new window.Image();
        img.sizes = props.sizes ?? "";
        img.srcset = props.srcSet ?? "";
        img.src = props.src;
      }
    }
  }, [metFoto, slug]);

  if (!metFoto || !isFotoKleur(kleur)) return <>{children}</>;

  const gevelNaam = GEVELS.find((g) => g.id === gevel)!.naam.toLowerCase();
  const kleurNaam = KOZIJN_KLEUREN.find((k) => k.id === kleur)!.naam;

  return (
    <div>
      <div className="relative aspect-3/2 w-full overflow-hidden rounded-xl bg-slate-100 sm:aspect-4/3">
        <Image
          src={fotoPad(gevel, slug, kleur)}
          alt={`${kozijnNaam} in ${kleurNaam} op een gevel van ${gevelNaam}`}
          fill
          sizes={FOTO_SIZES}
          loading="eager"
          fetchPriority="high"
          className="object-cover"
        />
      </div>

    </div>
  );
}

/** De drie gevels om uit te kiezen; de gevel telt niet mee in de prijs. */
export function GevelKeuze({
  slug,
  kleur,
  gevel,
  onGevel,
}: {
  slug: string;
  kleur: string;
  gevel: GevelId;
  onGevel: (g: GevelId) => void;
}) {
  if (!heeftGevelFoto(slug, kleur)) return null;
  return (
    <div>
      <div role="group" aria-label="Gevel" className="">
        <p className="mb-1.5 text-xs font-bold text-slate-800">Kies je gevel</p>
        <div className="grid grid-cols-3 gap-2">
          {GEVELS.map((g) => (
            <button
              key={g.id}
              type="button"
              aria-pressed={g.id === gevel}
              onClick={() => onGevel(g.id)}
              className={`rounded-lg border-2 p-0.5 text-[10px] leading-tight font-semibold sm:p-1 sm:text-[11px] text-slate-800 transition-colors ${
                g.id === gevel ? "border-brand" : "border-slate-200 hover:border-slate-400"
              }`}
            >
              <span className="relative mb-1 block aspect-16/9 overflow-hidden rounded-[5px] bg-slate-100">
                <Image src={fotoPad(g.id, slug, kleur)} alt="" fill sizes={TEGEL_SIZES} className="object-cover" />
              </span>
              {g.naam}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
