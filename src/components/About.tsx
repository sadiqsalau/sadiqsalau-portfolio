import { LuSparkles } from "react-icons/lu";

import AboutProfilePicture from "../assets/images/about-profile-picture.jpg?w=1000&format=webp";
import Section from "./Section";

export default function About() {
  return (
    <Section title="About Me">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <p>
            I'm a self-taught full-stack web developer based in 🇳🇬 Nigeria with
            several years of experience building fast, offline-first web
            applications. I specialize in React, Laravel, and Node.js (Fastify),
            and I care deeply about performance, accessibility, and clean code.
          </p>

          <p>
            Though I don't have a formal degree, I've relentlessly studied, read
            dozens of technical books, and built real-world projects from
            scratch. While most of my projects were built manually, I now also
            leverage <LuSparkles className="inline-flex size-4" /> AI tools like
            GitHub Copilot for code and Bolt/Lovable for no-code workflows —
            helping me move faster without compromising quality.
          </p>

          <p>
            Whether it's a custom backend, interactive frontend, or lightweight
            PWA, I aim to deliver reliable, maintainable solutions that just
            work — even offline.
          </p>
        </div>
        <img
          src={AboutProfilePicture}
          alt="Sadiq Salau"
          className="bg-white object-contain object-bottom-right"
        />
      </div>
    </Section>
  );
}
