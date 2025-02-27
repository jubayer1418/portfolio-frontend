import corpcommentImg from "@/../../public/corpcomment.png";
import rmtdevImg from "@/../../public/rmtdev.png";
import wordanalyticsImg from "@/../../public/wordanalytics.png";
export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Blog",
    hash: "#blog",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: [
      "React",
      "Next.js",
      "MongoDB",
      "Tailwind",
      "Prisma",
      "React",
      "Next.js",
      "Node.js",
      "Git",
      "Tailwind",
      "Prisma",
      "MongoDB",
      "Redux",
      "GraphQL",
      "Apollo",
      "Express",
      "PostgreSQL",
      "Python",
      "Django",
      "Framer Motion",
    ],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;
