"use client";
import { useParams } from "next/navigation";
import { KozijnConfigurator } from "@/app/components/KozijnConfigurator";

export default function ConfiguratorDetail() {
  const { id } = useParams();
  return <KozijnConfigurator preview={false} startSlug={typeof id === "string" ? id : "vast-kozijn"} />;
}
