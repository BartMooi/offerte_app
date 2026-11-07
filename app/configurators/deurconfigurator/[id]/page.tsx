"use client";
import { useParams } from "next/navigation";
import { DeurCalculator } from "@/app/components/DeurCalculator";

export default function DeurDetailPage() {
  const { id } = useParams();
  return <DeurCalculator materiaal="kunststof" startSlug={typeof id === "string" ? id : undefined} />;
}
