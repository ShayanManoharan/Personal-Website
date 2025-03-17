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
    carrent,
    PharmaGo,
    RSSFeed,
    jobit,
    tripguide,
    threejs,
    SMlogo,
    OhioState,
    WillowTree,
    Lighthouseavionics,
    Python,
    Java,
    Vuejs,
    C,
    Resume,
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
      icon: "OhioState",
    },
  ];
  
  const services = [
    {
      title: "Python Developer",
      icon: Python,
    },
    {
      title: "Java Developer",
      icon: Java,
    },
    {
      title: "Vue.js Developer",
      icon: Vuejs,
    },
    {
      title: "React & React Native Developer",
      icon: reactjs,
    },
  ];
  
  const experiences = [
    {
      title: "Incoming Software Engineering Intern",
      company_name: "WillowTree",
      icon: WillowTree,
      iconBg: "#383E56",
      date: "May 2025 - August 2025",
      link: "https://www.willowtreeapps.com",
      points: [
        "Incoming",    
      ],
    },
    {
      title: "Software Development Intern",
      company_name: "Lighthouse Avionics",
      icon: Lighthouseavionics,
      iconBg: "#383E56",
      date: "May 2024 - September 2024",
      link: "https://lighthouseavionics.com",
      points: [
        "Developed an API-integrated query page, accelerating detection and classification by 84% using Vue.js",    
        "Engineered an advanced Temperature Control system incorporating 4 distinct heating modes to output real-time critical temperature",
        "Crafted a highly interactive UI leveraging WebSocket and secure CSRF token handling for low-latency data communication",   
        "Built a dynamic dashboard for real-time power monitoring with concurrent voltage configuration and device querying",
      ],
    },
    {
        title: "Computer Science and Engineering Student",
        company_name: "The Ohio State University",
        icon: OhioState,
        iconBg: "#383E56",
        date: "August 2023 - Present",
        points: [
          "GPA: 3.9/4.0",
          "Dean’s List: Ohio State College of Engineering",
          "Activites and Socities: Big Data And Analytics Association, Development and Operations (SWE) club, Artificial Intelligence (AI) club",
          "Relevant Coursework: Software Development and Design, Software Components, Discrete Structures and Algorithms, Programming Java, Probability and Statistics for Engineers, Fundamentals of Engineering ",
        ],
      },
  ];
  
  const projects = [
    {
      name: "PharmaGo",
      description:
        "Developed a cross-platform touchscreen application to expand market reach by 25%, addressing the pharmaceutical delivery needs of individuals. Utilized React z and Google Maps API kit to create a user-friendly interface with large buttons and clear directions to help the elderly navigate unfamiliar technology with ease. Optimized trust and certification system for secure prescription drug delivery",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
        {
            name: "figma",
            color: "red-text-gradient",
          },
      ],
      image: PharmaGo,
      source_code_link: "https://github.com/ShayanManoharan",
    },
    {
      name: "Streamline",
      description:
        "Created a Java program to aggregate multiple RSS 2.0 feeds into a consolidated HTML file output. Utilized XML parsing to process each RSS feed URL generating individual HTML pages with detailed feed information.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "xml",
          color: "pink-text-gradient",
        },
      ],
      image: RSSFeed,
      source_code_link: "https://github.com/ShayanManoharan",
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: Java,
    },
    {
      name: "C",
      icon: C,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Vue JS",
      icon: Vuejs,
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
      name: "HTML 5",
      icon: html,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  export { services, technologies, experiences, projects };