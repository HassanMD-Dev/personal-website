import userHubImg from "../assets/proj/userhub.png";
import galleryImg from "../assets/proj/picsum.png";
import goldenForkImg from "../assets/proj/golden.png";
import weatherImg from "../assets/proj/weather.png";
import passwordImg from "../assets/proj/pass.png";
import taskImg from "../assets/proj/todo.png";  

const projectsData = [
  {
    id: 1,
    image: userHubImg,
    category: "React Application",
    title: "UserHub",
    description:
      "A responsive user management application built with React to practice Redux Toolkit state management, authentication flow, and REST API integration using reusable components.",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Redux Toolkit",
      "REST API",
    ],
    liveUrl: "https://auth-management-rosy.vercel.app/",
    githubUrl: "https://github.com/HassanMD-Dev/auth-management",
  },

  {
    id: 2,
    image: galleryImg,
    category: "React Application",
    title: "Image Gallery",
    description:
      "A responsive image gallery built with React that fetches images from an external API and includes pagination with a clean, modern user interface.",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Axios",
      "REST API",
    ],
    liveUrl: "https://gallery-app-beta.vercel.app/  ",
    githubUrl: "https://github.com/HassanMD-Dev/Gallery-app",
  },

  {
    id: 3,
    image: goldenForkImg,
    category: "Frontend Project",
    title: "Golden Fork",
    description:
      "A modern multi-page restaurant website featuring responsive layouts, React Router navigation, reusable components, and smooth user experience.",
    technologies: [
      "React",
      "React Router",
      "Tailwind CSS",
    ],
    liveUrl: "https://golden-fork-rah1.vercel.app/",
    githubUrl: "https://github.com/HassanMD-Dev/golden-fork",
  },

  {
    id: 4,
    image: weatherImg,
    category: "React Application",
    title: "Weather App",
    description:
      "A responsive weather application that displays real-time weather information by integrating an external weather API with a clean and user-friendly interface.",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "REST API",
    ],
    liveUrl: "https://hassanmd-dev.github.io/weather-app-live/",
    githubUrl: "https://github.com/HassanMD-Dev/weather-app-live",
  },

  {
    id: 5,
    image: passwordImg,
    category: "JavaScript Project",
    title: "Password Generator",
    description:
      "A customizable password generator that creates strong passwords with adjustable length and character options through a simple and intuitive interface.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    liveUrl: "https://shiny-naiad-249552.netlify.app",
    githubUrl: "https://github.com/HassanMD-Dev/assign-password-generator",
  },

  {
    id: 6,
    image: taskImg,
    category: "JavaScript Project",
    title: "Task Tracker",
    description:
      "A task management application that allows users to add, organize, complete, and remove daily tasks with persistent data stored in Local Storage.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Local Storage",
    ],
    liveUrl: "https://statuesque-daffodil-488109.netlify.app",
    githubUrl: "https://github.com/HassanMD-Dev/todo-app",
  },
];

export default projectsData;