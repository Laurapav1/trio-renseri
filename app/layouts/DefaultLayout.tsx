import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import PageHeroSection from "../components/hero-section/page-hero-section";

function DefaultLayout({
  children,
  heroHeading,
  heroImagePath,
}: {
  children: React.ReactNode;
  heroHeading: string;
  heroImagePath: string;
}) {
  return (
    <div>
      <Navbar />
      <PageHeroSection heading={heroHeading} imagePath={heroImagePath} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
