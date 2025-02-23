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
        heading="Vores ydelser"
        imagePath="/images/vores-ydelser.jpg"
      />
      <div className={styles.container}>
        <p className={styles.intro}>
          Velkommen til Trio Renseri – din pålidelige partner til hverdagens
          tekstilbehov. Vi sørger for, at du altid kan føle dig godt tilpas i
          dit tøj, uanset om det er den daglige skjorte eller den særlige
          brudekjole.
        </p>
        <Link href={"/tojrens/priser"} className={styles.ctaButton}>
          Se priser
        </Link>
        <div className={styles.servicesGrid}>
          {/* Ændret rækkefølge af servicekort */}
          <ServiceCard
            title="Tekstil Service"
            description="Effektiv rensning af alle typer tekstiler, der fjerner pletter og bevarer stoffets kvalitet."
            link="/services/tekstilrens"
            imgURL="images/tekstil.jpg"
          />

          <ServiceCard
            title="Skjorteservice"
            description="Rensning og strygning af skjorter, så de altid ser skarpe og velplejede ud – klar til hverdag og fest."
            link="/services/skjorteservice"
            imgURL="images/skjorte.jpg"
          />

          <ServiceCard
            title="Brudetøj"
            description="Skånsom rensning af brudekjoler, der bevarer deres glans og skønhed."
            link="/services/brudekjolerens"
            imgURL="images/bridedress5.jpg"
          />

          <ServiceCard
            title="Dyner/puder"
            description="Vi tilbyder grundig vask af dyner og puder, der fjerner støv og allergener, så du kan sove trygt og godt."
            link="/services/dynevask"
            imgURL="images/dyne.jpg"
          />

          <ServiceCard
            title="Vask af duge"
            description="Vask, tørring og rulning af tøj, så det altid er klar til brug."
            link="/services/vaskerulleservice"
            imgURL="images/table.jpg"
          />

          <ServiceCard
            title="Gardiner"
            description="Rensning af gardiner, så de fremstår friske og indbydende i dit hjem."
            link="/services/gardinservice"
            imgURL="images/curtain.jpg"
          />

          <ServiceCard
            title="Tæpper"
            description="Professionel rensning af tæpper, der bevarer farverne og fibrenes blødhed."
            link="/services/taepperens"
            imgURL="images/floorcarpet.jpg"
          />

          <ServiceCard
            title="Madrasbetræk"
            description="Skånsom rensning af madrasbetræk, der holder dem friske og behagelige."
            link="/services/madrasbetraek"
            imgURL="images/madrass.jpg"
          />

          <ServiceCard
            title="Møbelbetræk"
            description="Skånsom rensning af sofabetræk, der fjerner pletter og snavs, så din sofa fremstår frisk og indbydende."
            link="/services/sofa"
            imgURL="images/sofa.jpg"
          />

          <ServiceCard
            title="Udlejning af møbel og tæpperensmaskine"
            description="Lej professionelle maskiner til rensning af møbler og tæpper, og få det til at se nyt ud."
            link="/services/udlejning"
            imgURL="images/rental.jpg"
          />

          <ServiceCard
            title="Båd Kalache"
            description="Rensning og vedligeholdelse af båd kalache, så de forbliver i topform."
            link="/services/baadkalache"
            imgURL="images/boat.jpg"
          />
        </div>
      </div>
    </>
  );
}
