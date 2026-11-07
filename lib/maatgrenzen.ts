/** Kleinste en grootste maat (mm) die per kozijntype besteld kan worden. Daarbuiten maakt de fabriek het niet standaard. */
export type Maatgrenzen = { minB: number; maxB: number; minH: number; maxH: number };

export const MAATGRENZEN_KUNSTSTOF: Record<string, Maatgrenzen> = {
  "vast-kozijn": { minB: 300, maxB: 2800, minH: 300, maxH: 2800 },
  "draai-kiep-kozijn": { minB: 434, maxB: 1500, minH: 589, maxH: 2400 },
  "kiep-kozijn": { minB: 424, maxB: 1800, minH: 404, maxH: 1600 },
  "vast-bovenlicht-kiep": { minB: 500, maxB: 1500, minH: 1000, maxH: 2800 },
  "dk-bovenlicht-vast": { minB: 500, maxB: 1500, minH: 1000, maxH: 2800 },
  "dk-bovenlicht-kiep": { minB: 500, maxB: 1500, minH: 1000, maxH: 2800 },
  "dk-borstwering-vast": { minB: 500, maxB: 1500, minH: 1000, maxH: 2500 },
  "draai-kiep-vast-kozijn": { minB: 824, maxB: 2400, minH: 589, maxH: 2400 },
  "draai-kiep-draai-stolp-kozijn": { minB: 848, maxB: 2400, minH: 596, maxH: 2400 },
  "vast-vast-kozijn": { minB: 600, maxB: 3600, minH: 300, maxH: 2800 },
  "dk-dk-gelijk": { minB: 824, maxB: 2400, minH: 589, maxH: 2400 },
  "kiep-vast-liggend": { minB: 1000, maxB: 3400, minH: 440, maxH: 1600 },
  "kiep-kiep-kozijn": { minB: 1000, maxB: 3400, minH: 440, maxH: 1600 },
  "dk-dk-stolp-bovenlicht-vast-2vaks": { minB: 1100, maxB: 2400, minH: 1500, maxH: 2800 },
  "dk-vast-bovenlichten-vast-2vaks": { minB: 1000, maxB: 2800, minH: 1500, maxH: 2800 },
  "dk-bovenlicht-kiep-vast-2vaks": { minB: 1300, maxB: 3000, minH: 1200, maxH: 2800 },
  "vast-bovenlicht-kiep-vast-2vaks": { minB: 1000, maxB: 3400, minH: 1500, maxH: 2600 },
  "dk-bovenlicht-vast-vast-2vaks": { minB: 1000, maxB: 3000, minH: 1200, maxH: 2800 },
  "draai-kiep-vast-draai-kiep-kozijn": { minB: 1500, maxB: 3600, minH: 600, maxH: 2400 },
  "vast-vast-vast-kozijn": { minB: 900, maxB: 3600, minH: 300, maxH: 2800 },
  "vast-draai-kiep-vast-kozijn": { minB: 1500, maxB: 3600, minH: 600, maxH: 2400 },
  "draai-kiep-vast-vast-kozijn": { minB: 1500, maxB: 3600, minH: 600, maxH: 2400 },
  "draai-kiep-draai-kiep-draai-kiep-kozijn": { minB: 1500, maxB: 3600, minH: 600, maxH: 2400 },
  "draai-kiep-vast-dk-bovenlichten-vast": { minB: 1500, maxB: 3600, minH: 1500, maxH: 2600 },
  "vast-dk-vast-bovenlichten-vast": { minB: 1500, maxB: 3600, minH: 1500, maxH: 2600 },
  "draai-kiep-vast-vast-draai-kiep-kozijn": { minB: 1800, maxB: 4000, minH: 600, maxH: 2400 },
  "draai-kiep-draai-kiep-draai-kiep-draai-kiep-kozijn": { minB: 2100, maxB: 4000, minH: 600, maxH: 2400 },
  "dk-13-vast-23": { minB: 1500, maxB: 3200, minH: 600, maxH: 2400 },
};

export const MAATGRENZEN_ALU: Record<string, Maatgrenzen> = {
  "vast-kozijn": { minB: 300, maxB: 2500, minH: 300, maxH: 2500 },
  "draai-kiep-kozijn": { minB: 500, maxB: 1400, minH: 500, maxH: 2400 },
  "kiep-kozijn": { minB: 500, maxB: 2200, minH: 500, maxH: 2200 },
  "dk-bovenlicht-vast": { minB: 500, maxB: 1200, minH: 1500, maxH: 2800 },
  "dk-13-vast-23": { minB: 1500, maxB: 3200, minH: 500, maxH: 2400 },
  "draai-kiep-vast-kozijn": { minB: 1000, maxB: 2200, minH: 500, maxH: 2400 },
  "draai-kiep-draai-stolp-kozijn": { minB: 1000, maxB: 2200, minH: 500, maxH: 2400 },
  "dk-dk-gelijk": { minB: 1000, maxB: 2200, minH: 500, maxH: 2400 },
  "vast-vast-kozijn": { minB: 600, maxB: 3600, minH: 300, maxH: 2500 },
  "vast-vast-vast-kozijn": { minB: 900, maxB: 3600, minH: 300, maxH: 2500 },
  "vast-draai-kiep-vast-kozijn": { minB: 1500, maxB: 3200, minH: 600, maxH: 2400 },
  "draai-kiep-vast-draai-kiep-kozijn": { minB: 1500, maxB: 3200, minH: 600, maxH: 2400 },
};

/**
 * Een extra maat bij kozijnen met een bovenlicht of borstwering. Het bovenlicht verandert de prijs niet;
 * de borstwering kost een paar cent per mm meer of minder dan de beginhoogte.
 */
export type ExtraMaat = { label: string; begin: number; min?: number; max?: number; prijsPerMm?: number };

export const EXTRA_MAAT: Record<string, ExtraMaat> = {
  "dk-bovenlicht-vast": { label: "Hoogte bovenlicht", begin: 500, min: 450, max: 700 },
  "vast-bovenlicht-kiep": { label: "Hoogte bovenlicht", begin: 500, min: 450, max: 700 },
  "dk-bovenlicht-kiep": { label: "Hoogte bovenlicht", begin: 500, min: 450, max: 700 },
  "dk-borstwering-vast": { label: "Hoogte borstwering", begin: 850, prijsPerMm: 0.0086 },
  "dk-dk-stolp-bovenlicht-vast-2vaks": { label: "Hoogte bovenlicht", begin: 500 },
  "dk-vast-bovenlichten-vast-2vaks": { label: "Hoogte bovenlicht", begin: 500 },
  "dk-bovenlicht-kiep-vast-2vaks": { label: "Hoogte bovenlicht", begin: 500 },
  "vast-bovenlicht-kiep-vast-2vaks": { label: "Hoogte bovenlicht", begin: 500 },
  "dk-bovenlicht-vast-vast-2vaks": { label: "Hoogte bovenlicht", begin: 500 },
  "draai-kiep-vast-dk-bovenlichten-vast": { label: "Hoogte bovenlicht", begin: 500 },
  "vast-dk-vast-bovenlichten-vast": { label: "Hoogte bovenlicht", begin: 500 },
};
