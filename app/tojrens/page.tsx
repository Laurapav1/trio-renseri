"use client";
import styles from "../components/service-card/service-card.module.css";
import PageHeroSection from "../components/hero-section/page-hero-section";
import Navbar from "../components/navbar/navbar";
import ServiceCard from "../components/service-card/service-card";
import Link from "next/link";

export default function Tojrens() {
  return (
    <>
      <Navbar />
      <PageHeroSection
        heading="Tøjrens og tekstilpleje"
        imagePath="/images/vores-ydelser.jpg"
      />
      <div className={styles.container}>
        <p className={styles.intro}>
          Hos Trio Renseriet hjælper vi med tøjrens og tekstilpleje i
          Højbjerg og Aarhus. Vi behandler blandt andet skjorter, brudekjoler,
          dåbskjoler, dyner, gardiner, tæpper og sofabetræk.
        </p>
        <Link href={"/priser"} className={styles.ctaButton}>
          Se priser
        </Link>
        <div className={styles.servicesGrid}>
          <ServiceCard
            title="Skjorteservice"
            description="Rensning og strygning af skjorter, så de altid ser skarpe og velplejede ud – klar til hverdag og fest."
            link="/services/skjorteservice"
            imgURL="/images/skjorte.jpg"
          />

          <ServiceCard
            title="Gardinservice"
            description="Rensning af gardiner, så de fremstår friske og indbydende i dit hjem."
            link="/services/gardinservice"
            imgURL="/images/curtain.jpg"
          />

          <ServiceCard
            title="Tæpperens"
            description="Professionel rensning af tæpper, der bevarer farverne og fibrenes blødhed."
            link="/services/taepperens"
            imgURL="/images/floorcarpet.jpg"
          />

          <ServiceCard
            title="Tekstilrens"
            description="Effektiv rensning af alle typer tekstiler, der fjerner pletter og bevarer stoffets kvalitet."
            link="/services/tekstilrens"
            imgURL="/images/tekstil.jpg"
          />

          <ServiceCard
            title="Vaske- og rulleservice"
            description="Vask, tørring og rulning af tøj, så det altid er klar til brug."
            link="/services/vaskerulleservice"
            imgURL="/images/table.jpg"
          />

          <ServiceCard
            title="Brudekjolerens"
            description="Skånsom rensning af brudekjoler, der bevarer deres glans og skønhed."
            link="/services/brudekjolerens"
            imgURL="/images/bridedress.jpg"
          />

          <ServiceCard
            title="Dåbskjolevask"
            description="Omhyggelig rensning af dåbskjoler, så de forbliver smukke til den særlige dag."
            link="/services/daabskjolevask"
            imgURL="/images/bridedress5.jpg"
          />

          <ServiceCard
            title="Dyne- og pudevask"
            description="Vi tilbyder grundig vask af dyner og puder, der fjerner støv og allergener, så du kan sove trygt og godt."
            link="/services/dynevask"
            imgURL="/images/dyne.jpg"
          />

          <ServiceCard
            title="Sofa"
            description="Skånsom rensning af sofabetræk, der fjerner pletter og snavs, så din sofa fremstår frisk og indbydende."
            link="/services/sofa"
            imgURL="/images/sofa.jpg"
          />
          <ServiceCard
            title="Flere tekstilopgaver"
            description="Har du en særlig tekstilopgave? Ring eller skriv, så vurderer vi, om vi kan hjælpe."
            link="/kontakt"
            imgURL="/images/kontakt.jpg"
          />
        </div>
      </div>
    </>
  );
}
