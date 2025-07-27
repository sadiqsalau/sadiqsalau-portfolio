import type { Project } from "../../../types/project";

export default {
  title: "Stellar Cargo",
  link: "https://stellar-cargo.pwabucket.com",
  repo: "https://github.com/pwabucket/pwa-stellar-cargo",
  tags: ["PWA", "Crypto Wallets", "Offline-First", "Stellar"],
  description:
    "Offline-first Stellar wallet with multi-wallet management and token split/merge features.",
  fullDescription:
    "Stellar Cargo is a Progressive Web App wallet built with the Stellar SDK, designed for managing multiple Stellar wallets efficiently.\n\nIt supports advanced token operations, including splitting tokens evenly across wallets or merging tokens from several wallets into one.\n\nI built Stellar Cargo to streamline a tedious process I personally faced — merging coins from different wallets without having to import each one manually and manage gas fees repeatedly.\n\nThe app is offline-first for privacy and speed, and includes encrypted Google Drive sync so you can securely access your wallets from any device.",
} as Project;
