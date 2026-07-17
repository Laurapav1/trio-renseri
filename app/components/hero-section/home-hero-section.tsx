"use client";

import React, { useEffect, useState } from "react";
import styles from "./home-hero-section.module.css";

function HomeHeroSection() {
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVideoReady(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className={styles.homeHeroSection}>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        src={videoReady ? "/videos/forside.mp4" : undefined}
        className={styles.heroVideo}
        poster="/images/hero-placeholder.jpg"
      />
      <div className={styles.overlay} aria-hidden />
      <div className={styles.heroContent}>
        <h1>Velkommen til Trio Renseriet</h1>
        <p>Professionel renseri service siden 1954</p>
      </div>
    </section>
  );
}

export default HomeHeroSection;
