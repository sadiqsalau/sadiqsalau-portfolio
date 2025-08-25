import { Helmet } from "react-helmet-async";
import { useParams } from "react-router";

import ProjectView from "../components/ProjectView";
import projects from "../resources/projects";

export default function ProjectDetails() {
  const params = useParams();
  const projectId = params.id;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div className="text-stone-300">Project not found</div>;
  }

  console.log(project);

  return (
    <>
      <Helmet>
        <title>{project.title} - Sadiq Salau</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.description} />
        {project.images.map((image, index) => (
          <meta
            key={index}
            property="og:image"
            content={new URL(image.src, window.location.origin).href}
          />
        ))}
      </Helmet>

      <ProjectView project={project} />
    </>
  );
}
