"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

import { useSectionInView } from "@/lib/hooks";
import Project from "./project";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [projects, setprojects] = useState([]);
  useEffect(() => {
    const skillData = async () => {
      const response = await fetch(
        "https://portfolio-backend-use.vercel.app/api/v1/project/getall"
      );
      const data = await response.json();
      setprojects(data.projects);
    };
    skillData();
  }, []);
  console.log(projects);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="grid grid-cols-1 gap-5  ">
        {projects.map((project:any) => (
          <React.Fragment key={project._id}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
