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

      {/* Sektion med tekst (venstre) og billede (højre) */}
      <section className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Specialiseret rensning af tæpper</h1>
          <p>
            Vi er specialister i rensning af forskellige tekstiler og tilbyder
            en sikker og effektiv rensning af alt fra møbelbetræk til tunge
            gardiner.
          </p>
          <p>
            Vores professionelle rensning sikrer, at dine tekstiler forbliver
            friske, rene og smukke.
          </p>
          <section className={styles.priceSection}>
            <h2>Pris i alt (renset og plejet):</h2>
            <ul>
              <li>Puder - 100 kr. pr. stk.</li>
              <li>Sofabetræk - 300 kr.</li>
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
            src="/images/tekstil2.jpg"
            alt="tekstil"
            fill
            style={{ objectFit: "cover" }}
            className={styles.image}
          />
        </div>
      </section>
    </>
  );
}
