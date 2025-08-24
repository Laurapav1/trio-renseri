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
        heading="Dit tøj - vores ansvar"
        imagePath="/images/tekstil2.jpg"
      />

      {/* Sektion med tekst (venstre) og billede (højre) */}
      <section className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Rens af tøj og tekstiler i høj kvalitet</h1>
          <p>
            Uanset om det gælder dagligt tøj eller udsøgte selskabskjoler, får
            din tøj den bedst mulige pleje.
          </p>
          <p></p>
          <section className={styles.priceSection}>
            <h3>Pris i alt (renset og plejet):</h3>
            <Link
              href={"/priser?service=tekstilrens"}
              className={styles.ctaButton}
            >
              Se priser
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
