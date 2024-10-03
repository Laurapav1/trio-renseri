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
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Poppins"
          />
          <h1>Vi udfører</h1>
        </div>
        {/* Swiper Component */}
        <Swiper
          className={styles.mySwiper}
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          navigation={true}
          navigation-next-el=".custom-next-button"
          navigation-prev-el=".custom-prev-button"
          pagination={{ clickable: true }}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
        >
          {/* Slide 1: omforandrig af tøj */}
          <SwiperSlide>
            <div className={styles.gridService}>
              <div className={styles.swiperslidecontent}>
                <img src="/images/sew.jpg" alt="Image 1" />
              </div>
              <div className={styles.textcontent}>
                <div className={styles.iconTitle}>
                  <img
                    className={styles.serviceIcon}
                    src="/images/icons/sewing-machine.png"
                    alt="Icon"
                  />
                  <h2>Omforandring af tøj</h2>
                </div>
                <hr className={styles.divider} />
                <p>✓ Vi behandler dine skjorter med ekspertise og omhu.</p>
                <p>
                  ✓ Vores professionelle rensning sikrer en frisk og skarp
                  skjorte hver gang.
                </p>
                <p>
                  ✓ Garanteret kvalitet – vi inspicerer og stryger hver skjorte
                  til perfektion.
                </p>
                <Link
                  href={"/services/skjorteservice"}
                  className={styles.ctaButtonService}
                >
                  Se skjorte service
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2: Skjorte service*/}
          <SwiperSlide>
            <div className={styles.gridService}>
              <div className={styles.swiperslidecontent}>
                <img src="/images/skjorte.jpg" alt="Image 1" />
              </div>
              <div className={styles.textcontent}>
                <div className={styles.iconTitle}>
                  <img
                    className={styles.serviceIcon}
                    src="/images/shirt-icon.webp"
                    alt="Icon"
                  />
                  <h2>Skjorte Service</h2>
                </div>
                <hr className={styles.divider} />
                <p>✓ Vi behandler dine skjorter med ekspertise og omhu.</p>
                <p>
                  ✓ Vores professionelle rensning sikrer en frisk og skarp
                  skjorte hver gang.
                </p>
                <p>
                  ✓ Garanteret kvalitet – vi inspicerer og stryger hver skjorte
                  til perfektion.
                </p>
                <Link
                  href={"/services/skjorteservice"}
                  className={styles.ctaButtonService}
                >
                  Se skjorte service
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3: Gardin service*/}
          <SwiperSlide>
            <div className={styles.gridService}>
              <div className={styles.swiperslidecontent}>
                <img src="/images/curtain.jpg" alt="Gardinservice" />
              </div>
              <div className={styles.textcontent}>
                <div className={styles.iconTitle}>
                  <img
                    className={styles.serviceIcon}
                    src="/images/icons/curtain-icon.png"
                    alt="Icon"
                  />
                  <h2>Gardinservice</h2>
                </div>
                <hr className={styles.divider} />
                <p>
                  ✓ Vi renser dine gardiner og sørger for, at de forbliver
                  friske og rene.
                </p>
                <Link
                  href={"/services/gardinservice"}
                  className={styles.ctaButtonService}
                >
                  Se gardinservice
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4: Tæpperens */}
          <SwiperSlide>
            <div className={styles.gridService}>
              <div className={styles.swiperslidecontent}>
                <img src="/images/floorcarpet.jpg" alt="Tæpperens" />
              </div>
              <div className={styles.textcontent}>
                <div className={styles.iconTitle}>
                  <img
                    className={styles.serviceIcon}
                    src="/images/icons/carpet.png"
                    alt="Icon"
                  />
                  <h2>Tæpperens</h2>
                </div>
                <hr className={styles.divider} />
                <p>✓ Professionel rensning af tæpper, store som små.</p>
                <Link
                  href={"/services/taepperens"}
                  className={styles.ctaButtonService}
                >
                  Se tæpperens
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 5: Tekstilrens */}
          <SwiperSlide>
            <div className={styles.gridService}>
              <div className={styles.swiperslidecontent}>
                <img src="/images/tekstil.jpg" alt="Tekstilrens" />
              </div>
              <div className={styles.textcontent}>
                <div className={styles.iconTitle}>
                  <img
                    className={styles.serviceIcon}
                    src="/images/icons/laundry.png"
                    alt="Icon"
                  />
                  <h2>Tekstilrens</h2>
                </div>
                <hr className={styles.divider} />
                <p>
                  ✓ Vi tilbyder skånsom og effektiv rensning af alle tekstiler.
                </p>
                <Link
                  href={"/services/tekstilrens"}
                  className={styles.ctaButtonService}
                >
                  Se tekstilrens
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 6: Vaske/Rulle Service */}
          <SwiperSlide>
            <div className={styles.gridService}>
              <div className={styles.swiperslidecontent}>
                <img src="/images/vaske.jpg" alt="Vaske/Rulle Service" />
              </div>
              <div className={styles.textcontent}>
                <div className={styles.iconTitle}>
                  <img
                    className={styles.serviceIcon}
                    src="/images/wash-icon.webp"
                    alt="Icon"
                  />
                  <h2>Vaske/Rulle Service</h2>
                </div>
                <hr className={styles.divider} />
                <p>
                  ✓ Lad os tage hånd om dit vasketøj, så det altid er klar til
                  brug.
                </p>
                <Link
                  href={"/services/vaske"}
                  className={styles.ctaButtonService}
                >
                  Se vaske/rulle service
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 7: Brudekjole Rens */}
          <SwiperSlide>
            <div className={styles.gridService}>
              <div className={styles.swiperslidecontent}>
                <img src="/images/bridedress.jpg" alt="Brudekjole Rens" />
              </div>
              <div className={styles.textcontent}>
                <div className={styles.iconTitle}>
                  <img
                    className={styles.serviceIcon}
                    src="/images/icons/bride-dress.png"
                    alt="Icon"
                  />
                  <h2>Brudekjole Rens</h2>
                </div>
                <hr className={styles.divider} />
                <p>
                  ✓ Specialrensning af brudekjoler, så de forbliver i perfekt
                  stand.
                </p>
                <Link
                  href={"/services/brudekjolerens"}
                  className={styles.ctaButtonService}
                >
                  Se brudekjole rens
                </Link>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 7: Dåbskjole Vask/Rens */}
          <SwiperSlide>
            <div className={styles.gridService}>
              <div className={styles.swiperslidecontent}>
                <img src="/images/gowndress.png" alt="Dåbskjole Vask/Rens" />
              </div>
              <div className={styles.textcontent}>
                <div className={styles.iconTitle}>
                  <img
                    className={styles.serviceIcon}
                    src="/images/icons/baby-dress.png"
                    alt="Icon"
                  />
                  <h2>Dåbskjole Vask/Rens</h2>
                </div>
                <hr className={styles.divider} />
                <p>
                  ✓ Vi tager os af dåbskjoler med ekstra omsorg og præcision.
                </p>
                <Link
                  href={"/services/daabskjole"}
                  className={styles.ctaButtonService}
                >
                  Se dåbskjole vask/rens
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </main>
  );
}
