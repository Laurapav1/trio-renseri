"use client";
import Link from "next/link";
import styles from "./services.module.css";

export default function Services() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Vores ydelser</h1>
      <p className={styles.intro}>
        Velkommen til Trio Renseri – din pålidelige partner til hverdagens
        tekstilbehov. Vi sørger for, at du altid kan føle dig godt tilpas i dit
        tøj, uanset om det er den daglige skjorte eller den særlige brudekjole.
        Lad os tage os af de små detaljer, så du kan fokusere på det, der
        betyder mest for dig.
      </p>
      <div className={styles.servicesGrid}>
        <ServiceCard
          title="Omforandring af tøj"
          description="Tilpasning og reparation af alle slags tøj for den perfekte pasform."
          link="/services/omforandring"
        />

        <ServiceCard
          title="Skjorteservice"
          description="Rens og strygning af skjorter, så de altid ser skarpe ud."
          link="/services/skjorteservice"
        />

        <ServiceCard
          title="Gardinservice"
          description="Vi renser dine gardiner og sørger for, at de forbliver friske og rene."
          link="/services/gardinservice"
        />

        <ServiceCard
          title="Tæpperens"
          description="Professionel rensning af tæpper, store som små."
          link="/services/taepperens"
        />

        <ServiceCard
          title="Tekstilrens"
          description="Vi tilbyder skånsom og effektiv rensning af alle tekstiler."
          link="/services/tekstilrens"
        />

        <ServiceCard
          title="Brudekjole rens"
          description="Specialrensning af brudekjoler, så de forbliver i perfekt stand."
          link="/services/brudekjolerens"
        />

        <ServiceCard
          title="Dåbskjole vask/rens"
          description="Vi tager os af dåbskjoler med ekstra omsorg og præcision."
          link="/services/daabskjolevask"
        />

        <ServiceCard
          title="Vaske/Rulle service"
          description="Lad os tage hånd om dit vasketøj, så det altid er klar til brug."
          link="/services/vaskerulleservice"
        />
      </div>
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

function ServiceCard({ title, description, link }: ServiceCardProps) {
  return (
    <Link href={link} className={styles.serviceLink}>
      <div className={styles.serviceCard}>
        {" "}
        <h2 className={styles.serviceCardHeading}>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
}
