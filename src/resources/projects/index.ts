import path from "path-browserify";

import type { Project, ProjectImage } from "../../types/project";

export const FEATURED_PROJECTS_IDS = [
  "pluxscore",
  "purrfect-farmer",
  "pwabucket",
  "kazeemtanimu",
  "twelvesquares",
  "keza",
  "laravel-otp",
  "stellar-cargo",
  "mochi",
];

const mapProjectImages = (entries: Record<string, ProjectImage>) =>
  Object.entries(entries).reduce((result, [k, v]) => {
    const id = path.basename(path.dirname(path.dirname(k)));

    if (!result.has(id)) {
      result.set(id, []);
    }

    result.get(id)?.push(v);

    return result;
  }, new Map() as Map<string, ProjectImage[]>);

export const projectsIcon = Object.entries(
  import.meta.glob("./*/*.png", {
    eager: true,
    import: "default",
    query: {
      w: 80,
      h: 80,
      format: "webp",
    },
  }) as Record<string, string>
).reduce((result, [k, v]) => {
  result.set(path.basename(path.dirname(k)), v);
  return result;
}, new Map() as Map<string, string>);

export const projectsImages = mapProjectImages(
  import.meta.glob("./*/screenshots/*", {
    eager: true,
    import: "default",
    query: {
      as: "metadata",
      format: "webp",
    },
  })
);

export const projectsPreviewImages = mapProjectImages(
  import.meta.glob("./*/screenshots/*", {
    eager: true,
    import: "default",
    query: {
      as: "metadata",
      format: "webp",
      withoutEnlargement: "",
      w: 700,
    },
  })
);

const projects = Object.entries(
  import.meta.glob("./*/index.{ts,tsx}", {
    eager: true,
    import: "default",
  }) as Record<string, Project>
)
  .map(([key, project]) => {
    const id = path.basename(path.dirname(key));

    return {
      ...project,
      id,
      icon: projectsIcon.get(id),
      images: projectsImages.get(id) || [],
      previewImages: projectsPreviewImages.get(id) || [],
    };
  })
  .sort((a, b) => {
    const aIndex = FEATURED_PROJECTS_IDS.indexOf(a.id);
    const bIndex = FEATURED_PROJECTS_IDS.indexOf(b.id);

    const aRank = aIndex === -1 ? Infinity : aIndex;
    const bRank = bIndex === -1 ? Infinity : bIndex;

    return aRank - bRank;
  });

export const featuredProjects = projects.filter((item) =>
  FEATURED_PROJECTS_IDS.includes(item.id)
);

export default projects;
