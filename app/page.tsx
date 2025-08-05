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
          <h2>Højt kvalitet af rens </h2>
          <p>
            Hos Trio Renseri har vi leveret førsteklasses renseri- og
            tøjplejeservices til både private kunder og virksomheder. Med mere
            end 30 års erfaring sørger vi for, at dit tøj altid modtager den
            opmærksomhed og pleje, det fortjener – uanset om det er hverdagstøj
            eller sarte materialer.
          </p>
        </section>

        {/* About Us Section */}
        <section className={styles.crossSection}>
          <div className={styles.crossImageContainer}>
            <img src="/images/profil.jpg" alt="Velkommen til Trio Renseri" />
          </div>
          <div className={styles.crossTextContainer}>
            <h2>Velkommen til Trio Renseri</h2>
            <p>
              Hos Trio Renseri forstår vi, at dit tøj er mere end blot
              beklædning – det er en del af din identitet og huser både minder
              og stil. Derfor tilbyder vi skræddersyede løsninger, der sikrer,
              at dine favoritstykker behandles med den rette omhu og
              vedligeholdelse.
            </p>
            <p>
              I takt med at både mode og materialer udvikler sig, holder vi
              konstant øje med de nyeste teknikker og metoder. Du kan trygt
              overlade din garderobe til os, velvidende at vi kombinerer
              tradition med innovation for at levere de bedste resultater.
            </p>
            <h3>Hvorfor Vælge Trio Renseri?</h3>
            <ul>
              <li>Miljøvenlige metoder og materialer</li>
              <li>Over 26 års erfaring</li>
              <li>Pålidelig og hurtig service</li>
              <li>Specialiseret pleje af sarte stoffer</li>
            </ul>
          </div>
        </section>

        {/* Textile Section */}
        <section className={styles.crossSection}>
          <div className={styles.crossTextContainer}>
            <h2>Tekstilrens</h2>
            <p>
              Vi tilbyder professionel tekstilrens, der sikrer, at dit tøj
              forbliver rent og velplejet. Vores specialiserede metoder fjerner
              pletter og bevarer både farve og form, så dit tøj altid fremstår
              friskt.
            </p>
            <h3>Fordele ved vores tekstilrens</h3>
            <ul>
              <li>Skånsom og effektiv rensning</li>
              <li>Fastholdelse af farver og form</li>
              <li>Moderne og miljøvenlige metoder</li>
              <li>Erfaring med alle typer tekstiler</li>
            </ul>
          </div>
          <div className={styles.crossImageContainer}>
            <img src="/images/textile.jpg" alt="Tekstilrens" />
          </div>
        </section>

        {/* Boat Service Section */}
        <section className={styles.crossSection}>
          <div className={styles.crossImageContainer}>
            <img src="/images/baad2.jpg" alt="Bådservice" />
          </div>
          <div className={styles.crossTextContainer}>
            <h2>Service til både</h2>
            <p>
              Udover vores klassiske renseri- og tøjplejeservices tilbyder vi
              omfattende service til både. Vi hjælper dig med alt fra vask og
              imprægnering af kalacher til alt slags af reperationer -
              udskiftning af rude, lynlåse osv
            </p>
            <h3>Vores bådservice omfatter:</h3>
            <ul>
              <li>vask og imrægnering af kalacher</li>
              <li>Udskiftning af ruder og lynlåse</li>
            </ul>
            <div className={styles.ctaButtonContainer}>
              <Link href="/services/batservice" className={styles.ctaButton}>
                Se bådservice
              </Link>
            </div>
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
                    ✓ Vores professionelle vask/rensning sikrer en frisk og
                    skarp skjorte hver gang.
                  </p>
                  <p>✓ Garanteret kvalitet –</p>
                  <Link
                    href={"/services/skjorteservice"}
                    className={styles.ctaButtonService}
                  >
                    Se skjorte service
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide : Brudekjole Rens */}
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

            {/* Slide: Duge */}
            <SwiperSlide>
              <div className={styles.gridService}>
                <div className={styles.swiperslidecontent}>
                  <img src="/images/table.jpg" alt="Vask af duge" />
                </div>
                <div className={styles.textcontent}>
                  <div className={styles.iconTitle}>
                    <img
                      className={styles.serviceIcon}
                      src="/images/icons/pillow.png"
                      alt="Icon"
                    />
                    <h2>Vask af duge</h2>
                  </div>
                  <hr className={styles.divider} />
                  <p>
                    ✓ Få dine duge vasket og rullet, så de altid er klar til
                    brug.
                  </p>
                  <Link
                    href={"/services/vaskerulleservice"}
                    className={styles.ctaButtonService}
                  >
                    Se vask af duge
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide Gardin service*/}
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

            {/* Slide: møbelbetræk */}
            <SwiperSlide>
              <div className={styles.gridService}>
                <div className={styles.swiperslidecontent}>
                  <img src="/images/sofa.jpg" alt="Møbelbetræk" />
                </div>
                <div className={styles.textcontent}>
                  <div className={styles.iconTitle}>
                    <img
                      className={styles.serviceIcon}
                      src="/images/icons/tablecloth.png" // ÆNDRE
                      alt="Icon"
                    />
                    <h2>Rensing af madrasbetræk</h2>
                  </div>
                  <hr className={styles.divider} />
                  <p>
                    ✓ Vi renser dine madrasser og holder dem friske og rene.
                  </p>
                  <Link
                    href={"/services/sofa"}
                    className={styles.ctaButtonService}
                  >
                    Se madrasbetræk service
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide: Udlejning af mødel og tæpperens */}
            <SwiperSlide>
              <div className={styles.gridService}>
                <div className={styles.swiperslidecontent}>
                  <img src="/images/ÆNDRE.jpg" alt="Udlejning" /> {/* ÆNDRE */}
                </div>
                <div className={styles.textcontent}>
                  <div className={styles.iconTitle}>
                    <img
                      className={styles.serviceIcon}
                      src="/images/icons/tablecloth.png" // ÆNDRE
                      alt="Icon"
                    />
                    <h2>Udlejning af møbel og tæpperensmaskine</h2>
                  </div>
                  <hr className={styles.divider} />
                  <p>
                    ✓ Lej professionelle maskiner til rensning af møbler og
                    tæpper.
                  </p>
                  <Link
                    href={"/services/sofa"} // ændre
                    className={styles.ctaButtonService}
                  >
                    Se udlejning service
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide: Båd kalache */}
            <SwiperSlide>
              <div className={styles.gridService}>
                <div className={styles.swiperslidecontent}>
                  <img src="/images/baad2.jpg" alt="baadkalache" />{" "}
                  {/* ÆNDRE */}
                </div>
                <div className={styles.textcontent}>
                  <div className={styles.iconTitle}>
                    <img
                      className={styles.serviceIcon}
                      src="/images/icons/tablecloth.png" // ÆNDRE
                      alt="Icon"
                    />
                    <h2>Rensing og vedligeholdelse af båd kalache</h2>
                  </div>
                  <hr className={styles.divider} />
                  <p>
                    ✓ Vi renser dine madrasser og holder dem friske og rene.
                  </p>
                  <Link
                    href={"/services/baadkalache"}
                    className={styles.ctaButtonService}
                  >
                    Se båd kalache service
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Swiper Slides */}
            <SwiperSlide>
              <div className={styles.gridService}>
                <div className={styles.swiperslidecontent}>
                  <img src="/images/sew3.jpg" alt="sew" />
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
                  <p>
                    ✓ Vi tilbyder skræddersyede løsninger til omforandring af
                    tøj.
                  </p>
                  <Link
                    href={"/services/skraedder"}
                    className={styles.ctaButtonService}
                  >
                    Se omforandring service
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </main>
    </>
  );
}
