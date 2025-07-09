import { Download } from "lucide-react";
import heroImage from "../assets/hero.webp";
import "../styles/hero.css";

const HeroSection = () => {
  return (
    <section className="bg-white h-screen flex items-center" id="home">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left */}
        <div className="text-center md:text-left space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">Hi,</h1>
          <h1 className="text-5xl sm:text-6xl font-bold text-indigo-600">
            <span className="text-black">I'm</span> Biswajit Karmakar
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 font-bold">
            A passionate Web <span className="text-indigo-600">Developer</span> and Graphic <span className="text-indigo-600">Designer</span>.
          </p>

          <div className="flex justify-center pt-10 md:justify-start gap-4">
            <a
              href="mailto:biswajitkarmakar404@gmail.com"
              className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition"
            >
              Hire Me
            </a>
            <a
              href="/Biswajit-Karmakar.pdf"
              download="Biswajit-Karmakar.pdf"
              className="flex items-center gap-2 border-2 border-indigo-600 text-indigo-600 px-5 py-2 rounded-full font-medium hover:bg-indigo-600 hover:text-white transition"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="w-100 h-100 mt-20 md:max-w-lg">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-full object-cover animate-updown"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
