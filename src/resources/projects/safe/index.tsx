import type { Project } from "../../../types/project";

export default {
  title: "Safe",
  link: "https://safe.pwabucket.com",
  repo: "https://github.com/pwabucket/pwa-safe",
  tags: ["PWA", "Sci-fi", "Encryption"],
  description: "Sci-fi themed app for encrypting secrets and sensitive data.",
  overview: () => (
    <>
      <p>
        <strong>Safe</strong> is a sci-fi–themed Progressive Web App built for
        encrypting and decrypting sensitive content — whether it’s plain text,
        images, or files.
      </p>

      <p>
        Everything works entirely offline for maximum privacy, with encryption
        handled directly in the browser so no data ever leaves your device.
      </p>

      <p>
        I designed it to feel futuristic, it's a practical tool for anyone who
        needs secure and portable encryption.
      </p>
      <p>
        The app is built with React, TypeScript, and Vite, uses AES-256-GCM for
        encryption.
      </p>
    </>
  ),
} as Project;
