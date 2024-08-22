"use client";
import React from "react";
import CompareImage from "react-compare-image";
import styles from "../serviceDetail.module.css";
import Link from "next/link";

export default function Skjorteservice() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1>Skjorteservice</h1>
        <p>
          Perfekt rensede og strøgede skjorter – klar til enhver dag. Se,
          hvordan vi gør dine skjorter klar fra start til slut.
        </p>
      </div>

      {/* Steps Section */}
      <div className={styles.steps}>
        <h2>Processen</h2>
        <div className={styles.step}>
          <h3>Trin 1: Før rengøring</h3>
          <img
            src="/images/step1-before-cleaning.png"
            alt="Trin 1 - Før rengøring"
          />
          <p>Vi inspicerer dine skjorter for pletter og skader.</p>
        </div>

        <div className={styles.step}>
          <h3>Trin 2: Rensning</h3>
          <img src="/images/step2-cleaning.jpg" alt="Trin 2 - Rensning" />
          <p>Skjorterne gennemgår vores professionelle rensningsproces.</p>
        </div>

        <div className={styles.step}>
          <h3>Trin 3: Efter strygning</h3>
          <img src="/images/step3-after.png" alt="Trin 3 - Efter strygning" />
          <p>Skjorterne stryges for at få dem til at se perfekte ud.</p>
        </div>
      </div>

      <div className={styles.cta}>
        <h2>Klar til en fejlfri skjorte?</h2>
        <Link href={"/priser?service=skjorter"} passHref>
          Se Priser
        </Link>
      </div>
    </div>
  );
}
