import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";



export const EXPERIENCES = [
  {
    year: "Summer 2024",
    role: "Artificial Intelligence Engineer Intern",
    company: "BeyondSoft Consulting",
    link: "https://www.beyondsoft.com/", 
    description: `Led production of Large Language Model (LLM) chatbots to answer internal company queries that will be used cross-functionally in 15+ countries by over 20,000 employees. Optimized model output through building Retrieval-Augmented Generation (RAG) by training knowledge base on 200+ internal company documents. `,
    technologies: ["Python", "LangChain", "Open AI API", "LLMs"],
  },
  {
    year: "Summer 2023",
    role: "Data Science Research Intern",
    company: "Northern Tornadoes Project @ Western",
    link: "https://www.uwo.ca/ntp/index.html", 
    description: `Worked on GIS (Geographic Information System) model attempting to establish a novel method of rating tornado damage to replace the Enhanced Fujita Scale in areas without trees/buildings. Improved data implementation to by introducing time series lag features to better map satellite imaging of tornado scars to respective date.`,
    technologies: ["ArcGIS Pro", "Python", "Machine Learning"],
  },
  {
    year: "Summer 2022",
    role: "SEES Machine Learning Research Intern",
    company: "NASA Texas Space Grant",
    link: "https://www.nasa.gov/", 
    description: `Co-wrote and presented American Geophysical Union published paper investigating how forest fire data affects mosquito abundance prediction machine learning models. Built a Random Forest Regressor model with root mean squared error (RMSE) of 3.94.`,
    technologies: ["Python", "Jupyter Notebook", "Machine Learning"],
  },
];

export const PROJECTS = [
  {
    title: "Pigeon",
    image: project1,
    description: "News aggregation site that offers readers news by citing academic sources with limited conflict of interest to mitigate bias in media.",
  },
  {
    title: "Stock Predictor",
    image: project2,
    description: "Predicting the prices of the SP500 with Random Forest Machine Learning Model",
  },
  {
    title: "Course Checkr",
    image: project3,
    description: "Course Checking Website Similar to MyBluePrint",
  },
  {
    title: "World of Devs",
    image: project4,
    description:
    "Organization promoting web and app development to the world. Attendees from 29+ countries.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Ithaca, New York, United States",
  email: "khd32@cornell.edu",
};
