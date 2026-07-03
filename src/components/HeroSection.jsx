// components/HeroSection.jsx
import { Download, Github, Linkedin, Mail, MapPin, Phone, Terminal, Sparkles, Code2, Cpu, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroImage from "../assets/hero.webp";
import "../styles/hero.css";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  
  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Particle System
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000));
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    initParticles();

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;
          
          if (distance < maxDistance) {
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - distance / maxDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05050a]" id="home">
      {/* Canvas for Particle System */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:60px_60px] z-0"></div>
      
      {/* Glowing Orbs with Parallax */}
      <div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-indigo-600 rounded-full blur-[150px] opacity-10 z-0"
        style={{ transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)` }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600 rounded-full blur-[150px] opacity-10 z-0"
        style={{ transform: `translate(${-mousePosition.x * 0.1}px, ${-mousePosition.y * 0.1}px)` }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600 rounded-full blur-[200px] opacity-5 z-0"
      ></div>

      {/* Animated Border Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-pulse z-1"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse z-1"></div>
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-indigo-500 to-transparent animate-pulse z-1"></div>
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-pulse z-1"></div>

      {/* Floating Tech Icons */}
      <div className="absolute top-20 left-10 z-0 animate-float-slow opacity-20 hidden lg:block">
        <Code2 className="w-12 h-12 text-indigo-500" />
      </div>
      <div className="absolute bottom-20 right-10 z-0 animate-float-delayed opacity-20 hidden lg:block">
        <Cpu className="w-12 h-12 text-purple-500" />
      </div>
      <div className="absolute top-1/3 right-20 z-0 animate-float-slower opacity-10 hidden lg:block">
        <Zap className="w-16 h-16 text-pink-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 py-20 w-full">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in-up">
            {/* Status Badge - Glowing */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-sm font-mono backdrop-blur-sm shadow-[0_0_30px_rgba(99,102,241,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>Available for opportunities</span>
            </div>
            
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight">
                <span className="text-gray-400 text-3xl sm:text-4xl lg:text-5xl block">Hi, I'm</span>
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  Biswajit Karmakar
                </span>
              </h1>
            </div>
            
            {/* Terminal-style Subtitle */}
            <div className="flex items-center gap-3 text-xl sm:text-2xl lg:text-3xl font-mono">
              <Terminal className="w-6 h-6 lg:w-8 lg:h-8 text-indigo-400 flex-shrink-0" />
              <span className="text-gray-300">
                <span className="typewriter-text ml-2">Software Developer & Full-Stack Enthusiast</span>
              </span>
            </div>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              MCA graduate with hands-on experience in PHP, Laravel, and full-stack development. 
              Passionate about building scalable web applications and solving real-world problems.
            </p>

            {/* Quick Info - Glass Cards */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm font-mono">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300 group">
                <MapPin className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400">Rajarhat, Kolkata</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300 group">
                <Phone className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400">+91 7679652990</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300 group">
                <Mail className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400">biswajitkarmakar404@gmail.com</span>
              </div>
            </div>

            {/* Stats with Animated Numbers */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-10 py-4">
              <div className="group cursor-pointer">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text">
                  2<span className="text-2xl">+</span>
                </div>
                <div className="text-sm text-gray-500 font-mono">Years Experience</div>
                <div className="w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 group-hover:w-full transition-all duration-500 mt-1"></div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                  5<span className="text-2xl">+</span>
                </div>
                <div className="text-sm text-gray-500 font-mono">Projects Completed</div>
                <div className="w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-500 mt-1"></div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text">
                  8.05
                </div>
                <div className="text-sm text-gray-500 font-mono">BCA CGPA</div>
                <div className="w-0 h-0.5 bg-gradient-to-r from-pink-400 to-red-400 group-hover:w-full transition-all duration-500 mt-1"></div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">
                  10<span className="text-2xl">+</span>
                </div>
                <div className="text-sm text-gray-500 font-mono">Technologies</div>
                <div className="w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-500 mt-1"></div>
              </div>
            </div>

            {/* Action Buttons - Enhanced */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <a
                href="mailto:biswajitkarmakar404@gmail.com"
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-mono font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(99,102,241,0.3)] overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                  Let's Connect
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>
              
              <a
                href="/Biswajit-Karmakar.pdf"
                download="Biswajit-Karmakar.pdf"
                className="group flex items-center gap-2 px-8 py-4 border border-indigo-500/30 text-indigo-400 rounded-lg font-mono font-semibold hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </a>
            </div>

            {/* Social Links - Glass Style */}
            <div className="flex justify-center lg:justify-start gap-3 pt-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300 group backdrop-blur-sm">
                <Github className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300 group backdrop-blur-sm">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300 group backdrop-blur-sm">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                </svg>
              </a>
              <a href="mailto:biswajitkarmakar404@gmail.com" className="p-3 bg-white/5 border border-white/10 rounded-xl hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300 group backdrop-blur-sm">
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 group-hover:scale-110 transition-all duration-300" />
              </a>
            </div>
          </div>

          {/* Right Image - Enhanced */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Rotating Rings */}
              <div className="absolute -inset-12 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
              <div className="absolute -inset-8 rounded-full border border-indigo-500/20 animate-spin-slow group-hover:animate-spin-slower transition-all duration-1000"></div>
              <div className="absolute -inset-12 rounded-full border border-purple-500/20 animate-spin-slower-reverse group-hover:animate-spin-slowest-reverse transition-all duration-1000"></div>
              <div className="absolute -inset-16 rounded-full border border-pink-500/10 animate-spin-slowest group-hover:animate-spin-slow transition-all duration-1000"></div>
              
              {/* Glowing Dots on Rings */}
              <div className="absolute -inset-8 rounded-full">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)]"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]"></div>
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-pink-500 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.5)]"></div>
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-cyan-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)]"></div>
              </div>
              
              {/* Image Container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-2 border-indigo-500/30 shadow-2xl shadow-indigo-500/10 group-hover:border-indigo-500/60 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-[#05050a] via-transparent to-transparent opacity-30"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img
                  src={heroImage}
                  alt="Biswajit Karmakar"
                  className="w-full h-full object-cover animate-float-slow group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -bottom-4 -right-4 bg-[#1a1a2e]/90 border border-indigo-500/30 rounded-2xl shadow-2xl shadow-indigo-500/10 p-4 animate-float-slow backdrop-blur-xl group-hover:border-indigo-500/60 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-mono text-gray-300">Open to Work</span>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 bg-[#1a1a2e]/90 border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-500/10 p-3 animate-float-delayed backdrop-blur-xl group-hover:border-purple-500/60 transition-all duration-300 group-hover:scale-110">
                <Terminal className="w-5 h-5 text-purple-400" />
              </div>

              <div className="absolute top-1/4 -right-8 bg-[#1a1a2e]/90 border border-pink-500/30 rounded-2xl shadow-2xl shadow-pink-500/10 p-3 animate-float-slower backdrop-blur-xl group-hover:border-pink-500/60 transition-all duration-300 group-hover:scale-110 hidden lg:block">
                <Code2 className="w-5 h-5 text-pink-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Enhanced */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow z-10">
        <span className="text-xs font-mono text-gray-500 tracking-widest">SCROLL</span>
        <div className="w-6 h-10 border border-gray-600 rounded-full flex justify-center backdrop-blur-sm bg-white/5">
          <div className="w-1.5 h-3 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full mt-2 animate-scroll shadow-[0_0_10px_rgba(99,102,241,0.3)]"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;