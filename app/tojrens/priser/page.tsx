// components/PriceList.tsx
"use client";
import React, { useState } from "react";
import styles from "./priser.module.css";
import { useSearchParams } from "next/navigation";
import PageHeroSection from "../../components/hero-section/page-hero-section";
import Navbar from "../../components/navbar/navbar";
import PriceList from "../../components/prisliste/prisliste";

export default function Prices() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");

  const skjorteservice = "skjorter";
  const brudekjolerens = "brudekjolerens";

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
              service: skjorteservice,
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
          service={service}
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
              service: brudekjolerens,
            },
            { name: "Nederdele, korte", prices: ["95 DKK"] },
            { name: "Nederdele, lange", prices: ["125 DKK"] },
            { name: "Nederdele, uld/plissé", prices: ["165 DKK"] },
            { name: "Strikbluse", prices: ["75 DKK"] },
            { name: "Halstørklæder", prices: ["65 DKK"] },
            { name: "Silkebluse", prices: ["75 DKK"] },
            { name: "Benklæder, shorts", prices: ["65 DKK"] },
          ]}
          service={service}
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
          service={service}
        />
        <Tilbud />
      </div>
    </>
  );
}

function Tilbud() {
  return (
    <div className={styles.tilbudContainer}>
      <h3>Kunde rabatter!</h3>
      <ul>
        <li>15% firmarabat for Logbuy kunder</li>
        <li>10% studierabat</li>
        <li>10% pensionistrabat</li>
        <li>Og mange flere</li>
      </ul>
    </div>
  );
}
