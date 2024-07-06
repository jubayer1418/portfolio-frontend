"use client";

import React, { useState } from "react";

import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import Image from "next/image";
import { count } from "console";

export default function Aboutt() {
  const { ref } = useSectionInView("About");
  // const [countOn, setCountOn] = useState(false);

  const info = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "12" },
    { text: "Companies Work", count: "00" },
  ];
  return (
    <motion.section
      ref={ref}
      // className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <section id="about" className="">
        <div className="text-center ">
          <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
            <div
              className="flex-1 md:mt-0 mt-6 flex justify-center items-center "
              data-aos="fade-right"
            >
              <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
                <Image
                  src="https://lh3.googleusercontent.com/a/ACg8ocLhI9UjU16kV9w57F-bTjD6lle5y1jjTc2y2I-MDhegLayNXM-E=s288-c-no"
                  alt=""
                  width={300}
                  height={300}
                  className="w-full h-fit object-cover bg-cyan-900 rounded-xl"
                />
              </div>
            </div>
            <div className="p-2 " data-aos="fade-left">
              <div className=" my-3">
                <p className="text-justify leading-7 w-11/12 mx-auto">
                  With 1 years of learning experience in web development, I have
                  a strong foundation in the MERN stack development and have
                  successfully delivered multiple projects using these
                  technologies. I have a solid foundation in JavaScript and its
                  frameworks, which allows me to create dynamic and interactive
                  user interfaces with React.js, On the server side, I used
                  Node.js and Express.js to develop scalable and efficient
                  backend APIs, integrating them with MongoDB for storing data.
                  <br />
                  During my previous roles, I have completed MERN stack web
                  development with programming hero “Complete web development
                  course”, and I completed some projects, also I have
                  collaborated closely with cross-functional teams and completed
                  some team projects.
                </p>
                <div className="flex mt-10 items-center gap-7">
                  {info.map((content) => (
                    <div key={content.text}>
                      <h3 className="md:text-4xl text-2xl font-semibold ">
                      {content.count}
                        <span>+</span>
                      </h3>
                      <span className="md:text-base text-xs">
                        {content.text}
                      </span>
                    </div>
                  ))}
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.section>
  );
}
