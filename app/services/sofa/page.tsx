"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import { url } from "inspector";
import HeroSection from "@/app/components/hero-section/page-hero-section";

export default function Skjorteservice() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        text="Friske sofabetræk - vores ekspertise"
        img="/images/sofa2.jpg"
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

        {/* Modern Steps Section */}
        <div className={styles.steps}>
          <h2>Processen</h2>
          <div className={styles.stepGrid}>
            <div className={styles.process}>
              <img
                src="/images/step1-sofa-inspection.jpg"
                alt="Trin 1 - Før vask"
              />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>Trin 1: Før vask</h3>
              </div>
              <p>
                Vi inspicerer betrækkene for pletter, slid og eventuelle skader.
              </p>
            </div>

            <div className={styles.process}>
              <img src="/images/step2-washing.jpg" alt="Trin 2 - Vask" />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>Trin 2: Vask</h3>
              </div>
              <p>Sofabetrækkene vaskes grundigt med skånsomme metoder.</p>
            </div>

            <div className={styles.process}>
              <img src="/images/step3-drying.jpg" alt="Trin 3 - Tørring" />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>Trin 3: Tørring</h3>
              </div>
              <p>
                Vi tørrer betrækkene omhyggeligt for at sikre, at de er friske
                og klar til brug.
              </p>
            </div>
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
