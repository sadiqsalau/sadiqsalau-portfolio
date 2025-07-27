import type { ClassValue } from "clsx";
import { forwardRef } from "react";

import { cn } from "../lib/utils";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  className?: ClassValue;
};

export default forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  props,
  ref
) {
  return (
    <button
      ref={ref}
      {...props}
      className={cn(
        "bg-green-500 text-black px-4 py-2",
        "hover:bg-green-600 transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-green-700",
        props.className
      )}
    />
  );
});
