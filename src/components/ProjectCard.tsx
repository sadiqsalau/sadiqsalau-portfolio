import { Link, useLocation } from "react-router";

import ProjectModal from "./ProjectModal";
import ProjectTags from "./ProjectTags";
import useNavigateBack from "../hooks/useNavigateBack";
import type { Project } from "../types/project";
import { ProjectPhotoAlbum } from "./ProjectPhotoAlbum";
import { cn } from "../lib/utils";

const MAX_IMAGES_PREVIEW = 3;
const MAX_IMAGES_COLUMN = 2;

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const navigateBack = useNavigateBack();
  const location = useLocation();
  const modalIsOpened = project.id === location.state?.project;

  return (
    <>
      <Link
        replace={false}
        to={location}
        state={{
          ...location.state,
          project: project.id,
        }}
        className={cn(
          "bg-stone-800",
          "border border-transparent hover:border-green-500",
          "rounded-lg p-4",
          "flex flex-col gap-2",
          "cursor-pointer"
        )}
      >
        <div className="flex gap-2.5">
          {/* Icon */}
          <img
            src={project.icon}
            alt={project.title}
            className="w-10 h-10 rounded-md flex-none"
          />
          {/* Details */}
          <div className="min-w-0 flex-1 flex flex-col gap-1.5">
            <h4 className="font-fredoka-one">{project.title}</h4>

            {/* Description */}
            <p className="text-sm text-stone-300">{project.description}</p>

            {/* Tags */}
            <ProjectTags tags={project.tags} />
          </div>
        </div>

        {/* Photos */}
        {project.previewImages?.length ? (
          <ProjectPhotoAlbum
            total={project.previewImages.length}
            photos={project.previewImages.slice(0, MAX_IMAGES_PREVIEW)}
            columns={Math.min(MAX_IMAGES_COLUMN, project.previewImages.length)}
          />
        ) : null}
      </Link>

      <ProjectModal
        project={project}
        open={modalIsOpened}
        onClose={() => navigateBack()}
      />
    </>
  );
}
