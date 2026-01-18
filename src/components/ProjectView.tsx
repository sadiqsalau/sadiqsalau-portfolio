import "yet-another-react-lightbox/styles.css";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import type { ClickHandler, Photo } from "react-photo-album";
import { ErrorBoundary } from "react-error-boundary";
import { useLocation, useNavigate } from "react-router";

import ProjectHeader from "./ProjectHeader";
import useNavigateBack from "../hooks/useNavigateBack";
import type { Project } from "../types/project";
import { ProjectPhotoAlbum } from "./ProjectPhotoAlbum";

interface ProjectViewProps {
  project: Project;
}

export default function ProjectView({ project }: ProjectViewProps) {
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
    <div className="flex flex-col gap-4">
      <ProjectHeader project={project} />

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
    </div>
  );
}
