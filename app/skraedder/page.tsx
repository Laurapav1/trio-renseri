"use client";
import React from "react";
import styles from "../components/service-card/service-card-detail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Navbar from "@/app/components/navbar/navbar";
import ResponsiveImage from "@/app/components/responsive-image/responsive-image";

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
            <p>
              Hos Trio Renseriet i Højbjerg hjælper vi både med små
              hverdagstilpasninger og mere omfattende ændringer. Du kan komme
              forbi med bukser, jakker, kjoler, skjorter og overtøj, så vurderer
              vi opgaven og aftaler pris og leveringstid.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <h2>REPARATION AF TØJ</h2>
            <Link href={"/skraedder/priser"} className={styles.ctaButton}>
              Se ydelser og priser
            </Link>
          </div>
        </div>

        <div className={styles.detailBlock}>
          <h2>Skrædderarbejde og tilpasning</h2>
          <p>
            En god tilpasning handler om både pasform og holdbarhed. Vi ser på
            tøjets materiale, sømme, foer, lynlåse og eksisterende konstruktion,
            før vi anbefaler den bedste løsning. Det gør det lettere at bevare
            tøjets udtryk og undgå unødvendige ændringer.
          </p>
          <ul className={styles.detailList}>
            <li>Oplægning og justering af bukser, kjoler og ærmer.</li>
            <li>Udskiftning af lynlåse, knapper og mindre sliddele.</li>
            <li>Tilpasning af livvidde, længde og detaljer efter aftale.</li>
          </ul>
        </div>

        {/* Modern Steps Section */}
        <div className={styles.steps}>
          <h2>Processen</h2>
          <div className={styles.stepGrid}>
            <div className={styles.process}>
              <ResponsiveImage
                src="/images/målingSy2.jpg"
                alt="Trin 1 - Måling"
                width={640}
                height={480}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>Trin 1: Måling</h3>
              </div>

              <p>Vi tager nøjagtige mål for at sikre en perfekt pasform.</p>
            </div>

            <div className={styles.process}>
              <ResponsiveImage
                src="/images/tilpasningsy.jpg"
                alt="Trin 2 - Tilpasning"
                width={640}
                height={480}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>Trin 2: Tilpasning</h3>
              </div>
              <p>Tøjet tilpasses efter dine mål og ønsker.</p>
            </div>

            <div className={styles.process}>
              <ResponsiveImage
                src="/images/færdigSy2.jpg"
                alt="Trin 3 - Afsluttende Detaljer"
                width={640}
                height={480}
                sizes="(max-width: 768px) 100vw, 33vw"
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
          <h2>Hør nærmere</h2>
          <Link href="/kontakt" className={styles.ctaButton}>
            Kontakt os
          </Link>
        </div>
      </div>
    </>
  );
}
