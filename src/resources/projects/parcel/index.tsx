import type { Project } from "../../../types/project";

export const project: Project = {
  title: "Parcel",
  link: "https://parcel.pwabucket.com",
  repo: "https://github.com/pwabucket/pwa-parcel",
  metaTitle: "Parcel – Split and Merge Tokens Easily",
  metaDescription:
    "Split tokens to multiple addresses or Merge tokens from multiple sources on any blockchain with Parcel.",
  keywords: ["Parcel"],
  tags: ["PWA", "Cryptocurrency", "Offline-First"],
  description: "Tokens split and merge made easy.",
  overview: () => (
    <>
      <p>
        <strong>Parcel</strong> is a versatile Progressive Web Application (PWA)
        that simplifies the process of splitting and merging tokens across
        various blockchains.
      </p>
      <p>
        Whether you need to distribute tokens to multiple addresses or
        consolidate tokens from various sources, Parcel provides an intuitive
        interface and robust functionality to get the job done efficiently.
      </p>
      <p>
        Built with <strong>React</strong>, <strong>TailwindCSS</strong> and
        various <strong>blockchain APIs</strong>.
      </p>
    </>
  ),
};

export default project;
