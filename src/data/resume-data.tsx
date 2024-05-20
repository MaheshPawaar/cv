import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Mahesh Pawar",
  initials: "MP",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/Pune",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I’m passionate about the impact my skills can have in the real world, and firmly believe that I can create innovative solutions to business processes and problems which will ultimately lead to a better user experience. Currently, I work mostly with Javascript, TypeScript, React, Node.js, TailwindCSS and MongoDB. Right now I am looking for a full time position, where success is built on the quality of its people and its reputation.",
  avatarUrl: "https://avatars.githubusercontent.com/u/32674489?v=4",
  contact: {
    email: "pawarmahesh723@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/MaheshPawaar",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/MaheshPawaar/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/MaheshPawaar",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school:
        "Shri Shivaji Institute of Engineering and Management Studies, Parbhani",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      start: "2019",
      end: "2022",
    },
    {
      school: "Shri Shivaji Polytechnic Institute, Parbhani",
      degree: "Diploma in Computer Engineering",
      start: "2015",
      end: "2018",
    },
  ],
  work: [
    // {
    //   company: "Parabol",
    //   link: "https://parabol.co",
    //   badges: ["Remote"],
    //   title: "Senior Full Stack Developer",
    //   logo: ParabolLogo,
    //   start: "2021",
    //   end: "2024",
    //   description:
    //     "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    // },
  ],
  skills: [
    "Java",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "TailwindCSS",
  ],
  projects: [
    {
      title: "LetsEat",
      techStack: [
        "TypeScript",
        "React",
        "Express.js",
        "TailwindCSS",
        "Shadcn/ui",
        "MongoDB",
        "OAuth",
        "Stripe",
      ],
      description: "A platform for food delivery",
      logo: "",
      link: {
        label: "LetsEat",
        href: "https://food-ordering-app-frontend-l9fs.onrender.com/",
      },
    },
    {
      title: "Budget App",
      techStack: ["React", "React Router", "Context API"],
      description: "Web app to track your expenses and manager budgets",
      logo: "",
      link: {
        label: "BudgetApp",
        href: "https://budget-app-sage.vercel.app/",
      },
    },
    {
      title: "YelpCamp",
      techStack: ["Node.js", "Express.js", "MongoDB", "Passport.js"],
      description: "Find and Review campsites at one place",
      logo: "",
      link: {
        label: "YelpCamp",
        href: "https://github.com/MaheshPawaar/YelpCamp",
      },
    },
  ],
} as const;
