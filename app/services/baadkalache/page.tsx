"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Navbar from "@/app/components/navbar/navbar";
import Image from "next/image";

export default function BaadKalache() {
  return (
    <>
      <Navbar />
      <HeroSection
        heading="Vedligeholdelse og rensning"
        imagePath="/images/baad2.jpg"
      />

      {/* Sektion med tekst (venstre) og billede (højre) */}
      <section className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Specialiseret rensning af bådkalache</h1>
          <p>
            Vi tilbyder professionel rensning og vedligeholdelse af båd
            kalacher, så de bevarer deres funktionalitet og æstetik. Vores
            ekspertise sikrer, at din båd kalache forbliver i topform gennem
            alle sæsoner.
          </p>
          <p>
            Vi renser og plejer båd kalacher med stor omhu og anvender de bedste
            metoder til at beskytte materialet og forlænge levetiden.
          </p>
          <section className={styles.priceSection}>
            <h3>Priser</h3>
            <ul>
              <li>Efter aftale</li>
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
            src="/images/baad2.jpg"
            alt="baad kalache"
            fill
            style={{ objectFit: "cover" }}
            className={styles.image}
          />
        </div>
      </section>
    </>
  );
}
