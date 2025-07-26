import HeroProfilePicture from "../assets/images/hero-profile-picture.png?w=384&h=384&format=webp";
import { cn } from "../lib/utils";

export default function Hero() {
  return (
    <div className="min-h-dvh flex flex-col gap-4 p-4">
      <div className="flex items-center grow">
        <div className="p-4 mx-auto max-w-7xl">
          <div
            className={cn(
              "flex flex-col",
              "items-center justify-center gap-3",
              "md:items-start md:flex-row"
            )}
          >
            {/* Photo */}
            <img
              src={HeroProfilePicture}
              alt={"Sadiq Salau"}
              className="size-36 md:size-48 rounded-full shrink-0"
            />

            <div className="flex flex-col items-center gap-2 md:items-start">
              {/* Intro */}
              <h1 className="text-4xl text-center font-fredoka-one leading-snug tracking-tight">
                Hi, I'm{" "}
                <span className="inline-block text-green-500">Sadiq Salau</span>
              </h1>

              {/* Tagline */}
              <p className="text-sm uppercase tracking-wide text-stone-300 max-md:text-center">
                Full-stack Web Developer • PWA Enthusiast • Laravel + React
              </p>

              {/* Description */}
              <p className="max-md:text-center">
                Self-taught web developer focused on building fast,
                offline-first apps using React, Laravel, and modern web tools.
              </p>

              {/* CTA Button */}
              <a
                href="#projects"
                className={cn(
                  "bg-green-500 text-black px-4 py-2",
                  "hover:bg-green-600 transition-colors",
                  "focus:outline-none focus:ring-2 focus:ring-green-700"
                )}
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
