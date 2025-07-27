import path from "path-browserify";

import type { Project, ProjectImage } from "../../types/project";

const PROJECTS_ORDER = [
  "pwabucket",
  "purrfect-farmer",
  "keza",
  "kazeemtanimu",
  "twelvesquares",
  "stellar-cargo",
  "pluxscore",
  "emmanjoku",
  "kanak-food-global",
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

const icons = Object.entries(
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

const images = mapProjectImages(
  import.meta.glob("./*/screenshots/*", {
    eager: true,
    import: "default",
    query: {
      as: "metadata",
      format: "webp",
    },
  })
);

const previewImages = mapProjectImages(
  import.meta.glob("./*/screenshots/*", {
    eager: true,
    import: "default",
    query: {
      as: "metadata",
      format: "webp",
      withoutEnlargement: "",
      w: 350,
    },
  })
);

const projects = Object.entries(
  import.meta.glob("./*/index.ts", {
    eager: true,
    import: "default",
  }) as Record<string, Project>
)
  .map(([key, project]) => {
    const id = path.basename(path.dirname(key));

    return {
      ...project,
      id,
      icon: icons.get(id),
      images: images.get(id) || [],
      previewImages: previewImages.get(id) || [],
    };
  })
  .sort((a, b) => {
    const aIndex = PROJECTS_ORDER.indexOf(a.id);
    const bIndex = PROJECTS_ORDER.indexOf(b.id);
    return aIndex - bIndex;
  });

export default projects;
