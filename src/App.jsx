import AboutMe from "./components/AboutMe";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  )
}