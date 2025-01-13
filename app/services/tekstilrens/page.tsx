"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Image from "next/image";
import Navbar from "@/app/components/navbar/navbar";

export default function Tekstilrens() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Dit tekstil - vores ekspertise"
        imagePath="/images/tekstil2.jpg"
      />

      <div className={styles.container}>
        {/* Introduction and Box Section */}
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <p>
              Vi er specialister i rensning af forskellige tekstiler og tilbyder
              en sikker og effektiv rensning af alt fra møbelbetræk til tunge
              gardiner.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <h2>TEKSTILRENS</h2>
            <p>
              Vores professionelle rensning sikrer, at dine tekstiler forbliver
              friske, rene og smukke.
            </p>
            <h3>Pris i alt (renset og plejet):</h3>
            <ul>
              <li>Puder - 100 kr. pr. stk.</li>
              <li>Sofabetræk - 300 kr.</li>
            </ul>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={styles.cta}>
          <h2>Klar til at få rene og friske tekstiler?</h2>
          <Link
            href={"/priser?service=tekstilrens"}
            className={styles.ctaButton}
          >
            Se Priser
          </Link>
        </div>
      </div>
    </>
  );
}
