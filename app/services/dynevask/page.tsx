"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Image from "next/image";
import Navbar from "@/app/components/navbar/navbar";

export default function DynePudeVask() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Friske dyner og puder - vores ekspertise"
        imagePath="/images/dynepude.jpg"
      />

      {/* Sektion med tekst (venstre) og billede (højre) */}
      <section className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Specialiseret rensning af dyner og puder</h1>
          <p>
            Vi er specialister i at give dine dyner og puder den bedste pleje.
            Vores skånsomme vaskemetoder sikrer, at dine dyner og puder bliver
            rene og fri for allergener, så du kan sove trygt og komfortabelt.
            Fra inspektion til vask og tørring, vi sørger for, at de får den
            mest omhyggelige behandling.
          </p>
          <section className={styles.priceSection}>
            <h3>Priser</h3>
            <ul>
              <li>1 dyne - 275 DKK</li>
              <li>2 dyner - 350 DKK</li>
              <li>1 pude - 150 DKK</li>
              <li>2 puder - 250 DKK</li>
              <br></br>
              <li>Silkedyne - 275 DKK</li>
              <li>Børnedyne- 120 DKK</li>
              <li>Dobbeltdyne - 300 DKK</li>
              <li>Kugledyne - fra: 450 DKK</li>
              <li>Sovepose - fra 195 DKK</li>
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
            src="/images/dyne.jpg"
            alt="dyne/pude"
            fill
            style={{ objectFit: "cover" }}
            className={styles.image}
          />
        </div>
      </section>
    </>
  );
}
