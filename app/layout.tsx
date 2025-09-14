import "./css/globals.css";
import Footer from "./components/footer/footer";
import { Suspense } from "react";

export const metadata = {
  title: "Trio Renseriet",
  description: "Trio Renseriet",
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
    <html lang="en">
      <head />
      <body>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
