import HyperLink from "../../../components/HyperLink";
import type { Project } from "../../../types/project";

export const project: Project = {
  title: "Tracker",
  link: "https://tracker.pwabucket.com",
  repo: "https://github.com/pwabucket/pwa-tracker",
  metaTitle: "Tracker – Investment Portfolio PWA",
  metaDescription:
    "Tracker helps users monitor investments and returns in real time, with a clean PWA interface and offline support.",
  keywords: [
    "Tracker",
    "Investment Tracker PWA",
    "Portfolio Tracker App",
    "Financial PWA",
  ],
  tags: ["PWA", "Investment Tracker", "Offline-First"],
  description:
    "A simple offline-capable PWA to help track and simulate investments over time.",
  overview: () => (
    <>
      <p>
        I built <strong>Tracker</strong> to help a friend who wanted to monitor
        his investments but wasn't comfortable running scripts like I do. So I
        made something visual — a simple, browser-based app.
      </p>

      <p>
        It allows you to log daily investments, track progress, and simulate
        future returns with ease. The built-in calendar makes navigation
        effortless, and you can pick any date to see how things play out over
        time.
      </p>

      <p>
        It also has support for Google Drive Sync just like{" "}
        <HyperLink target="_blank" href="https://stellar-cargo.pwabucket.com">
          Stellar Cargo
        </HyperLink>
        .
      </p>

      <p>
        Like every PWA on <strong>PWABucket</strong>, I built this solo —
        keeping it lightweight, offline-first, and focused on usability for
        non-technical users.
      </p>

      <p>
        Built with <strong>React</strong> and <strong>TailwindCSS</strong>.
      </p>
    </>
  ),
};

export default project;
