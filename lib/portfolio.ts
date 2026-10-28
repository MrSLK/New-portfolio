export const profile = {
  name: "Koenaite Shiba",
  brand: "koenaite.dev",
  role: "Software Developer",
  email: "koenaite8@gmail.com",
  github: "https://github.com/MrSLK",
  linkedin: "https://www.linkedin.com/in/shiba-koenaite",
  availability: "Open to the right opportunities",
  summary:
    "Full-stack thinking, backend engineering, and cloud-aware delivery — turning complex requirements into software people can depend on.",
};

export const projects = [
  {
    number: "01",
    title: "CarListPro",
    type: "Product / AI",
    icon: "⌁",
    description:
      "A used-car listing assistant designed to make vehicle listings and evaluation workflows easier to manage. Combines a React interface with AI-assisted features and cloud-backed data, with the focus on a useful end-to-end product rather than a disconnected demo.",
    stack: ["React", "Vite", "Firebase", "Gemini API", "Cloudinary"],
    github: "https://github.com/",
    demo: "#contact",
    featured: true,
    status: "Project link to verify",
  },
  {
    number: "02",
    title: "StokTrust",
    type: "SaaS / Workflow",
    icon: "▦",
    description:
      "A stokvel management platform concept for organising group membership, contributions, and accountability. A NestJS and MongoDB backend structures roles, invitations, and member activity to support clear, maintainable group workflows.",
    stack: ["Next.js", "NestJS", "MongoDB", "JWT"],
    github: "https://github.com/",
    demo: "#contact",
    status: "Project link to verify",
  },
  {
    number: "03",
    title: "Used-car price prediction",
    type: "Research / ML",
    icon: "⌁",
    description:
      "A postgraduate research proof of concept exploring how machine-learning models can estimate used-car prices in South Africa. The evaluation compares regression approaches using clear metrics, feature selection, and local-market context.",
    stack: ["Python", "Machine Learning", "Random Forest", "RMSE / R²"],
    github: "#contact",
    demo: "#contact",
    status: "Research project",
  },
  // {
  //   number: "04",
  //   title: "TradieOS",
  //   type: "Product in progress",
  //   icon: "↗",
  //   description:
  //     "A SaaS concept to help tradespeople keep customer details, quotes, and jobs organised in one place. The planned MVP prioritises reliable workflows and subscription management first, with a marketplace considered for a later phase.",
  //   stack: ["Next.js", "TypeScript", "NestJS", "MongoDB", "PWA"],
  //   github: "#contact",
  //   demo: "#contact",
  //   status: "In planning",
  // },
];

export const skills = [
  {
    title: "Languages & Frameworks",
    icon: "⌘",
    items: [
      "TypeScript",
      "JavaScript",
      "Node.js",
      "NestJS",
      "Express",
      "React",
      "Next.js",
      "C#",
      "C++",
    ],
  },
  {
    title: "Infrastructure & Cloud",
    icon: "☁",
    items: [
      "AWS S3",
      "AWS Amplify",
      "GCP",
      "CI/CD",
      "Vercel",
      "Git",
      "Bitbucket",
      "Gitflow",
    ],
  },
  {
    title: "Data & AI/ML",
    icon: "◈",
    items: [
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Gemini API",
      "REST APIs",
      "Regression",
      "Model evaluation",
    ],
  },
  {
    title: "Architecture & Quality",
    icon: "⬡",
    items: [
      "API design",
      "Data modelling",
      "Unit testing",
      "Code review",
      "Maintainability",
      "Scalability",
      "Agile delivery",
    ],
  },
];

export const experience = [
  {
    title: "Intermediate Software Developer",
    company: "Preferental Technologies",
    date: "Sept 2024 - Present",
    description:
      "Contribute across React UI and Node.js backend services, including NestJS/Express APIs, MongoDB data design, cloud storage and deployment workflows. Collaborate through code reviews, testing, CI/CD, and team delivery practices.",
  },
  {
    title: "Junior Backend Developer",
    company: "Preferental Technologies",
    date: "Dec 2022 - Aug 2024",
    description:
      "Built and maintained backend functionality, worked with databases and REST APIs, and continued contributing to frontend features as product needs required.",
  },
  {
    title: "Full-stack Developer Intern",
    company: "Shaper (Formerly Digital Academy)",
    date: "Dec 2021 - Nov 2022",
    description:
      "Developed practical full-stack foundations by working across application features, frontend interfaces, server-side logic, and collaborative development workflows.",
  },
  {
    title: "Education & ongoing development",
    company:
      "Advanced Diploma in Computer Science · Postgraduate Diploma in Computer Science",
    date: "Ongoing",
    description:
      "Formal study complements hands-on experience in software engineering, problem-solving, and applied research into used-car price prediction.",
  },
];
