import { NavLink, Outlet } from "react-router";

import Footer from "../components/Footer";
import SectionsContainer from "../components/SectionsContainer";
import { cn } from "../lib/utils";

const HeaderLink = (props: React.ComponentProps<typeof NavLink>) => (
  <NavLink
    {...props}
    className={({ isActive }) =>
      cn(
        " uppercase",
        isActive
          ? "text-green-500 font-bold"
          : "text-stone-300 hover:underline hover:text-green-400",
      )
    }
  />
);

export default function InnerPageLayout() {
  return (
    <>
      <header className="bg-stone-800">
        <div className="px-4 py-10 mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-4">
            {/* Navigation Links */}
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/projects">Projects</HeaderLink>
            <HeaderLink to="/contact">Contact</HeaderLink>
          </div>
        </div>
      </header>
      <SectionsContainer>
        <Outlet />
      </SectionsContainer>
      <Footer />
    </>
  );
}
