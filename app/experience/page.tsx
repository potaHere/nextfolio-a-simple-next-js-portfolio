import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "experience",
  description: "My Experience",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">My Experience</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <a
            key={index}
            // href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group hover:opacity-80 transition-opacity duration-200"
          >
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight text-xl">
                  {project.role}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {project.startdate} {" "} - {" "} {project.enddate}
                </span>
              </div>
              <span className="text-neutral-500 dark:text-neutral-300 text-sm">
                {project.employmenttype} {"("} {project.locationtype} {")"}
              </span>
              <span className="text-neutral-500 dark:text-neutral-300 text-sm">
                {project.company} {" "}<br></br>{" "} {project.location}
              </span>
              <p className="prose prose-neutral dark:prose-invert pt-3">
                {project.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
