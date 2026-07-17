"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./kontakt.module.css";
import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import PageHeroSection from "../components/hero-section/page-hero-section";
import Navbar from "../components/navbar/navbar";

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Form submission logic here
  alert("Form submitted!");
};

export default function Kontakt() {
  return (
    <>
      <Navbar />
      <PageHeroSection heading="KONTAKT OS" imagePath="/images/triofar.jpg" />
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <div className={styles.formSection}>
            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
              <div className={styles.inputContainer}>
                <FontAwesomeIcon icon={faUser} className={styles.icon} />
                <label className={styles.srOnly} htmlFor="contact-name">
                  Navn
                </label>
                <input
                  id="contact-name"
                  className={styles.input}
                  type="text"
                  name="name"
                  placeholder="Navn"
                  required
                />
              </div>
              <div className={styles.inputContainer}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                <label className={styles.srOnly} htmlFor="contact-email">
                  Email
                </label>
                <input
                  id="contact-email"
                  className={styles.input}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className={styles.inputContainer}>
                <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                <label className={styles.srOnly} htmlFor="contact-phone">
                  Telefon
                </label>
                <input
                  id="contact-phone"
                  className={styles.input}
                  type="tel"
                  name="phone"
                  placeholder="Telefon"
                  required
                />
              </div>
              <div className={styles.inputContainer}>
                <label className={styles.srOnly} htmlFor="contact-interest">
                  Hvad drejer din henvendelse sig om?
                </label>
                <select
                  id="contact-interest"
                  name="interest"
                  className={styles.input}
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Vælg en interesse
                  </option>
                  <option value="tekstilrens">Tekstilrens</option>
                  <option value="skjorteservice">Skjorteservice</option>
                  <option value="brudetøj">Brudetøj</option>
                  <option value="dyner og puder">Dyner/Puder</option>
                  <option value="vask af duge">Vask af duge</option>
                  <option value="gardinservice">Gardinservice</option>
                  <option value="tæpper">Tæpper</option>
                  <option value="møbelbetræk">Møbelbetræk</option>
                  <option value="udlejning af møbel- og tæpperensmaskine">
                    Udlejning af møbel- og tæpperensmaskine
                  </option>
                  <option value="baadkalache">Bådkaleche</option>
                  <option value="ordre">Ordre</option>
                  <option value="andet">Andet</option>
                </select>
              </div>
              <label className={styles.srOnly} htmlFor="contact-message">
                Besked
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Besked"
                className={styles.textarea}
                required
              ></textarea>
              <button type="submit" className={styles.button}>
                Send
              </button>
            </form>
          </div>
          <div className={styles.contactDetails}>
            <h3>Trio Renseriet</h3>
            <p>
              L. A. Rings Vej 19
              <br />
              8270, Højbjerg
              <br />
              tel.: +45 86 27 09 56
              <br />
              andriustrio@hotmail.com
            </p>
          </div>
        </div>
        <section className={styles.visitInfo}>
          <h2>Besøg renseriet i Højbjerg</h2>
          <p>
            Du finder Trio Renseriet på L. A. Rings Vej 19 i 8270 Højbjerg. Vi
            hjælper kunder fra Højbjerg, Aarhus, Viby, Skåde og de nærliggende
            områder med rens, vask, skrædderarbejde og tekstilpleje.
          </p>
          <p>
            Kig gerne forbi med tøjet, gardinerne, tæppet eller bådkalechen, så
            vurderer vi opgaven og taler om pris og leveringstid. Ved større
            opgaver er du velkommen til at ringe først, så vi kan rådgive om
            indlevering.
          </p>
          <div className={styles.infoGrid}>
            <div>
              <h3>Åbningstider</h3>
              <p>Mandag-fredag: 08:30-17:30</p>
              <p>Lørdag: 10:00-13:00</p>
            </div>
            <div>
              <h3>Anmeldelser</h3>
              <p>
                Læs eller skriv en anmeldelse via vores Google Maps-profil, så
                nye kunder kan se erfaringer fra andre i lokalområdet.
              </p>
              <a
                href="https://maps.app.goo.gl/GSzww1hdHhaeqpZJ7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Åbn Trio Renseriet på Google Maps
              </a>
            </div>
          </div>
        </section>
        <iframe
          className={styles.googleMaps}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2224.26985372913!2d10.196112012843631!3d56.11784987310981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c4042a68764c7%3A0x13b872a78fe0820f!2sTrio%20Renseri!5e0!3m2!1sda!2sus!4v1723929675858!5m2!1sda!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
