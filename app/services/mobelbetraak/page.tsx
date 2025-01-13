"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Navbar from "@/app/components/navbar/navbar";

export default function Mobelbetraek() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Møbelbetræk - Rensning og pleje"
        imagePath="/images/sofa-cover.jpg"
      />

      <div className={styles.container}>
        {/* Introduction and Box Section */}
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <p>
              Professionel rensning af møbelbetræk sikrer, at dine møbler
              forbliver pæne og fri for pletter. Vi tager os af alt fra sofaer
              til lænestole.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <h2>MØBELBETRÆK</h2>
            <p>
              Vores rensning fjerner pletter og snavs, så dine møbler får et nyt
              og friskt udseende.
            </p>
            <h3>Pris i alt (vasket og renset):</h3>
            <ul>
              <li>135 kr.</li>
              <li>+imprægnering - 200 kr. pr. kg.</li>
            </ul>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={styles.cta}>
          <h2>Vil du have dit møbelbetræk frisket op?</h2>
          <Link
            href={"/priser?service=moebelbetraek"}
            className={styles.ctaButton}
          >
            Se Priser
          </Link>
        </div>
      </div>
    </>
  );
}
