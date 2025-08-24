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
      <PageHeroSection heading="Priser" imagePath="/images/money2.jpg" />
      <div className={styles.container}>
        <PriceList
          heading="Herretøj"
          items={[
            {
              name: "Skjorter",
              prices: ["1 stk. 25 DKK", "5 stk. 110DKK"],
            },
            { name: "Frakker", prices: ["250 DKK"] },
            { name: "Frakke ¾", prices: ["195 DKK"] },
            { name: "Cotton coat", prices: ["225 DKK"] },
            { name: "Jakker", prices: ["165 DKK"] },
            { name: "Benklæder", prices: ["115 DKK"] },
            { name: "Habit", prices: ["265 DKK"] },
            { name: "Slips", prices: ["65 DKK"] },
            { name: "Vindjakker", prices: ["185 DKK"] },
            { name: "Dunejakker", prices: ["300 DKK"] },
            { name: "Dunefrakker", prices: ["350 DKK"] },
            { name: "Veste", prices: ["75 DKK"] },
            { name: "Veste, vind, dun", prices: ["185 DKK"] },
            { name: "Smoking", prices: ["295 DKK"] },
            { name: "Herrekjoler", prices: ["315 DKK"] },
            {
              name: "Canada goose jakke inkl. Imprægnering",
              prices: ["fra 400 DKK"],
            },
          ]}
          highlightService={service}
        />
        <PriceList
          heading="Dametøj"
          items={[
            { name: "Frakker", prices: ["250 DKK"] },
            { name: "Cotton coat", prices: ["225 DKK"] },
            { name: "Jakker", prices: ["169 DKK"] },
            { name: "Benklæder", prices: ["119 DKK"] },
            { name: "Kjoler, korte", prices: ["fra 175 DKK"] },
            { name: "Kjoler, lange", prices: ["fra 195 DKK"] },
            {
              name: "Kjoler, selskabs",
              prices: ["Efter aftale"],
            },
            { name: "Nederdele, korte", prices: ["95 DKK"] },
            { name: "Nederdele, lange", prices: ["125 DKK"] },
            { name: "Nederdele, uld/plissé", prices: ["165 DKK"] },
            { name: "Strikbluse", prices: ["75 DKK"] },
            { name: "Halstørklæder", prices: ["65 DKK"] },
            { name: "Silkebluse", prices: ["75 DKK"] },
            { name: "Benklæder, shorts", prices: ["65 DKK"] },
          ]}
          highlightService={service}
        />
        <PriceList
          heading="Diverse"
          items={[
            { name: "Gardiner", prices: ["135 DKK/bane"] },
            { name: "Pudestykker", prices: ["65 DKK"] },
            { name: "Klokkestrenge fra", prices: ["65 DKK"] },
            { name: "Soveposer fra", prices: ["195 DKK"] },
            { name: "Sengetæpper", prices: ["135 DKK"] },
            { name: "Hyndebetræk", prices: ["135 DKK"] },
            { name: "Dyne", prices: ["1 stk. 275 DKK", "2 stk. 350 DKK"] },
            { name: "Pude", prices: ["150 DKK"] },
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
