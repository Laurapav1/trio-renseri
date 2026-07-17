"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import HomeHeroSection from "./components/hero-section/home-hero-section";
import ResponsiveImage from "./components/responsive-image/responsive-image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeHeroSection />
      <main>
        {/* Intro Section */}
        <section className={styles.textWrapper}>
          <h2>Høj kvalitet i rens</h2>
          <p>
            Hos Trio Renseriet har vi leveret førsteklasses renseri- og
            tøjplejeservices til både private kunder og virksomheder. Med mere
            end 30 års erfaring sørger vi for, at dit tøj altid modtager den
            opmærksomhed og pleje, det fortjener – uanset om det er hverdagstøj
            eller sarte materialer.
          </p>
        </section>

        {/* About Us Section */}
        <section className={styles.crossSection}>
          <div className={styles.crossImageContainer}>
            <ResponsiveImage
              src="/images/profil.jpg"
              alt="Velkommen til Trio Renseri"
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className={styles.crossTextContainer}>
            <h2>Velkommen til Trio Renseriet</h2>
            <p>
              Hos Trio Renseriet forstår vi, at dit tøj er mere end blot
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
            <h3>Hvorfor Vælge Trio Renseriet?</h3>
            <ul>
              <li>Miljøvenlige metoder og materialer</li>
              <li>Over 30 års erfaring</li>
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

            <div className={styles.ctaButtonContainer}>
              <Link href="/services/tekstilrens" className={styles.ctaButton}>
                Se tekstilrens
              </Link>
            </div>
          </div>
          <div className={styles.crossImageContainer}>
            <ResponsiveImage
              src="/images/tekstil.jpg"
              alt="Tekstilrens"
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* Boat */}
        <section className={styles.crossSection}>
          <div className={styles.crossImageContainer}>
            <ResponsiveImage
              src="/images/baad2.jpg"
              alt="Bådservice"
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className={styles.crossTextContainer}>
            <h2>Service til både</h2>
            <p>
              Udover vores klassiske renseri- og tøjplejeservices tilbyder vi
              omfattende service til både. Vi hjælper dig med vask,
              imprægnering og forskellige reparationer af bådkalecher, blandt
              andet udskiftning af ruder og lynlåse.
            </p>
            <h3>Vores bådservice omfatter:</h3>
            <ul>
              <li>Vask og imprægnering af bådkalecher</li>
              <li>Udskiftning af ruder og lynlåse</li>
            </ul>
            <div className={styles.ctaButtonContainer}>
              <Link href="/services/baadkalache" className={styles.ctaButton}>
                Se bådservice
              </Link>
            </div>
          </div>
        </section>

        {/* Service Section with Swiper */}
        <section className={styles.serviceSection}>
          <div className={styles.serviceBanner}>
            <h2>Vi udfører</h2>
          </div>

          <Swiper
            className={styles.mySwiper}
            modules={[Autoplay, Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={550}
          >
            {/* Tekstilrens */}
            <SwiperSlide>
              <div className={styles.gridService}>
                <div className={styles.mediaBox}>
                  <ResponsiveImage
                    src="/images/tekstil.jpg"
                    alt="Tekstilrens"
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <div className={styles.textcontent}>
                  <div className={styles.iconTitle}>
                    <Image
                      className={styles.serviceIcon}
                      src="/images/icons/laundry.png"
                      alt=""
                      width={42}
                      height={42}
                    />
                    <h2>Tekstilrens</h2>
                  </div>
                  <hr className={styles.divider} />
                  <p>✓ Skånsom og effektiv rensning af alle tekstiler.</p>
                  <Link
                    href="/services/tekstilrens"
                    className={styles.ctaButtonService}
                  >
                    Se tekstilrens
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Skjorteservice */}
            <SwiperSlide>
              <div className={styles.gridService}>
                <div className={styles.mediaBox}>
                  <ResponsiveImage
                    src="/images/skjorte.jpg"
                    alt="Skjorteservice"
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <div className={styles.textcontent}>
                  <div className={styles.iconTitle}>
                    <Image
                      className={styles.serviceIcon}
                      src="/images/shirt-icon.webp"
                      alt=""
                      width={42}
                      height={42}
                    />
                    <h2>Skjorteservice</h2>
                  </div>
                  <hr className={styles.divider} />
                  <p>✓ Ekspertise og omhu for en skarp skjorte – hver gang.</p>
                  <Link
                    href="/services/skjorteservice"
                    className={styles.ctaButtonService}
                  >
                    Se skjorteservice
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Brudekjole Rens */}
            <SwiperSlide>
              <div className={styles.gridService}>
                <div className={styles.mediaBox}>
                  <ResponsiveImage
                    src="/images/clean-wedding.jpeg"
                    alt="Brudekjolerens"
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <div className={styles.textcontent}>
                  <div className={styles.iconTitle}>
                    <Image
                      className={styles.serviceIcon}
                      src="/images/icons/bride-dress.png"
                      alt=""
                      width={42}
                      height={42}
                    />
                    <h2>Brudekjole Rens</h2>
                  </div>
                  <hr className={styles.divider} />
                  <p>
                    ✓ Skånsom specialrensning – bevarer kjolens form og
                    detaljer.
                  </p>
                  <Link
                    href="/services/brudekjolerens"
                    className={styles.ctaButtonService}
                  >
                    Se brudekjole rens
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Dyne/Pude */}
            <SwiperSlide>
              <div className={styles.gridService}>
                <div className={styles.mediaBox}>
                  <ResponsiveImage
                    src="/images/dyne.jpg"
                    alt="Dyne og pude vask"
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <div className={styles.textcontent}>
                  <div className={styles.iconTitle}>
                    <Image
                      className={styles.serviceIcon}
                      src="/images/icons/pillow.png"
                      alt=""
                      width={42}
                      height={42}
                    />
                    <h2>Dyne/Pude Vask</h2>
                  </div>
                  <hr className={styles.divider} />
                  <p>✓ Skånsom vask – holder fyldet luftigt og friskt.</p>
                  <Link
                    href="/services/dynevask"
                    className={styles.ctaButtonService}
                  >
                    Se dyne/pude vask
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Duge */}
            <SwiperSlide>
              <div className={styles.gridService}>
                <div className={styles.mediaBox}>
                  <ResponsiveImage
                    src="/images/table.jpg"
                    alt="Vask af duge"
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <div className={styles.textcontent}>
                  <div className={styles.iconTitle}>
                    <Image
                      className={styles.serviceIcon}
                      src="/images/icons/tablecloth.png"
                      alt=""
                      width={42}
                      height={42}
                    />
                    <h2>Vask af duge</h2>
                  </div>
                  <hr className={styles.divider} />
                  <p>✓ Vasket og rullet – klar til brug.</p>
                  <Link
                    href="/services/vaskerulleservice"
                    className={styles.ctaButtonService}
                  >
                    Se vask af duge
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Gardinservice */}
            <SwiperSlide>
              <div className={styles.gridService}>
                <div className={styles.mediaBox}>
                  <ResponsiveImage
                    src="/images/curtains2.jpg"
                    alt="Gardinservice"
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <div className={styles.textcontent}>
                  <div className={styles.iconTitle}>
                    <Image
                      className={styles.serviceIcon}
                      src="/images/icons/curtain-icon.png"
                      alt=""
                      width={42}
                      height={42}
                    />
                    <h2>Gardinservice</h2>
                  </div>
                  <hr className={styles.divider} />
                  <p>✓ Rens, vedligehold og friskhed til dine gardiner.</p>
                  <Link
                    href="/services/gardinservice"
                    className={styles.ctaButtonService}
                  >
                    Se gardinservice
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Tæpperens */}
            <SwiperSlide>
              <div className={styles.gridService}>
                <div className={styles.mediaBox}>
                  <ResponsiveImage
                    src="/images/floorcarpet.jpg"
                    alt="Tæpperens"
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <div className={styles.textcontent}>
                  <div className={styles.iconTitle}>
                    <Image
                      className={styles.serviceIcon}
                      src="/images/icons/carpet.png"
                      alt=""
                      width={42}
                      height={42}
                    />
                    <h2>Tæpperens</h2>
                  </div>
                  <hr className={styles.divider} />
                  <p>✓ Professionel rens – små og store tæpper.</p>
                  <Link
                    href="/services/taepperens"
                    className={styles.ctaButtonService}
                  >
                    Se tæpperens
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.gridService}>
                <div className={styles.mediaBox}>
                  <ResponsiveImage
                    src="/images/madrass.jpg"
                    alt="Vask af madrasser"
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <div className={styles.textcontent}>
                  <div className={styles.iconTitle}>
                    <Image
                      className={styles.serviceIcon}
                      src="/images/icons/mattress.png"
                      alt=""
                      width={42}
                      height={42}
                    />
                    <h2>Vask af madrasser</h2>
                  </div>
                  <hr className={styles.divider} />
                  <p>✓ Friskhed og hygiejne til madrasser.</p>
                  <Link
                    href="/services/madrasser"
                    className={styles.ctaButtonService}
                  >
                    Se madrasservice
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.gridService}>
                <div className={styles.mediaBox}>
                  <ResponsiveImage
                    src="/images/sofa3.jpg"
                    alt="Rensning af møbelbetræk"
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <div className={styles.textcontent}>
                  <div className={styles.iconTitle}>
                    <Image
                      className={styles.serviceIcon}
                      src="/images/icons/sofa.png"
                      alt=""
                      width={42}
                      height={42}
                    />
                    <h2>Rensning af møbelbetræk</h2>
                  </div>
                  <hr className={styles.divider} />
                  <p>
                    ✓ Professionel rensning af sofaer, lænestole og andre
                    møbelbetræk.
                  </p>
                  <p>✓ Fjerner pletter og forlænger møblernes levetid.</p>
                  <Link
                    href="/services/mobelbetraak"
                    className={styles.ctaButtonService}
                  >
                    Se møbelbetræk service
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Udlejning */}
            <SwiperSlide>
              <div className={styles.gridService}>
                <div className={styles.mediaBox}>
                  <ResponsiveImage
                    src="/images/maskine.jpeg"
                    alt="Udlejning af maskiner"
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <div className={styles.textcontent}>
                  <div className={styles.iconTitle}>
                    <Image
                      className={styles.serviceIcon}
                      src="/images/icons/udlejning.png"
                      alt=""
                      width={42}
                      height={42}
                    />
                    <h2>Udlejning af møbel- og tæpperensmaskine</h2>
                  </div>
                  <hr className={styles.divider} />
                  <p>✓ Lej professionelle maskiner til hjemmebrug.</p>
                  <Link
                    href="/services/udlejning"
                    className={styles.ctaButtonService}
                  >
                    Se udlejning
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Bådkaleche */}
            <SwiperSlide>
              <div className={styles.gridService}>
                <div className={styles.mediaBox}>
                  <ResponsiveImage
                    src="/images/baad2.jpg"
                    alt="Rensning af bådkaleche"
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <div className={styles.textcontent}>
                  <div className={styles.iconTitle}>
                    <Image
                      className={styles.serviceIcon}
                      src="/images/icons/boat.png"
                      alt=""
                      width={42}
                      height={42}
                    />
                    <h2>Rensning af bådkaleche</h2>
                  </div>
                  <hr className={styles.divider} />
                  <p>✓ Vask og imprægnering af bådkalecher.</p>
                  <p>✓ Beskytter materialet og forlænger levetiden.</p>
                  <Link
                    href="/services/baadkalache"
                    className={styles.ctaButtonService}
                  >
                    Se bådkaleche service
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            {/* Omforandring */}
            <SwiperSlide>
              <div className={styles.gridService}>
                <div className={styles.mediaBox}>
                  <ResponsiveImage
                    src="/images/sew3.jpg"
                    alt="Omforandring af tøj"
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <div className={styles.textcontent}>
                  <div className={styles.iconTitle}>
                    <Image
                      className={styles.serviceIcon}
                      src="/images/icons/sewing-machine.png"
                      alt=""
                      width={42}
                      height={42}
                    />
                    <h2>Omforandring af tøj</h2>
                  </div>
                  <hr className={styles.divider} />
                  <p>✓ Skræddersyede løsninger der passer perfekt.</p>
                  <Link href="/skraedder" className={styles.ctaButtonService}>
                    Se omforandring
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
