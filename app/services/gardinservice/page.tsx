"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";

export default function Gardinservice() {
  return (
    <>
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1>Dine gardiner - vores ansvar</h1>
        <p>
          Få dine gardiner til at se ud som nye med vores professionelle
          renseservice. Se, hvordan vi gør det.
        </p>
      </div>

      <div className={styles.container}>
        {/* Introduction and Box Section */}
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <p>
              Vores gardinservice renser og plejer dine gardiner skånsomt for at
              fjerne støv, allergener og pletter. Vi sikrer, at dine gardiner
              bevarer deres farver og struktur.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <h2>GARDINSERVICE</h2>
            <p>
              Vi tilbyder en komplet rensning af alle typer gardiner, fra lette
              stofgardiner til tunge mørklægningsgardiner.
            </p>
            <h3>Pris i alt (renset og strøget):</h3>
            <ul>
              <li>Let stof - 150 kr. pr. stk.</li>
              <li>Mørklægningsgardiner - 250 kr. pr. stk.</li>
            </ul>
          </div>
        </div>

        {/* Modern Steps Section */}
        <div className={styles.steps}>
          <h2>Processen</h2>
          <div className={styles.stepGrid}>
            <div className={styles.step}>
              <img src="/images/step1-gardin.jpg" alt="Trin 1 - Inspektion" />
              <h3>Trin 1: Inspektion</h3>
              <p>Vi inspicerer gardinerne for støv og pletter.</p>
            </div>

            <div className={styles.step}>
              <img src="/images/step2-gardin.jpg" alt="Trin 2 - Rensning" />
              <h3>Trin 2: Rensning</h3>
              <p>Gardinerne gennemgår en skånsom rensningsproces.</p>
            </div>

            <div className={styles.step}>
              <img
                src="/images/step3-gardin.jpg"
                alt="Trin 3 - Strygning og Efterbehandling"
              />
              <h3>Trin 3: Strygning og Efterbehandling</h3>
              <p>Gardinerne stryges og hænges forsigtigt op.</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={styles.cta}>
          <h2>Vil du have rene og friske gardiner?</h2>
          <Link
            href={"/priser?service=gardinservice"}
            className={styles.ctaButton}
          >
            Se Priser
          </Link>
        </div>
      </div>
    </>
  );
}
