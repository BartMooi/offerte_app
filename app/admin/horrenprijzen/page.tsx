"use client";
import { ProductPrijzen } from "../_prijzen/product-prijzen";
import { HorCalculator, HOR_NAMEN } from "@/app/components/HorCalculator";
import { HOR_CATALOGUS } from "@/lib/horren";

export default function HorPrijzen() {
  return (
    <ProductPrijzen
      titel="Horren"
      typeTitel="Prijzen per soort hor"
      materialen={{
        kunststof: {
          sleutel: "horren_matrix",
          catalogus: HOR_CATALOGUS,
          namen: HOR_NAMEN,
          voorbeeld: (model) => <HorCalculator voorbeeld matrix={model} />,
        },
      }}
    />
  );
}
