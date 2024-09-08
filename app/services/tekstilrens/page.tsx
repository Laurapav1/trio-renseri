"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";

export default function Tekstilrens() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1>Dit tekstil - vores ekspertise</h1>
        <p>
          Fra sofapuder til gardiner, vi renser og plejer alle typer tekstiler skånsomt og effektivt.
        </p>
      </div>

      <div className={styles.container}>
        {/* Introduction and Box Section */}
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <p>
              Vi er specialister i rensning af forskellige tekstiler og tilbyder en sikker og effektiv rensning af alt fra møbelbetræk til tunge gardiner.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <h2>TEKSTILRENS</h2>
            <p>
              Vores professionelle rensning sikrer, at dine tekstiler forbliver friske, rene og smukke.
            </p>
            <h3>Pris i alt (renset og plejet):</h3>
            <ul>
              <li>Puder - 100 kr. pr. stk.</li>
              <li>Sofabetræk - 300 kr.</li>
            </ul>
          </div>
        </div>

        {/* Modern Steps Section */}
        <div className={styles.steps}>
          <h2>Processen</h2>
          <div className={styles.stepGrid}>
            <div className={styles.step}>
              <img src="/images/step1-tekstilrens.jpg" alt="Trin 1 - Inspektion" />
              <h3>Trin 1: Inspektion</h3>
              <p>Inspektion af tekstiler for pletter og skader.</p>
            </div>

            <div className={styles.step}>
              <img src="/images/step2-tekstilrens.jpg" alt="Trin 2 - Rensning" />
              <h3>Trin 2: Rensning</h3>
              <p>Tekstilerne vaskes skånsomt med specialprodukter.</p>
            </div>

            <div className={styles.step}>
              <img src="/images/step3-tekstilrens.jpg" alt="Trin 3 - Efterbehandling" />
              <h3>Trin 3: Efterbehandling</h3>
              <p>Tekstilerne efterbehandles for et nyt og friskt look.</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={styles.cta}>
          <h2>Klar til at få rene og friske tekstiler?</h2>
          <Link href={"/priser?service=tekstilrens"} className={styles.ctaButton}>
            Se Priser
          </Link>
        </div>
      </div>
    </>
  );
}
