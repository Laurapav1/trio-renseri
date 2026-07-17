"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Navbar from "@/app/components/navbar/navbar";
import ResponsiveImage from "@/app/components/responsive-image/responsive-image";

export default function Mobelbetraek() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <HeroSection
        heading="Møbelbetræk - Rensning og pleje"
        imagePath="/images/sofa4.jpg"
        as="p"
      />

      {/* Sektion med tekst (venstre) og billede (højre) */}
      <section className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Specialiseret rensning af møbelbetræk</h1>
          <p>
            Professionel rensning af møbelbetræk sikrer, at dine møbler
            forbliver pæne og fri for pletter. Vi tager os af alt fra sofaer til
            lænestole.
          </p>
          <p>
            Vores rensning fjerner pletter og snavs, så dine møbler får et nyt
            og friskt udseende.
          </p>
          <p>
            Møbelbetræk kræver ofte en anden behandling end almindeligt tøj,
            fordi betrækket skal passe tilbage på sofaen, stolen eller hynden
            efter vask. Vi vurderer materiale, farveægthed og pletter, før vi
            anbefaler rens eller vask.
          </p>

          <div className={styles.detailBlock}>
            <h2>Typiske opgaver</h2>
            <ul className={styles.detailList}>
              <li>Rens af sofabetræk, hynder og lænestolsbetræk.</li>
              <li>Pletbehandling efter vurdering af materiale og farve.</li>
              <li>Imprægnering, når stoffet egner sig til efterbehandling.</li>
            </ul>
          </div>

          <p>
            Tag gerne betrækket med forbi butikken på L. A. Rings Vej 19. Så kan
            vi vurdere stoffet, tale om risiko for krymp og aftale pris, før du
            beslutter dig.
          </p>
          <section className={styles.priceSection}>
            <h3>Pris i alt (vasket og renset):</h3>
            <ul>
              <li>135 DKK pr. kg.</li>
              <li>+imprægnering - 225 DKK pr. kg.</li>
            </ul>
            <Link
              href={"/priser?service=mobelbetraak"}
              className={styles.ctaButton}
            >
              Se andre priser
            </Link>
          </section>
        </div>

        <div className={styles.imageContainer}>
          <ResponsiveImage
            src="/images/sofa3.jpg"
            alt="Møbelbetræk"
            width={5840}
            height={3850}
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
