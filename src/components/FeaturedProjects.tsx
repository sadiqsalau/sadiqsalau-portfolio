import { Element } from "react-scroll";
import { Link } from "react-router";

import Button from "./Button";
import ProjectsList from "./ProjectsList";
import Section from "./Section";
import { featuredProjects } from "../resources/projects";

export default function FeaturedProjects() {
  return (
    <Element name="projects">
      <Section title="Projects">
        <p className="text-stone-300">
          These are some of my recent and favorite projects. A few were built
          for clients, but most came from problems I needed to solve.
        </p>

        <ProjectsList projects={featuredProjects} />

        <div className="flex justify-center">
          <Button as={Link} to="/projects" className="mt-4">
            View All Projects
          </Button>
        </div>
      </Section>
    </Element>
  );
}
