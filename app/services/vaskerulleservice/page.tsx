"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/hero-section";

export default function Vaskerulleservice() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection text="Din dug - vores ekspertise" img="/images/dug2.jpg" />

      <div className={styles.container}>
        {/* Introduction and Box Section */}
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <p>
              Vores vaske- og rulleservice sikrer, at dit tøj er friskt, blødt
              og klart til at blive brugt. Fra sengetøj til dagligt tøj, vi
              håndterer det hele.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <h2>VASKE/RULLE SERVICE</h2>
            <p>
              Vi vasker og ruller tøj og sengetøj med omhu for at sikre, at de
              altid føles friske og er klare til brug.
            </p>
            <h3>Pris i alt (vasket og rullet):</h3>
            <ul>
              <li>Linned - 50 kr. pr. stk.</li>
              <li>Skjorter - 25 kr. pr. stk.</li>
            </ul>
          </div>
        </div>

        {/* Modern Steps Section */}
        <div className={styles.steps}>
          <h2>Processen</h2>
          <div className={styles.stepGrid}>
            <div className={styles.process}>
              <img
                src="/images/step1-vaskerulle.jpg"
                alt="Trin 1 - Sortering"
              />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>Trin 1: Sortering</h3>
              </div>
              <p>Vasketøjet sorteres efter farve og stof.</p>
            </div>

            <div className={styles.process}>
              <img src="/images/step2-vaskerulle.jpg" alt="Trin 2 - Vask" />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>Trin 2: Vask</h3>
              </div>
              <p>
                Tøjet vaskes med de bedste vaskemidler for skånsom behandling.
              </p>
            </div>

            <div className={styles.process}>
              <img
                src="/images/step3-vaskerulle.jpg"
                alt="Trin 3 - Rulle og Foldning"
              />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>
                  Trin 3: Rulle og Foldning
                </h3>
              </div>
              <p>
                Tøjet rulles og foldes præcist for et friskt og klar-til-brug
                look.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={styles.cta}>
          <h2>Klar til at få dit vasketøj gjort professionelt?</h2>
          <Link
            href={"/priser?service=vaskerulleservice"}
            className={styles.ctaButton}
          >
            Se Priser
          </Link>
        </div>
      </div>
    </>
  );
}
