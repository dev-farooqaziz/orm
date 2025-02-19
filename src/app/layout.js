//===== Import Fonts =====
import { Poppins, Montserrat } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-primary",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-secondary",
});
//===== Import Components =====
import { Header, Footer } from "@/components";
//===== Import Css =====
import "./globals.css";
//===== Meta Data =====
export const metadata = {
  metadataBase: new URL("https://orm-new.vercel.app/"),
  //===== Meta Tags =====
  title: "Top Online Reputation Management Company – Boost Your Brand Trust",
  description:
    "Enhance your business’s online presence with a leading online reputation management company. Build trust, and improve reviews with our expert solutions.",
  //===== OG Tags =====
  openGraph: {
    title: "Top Online Reputation Management Company – Boost Your Brand Trust",
    description:
      "Enhance your business’s online presence with a leading online reputation management company. Build trust, and improve reviews with our expert solutions.",
    url: "/",
    siteName: "Online Reputation Management",
    locale: "en_US",
    type: "website",
  },
  //===== Canonical =====
  alternates: { canonical: "/" },
  //===== Robots =====
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  //===== GEO Tags =====
  other: {},
  //===== Google Varification =====
  verification: {
    other: {
      "": [""],
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserrat.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
