import AboutSection from "../components/AboutSection";
import ContactsSection from "../components/ContactsSection";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import SectionsContainer from "../components/SectionsContainer";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionsContainer>
        <AboutSection />
        <FeaturedProjectsSection />
        <ContactsSection />
      </SectionsContainer>

      <Footer />
    </>
  );
}
