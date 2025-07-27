import React from "react";
import type { ClassValue } from "clsx";

import { cn } from "../lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  title: string;
  children: React.ReactNode;
  className?: ClassValue;
};

export default function Section({ title, children, ...props }: SectionProps) {
  return (
    <section
      {...props}
      className={cn(
        "mx-auto max-w-7xl py-12 px-4 flex flex-col gap-4",
        props.className
      )}
    >
      <h1 className="text-4xl font-light text-green-500">{title}</h1>
      {children}
    </section>
  );
}
