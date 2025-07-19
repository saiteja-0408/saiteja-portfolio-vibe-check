
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ExternalLink, Download, Mail, Github, Linkedin, ArrowRight, Code, Database, Cloud, Brain, Shield, Zap, Target, Clock, Star } from "lucide-react";

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const roles = [
    "Software Engineer",
    "DevOps Engineer", 
    "Data Engineer",
    "Test Automation Engineer",
    "Full-Stack Developer"
  ];

  const achievements = [
    { value: "4+", label: "Years Experience", icon: "⏰", color: "text-blue-400" },
    { value: "25+", label: "Projects Completed", icon: "📊", color: "text-green-400" },
    { value: "98%", label: "Success Rate", icon: "🎯", color: "text-purple-400" }
  ];

  const skills = [
    { name: "Python", level: 95, color: "bg-blue-500" },
    { name: "AWS", level: 88, color: "bg-orange-500" },
    { name: "React", level: 80, color: "bg-cyan-500" },
    { name: "Docker", level: 85, color: "bg-blue-600" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    // Google Drive link - Replace with your actual Google Drive link
    const googleDriveUrl = "https://drive.google.com/file/d/13dtPLjDGpL15VaZlUUfyintjf23GP8-Q/view?usp=sharing";
    
    // Convert to direct download link
    const directDownloadUrl = googleDriveUrl.replace('/view?usp=sharing', '/preview');
    
    // Open in new tab
    window.open(directDownloadUrl, '_blank', 'noopener,noreferrer');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-theme-primary via-accent-secondary to-theme-primary overflow-hidden">
      {/* Interactive Mouse Follower */}
      <motion.div
        className="fixed w-4 h-4 bg-blue-500/20 rounded-full pointer-events-none z-10"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { icon: Code, x: "10%", y: "20%", delay: 0 },
          { icon: Database, x: "80%", y: "30%", delay: 1 },
          { icon: Cloud, x: "20%", y: "70%", delay: 2 },
          { icon: Brain, x: "70%", y: "80%", delay: 3 },
          { icon: Shield, x: "50%", y: "10%", delay: 4 },
          { icon: Zap, x: "90%", y: "60%", delay: 5 }
        ].map((tech, index) => (
          <motion.div
            key={index}
            className="absolute text-white/10"
            style={{ left: tech.x, top: tech.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: tech.delay, duration: 1 }}
            whileHover={{ scale: 1.2, opacity: 0.3 }}
          >
            <tech.icon className="h-8 w-8" />
          </motion.div>
        ))}
      </div>

      <div className="section-container relative z-20">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center"
        >
          {/* Main Heading */}
          <motion.div variants={fadeInUp} className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-theme-primary mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Saiteja Singirikonda
              </span>
            </h1>
            <div className="text-2xl md:text-3xl text-theme-secondary mb-4">
              I'm a{" "}
              <motion.span
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-blue-400 font-semibold"
              >
                {roles[currentRoleIndex]}
              </motion.span>
            </div>
            <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
              Passionate about creating innovative solutions, automating processes, and driving measurable impact through technology.
            </p>
          </motion.div>

          {/* Achievement Cards */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 cursor-pointer group"
              >
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <div className={`text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors ${achievement.color}`}>
                  {achievement.value}
                </div>
                <div className="text-theme-secondary text-sm">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full group"
                onClick={handleViewProjects}
              >
                <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                View Projects
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="border-theme text-theme-primary hover:bg-theme-card/20 px-8 py-3 rounded-full group"
                onClick={handleDownloadResume}
              >
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Interactive Social Links */}
          <motion.div variants={fadeInUp} className="flex justify-center space-x-6">
            {[
              { icon: Mail, href: "mailto:saiteja0408.s@gmail.com", label: "Email" },
              { icon: Github, href: "https://github.com/saiteja-0408", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/saiteja-singirikonda/", label: "LinkedIn" }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-theme-secondary hover:text-theme-primary transition-colors group"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon className="h-6 w-6 group-hover:scale-110 transition-transform" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Interactive Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ArrowRight className="h-6 w-6 text-white/60 rotate-90" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
