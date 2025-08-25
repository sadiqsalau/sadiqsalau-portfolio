import PageSEO from "../components/PageSEO";
import ProjectsList from "../components/ProjectsList";
import Section from "../components/Section";
import projects from "../resources/projects";

export default function Projects() {
  return (
    <>
      <PageSEO
        title="Projects by Sadiq Salau - Web Applications & PWAs"
        description="A curated showcase of web applications and PWAs developed by Sadiq Salau, highlighting performance, UX, and offline-first readiness."
        keywords={[
          "Sadiq Salau Projects",
          "Web Applications Portfolio",
          "PWA Developer Showcase",
          "Software Engineer Abuja",
          "Sadiq Salau Portfolio",
        ]}
      />
      <Section title="Projects">
        <p className="text-stone-300">
          This is a list of my projects. You can browse through them to see the
          work I've done.
        </p>
        <ProjectsList projects={projects} />
      </Section>
    </>
  );
}
