"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Navbar from "@/app/components/navbar/navbar";
import Image from "next/image";

export default function Madrasser() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading=" Madrasser - vores ansvar"
        imagePath="/images/madras.jpg"
      />

      {/* Sektion med tekst (venstre) og billede (højre) */}
      <section className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Specialiseret vask af madrasbetræk og alle typer madrasser</h1>
          <p>
            Vi tilbyder professionel vask af topmadras samt alle typer madrasser
            – herunder top-, under-, boks- og Hästens madrasser.– Vi sikrer, at
            dit soveområde er rent, friskt og fri for allergener. Perfekt til at
            skabe et sundt og hygiejnisk miljø i hjemmet.
          </p>
          <p>
            Skånsom og effektiv vask af madrasser, der fjerner pletter og
            forlænger levetiden.
          </p>
          <section className={styles.priceSection}>
            <h3>Priser</h3>
            <h4>Topmadras</h4>
            <ul>
              <li>95 DKK pr. kg.</li>
            </ul>
            <h4>Madrasser</h4>
            <ul>
              <li>Efter aftale</li>
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
            src="/images/madrass.jpg"
            alt="madrasser"
            fill
            style={{ objectFit: "cover" }}
            className={styles.image}
          />
        </div>
      </section>
    </>
  );
}
