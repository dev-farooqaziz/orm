//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "Podcast Services - Online Reputation Management",
  description: "Award Winning Online Reputation Management Services!.",
  //===== OG Tags =====
  openGraph: {
      title: 'Podcast Services - Online Reputation Management',
      description: 'Award Winning Online Reputation Management Services!.',
      url: '/podcasts',
     siteName: 'Online Reputation Management',
      locale: 'en_US',
      type: 'website',
  },
  //===== Canonical =====
  alternates: { canonical: '/podcasts' },
  //===== GEO Tags =====
  other: {},
}

export default function RootLayout({ children }) {
  return (children);
}