//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Our Case Study - Online Reputation Management",
  description: "Our Case Study",
  //===== OG Tags =====
  openGraph: {
    title: 'Our Case Study - Online Reputation Management',
    description: 'Our Case Study',
    url: '/our-casestudy',
    siteName: 'Online Reputation Management',
    locale: 'en_US',
    type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/our-casestudy' },
  //===== GEO Tags =====
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}