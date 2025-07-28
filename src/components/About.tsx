import AboutProfilePicture from "../assets/images/about-profile-picture.jpg?w=1000&format=webp";
import Section from "./Section";

export default function About() {
  return (
    <Section title="About Me">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <p>
            I'm a self-taught Software Engineer based in 🇳🇬 Nigeria with several
            years of experience building software applications. I care deeply
            about performance, accessibility, and clean code.
          </p>

          <p>
            Though I don't have a formal degree in Computer Science, I've gained
            a strong knowledge base through relentless self-study. I've studied
            programming paradigms, read in-depth official documentation on
            various programming languages, followed course-like structures
            across languages and frameworks, and built real-world projects from
            the ground up.
          </p>

          <p>
            I specialize in building a variety of apps — from desktop
            applications and progressive web apps to Chrome extensions and
            application backends.
          </p>

          <p>
            While my primary focus is on application development, I've also
            designed and built a few standalone websites. These were mostly
            client projects, where I applied the same principles of performance,
            simplicity, and attention to detail.
          </p>

          <p>
            Whether it's a custom backend, interactive frontend, or lightweight{" "}
            <a
              title="Progressive Web App"
              target="_blank"
              href="https://en.wikipedia.org/wiki/Progressive_web_app"
              className="text-green-500 hover:underline"
            >
              PWA
            </a>
            , I aim to deliver reliable, maintainable solutions that just work —
            even offline.
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
