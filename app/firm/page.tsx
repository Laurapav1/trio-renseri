"use client";

import React from "react";
import Navbar from "../components/navbar/navbar";
import PageHeroSection from "../components/hero-section/page-hero-section";
import styles from "./firm.module.css";

export default function Firm() {
  const companies = [
    { name: "TDC", imgPath: "/images/firm/tdc.png" },
    { name: "Salling Group", imgPath: "/images/firm/salling-group.png" },
    { name: "Deloitte", imgPath: "/images/firm/deloitte.png" },
    { name: "Post Danmark", imgPath: "/images/firm/postdanmarks.png" },
    { name: "Tetra Pack", imgPath: "/images/firm/tetrapack.png" },
    { name: "Telia", imgPath: "/images/firm/telia.png" },
    { name: "Nykredit", imgPath: "/images/firm/nykredit.png" },
    { name: "Jysk", imgPath: "/images/firm/jysk.png" },
    { name: "McDonald's", imgPath: "/images/firm/mcdonalds.png" },
    { name: "Arla", imgPath: "/images/firm/arla.png" },
    { name: "BRF Kredit", imgPath: "/images/firm/brfkredit.png" },
    { name: "AFG", imgPath: "/images/firm/afg.png" },
  ];

  return (
    <>
      <Navbar />
      <PageHeroSection heading="Kunde Rabat" imagePath="/images/sale.jpg" />

      {/* Intro Section */}
      <section className={styles.textWrapper}>
        <h2>Få Eksklusive Rabatter</h2>
        <p>
          Hos Trio Renseri tilbyder vi en række særlige rabatter til vores
          kunder. Er du erhvervskunde, studerende eller pensionist, har vi
          eksklusive rabatter, der passer til dine behov. Vi samarbejder med
          Logbuy for at tilbyde firmarabatter, og vi modtager også dit vasketøj
          til vask og rulning.
        </p>
      </section>

      {/* Company firm Section */}
      <section className={styles.companySection}>
        <h2>Disse virksomheder har tillid til os</h2>
        <p>
          Nedenfor kan du se en liste over nogle af de virksomheder, der
          allerede benytter sig af vores firmarabatter. Er du i tvivl om, din
          virksomhed er på listen? Ring til os og hør nærmere – vi er altid klar
          til at hjælpe.
        </p>
        <div className={styles.logoGrid}>
          {companies.map((company) => (
            <div key={company.name} className={styles.logoItem}>
              <img src={company.imgPath} alt={company.name} />
            </div>
          ))}
        </div>
      </section>

       {/* Studierabat og Pensionsrabat Sektion */}
       <section className={styles.discountSection}>
        <div className={styles.discountContainer}>
          <h2>Vi tilbyder også rabatter til studerende og pensionister!</h2>
          <p>
            Hos Trio Renseri tilbyder vi ikke kun firmarabatter, men også særlige rabatter til studerende og pensionister. Få 10% rabat, når du fremviser gyldigt studie- eller pensionistkort ved betaling.
          </p>
          <div className={styles.discountDetails}>
            <div className={styles.discountBox}>
              <h3>Studierabat</h3>
              <p>Få 10% rabat med gyldigt studiekort.</p>
            </div>
            <div className={styles.discountBox}>
              <h3>Pensionsrabat</h3>
              <p>Få 10% rabat med gyldigt pensionistkort.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
