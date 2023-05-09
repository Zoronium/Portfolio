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
  threejs,
  rust,
  python,
  vidgif,
  React_IMDB,
  Deimos,
  Delivery_System,
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
    title: "Python Developer",
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
  {
    title: "DevOps Engineer",
    icon: mobile,
  },
  {
    title: "Student",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Js",
    icon: javascript,
  },
  {
    name: "Rust",
    icon: rust,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Core Team",
    company_name: "Mlsac Bvp",
    icon: creator,
    iconBg: "#383E56",
    date: "June 2021 - present",
    points: [
      "Coordinated close to 7+ technical and non-tech events for 100+ attendees at BVCOE",
      " Collaborating with cross-functional teams including designers, Logistics , Publicitist, and other Students to create high-quality Events",
      " I organized and Helped in managing Many workshops, Fun events, and hackathons for students",
      " Highlights: Microsoft Ignite 2022 Community-led After Parties",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Video-to-Gif",
    description:
      "This is a simple web application that allows users to upload a video file and convert it to a GIF. The user can specify the duration of the GIF. The application is built using Flask, a micro web framework for Python, and uses the moviepy library for video editing and compression.",
    tags: [
      {
        name: "Python",
        color: "orange-text-gradient",
      },
      {
        name: "Flask",
        color: "green-text-gradient",
      },
      {
        name: "moviePy",
        color: "pink-text-gradient",
      },
    ],
    image: vidgif,
    source_code_link: "https://github.com/Zoronium/Video-to-Gif-Project",
    Demo_link: "https://video-to-gif-project.up.railway.app/",
  },
  {
    name: "React IMBD",
    description:
      "Web application that enables users To view Popular movies and Get Data on these Movies and see all the relavent data like Actors , Budget , etc.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: React_IMDB,
    source_code_link: "https://github.com/Zoronium/REACT_IMDB",
    Demo_link: "https://react-imdb-one.vercel.app/",
  },
  {
    name: "Deimos",
    description:
      "Deimos is a web application designed to facilitate online food ordering with a user-friendly interface and a plethora of features to enhance the ordering experience. The project utilizes the latest technologies, including React, Bootstrap, and Vite, to ensure fast, responsive, and scalable performance.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: Deimos,
    source_code_link: "https://github.com/Zoronium/Deimos",
  },
  {
    name: "Delivery-System",
    description:
      "Web application that enables users To manage Delivery pf Products , and Reort and track all the deliveryies of products. It includes but is not limited to CREATE_DELIVERY , START_DELIVERY, PICKUP_PRODUCTS, DELIVER_PRODUCTS, INCREASE_BUDGET",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "styled-components",
        color: "pink-text-gradient",
      },
    ],
    image: Delivery_System,
    source_code_link: "https://github.com/Zoronium/Delivery-System",
    Demo_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
