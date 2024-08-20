"use client";
import React from "react";
import CompareImage from "react-compare-image";
import styles from "../serviceDetail.module.css";
import router from "next/router";

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

      {/* Before and After Slider */}
      <div className={styles.compareContainer}>
        <h2>Før og efter</h2>
        <CompareImage
          leftImage="/images/before-pants.jpg"
          rightImage="/images/after-pants.jpg"
          sliderPositionPercentage={0.5}
        />
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
        <button onClick={() => (window.location.href = "/priser")}>
          Se Priser
        </button>
      </div>
    </div>
  );
}
