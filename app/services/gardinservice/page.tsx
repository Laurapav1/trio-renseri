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
            <h3>Renser/Vasker af gardiner</h3>
            <ul>
              <li>135 kr. pr. bane</li>
            </ul>
            <h3>Velourgardiner</h3>
            <ul>
              <li>155 kr. pr. bane</li>
            </ul>
            <h3>Rens af foldegardiner</h3>
            <ul>
              <li>Indhent tilbud</li>
            </ul>
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
