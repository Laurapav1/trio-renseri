import React from "react";
import styles from "./home-hero-section.module.css";

function HomeHeroSection() {
  return (
    <section className={styles.homeHeroSection}>
      <video
        autoPlay
        loop
        muted
        playsInline // iOS inline playback
        className={styles.heroVideo}
        poster="/images/hero-placeholder.jpg"
      >
        <source src="/videos/forside.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.heroContent}>
        <h1>Velkommen til Trio Renseri</h1>
        <p>Professionel renseri service siden 1954</p>
      </div>
    </section>
  );
}

export default HomeHeroSection;
