"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Image from "next/image";

export default function Daabskjolevask() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        heading="Din dåbskjole - vores ansvar"
        imagePath="/images/dress.jpg"
      />

      <div className={styles.container}>
        {/* Introduction and Box Section */}
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <p>
              Vores renseservice for dåbskjoler sikrer, at familieminder bevares
              for fremtidige generationer. Hver kjole får en særlig behandling.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <h2>DÅBSKJOLEVASK</h2>
            <p>
              Vores eksperter vasker dåbskjoler forsigtigt for at sikre, at de
              forbliver i perfekt stand til din families særlige øjeblikke.
            </p>
            <h3>Pris i alt (vasket og plejet):</h3>
            <ul>
              <li>Dåbskjole - 500 kr.</li>
            </ul>
          </div>
        </div>

        {/* Modern Steps Section */}
        <div className={styles.steps}>
          <h2>Processen</h2>
          <div className={styles.stepGrid}>
            <div className={styles.process}>
              <Image
                src="/images/step1-daabskjole.jpg"
                alt="Trin 1 - Før vask"
              />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>Trin 1: Før vask</h3>
              </div>
              <p>Inspektion af dåbskjolen for skader og pletter.</p>
            </div>

            <div className={styles.process}>
              <Image src="/images/step2-daabskjole.jpg" alt="Trin 2 - Vask" />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>Trin 2: Vask</h3>
              </div>
              <p>Kjolen vaskes skånsomt med specielle midler.</p>
            </div>

            <div className={styles.process}>
              <Image
                src="/images/step3-daabskjole.jpg"
                alt="Trin 3 - Efterbehandling"
              />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>
                  Trin 3: Efterbehandling
                </h3>
              </div>
              <p>Kjolen stryges og opbevares forsigtigt.</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={styles.cta}>
          <h2>Klar til at give dine minder en særlig behandling?</h2>
          <Link
            href={"/priser?service=daabskjolevask"}
            className={styles.ctaButton}
          >
            Se Priser
          </Link>
        </div>
      </div>
    </>
  );
}
