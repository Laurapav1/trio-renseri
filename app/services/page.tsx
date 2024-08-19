"use client";
import Link from "next/link";
import styles from "./services.module.css";

export default function Services() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Vores ydelser</h1>
      <p className={styles.intro}>
        Velkommen til Trio Renseri – din pålidelige partner til hverdagens
        tekstilbehov. Vi sørger for, at du altid kan føle dig godt tilpas i dit
        tøj, uanset om det er den daglige skjorte eller den særlige brudekjole.
        Lad os tage os af de små detaljer, så du kan fokusere på det, der
        betyder mest for dig.
      </p>
      <div className={styles.servicesGrid}>
        <Link href="/services/omforandring" passHref>
          <div className={styles.serviceCard}>
            <h2>Omforandring af tøj</h2>
            <p>
              Tilpasning og reparation af alle slags tøj for den perfekte
              pasform.
            </p>
          </div>
        </Link>

        <div className={styles.serviceCard}>
          <h2>Skjorteservice</h2>
          <p>Rens og strygning af skjorter, så de altid ser skarpe ud.</p>
        </div>
        <div className={styles.serviceCard}>
          <h2>Gardinservice</h2>
          <p>
            Vi renser dine gardiner og sørger for, at de forbliver friske og
            rene.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <h2>Tæpperens</h2>
          <p>Professionel rensning af tæpper, store som små.</p>
        </div>
        <div className={styles.serviceCard}>
          <h2>Tekstilrens</h2>
          <p>Vi tilbyder skånsom og effektiv rensning af alle tekstiler.</p>
        </div>
        <div className={styles.serviceCard}>
          <h2>Brudekjole rens</h2>
          <p>
            Specialrensning af brudekjoler, så de forbliver i perfekt stand.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <h2>Dåbskjole vask/rens</h2>
          <p>Vi tager os af dåbskjoler med ekstra omsorg og præcision.</p>
        </div>
        <div className={styles.serviceCard}>
          <h2>Vaske/Rulle service</h2>
          <p>
            Lad os tage hånd om dit vasketøj, så det altid er klar til brug.
          </p>
        </div>
      </div>
    </div>
  );
}
