"use client";
import { ProductConfigurator } from "@/app/components/ProductConfigurator";
import { SlidingDoorDetailSVG } from "@/lib/schuifpui-svgs";
import {
  PUI_ALU_BEGINMATEN,
  PUI_ALU_CATALOGUS,
  PUI_ALU_GRENZEN,
  PUI_ALU_INFO,
  PUI_ALU_NAMEN,
  PUI_KUNSTSTOF_BEGINMATEN,
  PUI_KUNSTSTOF_CATALOGUS,
  PUI_KUNSTSTOF_GRENZEN,
  PUI_KUNSTSTOF_INFO,
  PUI_KUNSTSTOF_NAMEN,
} from "@/lib/schuifpui";

/** De calculator van de klant voor een schuifpui, kunststof of aluminium. */
export function SchuifpuiCalculator({
  materiaal,
  startSlug,
  matrix,
  voorbeeld,
}: {
  materiaal: "kunststof" | "aluminium";
  startSlug?: string;
  matrix?: unknown;
  voorbeeld?: boolean;
}) {
  const alu = materiaal === "aluminium";
  const secties = (slug: string) => (slug.includes("4") ? 4 : 2);
  return (
    <ProductConfigurator
      catalogus={alu ? PUI_ALU_CATALOGUS : PUI_KUNSTSTOF_CATALOGUS}
      namen={alu ? PUI_ALU_NAMEN : PUI_KUNSTSTOF_NAMEN}
      beginmaten={alu ? PUI_ALU_BEGINMATEN : PUI_KUNSTSTOF_BEGINMATEN}
      grenzen={alu ? PUI_ALU_GRENZEN : PUI_KUNSTSTOF_GRENZEN}
      info={alu ? PUI_ALU_INFO : PUI_KUNSTSTOF_INFO}
      tekening={(slug) => <SlidingDoorDetailSVG sections={secties(slug)} />}
      matrixSleutel={alu ? "alu_schuifpui_matrix" : "schuifpui_matrix"}
      productNaam={alu ? "Aluminium schuifpui" : "Kunststof schuifpui"}
      typeTitel="Verdeling"
      startSlug={startSlug}
      matrix={matrix}
      voorbeeld={voorbeeld}
    />
  );
}
