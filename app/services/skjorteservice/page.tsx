"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import { url } from "inspector";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Image from "next/image";
import Navbar from "@/app/components/navbar/navbar";

export default function Skjorteservice() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Tilpasning af dit tøj - vores ekspertise"
        imagePath="/images/skjorte.jpg"
      />

      <div className={styles.container}>
        {/* Introduction and Box Section */}
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <p>
              Vi er specialister i at give dine skjorter den bedste behandling.
              Vores proces sikrer, at dine skjorter altid er i top stand, klar
              til at blive båret med selvtillid. Fra inspektion til rensning og
              strygning, vi tager os af hvert eneste trin for at sikre den
              højeste kvalitet.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <h2>SKJORTESERVICE</h2>
            <p>
              Vi har stor ekspertise i at vaske og stryge skjorter. Sidste år
              vaskede vi mere end 28.000 skjorter.
            </p>
            <h3>Pris i alt (vasket og strøget):</h3>
            <ul>
              <li>1 stk. - 25 kr.</li>
              <li>5 stk. - 110 kr.</li>
              <li>+ smokingskjorte 50 kr.</li>
            </ul>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={styles.cta}>
          <h2>Klar til en fejlfri skjorte?</h2>
          <Link href={"/priser?service=skjorter"} className={styles.ctaButton}>
            Se Priser
          </Link>
        </div>
      </div>
    </>
  );
}
