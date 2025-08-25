import { useParams } from "react-router";

import PageSEO from "../components/PageSEO";
import ProjectView from "../components/ProjectView";
import projects from "../resources/projects";

export default function ProjectDetails() {
  const params = useParams();
  const projectId = params.id;
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div className="text-stone-300">Project not found</div>;
  }

  return (
    <>
      <PageSEO
        title={
          project.metaTitle.includes("Sadiq Salau")
            ? project.metaTitle
            : `${project.metaTitle} | Sadiq Salau`
        }
        description={project.metaDescription}
        images={project.images.map(
          (image) => new URL(image.src, window.location.origin).href
        )}
        keywords={[
          project.title,
          `${project.title} by Sadiq Salau`,
          ...(project.keywords || []),
          "Web Applications Portfolio",
          "PWA Developer Showcase",
        ]}
      />

      <ProjectView project={project} />
    </>
  );
}
