/**
 * Rekenmotor voor kozijnprijzen: elk kozijntype heeft een "recept" van vier onderdelen:
 * een vast bedrag, een bedrag per meter breedte, een bedrag per meter hoogte en een bedrag
 * per m² (het glas). Alle bedragen zijn exclusief btw.
 */
export type TypeRecept = {
  basis: number;
  perMBreedte: number;
  perMHoogte: number;
  perM2: number;
  /** Onder deze breedte (mm) wordt de prijs van deze breedte gerekend; kleiner kan niet. */
  minBreedte?: number;
  /** Onder deze hoogte (mm) wordt de prijs van deze hoogte gerekend; lager kan niet. */
  minHoogte?: number;
  /** Boven deze breedte (mm) groeit de prijs niet meer: groter kan niet. */
  maxBreedte?: number;
  /**
   * Correctie op de formule voor kozijnen waarvan de prijs in stappen loopt: wat de standaardprijs per maat
   * meer of minder is dan de formule geeft, in euro, correctie[hoogte][breedte]. Tussen twee maten wordt
   * gerekend langs de lijn, buiten de tabel blijft de correctie van de rand staan. Past een bedrijf de
   * getallen aan, dan blijft de correctie gewoon meetellen.
   */
  correctie?: { breedtes: number[]; hoogtes: number[]; waarden: number[][] };
  /**
   * Vaste bedragen die bij dit type bovenop een keuze komen ("groep:keuze", in euro), omdat deze keuze bij
   * dit kozijn anders uitpakt dan de standaardregel geeft, bijvoorbeeld door een bovenlicht.
   */
  toeslagExtra?: Record<string, number>;
  /**
   * Een keuzegroep die bij dit type anders prijst dan de standaard: voor de keuzes in de groep die normaal
   * iets kosten telt dan dit bedrag (leeg = gratis). Bijvoorbeeld een kleur die hier per meter rekent.
   */
  toeslagVervang?: Record<string, Toeslag>;
  /** Vast deel van de prijs dat buiten de percentages valt (bijvoorbeeld het standaard slot van een schuifpui). */
  procentAftrek?: number;
  /** Eigen aanpassing van dit type: 1 = standaard, 0,9 = 10% goedkoper. */
  aanpassing?: number;
};

/** Waarde op een rij punten (x oplopend) met rechte lijnen ertussen; buiten de rij blijft de waarde van de rand. */
function langsLijn(xs: number[], ys: number[], x: number): number {
  if (xs.length === 1 || x <= xs[0]) return ys[0];
  if (x >= xs[xs.length - 1]) return ys[ys.length - 1];
  let i = 1;
  while (x > xs[i]) i++;
  const f = (x - xs[i - 1]) / (xs[i] - xs[i - 1]);
  return ys[i - 1] + (ys[i] - ys[i - 1]) * f;
}

function breedteInMeters(recept: TypeRecept, breedteMm: number) {
  return Math.min(Math.max(breedteMm, recept.minBreedte ?? 0), recept.maxBreedte ?? Infinity) / 1000;
}

function hoogteInMeters(recept: TypeRecept, hoogteMm: number) {
  return Math.max(hoogteMm, recept.minHoogte ?? 0) / 1000;
}

/** Kozijnprijs met de eigen getallen van het bedrijf (of de standaard), plus de correctie, zonder aanpassing in procenten. */
function standaardKozijn(recept: TypeRecept, breedteMm: number, hoogteMm: number): number {
  const breedte = breedteInMeters(recept, breedteMm);
  const hoogte = hoogteInMeters(recept, hoogteMm);
  const formule = recept.basis + recept.perMBreedte * breedte + recept.perMHoogte * hoogte + recept.perM2 * breedte * hoogte;
  const c = recept.correctie;
  if (!c) return formule;
  const perHoogte = c.waarden.map((rij) => langsLijn(c.breedtes, rij, breedte * 1000));
  return Math.max(0, formule + langsLijn(c.hoogtes, perHoogte, hoogte * 1000));
}

/** Prijs van het kozijn zelf (zonder opties), exclusief btw. */
export function typePrijs(recept: TypeRecept, breedteMm: number, hoogteMm: number): number {
  return standaardKozijn(recept, breedteMm, hoogteMm) * (recept.aanpassing ?? 1);
}

/** Kozijnprijs zonder het standaard glas: de basis voor toeslagen in procenten. */
function zonderGlas(recept: TypeRecept, breedteMm: number, hoogteMm: number): number {
  return (
    standaardKozijn(recept, breedteMm, hoogteMm) -
    recept.perM2 * breedteInMeters(recept, breedteMm) * hoogteInMeters(recept, hoogteMm) -
    (recept.procentAftrek ?? 0)
  );
}

/**
 * Wat een keuze (kleur, profiel, glas, ...) aan de prijs toevoegt. Alle onderdelen zijn optioneel
 * en worden bij elkaar opgeteld; alle bedragen zijn exclusief btw.
 */
export type Toeslag = {
  /** Vast bedrag per kozijn. */
  vast?: number;
  /** Vast bedrag per raam (vak) in het kozijn. */
  perRaam?: number;
  /** Vast bedrag per draaiend of kantelend raam. */
  perVleugel?: number;
  /** Per m² van het hele kozijn. */
  perM2?: number;
  /** Per meter breedte; bij een keuze in maar een deel van het kozijn telt alleen dat deel (aandeelBreedte). */
  perMBreedte?: number;
  /** Percentage (0,10 = 10%) van de kozijnprijs zonder glas: vast bedrag plus de meters breedte en hoogte. */
  procent?: number;
  /** Het percentage rekent over de hele kozijnprijs, glas inbegrepen. */
  metGlas?: boolean;
};

/** Hoe het kozijn in elkaar zit, voor toeslagen die per raam of per vleugel rekenen. */
export type KozijnInfo = { vakken: number; vleugels: number };

export function toeslagPrijs(
  recept: TypeRecept,
  toeslag: Toeslag,
  breedteMm: number,
  hoogteMm: number,
  kozijn: KozijnInfo,
  aandeelBreedte = 1,
): number {
  const breedte = breedteInMeters(recept, breedteMm);
  const hoogte = hoogteInMeters(recept, hoogteMm);
  return (
    (toeslag.vast ?? 0) +
    (toeslag.perRaam ?? 0) * kozijn.vakken +
    (toeslag.perVleugel ?? 0) * kozijn.vleugels +
    (toeslag.perM2 ?? 0) * breedte * hoogte +
    (toeslag.perMBreedte ?? 0) * breedte * aandeelBreedte +
    (toeslag.procent ?? 0) * (toeslag.metGlas ? standaardKozijn(recept, breedteMm, hoogteMm) : zonderGlas(recept, breedteMm, hoogteMm))
  );
}
