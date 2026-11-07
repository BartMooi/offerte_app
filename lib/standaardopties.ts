import type { Toeslag } from "./prijsmotor";

/**
 * Standaardprijzen (marktindicatie) van de keuzes naast het kozijn zelf, exclusief btw.
 * Een bedrijf kan elk bedrag aanpassen of een keuze uitzetten.
 */
export type Keuze = { id: string; naam: string; toeslag: Toeslag };
/** `typen`: de typen (deuren, kozijnen) waarvoor deze keuze bestaat; zonder `typen` geldt hij voor alle typen. */
export type KeuzeGroep = { id: string; titel: string; keuzes: Keuze[]; typen?: string[] };

const FOLIE_BINNEN: Toeslag = { procent: 0.1, perM2: 6.32 };
const FOLIE_BUITEN: Toeslag = { procent: 0.05, perM2: 3.16 };
const FOLIE_BUITEN_DONKER: Toeslag = { procent: 0.075, perM2: 4.74 };
const PROFIEL_VERDIEPT: Toeslag = { procent: 0.116, perM2: 7.33 };

export const STANDAARD_KEUZES: KeuzeGroep[] = [
  {
    id: "profiel",
    titel: "Type profiel",
    keuzes: [
      { id: "vlak-82", naam: "Vlak profiel 82", toeslag: {} },
      { id: "verdiept-120", naam: "Verdiept profiel 120", toeslag: PROFIEL_VERDIEPT },
      { id: "verdiept-120-hvl", naam: "Verdiept profiel 120 HVL", toeslag: { ...PROFIEL_VERDIEPT, vast: 33.06, perVleugel: 33.06 } },
    ],
  },
  {
    id: "aanslag",
    titel: "Aanslag",
    keuzes: [
      { id: "met-t-profiel", naam: "Met T-profiel", toeslag: {} },
      { id: "zonder-t-profiel", naam: "Zonder T-profiel", toeslag: { procent: -0.107, perM2: -6.77 } },
    ],
  },
  {
    id: "kleurBinnen",
    titel: "Kleur binnenkant",
    keuzes: [
      { id: "wit", naam: "Wit", toeslag: {} },
      { id: "creme-wit", naam: "Crème wit", toeslag: {} },
      { id: "wit-houtmotief", naam: "Wit (houtmotief)", toeslag: FOLIE_BINNEN },
      { id: "creme-wit-houtmotief", naam: "Crème wit (houtmotief)", toeslag: FOLIE_BINNEN },
      { id: "antraciet-houtmotief", naam: "Antraciet (houtmotief)", toeslag: FOLIE_BINNEN },
      { id: "zwart-houtmotief", naam: "Zwart (houtmotief)", toeslag: FOLIE_BINNEN },
    ],
  },
  {
    id: "kleurBuiten",
    titel: "Kleur buitenkant",
    keuzes: [
      { id: "wit", naam: "Wit", toeslag: {} },
      { id: "creme-wit", naam: "Crème wit", toeslag: {} },
      { id: "antraciet", naam: "Antraciet", toeslag: FOLIE_BUITEN },
      { id: "zwart", naam: "Zwart", toeslag: FOLIE_BUITEN },
      { id: "blauw", naam: "Blauw", toeslag: FOLIE_BUITEN },
      { id: "groen", naam: "Groen", toeslag: FOLIE_BUITEN },
      { id: "wit-houtmotief", naam: "Wit (houtmotief)", toeslag: FOLIE_BUITEN },
      { id: "creme-wit-houtmotief", naam: "Crème wit (houtmotief)", toeslag: FOLIE_BUITEN },
      { id: "basalt-grijs", naam: "Basalt grijs", toeslag: FOLIE_BUITEN_DONKER },
      { id: "kwarts-grijs", naam: "Kwarts grijs", toeslag: FOLIE_BUITEN_DONKER },
      { id: "monumenten-blauw", naam: "Monumenten blauw", toeslag: FOLIE_BUITEN_DONKER },
      { id: "monumenten-groen", naam: "Monumenten groen", toeslag: FOLIE_BUITEN_DONKER },
    ],
  },
  {
    id: "glas",
    titel: "Type glas",
    keuzes: [
      { id: "dubbel", naam: "Dubbel glas", toeslag: {} },
      { id: "dubbel-mat", naam: "Dubbel glas (mat buitenzijde)", toeslag: { perM2: 20.43 } },
      { id: "dubbel-binnen-gelaagd", naam: "Dubbel glas binnenzijde gelaagd", toeslag: { perM2: 39.84 } },
      { id: "dubbel-binnen-gelaagd-mat", naam: "Dubbel glas binnenzijde gelaagd (mat buitenzijde)", toeslag: { perM2: 60.27 } },
      { id: "dubbel-dubbelzijdig-gelaagd", naam: "Dubbel glas dubbelzijdig gelaagd", toeslag: { perM2: 71 } },
      { id: "dubbel-dubbelzijdig-gelaagd-mat", naam: "Dubbel glas dubbelzijdig gelaagd (mat buitenzijde)", toeslag: { perM2: 93.98 } },
      { id: "sandwichpaneel", naam: "Sandwichpaneel", toeslag: { perM2: 9.53 } },
      { id: "geen-glas", naam: "Geen glas (glaslatten voor 24 mm glas)", toeslag: { perM2: -27.09 } },
      { id: "triple", naam: "Triple glas", toeslag: { perM2: 37.8 } },
      { id: "triple-mat", naam: "Triple glas (mat middelste ruit)", toeslag: { perM2: 58.23 } },
      { id: "triple-binnen-gelaagd", naam: "Triple glas binnenzijde gelaagd", toeslag: { perM2: 81.04 } },
      { id: "triple-binnen-gelaagd-mat", naam: "Triple glas binnenzijde gelaagd (mat middelste ruit)", toeslag: { perM2: 98.07 } },
      { id: "triple-dubbelzijdig-gelaagd", naam: "Triple glas dubbelzijdig gelaagd", toeslag: { perM2: 117.47 } },
      { id: "triple-dubbelzijdig-gelaagd-mat", naam: "Triple glas dubbelzijdig gelaagd (mat middelste ruit)", toeslag: { perM2: 137.91 } },
    ],
  },
  {
    id: "afstandshouder",
    titel: "Type afstandshouder",
    keuzes: [
      { id: "aluminium", naam: "Aluminium afstandshouder", toeslag: {} },
      { id: "zwart", naam: "Zwarte afstandshouder (extra isolerend)", toeslag: { perM2: 6.1 } },
    ],
  },
  {
    id: "roeden",
    titel: "Roeden",
    keuzes: [
      { id: "geen", naam: "Geen roeden", toeslag: {} },
      { id: "glas-4", naam: "Tussen het glas (18 mm), 4 vaks", toeslag: { perRaam: 44.41 } },
      { id: "glas-6", naam: "Tussen het glas (18 mm), 6 vaks", toeslag: { perRaam: 66.61 } },
      { id: "wiener-4", naam: "Wienersprossen (26 mm), 4 vaks", toeslag: { perRaam: 78.95 } },
      { id: "wiener-6", naam: "Wienersprossen (26 mm), 6 vaks", toeslag: { perRaam: 118.42 } },
    ],
  },
  {
    id: "ventilatie",
    titel: "Ventilatierooster",
    keuzes: [
      { id: "nee", naam: "Nee", toeslag: {} },
      { id: "ja", naam: "Ja", toeslag: { perMBreedte: 97.52 } },
    ],
  },
  {
    id: "voorboren",
    titel: "Voorboren",
    keuzes: [
      { id: "nee", naam: "Niet voorboren", toeslag: {} },
      { id: "ja", naam: "Kozijn voorboren", toeslag: {} },
    ],
  },
];
