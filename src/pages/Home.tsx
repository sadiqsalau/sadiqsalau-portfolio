import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import SectionsContainer from "../components/SectionsContainer";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionsContainer>
        <About />
        <Projects />
      </SectionsContainer>
    </>
  );
}
