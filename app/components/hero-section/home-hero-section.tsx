import React from "react";
import styles from "./hero-section.module.css";

function HomeHeroSection() {
  return (
    <section className={styles.homeHeroSection}>
      <video autoPlay loop muted className={styles.heroVideo}>
        <source src="/videos/forside.MOV" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.heroContent}>
        <h1>Welcome to Trio Renseri</h1>
        <p>Professional cleaning services since 1954.</p>
      </div>
    </section>
  );
}

export default HomeHeroSection;
