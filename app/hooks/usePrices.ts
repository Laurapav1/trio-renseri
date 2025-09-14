"use client";

import { useCallback, useEffect, useState } from "react";
import yaml from "js-yaml";
import {
  PricesYamlSchema,
  type PriceSection,
  type PricesYaml,
} from "@/app/types/prices";

type UsePricesResult = {
  sections: PriceSection[] | null;
  loading: boolean;
  error: string | null;
  reload: () => void;
};

export function usePrices(url: string): UsePricesResult {
  const [sections, setSections] = useState<PriceSection[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${url}?ts=${Date.now()}`, { cache: "no-store" });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

      const text = await res.text();
      const unknownData = yaml.load(text) as unknown;

      const parsed: PricesYaml = PricesYamlSchema.parse(unknownData);
      setSections(parsed.sections);
    } catch (e: any) {
      console.error(e);
      // Client-friendly copy (keep dev details in console)
      const msg = e?.issues
        ? "Der er en fejl i prislisten. Vi arbejder på at rette det."
        : "Vi kunne desværre ikke hente priserne lige nu. Prøv igen om lidt.";
      setError(msg);
      setSections(null);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    void load();
  }, [load]);

  return { sections, loading, error, reload: load };
}
