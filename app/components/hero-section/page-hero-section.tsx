import React from "react";
import styles from "./page-hero-section.module.css";

type PageHeroSectionProps = {
  heading: string;
  imagePath: string;
};

const PageHeroSection = ({ heading, imagePath }: PageHeroSectionProps) => {
  return (
    <div
      className={styles.pageHeroSection}
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <div className={styles.overlay}></div> {/* Tilføj overlayen */}
      <h1 className={styles.heroHeading}>{heading}</h1>
    </div>
  );
};

export default PageHeroSection;
