"use client";

import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/app/components/navbar/navbar";
import PageHeroSection from "@/app/components/hero-section/page-hero-section";
import PriceList from "@/app/components/prisliste/prisliste";
import styles from "@/app/components/prices-page/prices-page.module.css";
import Link from "next/link";
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

export default function Prices() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");

  const [sections, setSections] = useState<PriceSection[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Ensure /public/prices.yaml exists (served as /prices.yaml)
      const res = await fetch(`/prices.yaml?ts=${Date.now()}`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

      const text = await res.text();

      // Parse YAML -> unknown
      const unknownData = yaml.load(text) as unknown;

      // Validate + narrow
      const parsed: PricesYaml = PricesYamlSchema.parse(unknownData);

      setSections(parsed.sections);
    } catch (e: any) {
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
      <PageHeroSection heading="Priser" imagePath="/images/money2.jpg" />

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

        <Tilbud />
      </div>
    </>
  );
}

function Tilbud() {
  return (
    <div className={styles.tilbudContainer}>
      <Link href="/kunderabat">
        <div className={styles.tilbudHeader}>
          <h3>Kunde rabatter på tekstiltøj!</h3>
        </div>
        <div className={styles.tilbudContent}>
          <ul>
            <li>15% studierabat</li>
            <li>15% pensionistrabat</li>
            <li>Klik for at læse mere</li>
          </ul>
        </div>
      </Link>
    </div>
  );
}
