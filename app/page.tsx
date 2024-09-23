import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.contents}></div>
        <video
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          className={styles.video}
        />
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.gridContainer}>
          {/* Billedet til venstre */}
          <div className={styles.imageWrapper}>
            <img src="/images/after-pants.jpg" alt="Laundry Process" />
          </div>

          {/* Teksten til højre */}
          <div className={styles.textWrapper}>
            <h2>Velkommen til Trio renseri</h2>
            <p>
              Vi er et professionelt erhvervsrenseri, der blev grundlagt i 1954
              og har mere end 26 års erfaring. Vores kunder er og har altid
              været den private forbruger eller den gode virksomhed, som vi
              igennem tiden har serviceret med diverse vaske- og renseriydelser.
            </p>
            <p>
              Igennem årene er der sket en voldsom udvikling på både tekstiler,
              former og farver, – men tiden har heller ikke stået stille hos os.
            </p>
          </div>
        </div>
      </section>

      {/* New Section with Steps */}
      <section className={styles.stepsSection}>
        <h2>Sådan fungerer det </h2>
        <div className={styles.stepsWrapper}>
          {/* Step 1 */}
          <div className={styles.step}>
            <div className={styles.icon}>
              <img src="/images/schedule.png" alt="Schedule Pickup" />
            </div>
            <h3>1. Aflever dit tøj</h3>
            <p>
              Kom forbi vores butik med dit tøj, som skal renses eller vaskes.
              Vi tager imod det og giver dig et nummer.
            </p>
          </div>

          {/* Step 2 */}
          <div className={styles.step}>
            <div className={styles.icon}>
              <img src="/images/laundryService.png" alt="Prepare Items" />
            </div>
            <h3>2. Vi renser og vasker</h3>
            <p>
              Dit tøj bliver behandlet med den største omhu af vores erfarne
              team. Vi sørger for, at det bliver rent og friskt.
            </p>
          </div>

          {/* Step 3 */}
          <div className={styles.step}>
            <div className={styles.icon}>
              <img src="/images/enjoy.png" alt="Enjoy Your Day" />
            </div>
            <h3>3. Hent dit tøj</h3>
            <p>
              Når dit tøj er klart, kan du komme og hente det. Brug det nummer,
              du har fået, når du afleverede tøjet.
            </p>
          </div>
        </div>
        <Link href={"/priser?service=skjorter"} className={styles.ctaButton}>
          Se Priser
        </Link>
      </section>
    </main>
  );
}
