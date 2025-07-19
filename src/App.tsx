import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import LiveStats from "@/components/LiveStats";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-secondary via-theme-primary to-accent-secondary">
      <Header />
      <main className="pt-16">
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <LiveStats />
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
