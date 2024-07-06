"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Project(project:any) {
  console.log(project);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 border "
    >
      <div className="max-w-6xl mx-auto">
        <div className=" overflow-hidden rounded shadow-sm ">
          <div className="flex flex-col pt-5 lg:flex-row sm:mx-auto">
            <div className=" lg:w-2/5 h-full px-2 py-2 detail-img">
              <Image
                width={300}
                height={300}
                src={project?.projectBanner?.url}
                alt="book cover"
                className="object-cover w-full  lg:h-full "
              />
            </div>
            <div className=" px-8 lg:pt-0 pt-8 lg:w-3/5">
              <p className="font-semibold text-3xl ">{project?.title}</p>{" "}
              <p className=" text-xl pt-4">
                description: <br />
              </p>
              <ul className="list-disc px-4 font-Poppins sm:text-sm text-xs !leading-7">
                {project?.description}
              </ul>
              <p className=" text-xl pt-4">
                technology: <br />
              </p>
              <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {project.technologies.split(',').map((tag:any, index:any) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
              <div className="flex gap-3 my-5">
                <a
                  href={project?.projectLink}
                  target="_blank"
                  className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                >
                  Live Site
                </a>
                <a
                  href={project?.gitFRepoLink}
                  target="_blank"
                  className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                >
                  Github-Client
                </a>
                <a
                  href={project?.gitERepoLink}
                  target="_blank"
                  className="text-cyan-600 bg-gray-800 px-1 py-1 inline-block"
                >
                  Github-Server
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </motion.div>
  );
}
