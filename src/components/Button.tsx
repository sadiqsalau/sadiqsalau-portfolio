import type { ClassValue } from "clsx";

import { cn } from "../lib/utils";

type ButtonProps<T extends React.ElementType> =
  React.ComponentPropsWithoutRef<T> & {
    as: React.ElementType;
    className?: ClassValue;
  };

type ButtonComponent = <T extends React.ElementType>(
  props: ButtonProps<T>
) => React.ReactElement | null;

const Button: ButtonComponent = function Button({
  as: Component = "button",
  ...props
}) {
  return (
    <Component
      {...props}
      className={cn(
        "cursor-pointer rounded-full font-bold",
        "bg-green-500 text-black px-4 py-2",
        "hover:bg-green-600 transition-colors",
        "focus:outline-none focus:ring-2 focus:ring-green-700",
        props.className
      )}
    />
  );
};

export default Button;
