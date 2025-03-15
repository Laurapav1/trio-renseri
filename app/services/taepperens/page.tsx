"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Image from "next/image";
import Navbar from "@/app/components/navbar/navbar";

export default function Taepperens() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Dit tæppe - vores ekspertise"
        imagePath="/images/tæppe.jpg"
      />

      {/* Sektion med tekst (venstre) og billede (højre) */}
      <section className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Specialiseret rensning af tæpper</h1>
          <p>
            Vi bruger de bedste teknikker og produkter til at rense tæpper af
            enhver type og størrelse, så de igen føles friske og ser smukke ud.
          </p>
          <p>
            Fra mindre måtter til store væg-til-væg tæpper, vi har erfaringen og
            udstyret til at håndtere det hele.
          </p>
          <section className={styles.priceSection}>
            <h2>Pris i alt (renset og plejet):</h2>
            <ul>
              <li>Lille tæppe - 200 kr.</li>
              <li>Stort tæppe - 800 kr.</li>
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
            src="/images/tæppe.jpg"
            alt="tæppe"
            fill
            style={{ objectFit: "cover" }}
            className={styles.image}
          />
        </div>
      </section>
    </>
  );
}
