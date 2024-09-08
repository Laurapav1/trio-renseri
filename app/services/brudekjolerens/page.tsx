"use client";
import React from "react";
import styles from "../serviceDetail.module.css";
import Link from "next/link";

export default function Brudekjolerens() {
  return (
    <>
      {/* Hero Section */}
      <div
        className={styles.hero}
        style={{ backgroundImage: "url(/images/brudekjole.jpg)" }}
      >
        <h1>Din brudekjole - vores ansvar</h1>
        <p>
          Specialrensning af brudekjoler for at bevare deres skønhed og
          elegance. Se, hvordan vi behandler din kjole med den største omhu.
        </p>
      </div>

      <div className={styles.container}>
        {/* Introduction and Box Section */}
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <p>
              Vi er eksperter i rensning af brudekjoler, og vi tager hånd om
              hver kjole med omhu og præcision. Vores service sikrer, at din
              brudekjole forbliver i perfekt stand.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <h2>BRUDEKJOLERENS</h2>
            <p>
              Vi renser brudekjoler skånsomt, så de bevarer deres unikke udtryk.
              Vi har hjulpet mange brude med at bevare minderne.
            </p>
            <h3>Pris i alt (renset og plejet):</h3>
            <ul>
              <li>Brudekjole - 1200 kr.</li>
              <li>Slør - 300 kr.</li>
            </ul>
          </div>
        </div>

        {/* Modern Steps Section */}
        <div className={styles.steps}>
          <h2>Processen</h2>
          <div className={styles.stepGrid}>
            <div className={styles.step}>
              <img
                src="/images/step1-brudekjole.jpg"
                alt="Trin 1 - Inspektion"
              />
              <h3>Trin 1: Inspektion</h3>
              <p>Vi inspicerer brudekjolen for pletter og skader.</p>
            </div>

            <div className={styles.step}>
              <img src="/images/step2-brudekjole.jpg" alt="Trin 2 - Rensning" />
              <h3>Trin 2: Rensning</h3>
              <p>Kjolen gennemgår en skånsom rensningsproces.</p>
            </div>

            <div className={styles.step}>
              <img
                src="/images/step3-brudekjole.jpg"
                alt="Trin 3 - Efterbehandling"
              />
              <h3>Trin 3: Efterbehandling</h3>
              <p>Kjolen stryges og plejes for et fejlfrit udseende.</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={styles.cta}>
          <h2>Vil du have din brudekjole i perfekte hænder?</h2>
          <Link
            href={"/priser?service=brudekjolerens"}
            className={styles.ctaButton}
          >
            Se Priser
          </Link>
        </div>
      </div>
    </>
  );
}
