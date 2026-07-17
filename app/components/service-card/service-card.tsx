import Link from "next/link";
import ResponsiveImage from "../responsive-image/responsive-image";
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
      <ResponsiveImage
        src={imgURL}
        alt={title}
        width={640}
        height={480}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={styles.serviceImage}
      />
      <div className={styles.serviceTitleContainer}>
        <h2 className={styles.serviceCardHeading}>{title}</h2>
      </div>
      <p>{description}</p>
    </Link>
  );
}
