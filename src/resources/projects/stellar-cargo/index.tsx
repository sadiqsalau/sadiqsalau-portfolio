import HyperLink from "../../../components/HyperLink";
import type { Project } from "../../../types/project";

export const project: Project = {
  title: "Stellar Cargo",
  link: "https://stellar-cargo.pwabucket.com",
  repo: "https://github.com/pwabucket/pwa-stellar-cargo",
  tags: ["PWA", "Crypto Wallets", "Offline-First", "Stellar"],
  description:
    "Offline-first Stellar wallet with multi-wallet management and token split/merge features.",

  metaTitle: "Stellar Cargo – Offline-First Stellar Wallet PWA",
  metaDescription:
    "Stellar Cargo is an offline-first Stellar wallet Progressive Web App. Manage multiple wallets, view total balances, split and merge tokens, and sync securely with Google Drive.",
  keywords: [
    "Stellar Cargo",
    "Stellar wallet PWA",
    "crypto wallet Progressive Web App",
    "offline-first wallet",
    "multi-wallet management",
    "token split merge Stellar",
    "privacy focused crypto wallet",
    "React Stellar SDK",
  ],

  overview: () => (
    <>
      <p>
        <strong>Stellar Cargo</strong> is the first Progressive Web App I
        officially published on{" "}
        <HyperLink target="_blank" href="https://pwabucket.com">
          PWABucket
        </HyperLink>
        — and the first to get real installs from friends and the{" "}
        <HyperLink target="_blank" href="https://purrfectfarmer.com">
          Purrfect Farmer
        </HyperLink>{" "}
        community.
      </p>

      <p>
        I built it out of necessity. Managing multiple Stellar wallets manually
        was frustrating 🫩, and I wanted a way to view my total balance across
        all of them, merge or split tokens with a tap, and avoid repetitive
        import steps.
      </p>

      <p>
        The response was validating—it proved there was demand, and it gave me
        the motivation to keep creating more offline-first PWAs for real-world
        problems.
      </p>

      <p>
        It supports multiple wallets, token splitting and merging, and works
        fully offline. You can also sync your data to Google Drive for backup .
      </p>

      <p>
        It was built with <strong>React</strong>, <strong>TailwindCSS</strong>{" "}
        and{" "}
        <HyperLink target="_blank" href="https://developers.stellar.org/">
          <strong>Stellar SDK</strong>
        </HyperLink>
        .
      </p>
    </>
  ),
};

export default project;
