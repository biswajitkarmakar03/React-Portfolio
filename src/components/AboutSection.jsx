// src/components/AboutSection.jsx
import { Code2, GraduationCap, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-[#0a0a0f] border-t border-white/5" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-mono mb-4">
            <Code2 className="w-4 h-4" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-gray-200">Know</span>
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent ml-2">Me Better</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-200 mb-4">
              MCA Graduate with a Passion for Development
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm Biswajit Karmakar, a dedicated Software Developer with a Master's in Computer Applications 
              from Durgapur Institute of Advanced Technology and Management. My journey in tech started with 
              a BCA from Burdwan Institute of Management and Computer Science.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              With hands-on experience in PHP, Laravel, and full-stack development, I've built scalable 
              CRM applications and job portals. I'm passionate about writing clean code, solving complex 
              problems, and continuously learning new technologies.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg backdrop-blur-sm">
                <span className="font-mono text-indigo-400 block">MCA</span>
                <p className="text-sm text-gray-400">CGPA: 7.47</p>
              </div>
              <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg backdrop-blur-sm">
                <span className="font-mono text-purple-400 block">BCA</span>
                <p className="text-sm text-gray-400">CGPA: 8.05</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 p-6 rounded-xl text-center backdrop-blur-sm group hover:border-indigo-500/40 transition-all duration-300">
              <GraduationCap className="w-8 h-8 text-indigo-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-gray-200">2+</div>
              <p className="text-sm text-gray-400 font-mono">Years Experience</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 p-6 rounded-xl text-center backdrop-blur-sm group hover:border-purple-500/40 transition-all duration-300">
              <Award className="w-8 h-8 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-gray-200">10+</div>
              <p className="text-sm text-gray-400 font-mono">Technologies</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 p-6 rounded-xl text-center backdrop-blur-sm group hover:border-blue-500/40 transition-all duration-300">
              <Code2 className="w-8 h-8 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-gray-200">5+</div>
              <p className="text-sm text-gray-400 font-mono">Projects</p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 p-6 rounded-xl text-center backdrop-blur-sm group hover:border-green-500/40 transition-all duration-300">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-3xl font-bold text-gray-200">100%</div>
              <p className="text-sm text-gray-400 font-mono">Commitment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;