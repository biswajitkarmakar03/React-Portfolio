// src/components/ProjectsSection.jsx
import { ExternalLink, Github, Star, Code2, Zap } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "JobSphare",
      subtitle: "Job Portal Web Application",
      description: "Full-stack job portal built with Laravel 12 following MVC architecture with responsive UI using Blade and Tailwind CSS.",
      tech: ["Laravel", "MySQL", "Tailwind CSS", "PHP"],
      github: "#",
      features: [
        "Secure user authentication, authorization, and role-based access control",
        "Complete CRUD operations for job listings",
        "Eloquent ORM relationships and route model binding",
        "Server-side validation, pagination, and reusable Blade components",
        "Employer and job management modules with optimized MySQL queries"
      ],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      title: "FitSet",
      subtitle: "Health & Wellness Web Application",
      description: "Responsive health and wellness platform using PHP, MySQL, and Bootstrap with focus on accessibility and user experience.",
      tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      github: "#",
      features: [
        "Scalable backend modules for user management and content delivery",
        "Optimized website performance and responsive design",
        "Clean and intuitive user interface focused on accessibility",
        "Complete CRUD operations and data management"
      ],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30"
    }
  ];

  return (
    <section className="py-20 bg-[#0d0d1a] border-t border-white/5" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-mono mb-4">
            <Code2 className="w-4 h-4" />
            <span>Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-gray-200">Featured</span>
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent ml-2">Projects</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-mono">
            Here are some of the projects I've built using modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${project.color} border ${project.borderColor} rounded-xl backdrop-blur-sm hover:shadow-[0_0_50px_rgba(99,102,241,0.05)] transition-all duration-300 transform hover:-translate-y-2 overflow-hidden`}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-200">{project.title}</h3>
                    <p className="text-indigo-400 text-sm font-mono">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-2">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/5 border border-white/10 rounded-lg hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300"
                    >
                      <Github className="w-4 h-4 text-gray-400 hover:text-indigo-400" />
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-lg font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 p-4 bg-black/20 rounded-lg border border-white/5">
                  <div className="flex items-center gap-2 text-indigo-400 text-sm font-mono mb-2">
                    <Zap className="w-4 h-4" />
                    <span>Key Features</span>
                  </div>
                  {project.features.map((feature, i) => (
                    <div key={i} className="text-gray-400 text-sm flex gap-2 items-start">
                      <span className="text-indigo-400 font-bold mt-0.5">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
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