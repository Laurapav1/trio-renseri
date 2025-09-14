"use client";

import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/app/components/navbar/navbar";
import PageHeroSection from "@/app/components/hero-section/page-hero-section";
import PriceList from "@/app/components/prisliste/prisliste";
import styles from "@/app/components/prices-page/prices-page.module.css";
import yaml from "js-yaml";
import { z } from "zod";

/** ========= Zod schema & types ========= */
const PriceItemSchema = z.object({
  name: z.string(),
  prices: z.array(z.string()),
});

const PriceSectionSchema = z.object({
  heading: z.string(),
  items: z.array(PriceItemSchema),
});

const PricesYamlSchema = z
  .object({
    sections: z.array(PriceSectionSchema),
  })
  .strict();

type PriceItem = z.infer<typeof PriceItemSchema>;
type PriceSection = z.infer<typeof PriceSectionSchema>;
type PricesYaml = z.infer<typeof PricesYamlSchema>;
/** ===================================== */

export default function PricesSkrædder() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");

  const [sections, setSections] = useState<PriceSection[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/skraedder-priser.yaml?ts=${Date.now()}`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

      const text = await res.text();
      const unknownData = yaml.load(text) as unknown;

      const parsed: PricesYaml = PricesYamlSchema.parse(unknownData);
      setSections(parsed.sections);
    } catch (e: any) {
      // Client-friendly copy, dev details still logged
      if (e?.issues) {
        console.error("Zod validation failed:", e.issues);
        setError("Der er en fejl i prislisten. Vi arbejder på at rette det.");
      } else {
        console.error(e);
        setError(
          "Vi kunne desværre ikke hente priserne lige nu. Prøv igen om lidt."
        );
      }
      setSections(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <>
      <Navbar />
      <PageHeroSection
        heading="Skrædder Priser"
        imagePath="/images/money2.jpg"
      />

      <div className={styles.container}>
        {loading && <p>Indlæser…</p>}

        {!loading && error && (
          <div className={styles.errorBox}>
            <p>{error}</p>
            <button onClick={load}>Prøv igen</button>
          </div>
        )}

        {sections?.map((sec) => (
          <PriceList
            key={sec.heading}
            heading={sec.heading}
            items={sec.items as PriceItem[]}
            highlightService={service ?? undefined}
          />
        ))}
      </div>
    </>
  );
}
