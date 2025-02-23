"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isSkraedderDropdownOpen, setIsSkraedderDropdownOpen] = useState(false);

  const toggleMenu = () => {
    // When closing the mobile menu, also close the dropdown
    if (isOpen) {
      setIsServicesDropdownOpen(false);
    }
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close mobile menu on link click
    setIsServicesDropdownOpen(false);
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

      {/* Hamburger Menu (Mobile Toggle) */}
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

          {/* Services with Submenu */}
          <li
            className={styles.navbarItem}
            // On desktop, show submenu on hover
            onMouseEnter={() => {
              if (!isOpen) setIsServicesDropdownOpen(true);
            }}
            onMouseLeave={() => {
              if (!isOpen) setIsServicesDropdownOpen(false);
            }}
          >
            <Link
              href="/services"
              onClick={(e) => {
                if (isOpen) {
                  // On mobile: prevent immediate navigation, expand/collapse submenu
                  e.preventDefault();
                  setIsServicesDropdownOpen((prev) => !prev);
                } else {
                  // On desktop: navigate normally and close menus
                  handleLinkClick();
                }
              }}
            >
              <span>Services</span>
            </Link>

            {/* Only render the submenu if it's open */}
            {isServicesDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li className={styles.dropdownItem}>
                  <Link href="/services/tekstilrens" onClick={handleLinkClick}>
                    Tekstil Service
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link
                    href="/services/skjorteservice"
                    onClick={handleLinkClick}
                  >
                    Skjorteservice
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link
                    href="/services/brudekjolerens"
                    onClick={handleLinkClick}
                  >
                    Brudetøj
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/services/dynevask" onClick={handleLinkClick}>
                    Dyne/Puder
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link
                    href="/services/vaskerulleservice"
                    onClick={handleLinkClick}
                  >
                    Vask af Duge
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link
                    href="/services/gardinservice"
                    onClick={handleLinkClick}
                  >
                    Gardiner
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/services/taepperens" onClick={handleLinkClick}>
                    Tæpper
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link
                    href="/services/madrasbetraek"
                    onClick={handleLinkClick}
                  >
                    Madrasbetræk
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/services/mobelbetraak" onClick={handleLinkClick}>
                    Møbelbetræk
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/services/udlejning" onClick={handleLinkClick}>
                    Udlejning af maskine
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/services/baadkalache" onClick={handleLinkClick}>
                    Bådkalache
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Services with Submenu */}
          <li
            className={styles.navbarItem}
            // On desktop, show submenu on hover
            onMouseEnter={() => {
              if (!isOpen) setIsSkraedderDropdownOpen(true);
            }}
            onMouseLeave={() => {
              if (!isOpen) setIsSkraedderDropdownOpen(false);
            }}
          >
            <Link
              href="/skraedder"
              onClick={(e) => {
                if (isOpen) {
                  // On mobile: prevent immediate navigation, expand/collapse submenu
                  e.preventDefault();
                  setIsSkraedderDropdownOpen((prev) => !prev);
                } else {
                  // On desktop: navigate normally and close menus
                  handleLinkClick();
                }
              }}
            >
              <span>Skrædder</span>
            </Link>

            {/* Only render the submenu if it's open */}
            {isSkraedderDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li className={styles.dropdownItem}>
                  <Link href="/services/tekstilrens" onClick={handleLinkClick}>
                    Tekstil Service
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className={styles.navbarItem}>
            <Link href="/priser" onClick={handleLinkClick}>
              <span>Priser</span>
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/kunderabat" onClick={handleLinkClick}>
              <span>Rabatter</span>
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
