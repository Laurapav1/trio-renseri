"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import ResponsiveImage from "@/app/components/responsive-image/responsive-image";
import Navbar from "@/app/components/navbar/navbar";

export default function Vaskerulleservice() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Din dug - vores ekspertise"
        imagePath="/images/tablecloth.jpg"
        as="p"
      />

      {/* Sektion med tekst (venstre) og billede (højre) */}
      <section className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Vask og rulning af duge og sengetøj</h1>
          <p>
            Vores vaske- og rulleservice sikrer, at dine duge eller sengetøj er
            friskt, blødt og klart til at blive brugt.
          </p>
          <p>
            Vi vasker og ruller duge, tøj og sengetøj med omhu, så det altid
            føles friskt og er klart til brug.
          </p>

          <section className={styles.priceSection}>
            <h3>Pris i alt (vasket og rullet):</h3>
            <ul>
              <li>Duge Vask og rul - 65 DKK pr. meter</li>
              <li>Duge kun rul - 55 DKK pr. meter</li>
              <li>Sengetøj vasket og rullet - 85 DKK pr. kg.</li>
              <li>Sengetøj kun rullet - 75 DKK pr. kg.</li>
              <li>Servietter - 15 DKK pr. stk.</li>
            </ul>
            <Link
              href={"/priser?service=vaskerulleservice"}
              className={styles.ctaButton}
            >
              Se andre priser
            </Link>
          </section>
        </div>

        <div className={styles.imageContainer}>
          <ResponsiveImage
            src="/images/table.jpg"
            alt="Vask og rul af duge"
            width={1280}
            height={857}
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
