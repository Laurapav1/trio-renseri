"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import ResponsiveImage from "@/app/components/responsive-image/responsive-image";
import Navbar from "@/app/components/navbar/navbar";

export default function Skjorteservice() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Din skjorte - vores ansvar"
        imagePath="/images/vores-ydelser.jpg"
        as="p"
      />

      {/* Sektion med tekst (venstre) og billede (højre) */}
      <section className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Skjorteservice i Højbjerg</h1>
          <p>
            Vi sørger for, at din skjorte får den behandling den fortjener og
            til Aarhus{"'"} billigste pris.
          </p>
          <p>Sidste år vaskede vi mere end 25.000 skjorter.</p>
          <p>
            Skjorteservice er oplagt til både arbejde, hverdag og fest, hvor
            skjorten skal være ren, glat og klar til brug. Vi har fokus på
            krave, manchetter og knapstolpe, fordi det ofte er her snavs og slid
            ses først.
          </p>

          <div className={styles.detailBlock}>
            <h2>Hvad indgår i skjorteservice?</h2>
            <ul className={styles.detailList}>
              <li>Vask og strygning af almindelige skjorter.</li>
              <li>Ekstra opmærksomhed på kraver, manchetter og folder.</li>
              <li>Mulighed for smokingskjorte og skjorter til særlige lejligheder.</li>
            </ul>
          </div>

          <p>
            Indlever skjorterne hos Trio Renseriet i Højbjerg, så aftaler vi
            antal, pris og leveringstid. Mange kunder samler flere skjorter ad
            gangen for at gøre hverdagen lettere.
          </p>
          <section className={styles.priceSection}>
            <h3>Pris i alt (vasket og strøget):</h3>
            <ul>
              <li>1 stk. - 25 DKK</li>
              <li>5 stk. - 110 DKK</li>
              <li>+ smokingskjorte 50 DKK</li>
            </ul>
            <Link
              href={"/priser?service=skjorteservice"}
              className={styles.ctaButton}
            >
              Se andre priser
            </Link>
          </section>
        </div>

        <div className={styles.imageContainer}>
          <ResponsiveImage
            src="/images/skjorte.jpg"
            alt="Skjorte"
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
