import { useState } from "react";
import siteImg1 from "../assets/projects/site-1.webp";
import siteImg2 from "../assets/projects/site-2.webp";
import siteImg3 from "../assets/projects/site-3.webp";
import siteImg4 from "../assets/projects/site-4.webp";
import designImg1 from "../assets/projects/design-1.webp";
import designImg2 from "../assets/projects/design-2.webp";
import designImg3 from "../assets/projects/design-3.webp";
import designImg4 from "../assets/projects/design-4.webp";

const ProjectsSection = () => {
  // Sample data ─ swap in your own screenshots / links
  const websiteProjects = [
    {
      title: "E-Education Site",
      image: siteImg1,
      link: "https://growlearn.netlify.app",
    },
    {
      title: "Health & Wellness Site",
      image: siteImg2,
      link: "https://github.com/biswajitkarmakar03/Health_Wellness_Website",
    },
    {
      title: "Travel Planner App",
      image: siteImg3,
      link: "https://github.com/biswajitkarmakar03/Travel-React-JS",
    },
    {
      title: "Service Site [Client Work]",
      image: siteImg4,
      link: "https://softqonic.com",
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
    {
      title: "Social Media Creatives",
      image: designImg4,
      link: "https://drive.google.com/drive/folders/1I7qyBgiEp_gVkTyUro5wmtfcSx2MhqV_?usp=sharing",
    },
  ];

  const [activeTab, setActiveTab] = useState("websites");

  // Choose which list to render
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
              className={`px-6 py-2 rounded-full text-sm sm:text-base font-medium transition
                ${
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
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-50 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {project.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
