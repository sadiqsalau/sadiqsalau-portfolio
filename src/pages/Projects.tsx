import PageSEO from "../components/PageSEO";
import ProjectsList from "../components/ProjectsList";
import Section from "../components/Section";
import projects from "../resources/projects";

export default function Projects() {
  return (
    <>
      <PageSEO title="Projects" description="A list of my projects" />
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
