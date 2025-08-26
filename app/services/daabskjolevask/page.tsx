"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Image from "next/image";
import Navbar from "@/app/components/navbar/navbar";

export default function Daabskjolevask() {
  return (
    <>
      <Navbar />
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
              <li>Dåbskjole - 500 DKK</li>
            </ul>
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
