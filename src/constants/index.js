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
    FutureMap,
    ToDoList,
    //Swift,
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
    { id: "projects", 
      title: "Projects" 
    },
    {
      id: "contact",
      title: "Contact",
      icon: "OhioState",
    },
  ];
  
  const services = [
    {
      title: "iOS App Developer",
      icon: mobile,
    },
    {
      title: "Python Developer",
      icon: Python,
    },
    {
      title: "Java Developer",
      icon: Java,
    },
    {
      title: "React & React Native Developer",
      icon: reactjs,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "WillowTree, A TELUS Digital Company",
      icon: WillowTree,
      iconBg: "#383E56",
      date: "May 2025 - Present",
      link: "https://www.willowtreeapps.com",
      points: [
        "Integrated live Radar SDK across 4,500+ stores in Swift to boost real-time location accuracy and app reliability, enhancing the app’s ability to deliver location-based services at scale.",
        "Building components for a “Favorite Order” feature designed to improve repeat order flow efficiency by 30% for over 2 million users, streamlining the user experience through personalized, high-traffic ordering paths.",
        "Improved order analytics visibility by 40% through implementing quantitative parameters in Segment events to strengthen tracking and user behavior analysis.",   
        "Refactored resolvers in C# and updated GraphQL endpoints to support BFF tokens, improving backend reliability for 497M + daily users and increasing test coverage",
      ],
    },
    {
      title: "Software Development Intern",
      company_name: "Lighthouse Avionics",
      icon: Lighthouseavionics,
      iconBg: "#383E56",
      date: "May 2024 - August 2024",
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
        link: "https://www.osu.edu/",
        points: [
          "GPA: 3.9/4.0",
          "Dean’s List: Ohio State College of Engineering (4x recipient)",
          "Activites and Socities: Big Data And Analytics Association, Development and Operations (SWE) club, Artificial Intelligence (AI) club",
          "Relevant Coursework: Software Development and Design, Software Components, Discrete Structures and Algorithms, Programming Java, Probability and Statistics for Engineers, Fundamentals of Engineering ",
        ],
      },
  ];
  
  const projects = [
    {
      name: "Future Map",
      description:
        "Developed an AI-powered academic planning tool aimed at helping over 3.7 million students navigate post-graduation uncertainty. Leveraging the OpenAI API, I built a personalized recommendation engine to boost student engagement by generating over five dynamic content modules—including suggested majors, programs, and certifications—delivered through a real-time, interactive dashboard.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
        {
            name: "openAI API",
            color: "red-text-gradient",
          },
      ],
      image: FutureMap,
      source_code_link: "https://github.com/ShayanManoharan/future-map",
    },
    {
      name: "PharmaGo",
      description:
        "Developed a cross-platform touchscreen application to expand market reach by 25%, addressing the pharmaceutical delivery needs of individuals. Utilized React and Google Maps API kit to create a user-friendly interface with large buttons and clear directions to help the elderly navigate unfamiliar technology with ease. Optimized trust and certification system for secure prescription drug delivery.",
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
      name: "To Do List app",
      description:
        "To Do List App is a SwiftUI-based task management application integrated with Firebase for real-time authentication and cloud storage. Users can securely log in, create new tasks with due dates, and track their progress with a sleek and responsive interface. The app features dynamic list updates, colorful custom headers for each screen, and intuitive tab-based navigation between viewing and creating tasks.",
      tags: [
        {
          name: "Swift",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "pink-text-gradient",
        },
        {
            name: "Xcode",
            color: "red-text-gradient",
        },
      ],
      image: ToDoList,
      source_code_link: "https://github.com/ShayanManoharan/ToDoListApp",
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