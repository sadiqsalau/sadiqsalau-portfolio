import type { ClassValue } from "clsx";

import type { DynamicComponent } from "../types/types";
import { cn } from "../lib/utils";

type ButtonProps = {
  className?: ClassValue;
};

const Button: DynamicComponent<"button", ButtonProps> = ({
  as,
  className,
  ...props
}) => {
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
