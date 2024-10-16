"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Image from "next/image";
import Navbar from "@/app/components/navbar/navbar";

export default function Brudekjolerens() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Tilpasning af dit tøj - vores ekspertise"
        imagePath="/images/bridedress2.jpg"
      />

      <div className={styles.container}>
        {/* Introduction and Box Section */}
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <p>
              Vi er eksperter i rensning af brudekjoler, og vi tager hånd om
              hver kjole med omhu og præcision. Vores service sikrer, at din
              brudekjole forbliver i perfekt stand.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <h2>BRUDEKJOLERENS</h2>
            <p>
              Vi renser brudekjoler skånsomt, så de bevarer deres unikke udtryk.
              Vi har hjulpet mange brude med at bevare minderne.
            </p>
            <h3>Pris i alt (renset og plejet):</h3>
            <ul>
              <li>Brudekjole - 1200 kr.</li>
              <li>Slør - 300 kr.</li>
            </ul>
          </div>
        </div>

        {/* Modern Steps Section */}
        <div className={styles.steps}>
          <h2>Processen</h2>
          <div className={styles.stepGrid}>
            <div className={styles.process}>
              <img
                src="/images/service/dirty-wedding.jpeg"
                alt="Trin 1 - Inspektion"
              />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>Trin 1: Inspektion</h3>
              </div>
              <p>Vi inspicerer brudekjolen for pletter og skader.</p>
            </div>

            <div className={styles.process}>
              <img
                src="/images/service/cleaning-wedding.jpeg"
                alt="Trin 2 - Rensning"
              />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>Trin 2: Rensning</h3>
              </div>
              <p>Kjolen gennemgår en skånsom rensningsproces.</p>
            </div>

            <div className={styles.process}>
              <img
                src="/images/service/clean-wedding.jpeg"
                alt="Trin 3 - Efterbehandling"
              />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>
                  Trin 3: Efterbehandling
                </h3>
              </div>
              <p>Kjolen stryges og plejes for et fejlfrit udseende.</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={styles.cta}>
          <h2>Vil du have din brudekjole i perfekte hænder?</h2>
          <Link
            href={"/priser?service=brudekjolerens"}
            className={styles.ctaButton}
          >
            Se Priser
          </Link>
        </div>
      </div>
    </>
  );
}
