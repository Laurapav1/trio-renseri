// components/PriceList.tsx
"use client";

import { useSearchParams } from "next/navigation";
import Navbar from "@/app/components/navbar/navbar";
import PageHeroSection from "@/app/components/hero-section/page-hero-section";
import PriceList from "@/app/components/prisliste/prisliste";
import styles from "@/app/components/prices-page/prices-page.module.css";
import Link from "next/link";

export default function Prices() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");

  return (
    <>
      <Navbar />
      <PageHeroSection
        heading="Skrædder Priser"
        imagePath="/images/money2.jpg"
      />
      <div className={styles.container}>
        <PriceList
          heading="Bukser"
          items={[
            { name: "Oplægning stikning", prices: ["150 DKK"] },
            { name: "Oplægning m/lynlås", prices: ["210 DKK"] },
            { name: "Oplægning blindstik", prices: ["150 DKK"] },
            { name: "Oplægning m/slidbånd/opslag", prices: ["160 DKK"] },
            { name: "Oplægning m/slidt kant jeans", prices: ["160 DKK"] },
            { name: "Oplægning m/knaphul/snor", prices: ["190 DKK"] },
            { name: "Livvidde+/-", prices: ["150 DKK"] },
            { name: "Lårvidde", prices: ["170 DKK"] },
            { name: "Ny lynlås", prices: ["170 DKK"] },
          ]}
          highlightService={service}
        />
        <PriceList
          heading="Jakker"
          items={[
            { name: "Ærmer +/-", prices: ["250 DKK"] },
            { name: "Ærmer - (ved skulder)", prices: ["300 DKK"] },
            { name: "Længde +/-", prices: ["300 DKK"] },
            { name: "Vat på skulder", prices: ["125 DKK"] },
            { name: "Ny lynlås", prices: ["375 DKK"] },
          ]}
          highlightService={service}
        />
        <PriceList
          heading="Kjoler"
          items={[
            { name: "Stropper kortes fra", prices: ["80 DKK"] },
            { name: "Ind i ærmegab", prices: ["110 DKK"] },
            { name: "Ny lynlås", prices: ["190 DKK"] },
            { name: "Kjoler korte", prices: ["fra 160 DKK"] },
          ]}
          highlightService={service}
        />
        <PriceList
          heading="Skindjakker"
          items={[
            { name: "Ærmer +/-", prices: ["300 DKK"] },
            { name: "Ny lynlås excl lynlås", prices: ["320 DKK"] },
            { name: "Knapper", prices: ["75 DKK"] },
            { name: "Nyt foer - foer fra", prices: ["650 DKK"] },
          ]}
          highlightService={service}
        />
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
          <h3>Kunde rabatter!</h3>
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
