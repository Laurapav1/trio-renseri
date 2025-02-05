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
            Hos Trio Renseri har vi siden 1954 leveret førsteklasses renseri- og
            tøjplejeservices til både private kunder og virksomheder. Med mere
            end 26 års erfaring sørger vi for, at dit tøj altid modtager den
            opmærksomhed og pleje, det fortjener – uanset om det er hverdagstøj
            eller sarte materialer.
          </p>
        </section>

        {/* About Us Section */}
        <section className={styles.aboutUsSection}>
          <div className={styles.imageContainer}>
            <img src="/images/profil.jpg" alt="Velkommen til Trio Renseri" />
          </div>
          <div className={styles.textContainer}>
            <h2>Velkommen til Trio Renseri</h2>
            <p>
              Hos Trio Renseri forstår vi, at dit tøj ikke bare er tekstiler –
              det er en del af din hverdag og ofte forbundet med både
              affektionsværdi og funktionalitet. Vi tilbyder derfor
              skræddersyede løsninger, der sikrer, at dine tekstiler behandles
              med omhu og ekspertise.
            </p>
            <p>
              Igennem årene er der sket en voldsom udvikling på både tekstiler,
              former og farver – men tiden har heller ikke stået stille hos os.
              Derfor kan du trygt stole på, at vi leverer de bedste metoder, når
              det kommer til rens og vedligeholdelse af dine tekstiler.
            </p>
            <h3>Hvorfor Vælge Trio Renseri?</h3>
            <ul>
              <li>Miljøvenlige renserimetoder</li>
              <li>Over 26 års erfaring</li>
              <li>Pålidelig og hurtig service</li>
              <li>Specialpleje af sarte tekstiler</li>
            </ul>
          </div>
        </section>

        {/* Bådservice-sektionen med teksten til venstre, billedet til højre */}
        <section className={styles.boatServiceSection}>
          <div className={styles.boatServiceText}>
            <h2>Service til både</h2>
            <p>
              Udover vores klassiske renseri- og tøjplejeservices tilbyder vi
              omfattende service til både. Vi hjælper dig med alt fra rensning
              af kalacher og udskiftning af ruder til opfriskning af
              bådpressening samt vask/rens og imprægnering.
            </p>
            <h3>Vores bådservice omfatter:</h3>
            <ul>
              <li>Rensning af kalacher</li>
              <li>Udskiftning af ruder</li>
              <li>Opfriskning af bådpressening</li>
              <li>Omfattende vask/rens og imprægnering</li>
              <li>Vask/rens af hynder, puder, måtter og gardiner</li>
            </ul>
            <Link
              href="/services/batservice"
              className={styles.ctaButtonService}
            >
              Se bådservice
            </Link>
          </div>
          <div className={styles.boatServiceImage}>
            <img src="/images/profil.jpg" alt="Bådservice" />
          </div>
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
                    ✓ Garanteret kvalitet – vi inspicerer og stryger hver
                    skjorte til perfektion.
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
                    ✓ Garanteret kvalitet – vi inspicerer og stryger hver
                    skjorte til perfektion.
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
                    ✓ Vi tilbyder skånsom og effektiv rensning af alle
                    tekstiler.
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
                  <img src="/images/table.jpg" alt="Vaske/Rulle Service" />
                </div>
                <div className={styles.textcontent}>
                  <div className={styles.iconTitle}>
                    <img
                      className={styles.serviceIcon}
                      src="/images/icons/tablecloth.png"
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

            {/* Slide 8: Dyne/Pude Vask */}
            <SwiperSlide>
              <div className={styles.gridService}>
                <div className={styles.swiperslidecontent}>
                  <img src="/images/dyne.jpg" alt="Dyne/Pude Vask" />
                </div>
                <div className={styles.textcontent}>
                  <div className={styles.iconTitle}>
                    <img
                      className={styles.serviceIcon}
                      src="/images/icons/pillow.png"
                      alt="Icon"
                    />
                    <h2>Dyne/Pude Vask</h2>
                  </div>
                  <hr className={styles.divider} />
                  <p>
                    ✓ Få dine dyner og puder vasket med den største omhu, så de
                    holder sig friske og rene.
                  </p>
                  <Link
                    href={"/services/dynepude"}
                    className={styles.ctaButtonService}
                  >
                    Se dyne/pude vask
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 9: Sofabetræk Vask */}
            <SwiperSlide>
              <div className={styles.gridService}>
                <div className={styles.swiperslidecontent}>
                  <img src="/images/sofa.jpg" alt="Sofabetræk Vask" />
                </div>
                <div className={styles.textcontent}>
                  <div className={styles.iconTitle}>
                    <img
                      className={styles.serviceIcon}
                      src="/images/icons/sofa.png"
                      alt="Icon"
                    />
                    <h2>Sofabetræk Vask</h2>
                  </div>
                  <hr className={styles.divider} />
                  <p>
                    ✓ Vi renser dine sofabetræk skånsomt, så de fremstår som nye
                    igen.
                  </p>
                  <Link
                    href={"/services/sofabetraek"}
                    className={styles.ctaButtonService}
                  >
                    Se sofabetræk vask
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
