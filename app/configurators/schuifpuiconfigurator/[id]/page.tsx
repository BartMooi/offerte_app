"use client";
import { useParams } from "next/navigation";
import { SchuifpuiCalculator } from "@/app/components/SchuifpuiCalculator";

export default function SchuifpuiDetailPage() {
  const { id } = useParams();
  return <SchuifpuiCalculator materiaal="kunststof" startSlug={typeof id === "string" ? id : undefined} />;
}
