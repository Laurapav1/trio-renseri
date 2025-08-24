"use client";

import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isSkraedderDropdownOpen, setIsSkraedderDropdownOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsServicesDropdownOpen(false);
      setIsSkraedderDropdownOpen(false);
    }
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsServicesDropdownOpen(false);
    setIsSkraedderDropdownOpen(false);
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setIsServicesDropdownOpen(false);
        setIsSkraedderDropdownOpen(false);
      }
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className={styles.navbar} aria-label="Primary">
      <a
        href="/"
        className={styles.navbarLogoLink}
        aria-label="Trio Renseri - Forside"
      >
        <img
          className={styles.logo}
          src="/images/logo.svg"
          alt="Trio Renseri"
        />
      </a>

      <button
        className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        aria-controls="primary-nav"
        type="button"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>

      <div className={styles.navbarContainer}>
        <ul
          id="primary-nav"
          className={`${styles.navbarList} ${isOpen ? styles.active : ""}`}
          role="menubar"
        >
          <li className={styles.navbarItem} role="none">
            <Link href="/" onClick={handleLinkClick} role="menuitem">
              <span>Forside</span>
            </Link>
          </li>

          {/* Services */}
          <li
            className={`${styles.navbarItem} ${styles.hasDropdown} ${
              isOpen && isServicesDropdownOpen ? styles.expanded : ""
            }`}
            role="none"
            onMouseEnter={() => !isOpen && setIsServicesDropdownOpen(true)}
            onMouseLeave={() => !isOpen && setIsServicesDropdownOpen(false)}
          >
            <Link
              href="/services"
              role="menuitem"
              aria-haspopup="true"
              aria-expanded={isOpen ? isServicesDropdownOpen : undefined}
              onClick={(e) => {
                if (isOpen) {
                  e.preventDefault();
                  setIsServicesDropdownOpen((p) => !p);
                } else {
                  handleLinkClick();
                }
              }}
            >
              <span>Services</span>
            </Link>

            <ul
              className={`${styles.dropdownMenu} ${
                isOpen && isServicesDropdownOpen ? styles.open : ""
              }`}
              role="menu"
            >
              <li className={styles.dropdownItem} role="none">
                <Link
                  href="/services"
                  onClick={handleLinkClick}
                  role="menuitem"
                >
                  Services
                </Link>
              </li>
              <li className={styles.dropdownItem} role="none">
                <Link
                  href="/services/tekstilrens"
                  onClick={handleLinkClick}
                  role="menuitem"
                >
                  Tekstil Service
                </Link>
              </li>
              <li className={styles.dropdownItem} role="none">
                <Link
                  href="/services/skjorteservice"
                  onClick={handleLinkClick}
                  role="menuitem"
                >
                  Skjorteservice
                </Link>
              </li>
              <li className={styles.dropdownItem} role="none">
                <Link
                  href="/services/brudekjolerens"
                  onClick={handleLinkClick}
                  role="menuitem"
                >
                  Brudetøj
                </Link>
              </li>
              <li className={styles.dropdownItem} role="none">
                <Link
                  href="/services/dynevask"
                  onClick={handleLinkClick}
                  role="menuitem"
                >
                  Dyne/Puder
                </Link>
              </li>
              <li className={styles.dropdownItem} role="none">
                <Link
                  href="/services/vaskerulleservice"
                  onClick={handleLinkClick}
                  role="menuitem"
                >
                  Vask af Duge
                </Link>
              </li>
              <li className={styles.dropdownItem} role="none">
                <Link
                  href="/services/gardinservice"
                  onClick={handleLinkClick}
                  role="menuitem"
                >
                  Gardiner
                </Link>
              </li>
              <li className={styles.dropdownItem} role="none">
                <Link
                  href="/services/taepperens"
                  onClick={handleLinkClick}
                  role="menuitem"
                >
                  Tæpper
                </Link>
              </li>
              <li className={styles.dropdownItem} role="none">
                <Link
                  href="/services/madrasbetraek"
                  onClick={handleLinkClick}
                  role="menuitem"
                >
                  Madrasbetræk
                </Link>
              </li>
              <li className={styles.dropdownItem} role="none">
                <Link
                  href="/services/mobelbetraak"
                  onClick={handleLinkClick}
                  role="menuitem"
                >
                  Møbelbetræk
                </Link>
              </li>
              <li className={styles.dropdownItem} role="none">
                <Link
                  href="/services/udlejning"
                  onClick={handleLinkClick}
                  role="menuitem"
                >
                  Udlejning af maskine
                </Link>
              </li>
              <li className={styles.dropdownItem} role="none">
                <Link
                  href="/services/baadkalache"
                  onClick={handleLinkClick}
                  role="menuitem"
                >
                  Bådkalache
                </Link>
              </li>
            </ul>
          </li>

          {/* Skrædder */}
          <li
            className={`${styles.navbarItem} ${styles.hasDropdown} ${
              isOpen && isSkraedderDropdownOpen ? styles.expanded : ""
            }`}
            role="none"
            onMouseEnter={() => !isOpen && setIsSkraedderDropdownOpen(true)}
            onMouseLeave={() => !isOpen && setIsSkraedderDropdownOpen(false)}
          >
            <Link
              href="/skraedder"
              role="menuitem"
              aria-haspopup="true"
              aria-expanded={isOpen ? isSkraedderDropdownOpen : undefined}
              onClick={(e) => {
                if (isOpen) {
                  e.preventDefault();
                  setIsSkraedderDropdownOpen((p) => !p);
                } else {
                  handleLinkClick();
                }
              }}
            >
              <span>Skrædder</span>
            </Link>

            <ul
              className={`${styles.dropdownMenu} ${
                isOpen && isSkraedderDropdownOpen ? styles.open : ""
              }`}
              role="menu"
            >
              <li className={styles.dropdownItem} role="none">
                <Link
                  href="/skraedder"
                  onClick={handleLinkClick}
                  role="menuitem"
                >
                  Skrædder
                </Link>
              </li>
              <li className={styles.dropdownItem} role="none">
                <Link
                  href="/skraedder/priser"
                  onClick={handleLinkClick}
                  role="menuitem"
                >
                  Priser
                </Link>
              </li>
            </ul>
          </li>

          <li className={styles.navbarItem} role="none">
            <Link href="/priser" onClick={handleLinkClick} role="menuitem">
              <span>Priser</span>
            </Link>
          </li>
          <li className={styles.navbarItem} role="none">
            <Link href="/kunderabat" onClick={handleLinkClick} role="menuitem">
              <span>Rabatter</span>
            </Link>
          </li>
          <li className={styles.navbarItem} role="none">
            <Link href="/kontakt" onClick={handleLinkClick} role="menuitem">
              <span>Kontakt</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
