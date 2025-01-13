"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Navbar from "@/app/components/navbar/navbar";

export default function Madrasbetraek() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading=" Skånsom rensning"
        imagePath="/images/mattress-cover.jpg"
      />

      <div className={styles.container}>
        {/* Introduction and Box Section */}
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <p>
              Vi tilbyder professionel rensning af madrasbetræk for at sikre, at
              dit soveområde er rent, friskt og fri for allergener. Perfekt til
              at skabe et sundt og hygiejnisk miljø i hjemmet.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <h2>MADRASBETRÆK</h2>
            <p>
              Skånsom og effektiv rensning af madrasbetræk, der fjerner pletter
              og forlænger levetiden for dine madrasser.
            </p>
            <h3>Pris i alt (renset og plejet):</h3>
            <ul>
              <li>Enkeltmadrasbetræk - 300 kr.</li>
              <li>Dobbelmadrasbetræk - 500 kr.</li>
            </ul>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={styles.cta}>
          <h2>Vil du have dit madrasbetræk renset og plejet?</h2>
          <Link
            href={"/priser?service=madrasbetraek"}
            className={styles.ctaButton}
          >
            Se Priser
          </Link>
        </div>
      </div>
    </>
  );
}
