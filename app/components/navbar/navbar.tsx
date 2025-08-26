"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

type Panel = "services" | "skraedder" | null;

const HIDE_ON_SCROLL = true; // flip to false if you ever want sticky-only
const HIDE_DELTA = 12; // how many px of scroll before toggling
const HIDE_MIN_TOP = 24; // never hide when near very top

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState<Panel>(null);
  const [navHidden, setNavHidden] = useState(false);
  const [navElevated, setNavElevated] = useState(false); // adds shadow when scrolled
  const navRef = useRef<HTMLElement | null>(null);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => {
      const next = !prev;
      if (!next) setOpenPanel(null);
      return next;
    });
  };

  const togglePanel = (id: Exclude<Panel, null>) => {
    setOpenPanel((prev) => (prev === id ? null : id));
  };

  const closeAll = () => {
    setDrawerOpen(false);
    setOpenPanel(null);
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setDrawerOpen(false);
        setOpenPanel(null);
        document.body.style.overflow = "";
      }
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock background scroll while drawer is open (drawer itself scrolls)
  useEffect(() => {
    const orig = document.body.style.overflow;
    document.body.style.overflow = drawerOpen ? "hidden" : orig || "";
    if (drawerOpen) setNavHidden(false); // always show header when drawer opens
    return () => {
      document.body.style.overflow = orig || "";
    };
  }, [drawerOpen]);

  // Measure navbar height -> CSS var --nav-h (used by the drawer top offset)
  useLayoutEffect(() => {
    if (!navRef.current) return;
    const el = navRef.current;
    const setVar = () => {
      const h = `${el.offsetHeight}px`;
      el.style.setProperty("--nav-h", h); // for navbar CSS
      document.documentElement.style.setProperty("--nav-h", h); // for page CSS
    };
    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Sticky + hide-on-scroll
  useEffect(() => {
    if (!HIDE_ON_SCROLL) return;

    let lastY = 0;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = Math.max(0, window.scrollY || window.pageYOffset || 0);
        const delta = y - lastY;

        // Add subtle shadow when scrolled
        setNavElevated(y > 2);

        if (!drawerOpen) {
          if (y > HIDE_MIN_TOP && delta > HIDE_DELTA) {
            setNavHidden(true); // scrolling down
          } else if (delta < -HIDE_DELTA) {
            setNavHidden(false); // scrolling up
          }
        } else {
          setNavHidden(false); // menu open => always visible
        }

        lastY = y;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [drawerOpen]);

  const onParentClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: Exclude<Panel, null>
  ) => {
    if (drawerOpen) {
      e.preventDefault();
      togglePanel(id);
    }
  };

  return (
    <>
      <nav
        ref={navRef}
        className={[
          styles.navbar,
          styles.navbarSticky, // position: sticky; top: 0
          navHidden ? styles.navHidden : "",
          navElevated ? styles.navElevated : "",
        ].join(" ")}
        aria-label="Hovednavigation"
      >
        <a
          href="/"
          className={styles.navbarLogoLink}
          aria-label="Trio Renseri - Forside"
          onClick={closeAll}
        >
          <img
            className={styles.logo}
            src="/images/logo.svg"
            alt="Trio Renseri"
          />
        </a>

        <button
          type="button"
          className={`${styles.hamburger} ${drawerOpen ? styles.active : ""}`}
          aria-label="Åbn/luk menu"
          aria-expanded={drawerOpen}
          aria-controls="primary-nav"
          onClick={toggleDrawer}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        <div className={styles.navbarContainer}>
          <ul
            id="primary-nav"
            className={`${styles.navbarList} ${
              drawerOpen ? styles.active : ""
            }`}
          >
            <li className={styles.navbarItem}>
              <Link href="/" onClick={closeAll}>
                <span>Forside</span>
              </Link>
            </li>

            {/* SERVICES */}
            <li
              className={`${styles.navbarItem} ${styles.hasDropdown} ${
                drawerOpen && openPanel === "services" ? styles.expanded : ""
              }`}
              onMouseEnter={() =>
                window.innerWidth >= 1024 && setOpenPanel("services")
              }
              onMouseLeave={() =>
                window.innerWidth >= 1024 && setOpenPanel(null)
              }
            >
              <Link
                href="/services"
                className={styles.parentTrigger}
                aria-expanded={drawerOpen && openPanel === "services"}
                aria-controls="submenu-services"
                onClick={(e) => onParentClick(e, "services")}
              >
                <span>Services</span>
                <i className={styles.chevron} aria-hidden />
              </Link>

              <ul
                id="submenu-services"
                className={`${styles.dropdownMenu} ${
                  drawerOpen && openPanel === "services" ? styles.open : ""
                }`}
              >
                <li className={`${styles.dropdownItem} ${styles.groupHeader}`}>
                  <Link href="/services" onClick={closeAll}>
                    Se alle services
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/services/tekstilrens" onClick={closeAll}>
                    Tekstil service
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/services/skjorteservice" onClick={closeAll}>
                    Skjorteservice
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/services/brudekjolerens" onClick={closeAll}>
                    Brudetøj
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/services/dynevask" onClick={closeAll}>
                    Dyner & puder
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/services/vaskerulleservice" onClick={closeAll}>
                    Vask af duge
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/services/gardinservice" onClick={closeAll}>
                    Gardiner
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/services/taepperens" onClick={closeAll}>
                    Tæpper
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/services/madrasser" onClick={closeAll}>
                    Madrasser
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/services/mobelbetraak" onClick={closeAll}>
                    Møbelbetræk
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/services/udlejning" onClick={closeAll}>
                    Udlejning af møbel- og tæpperensmaskine
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/services/baadkalache" onClick={closeAll}>
                    Bådkaleche
                  </Link>
                </li>
              </ul>
            </li>

            {/* SKRÆDDER */}
            <li
              className={`${styles.navbarItem} ${styles.hasDropdown} ${
                drawerOpen && openPanel === "skraedder" ? styles.expanded : ""
              }`}
              onMouseEnter={() =>
                window.innerWidth >= 1024 && setOpenPanel("skraedder")
              }
              onMouseLeave={() =>
                window.innerWidth >= 1024 && setOpenPanel(null)
              }
            >
              <Link
                href="/skraedder"
                className={styles.parentTrigger}
                aria-expanded={drawerOpen && openPanel === "skraedder"}
                aria-controls="submenu-skraedder"
                onClick={(e) => onParentClick(e, "skraedder")}
              >
                <span>Skrædder</span>
                <i className={styles.chevron} aria-hidden />
              </Link>

              <ul
                id="submenu-skraedder"
                className={`${styles.dropdownMenu} ${
                  drawerOpen && openPanel === "skraedder" ? styles.open : ""
                }`}
              >
                <li className={`${styles.dropdownItem} ${styles.groupHeader}`}>
                  <Link href="/skraedder" onClick={closeAll}>
                    Om skrædderiet
                  </Link>
                </li>
                <li className={styles.dropdownItem}>
                  <Link href="/skraedder/priser" onClick={closeAll}>
                    Priser
                  </Link>
                </li>
              </ul>
            </li>

            <li className={styles.navbarItem}>
              <Link href="/priser" onClick={closeAll}>
                <span>Priser</span>
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link href="/kunderabat" onClick={closeAll}>
                <span>Rabatter</span>
              </Link>
            </li>
            <li className={styles.navbarItem}>
              <Link href="/kontakt" onClick={closeAll}>
                <span>Kontakt</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Scrim */}
      <div
        className={`${styles.scrim} ${drawerOpen ? styles.scrimVisible : ""}`}
        onClick={toggleDrawer}
        aria-hidden="true"
      />
    </>
  );
}
