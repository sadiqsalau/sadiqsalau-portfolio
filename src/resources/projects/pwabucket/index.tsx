import HyperLink from "../../../components/HyperLink";
import type { Project } from "../../../types/project";

export const project: Project = {
  title: "PWABucket",
  link: "https://pwabucket.com",
  repo: "https://github.com/pwabucket/pwabucket",
  tags: ["PWA", "Offline-First", "App Store"],
  description: "Progressive Web App Store for offline-first apps.",
  metaTitle: "PWABucket - Progressive Web App Store for Offline-First Apps",
  metaDescription:
    "PWABucket is an open-source app store for Progressive Web Apps (PWAs). Discover and explore offline-first apps that prioritize privacy and seamless performance without native installs.",
  keywords: [
    "PWABucket",
    "Progressive Web App Store",
    "PWA apps",
    "offline-first apps",
    "privacy focused apps",
    "open-source PWA store",
    "React PWA",
    "GitHub Pages app store",
  ],

  overview: () => (
    <>
      <p>
        <strong>PWABucket</strong> is an open-source app store dedicated to
        Progressive Web Apps — built to spotlight tools that run offline,
        prioritize privacy, and deliver a seamless experience without needing a
        native install.
      </p>

      <p>
        I've had the idea since 2023, but it fully took shape when I began
        releasing my own apps like{" "}
        <HyperLink target="_blank" href="https://keza.pwabucket.com">
          <strong>Keza</strong>
        </HyperLink>{" "}
        and{" "}
        <HyperLink target="_blank" href="https://stellar-cargo.pwabucket.com">
          <strong>Stellar Cargo</strong>
        </HyperLink>
        . Every PWA I build now gets published here under the{" "}
        <HyperLink target="_blank" href="https://github.com/pwabucket">
          <strong>PWABucket</strong>
        </HyperLink>{" "}
        GitHub organization.
      </p>

      <p>
        It's a personal platform to unify, showcase, and maintain all my
        offline-first work in one place.
      </p>

      <p>
        For this, I used <strong>React</strong> and <strong>TailwindCSS</strong>{" "}
        primarily, there's no backend involved. The app is fully static and
        hosted on GitHub Pages.
      </p>
    </>
  ),
};

export default project;
