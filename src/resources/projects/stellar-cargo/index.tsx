import HyperLink from "../../../components/HyperLink";
import type { Project } from "../../../types/project";

export default {
  title: "Stellar Cargo",
  link: "https://stellar-cargo.pwabucket.com",
  repo: "https://github.com/pwabucket/pwa-stellar-cargo",
  tags: ["PWA", "Crypto Wallets", "Offline-First", "Stellar"],
  description:
    "Offline-first Stellar wallet with multi-wallet management and token split/merge features.",
  overview: () => (
    <>
      <p>
        Stellar Cargo is the first Progressive Web App I officially published on{" "}
        <HyperLink target="_blank" href="https://pwabucket.com">
          PWABucket
        </HyperLink>
        —and the first to get real installs from friends and the{" "}
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
    </>
  ),
} as Project;
