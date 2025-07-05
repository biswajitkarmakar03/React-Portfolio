import aboutImage from "../assets/about.webp"; // Replace with your image path
import { Download } from "lucide-react";

const AboutMe = () => {
  return (
    <section className="bg-gray-100 py-20" id="about">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left - Image */}
        <div className="flex justify-center">
          <img
            src={aboutImage}
            alt="About Me"
            className="w-full max-w-sm md:max-w-lg object-cover rounded-2xl"
          />
        </div>

        {/* Right - Text */}
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-4xl font-bold text-indigo-600">
            <span className="text-black">About</span> Me<span className="text-black">.</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            I'm Biswajit Karmakar, a dedicated and creative web developer and graphic designer
            with a passion for building visually appealing and user-friendly digital experiences.
            With a strong foundation in front-end technologies and an eye for design,
            I strive to bridge the gap between functionality and aesthetics.
            When I'm not coding or designing, I enjoy learning new tools, exploring tech trends,
            and solving creative problems.
          </p>

          {/* Download CV Button */}
          <a
            href="/Biswajit-Karmakar.pdf"
            download="Biswajit-Karmakar.pdf"
            className="inline-flex items-center gap-2 border-2 border-indigo-600 text-indigo-600 px-5 py-2 rounded-full font-medium hover:bg-indigo-600 hover:text-white transition"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
