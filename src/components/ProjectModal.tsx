import "yet-another-react-lightbox/styles.css";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import type { ClickHandler, Photo } from "react-photo-album";
import type { DialogProps } from "@headlessui/react";
import { ErrorBoundary } from "react-error-boundary";
import { useLocation, useNavigate } from "react-router";

import ProjectModalContainer from "./ProjectModalContainer";
import ProjectModalHeader from "./ProjectModalHeader";
import useNavigateBack from "../hooks/useNavigateBack";
import type { Project } from "../types/project";
import { ProjectPhotoAlbum } from "./ProjectPhotoAlbum";
import { cn } from "../lib/utils";

interface ProjectModalProps extends DialogProps {
  project: Project;
}

export default function ProjectModal({ project, ...props }: ProjectModalProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const navigateBack = useNavigateBack();
  const currentImageIndex = location.state?.image ?? -1;
  const showLightbox = currentImageIndex >= 0;

  const openLightbox: ClickHandler<Photo> = ({ index }) => {
    navigate(location, {
      replace: false,
      state: { ...location.state, image: index },
    });
  };

  return (
    <>
      <ProjectModalContainer {...props}>
        <ProjectModalHeader project={project} />

        {/* Overview */}
        {project.overview ? (
          <p
            className={cn(
              "p-4 rounded-xl",
              "bg-stone-800",
              "whitespace-pre-line"
            )}
          >
            {typeof project.overview === "function"
              ? project.overview()
              : project.overview}
          </p>
        ) : null}

        {/* Photos */}
        <ErrorBoundary
          fallback={<div className="text-red-500">Error loading photos</div>}
        >
          {project.previewImages?.length ? (
            <ProjectPhotoAlbum
              photos={project.previewImages}
              onClick={openLightbox}
            />
          ) : null}
        </ErrorBoundary>

        {/* Lightbox */}
        <Lightbox
          open={showLightbox}
          index={currentImageIndex}
          close={() => navigateBack()}
          slides={project.images}
          plugins={[Zoom]}
          animation={{
            fade: 0,
          }}
        />
      </ProjectModalContainer>
    </>
  );
}
