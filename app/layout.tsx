import type { Metadata } from "next";
import { Work_Sans, Yanone_Kaffeesatz } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const yanoneKaffeesatz = Yanone_Kaffeesatz({
  variable: "--font-yanone",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Rengana Business & Commercial Services",
  description:
    "Our expertise. Your prosperity. Investment Planning, Business Development, Advisory & Consultancy services based in Muscat, Sultanate of Oman.",
  openGraph: {
    title: "Rengana Business & Commercial Services",
    description:
      "Our expertise. Your prosperity. Investment Planning, Business Development, Advisory & Consultancy services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${yanoneKaffeesatz.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-[#414042]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
