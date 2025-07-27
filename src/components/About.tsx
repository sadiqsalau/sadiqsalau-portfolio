import { LucideSparkles } from "lucide-react";

import Section from "./Section";

export default function About() {
  return (
    <Section title="About Me">
      <p>
        I'm a self-taught full-stack web developer based in 🇳🇬 Nigeria with
        several years of experience building fast, offline-first web
        applications. I specialize in React, Laravel, and Node.js (Fastify), and
        I care deeply about performance, accessibility, and clean code.
      </p>

      <p>
        Though I don't have a formal degree, I've relentlessly studied, read
        dozens of technical books, and built real-world projects from scratch.
        While most of my projects were built manually, I now also leverage{" "}
        <LucideSparkles className="inline-flex size-4" /> AI tools like GitHub
        Copilot for code and Bolt/Lovable for no-code workflows — helping me
        move faster without compromising quality.
      </p>

      <p>
        Whether it's a custom backend, interactive frontend, or lightweight PWA,
        I aim to deliver reliable, maintainable solutions that just work — even
        offline.
      </p>
    </Section>
  );
}
