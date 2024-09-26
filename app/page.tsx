// page.tsx

"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import styles from "./page.module.css";

import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.contents}></div>
        <video
          src="/videos/hero.mp4"
          autoPlay
          muted
          loop
          className={styles.video}
        />
      </section>

      {/* Process Section */}
      <section className={styles.processSection}>
        <div className={styles.gridContainer}>
          {/* Billedet til venstre */}
          <div className={styles.imageWrapper}>
            <img src="/images/profil.jpg" alt="Laundry Process" />
          </div>

          {/* Teksten til højre */}
          <div className={styles.textWrapper}>
            <h2>Velkommen til Trio renseri</h2>
            <p>
              Vi er et professionelt erhvervsrenseri, der blev grundlagt i 1954
              og har mere end 26 års erfaring. Vores kunder er og har altid
              været den private forbruger eller den gode virksomhed, som vi
              igennem tiden har serviceret med diverse vaske- og renseriydelser.
            </p>
            <p>
              Igennem årene er der sket en voldsom udvikling på både tekstiler,
              former og farver, – men tiden har heller ikke stået stille hos os.
            </p>
          </div>
        </div>
      </section>

      {/* New Section with Steps */}
      <section className={styles.stepsSection}>
        <h2>Sådan fungerer det </h2>
        <div className={styles.stepsWrapper}>
          {/* Step 1 */}
          <div className={styles.step}>
            <div className={styles.icon}>
              <img src="/images/schedule.png" alt="Schedule Pickup" />
            </div>
            <h3>1. Aflever dit tøj</h3>
            <p>
              Kom forbi vores butik med dit tøj, som skal renses eller vaskes.
              Vi tager imod det og giver dig et nummer.
            </p>
          </div>

          {/* Step 2 */}
          <div className={styles.step}>
            <div className={styles.icon}>
              <img src="/images/laundryService.png" alt="Prepare Items" />
            </div>
            <h3>2. Vi renser og vasker</h3>
            <p>
              Dit tøj bliver behandlet med den største omhu af vores erfarne
              team. Vi sørger for, at det bliver rent og friskt.
            </p>
          </div>

          {/* Step 3 */}
          <div className={styles.step}>
            <div className={styles.icon}>
              <img src="/images/enjoy.png" alt="Enjoy Your Day" />
            </div>
            <h3>3. Hent dit tøj</h3>
            <p>
              Når dit tøj er klart, kan du komme og hente det. Brug det nummer,
              du har fået, når du afleverede tøjet.
            </p>
          </div>
        </div>
        <Link href={"/priser"} className={styles.ctaButton}>
          Se Priser
        </Link>
      </section>

      <section className={styles.serviceSection}>
        <div className={styles.serviceBanner}>
          <h1>Vi udfører</h1>
        </div>
        {/* Swiper Component */}
        <Swiper
          className={styles.mySwiper}
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className={styles.gridService}>
              <div className={styles.swiperslidecontent}>
                <img src="/images/skjorte.jpg" alt="Image 1" />
              </div>
              <div className={styles.textcontent}>
                <div className={styles.iconTitle }>
                  <img className={styles.icon}
                    src="/images/shirt-icon.webp"
                    alt="Icon"
                  />
                  <h2>Skjorte Service</h2>
                </div>
                <hr className={styles.divider} />
                <p>✓ On-demand pickup and drop-off on your schedule</p>
                <p>✓ Online order tracking and update notifications</p>
                <p>✓ Regular pickup reminders at your request</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Add more slides as needed */}

          {/* Slide 2 */}
          <SwiperSlide>
            <div className={styles.gridService}>
              <div className={styles.swiperslidecontent}>
                <img src="/images/before-pants.jpg" alt="Image 2" />
              </div>
              <div className={styles.textcontent}>
                <h2>Gardin</h2>
                <p>✓ Example point 1</p>
                <p>✓ Example point 2</p>
                <p>✓ Regular pickup reminders at your request</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </main>
  );
}
