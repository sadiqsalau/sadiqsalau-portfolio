import { LuMail, LuMouse, LuPhone } from "react-icons/lu";
import { Link as ScrollLink } from "react-scroll";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

import Button from "./Button";
import HeroProfilePicture from "../assets/images/hero-profile-picture.png?w=384&h=384&format=webp";
import contact from "../resources/contact";
import { cn } from "../lib/utils";

type ContactLinkButtonProps = React.ComponentPropsWithoutRef<"a"> & {
  icon: React.ComponentType<{ className?: string }>;
};

const ContactLinkButton = ({
  icon: Icon,
  ...props
}: ContactLinkButtonProps) => (
  <a
    {...props}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "size-10  rounded-full transition-colors",
      "flex items-center justify-center",
      "bg-neutral-700 text-green-500",
      "hover:bg-green-500 hover:text-black",
      "focus:bg-green-500 focus:text-black focus:outline-none",
      props.className
    )}
  >
    <Icon className="size-5" />
  </a>
);

const ContactLinks = () => (
  <div className="flex flex-wrap items-center gap-2 my-2">
    <ContactLinkButton title="Email" href={contact.email} icon={LuMail} />
    <ContactLinkButton
      title="LinkedIn"
      href={contact.linkedin}
      icon={SiLinkedin}
    />
    <ContactLinkButton
      title="WhatsApp"
      href={contact.whatsapp}
      icon={SiWhatsapp}
    />
    <ContactLinkButton title="Phone" href={contact.phone} icon={LuPhone} />
    <ContactLinkButton title="GitHub" href={contact.github} icon={SiGithub} />
  </div>
);

export default function Hero() {
  return (
    <div className="min-h-dvh flex flex-col gap-4 py-12 px-4 bg-stone-800">
      <div className="flex items-center grow mx-auto max-w-7xl">
        <div
          className={cn(
            "flex flex-col",
            "items-center justify-center gap-4",
            "md:items-start md:flex-row"
          )}
        >
          {/* Photo */}
          <img
            src={HeroProfilePicture}
            alt={"Sadiq Salau"}
            className="size-36 md:size-48 rounded-full shrink-0"
          />

          <div className="flex flex-col items-center gap-1 md:items-start">
            {/* Intro */}
            <h1 className="text-4xl text-center font-fredoka-one leading-snug tracking-tight">
              Hi, I'm{" "}
              <span className="inline-block text-green-500">Sadiq Salau</span>
            </h1>

            {/* Tagline */}
            <p className="text-sm uppercase tracking-wide text-stone-300 max-md:text-center">
              Software Engineer
            </p>

            {/* Description */}
            <p className="max-md:text-center">
              Building fast, offline-first apps with a strong focus on
              performance and UX.
            </p>

            {/* Contact Links */}
            <ContactLinks />

            {/* CTA Button */}
            <Button as={ScrollLink} smooth duration={1000} to="projects">
              View My Work
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <LuMouse className="animate-bounce size-10" strokeWidth="1" />
      </div>
    </div>
  );
}
