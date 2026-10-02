export const NAV_LINKS = [
  { id: "hero", title: "Home" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const PERSONAL_INFO = {
  name: "Muksana Akter",
  role: "Full-Stack Software Developer",
  location: "Chattogram, Bangladesh",
  phone: "+880 1813-683629",
  email: "muksanaakter3@gmail.com",
  github: "https://github.com/MuksanaAkter",
  linkedin: "https://linkedin.com/in/muksanaakter3", 
  bio: "Full-Stack Software Developer with hands-on experience developing and maintaining responsive web and mobile applications. Skilled in React, React Native, Next.js, TypeScript, Node.js, API integration, and database-driven features.",
};

export const SKILLS = {
  Frontend: ["React", "React Native", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  Backend: ["Node.js", "Express.js", "NestJS", "REST APIs", "GraphQL", "Firebase Authentication"],
  Databases: ["PostgreSQL", "MongoDB", "Firebase"],
  Tools: ["Git", "Docker", "Jest", "Expo", "Turborepo", "Figma", "Vercel", "Netlify", "Responsive Design"],
};

export const EXPERIENCES = [
  {
    title: "Software Developer",
    company_name: "XIIA",
    date: "July 2024 - Present",
    points: [
      "Develop and maintain web and mobile application features using React, React Native, Next.js, and TypeScript, with attention to responsive behavior and reusable component structure.",
      "Implement user-facing workflows, integrate APIs, troubleshoot reported issues, and contribute to testing and iterative product improvements.",
      "Collaborate with teammates across marketplace, creator-platform, and restaurant-management products to deliver maintainable features.",
    ],
  },
  {
    title: "Junior Developer",
    company_name: "XIIA",
    date: "First year · 12 months",
    points: [
      "Spent my first year at XIIA as a Junior Developer, contributing to product features, learning the team's workflow, and growing into broader development responsibilities.",
    ],
  },
  {
    title: "Software Development Intern",
    company_name: "Syntheim, India",
    date: "January 2024 - June 2024",
    points: [
      "Contributed to a chat application using React Native, Node.js, MongoDB, and Firebase during a six-month software development internship.",
      "Supported interface and feature implementation, debugging, and testing while gaining experience with team-based development practices.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "Soundmade",
    description: "Music & Creator Platform. Contributed to artist and creator experiences, including profiles, navigation, competition and marketplace interfaces, content discovery, and user interactions.",
    tags: [
      { name: "React Native", color: "text-blue-500" },
      { name: "Expo", color: "text-gray-500" },
      { name: "React", color: "text-cyan-500" },
      { name: "TypeScript", color: "text-blue-700" },
    ],
    image: "", 
    source_code_link: "https://github.com/MuksanaAkter/chatapp-react-native",
  },
  {
    name: "Kiibee",
    description: "Digital Content Marketplace. Developed and refined viewer and creator workflows covering profiles, content discovery, creator settings, and purchase/rental-related experiences.",
    tags: [
      { name: "Next.js", color: "text-black dark:text-white" },
      { name: "TypeScript", color: "text-blue-700" },
      { name: "NestJS", color: "text-red-500" },
      { name: "PostgreSQL", color: "text-blue-400" },
    ],
    image: "",
    source_code_link: "https://github.com/MuksanaAkter/todo-app-nextjs",
  },
  {
    name: "Foodime",
    description: "Restaurant Management Platform. Built and refined dashboard experiences for orders, payments, employees, menus, categories, extras, and coupons.",
    tags: [
      { name: "Next.js", color: "text-black dark:text-white" },
      { name: "React", color: "text-cyan-500" },
      { name: "TypeScript", color: "text-blue-700" },
      { name: "PostgreSQL", color: "text-blue-400" },
      { name: "Zustand", color: "text-orange-500" },
    ],
    image: "",
    source_code_link: "https://github.com/MuksanaAkter/Chef-recipe-client",
  },
];
