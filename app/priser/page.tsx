"use client";

import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/app/components/navbar/navbar";
import PageHeroSection from "@/app/components/hero-section/page-hero-section";
import PriceList from "@/app/components/prisliste/prisliste";
import styles from "@/app/components/prices-page/prices-page.module.css";
import Link from "next/link";

type PriceItem = { name: string; prices: string[] };
type PriceSection = { heading: string; items: PriceItem[] };
type PricesJson = { sections: PriceSection[] };

function isValidJson(data: any): data is PricesJson {
  return (
    data &&
    Array.isArray(data.sections) &&
    data.sections.every(
      (sec: any) =>
        typeof sec.heading === "string" &&
        Array.isArray(sec.items) &&
        sec.items.every(
          (item: any) =>
            typeof item.name === "string" &&
            Array.isArray(item.prices) &&
            item.prices.every((p: any) => typeof p === "string")
        )
    )
  );
}

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
      const res = await fetch(`/prices.json?ts=${Date.now()}`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error(res.statusText);
      const data = await res.json();
      if (!isValidJson(data))
        throw new Error("Priser-filen har et forkert format.");
      setSections(data.sections);
    } catch (e: any) {
      setError(e?.message || "Kunne ikke hente priser.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <>
      <Navbar />
      <PageHeroSection heading="Priser" imagePath="/images/money2.jpg" />

      <div className={styles.container}>
        {loading && <p>Indlæser…</p>}
        {!loading && error && (
          <div style={{ color: "red", marginBottom: 16 }}>
            <p>{error}</p>
            <button onClick={load}>Prøv igen</button>
          </div>
        )}

        {sections?.map((sec) => (
          <PriceList
            key={sec.heading}
            heading={sec.heading}
            items={sec.items}
            highlightService={service}
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
