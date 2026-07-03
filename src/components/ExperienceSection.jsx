// src/components/ExperienceSection.jsx
import { Briefcase, Calendar, MapPin, Star } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Essgee Enterprise",
      location: "Kolkata",
      period: "Aug 2025 – Apr 2026",
      achievements: [
        "Developed full-scale CRM with multi-role access for 5+ business modules",
        "Optimized database queries improving response time by 40%",
        "Implemented CSV/Excel import-export reducing data entry time by 60%"
      ],
      description: [
        "Developed and maintained a full-scale CRM application using PHP with multi-role access, serving modules including Customer, Products, Accounts, AMC, Inventory, Projects, and Employee Management.",
        "Implemented secure authentication, authorization, CRUD operations, server-side validation, advanced filtering, search, sorting, and pagination to enhance system functionality.",
        "Optimized backend performance through MySQL indexing, query optimization, aggregation, joins, and AJAX-based asynchronous data loading.",
        "Built reusable components and implemented CSV/Excel import-export functionality, improving workflow efficiency and application maintainability."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "WbElysium",
      location: "Burdwan",
      period: "Apr 2023 – Sept 2023",
      achievements: [
        "Debugged and resolved 20+ critical software defects",
        "Collaborated on 5+ successful module deployments",
        "Improved code quality through active participation in code reviews"
      ],
      description: [
        "Assisted in developing and integrating software modules using industry-standard development practices.",
        "Debugged applications, resolved software defects, and improved application reliability and performance.",
        "Collaborated with senior developers during code reviews to enhance code quality and maintainability.",
        "Gained practical experience in software development, testing, troubleshooting, and version control workflows."
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#0a0a0f] border-t border-white/5" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-mono mb-4">
            <Briefcase className="w-4 h-4" />
            <span>Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-gray-200">Professional</span>
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent ml-2">Journey</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mt-4"></div>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 blur-sm opacity-50"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12`}>
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-[#0a0a0f] z-10 shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                <div className="absolute inset-0 rounded-full animate-ping bg-indigo-400 opacity-50"></div>
              </div>

              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:shadow-[0_0_40px_rgba(99,102,241,0.05)] transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <Briefcase className="w-6 h-6 text-indigo-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-200">{exp.title}</h3>
                      <p className="text-indigo-400 font-mono">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 font-mono mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-indigo-400" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-purple-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-indigo-500/5 border border-indigo-500/10 rounded-lg">
                    <div className="flex items-center gap-2 text-indigo-400 text-sm font-mono mb-2">
                      <Star className="w-4 h-4" />
                      <span>Key Achievements</span>
                    </div>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-400 text-sm flex gap-2">
                          <span className="text-indigo-400">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm leading-relaxed flex gap-2">
                        <span className="text-indigo-400 font-bold">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;