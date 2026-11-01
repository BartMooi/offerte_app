"use server";
import { db } from "@/db";
import { instellingen } from "@/db/schema";
import { eq } from "drizzle-orm";
import { unstable_cache } from "next/cache";

// Prijstabellen veranderen zelden: cachen, saveMatrix leegt de cache via de tag "matrix"
const getMatrixCached = unstable_cache(
  async (key: string) => {
    const result = await db.query.instellingen.findFirst({
      where: eq(instellingen.key, key),
    });

    // Geeft de data terug als die bestaat, anders een leeg object
    return result ? result.value : {};
  },
  ["matrix"],
  { tags: ["matrix"] }
);

export async function getMatrix(key: string) {
  return getMatrixCached(key);
}
