import icon from "./icon.png?w=80&h=80&format=webp";
import type { Project } from "../../../types/project";

export default {
  icon,
  id: "purrfect-farmer",
  title: "Purrfect Farmer",
  link: "https://purrfectfarmer.com",
  repo: "https://github.com/purrfect-farmer/purrfect-farmer",
  tags: [
    "Chrome Extension",
    "Telegram Mini App",
    "Automation",
    "Multi-Account",
    "Browser Bot",
  ],
  description:
    "Advanced Telegram Mini App automation with seamless multi-account farming.",
  fullDescription:
    "Purrfect Farmer is a Chrome extension that automates interactions with Telegram Mini Apps directly in the browser. Built for users who manage multiple farming accounts, it runs seamlessly in parallel tabs without requiring constant attention. Designed for speed and stability, it's ideal for automating repetitive tasks across multiple bots with minimal setup.",
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
