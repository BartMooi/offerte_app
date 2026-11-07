"use client";
import { useParams } from "next/navigation";
import { RolluikCalculator } from "@/app/components/RolluikCalculator";

export default function RolluikDetailPage() {
  const { id } = useParams();
  return <RolluikCalculator startSlug={typeof id === "string" ? id : undefined} />;
}
