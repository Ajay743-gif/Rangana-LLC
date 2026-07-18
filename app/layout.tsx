import type { Metadata } from "next";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL = "https://renganallc.com";

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Rengana Capital",
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rengana Capital | Business & Finance Advisory in Oman",
    template: "%s | Rengana Capital",
  },
  description:
    "Rengana Capital helps Oman's MSMEs and enterprises raise finance and grow. Equipment, trade, vehicle and project finance arranged through banks and NBFCs, backed by 20+ years of advisory experience and 500+ clients.",
  keywords: [
    "project finance Oman",
    "business advisory Oman",
    "MSME finance Muscat",
    "equipment finance Oman",
    "trade finance Oman",
    "working capital finance Oman",
    "business consultancy Muscat",
    "Rengana Capital",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Rengana Capital",
    title: "Rengana Capital | Business & Finance Advisory in Oman",
    description:
      "Raise finance and grow your business in Oman. Advisory and finance facilitation backed by 20+ years and 500+ clients.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rengana Capital | Business & Finance Advisory in Oman",
    description:
      "Raise finance and grow your business in Oman. Advisory and finance facilitation backed by 20+ years and 500+ clients.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${workSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-paper text-ink antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
