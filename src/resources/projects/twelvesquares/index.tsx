import HyperLink from "../../../components/HyperLink";
import type { Project } from "../../../types/project";

export default {
  title: "Twelvesquares",
  link: "https://twelvesquares.net",
  tags: ["Client Work", "React", "Laravel", "Web Development"],
  description: "Corporate website for a tech and security services firm.",
  overview: () => (
    <>
      <p>
        I've worked with{" "}
        <HyperLink target="_blank" href="https://twelvesquares.net">
          <strong>Twelvesquares</strong>
        </HyperLink>{" "}
        on a bunch of projects, so when it came time to build their own site, I
        wanted it to stand out.
      </p>

      <p>
        I used <strong>React, TailwindCSS and Laravel</strong> to build
        everything from scratch — no themes, no shortcuts. The design you see on
        the site was <strong>handcrafted by me</strong>, tailored to reflect
        their brand and the work they do across tech and security in Africa.
      </p>

      <p>
        It's responsive, fast, and optimized for SEO — but more than that, it's
        clean, straight to the point, and does exactly what it needs to do.
      </p>
    </>
  ),
} as Project;
