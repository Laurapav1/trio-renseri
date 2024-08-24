// components/PriceList.tsx
"use client";
import React, { useState } from "react";
import styles from "./priser.module.css";
import { useParams, useSearchParams } from "next/navigation";

export default function Prices() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");

  const skjorteservice = "skjorter";
  return (
    <>
      <PriceList
        heading="Herretøj"
        items={[
          { name: "Skjorter", price: "1 stk. 25 DKK", service: skjorteservice },
          {
            name: "Skjorter",
            price: "5 stk. 110 DKK",
            service: skjorteservice,
          },
          { name: "Frakker", price: "250 DKK" },
          { name: "Frakke ¾", price: "195 DKK" },
          { name: "Cotton coat", price: "225 DKK" },
          { name: "Jakker", price: "165 DKK" },
          { name: "Benklæder", price: "115 DKK" },
          { name: "Habit", price: "265 DKK" },
          { name: "Slips", price: "65 DKK" },
          { name: "Vindjakker", price: "185 DKK" },
          { name: "Dunejakker", price: "300 DKK" },
          { name: "Dunefrakker", price: "350 DKK" },
          { name: "Veste", price: "75 DKK" },
          { name: "Veste, vind, dun", price: "185 DKK" },
          { name: "Smoking", price: "295 DKK" },
          { name: "Herrekjoler", price: "315 DKK" },
          {
            name: "Canada goose jakke inkl. Imprægnering",
            price: "fra 400 DKK",
          },
        ]}
        service={service}
      />
      <PriceList
        heading="Dametøj"
        items={[
          { name: "Frakker", price: "250 DKK" },
          { name: "Cotton coat", price: "225 DKK" },
          { name: "Jakker", price: "169 DKK" },
          { name: "Benklæder", price: "119 DKK" },
          { name: "Kjoler, korte", price: "fra 175 DKK" },
          { name: "Kjoler, lange", price: "fra 195 DKK" },
          { name: "Kjoler, selskabs", price: "Efter aftale" },
          { name: "Nederdele, korte", price: "95 DKK" },
          { name: "Nederdele, lange", price: "125 DKK" },
          { name: "Nederdele, uld/plissé", price: "165 DKK" },
          { name: "Strikbluse", price: "75 DKK" },
          { name: "Halstørklæder", price: "65 DKK" },
          { name: "Silkebluse", price: "75 DKK" },
          { name: "Benklæder, shorts", price: "65 DKK" },
        ]}
        service={service}
      />
      <PriceList
        heading="Diverse"
        items={[
          { name: "Gardiner", price: "135 DKK/bane" },
          { name: "Pudestykker", price: "65 DKK" },
          { name: "Klokkestrenge fra", price: "65 DKK" },
          { name: "Soveposer fra", price: "195 DKK" },
          { name: "Sengetæpper", price: "135 DKK" },
          { name: "Hyndebetræk", price: "135 DKK" },
          { name: "Dyne", price: "1 stk. 275 DKK" },
          { name: "Dyne", price: "2 stk. 350 DKK" },
          { name: "Pude", price: "150 DKK" },
        ]}
        service={service}
      />
      <Tilbud />
    </>
  );
}

interface PriceItem {
  name: string;
  price: string;
  service?: string;
}

interface PriceListContentProps {
  heading: string;
  items: PriceItem[];
  service: string | null;
}

function PriceList({ heading, items, service }: PriceListContentProps) {
  return (
    <div className={styles.prislisteContainer}>
      <div className={styles.prisliste}>
        <h2>{heading}</h2>
        <ul>
          {items.map((item) => (
            <li key={item.name}>
              <span
                className={service === item.service ? styles.highlighted : ""}
              >
                {item.name}
              </span>{" "}
              <span className={styles.dots}></span> <span>{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Tilbud() {
  return (
    <div className={styles.tilbudContainer}>
      <h3>Eksklusivt Tilbud!</h3>
      <p>
        Få 10% rabat på alle dine skjorteservices, når du bestiller online.
        Gælder kun for nye kunder.
      </p>
    </div>
  );
}
