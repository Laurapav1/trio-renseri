"use client";

import React from "react";
import Navbar from "../components/navbar/navbar";
import PageHeroSection from "../components/hero-section/page-hero-section";
import styles from "./kunderabat.module.css";

export default function Kunderabat() {
  return (
    <>
      <Navbar />
      <PageHeroSection heading="Kunderabat" imagePath="/images/rabat.jpg" />

      {/* Intro Section */}
      <section className={styles.container}>
        <p className={styles.intro}>
          Hos Trio Renseriet tilbyder vi særlige rabatter på rensning af
          tekstiltøj. Er du studerende eller pensionist, kan du få 15% rabat på
          tekstiltøj med gyldigt studie- eller pensionistkort ved betaling.
        </p>
        <div className={styles.discountDetails}>
          <div className={styles.discountBox}>
            <h3>Studierabat</h3>
            <p>Få 15% rabat med gyldigt studiekort.</p>
          </div>
          <div className={styles.discountBox}>
            <h3>Pensionsrabat</h3>
            <p>Få 15% rabat med gyldigt pensionistkort.</p>
          </div>
        </div>
      </section>
    </>
  );
}
