"use client";
import { useParams } from "next/navigation";
import { HarmonicaCalculator } from "@/app/components/HarmonicaCalculator";

export default function AluHarmonicadeurDetailPage() {
  const { id } = useParams();
  return <HarmonicaCalculator startSlug={typeof id === "string" ? id : undefined} />;
}
