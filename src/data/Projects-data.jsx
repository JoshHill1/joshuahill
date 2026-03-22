import freeToPaid from "./proj-images/free-to-paid_conversion_rate_with_sql.png";
import PAS from "./proj-images/PAS_FinalAssets.png";
import MindOverload from "./proj-images/MindOverload.png";
import ReactPortfolio from "./proj-images/ReactPortfolio.png";
import HTMLPortfolio from "./proj-images/HTMLPortfolio.png";
import Rand from "./proj-images/Rand_Logo.png";

export const projects = [
  {
    thumbnail: Rand,
    title: "Rand Technology - Data Analyst Intern",
    description: "I was part of a communicative team that would consistently think of how we could improve gathering and reporting useful data to the people that needed it. While working with the director, senior business analysts, and CTO I got a clear direction on what to focus on next. I communicated with the shipping department and made it easier to gather information on what is being sent out to customers. Writing queries and displaying data in Excel would be something I would do on a regular basis - but we quickly began to automate the reports with SSRS. As AI continued to get better, we slowly began to integrate it into our business. I was able to do research and report back what I found, how I think it could be useful, and how we could implement it.",
    skills: ["Python", "Excel", "SQL", "SQL Server Reporting Services", "PowerBI", "Prompt Engineering"],
    slug: "Rand-Technology",
    category: "Experience",
  },
  {
    thumbnail: ReactPortfolio,
    title: "React Portfolio",
    description: "After taking a 6 month full-stack web development bootcamp, I was able to come out of it with an understanding of how to build a better portfolio. Instead of making a plain page and hosting it on GitHub pages, I wanted to host it somewhere else and make it more interactive. ",
    skills: ["React.js"],
    slug: "react-portfolio",
    category: "Project",
  },
  {
    thumbnail: HTMLPortfolio,
    title: "HTML Portfolio",
    description: "This was the first portfolio I made. It's a simple HTML and CSS portfolio that I hosted on GitHub pages. I made it to have a simple and clean design and it was a good learning experience for me. ",
    slug: "html-portfolio",
    skills: ["HTML", "CSS", "JavaScript"],
    category: "Project",
  },
];

// Optional: export categories derived from data so you never hardcode them.
// First item is "all", then unique categories in alphabetical order.
export const categories = [
  "all",
  ...Array.from(new Set(projects.map(p => p.category))).sort(),
];
