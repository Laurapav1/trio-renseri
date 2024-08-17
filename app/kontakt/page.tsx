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
    </div>
  );
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // Form submission logic here
  alert("Form submitted!");
};
