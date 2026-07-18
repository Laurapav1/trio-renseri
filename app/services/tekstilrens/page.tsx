"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import ResponsiveImage from "@/app/components/responsive-image/responsive-image";
import Navbar from "@/app/components/navbar/navbar";

export default function Tekstilrens() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Dit tøj - vores ansvar"
        imagePath="/images/tekstil1.jpg"
        as="p"
      />

      {/* Sektion med tekst (venstre) og billede (højre) */}
      <section className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Rens af tøj i høj kvalitet</h1>
          <p>
            Uanset om det gælder dagligt tøj eller udsøgte selskabskjoler, får
            dit tøj den bedst mulige pleje.
          </p>
          <p>
            Hos Trio Renseriet i Højbjerg hjælper vi kunder fra Aarhus og
            nærområdet med tekstiler, der kræver mere omhu end almindelig
            hjemmevask. Det kan være habitjakker, bukser, kjoler, frakker, uld,
            viskose, blandingsmaterialer og tøj med detaljer, hvor form og farve
            skal bevares.
          </p>

          <div className={styles.detailBlock}>
            <h2>Sådan arbejder vi med tekstilrens</h2>
            <ul className={styles.detailList}>
              <li>Vi vurderer vaskeanvisning, materiale og synlige pletter.</li>
              <li>Vi vælger en skånsom behandling, der passer til tekstilet.</li>
              <li>Vi giver gerne råd om pletter, opbevaring og vedligehold.</li>
            </ul>
          </div>

          <p>
            Er du i tvivl om et stykke tøj kan renses, så kig forbi med det i
            butikken på L. A. Rings Vej 19. Vi gennemgår tøjet sammen med dig og
            aftaler pris og forventet leveringstid, før arbejdet sættes i gang.
          </p>
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
          <ResponsiveImage
            src="/images/tekstil.jpg"
            alt="Tekstiler"
            width={1280}
            height={853}
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
