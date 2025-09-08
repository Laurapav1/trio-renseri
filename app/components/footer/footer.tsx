import { SocialIcon } from "react-social-icons";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>Kontakt Os</h4>
          <ul>
            <li>Trio Renseriet</li>
            <li>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/GSzww1hdHhaeqpZJ7"
              >
                L. A. Ringsvej 19, Højbjerg, Denmark
              </a>
            </li>
            <li>
              <a href="mailto: andriustrio@hotmail.com">
                andriustrio@hotmail.com
              </a>
            </li>
            <li>
              <a href="tel:+4586270956">+45 86 27 09 56</a>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Åbningstider</h4>
          <ul className={styles.hoursContainer}>
            <li className={styles.openingHours}>
              <span className={styles.day}>Mandag-fredag:</span>
              <span className={styles.time}>08:30 - 17:30</span>
            </li>
            <li className={styles.openingHours}>
              <span className={styles.day}>Lørdag:</span>
              <span className={styles.time}>10:00 - 13:00</span>
            </li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Følg Os</h4>
          <ul>
            <li>
              <SocialIcon
                className={styles.socialIcon}
                target="_blank"
                url="https://facebook.com/TrioRenseri"
              />
              <SocialIcon
                className={styles.socialIcon}
                target="_blank"
                url="https://instagram.com/triorenseri"
              />
            </li>
          </ul>
        </div>
      </div>
      <p className={styles.footerBottomText}>
        © {new Date().getFullYear()} Trio Renseri. Alle rettigheder forbeholdes.
      </p>
    </footer>
  );
}
