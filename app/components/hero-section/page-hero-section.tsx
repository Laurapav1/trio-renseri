import React from "react";
import styles from "./hero-section.module.css";

type PageHeroSectionProps = {
  heading: string;
  imagePath: string;
};

const PageHeroSection = ({ heading, imagePath }: PageHeroSectionProps) => {
  return (
    <section className={styles.pageHeroSection}>
      <div className={styles.heroImageWrapper}>
        <img src={imagePath} alt={heading} className={styles.heroImage} />
      </div>
      <div className={styles.heroContent}>
        <h1>{heading}</h1>
      </div>
    </section>
  );
};

export default PageHeroSection;
