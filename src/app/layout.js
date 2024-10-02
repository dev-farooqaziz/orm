//===== Import Fonts =====
import { Poppins, Montserrat } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-primary'
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-secondary'
});
//===== Import Components =====
import { Header, Footer } from "@/components";
//===== Import Css =====
import "./globals.css";
//===== Meta Data =====
export const metadata = {
  metadataBase: new URL('https://orm.vercel.app/'),
  //===== Meta Tags =====
  title: "",
  description: "",
  //===== OG Tags =====
  openGraph: {
    title: "",
    description: "",
    url: '/',
    siteName: '',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/' },
  //===== GEO Tags =====
  other: {},
  //===== Google Varification =====
  verification: {
    other: {
      "": [''],
    },
  },
}

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
