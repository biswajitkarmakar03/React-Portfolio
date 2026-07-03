// src/components/Footer.jsx
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#050508] border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-mono">
              Biswajit Karmakar
            </h3>
            <p className="text-gray-500 text-sm font-mono">Software Developer</p>
          </div>

          <div className="flex gap-3">
            <a 
              href="https://github.com/biswajitkarmakar03" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/5 border border-white/10 rounded-lg hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-gray-500 group-hover:text-indigo-400" />
            </a>
            <a 
              href="https://www.linkedin.com/in/biswajit-karmakar03" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white/5 border border-white/10 rounded-lg hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-gray-500 group-hover:text-indigo-400" />
            </a>
            <a 
              href="mailto:biswajitkarmakar404@gmail.com"
              className="p-2 bg-white/5 border border-white/10 rounded-lg hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-gray-500 group-hover:text-indigo-400" />
            </a>
          </div>

          <p className="text-gray-500 text-sm font-mono flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-400 animate-pulse" /> © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;