"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Image from "next/image";

export default function Taepperens() {
  return (
    <>
      {/* Hero Section */}
      {/* Hero Section */}
      <HeroSection
        heading="Dit tæppe - vores ekspertise"
        imagePath="/images/tæppe.jpg"
      />

      <div className={styles.container}>
        {/* Introduction and Box Section */}
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <p>
              Vi bruger de bedste teknikker og produkter til at rense tæpper af
              enhver type og størrelse, så de igen føles friske og ser smukke
              ud.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <h2>TÆPPERENS</h2>
            <p>
              Fra mindre måtter til store væg-til-væg tæpper, vi har erfaringen
              og udstyret til at håndtere det hele.
            </p>
            <h3>Pris i alt (renset og plejet):</h3>
            <ul>
              <li>Lille tæppe - 200 kr.</li>
              <li>Stort tæppe - 800 kr.</li>
            </ul>
          </div>
        </div>

        {/* Modern Steps Section */}
        <div className={styles.steps}>
          <h2>Processen</h2>
          <div className={styles.stepGrid}>
            <div className={styles.process}>
              <Image
                src="/images/step1-taepperens.jpg"
                alt="Trin 1 - Inspektion"
              />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>Trin 1: Inspektion</h3>
              </div>
              <p>Inspektion af tæppet for pletter og skader.</p>
            </div>

            <div className={styles.process}>
              <Image
                src="/images/step2-taepperens.jpg"
                alt="Trin 2 - Rensning"
              />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>Trin 2: Rensning</h3>
              </div>
              <p>Tæppet rengøres med specielle teknikker og produkter.</p>
            </div>

            <div className={styles.process}>
              <Image
                src="/images/step3-taepperens.jpg"
                alt="Trin 3 - Efterbehandling"
              />
              <div className={styles.processContainer}>
                <h3 className={styles.processHeading}>
                  Trin 3: Efterbehandling
                </h3>
              </div>
              <p>Tæppet tørres og efterbehandles for et friskt udseende.</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={styles.cta}>
          <h2>Vil du give dit tæppe en ny start?</h2>
          <Link
            href={"/priser?service=taepperens"}
            className={styles.ctaButton}
          >
            Se Priser
          </Link>
        </div>
      </div>
    </>
  );
}
