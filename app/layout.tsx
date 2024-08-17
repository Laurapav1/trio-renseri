import "./globals.css";
import Link from "next/link";

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
      </body>
    </html>
  );
}
