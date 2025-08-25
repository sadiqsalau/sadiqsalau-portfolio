import HyperLink from "../../../components/HyperLink";
import type { Project } from "../../../types/project";

export const project: Project = {
  title: "Mochi",
  link: "https://sadiqsalau.github.io/mochi",
  repo: "https://github.com/sadiqsalau/mochi",
  tags: ["PWA", "Template", "Chat App"],
  description: "A chat app React Template.",

  metaTitle: "Mochi - React Chat App Template with TailwindCSS & PWA",
  metaDescription:
    "Mochi is a clean and minimal chat app template built with React and TailwindCSS. Fully responsive, PWA-ready, and perfect for modern messaging UI projects.",
  keywords: [
    "React Chat App Template",
    "TailwindCSS Chat UI",
    "PWA Chat App",
    "Mochi Chat Template",
    "React Messaging App",
    "Chat UI Kit React",
    "Responsive Chat App Design",
    "Sadiq Salau Projects",
  ],
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
};

export default project;
