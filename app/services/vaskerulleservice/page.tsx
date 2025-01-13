"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Image from "next/image";
import Navbar from "@/app/components/navbar/navbar";

export default function Vaskerulleservice() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Din dug - vores ekspertise"
        imagePath="/images/dug2.jpg"
      />

      <div className={styles.container}>
        {/* Introduction and Box Section */}
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <p>
              Vores vaske- og rulleservice sikrer, at dit tøj er friskt, blødt
              og klart til at blive brugt. Fra sengetøj til dagligt tøj, vi
              håndterer det hele.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <h2>VASKE/RULLE SERVICE</h2>
            <p>
              Vi vasker og ruller tøj og sengetøj med omhu for at sikre, at de
              altid føles friske og er klare til brug.
            </p>
            <h3>Pris i alt (vasket og rullet):</h3>
            <ul>
              <li>Duge Vask og rul - 65 kr. pr. meter</li>
              <li>Duge kun rul - 55 kr. pr. meter</li>
              <li>Sengetøj vasket og rullet - 85 kr. pr. kg</li>
              <li>Sengetøj kun rullet - 75 kr. pr. kg</li>
              <li>Servietter - 15 kr. pr. stk.</li>
            </ul>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={styles.cta}>
          <h2>Klar til at få dit vasketøj gjort professionelt?</h2>
          <Link
            href={"/priser?service=vaskerulleservice"}
            className={styles.ctaButton}
          >
            Se Priser
          </Link>
        </div>
      </div>
    </>
  );
}
