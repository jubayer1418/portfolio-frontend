import Link from "next/link";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaGithub, FaInstagram, FaMapMarkedAlt, FaPhone, FaTwitter } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
export default function Footer() {
  return (
    <footer className=" px-4  text-gray-500">
      <div className="container  py-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="my-2">
              <Link href="#home">
                <h4 className="text-2xl uppercase font-bold">Mohammad Jubayer</h4>
              </Link>
            </div>
            <p className="text-gray-400 mb-6">
              I am Jubayer, Working with Full Stack Development
            </p>
            <div
              className="flex flex-row  
                  text-left gap-4 flex-wrap items-center mb-4"
            >
              <div className="min-w-[2rem]  text-lg min-h-[2rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                <MdOutlineMail />
              </div>
              <p className="md:text-base text-sm  break-words">
                skjubayer1418@gmail.com
              </p>
            </div>
            <div
              className="flex flex-row  
                  text-left gap-4 flex-wrap items-center mb-4"
            >
              <div className="min-w-[2rem]  text-lg min-h-[2rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
              <FaPhone />
              </div>
              <p className="md:text-base text-sm  break-words">
                +880 1787351418
              </p>
            </div>
            <div
              className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
            >
              <div className="min-w-[2rem]  text-lg min-h-[2rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
              <FaMapMarkedAlt />
              </div>
              <p className="md:text-base text-sm  break-words">
                Khustia,Khulna,Bangladesh
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 ">Useful Links</h3>
            <div className="flex">
              <ul className="space-y-2 ms-1">
                <li>
                  <Link href="#home" className="hover:text-gray-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-gray-400">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="hover:text-gray-400">
                    Skills
                  </Link>
                </li>
              </ul>
              <ul className="space-y-2 ms-20">
                <li>
                  <Link href="#projects" className="hover:text-gray-400">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-gray-400">
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Keep in touch</h3>
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="https://www.linkedin.com/in/mohammad-jubayer1418"
                  target="_blank"
                  className="hover:text-gray-400 text-xl"
                >
                  <BsLinkedin />
                </Link>
              </li>
             
              <li>
                <Link
                  href="https://web.facebook.com/sk01787351418/"
                  className="hover:text-gray-400 text-xl"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/jubayer1418"
                  target="_blank"
                  className="hover:text-gray-400 text-xl"
                >
                  <FaGithub />
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
        <hr className="my-8 border-slate-700" />
      <div className="text-center">
      <small className="mb-2 block text-xs">
          &copy; 2024 Jubayer. All rights reserved.
        </small>
        <p className="text-xs">
          <span className="font-semibold">About this website:</span> built with
          React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email
          & Resend, Vercel hosting.
        </p>
      </div>
      </div>
    </footer>
  );
}
