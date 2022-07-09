const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: " ",
  title: "JS."
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Shreya Joshi",
  role: "Front End Engineer",
  description:
    " Hello my name is Shreya.I am Front End and Android Devloper. I love designing websites,mobile apps and branding for clients all over the glob.",
  resume: "https://example.com",
  social: {
    linkedin: "https://www.linkedin.com/in/shreya-joshi-4aba25216/",
    github: "https://github.com/shreyajoshi267"
  }
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Project 1",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com"
  },
  {
    name: "Project 2",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com"
  },
  {
    name: "Project 3",
    description:
      "Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com"
  }
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Flutter",
  "Git",
  "SQL"
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "shreyajoshi267@gmail.com"
};

export { header, about, projects, skills, contact };
