"use client";
import React from "react";
import PageHeroSection from "../components/hero-section/page-hero-section";
import Navbar from "../components/navbar/navbar";

export default function Firm() {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <PageHeroSection heading="Kunde Rabat" imagePath="/images/dress.jpg" />
    </>
  );
}
