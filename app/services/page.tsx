"use client";
import Link from "next/link";
import styles from "./services.module.css";
import PageHeroSection from "../components/hero-section/page-hero-section";
import Navbar from "../components/navbar/navbar";
import Image from "next/image";

export default function Services() {
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
        <div className={styles.servicesGrid}>
          <ServiceCard
            title="Omforandring af tøj"
            description="Få tilpasset og repareret dit tøj for den perfekte pasform. Lad os give dit yndlingstøj nyt liv."
            link="/services/omforandring"
            imgURL="images/sew.jpg"
          />

          <ServiceCard
            title="Skjorteservice"
            description="Rensning og strygning af skjorter, så de altid ser skarpe og velplejede ud – klar til hverdag og fest."
            link="/services/skjorteservice"
            imgURL="images/skjorte.jpg"
          />

          <ServiceCard
            title="Gardinservice"
            description="Rensning af gardiner, så de fremstår friske og indbydende i dit hjem."
            link="/services/gardinservice"
            imgURL="images/curtain.jpg"
          />

          <ServiceCard
            title="Tæpperens"
            description="Professionel rensning af tæpper, der bevarer farverne og fibrenes blødhed."
            link="/services/taepperens"
            imgURL="images/floorcarpet.jpg"
          />

          <ServiceCard
            title="Tekstilrens"
            description="Effektiv rensning af alle typer tekstiler, der fjerner pletter og bevarer stoffets kvalitet."
            link="/services/tekstilrens"
            imgURL="images/tekstil.jpg"
          />

          <ServiceCard
            title="Vaske/Rulle service"
            description="Vask, tørring og rulning af tøj, så det altid er klar til brug."
            link="/services/vaskerulleservice"
            imgURL="images/table.jpg"
          />

          <ServiceCard
            title="Brudekjole rens"
            description="Skånsom rensning af brudekjoler, der bevarer deres glans og skønhed."
            link="/services/brudekjolerens"
            imgURL="images/bridedress.jpg"
          />

          <ServiceCard
            title="Dåbskjole vask/rens"
            description="Omhyggelig rensning af dåbskjoler, så de forbliver smukke til den særlige dag."
            link="/services/daabskjolevask"
            imgURL="images/gowndress.png"
          />

          <ServiceCard
            title="Dyne/pude vask"
            description="Vi tilbyder grundig vask af dyner og puder, der fjerner støv og allergener, så du kan sove trygt og godt."
            link="/services/dynevask"
            imgURL="images/dyne.jpg"
          />

          <ServiceCard
            title="Sofa"
            description="Skånsom rensning af sofabetræk, der fjerner pletter og snavs, så din sofa fremstår frisk og indbydende."
            link="/services/sofa"
            imgURL="images/sofa.jpg"
          />
          <ServiceCard
            title="Mange flere ydelser"
            description="Har du særlige behov? Vi tilbyder mange flere renseri- og vaskeopgaver. Ring eller skriv til os for at høre nærmere"
            link="/kontakt"
            imgURL="images/kontakt.jpg"
          />
        </div>
      </div>
    </>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  imgURL: string;
}

function ServiceCard({ title, description, link, imgURL }: ServiceCardProps) {
  return (
    <Link href={link} className={styles.serviceCard}>
      <img src={imgURL} alt={title} className={styles.serviceImage} />
      <div className={styles.serviceTitleContainer}>
        <h2 className={styles.serviceCardHeading}>{title}</h2>
      </div>
      <p>{description}</p>
    </Link>
  );
}
