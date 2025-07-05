import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Left - Brand */}
        <div className="text-xl font-bold text-indigo-600">
          Biswajit<span className="text-black">.</span>
        </div>

        {/* Center - Links */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-600 font-medium">
          <a href="#home" className="hover:text-indigo-600 transition">Home</a>
          <a href="#about" className="hover:text-indigo-600 transition">About</a>
          <a href="#skills" className="hover:text-indigo-600 transition">Skills</a>
          <a href="#projects" className="hover:text-indigo-600 transition">Projects</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-4 text-gray-500 text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://dribbble.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            <FaDribbble />
          </a>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-sm text-gray-400 mt-6">
        &copy; {new Date().getFullYear()} Biswajit Karmakar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
