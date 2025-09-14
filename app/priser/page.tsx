"use client";

import { useSearchParams } from "next/navigation";
import Navbar from "@/app/components/navbar/navbar";
import PageHeroSection from "@/app/components/hero-section/page-hero-section";
import PriceList from "@/app/components/prisliste/prisliste";
import styles from "@/app/components/prices-page/prices-page.module.css";
import { usePrices } from "@/app/hooks/usePrices";

export default function PricesRens() {
  const service = useSearchParams().get("service") ?? undefined;
  const { sections, loading, error, reload } = usePrices("/priser.yaml");

  return (
    <>
      <Navbar />
      <PageHeroSection heading="Priser" imagePath="/images/money2.jpg" />

      <div className={styles.container}>
        {loading && <p>Indlæser…</p>}

        {!loading && error && (
          <div className={styles.errorBox}>
            <p>{error}</p>
            <button onClick={reload}>Prøv igen</button>
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
      </div>
    </>
  );
}
