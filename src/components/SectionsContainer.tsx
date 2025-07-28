import type React from "react";

const SectionsContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto max-w-7xl py-10 px-4 flex flex-col gap-10">
    {children}
  </div>
);

export default SectionsContainer;
