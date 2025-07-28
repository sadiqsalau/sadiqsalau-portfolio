import { forwardRef } from "react";

import { cn } from "../lib/utils";

type HyperLinkProps = React.ComponentPropsWithoutRef<"a"> & {
  href: string;
  children: React.ReactNode;
};
export default forwardRef<HTMLAnchorElement, HyperLinkProps>(function HyperLink(
  props: HyperLinkProps,
  ref
) {
  return (
    <a {...props} ref={ref} className={cn("text-green-500 hover:underline")} />
  );
});
