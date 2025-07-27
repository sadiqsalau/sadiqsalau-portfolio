import {
  ColumnsPhotoAlbum,
  type ColumnsPhotoAlbumProps,
} from "react-photo-album";
import "react-photo-album/columns.css";
import { cn } from "../lib/utils";

type PhotoAlbumProps = ColumnsPhotoAlbumProps & {
  total?: number;
  photos: Array<{ src: string; width: number; height: number }>;
};

export const ProjectPhotoAlbum = ({
  total = 0,
  photos,
  ...props
}: PhotoAlbumProps) => (
  <ColumnsPhotoAlbum
    {...props}
    photos={photos}
    spacing={5}
    padding={0}
    render={{
      wrapper: ({ children, ...props }, { index }) => (
        <div {...props} className="relative overflow-hidden">
          {children}
          {/* Count */}
          {total > photos.length && index === photos.length - 1 ? (
            <div
              className={cn(
                "absolute inset-0 ",
                "bg-neutral-800/20 backdrop-blur-xs",
                "flex justify-center items-center",
                "text-white text-lg font-fredoka-one"
              )}
            >
              +{total - photos.length}
            </div>
          ) : null}
        </div>
      ),
    }}
  />
);
