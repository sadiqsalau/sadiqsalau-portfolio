import HyperLink from "../../../components/HyperLink";
import type { Project } from "../../../types/project";

export default {
  title: "Pluxscore",
  link: "https://pluxscore.com.ng",
  tags: ["Client", "React", "Laravel", "PWA", "Real-time"],
  description: "All-in-one social platform for sports fans.",
  overview: () => (
    <>
      <p>
        <strong>Pluxscore</strong> is a progressive web app built for sports
        fans — offering live scores, match highlights, real-time chat, and
        social features in one place. It was developed under{" "}
        <HyperLink target="_blank" href="https://pluxmedianetwork.com.ng">
          <strong>Plux Media Network</strong>
        </HyperLink>
        .
      </p>

      <p>
        This project has played a big role in my growth 🫡 as a Software
        Engineer. I <strong>rebuilt it multiple times</strong> over the years —
        from <strong>raw PHP</strong> to <strong>CodeIgniter</strong>, and
        finally to <strong>React and Laravel</strong> — each version reflecting
        a new phase of learning and improvement.
      </p>

      <p>
        For the livestream feature, I used <strong>Node.js</strong> to handle
        issues with CORS when streaming video from multiple sources.
      </p>

      <p>
        I also built a custom package (
        <HyperLink
          href="https://www.npmjs.com/package/express-soketi"
          target="_blank"
        >
          express-soketi
        </HyperLink>
        ) to be able to use{" "}
        <HyperLink href="https://docs.soketi.app/" target="_blank">
          soketi
        </HyperLink>{" "}
        on cPanel Hosting. This was necessary to be able to use{" "}
        <HyperLink
          href="https://laravel.com/docs/10.x/broadcasting"
          target="_blank"
        >
          Laravel Echo
        </HyperLink>
        .
      </p>

      <p>
        I handled everything from backend to frontend. It runs as a PWA,
        optimized for mobile, though not fully offline.
      </p>
    </>
  ),
} as Project;
