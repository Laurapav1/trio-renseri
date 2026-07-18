"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import ResponsiveImage from "@/app/components/responsive-image/responsive-image";
import Navbar from "@/app/components/navbar/navbar";

export default function Gardinservice() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Dine gardiner - vores ansvar"
        imagePath="/images/curtain.jpg"
        as="p"
      />

      {/* Sektion med tekst (venstre) og billede (højre) */}
      <section className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Specialiseret rensning og vask af gardiner</h1>
          <p>
            Vores gardinservice renser og plejer dine gardiner skånsomt for at
            fjerne støv, allergener og pletter. Vi sikrer, at dine gardiner
            bevarer deres farver og struktur.
          </p>
          <p>
            Vi tilbyder en komplet rensning af alle typer gardiner, fra lette
            stofgardiner til tunge mørklægningsgardiner.
          </p>
          <section className={styles.priceSection}>
            <h3>Priser</h3>
            <ul>
              <li>135 DKK pr. bane</li>
              <li>Velourgardiner - 155 DKK pr. bane</li>
              <li>Rens af foldegardiner - Efter aftale</li>
            </ul>
            <Link
              href={"/priser?service=gardinservice"}
              className={styles.ctaButton}
            >
              Se andre priser
            </Link>
          </section>
        </div>

        <div className={styles.imageContainer}>
          <ResponsiveImage
            src="/images/curtains2.jpg"
            alt="Gardiner"
            width={1280}
            height={1920}
            sizes="(max-width: 768px) 100vw, 50vw"
            fill
            style={{ objectFit: "cover" }}
            className={styles.image}
          />
        </div>
      </section>
    </>
  );
}
