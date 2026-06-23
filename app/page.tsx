import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import MoreFromUs from "./components/MoreFromUs";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <AboutUs />
      <MoreFromUs />
      <ContactSection />
    </main>
  );
}
