import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import MoreFromUs from "./components/MoreFromUs";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutUs />
        <MoreFromUs />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
