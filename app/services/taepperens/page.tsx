"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import ResponsiveImage from "@/app/components/responsive-image/responsive-image";
import Navbar from "@/app/components/navbar/navbar";

export default function Taepperens() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Dit tæppe - vores ekspertise"
        imagePath="/images/tæppe.jpg"
        as="p"
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
          <p>
            Tæpper samler støv, sand, pollen og pletter, som almindelig
            støvsugning ikke altid fjerner. Derfor vurderer vi tæppets materiale,
            luv, farver og bagside, før vi anbefaler behandling.
          </p>

          <div className={styles.detailBlock}>
            <h2>Inden du indleverer tæppet</h2>
            <ul className={styles.detailList}>
              <li>Fortæl gerne, hvad pletten kommer fra, hvis du ved det.</li>
              <li>Undgå hård hjemmebehandling, da det kan sætte pletten fast.</li>
              <li>Spørg os om forventet tørretid og vedligeholdelse efter rens.</li>
            </ul>
          </div>

          <p>
            Vi hjælper kunder fra Højbjerg, Aarhus og nærområdet med løse
            tæpper, små måtter og større tekstilflader. Hvis tæppet kræver
            særlig behandling, aftaler vi pris og leveringstid på forhånd.
          </p>
          <section className={styles.priceSection}>
            <h3>Pris i alt (renset og plejet):</h3>
            <ul>
              <li>Efter aftale</li>
            </ul>
            <Link
              href={"/priser?service=taepperens"}
              className={styles.ctaButton}
            >
              Se andre priser
            </Link>
          </section>
        </div>

        <div className={styles.imageContainer}>
          <ResponsiveImage
            src="/images/floorcarpet.jpg"
            alt="Tæppe"
            width={1440}
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
