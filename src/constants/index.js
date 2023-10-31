import {
  backend,
  creator,
  web,
  dialogeAI,
  myStreamify,
  portfolio,
  css,
  express,
  figma,
  git,
  html,
  javascript,
  materialUI,
  nodejs,
  numpy,
  reactjs,
  tailwind,
  threejs,
  typescript,
} from "../assets";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "numPY",
    icon: numpy,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Material UI",
    icon: materialUI,
  },
];

const experiences = [
  {
    title: "",
    project_name: "",
    icon: "",
    iconBg: "",
    date: "",
    points: [],
  },
];

const testimonials = [
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];

const projects = [
  {
    name: "Chat GPT Clone",
    description:
      "Using the openAI API I have built chat Gpt Clone . I have used the latest tools and technologies .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: dialogeAI,
    source_code_link: "https://github.com/AshishRaj04/ChatGPT_clone.git",
  },
  {
    name: "You Tube Clone",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapid api",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
    ],
    image: myStreamify,
    source_code_link: "https://github.com/AshishRaj04/mystreamify.git",
  },
  {
    name: "Note Keeper",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      
    ],
    image: portfolio,
    source_code_link: "https://github.com/AshishRaj04/Keeper-App.git",
  },
  {
    name: "QR Code Generator",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Node js",
        color: "blue-text-gradient",
      },
      {
        name: "NPM",
        color: "green-text-gradient",
      },
      
    ],
    image: portfolio,
    source_code_link: "https://github.com/AshishRaj04/QR-Code-Generator.git",
  },
];

export { technologies, projects , navLinks};
