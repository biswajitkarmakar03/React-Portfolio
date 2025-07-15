import { useState } from "react";
import siteImg1 from "../assets/projects/site-1.webp";
import siteImg2 from "../assets/projects/site-2.webp";
import siteImg3 from "../assets/projects/site-3.webp";
import designImg1 from "../assets/projects/design-1.webp";
import designImg2 from "../assets/projects/design-2.webp";
import designImg3 from "../assets/projects/design-3.webp";

const ProjectsSection = () => {
  const websiteProjects = [
    {
      title: "Job Hunting Portal",
      description:"A job portal to search, filter, and apply for jobs with detailed listings, company info, and user-friendly features.",
      image: siteImg1,
      link: "https://growlearn.netlify.app",
      skills: ["React", "React Router", "Hooks", "Tailwind CSS"],
      repoLink: "https://github.com/biswajitkarmakar03/E-Education-Site",
      liveDemoLink: "https://biswajit-hiresy.netlify.app",
    },
    {
      title: "Travel Planner App",
      description:"Plan, organize, and share trips easily with smart itineraries and destination recommendations for a smooth travel experience.",
      image: siteImg3,
      skills: ["React", "React Router", "Hooks", "Sass"],
      repoLink: "https://github.com/biswajitkarmakar03/Travel-React-JS",
      liveDemoLink: "#",
    },
      {
      title: "Health & Wellness Site",
      description:"A wellness platform offering health tips, workout routines, diet plans, and mental well-being guidance to promote a healthier lifestyle.",
      image: siteImg2,
      skills: ["Bootstrap", "PHP", "MySQL" ],
      repoLink: "https://github.com/biswajitkarmakar03/Health_Wellness_Website",
      liveDemoLink: "#",
    },
  ];

  const designProjects = [
    {
      title: "Social Media Creatives",
      image: designImg1,
      link: "https://drive.google.com/drive/folders/1I7qyBgiEp_gVkTyUro5wmtfcSx2MhqV_?usp=sharing",
    },
    {
      title: "Social Media Creatives",
      image: designImg2,
      link: "https://drive.google.com/drive/folders/1I7qyBgiEp_gVkTyUro5wmtfcSx2MhqV_?usp=sharing",
    },
    {
      title: "Social Media Creatives",
      image: designImg3,
      link: "https://drive.google.com/drive/folders/1I7qyBgiEp_gVkTyUro5wmtfcSx2MhqV_?usp=sharing",
    },
  ];

  const [activeTab, setActiveTab] = useState("websites");
  const projects = activeTab === "websites" ? websiteProjects : designProjects;

  return (
    <section id="projects" className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-indigo-600 mb-8 text-center">
          Projects<span className="text-black">.</span>
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {["websites", "design"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm sm:text-base font-medium transition ${
                activeTab === tab
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab === "websites" ? "Websites" : "Designs"}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col"
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="h-48 w-full object-cover"
              />

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="text-gray-500 mb-4 leading-5">{project.description}</p>
                  )}

                  {/* Skills (only for website projects) */}
                  {project.skills && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-2">
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition"
                    >
                      Repo
                    </a>
                  )}
                  <a
                    href={project.liveDemoLink || project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
