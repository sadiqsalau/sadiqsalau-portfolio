import { BsBoxArrowInUpRight } from "react-icons/bs";
import { CloseButton, Description, DialogTitle } from "@headlessui/react";
import { Link } from "react-router";
import { LuX } from "react-icons/lu";
import { SiGit } from "react-icons/si";

import ProjectTags from "./ProjectTags";
import type { Project } from "../types/project";
import { cn } from "../lib/utils";

interface ProjectModalHeaderProps {
  project: Project;
}

export default function ProjectModalHeader({
  project,
}: ProjectModalHeaderProps) {
  return (
    <div className="flex gap-2">
      {/* Icon */}
      <img
        src={project.icon}
        alt={project.title}
        className="size-10 rounded-md flex-none"
      />

      {/* Details */}
      <div className="flex-1 flex flex-col gap-1.5">
        <DialogTitle className="text-lg font-fredoka-one">
          {project.title}
        </DialogTitle>

        {/* Description */}
        <Description className="text-sm">{project.description}</Description>

        {/* Tags */}
        <ProjectTags tags={project.tags} />

        <div className="flex flex-wrap gap-2 mt-2">
          {/* Visit link */}
          <Link
            target="_blank"
            to={project.link}
            className={cn(
              "flex gap-2",
              "rounded-md bg-green-500 text-green-900",
              "font-bold px-4 py-1 outline-0 rounded-md",
              "hover:ring hover:ring-green-700",
              "focus:ring focus:ring-green-700",
              "border border-green-500"
            )}
          >
            <BsBoxArrowInUpRight className="size-6" /> Visit Page
          </Link>

          {/* Repo */}
          {project.repo ? (
            <Link
              target="_blank"
              to={project.repo}
              className={cn(
                "flex gap-2",
                "bg-[#f34f29]",
                "font-bold px-4 py-1 outline-0 rounded-md",
                "hover:ring hover:ring-[#c23f21]",
                "focus:ring focus:ring-[#c23f21]"
              )}
            >
              <SiGit className="size-6" /> Repository
            </Link>
          ) : null}
        </div>
      </div>

      {/* Close button */}
      <CloseButton
        className={cn(
          "self-start outline-0 rounded-md p-2 focus:ring focus:ring-green-700",
          "hover:bg-stone-800",
          "cursor-pointer"
        )}
      >
        <LuX className="size-6" />
      </CloseButton>
    </div>
  );
}
