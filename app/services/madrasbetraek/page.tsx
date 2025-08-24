"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Navbar from "@/app/components/navbar/navbar";
import Image from "next/image";

export default function Madrasbetraek() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading=" Skånsom rensning"
        imagePath="/images/mattress-cover.jpg"
      />

      {/* Sektion med tekst (venstre) og billede (højre) */}
      <section className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>
            Specialiseret rensning af madrasbetræk og alle typer madrasser
          </h1>
          <p>
            Vi tilbyder professionel rensning af madrasbetræk samt alle typer
            madrasser – herunder top-, under-, boks- og Hästens madraser.– Vi sikrer, at dit soveområde er rent, friskt og fri
            for allergener. Perfekt til at skabe et sundt og hygiejnisk miljø i
            hjemmet.
          </p>
          <p>
            Skånsom og effektiv rensning af madrasbetræk, der fjerner pletter og
            forlænger levetiden for dine madrasser.
          </p>
          <section className={styles.priceSection}>
            <h3>Priser</h3>
            <ul>
              <li>85kr pr kilo.</li>
              <li>.</li>
            </ul>
            <Link
              href={"/priser?service=brudekjolerens"}
              className={styles.ctaButton}
            >
              Se andre priser
            </Link>
          </section>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/images/.jpeg"
            alt="Brudekjole"
            fill
            style={{ objectFit: "cover" }}
            className={styles.image}
          />
        </div>
      </section>
    </>
  );
}
