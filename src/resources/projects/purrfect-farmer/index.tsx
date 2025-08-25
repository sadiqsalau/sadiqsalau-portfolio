import HyperLink from "../../../components/HyperLink";
import type { Project } from "../../../types/project";

export const project: Project = {
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

  metaTitle:
    "Purrfect Farmer - Telegram Mini App Automation & Multi-Account Farming",
  metaDescription:
    "Automate Telegram Mini Apps like Blum and Not Pixel with Purrfect Farmer. A Chrome extension for multi-account farming, browser bots, and cloud automation.",
  keywords: [
    "Purrfect Farmer",
    "Telegram automation",
    "Telegram bot farming",
    "Telegram mini app",
    "Chrome extension",
    "multi-account farming",
    "browser bot",
    "Blum farming",
    "Not Pixel farming",
    "Telegram airdrop automation",
    "Purrfect Whiskers",
    "Purrfect Fly",
  ],
  overview: () => (
    <>
      <p>
        <strong>Purrfect Farmer</strong> is hands down one of my most{" "}
        <strong>ambitious and loved 😍</strong> projects. It started as a simple
        idea — to automate Telegram airdrops like{" "}
        <HyperLink target="_blank" href="https://blum.io/">
          <strong>Blum</strong>
        </HyperLink>
        ,{" "}
        <HyperLink target="_blank" href="https://notpixel.org/">
          <strong>Not Pixel</strong>
        </HyperLink>{" "}
        etc. — but quickly grew into a full ecosystem of tools.
      </p>

      <p>
        I built the main Chrome extension to handle multi-account automation
        directly in the browser. It now supports parallel farming across Chrome
        profiles, with each profile running its own instance of the extension.
        This means you can farm multiple accounts simultaneously, all managed
        through a single interface.
      </p>
      <p>
        I've pushed over{" "}
        <HyperLink
          target="_blank"
          href="https://github.com/purrfect-farmer/purrfect-farmer/graphs/contributors"
        >
          100,000 lines of code
        </HyperLink>{" "}
        to this repo alone, not counting other tools like{" "}
        <HyperLink
          href="https://github.com/purrfect-farmer/purrfect-whiskers"
          target="_blank"
        >
          Purrfect Whiskers
        </HyperLink>
        , and{" "}
        <HyperLink
          href="https://github.com/purrfect-farmer/purrfect-fly"
          target="_blank"
        >
          Purrfect Fly
        </HyperLink>{" "}
        (for cloud farming).
      </p>

      <p>
        It's now a fully featured suite for automation. You can check out more
        at{" "}
        <HyperLink href="https://purrfectfarmer.com" target="_blank">
          purrfectfarmer.com
        </HyperLink>{" "}
        or{" "}
        <HyperLink href="https://t.me/purrfect_community" target="_blank">
          t.me/purrfect_community
        </HyperLink>
        .
      </p>
    </>
  ),
};

export default project;
