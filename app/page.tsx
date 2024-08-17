import Link from "next/link"; // Import Link-komponenten
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contents}></div>
      <video
        src="/hero.mp4"
        autoPlay
        muted
        loop
        className={styles.video}
        controls
      />
    </main>
  );
}
