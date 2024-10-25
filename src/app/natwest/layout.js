//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "NatWest - Online Reputation Management",
  description: "NatWest",
  //===== OG Tags =====
  openGraph: {
    title: 'NatWest - Online Reputation Management',
    description: 'NatWest',
    url: '/natwest',
    siteName: 'Online Reputation Management',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/natwest' },
  //===== GEO Tags =====
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}