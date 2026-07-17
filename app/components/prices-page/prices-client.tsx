"use client";

import { useCallback, useEffect, useState } from "react";
import yaml from "js-yaml";
import PriceList from "@/app/components/prisliste/prisliste";
import {
  PricesYamlSchema,
  type PriceSection,
  type PricesYaml,
} from "@/app/types/prices";

type PricesClientProps = {
  initialSections: PriceSection[];
  yamlUrl: string;
};

export default function PricesClient({
  initialSections,
  yamlUrl,
}: PricesClientProps) {
  const [sections, setSections] = useState(initialSections);
  const [service, setService] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  const loadRuntimePrices = useCallback(async () => {
    setError(null);
    try {
      const res = await fetch(`${yamlUrl}?ts=${Date.now()}`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

      const text = await res.text();
      const data = yaml.load(text) as unknown;
      const parsed: PricesYaml = PricesYamlSchema.parse(data);
      setSections(parsed.sections);
    } catch (e) {
      console.error(e);
      setError(
        "De nyeste priser kunne ikke hentes lige nu. Viser den senest byggede prisliste."
      );
    }
  }, [yamlUrl]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setService(params.get("service") ?? undefined);
    void loadRuntimePrices();
  }, [loadRuntimePrices]);

  return (
    <>
      {error && <p>{error}</p>}

      {sections.map((sec) => (
        <PriceList
          key={sec.heading}
          heading={sec.heading}
          items={sec.items}
          highlightService={service}
        />
      ))}
    </>
  );
}
