"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PageHeroSection from "../components/hero-section/page-hero-section";
import Navbar from "../components/navbar/navbar";

// Importer virksomhedens logoer (opdater stierne med de faktiske)
const companyLogos = [
  { src: "/images/firm/tdc.png", alt: "TDC" },
  { src: "/images/firm/salling-group.png", alt: "Salling Group" },
  { src: "/images/firm/deloitte.png", alt: "Deloitte" },
  { src: "/logos/post-dk.png", alt: "Post Danmark" },
  { src: "/logos/telia.png", alt: "Telia" },
  { src: "/logos/nykredit.png", alt: "Nykredit" },
  { src: "/logos/jysk.png", alt: "Jysk" },
  { src: "/logos/mcdonalds.png", alt: "McDonald" },
  // Tilføj flere virksomheder her
];

export default function Firm() {
  return (
    <>
      <Navbar />
      <PageHeroSection heading="Kunde Rabat" imagePath="/images/dress.jpg" />

      <div className="container">
        <h2>Firmaer med Rabat</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1} // Viser 3 logoer samtidig
          autoplay={{ delay: 5000, disableOnInteraction: false }} // Autoplay
          loop={true} // Loop slides
          pagination={{ clickable: true }} // Pagination dots
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 logo på små skærme
            },
            768: {
              slidesPerView: 2, // 2 logoer på mellemstore skærme
            },
            1024: {
              slidesPerView: 3, // 3 logoer på store skærme
            },
          }}
        >
          {companyLogos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="logo-slide">
                <img src={logo.src} alt={logo.alt} className="company-logo" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
