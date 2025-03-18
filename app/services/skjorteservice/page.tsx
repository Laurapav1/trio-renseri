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
        heading="Tilpasning af dit tøj - vores ekspertise"
        imagePath="/images/skjorte.jpg"
      />

      {/* Sektion med tekst (venstre) og billede (højre) */}
      <section className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Specialiseret rensning af skjorter</h1>
          <p>
            Vi er specialister i at give dine skjorter den bedste behandling.
            Vores proces sikrer, at dine skjorter altid er i top stand, klar til
            at blive båret med selvtillid. Fra inspektion til rensning og
            strygning, vi tager os af hvert eneste trin for at sikre den højeste
            kvalitet.
          </p>
          <p>
            Vi har stor ekspertise i at vaske og stryge skjorter. Sidste år
            vaskede vi mere end 28.000 skjorter.
          </p>
          <section className={styles.priceSection}>
            <h3>Pris i alt (vasket og strøget):</h3>
            <ul>
              <li>1 stk. - 25 kr.</li>
              <li>5 stk. - 110 kr.</li>
              <li>+ smokingskjorte 50 kr.</li>
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
