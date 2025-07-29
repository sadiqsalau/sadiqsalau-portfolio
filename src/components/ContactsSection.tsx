import { LuMail, LuPhone } from "react-icons/lu";
import { SiGithub, SiInstagram, SiLinkedin, SiWhatsapp } from "react-icons/si";

import Section from "./Section";
import SectionHeading from "./SectionHeading";
import contact from "../resources/contact";
import { cn } from "../lib/utils";

type ContactLinkButtonProps = React.ComponentPropsWithoutRef<"a"> & {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
};

const ContactLinkButton = ({
  icon: Icon,
  title,
  ...props
}: ContactLinkButtonProps) => (
  <a
    {...props}
    target="_blank"
    rel="noopener noreferrer"
    className={cn(
      "px-4 py-2 rounded-full transition-colors",
      "flex items-center justify-center gap-2",
      "bg-neutral-800 text-green-500",
      "hover:bg-green-500 hover:text-black",
      "focus:bg-green-500 focus:text-black focus:outline-none",
      props.className
    )}
  >
    <Icon className="size-5" /> {title}
  </a>
);

export default function ContactsSection() {
  return (
    <Section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <SectionHeading>Get in Touch</SectionHeading>
          <p>
            Got a project in mind or want to collaborate? Let's get in touch.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <ContactLinkButton
              title="Email"
              href={contact.email}
              icon={LuMail}
            />
            <ContactLinkButton
              title="LinkedIn"
              href={contact.linkedin}
              icon={SiLinkedin}
            />
            <ContactLinkButton
              title="Instagram"
              href={contact.instagram}
              icon={SiInstagram}
            />

            <ContactLinkButton
              title="WhatsApp"
              href={contact.whatsapp}
              icon={SiWhatsapp}
            />
            <ContactLinkButton
              title="Phone"
              href={contact.phone}
              icon={LuPhone}
            />
            <ContactLinkButton
              title="GitHub"
              href={contact.github}
              icon={SiGithub}
            />
          </div>
        </div>
        <div className="bg-green-500 text-black p-4 flex flex-col items-start gap-2">
          <p>
            I've had the chance to work on a range of projects and learn a lot
            along the way. If you'd like to know more, my resume is just below.
          </p>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-block px-4 py-2 rounded-full bg-black text-green-500 hover:bg-stone-800"
            )}
          >
            View Resume
          </a>
        </div>
      </div>
    </Section>
  );
}
