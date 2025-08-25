import type { Project } from "../../../types/project";

export const project: Project = {
  title: "Safe",
  link: "https://safe.pwabucket.com",
  repo: "https://github.com/pwabucket/pwa-safe",
  tags: ["PWA", "Sci-fi", "Encryption"],
  description: "Sci-fi themed app for encrypting secrets and sensitive data.",

  metaTitle:
    "Safe - Sci-Fi Themed PWA for Encrypting Secrets and Sensitive Data",
  metaDescription:
    "Safe is a sci-fi styled Progressive Web App for encrypting and decrypting text, images, and files. Built with React and Vite, it runs entirely offline with AES-256-GCM encryption for maximum privacy.",
  keywords: [
    "Safe",
    "encryption PWA",
    "sci-fi app",
    "encrypt files offline",
    "AES-256-GCM encryption",
    "privacy focused app",
    "secure PWA",
    "offline encryption tool",
  ],

  overview: () => (
    <>
      <p>
        <strong>Safe</strong> is a sci-fi-themed Progressive Web App built for
        encrypting and decrypting sensitive content — whether it's plain text,
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
};

export default project;
