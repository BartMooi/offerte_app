"use client";
import { useParams } from "next/navigation";
import { HorCalculator } from "@/app/components/HorCalculator";

export default function HorDetailPage() {
  const { id } = useParams();
  return <HorCalculator startSlug={typeof id === "string" ? id : undefined} />;
}
