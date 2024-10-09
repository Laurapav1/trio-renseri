import React from "react";
import Image from "next/image";
import styles from "./hero-section.module.css";

interface HeroSectionProps {
    text: string;
}

function HeroSection({ text }: HeroSectionProps) {
    return (
        <div className={styles.heroSection}>
            <div className={styles.overlay}></div>
            <Image
                src="/images/hero-section-image.jpg"
                alt="Hero Background"
                layout="fill"
                objectFit="cover"
                className={styles.heroImage}
            />
            <div className={styles.textContainer}>
                <h1 className={styles.heroText}>{text}</h1>
            </div>
        </div>
    );
}

export default HeroSection;
