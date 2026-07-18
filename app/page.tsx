import Hero from "./components/Hero";
import ProofBar from "./components/ProofBar";
import Services from "./components/Services";
import TrackRecord from "./components/TrackRecord";
import WhoWeServe from "./components/WhoWeServe";
import AboutUs from "./components/AboutUs";
import Faq from "./components/Faq";
import ContactSection from "./components/ContactSection";
import { SERVICES } from "./data/services";

const SITE = "https://renganallc.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": `${SITE}/#organization`,
  name: "Rengana Capital",
  alternateName: "Rengana Business & Commercial Services",
  description:
    "Business and finance advisory for Oman's MSMEs and enterprises. Equipment, trade, vehicle and project finance arranged through banks and NBFCs.",
  url: SITE,
  logo: `${SITE}/icon.svg`,
  image: `${SITE}/opengraph-image`,
  telephone: "+968 9988 0403",
  email: "info@renganallc.com",
  priceRange: "$$",
  slogan: "Our expertise. Your prosperity.",
  areaServed: { "@type": "Country", name: "Oman" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Khuwair",
    addressLocality: "Muscat",
    addressRegion: "Muscat",
    addressCountry: "OM",
  },
  geo: { "@type": "GeoCoordinates", latitude: 23.5987, longitude: 58.4062 },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  founder: {
    "@type": "Person",
    name: "R. Renganathan",
    jobTitle: "Founder & Principal Advisor",
  },
  knowsAbout: [
    "Project finance",
    "Equipment finance",
    "Trade finance",
    "Working capital finance",
    "Business advisory",
    "Financial restructuring",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, url: `${SITE}/services/${s.slug}` },
    })),
  },
  // sameAs: ["https://www.linkedin.com/company/..."] // add once social profiles are confirmed
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <ProofBar />
      <Services />
      <TrackRecord />
      <WhoWeServe />
      <AboutUs />
      <Faq />
      <ContactSection />
    </main>
  );
}
