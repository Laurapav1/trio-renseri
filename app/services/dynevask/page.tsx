"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section";

export default function DynePudeVask() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        text="Friske dyner og puder - vores ekspertise"
        img="/images/dyne2.jpg"
      />

      <div className={styles.container}>
        {/* Introduction and Box Section */}
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <p>
              Vi er specialister i at give dine dyner og puder den bedste pleje.
              Vores skånsomme vaskemetoder sikrer, at dine dyner og puder bliver
              rene og fri for allergener, så du kan sove trygt og komfortabelt.
              Fra inspektion til vask og tørring, vi sørger for, at dine
              tekstiler får den mest omhyggelige behandling.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <h2>DYNE/PUDE VASK</h2>
            <p>
              Vi har stor erfaring med vask af dyner og puder. Sidste år hjalp
              vi med at friske mere end 10.000 dyner og puder op.
            </p>
            <h3>Pris i alt (vasket og tørret):</h3>
            <ul>
              <li>1 dyne - 150 kr.</li>
              <li>1 pude - 50 kr.</li>
              <li>2 dyner + 2 puder - 350 kr.</li>
            </ul>
          </div>
        </div>

        {/* Modern Steps Section */}
        <div className={styles.steps}>
          <h2>Processen</h2>
          <div className={styles.stepGrid}>
            <div className={styles.step}>
              <img
                src="/images/step1-duvet-inspection.jpg"
                alt="Trin 1 - Før vask"
              />
              <h3>Trin 1: Før vask</h3>
              <p>Vi inspicerer dine dyner og puder for pletter og skader.</p>
            </div>

            <div className={styles.step}>
              <img src="/images/step2-washing.jpg" alt="Trin 2 - Vask" />
              <h3>Trin 2: Vask</h3>
              <p>Dyner og puder gennemgår vores skånsomme vaskemetoder.</p>
            </div>

            <div className={styles.step}>
              <img src="/images/step3-drying.jpg" alt="Trin 3 - Tørring" />
              <h3>Trin 3: Tørring</h3>
              <p>
                Vi tørrer dine dyner og puder grundigt, så de forbliver friske
                og bløde.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={styles.cta}>
          <h2>Klar til en frisk dyne og pude?</h2>
          <Link href={"/priser?service=dyne-pude"} className={styles.ctaButton}>
            Se Priser
          </Link>
        </div>
      </div>
    </>
  );
}
