import React from "react";
import styles from "./page-hero-section.module.css";

type PageHeroSectionProps = {
  heading: string;
  imagePath: string;
  as?: "h1" | "p";
};

const PageHeroSection = ({
  heading,
  imagePath,
  as = "h1",
}: PageHeroSectionProps) => {
  const HeadingTag = as;

  return (
    <div
      className={styles.pageHeroSection}
      style={{ backgroundImage: `url(${imagePath})` }}
    >
      <div className={styles.overlay}></div>
      <HeadingTag className={styles.heroHeading}>{heading}</HeadingTag>
    </div>
  );
};

export default PageHeroSection;
