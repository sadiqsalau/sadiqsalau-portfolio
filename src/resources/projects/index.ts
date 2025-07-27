import type { Project } from "../../types/project";

const projects: Project[] = Object.values(
  import.meta.glob("./*/index.ts", {
    eager: true,
    import: "default",
  })
);

export default projects;
