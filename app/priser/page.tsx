import Navbar from "@/app/components/navbar/navbar";
import PageHeroSection from "@/app/components/hero-section/page-hero-section";
import styles from "@/app/components/prices-page/prices-page.module.css";
import PricesClient from "@/app/components/prices-page/prices-client";
import { loadPriceSections } from "@/app/lib/prices";

export default function PricesRens() {
  const sections = loadPriceSections("priser.yaml");

  return (
    <>
      <Navbar />
      <PageHeroSection heading="Priser" imagePath="/images/money2.jpg" />

      <div className={styles.container}>
        <PricesClient initialSections={sections} yamlUrl="/priser.yaml" />
      </div>
    </>
  );
}
