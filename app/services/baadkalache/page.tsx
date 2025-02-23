"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Navbar from "@/app/components/navbar/navbar";

export default function BaadKalache() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Vedligeholdelse og rensning"
        imagePath="/images/baad2.jpg"
      />

      <div className={styles.container}>
        {/* Introduction and Box Section */}
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <p>
              Vi tilbyder professionel rensning og vedligeholdelse af båd
              kalacher, så de bevarer deres funktionalitet og æstetik. Vores
              ekspertise sikrer, at din båd kalache forbliver i topform gennem
              alle sæsoner.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <h2>BÅD KALACHE</h2>
            <p>
              Vi renser og plejer båd kalacher med stor omhu og anvender de
              bedste metoder til at beskytte materialet og forlænge levetiden.
            </p>
            <h3>Pris i alt (renset og plejet):</h3>
            <ul>
              <li>Standard Kalache - 1000 kr.</li>
              <li>Store Kalacher - 1500 kr.</li>
              <li>Imprægnering - 500 kr.</li>
            </ul>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={styles.cta}>
          <h2>Vil du have din båd kalache i perfekte hænder?</h2>
          <Link
            href={"/priser?service=baadkalache"}
            className={styles.ctaButton}
          >
            Se Priser
          </Link>
        </div>
      </div>
    </>
  );
}
