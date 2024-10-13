import React from "react";
import Image from "next/image";
import styles from "./hero-section.module.css";

interface HeroSectionProps {
    text: string;
    img: string;
}

function HeroSection({ text, img }: HeroSectionProps) {
    return (
        <div className={styles.heroSection}>
            <div className={styles.overlay}></div>
            <Image
                src={img}
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
