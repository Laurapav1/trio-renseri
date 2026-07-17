"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import ResponsiveImage from "@/app/components/responsive-image/responsive-image";
import Navbar from "@/app/components/navbar/navbar";

export default function Sofa() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Friske sofabetræk - vores ekspertise"
        imagePath="/images/sofa2.jpg"
        as="p"
      />

      {/* Sektion med tekst (venstre) og billede (højre) */}
      <section className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Specialiseret rensning af sofabetræk</h1>
          <p>
            Vi tilbyder professionel vask og rensning af sofabetræk, så din sofa
            altid ser flot og indbydende ud. Vores skånsomme metoder fjerner
            effektivt pletter, støv og allergener, samtidig med at betrækkets
            farver og kvalitet bevares. Fra inspektion til vask og tørring,
            sørger vi for, at dine betræk får den mest omhyggelige behandling.
          </p>
          <p>
            Vi har stor erfaring med rensning af sofabetræk, uanset størrelse og
            materiale.
          </p>
          <section className={styles.priceSection}>
            <h3>Pris i alt (vasket og tørret):</h3>
            <ul>
              <li>1 sæde - 200 DKK</li>
              <li>3 sæder - 500 DKK</li>
              <li>Hjørnesofa - 800 DKK</li>
            </ul>
            <Link
              href={"/priser?service=sofa"}
              className={styles.ctaButton}
            >
              Se andre priser
            </Link>
          </section>
        </div>

        <div className={styles.imageContainer}>
          <ResponsiveImage
            src="/images/sofa2.jpg"
            alt="Sofabetræk"
            width={1600}
            height={1277}
            sizes="(max-width: 768px) 100vw, 50vw"
            fill
            style={{ objectFit: "cover" }}
            className={styles.image}
          />
        </div>
      </section>
    </>
  );
}
