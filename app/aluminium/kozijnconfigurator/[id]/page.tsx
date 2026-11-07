"use client";
import { useParams } from "next/navigation";
import { KozijnConfigurator } from "@/app/components/KozijnConfigurator";

export default function AluKozijnConfiguratorDetail() {
  const { id } = useParams();
  return <KozijnConfigurator preview={false} product="aluminium" startSlug={typeof id === "string" ? id : "vast-kozijn"} />;
}
