import AboutSection from "../components/AboutSection";
import ContactsSection from "../components/ContactsSection";
import FeaturedProjectsSection from "../components/FeaturedProjectsSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import SectionsContainer from "../components/SectionsContainer";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionsContainer>
        <AboutSection />
        <FeaturedProjectsSection />
        <TestimonialsSection />
        <ContactsSection />
      </SectionsContainer>

      <Footer />
    </>
  );
}
