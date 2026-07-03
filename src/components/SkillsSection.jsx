// src/components/SkillsSection.jsx
import { Code2, Database, Layout, Server, GitBranch, Terminal, Cpu, Zap } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    {
      category: "Programming Languages",
      icon: Code2,
      items: ["Java", "PHP", "JavaScript"],
      color: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      category: "Frameworks",
      icon: Server,
      items: ["Laravel", "CodeIgniter"],
      color: "from-red-500/20 to-pink-500/20",
      borderColor: "border-red-500/30"
    },
    {
      category: "Frontend",
      icon: Layout,
      items: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30"
    },
    {
      category: "Database",
      icon: Database,
      items: ["MySQL", "SQL"],
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30"
    },
    {
      category: "Tools & Technologies",
      icon: Terminal,
      items: ["Git", "GitHub", "VS Code", "XAMPP", "Composer", "Postman"],
      color: "from-purple-500/20 to-violet-500/20",
      borderColor: "border-purple-500/30"
    },
    {
      category: "Concepts",
      icon: Cpu,
      items: ["OOP", "MVC Architecture", "REST APIs"],
      color: "from-indigo-500/20 to-purple-500/20",
      borderColor: "border-indigo-500/30"
    }
  ];

  return (
    <section className="py-20 bg-[#0d0d1a] border-t border-white/5" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-mono mb-4">
            <Zap className="w-4 h-4" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-gray-200">My</span>
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent ml-2">Tech Arsenal</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto font-mono">
            Technologies and tools I work with to build amazing applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br ${skill.color} border ${skill.borderColor} p-6 rounded-xl backdrop-blur-sm hover:shadow-[0_0_40px_rgba(99,102,241,0.05)] transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors duration-300">
                  <skill.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="font-semibold text-gray-200 font-mono">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-sm rounded-lg font-mono hover:border-indigo-500/50 hover:text-indigo-400 transition-all duration-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;