"use client";

import styles from "./kontakt.module.css";

export default function Kontakt() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>KONTAKT OS</h1>
      <div className={styles.formContainer}>
        <div className={styles.formSection}>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              name="name"
              placeholder="Navn"
              className={styles.input}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Telefon"
              className={styles.input}
              required
            />
            <select name="interest" className={styles.input} required>
              <option value="">Vælg en interesse</option>
              <option value="tøj">Tøj</option>
              <option value="dyner">Dyner</option>
              <option value="selskabskjoler">Selskabskjoler</option>
            </select>
            <textarea
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
          <p>
            <strong>Trio Renseri</strong>
            <br />
            <br />
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
  );
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Form submission logic here
  alert("Form submitted!");
};
