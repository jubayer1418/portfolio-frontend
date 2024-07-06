import About from "@/components/Home/about";
import Contact from "@/components/Home/contact";

import Intro from "@/components/Home/intro";
import Projects from "@/components/Home/projects";
import SectionDivider from "@/components/Home/section-divider";
import Skills from "@/components/Home/skills";



export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
    <Intro />
    <SectionDivider />
    <About />
    <SectionDivider />
    <Skills />
    <SectionDivider />
    <Projects />
    <SectionDivider />
    <Contact />
    {/* 
    <Experience />
   */}
  </main>
  );
}
