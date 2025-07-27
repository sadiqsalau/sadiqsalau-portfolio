import icon from "./icon.png?w=80&h=80&format=webp";
import type { Project } from "../../../types/project";

export default {
  icon,
  id: "stellar-cargo",
  title: "Stellar Cargo",
  link: "https://stellar-cargo.pwabucket.com",
  repo: "https://github.com/pwabucket/pwa-stellar-cargo",
  tags: ["PWA", "Crypto Wallets", "Offline-First", "Stellar"],
  description:
    "Offline-first Stellar wallet with multi-wallet management and token split/merge features.",
  fullDescription:
    "Stellar Cargo is a Progressive Web App wallet built with the Stellar SDK, designed for managing multiple Stellar wallets with ease. It supports advanced token management features such as splitting tokens evenly across multiple wallets or merging tokens from various wallets into a single one. Built as an offline-first app, Stellar Cargo ensures you retain full control and privacy over your assets without needing a constant internet connection.",
  images: Object.values(
    import.meta.glob("./screenshots/*", {
      eager: true,
      import: "default",
      query: {
        as: "metadata",
        format: "webp",
      },
    })
  ),
  previewImages: Object.values(
    import.meta.glob("./screenshots/*", {
      eager: true,
      import: "default",
      query: {
        as: "metadata",
        format: "webp",
        withoutEnlargement: "",
        w: 350,
      },
    })
  ),
} as Project;
