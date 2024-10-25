//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "About US - Online Reputation Management",
  description: "About US",
  //===== OG Tags =====
  openGraph: {
    title: 'About US - Online Reputation Management',
    description: 'About US',
    url: '/about-us',
    siteName: 'Online Reputation Management',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/about-us' },
  //===== GEO Tags =====
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}