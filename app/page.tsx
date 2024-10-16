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
import Navbar from "./components/navbar/navbar";
import HomeHeroSection from "./components/hero-section/home-hero-section";

export default function Home() {
  return (
    <>
      {/* Wrapper to make Navbar and HeroSection fill 100vh */}
      <div className={styles.heroWrapper}>
        <Navbar />
        <HomeHeroSection />
      </div>
      <main>
        {/* Intro Section */}
        <section className={styles.textWrapper}>
          <h2>Professionelt Renseri Siden 1954</h2>
          <p>
            Hos Trio Renseri tilbyder vi førsteklasses renseri- og
            tøjplejeservices til både private og virksomheder. Med over 26 års
            erfaring sikrer vi, at dit tøj får den omsorg og opmærksomhed, det
            fortjener. Fra sarte stoffer til hverdagstøj garanterer vi pletfri
            resultater hver gang.
          </p>
        </section>

        {/* About Us Section */}
        <section className={styles.aboutUs}>
          <img src="/images/profil.jpg" alt="Why Choose Us" />
          <div>
            <h2>Velkommen til Trio Renseri</h2>
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
            <h2>Hvorfor Vælge Trio Renseri?</h2>
            <ul>
              <li>Miljøvenlige renserimetoder</li>
              <li>Over 26 års erfaring</li>
              <li>Hurtig og pålidelig service</li>
              <li>Ekspertpleje af sarte stoffer</li>
            </ul>
          </div>
        </section>

        {/* Steps Section */}
        <section className={styles.stepsSection}>
          <h2>Sådan fungerer det</h2>
          <div className={styles.stepsWrapper}>
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
            <div className={styles.step}>
              <div className={styles.icon}>
                <img src="/images/enjoy.png" alt="Enjoy Your Day" />
              </div>
              <h3>3. Hent dit tøj</h3>
              <p>
                Når dit tøj er klart, kan du komme og hente det. Brug det
                nummer, du har fået, når du afleverede tøjet.
              </p>
            </div>
          </div>
          <Link href={"/priser"} className={styles.ctaButton}>
            Se Priser
          </Link>
        </section>

        {/* Service Section with Swiper */}
        <section className={styles.serviceSection}>
          <div className={styles.serviceBanner}>
            <h1>Vi udfører</h1>
          </div>
          <Swiper
            className={styles.mySwiper}
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            navigation={true}
            pagination={{ clickable: true }}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
          >
            <SwiperSlide>
              <div className={styles.gridService}>
                <img src="/images/sew.jpg" alt="Omforandring af tøj" />
                <div className={styles.textcontent}>
                  <h2>Omforandring af tøj</h2>
                  <p>✓ Vi behandler dine skjorter med ekspertise og omhu.</p>
                  <Link
                    href={"/services/skjorteservice"}
                    className={styles.ctaButtonService}
                  >
                    Se skjorte service
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.gridService}>
                <img src="/images/skjorte.jpg" alt="Skjorte service" />
                <div className={styles.textcontent}>
                  <h2>Skjorte Service</h2>
                  <p>✓ Vi behandler dine skjorter med ekspertise og omhu.</p>
                  <Link
                    href={"/services/skjorteservice"}
                    className={styles.ctaButtonService}
                  >
                    Se skjorte service
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Additional Swiper Slides */}
          </Swiper>
        </section>
      </main>
    </>
  );
}
