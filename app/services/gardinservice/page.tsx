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

       {/* Sektion med tekst (venstre) og billede (højre) */}
       <section className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Specialiseret rensning af brudekjoler</h1>
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
            <h2>Priser</h2>
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
            <Link
              href={"/priser?service=brudekjolerens"}
              className={styles.ctaButton}
            >
              Se andre priser
            </Link>
          </section>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/images/clean-wedding.jpeg"
            alt="Brudekjole"
            fill 
            style={{ objectFit: "cover" }}
            className={styles.image}
          />
        </div>
      </section>
    </>
  );
}
