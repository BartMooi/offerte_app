/** Leesbare namen van de kozijntypes, op slug. */
export const KOZIJN_NAMEN: Record<string, string> = {
  "vast-kozijn": "Vast kozijn",
  "draai-kiep-kozijn": "Draai kiep kozijn",
  "kiep-kozijn": "Kiep kozijn",
  "vast-bovenlicht-kiep": "Vast met bovenlicht kiep",
  "dk-bovenlicht-vast": "Draai/kiep met bovenlicht vast",
  "dk-bovenlicht-kiep": "Draai/kiep met bovenlicht kiep",
  "dk-borstwering-vast": "Draai/kiep met borstwering",
  "dk-13-vast-23": "Draai kiep 1/3 - Vast 2/3",
  "draai-kiep-vast-kozijn": "Draai kiep - Vast",
  "draai-kiep-draai-stolp-kozijn": "Draai kiep - Draai kiep",
  "vast-vast-kozijn": "Vast - Vast",
  "dk-dk-gelijk": "Draai kiep - Draai kiep gelijk",
  "kiep-vast-liggend": "Kiep - vast kozijn",
  "kiep-kiep-kozijn": "Kiep - kiep kozijn",
  "dk-dk-stolp-bovenlicht-vast-2vaks": "Draai/kiep - draai stolp bovenlicht",
  "dk-vast-bovenlichten-vast-2vaks": "Draai/kiep - vast bovenlichten",
  "dk-bovenlicht-kiep-vast-2vaks": "Draai/kiep bovenlicht kiep - vast",
  "vast-bovenlicht-kiep-vast-2vaks": "Vast bovenlicht kiep - vast",
  "dk-bovenlicht-vast-vast-2vaks": "Draai/kiep bovenlicht vast - vast",
  "draai-kiep-vast-draai-kiep-kozijn": "Draai kiep - Vast - Draai kiep",
  "vast-vast-vast-kozijn": "Vast - Vast - Vast",
  "vast-draai-kiep-vast-kozijn": "Vast - Draai kiep - Vast",
  "draai-kiep-vast-vast-kozijn": "Draai/kiep - Vast - Vast",
  "draai-kiep-draai-kiep-draai-kiep-kozijn": "3x Draai/kiep",
  "draai-kiep-vast-dk-bovenlichten-vast": "DK - Vast - DK bovenlichten",
  "vast-dk-vast-bovenlichten-vast": "Vast - DK - Vast bovenlichten",
  "draai-kiep-vast-vast-draai-kiep-kozijn": "DK - Vast - Vast - DK",
  "draai-kiep-draai-kiep-draai-kiep-draai-kiep-kozijn": "4x Draai kiep",
};

/** Indeling van de kozijntypes in groepen, voor een overzichtelijk prijzenscherm. */
export const KOZIJN_GROEPEN: { titel: string; slugs: string[] }[] = [
  { titel: "Eén raam", slugs: ["vast-kozijn", "draai-kiep-kozijn", "kiep-kozijn"] },
  { titel: "Eén raam met bovenlicht of borstwering", slugs: ["vast-bovenlicht-kiep", "dk-bovenlicht-vast", "dk-bovenlicht-kiep", "dk-borstwering-vast"] },
  {
    titel: "Twee ramen naast elkaar",
    slugs: ["dk-13-vast-23", "draai-kiep-vast-kozijn", "draai-kiep-draai-stolp-kozijn", "vast-vast-kozijn", "dk-dk-gelijk", "kiep-vast-liggend", "kiep-kiep-kozijn"],
  },
  {
    titel: "Twee ramen met bovenlicht",
    slugs: ["dk-dk-stolp-bovenlicht-vast-2vaks", "dk-vast-bovenlichten-vast-2vaks", "dk-bovenlicht-kiep-vast-2vaks", "vast-bovenlicht-kiep-vast-2vaks", "dk-bovenlicht-vast-vast-2vaks"],
  },
  {
    titel: "Drie ramen naast elkaar",
    slugs: ["draai-kiep-vast-draai-kiep-kozijn", "vast-vast-vast-kozijn", "vast-draai-kiep-vast-kozijn", "draai-kiep-vast-vast-kozijn", "draai-kiep-draai-kiep-draai-kiep-kozijn"],
  },
  { titel: "Drie ramen met bovenlichten", slugs: ["draai-kiep-vast-dk-bovenlichten-vast", "vast-dk-vast-bovenlichten-vast"] },
  { titel: "Vier ramen naast elkaar", slugs: ["draai-kiep-vast-vast-draai-kiep-kozijn", "draai-kiep-draai-kiep-draai-kiep-draai-kiep-kozijn"] },
];
