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
            title="Vaske/Rulle service"
            description="Vask, tørring og rulning af tøj, så det altid er klar til brug."
            link="/services/vaskerulleservice"
            imgURL="/images/table.jpg"
          />

          <ServiceCard
            title="Brudekjole rens"
            description="Skånsom rensning af brudekjoler, der bevarer deres glans og skønhed."
            link="/services/brudekjolerens"
            imgURL="/images/bridedress.jpg"
          />

          <ServiceCard
            title="Dåbskjole vask/rens"
            description="Omhyggelig rensning af dåbskjoler, så de forbliver smukke til den særlige dag."
            link="/services/daabskjolevask"
            imgURL="/images/gowndress.png"
          />

          <ServiceCard
            title="Dyne/pude vask"
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
            title="Mange flere ydelser"
            description="Har du særlige behov? Vi tilbyder mange flere renseri- og vaskeopgaver. Ring eller skriv til os for at høre nærmere"
            link="/kontakt"
            imgURL="/images/kontakt.jpg"
          />
        </div>
      </div>
    </>
  );
}
