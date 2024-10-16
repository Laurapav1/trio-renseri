"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close menu on link click (mobile)
  };

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.navbarLogoLink}>
        <Image
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
      <div className={styles.navbarContainer}>
        <ul className={`${styles.navbarList} ${isOpen ? styles.active : ""}`}>
          <li className={styles.navbarItem}>
            <Link href="/" onClick={handleLinkClick}>
              <span>Forside</span>
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/services" onClick={handleLinkClick}>
              <span>Services</span>
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/priser" onClick={handleLinkClick}>
              <span>Priser</span>
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/firm" onClick={handleLinkClick}>
              <span>KundeRabat</span>
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/kontakt" onClick={handleLinkClick}>
              <span>Kontakt</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
