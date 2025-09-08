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
        imagePath="/images/tablecloth.jpg"
      />

      {/* Sektion med tekst (venstre) og billede (højre) */}
      <section className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Specialiseret rensning af duge</h1>
          <p>
            Vores vaske- og rulleservice sikrer, at dine duge eller sengetøj er
            friskt, blødt og klart til at blive brugt.
          </p>
          <p>
            Vi vasker og ruller tøj og sengetøj med omhu for at sikre, at de
            altid føles friske og er klare til brug.
          </p>

          <section className={styles.priceSection}>
            <h3>Pris i alt (vasket og rullet):</h3>
            <ul>
              <li>Duge Vask og rul - 65 kr. pr. meter</li>
              <li>Duge kun rul - 55 kr. pr. meter</li>
              <li>Sengetøj vasket og rullet - 85 kr. pr. kg.</li>
              <li>Sengetøj kun rullet - 75 kr. pr. kg.</li>
              <li>Servietter - 15 kr. pr. stk.</li>
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
            src="/images/table.jpg"
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
