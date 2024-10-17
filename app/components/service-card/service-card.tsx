import Link from "next/link";
import styles from "./service-card.module.css";

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  imgURL: string;
}

export default function ServiceCard({
  title,
  description,
  link,
  imgURL,
}: ServiceCardProps) {
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
