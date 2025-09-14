"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Navbar from "@/app/components/navbar/navbar";
import Image from "next/image";

export default function Mobelbetraek() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Møbelbetræk - Rensning og pleje"
        imagePath="/images/sofa4.jpg"
      />

      {/* Sektion med tekst (venstre) og billede (højre) */}
      <section className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Specialiseret rensning af møbelbetræk</h1>
          <p>
            Professionel rensning af møbelbetræk sikrer, at dine møbler
            forbliver pæne og fri for pletter. Vi tager os af alt fra sofaer til
            lænestole.
          </p>
          <p>
            Vores rensning fjerner pletter og snavs, så dine møbler får et nyt
            og friskt udseende.
          </p>
          <section className={styles.priceSection}>
            <h3>Pris i alt (vasket og renset):</h3>
            <ul>
              <li>135 DKK pr. kg.</li>
              <li>+imprægnering - 225 DKK pr. kg.</li>
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
            src="/images/sofa3.jpg"
            alt="mobelbetraek"
            fill
            style={{ objectFit: "cover" }}
            className={styles.image}
          />
        </div>
      </section>
    </>
  );
}
