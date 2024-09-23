import "./css/globals.css";
import navbarStyles from "./css/navbar.module.css";
import footerStyles from "./css/footer.module.css";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <nav className={navbarStyles.navbar}>
      <img
        className={navbarStyles.logo}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5AOrjhSd_rGMZ5POpNIqudoz7z9sjFis77Q&s"
        alt="Trio Renseri"
      />
      <ul className={navbarStyles.navbarList}>
        <li className={navbarStyles.navbarItem}>
          <Link href="/" passHref>
            Forside
          </Link>
        </li>
        <li className={navbarStyles.navbarItem}>
          <Link href="/services" passHref>
            Services
          </Link>
        </li>
        <li className={navbarStyles.navbarItem}>
          <Link href="/priser" passHref>
            Priser
          </Link>
        </li>

        <li className={navbarStyles.navbarItem}>
          <Link href="/kontakt" passHref>
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerContent}>
        <div className={footerStyles.footerSection}>
          <h4>Kontakt Os</h4>
          <ul>
            <li>Trio Renseri</li>
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
        <div className={footerStyles.footerSection}>
          <h4>Åbningstider</h4>
          <ul className={footerStyles.hoursContainer}>
            <li className={footerStyles.openingHours}>
              <span className={footerStyles.day}>Mandag-fredag:</span>
              <span className={footerStyles.time}>08:30 - 17:30</span>
            </li>
            <li className={footerStyles.openingHours}>
              <span className={footerStyles.day}>Lørdag:</span>
              <span className={footerStyles.time}>10:00 - 13:00</span>
            </li>
          </ul>
        </div>
        <div className={footerStyles.footerSection}>
          <h4>Følg Os</h4>
          <ul>
            <li>
              <SocialIcon
                className={footerStyles.socialIcon}
                target="_blank"
                url="https://facebook.com/TrioRenseri"
              />
              <SocialIcon
                className={footerStyles.socialIcon}
                target="_blank"
                url="https://instagram.com/triorenseri"
              />
            </li>
          </ul>
        </div>
      </div>
      <p className={footerStyles.footerBottomText}>
        © {new Date().getFullYear()} Trio Renseri. Alle rettigheder forbeholdes.
      </p>
    </footer>
  );
}
