import React from "react";
import type { ClassValue } from "clsx";

import SectionHeading from "./SectionHeading";
import { cn } from "../lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  title?: string;
  children: React.ReactNode;
  className?: ClassValue;
};

export default function Section({ title, children, ...props }: SectionProps) {
  return (
    <section {...props} className={cn("flex flex-col gap-4", props.className)}>
      {title && <SectionHeading>{title}</SectionHeading>}
      {children}
    </section>
  );
}
