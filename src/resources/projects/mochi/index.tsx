import HyperLink from "../../../components/HyperLink";
import type { Project } from "../../../types/project";

export default {
  title: "Mochi",
  link: "https://sadiqsalau.github.io/mochi",
  repo: "https://github.com/sadiqsalau/mochi",
  tags: ["PWA", "Template", "Chat App"],
  description: "A chat app React Template.",
  overview: () => (
    <>
      <p>
        I came across the{" "}
        <HyperLink
          target="_blank"
          href="https://www.sketchappsources.com/free-source/2893-mochi-chat-ui-kit-app-sketch-freebie-resource.html"
        >
          Mochi Chat UI Kit
        </HyperLink>{" "}
        and immediately wanted to recreate it. The clean, minimal design caught
        my attention, and I saw it as a great opportunity to build a
        fully-responsive chat UI template.
      </p>

      <p>
        This version was built using <strong>React</strong> and{" "}
        <strong>TailwindCSS</strong>, with offline support baked in as a PWA.
      </p>
    </>
  ),
} as Project;
