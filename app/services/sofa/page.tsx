"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Image from "next/image";
import Navbar from "@/app/components/navbar/navbar";

export default function Sofa() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Friske sofabetræk - vores ekspertise"
        imagePath="/images/sofa2.jpg"
      />

      <div className={styles.container}>
        {/* Introduction and Box Section */}
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <p>
              Vi tilbyder professionel vask og rensning af sofabetræk, så din
              sofa altid ser flot og indbydende ud. Vores skånsomme metoder
              fjerner effektivt pletter, støv og allergener, samtidig med at
              betrækkets farver og kvalitet bevares. Fra inspektion til vask og
              tørring, sørger vi for, at dine betræk får den mest omhyggelige
              behandling.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <h2>SOFABETRÆK VASK</h2>
            <p>
              Vi har stor erfaring med rensning af sofabetræk, uanset størrelse
              og materiale. Sidste år rensede vi mere end 5.000 sofabetræk.
            </p>
            <h3>Pris i alt (vasket og tørret):</h3>
            <ul>
              <li>1 sæde - 200 kr.</li>
              <li>3 sæder - 500 kr.</li>
              <li>Hjørnesofa - 800 kr.</li>
            </ul>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={styles.cta}>
          <h2>Klar til en frisk sofa?</h2>
          <Link
            href={"/priser?service=sofabetraek"}
            className={styles.ctaButton}
          >
            Se Priser
          </Link>
        </div>
      </div>
    </>
  );
}
