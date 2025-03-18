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
          <h1>Specialiseret rensning af brudekjoler</h1>
          <p>
            Vi er specialister i at give dine dyner og puder den bedste pleje.
            Vores skånsomme vaskemetoder sikrer, at dine dyner og puder bliver
            rene og fri for allergener, så du kan sove trygt og komfortabelt.
            Fra inspektion til vask og tørring, vi sørger for, at dine tekstiler
            får den mest omhyggelige behandling.
          </p>
          <p>
            Vi har stor erfaring med vask af dyner og puder. Sidste år hjalp vi
            med at friske mere end 10.000 dyner og puder op.
          </p>
          <section className={styles.priceSection}>
            <h3>Priser</h3>
            <ul>
              <li>1 dyne - 275 kr.</li>
              <li>2 dyner - 350 kr.</li>
              <li>1 pude - 150 kr.</li>
              <li>2 puder - 225 kr.</li>
              <br></br>
              <li>Silkedyne - 245 kr.</li>
              <li>Børnedyne- 120 kr.</li>
              <li>Dobbeltdyne - 300 kr.</li>
              <li>Kugledyne - fra: 450 kr.</li>
              <li>Sovepose - 195 kr.</li>
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
