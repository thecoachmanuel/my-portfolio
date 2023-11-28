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
  SibberSkool,
  larva,
  SwiftCart,
  gpt3,
  portfolio,
  threejs,
  github,
  taiwo,
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
    title: "Product Designer",
    icon: web,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Digital Marketer",
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "SibberSkool",
    icon: SibberSkool,
    iconBg: "#383E56",
    date: "May 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "UI/UX Designer and Web Developer",
    company_name: "Larva",
    icon: larva,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Designing responsive user interfaces for mobile app and landing pages",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Crafting high fidelity wireframes",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "Manuel is a true professional in the field of product design and web development.  His innovative ideas and meticulous approach significantly contributed to the success of my experience with figma responsive portfolio design.",
    name: "Taiwo Adeyinka",
    designation: "Product Designer",
    company: "SibberSkool",
    image: taiwo,
  },
  
];

const projects = [
  {
    name: "SwiftCart.",
    description:
      "SwiftCart is a sleek and user-friendly Figma app UI for an electronic marketplace. Seamlessly designed with a modern aesthetic, it offers a smooth and intuitive shopping experience, making navigation and transactions effortless for users.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "photoshop",
        color: "green-text-gradient",
      },
      {
        name: "illustrator",
        color: "pink-text-gradient",
      },
    ],
    image: SwiftCart,
    img: figma,
    source_code_link: "https://www.figma.com/proto/ymTJjhzQnuiaToGjJhzqJg/SwiftCart-E-Commerce-App?type=design&node-id=61-216&t=ejDqvtX4wf2TGJwc-0&scaling=scale-down&page-id=61%3A215&starting-point-node-id=451%3A4049",
  },
  {
    name: "GPT-3 OpenAI",
    description:
      "Web Application that uses extraordinary capabilities of OpenAI's GPT-3! Experience the future of language technology with our user-friendly and responsive platform. Unleash the power of GPT-3 today!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: gpt3,
    img: github,
    source_code_link: "https://thecoachmanuel.github.io/gpt3-react/",
  },
  {
    name: "Portfolio UI",
    description:
      "A personal portfolio UI which showcase a clean homepage, easy navigation, a project gallery, an About Me section, and a resume section to showcase his work and skills.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "photoshop",
        color: "green-text-gradient",
      },
      {
        name: "canva",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    img: figma,
    source_code_link: "https://www.figma.com/proto/wVU0c3BirXXRTlqdhGoth0/Product-Designer-Portfolio?type=design&node-id=309-233&t=K0lAv2RxNFfHMa1M-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=309%3A233",
  },
];

export { services, technologies, experiences, testimonials, projects };
