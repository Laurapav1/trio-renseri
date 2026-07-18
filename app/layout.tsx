import "./css/globals.css";
import Footer from "./components/footer/footer";
import { Suspense } from "react";
import { ClosedBanner } from "./components/closed-banner/closed-banner";
import JsonLd from "./components/seo-json-ld";
import { localBusinessJsonLd, metadataFor, siteUrl, websiteJsonLd } from "./seo";

export const metadata = {
  ...metadataFor("/"),
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da-DK">
      <head>
        <JsonLd data={[localBusinessJsonLd, websiteJsonLd]} />
      </head>
      <body>
        <ClosedBanner />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
