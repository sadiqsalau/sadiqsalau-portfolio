import { Link, NavLink } from "react-router";
import { LuMail, LuPhone } from "react-icons/lu";
import { SiGithub, SiTelegram, SiWhatsapp, SiX } from "react-icons/si";

import Button from "./Button";
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
      props.className,
    )}
  >
    <Icon className="size-5" />
  </a>
);

const ContactLinks = () => (
  <div className="flex flex-wrap justify-center items-center gap-2 my-2">
    <ContactLinkButton title="GitHub" href={contact.github} icon={SiGithub} />
    <ContactLinkButton title="Email" href={contact.email} icon={LuMail} />
    <ContactLinkButton
      title="WhatsApp"
      href={contact.whatsapp}
      icon={SiWhatsapp}
    />
    <ContactLinkButton title="X" href={contact.x} icon={SiX} />
    <ContactLinkButton
      title="Telegram"
      href={contact.telegram}
      icon={SiTelegram}
    />
    <ContactLinkButton title="Phone" href={contact.phone} icon={LuPhone} />
  </div>
);

const HeroLink = (props: React.ComponentProps<typeof NavLink>) => (
  <NavLink
    {...props}
    className={({ isActive }) =>
      cn(
        " uppercase",
        isActive
          ? "text-green-500 font-bold"
          : "text-stone-300 hover:underline hover:text-green-400",
      )
    }
  />
);

export default function Hero() {
  return (
    <div className="min-h-dvh flex flex-col gap-4 p-8 bg-stone-800">
      <div className="flex items-center grow mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-1 md:items-start">
          {/* Intro */}
          <h1 className="text-center font-fredoka-one leading-snug tracking-tight">
            <span className="inline-block text-green-500 text-8xl">
              Sadiq Salau
            </span>
          </h1>
          {/* Tagline */}
          <p className="text-sm uppercase tracking-wide text-stone-300 max-md:text-center">
            Software Engineer
          </p>
          {/* Description */}
          <p className="max-md:text-center">
            Building fast, offline-first apps with a strong focus on performance
            and UX.
          </p>
          {/* Contact Links */}
          <ContactLinks />
          {/* CTA Button */}
          <Button as={Link} to="/projects">
            View My Work
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {/* Navigation Links */}
        <HeroLink to="/">Home</HeroLink>
        <HeroLink to="/about">About</HeroLink>
        <HeroLink to="/projects">Projects</HeroLink>
        <HeroLink to="/contact">Contact</HeroLink>
      </div>
    </div>
  );
}
