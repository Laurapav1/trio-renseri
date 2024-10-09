"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section";

export default function Omforandring() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        text="Tilpasning af dit tøj - vores ekspertise"
        img="/images/sew3.jpg"
      />

      <div className={styles.container}>
        {/* Introduction and Box Section */}
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <p>
              Vores skræddere er specialiserede i tilpasning og omforandring af
              alle typer tøj, så det passer perfekt til dig. Vi sørger for, at
              hver eneste søm er præcis, hvor den skal være.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <h2>OMFORANDRING AF TØJ</h2>
            <p>
              Vi tilbyder alt fra simple ændringer som oplægning af bukser til
              mere komplekse justeringer som taljering af jakkesæt.
            </p>
            <h3>Pris i alt (tilpasset og syet):</h3>
            <ul>
              <li>Oplægning af bukser - 100 kr.</li>
              <li>Tilpasning af jakke - 400 kr.</li>
            </ul>
          </div>
        </div>

        {/* Modern Steps Section */}
        <div className={styles.steps}>
          <h2>Processen</h2>
          <div className={styles.stepGrid}>
            <div className={styles.step}>
              <img src="/images/step1-omforandring.jpg" alt="Trin 1 - Måling" />
              <h3>Trin 1: Måling</h3>
              <p>Vi tager nøjagtige mål for at sikre en perfekt pasform.</p>
            </div>

            <div className={styles.step}>
              <img
                src="/images/step2-omforandring.jpg"
                alt="Trin 2 - Tilpasning"
              />
              <h3>Trin 2: Tilpasning</h3>
              <p>Tøjet tilpasses efter dine mål og ønsker.</p>
            </div>

            <div className={styles.step}>
              <img
                src="/images/step3-omforandring.jpg"
                alt="Trin 3 - Afsluttende Detaljer"
              />
              <h3>Trin 3: Afsluttende Detaljer</h3>
              <p>Tøjet gennemgås for den endelige finish og detaljer.</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={styles.cta}>
          <h2>Klar til en skræddersyet pasform?</h2>
          <Link
            href={"/priser?service=omforandring"}
            className={styles.ctaButton}
          >
            Se Priser
          </Link>
        </div>
      </div>
    </>
  );
}
