"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Image from "next/image";
import Navbar from "@/app/components/navbar/navbar";

export default function Gardinservice() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Dine gardiner - vores ansvar"
        imagePath="/images/curtains2.jpg"
      />

      <div className={styles.container}>
        {/* Introduction and Box Section */}
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <p>
              Vores gardinservice renser og plejer dine gardiner skånsomt for at
              fjerne støv, allergener og pletter. Vi sikrer, at dine gardiner
              bevarer deres farver og struktur.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <h2>GARDINSERVICE</h2>
            <p>
              Vi tilbyder en komplet rensning af alle typer gardiner, fra lette
              stofgardiner til tunge mørklægningsgardiner.
            </p>
            <h3>Pris i alt (renset og strøget):</h3>
            <ul>
              <li>Let stof - 150 kr. pr. stk.</li>
              <li>Mørklægningsgardiner - 250 kr. pr. stk.</li>
            </ul>
          </div>
        </div>

        {/* Modern Steps Section */}
        <div className={styles.steps}>
          <h2>Processen</h2>
          <div className={styles.stepGrid}>
            <div className={styles.process}>
              <img
                src="/images/service/dirty-curtain.jpeg"
                alt="Trin 1 - Inspektion"
              />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>Trin 1: Inspektion</h3>
              </div>
              <p>Vi inspicerer gardinerne for støv og pletter.</p>
            </div>

            <div className={styles.process}>
              <img
                src="/images/service/cleaning-curtain.jpeg"
                alt="Trin 2 - Rensning"
              />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>Trin 2: Rensning</h3>
              </div>
              <p>Gardinerne gennemgår en skånsom rensningsproces.</p>
            </div>

            <div className={styles.process}>
              <img
                src="/images/service/clean-curtain.jpeg"
                alt="Trin 3 - Strygning og Efterbehandling"
              />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>
                  Trin 3: Strygning og Efterbehandling
                </h3>
              </div>
              <p>Gardinerne stryges og hænges forsigtigt op.</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={styles.cta}>
          <h2>Vil du have rene og friske gardiner?</h2>
          <Link
            href={"/priser?service=gardinservice"}
            className={styles.ctaButton}
          >
            Se Priser
          </Link>
        </div>
      </div>
    </>
  );
}
