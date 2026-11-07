import type { KeuzeGroep } from "./standaardopties";
import type { TypeRecept } from "./prijsmotor";
import type { Catalogus } from "./prijsmodel";
import type { Maatgrenzen } from "./maatgrenzen";

/** Standaardprijzen (marktindicatie), exclusief btw. Gegenereerd uit metingen; zie lib/prijsmotor.ts voor de rekenregel. */

export const ROLLUIK_TYPEN: Record<string, TypeRecept> = {
  "rolluik": { basis: 42.6, perMBreedte: 10.39, perMHoogte: -2.6, perM2: 71.52, minBreedte: 500, maxBreedte: 3600, minHoogte: 500, correctie: { breedtes: [500, 1000, 1550, 2050, 2550, 3100, 3600], hoogtes: [500, 900, 1300, 1700, 2100, 2500, 2900], waarden: [[17.43, 10.05, 1.94, -5.44, -12.81, -20.93, 21.67], [16.72, 7.6, -2.43, -11.55, -20.67, -30.7, 50.13], [16.02, 5.15, -6.8, -17.66, -28.53, -40.48, 58.48], [15.31, 2.7, -11.17, -23.78, -36.38, -50.25, 54.45], [14.61, 0.25, -15.53, -29.89, -44.24, 64.76, 53.05], [13.9, -2.19, -19.9, -36.0, 70.11, 60.83, -85.91], [13.2, -4.64, -24.27, -42.11, 81.8, 71.95, -97.43]] } },
  "screen": { basis: 55.97, perMBreedte: 47.24, perMHoogte: -0.0, perM2: 56.68, minBreedte: 500, maxBreedte: 4000, minHoogte: 500 },
  "inbouw-rolluik": { basis: 26.58, perMBreedte: 10.73, perMHoogte: 3.22, perM2: 58.95, minBreedte: 500, maxBreedte: 3600, minHoogte: 500, correctie: { breedtes: [500, 1000, 1550, 2050, 2550, 3100, 3600], hoogtes: [500, 900, 1300, 1700, 2100, 2500, 2900], waarden: [[10.62, 4.01, 1.97, -3.83, -9.63, -16.02, 11.98], [8.34, 0.73, -0.4, -6.55, -12.71, -19.47, 35.21], [10.88, 4.38, -2.77, -9.28, -15.78, -22.93, 38.17], [9.24, 2.39, -5.15, -12.0, -18.85, -26.39, 28.64], [7.6, 0.4, -7.52, -14.72, -21.92, 35.98, 17.55], [5.97, -1.59, -9.89, -17.45, 39.46, 22.67, -40.86], [4.33, -3.57, -12.27, -20.17, 46.7, 28.17, -44.66]] } },
};

export const ROLLUIK_KEUZES: KeuzeGroep[] = [
  {
    id: "hoogteOmkastingInCm",
    titel: "Hoogte omkasting in cm",
    typen: ["rolluik"],
    keuzes: [
      { id: "13-7", naam: "13,7", toeslag: {} },
      { id: "15", naam: "15", toeslag: {} },
      { id: "16-5", naam: "16,5", toeslag: { procent: 0.323, perM2: -24.27 } },
      { id: "18", naam: "18", toeslag: { procent: 0.3907, perM2: -27.83 } },
      { id: "20-5", naam: "20,5", toeslag: { vast: 50.23 } },
    ],
  },
  {
    id: "kleurLamellen",
    titel: "Kleur lamellen",
    typen: ["rolluik", "inbouw-rolluik"],
    keuzes: [
      { id: "wit", naam: "Wit", toeslag: {} },
      { id: "cr-me-wit-ral-9001", naam: "Crème Wit (RAL 9001)", toeslag: {} },
      { id: "antraciet-grijs", naam: "Antraciet grijs", toeslag: {} },
      { id: "donker-bruin", naam: "Donker bruin", toeslag: {} },
      { id: "bos-groen", naam: "Bos groen", toeslag: {} },
      { id: "bruin", naam: "Bruin", toeslag: {} },
      { id: "grijs", naam: "Grijs", toeslag: {} },
      { id: "licht-beige", naam: "Licht beige", toeslag: {} },
      { id: "staal-blauw", naam: "Staal blauw", toeslag: {} },
      { id: "zilver", naam: "Zilver", toeslag: {} },
      { id: "zwart", naam: "Zwart", toeslag: {} },
      { id: "zwart-grijs", naam: "Zwart grijs", toeslag: {} },
    ],
  },
  {
    id: "kleurOmkasting",
    titel: "Kleur omkasting",
    typen: ["rolluik", "screen"],
    keuzes: [
      { id: "wit", naam: "Wit", toeslag: {} },
      { id: "cr-me-wit-ral-9001", naam: "Crème Wit (RAL 9001)", toeslag: {} },
      { id: "antraciet-grijs", naam: "Antraciet grijs", toeslag: {} },
      { id: "donker-bruin", naam: "Donker bruin", toeslag: {} },
      { id: "bos-groen", naam: "Bos groen", toeslag: {} },
      { id: "bruin", naam: "Bruin", toeslag: {} },
      { id: "grijs", naam: "Grijs", toeslag: {} },
      { id: "licht-beige", naam: "Licht beige", toeslag: {} },
      { id: "staal-blauw", naam: "Staal blauw", toeslag: {} },
      { id: "zilver", naam: "Zilver", toeslag: {} },
      { id: "zwart", naam: "Zwart", toeslag: {} },
      { id: "zwart-grijs", naam: "Zwart grijs", toeslag: {} },
    ],
  },
  {
    id: "kleurGeleiderEnOnderlat",
    titel: "Kleur geleider en onderlat",
    typen: ["rolluik", "inbouw-rolluik"],
    keuzes: [
      { id: "wit", naam: "Wit", toeslag: {} },
      { id: "cr-me-wit-ral-9001", naam: "Crème Wit (RAL 9001)", toeslag: {} },
      { id: "antraciet-grijs", naam: "Antraciet grijs", toeslag: {} },
      { id: "donker-bruin", naam: "Donker bruin", toeslag: {} },
      { id: "bos-groen", naam: "Bos groen", toeslag: {} },
      { id: "bruin", naam: "Bruin", toeslag: {} },
      { id: "grijs", naam: "Grijs", toeslag: {} },
      { id: "licht-beige", naam: "Licht beige", toeslag: {} },
      { id: "staal-blauw", naam: "Staal blauw", toeslag: {} },
      { id: "zilver", naam: "Zilver", toeslag: {} },
      { id: "zwart", naam: "Zwart", toeslag: {} },
      { id: "zwart-grijs", naam: "Zwart grijs", toeslag: {} },
      { id: "antraciet-grijs-ren-7016-05", naam: "Antraciet grijs (Ren. 7016.05)", toeslag: { procent: 0.07 } },
    ],
  },
  {
    id: "typeBediening",
    titel: "Type bediening",
    keuzes: [
      { id: "handbediening-band", naam: "Handbediening band", toeslag: {} },
      { id: "somfy-rs100-solar-meest-gekozen", naam: "Somfy RS100 Solar (meest gekozen)", toeslag: { vast: 337.99 } },
      { id: "huismerk-motor", naam: "Huismerk motor", toeslag: { vast: 63.77 } },
      { id: "huismerk-motor-radio-smart", naam: "Huismerk motor Radio (Smart)", toeslag: { vast: 94.21 } },
      { id: "huismerk-motor-radio-solar", naam: "Huismerk motor Radio (Solar)", toeslag: { vast: 286.45 } },
      { id: "somfy-motor-solus", naam: "Somfy motor Solus", toeslag: { vast: 113.63 } },
      { id: "somfy-motor-rs100-io", naam: "Somfy motor RS100 IO", toeslag: { perMBreedte: 114.52 } },
      { id: "somfy-motor-oximo-rts", naam: "Somfy motor Oximo RTS", toeslag: { perMBreedte: 99.77 } },
      { id: "handbediening-band-buiten", naam: "Handbediening band (buiten)", toeslag: { vast: 19.17 } },
      { id: "huismerk-motor-geschikt-voor-schakelaar", naam: "Huismerk motor (geschikt voor schakelaar)", toeslag: { vast: 85.8 } },
      { id: "somfy-motor-geschikt-voor-schakelaar", naam: "Somfy motor (geschikt voor schakelaar)", toeslag: { vast: 180.88 } },
      { id: "somfy-motor-io", naam: "Somfy motor IO", toeslag: { vast: 249.15 } },
      { id: "somfy-solar-io", naam: "Somfy Solar IO", toeslag: { vast: 383.31 } },
    ],
  },
  {
    id: "kabelLengte",
    titel: "Kabel lengte",
    typen: ["rolluik"],
    keuzes: [
      { id: "niet-van-toepassing", naam: "Niet van toepassing", toeslag: {} },
      { id: "1-5-meter", naam: "1,5 meter", toeslag: {} },
      { id: "2-5-meter", naam: "2,5 meter", toeslag: {} },
      { id: "5-meter", naam: "5 meter", toeslag: { vast: 19.12 } },
      { id: "10-meter", naam: "10 meter", toeslag: { vast: 26.45 } },
    ],
  },
  {
    id: "bedieningszijde",
    titel: "Bedieningszijde",
    keuzes: [
      { id: "links-achter-onder-meest-gekozen", naam: "Links achter onder (meest gekozen)", toeslag: {} },
      { id: "rechts-achter-onder-meest-gekozen", naam: "Rechts achter onder (meest gekozen)", toeslag: {} },
      { id: "links-achter-boven", naam: "Links achter boven", toeslag: {} },
      { id: "links-voor-boven", naam: "Links voor boven", toeslag: {} },
      { id: "links-voor-onder", naam: "Links voor onder", toeslag: {} },
      { id: "rechts-achter-boven", naam: "Rechts achter boven", toeslag: {} },
      { id: "rechts-voor-boven", naam: "Rechts voor boven", toeslag: {} },
      { id: "rechts-voor-onder", naam: "Rechts voor onder", toeslag: {} },
      { id: "niet-van-toepassing", naam: "Niet van toepassing", toeslag: {} },
    ],
  },
  {
    id: "toebehoren",
    titel: "Toebehoren",
    keuzes: [
      { id: "geen", naam: "Geen", toeslag: {} },
      { id: "opbouw-draaischakelaar", naam: "Opbouw draaischakelaar", toeslag: { vast: 16.53 } },
      { id: "inbouw-draaischakelaar", naam: "Inbouw draaischakelaar", toeslag: { vast: 16.53 } },
      { id: "opbouw-sleutelschakelaar", naam: "Opbouw sleutelschakelaar", toeslag: { vast: 54.53 } },
      { id: "inbouw-sleutelschakelaar", naam: "Inbouw sleutelschakelaar", toeslag: { vast: 54.53 } },
      { id: "huismerk-motor-afstandsbediening-1-kanaals", naam: "Huismerk motor afstandsbediening 1 kanaals", toeslag: { vast: 41.31 } },
      { id: "huismerk-motor-afstandsbediening-5-kanaals", naam: "Huismerk motor afstandsbediening 5 kanaals", toeslag: { vast: 46.27 } },
      { id: "via-mobiel-situo-1-voor-somfy-io-motor-somfy-tahoma-switch", naam: "Via mobiel (Situo 1 voor Somfy IO motor + Somfy Tahoma Switch)", toeslag: { vast: 148.73 } },
      { id: "situo-1-pure-voor-somfy-io-motor", naam: "Situo 1 Pure voor Somfy IO motor", toeslag: { vast: 49.58 } },
      { id: "situo-5-pure-voor-somfy-io-motor", naam: "Situo 5 Pure voor Somfy IO motor", toeslag: { vast: 57.84 } },
      { id: "situo-1-rts-voor-somfy-rts-motor", naam: "Situo 1 RTS  voor Somfy RTS motor", toeslag: { vast: 49.58 } },
      { id: "situo-5-rts-voor-somfy-rts-motor", naam: "Situo 5 RTS  voor Somfy RTS motor", toeslag: { vast: 74.37 } },
      { id: "situo-1-pure", naam: "Situo 1 Pure", toeslag: { vast: 47.91 } },
      { id: "situo-5-pure", naam: "Situo 5 Pure", toeslag: { vast: 71.87 } },
    ],
  },
  {
    id: "typeOmkasting",
    titel: "Type omkasting",
    typen: ["rolluik"],
    keuzes: [
      { id: "standaard-vierkant", naam: "Standaard vierkant", toeslag: {} },
      { id: "half-rond-design", naam: "Half rond (Design)", toeslag: { perM2: 9.92 } },
    ],
  },
  {
    id: "typeGeleider",
    titel: "Type geleider",
    typen: ["rolluik", "screen"],
    keuzes: [
      { id: "vlakke-geleider-5-3-cm", naam: "Vlakke geleider (5,3 cm)", toeslag: {} },
      { id: "hoek-geleider-5-3-cm", naam: "Hoek geleider (5,3 cm)", toeslag: { perMBreedte: 10.21 } },
      { id: "afstand-geleider-12mm-5-3-cm", naam: "Afstand geleider 12mm (5,3 cm)", toeslag: { perMBreedte: 10.21 } },
      { id: "afstand-geleider-20mm-5-3-cm", naam: "Afstand geleider 20mm (5,3 cm)", toeslag: { perMBreedte: 10.21 } },
      { id: "1x-vlakke-geleider-5-3-cm-1x-hoek-geleider-5-3-cm", naam: "1x Vlakke geleider (5,3 cm) + 1x Hoek geleider (5,3 cm)", toeslag: { perMBreedte: 5.11 } },
      { id: "vlakke-geleider-windprotector", naam: "Vlakke geleider (windprotector)", toeslag: { perMBreedte: 3.46 } },
      { id: "hoek-geleider", naam: "Hoek geleider", toeslag: { perMBreedte: 5.19 } },
      { id: "hoek-geleider-windprotector", naam: "Hoek geleider (windprotector)", toeslag: { perMBreedte: 10.39 } },
      { id: "afstand-geleider", naam: "Afstand geleider", toeslag: { perMBreedte: 6.93 } },
    ],
  },
  {
    id: "valseVensterbank",
    titel: "Valse vensterbank",
    keuzes: [
      { id: "geen", naam: "Geen", toeslag: {} },
      { id: "30x20mm", naam: "30x20mm", toeslag: { perMBreedte: 4.76 } },
      { id: "50x25mm", naam: "50x25mm", toeslag: { perMBreedte: 7.72 } },
      { id: "40x20mm", naam: "40x20mm", toeslag: { perMBreedte: 11.3 } },
      { id: "70x20mm", naam: "70x20mm", toeslag: { perMBreedte: 15.82 } },
    ],
  },
  {
    id: "montageMaterialen",
    titel: "Montage materialen",
    typen: ["rolluik"],
    keuzes: [
      { id: "geen", naam: "Geen", toeslag: {} },
      { id: "spaanplaatschroeven-pluggen", naam: "Spaanplaatschroeven + pluggen", toeslag: { vast: 1.76 } },
      { id: "spaanplaatschroeven", naam: "Spaanplaatschroeven", toeslag: { vast: 0.88 } },
    ],
  },
  {
    id: "screenOfRitsscreen",
    titel: "Screen of Ritsscreen",
    typen: ["screen"],
    keuzes: [
      { id: "screen", naam: "Screen", toeslag: {} },
      { id: "ritsscreen", naam: "Ritsscreen", toeslag: { perMBreedte: 49.6 } },
    ],
  },
  {
    id: "kleurDoek",
    titel: "Kleur doek",
    typen: ["screen"],
    keuzes: [
      { id: "antraciet-grijs", naam: "Antraciet grijs", toeslag: {} },
      { id: "blauw-grijs", naam: "Blauw grijs", toeslag: {} },
      { id: "donker-grijs", naam: "Donker grijs", toeslag: {} },
      { id: "grijs", naam: "Grijs", toeslag: {} },
      { id: "licht-zand", naam: "Licht zand", toeslag: {} },
      { id: "taupe", naam: "Taupe", toeslag: {} },
      { id: "wit", naam: "Wit", toeslag: {} },
      { id: "zand", naam: "Zand", toeslag: {} },
      { id: "verduisterend-antraciet", naam: "Verduisterend antraciet", toeslag: {} },
      { id: "verduisterend-donkergrijs", naam: "Verduisterend donkergrijs", toeslag: {} },
      { id: "verduisterend-wit", naam: "Verduisterend wit", toeslag: {} },
    ],
  },
  {
    id: "kleurZijgeleidersEnOnderlat",
    titel: "Kleur zijgeleiders en onderlat",
    typen: ["screen"],
    keuzes: [
      { id: "antraciet-grijs-ral-7016", naam: "Antraciet grijs (RAL 7016)", toeslag: {} },
      { id: "bos-groen-ral-6009", naam: "Bos groen (RAL 6009)", toeslag: {} },
      { id: "cr-me-wit-ral-9001", naam: "Crème Wit (RAL 9001)", toeslag: {} },
      { id: "staal-blauw-ral-5011", naam: "Staal blauw (RAL 5011)", toeslag: {} },
      { id: "technisch-zilver-geanodiseerd", naam: "Technisch zilver (geanodiseerd)", toeslag: {} },
      { id: "wit-ral-9010", naam: "Wit (RAL 9010)", toeslag: {} },
      { id: "wit-ral-9016", naam: "Wit (RAL 9016)", toeslag: {} },
    ],
  },
];

export const ROLLUIK_CATALOGUS: Catalogus = { typen: ROLLUIK_TYPEN, keuzes: ROLLUIK_KEUZES };

export const ROLLUIK_NAMEN: Record<string, string> = { rolluik: "Rolluik", "inbouw-rolluik": "Inbouw rolluik", screen: "Screen" };

export const ROLLUIK_BEGINMATEN: Record<string, [number, number]> = {"rolluik": [2050, 1700], "screen": [2250, 1750], "inbouw-rolluik": [2050, 1700]};

export const ROLLUIK_INFO: Record<string, { vakken: number; vleugels: number }> = {"rolluik": {"vakken": 1, "vleugels": 1}, "screen": {"vakken": 1, "vleugels": 1}, "inbouw-rolluik": {"vakken": 1, "vleugels": 1}};

export const ROLLUIK_GRENZEN: Record<string, Maatgrenzen> = {"rolluik": {"minB": 500, "maxB": 3600, "minH": 500, "maxH": 2900}, "screen": {"minB": 500, "maxB": 4000, "minH": 500, "maxH": 3000}, "inbouw-rolluik": {"minB": 500, "maxB": 3600, "minH": 500, "maxH": 2900}};

/** Namen van de prijsvelden per type in het prijsscherm. */
export const ROLLUIK_VELDEN = {
  basis: { label: "Vast bedrag per stuk", kort: "Vast bedrag" },
  perMBreedte: { label: "Per meter breedte", kort: "Per m breedte" },
  perMHoogte: { label: "Per meter hoogte", kort: "Per m hoogte" },
  perM2: { label: "Per m² oppervlak", kort: "Per m²" },
};
