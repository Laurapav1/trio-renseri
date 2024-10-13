import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.navbarLogoLink}>
        <img
          className={styles.logo}
          src="/images/logo.svg"
          alt="Trio Renseri"
        />
      </a>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link href="/" passHref>
            Forside
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/services" passHref>
            Services
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/priser" passHref>
            Priser
          </Link>
        </li>

        <li className={styles.navbarItem}>
          <Link href="/firm" passHref>
            KundeRabat
          </Link>
        </li>

        <li className={styles.navbarItem}>
          <Link href="/kontakt" passHref>
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
