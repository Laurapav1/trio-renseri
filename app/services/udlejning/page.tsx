"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Navbar from "@/app/components/navbar/navbar";

export default function Udlejning() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Udlejning af møbel- og tæpperensmaskine"
        imagePath="/images/rental-machine.jpg"
      />

      <div className={styles.container}>
        {/* Introduction and Box Section */}
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <p>
              Lej en professionel rensningsmaskine til møbler og tæpper, og gør
              dit hjem pænt og rent. Perfekt til selv at tage kontrol over
              rengøringen.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <h2>UDLEJNING</h2>
            <p>
              Vi tilbyder udlejning af effektive rensningsmaskiner, der er lette
              at bruge og giver fantastiske resultater.
            </p>
            <h3>Pris i alt (inkl. leje og vejledning):</h3>
            <ul>
              <li>Rensningsmaskine - 500 kr. pr. dag</li>
              <li>Ekstra rengøringsmiddel - 100 kr.</li>
            </ul>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={styles.cta}>
          <h2>Vil du leje en professionel rensningsmaskine?</h2>
          <Link
            href={"/priser?service=udlejning"}
            className={styles.ctaButton}
          >
            Se Priser
          </Link>
        </div>
      </div>
    </>
  );
}
