"use client";
import React from "react";
import styles from "../components/service-card/service-card-detail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Navbar from "@/app/components/navbar/navbar";

export default function Skraedder() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Reparationer og omforandringer - stor erfaring "
        imagePath="/images/sew3.jpg"
      />

      <div className={styles.container}>
        {/* Introduction and Box Section */}
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <p>
              Vores skræddere er specialiserede i reparation og omforandring af
              alle typer tøj, så det passer perfekt til dig. Vi sørger for, at
              hver eneste søm er præcis, hvor den skal være.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <h2>REPARATION AF TØJ</h2>
            <Link href={"/skraedder/priser"} className={styles.ctaButton}>
              Se ydelser og priser
            </Link>
          </div>
        </div>

        {/* Modern Steps Section */}
        <div className={styles.steps}>
          <h2>Processen</h2>
          <div className={styles.stepGrid}>
            <div className={styles.process}>
              <img src="/images/målingSy2.jpg" alt="Trin 1 - Måling" />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>Trin 1: Måling</h3>
              </div>

              <p>Vi tager nøjagtige mål for at sikre en perfekt pasform.</p>
            </div>

            <div className={styles.process}>
              <img src="/images/tilpasningsy.jpg" alt="Trin 2 - Tilpasning" />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>Trin 2: Tilpasning</h3>
              </div>
              <p>Tøjet tilpasses efter dine mål og ønsker.</p>
            </div>

            <div className={styles.process}>
              <img
                src="/images/færdigSy2.jpg"
                alt="Trin 3 - Afsluttende Detaljer"
              />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>
                  Trin 3: Afsluttende Detaljer
                </h3>
              </div>
              <p>Tøjet gennemgås for den endelige finish og detaljer.</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={styles.cta}>
          <h2>Hør næmmere</h2>
          <Link href={"../kontakt"} className={styles.ctaButton}>
            Kontakt os
          </Link>
        </div>
      </div>
    </>
  );
}
