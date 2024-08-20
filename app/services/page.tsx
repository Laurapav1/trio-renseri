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
        <Link href="/services/omforandring" className={styles.serviceLink}>
          <div className={styles.serviceCard}>
            <h2 className={styles.serviceCardHeading}>Omforandring af tøj</h2>
            <p>
              Tilpasning og reparation af alle slags tøj for den perfekte
              pasform.
            </p>
          </div>
        </Link>

        <Link href="/services/skjorteservice" className={styles.serviceLink}>
          <div className={styles.serviceCard}>
            <h2 className={styles.serviceCardHeading}>Skjorteservice</h2>
            <p>Rens og strygning af skjorter, så de altid ser skarpe ud.</p>
          </div>
        </Link>

        <Link href="/services/gardinservice" className={styles.serviceLink}>
          <div className={styles.serviceCard}>
            <h2 className={styles.serviceCardHeading}>Gardinservice</h2>
            <p>
              Vi renser dine gardiner og sørger for, at de forbliver friske og
              rene.
            </p>
          </div>
        </Link>

        <Link href="/services/taepperens" className={styles.serviceLink}>
          <div className={styles.serviceCard}>
            <h2 className={styles.serviceCardHeading}>Tæpperens</h2>
            <p>Professionel rensning af tæpper, store som små.</p>
          </div>
        </Link>

        <Link href="/services/tekstilrens" className={styles.serviceLink}>
          <div className={styles.serviceCard}>
            <h2 className={styles.serviceCardHeading}>Tekstilrens</h2>
            <p>Vi tilbyder skånsom og effektiv rensning af alle tekstiler.</p>
          </div>
        </Link>

        <Link href="/services/brudekjolerens" className={styles.serviceLink}>
          <div className={styles.serviceCard}>
            <h2 className={styles.serviceCardHeading}>Brudekjole rens</h2>
            <p>
              Specialrensning af brudekjoler, så de forbliver i perfekt stand.
            </p>
          </div>
        </Link>

        <Link href="/services/daabskjolevask" className={styles.serviceLink}>
          <div className={styles.serviceCard}>
            <h2 className={styles.serviceCardHeading}>Dåbskjole vask/rens</h2>
            <p>Vi tager os af dåbskjoler med ekstra omsorg og præcision.</p>
          </div>
        </Link>

        <Link href="/services/vaskerulleservice" className={styles.serviceLink}>
          <div className={styles.serviceCard}>
            <h2 className={styles.serviceCardHeading}>Vaske/Rulle service</h2>
            <p>
              Lad os tage hånd om dit vasketøj, så det altid er klar til brug.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
