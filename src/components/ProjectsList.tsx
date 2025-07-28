import Masonry from "react-masonry-css";

import ProjectCard from "./ProjectCard";
import type { Project } from "../types/project";

const breakpointColumnsObj = {
  default: 3,
  919: 2,
  768: 1,
};

export default function ProjectsList({ projects }: { projects: Project[] }) {
  return (
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
  );
}
