import React from "react";
import type { ClassValue } from "clsx";

import { cn } from "../lib/utils";

type Props<T extends React.ElementType> = {
  as?: T;
  className?: ClassValue;
} & React.ComponentPropsWithoutRef<T>;

const Button = <T extends React.ElementType = "button">({
  as,
  className,
  ...props
}: Props<T>) => {
  const Component = as || "button";

  return (
    <Component
      {...props}
      className={cn(
        "cursor-pointer rounded-full font-bold",
        "bg-green-500 text-black px-4 py-2",
        "hover:bg-green-600 transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-green-700",
        className
      )}
    />
  );
};

export default Button;
