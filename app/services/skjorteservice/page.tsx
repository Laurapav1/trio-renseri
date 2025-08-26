"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import { url } from "inspector";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Image from "next/image";
import Navbar from "@/app/components/navbar/navbar";

export default function Skjorteservice() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Din skjorte - vores ansvar"
        imagePath="/images/skjorte.jpg"
      />

      {/* Sektion med tekst (venstre) og billede (højre) */}
      <section className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Kvalitet rens/vask af skjorter</h1>
          <p>
            Vi sørger for, at din skjorte får den behandling den fortjener og
            til Aarhus{"'"} billigste pris.
          </p>
          <p>Sidste år vaskede vi mere end 25.000 skjorter.</p>
          <section className={styles.priceSection}>
            <h3>Pris i alt (vasket og strøget):</h3>
            <ul>
              <li>1 stk. - 25 DKK</li>
              <li>5 stk. - 110 DKK</li>
              <li>+ smokingskjorte 50 DKK</li>
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
            src="/images/skjorte.jpg"
            alt="skjorte"
            fill
            style={{ objectFit: "cover" }}
            className={styles.image}
          />
        </div>
      </section>
    </>
  );
}
