import "./css/globals.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import HomeHeroSection from "../components/hero-section/home-hero-section";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <HomeHeroSection />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
