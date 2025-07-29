import type { ClassValue } from "clsx";

import { cn } from "../lib/utils";

interface SectionHeadingProps {
  className?: ClassValue;
}

const SectionHeading: DynamicComponent<"h1", SectionHeadingProps> = ({
  as,
  className,
  ...props
}) => {
  const Component = as || "h1";
  return (
    <Component
      {...props}
      className={cn("text-4xl font-fredoka-one text-green-500", className)}
    />
  );
};

export default SectionHeading;
