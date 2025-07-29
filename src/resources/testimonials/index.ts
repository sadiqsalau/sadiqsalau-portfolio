import type { Testimonial } from "../../types/testimonial";

export default Object.values(
  import.meta.glob("./*/index.ts", {
    eager: true,
    import: "default",
  })
) as Testimonial[];
