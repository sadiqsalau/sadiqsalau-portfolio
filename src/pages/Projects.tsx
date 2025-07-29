import { Link } from "react-router";
import { LuArrowLeft } from "react-icons/lu";

import Footer from "../components/Footer";
import ProjectsList from "../components/ProjectsList";
import Section from "../components/Section";
import SectionsContainer from "../components/SectionsContainer";
import projects from "../resources/projects";

export default function Projects() {
  return (
    <>
      <SectionsContainer>
        <Link to="/" className="flex items-center gap-2 text-green-500">
          <LuArrowLeft className="size-6" /> Return to Homepage
        </Link>

        <Section title="Projects">
          <p className="text-stone-300">
            This is a list of my projects. You can browse through them to see
            the work I've done.
          </p>
          <ProjectsList projects={projects} />
        </Section>
      </SectionsContainer>

      <Footer />
    </>
  );
}
