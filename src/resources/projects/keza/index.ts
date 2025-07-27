import icon from "./icon.png?w=80&h=80&format=webp";
import type { Project } from "../../../types/project";

export default {
  icon,
  id: "keza",
  title: "Keza",
  link: "https://keza.pwabucket.com",
  repo: "https://github.com/pwabucket/pwa-keza",
  tags: [
    "PWA",
    "Crypto Wallets",
    "Offline-First",
    "EVM",
    "Solana",
    "TON",
    "Mnemonic",
  ],
  description:
    "Offline PWA for generating EVM, Solana, TON wallets and 12/24-word mnemonics with multi-format export.",
  fullDescription:
    "Keza is a fully offline Progressive Web App that enables you to generate multiple cryptocurrency wallets, including EVM-compatible, Solana, and TON wallets. It also supports creating secure 12- and 24-word mnemonics. Generate large batches effortlessly and export your wallets in JSON, TXT, CSV, or XLS formats — all without any internet connection, ensuring maximum privacy and security.",
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
