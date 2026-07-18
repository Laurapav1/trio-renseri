"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";
import HeroSection from "@/app/components/hero-section/page-hero-section";
import Navbar from "@/app/components/navbar/navbar";
import ResponsiveImage from "@/app/components/responsive-image/responsive-image";

export default function BaadKalache() {
  return (
    <>
      <Navbar />
      <HeroSection
        heading="Vedligeholdelse og rensning"
        imagePath="/images/sunset.jpg"
        as="p"
      />

      {/* Sektion med tekst (venstre) og billede (højre) */}
      <section className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Specialiseret vask og imprægnering af bådkalecher</h1>
          <p>
            Vi tilbyder professionel vask og vedligeholdelse af bådkaleche, så
            de bevarer deres funktionalitet og æstetik. Vores ekspertise sikrer,
            at din bådkaleche forbliver i topform gennem alle sæsoner.
          </p>
          <p>
            Vi vasker og imprægnerer bådkalecher med stor omhu og anvender de
            bedste metoder til at beskytte materialet og forlænge levetiden.
          </p>
          <p>
            En bådkaleche udsættes for sol, fugt, alger, salt og almindeligt
            slid. Derfor gennemgår vi stof, syninger, ruder og lynlåse, før vi
            vælger behandling. Efter vask kan kalechen imprægneres, så den bedre
            afviser vand og snavs.
          </p>

          <div className={styles.detailBlock}>
            <h2>Vi kan hjælpe med</h2>
            <ul className={styles.detailList}>
              <li>Vask og rens af bådkalecher.</li>
              <li>Imprægnering efter vask, når materialet egner sig til det.</li>
              <li>Mindre reparationer som ruder, lynlåse og beslægtede detaljer.</li>
            </ul>
          </div>

          <p>
            Kunder fra Aarhus-området kan indlevere kalechen hos os i Højbjerg.
            Ring gerne først, hvis kalechen er meget stor, eller hvis du ønsker,
            at vi skal se på en konkret skade.
          </p>
          <section className={styles.priceSection}>
            <h3>Priser</h3>
            <ul>
              <li>395 DKK pr. kg.</li>
            </ul>
            <Link
              href={"/priser?service=baadkalache"}
              className={styles.ctaButton}
            >
              Se andre priser
            </Link>
          </section>
        </div>

        <div className={styles.imageContainer}>
          <ResponsiveImage
            src="/images/baad2.jpg"
            alt="Bådkaleche"
            width={1194}
            height={932}
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
