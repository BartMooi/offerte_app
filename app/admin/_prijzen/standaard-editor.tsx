"use client";
import { useState } from "react";
import { KOZIJN_GROEPEN, KOZIJN_NAMEN } from "@/lib/kozijn-namen";
import { KOZIJN_CATALOGUS, keuzeToeslag, leegModel, nieuwStandaardModel, typeRecept, type Catalogus, type StandaardModel } from "@/lib/prijsmodel";
import type { Toeslag, TypeRecept } from "@/lib/prijsmotor";
import { Kaart, PrijsVeld, Rij } from "./prijs-veld";

type ToeslagSleutel = Exclude<keyof Toeslag, "metGlas">;

// Onderdelen van een toeslag, met de eenheid waarin het bedrijf ze invult.
const TOESLAG_VELDEN: { sleutel: ToeslagSleutel; label: string; eenheid: "€" | "%"; schaal: number }[] = [
  { sleutel: "procent", label: "% van het kozijn", eenheid: "%", schaal: 100 },
  { sleutel: "perM2", label: "per m²", eenheid: "€", schaal: 1 },
  { sleutel: "perRaam", label: "per raam", eenheid: "€", schaal: 1 },
  { sleutel: "perVleugel", label: "per draai/kiep-raam", eenheid: "€", schaal: 1 },
  { sleutel: "perMBreedte", label: "per meter breedte", eenheid: "€", schaal: 1 },
  { sleutel: "vast", label: "vast bedrag", eenheid: "€", schaal: 1 },
];

const TYPE_VELDEN: { sleutel: "basis" | "perMBreedte" | "perMHoogte" | "perM2"; label: string; kort: string }[] = [
  { sleutel: "basis", label: "Vast bedrag per kozijn", kort: "Vast bedrag" },
  { sleutel: "perMBreedte", label: "Per meter breedte", kort: "Per m breedte" },
  { sleutel: "perMHoogte", label: "Per meter hoogte", kort: "Per m hoogte" },
  { sleutel: "perM2", label: "Per m² glas", kort: "Per m² glas" },
];

const afronden = (n: number) => Math.round(n * 100) / 100;

/**
 * Prijzen instellen met de standaardprijzen als basis: een prijsniveau (schuif), montage, en
 * waar het bedrijf wil afwijken per kozijntype of per keuze.
 */
export function StandaardEditor({
  model,
  onChange,
  catalogus = KOZIJN_CATALOGUS,
  namen = KOZIJN_NAMEN,
  typeTitel = "Prijzen per kozijntype",
  groepen = KOZIJN_GROEPEN,
}: {
  model: StandaardModel;
  onChange: (m: StandaardModel) => void;
  /** Types en keuzes van het product; standaard die van kozijnen. */
  catalogus?: Catalogus;
  namen?: Record<string, string>;
  typeTitel?: string;
  /** Indeling van de types in groepen; standaard die van kozijnen. Types die er niet in staan komen onderaan. */
  groepen?: { titel: string; slugs: string[] }[];
}) {
  const [reset, setReset] = useState(0);
  // Hoeveel goedkoper (min) of duurder (plus) dan de standaardprijzen, in procenten.
  const verschil = Math.round((model.factor - 1) * 100);
  const aangepast = Object.keys(model.typen ?? {}).length + Object.values(model.keuzes ?? {}).reduce((n, g) => n + Object.keys(g).length, 0);

  const zetType = (slug: string, sleutel: keyof TypeRecept, waarde: number) =>
    onChange({ ...model, typen: { ...model.typen, [slug]: { ...model.typen?.[slug], [sleutel]: waarde } } });

  const zetToeslag = (groep: string, id: string, sleutel: ToeslagSleutel, waarde: number) =>
    onChange({
      ...model,
      keuzes: { ...model.keuzes, [groep]: { ...model.keuzes?.[groep], [id]: { ...keuzeToeslag(model, groep, id, catalogus), [sleutel]: waarde } } },
    });

  const resetAlles = () => {
    onChange(model.zelf ? leegModel(catalogus) : nieuwStandaardModel());
    setReset((r) => r + 1);
  };
  // Groepen met alleen de types die dit product heeft; wat nergens in staat komt in een laatste groep.
  const alleSlugs = Object.keys(catalogus.typen);
  const ingedeeld = new Set(groepen.flatMap((g) => g.slugs));
  const typeGroepen = [
    ...groepen.map((g) => ({ ...g, slugs: g.slugs.filter((s) => alleSlugs.includes(s)) })),
    { titel: groepen.length ? "Overige" : typeTitel, slugs: alleSlugs.filter((s) => !ingedeeld.has(s)) },
  ].filter((g) => g.slugs.length > 0);

  const wijkt = model.factor !== 1 || (model.montage ?? 0) > 0 || (model.btw !== undefined && model.btw !== 21) || model.montageApart === true || aangepast > 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs text-slate-500">{model.zelf ? "Dit zijn je eigen prijzen." : wijkt ? "Je prijzen wijken af van de standaardprijzen." : "Dit zijn de standaardprijzen."}</p>
        <button
          type="button"
          disabled={!wijkt}
          onClick={resetAlles}
          className="shrink-0 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent">
          {model.zelf ? "Alles leegmaken" : "Reset standaardprijzen"}
        </button>
      </div>

      {!model.zelf && (
        <Kaart
          titel="Goedkoper of duurder dan de standaardprijzen"
          uitleg="Zet de schuif en al je prijzen gaan in één keer mee, zonder verder werk. Wil je 30% goedkoper zijn, zet hem dan op 30% goedkoper.">
          <div className="space-y-3 px-4 py-4">
            <p className="text-3xl font-bold text-slate-900">
              {verschil === 0 ? "Standaardprijzen" : verschil < 0 ? `${-verschil}% goedkoper` : `${verschil}% duurder`}
            </p>
            <input
              type="range"
              min={-50}
              max={50}
              step={1}
              value={Math.min(50, Math.max(-50, verschil))}
              aria-label="Goedkoper of duurder dan de standaardprijzen, in procenten"
              onChange={(e) => onChange({ ...model, factor: 1 + Number(e.target.value) / 100 })}
              className="w-full accent-[var(--color-brand)]"
            />
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>50% goedkoper</span>
              <span>standaard</span>
              <span>50% duurder</span>
            </div>
            <button
              type="button"
              disabled={!wijkt}
              onClick={resetAlles}
              className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent">
              Reset standaardprijzen
            </button>
          </div>
        </Kaart>
      )}

      <Kaart titel="Montage" uitleg="Een vast bedrag per kozijn, exclusief btw. De standaardprijzen zijn zonder montage. Laat leeg als je geen montage rekent.">
        <Rij naam="Montage per kozijn">
          <PrijsVeld key={`montage-${reset}`} label="Montage per kozijn" standaard={0} waarde={model.montage ?? 0} onChange={(n) => onChange({ ...model, montage: n })} />
        </Rij>
        <fieldset className="space-y-2 px-4 py-3">
          <legend className="sr-only">Hoe laat je de montage zien?</legend>
          {[
            { apart: false, titel: "Montage inbegrepen in de prijs", tekst: "De montage zit in de prijs van het kozijn. De offerte zegt: inclusief montage." },
            { apart: true, titel: "Montage apart vermelden", tekst: "De klant ziet de montage als aparte regel bovenop het kozijn." },
          ].map((o) => (
            <label key={o.titel} className="flex cursor-pointer items-start gap-3">
              <input
                type="radio"
                name="montage-tonen"
                checked={(model.montageApart ?? false) === o.apart}
                onChange={() => onChange({ ...model, montageApart: o.apart })}
                className="mt-1 accent-[var(--color-brand)]"
              />
              <span>
                <span className="block text-sm text-slate-800">{o.titel}</span>
                <span className="block text-xs text-slate-500">{o.tekst}</span>
              </span>
            </label>
          ))}
        </fieldset>
      </Kaart>

      <Kaart titel="Btw" uitleg="Alle prijzen hier zijn exclusief btw. Particulieren zien de prijs inclusief btw, zakelijke klanten exclusief, met de btw apart op de offerte.">
        <Rij naam="Btw-percentage">
          <PrijsVeld key={`btw-${reset}`} label="Btw-percentage" eenheid="%" standaard={21} waarde={model.btw ?? 21} onChange={(n) => onChange({ ...model, btw: n })} />
        </Rij>
      </Kaart>

      {typeGroepen.map((gr, i) => (
        <Kaart key={gr.titel} titel={gr.titel} uitleg={i === 0 ? "De standaardprijzen, exclusief btw. Staat er bij vast bedrag \"inbegrepen\", dan zit het al in de prijs per meter. Reken je zelf een vast bedrag, vul het dan in en zet de prijs per meter lager." : undefined}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[36rem] text-left">
              <thead className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase">
                <tr>
                  <th className="px-4 py-2">Kozijn</th>
                  {TYPE_VELDEN.map((v) => (
                    <th key={v.sleutel} className="px-2 py-2 text-right">
                      {v.kort}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {gr.slugs.map((slug) => {
                  const recept = typeRecept(model, slug, catalogus)!;
                  const eigen = TYPE_VELDEN.some((v) => Math.abs(recept[v.sleutel] - catalogus.typen[slug][v.sleutel]) > 0.004);
                  return (
                    <tr key={`${slug}-${reset}`}>
                      <td className="px-4 py-1.5 text-xs text-slate-800">
                        {namen[slug] ?? slug}
                        {eigen && !model.zelf && <span className="ml-1 text-[10px] font-semibold text-brand-text">aangepast</span>}
                      </td>
                      {TYPE_VELDEN.map((v) => (
                        <td key={v.sleutel} className="px-2 py-1.5">
                          <PrijsVeld
                            breedte="w-[7.5rem]"
                            standaard={model.zelf ? undefined : afronden(catalogus.typen[slug][v.sleutel])}
                            leeg={!model.zelf && v.sleutel === "basis" && afronden(catalogus.typen[slug].basis) === 0 ? "inbegrepen" : undefined}
                            label={`${namen[slug] ?? slug}: ${v.label}`}
                            waarde={afronden(recept[v.sleutel])}
                            onChange={(n) => zetType(slug, v.sleutel, n)}
                          />
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Kaart>
      ))}

      {catalogus.keuzes.map((groep) => (
        <Kaart key={groep.id} titel={groep.titel} uitleg={`Wat deze keuze erbij kost. Laat een bedrag op € 0 als je er niets voor rekent.${groep.typen ? ` Geldt alleen voor: ${groep.typen.map((s) => namen?.[s] ?? s).join(", ")}.` : ""}`}>
          {groep.keuzes.map((k) => {
            const t = keuzeToeslag(model, groep.id, k.id, catalogus);
            const velden = TOESLAG_VELDEN.filter((v) => t[v.sleutel] !== undefined);
            return (
              <div key={`${k.id}-${reset}`} className="px-4 py-2.5">
                <p className="text-sm text-slate-800">{k.naam}</p>
                {velden.length === 0 ? (
                  <p className="text-xs text-slate-400">Geen toeslag</p>
                ) : (
                  <div className="mt-1.5 space-y-1.5">
                    {velden.map((v) => (
                      <div key={v.sleutel} className="flex items-center justify-between gap-4">
                        <span className="text-xs text-slate-500">{v.label}</span>
                        <PrijsVeld
                          label={`${k.naam}: ${v.label}`}
                          eenheid={v.eenheid}
                          standaard={model.zelf ? undefined : afronden((k.toeslag[v.sleutel] ?? 0) * v.schaal)}
                          waarde={afronden((t[v.sleutel] ?? 0) * v.schaal)}
                          onChange={(n) => zetToeslag(groep.id, k.id, v.sleutel, n / v.schaal)}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </Kaart>
      ))}
    </div>
  );
}
