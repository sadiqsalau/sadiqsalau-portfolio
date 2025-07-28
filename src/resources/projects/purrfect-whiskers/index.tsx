import HyperLink from "../../../components/HyperLink";
import type { Project } from "../../../types/project";

export default {
  title: "Purrfect Whiskers",
  link: "https://github.com/purrfect-farmer/purrfect-whiskers/releases/latest",
  repo: "https://github.com/purrfect-farmer/purrfect-whiskers",
  tags: [
    "Electron",
    "Webview",
    "Multi-Account",
    "Telegram",
    "Automation",
    "Browser Isolation",
  ],
  description:
    "Electron app built to easily manage multiple Telegram accounts with full isolation and backup support.",
  overview: () => (
    <>
      <p>
        <strong>Purrfect Whiskers</strong> is a tool I built out of personal
        need — I was tired of launching Chrome five times just to run five
        Telegram accounts. This app makes that headache go away.
      </p>

      <p>
        It's a standalone Electron app that works hand-in-hand with{" "}
        <HyperLink target="_blank" href="https://purrfectfarmer.com">
          <strong>Purrfect Farmer</strong>
        </HyperLink>
        . You can add or create Telegram profiles easily, and view them all
        side-by-side — rows, columns, whatever fits your workflow. Each one runs
        in its own isolated <code>webview</code> partition with full session
        separation.
      </p>

      <p>
        One of the features I'm most proud of is the{" "}
        <strong>backup and restore</strong> system. You can back up everything —
        profiles, proxies, sessions — on one machine and restore it on another
        without losing anything. It just works.
      </p>

      <p>
        For anyone managing multiple Telegram accounts and looking for something{" "}
        <strong>clean and efficient</strong> — this is it. No bloat, no extra
        windows, just your accounts in one place, ready to go.
      </p>
    </>
  ),
} as Project;
