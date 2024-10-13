"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev); // Improved readability
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked (mobile)
  };

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.navbarLogoLink}>
        <img
          className={styles.logo}
          src="/images/logo.svg"
          alt="Trio Renseri"
        />
      </a>

      {/* Hamburger Menu */}
      <div
        className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navbar Links */}
      <ul className={`${styles.navbarList} ${isOpen ? styles.active : ""}`}>
        <li className={styles.navbarItem}>
          <Link href="/" onClick={handleLinkClick}>
            Forside
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/services" onClick={handleLinkClick}>
            Services
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/priser" onClick={handleLinkClick}>
            Priser
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/firm" onClick={handleLinkClick}>
            KundeRabat
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/kontakt" onClick={handleLinkClick}>
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
}
