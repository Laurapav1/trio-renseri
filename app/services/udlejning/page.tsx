"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Navbar from "@/app/components/navbar/navbar";
import ResponsiveImage from "@/app/components/responsive-image/responsive-image";

export default function Udlejning() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Udlejning af møbel- og tæpperensmaskine"
        imagePath="/images/clean.jpg"
        as="p"
      />

      {/* Sektion med tekst (venstre) og billede (højre) */}
      <section className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Udlejning af møbel- og tæpperensmaskine</h1>
          <p>
            Lej en professionel rensemaskine til møbler og tæpper, og gør
            dit hjem pænt og rent. Perfekt til selv at tage kontrol over
            rengøringen.
          </p>
          <p>
            Vi tilbyder udlejning af en effektiv rensemaskine, der er let at
            bruge og giver gode resultater.
          </p>
          <section className={styles.priceSection}>
            <h3>Pris i alt (inkl. leje og vejledning):</h3>
            <ul>
              <li>Tæpperensmaskine - 275 DKK pr. dag</li>
              <li>Ekstra rengøringsmiddel - 100 DKK</li>
              <li>Udlejning i weekender - 375 DKK</li>
            </ul>
            <Link
              href={"/priser?service=udlejning"}
              className={styles.ctaButton}
            >
              Se andre priser
            </Link>
          </section>
        </div>

        <div className={styles.imageContainer}>
          <ResponsiveImage
            src="/images/maskine.jpeg"
            alt="Udlejning af møbel- og tæpperensmaskine"
            width={952}
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
