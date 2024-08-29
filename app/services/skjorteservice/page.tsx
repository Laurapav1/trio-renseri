"use client";
import React from "react";
import CompareImage from "react-compare-image";
import styles from "../serviceDetail.module.css";
import Link from "next/link";

export default function Skjorteservice() {
  return (
    <>
      <div className={styles.hero}>
        <h1>Din skjorte - vores ansvar</h1>
        <p>
          Perfekt rensede og strøgede skjorter – klar til enhver dag. Se,
          hvordan vi gør dine skjorter klar fra start til slut.
        </p>
      </div>
      <div className={styles.container}>
        {/* Introduction and Box Section */}
        <div className={styles.introContainer}>
          <div className={styles.intro}>
            <p>
              Vi er specialister i at give dine skjorter den bedste behandling.
              Vores proces sikrer, at dine skjorter altid er i top stand, klar
              til at blive båret med selvtillid. Fra inspektion til rensning og
              strygning, vi tager os af hvert eneste trin for at sikre den
              højeste kvalitet.
            </p>
          </div>
          <div className={styles.serviceBox}>
            <h2>SKJORTESERVICE</h2>
            <p>
              Vi har stor ekspertise i at vaske og stryge skjorter. Sidste år
              vaskede vi mere end 28.000 skjorter.
            </p>
            <h3>Pris i alt (vasket og strøget):</h3>
            <ul>
              <li>1 stk. - 25 kr.</li>
              <li>5 stk. - 110 kr.</li>
            </ul>
          </div>
        </div>

        {/* Steps Section */}
        <div className={styles.steps}>
          <h2>Processen</h2>
          <div className={styles.step}>
            <h3>Trin 1: Før rengøring</h3>
            <img
              src="/images/step1-before-cleaning.png"
              alt="Trin 1 - Før rengøring"
            />
            <p>Vi inspicerer dine skjorter for pletter og skader.</p>
          </div>

          <div className={styles.step}>
            <h3>Trin 2: Rensning</h3>
            <img src="/images/step2-cleaning.jpg" alt="Trin 2 - Rensning" />
            <p>Skjorterne gennemgår vores professionelle rensningsproces.</p>
          </div>

          <div className={styles.step}>
            <h3>Trin 3: Efter strygning</h3>
            <img src="/images/step3-after.png" alt="Trin 3 - Efter strygning" />
            <p>Skjorterne stryges for at få dem til at se perfekte ud.</p>
          </div>
        </div>

        <div className={styles.cta}>
          <h2>Klar til en fejlfri skjorte?</h2>
          <Link href={"/priser?service=skjorter"} passHref>
            Se Priser
          </Link>
        </div>
      </div>
    </>
  );
}
