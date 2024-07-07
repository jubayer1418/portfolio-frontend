"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "./section-heading";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import Image from "next/image";
import { skillsData } from "@/lib/data";
import skillpc from "@/../../public/react.png";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const skillData = async () => {
      const response = await fetch("https://portfolio-backend-use.vercel.app/api/v1/skill/getall");
      const data = await response.json();
      setSkills(data.skills);
    };
    skillData();
  }, []);
  console.log(skills);
  return (
    <section
      id="skills"
      ref={ref}
      className=" max-w-[53rem] scroll-mt-28 text-center "
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills?.map((skill:any) => (
          <motion.div
            key={skill._id}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={skill._id}
          >
            <Card className="h-44 p-7 flex flex-col justify-center items-center gap-3">
              <Image
                src={skill.svg.url}
                alt="skill"
                height={100}
                width={100}
                className="h-8 sm:h-24 w-auto hover:scale-75 dark:bg-white duration-700 hover:animate-pulse"
              />
              <p className="text-muted-foreground text-center">{skill.title}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
