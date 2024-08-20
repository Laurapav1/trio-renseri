"use client";

import styles from "./serviceDetail.module.css";
import CompareSlider from "react-compare-image";

export default function Omforandring() {
  const BEFORE_IMAGE = "/images/before-pants.jpg";
  const AFTER_IMAGE = "/images/after-pants.jpg";

  return (
    <div className={styles.container}>
      <h1>Omforandring af tøj</h1>
      <p>
        Vi tilbyder omforandring og reparation af alle slags tøj, så det passer
        perfekt til dig.
      </p>

      <CompareSlider leftImage={BEFORE_IMAGE} rightImage={AFTER_IMAGE} />
    </div>
  );
}
