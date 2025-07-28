import Masonry from "react-masonry-css";

import ProjectCard from "./ProjectCard";
import Section from "./Section";
import projects from "../resources/projects";

const breakpointColumnsObj = {
  default: 3,
  919: 2,
  768: 1,
};

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <p className="text-stone-300">
        These are some of my recent and favorite projects. A few were built for
        clients, but most came from problems I needed to solve.
      </p>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex -ml-4 w-auto"
        columnClassName="pl-4 bg-clip-padding"
      >
        {projects.map((project) => (
          <div key={project.id} className="mb-4">
            <ProjectCard project={project} />
          </div>
        ))}
      </Masonry>
    </Section>
  );
}
