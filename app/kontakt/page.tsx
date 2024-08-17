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
          <p>michelle@signaturerealtynj.com</p>
          <p>(908) 686-1200</p>
          <p>
            <strong>Westfield</strong>
            <br />
            233 North Avenue E.
            <br />
            Westfield, NJ 07090
          </p>
          <p>
            <strong>Summit</strong>
            <br />
            357 Springfield Ave.
            <br />
            Short Hills, NJ 07901
          </p>
          <p>
            <strong>Short Hills Office</strong>
            <br />
            549 Millburn Ave.
            <br />
            Short Hills, NJ 07078
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
