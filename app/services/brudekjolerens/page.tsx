"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Image from "next/image";
import Navbar from "@/app/components/navbar/navbar";

export default function Brudekjolerens() {
  return (
    <>
      <Navbar />
      <HeroSection
        heading="Din brudekjole - vores ekspertise"
        imagePath="/images/bridedress2.jpg"
      />

      {/* Sektion med tekst (venstre) og billede (højre) */}
      <section className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Specialiseret rensning af brudekjoler</h1>
          <p>
            Vi er eksperter i at rense og bevare din brudekjole, så den
            forbliver et smukt minde fra den store dag. Vores skånsomme
            renseteknikker sikrer, at alle detaljer bevares – lige fra sarte
            blonder til fine perler og sten.
          </p>
          <p>
            Vores dedikerede team gennemgår hver kjole omhyggeligt og tilpasser
            rensningen til kjolens materiale, så du trygt kan lade os tage hånd
            om dit dyrebare klenodie.
          </p>
          <section className={styles.priceSection}>
            <h2>Priser</h2>
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
