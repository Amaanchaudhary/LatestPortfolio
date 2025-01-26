import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  ecom,
  jobit,
  tripguide,
  threejs,
  newton,
  awdiz,
  portfolio_ss,
  avhanTech

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "MongoDB",
    icon: mongodb,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Avhan technologies PVT LTD.",
    icon: avhanTech,
    iconBg: "#E6DEDD",
    date: "FEB 2024 - Current",
    points: [
      "Developing and maintaining web applications using Javascript React.js and Node.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Intern",
    company_name: "Awdiz IT Services",
    icon: awdiz,
    iconBg: "#FFFFFF",
    date: "Jan 2023 - Jan 2024",
    points: [
      "Designed and developed the AWDIZ company website, delivering a responsive, user-friendly platform that improved online engagement",
      "Collaborated with a team of interns and senior developers, following Agile workflows to meet project milestones effectively.",
      "Technologies Used: JavaScript, React,  HTML, CSS, Material UI, Redux, Git, Node.js, Express, MongoDB, Tailwind CSS.",
    ],
  }


];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-Commerce Website",
    description:
      "Modern e-commerce site with an admin dashboard, Razorpay integration, and full CRUD functionality for seamless product management, ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Razorpay",
        color: "pink-text-gradient",
      },
    ],
    link: "https://amaan-ecommerce.netlify.app/",
    image: ecom,
    source_code_link: "https://github.com/Amaanchaudhary/E-commerce-frontend",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    link : "",
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "My 3D Portfolio",
    description:
      "Interactive 3D animation project built with Three.js, showcasing dynamic visuals and engaging user interactions. A creative addition to my portfolio.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    link : "",
    image: portfolio_ss,
    source_code_link: "https://github.com/Amaanchaudhary/LatestPortfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };
