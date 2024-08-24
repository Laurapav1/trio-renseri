import "./globals.css";
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
        <nav className="navbar">
          <img
            className="logo"
            src="https://scontent-cph2-1.xx.fbcdn.net/v/t39.30808-6/305667099_463962259077392_3529188224974767746_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=-goarPXqciAQ7kNvgFdeue6&_nc_ht=scontent-cph2-1.xx&oh=00_AYB_EwPPBsAU2UmvnHmcsw8yl5siu5xwszKywRM_mRA-wg&oe=66C61F03"
            alt="Trio Renseri"
          />
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link href="/" passHref>
                Forside
              </Link>
            </li>
            <li className="navbar-item">
              <Link href="/services" passHref>
                Services
              </Link>
            </li>
            <li className="navbar-item">
              <Link href="/priser" passHref>
                Priser
              </Link>
            </li>
            <li className="navbar-item">
              <Link href="/kontakt" passHref>
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
        {children}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Kontakt Os</h4>
              <ul>
                <li>Trio Renseri</li>
                <li>
                  <a target="_blank" href="https://maps.app.goo.gl/GSzww1hdHhaeqpZJ7">
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
            <div className="footer-section">
              <h4>Åbningstider</h4>
              <ul>
                <li>
                  Mandag-fredag: 08:30 - 17:30<br />
                  Lørdag: 10:00 - 13:00
                </li>
                <li>
                  <Link href="/terms" passHref>
                    Vilkår og Betingelser
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Følg Os</h4>
              <ul>
                <li>
                  <SocialIcon
                    target="_blank"
                    url="https://facebook.com/TrioRenseri"
                  />
                  <SocialIcon
                    target="_blank"
                    url="https://instagram.com/triorenseri"
                  />
                </li>
              </ul>
            </div>
          </div>
          <p className="footer-bottom-text">
            © {new Date().getFullYear()} Trio Renseri. Alle rettigheder
            forbeholdes.
          </p>
        </footer>
      </body>
    </html>
  );
}
