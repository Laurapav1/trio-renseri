"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Navbar from "@/app/components/navbar/navbar";
import Image from "next/image";

export default function Udlejning() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Udlejning af møbel- og tæpperensmaskine"
        imagePath="/images/rental-machine.jpg"
      />

      {/* Sektion med tekst (venstre) og billede (højre) */}
      <section className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Specialiseret rensning af tæpper</h1>
          <p>
            Lej en professionel rensningsmaskine til møbler og tæpper, og gør
            dit hjem pænt og rent. Perfekt til selv at tage kontrol over
            rengøringen.
          </p>
          <p>
            Vi tilbyder udlejning af effektive rensningsmaskiner, der er lette
            at bruge og giver fantastiske resultater.
          </p>
          <section className={styles.priceSection}>
            <h3>Pris i alt (inkl. leje og vejledning):</h3>
            <ul>
              <li>Rensningsmaskine - 500 kr. pr. dag</li>
              <li>Ekstra rengøringsmiddel - 100 kr.</li>
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
