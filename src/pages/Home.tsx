import About from "../components/About";
import FeaturedProjects from "../components/FeaturedProjects";
import Hero from "../components/Hero";
import SectionsContainer from "../components/SectionsContainer";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionsContainer>
        <About />
        <FeaturedProjects />
      </SectionsContainer>
    </>
  );
}
