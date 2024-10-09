"use client";
import Link from "next/link";
import styles from "./services.module.css";
import HeroSection from "../components/hero-section";

export default function Services() {
  return (
    <>
      <HeroSection text="Vores ydelser" img="/images/hero-section-image.jpg" />
      <div className={styles.container}>
        <p className={styles.intro}>
          Velkommen til Trio Renseri – din pålidelige partner til hverdagens
          tekstilbehov. Vi sørger for, at du altid kan føle dig godt tilpas i
          dit tøj, uanset om det er den daglige skjorte eller den særlige
          brudekjole. Lad os tage os af de små detaljer, så du kan fokusere på
          det, der betyder mest for dig.
        </p>
        <div className={styles.servicesGrid}>
          <ServiceCard
            title="Omforandring af tøj"
            description="Vores professionelle skræddere tilbyder tilpasning og reparation af alle typer tøj for at sikre den perfekte pasform. Uanset om du har brug for at forkorte bukser, tilpasse en jakke eller reparere slidte områder, så sørger vi for, at dit tøj sidder lige som ønsket. Lad os hjælpe dig med at give dit yndlingstøj nyt liv og forbedre komforten og stilen, så det passer perfekt til dig."
            link="/services/omforandring"
            imgURL="images/sew.jpg"
          />

          <ServiceCard
            title="Skjorteservice"
            description="Vores skjorteservice tilbyder grundig rensning og professionel strygning af dine skjorter, så de altid fremstår skarpe og velplejede. Vi sørger for, at hver eneste skjorte behandles med omhu og respekt for stoffets kvalitet. Uanset om det er til hverdagsbrug eller en særlig anledning, kan du stole på, at dine skjorter ser ud som nye efter vores behandling"
            link="/services/skjorteservice"
            imgURL="images/skjorte.jpg"
          />

          <ServiceCard
            title="Gardinservice"
            description="Vi tilbyder en skånsom og effektiv gardinrensning, der fjerner støv, snavs og allergener, samtidig med at vi bevarer stoffets struktur og farver. Lad os tage hånd om dine gardiner og sikre, at de altid ser friske og velholdte ud. Vores professionelle behandling giver dine gardiner nyt liv og sørger for, at dit hjem føles rent og indbydende"
            link="/services/gardinservice"
            imgURL="images/curtain.jpg"
          />

          <ServiceCard
            title="Tæpperens"
            description="Vi tilbyder professionel rensning af tæpper i alle størrelser, fra små entrémåtter til store stuegulvtæpper. Vores skånsomme og effektive metoder sikrer, at dit tæppe får en grundig rengøring uden at beskadige fibrene. Lad os hjælpe dig med at bevare tæppets farver og blødhed, så det altid ser nyt og indbydende ud."
            link="/services/taepperens"
            imgURL="images/floorcarpet.jpg"
          />

          <ServiceCard
            title="Tekstilrens"
            description="Vi tilbyder en skånsom og effektiv rensning af alle typer tekstiler, lige fra sarte stoffer til robuste materialer. Vores tekstilrensning fjerner snavs og pletter, samtidig med at stoffets farve og struktur bevares. Stol på os til at give dine tekstiler en frisk start, uanset om det drejer sig om din yndlingssofa eller dine boligtekstiler."
            link="/services/tekstilrens"
            imgURL="images/tekstil.jpg"
          />

          <ServiceCard
            title="Vaske/Rulle service"
            description="Lad os tage hånd om dit vasketøj med vores omfattende vaske- og rulleservice. Vi vasker, tørrer og ruller dit tøj, så det altid er klart til brug. Vores professionelle behandling sikrer, at dit tøj bliver behandlet med den største omhu, og vi sørger for at opretholde tekstilernes kvalitet og friskhed."
            link="/services/vaskerulleservice"
            imgURL="images/table.jpg"
          />

          <ServiceCard
            title="Brudekjole rens"
            description="Specialrensning af brudekjoler er en af vores mest eksklusive services. Vi tager os af din brudekjole med den største omhu og præcision, så den forbliver i perfekt stand. Vores skånsomme behandling fjerner pletter og genopretter kjolens glans, så du kan gemme den som et smukt minde fra din store dag."
            link="/services/brudekjolerens"
            imgURL="images/bridedress.jpg"
          />

          <ServiceCard
            title="Dåbskjole vask/rens"
            description="Vi tilbyder vask og rens af dåbskjoler med ekstra omsorg og præcision. Vi forstår, at dåbskjolen er en vigtig del af en særlig begivenhed, og derfor behandler vi den med den største respekt. Vores service fjerner forsigtigt pletter og genopretter stoffets blødhed, så kjolen fremstår smuk og klar til brug."
            link="/services/daabskjolevask"
            imgURL="images/gowndress.png"
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
