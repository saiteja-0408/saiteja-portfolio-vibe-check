
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Mail, Github, Linkedin, ExternalLink, MousePointer, Code, Zap, Cpu, Database, Cloud } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TypewriterText = ({ text, speed = 100 }: { text: string; speed?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className="inline-block">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-0.5 h-6 bg-white ml-1"
      />
    </span>
  );
};

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    "DevOps Software Engineer",
    "Machine Learning Enthusiast", 
    "Cloud Infrastructure Expert",
    "Automation Specialist",
    "Full-Stack Developer",
    "Data Pipeline Architect"
  ];

  const technicalSkills = [
    { name: "Python", icon: "🐍", level: 95 },
    { name: "AWS", icon: "☁️", level: 88 },
    { name: "Docker", icon: "🐳", level: 85 },
    { name: "React", icon: "⚛️", level: 80 },
    { name: "ML/AI", icon: "🧠", level: 88 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

  const achievements = [
    { value: "70%", label: "Testing Time Reduction", icon: "⚡", color: "text-purple-400" },
    { value: "150K+", label: "Records Migrated", icon: "📊", color: "text-blue-400" },
    { value: "98%", label: "Migration Accuracy", icon: "🎯", color: "text-green-400" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Interactive Mouse Follower */}
      <motion.div
        className="fixed pointer-events-none z-50 w-4 h-4 bg-purple-400 rounded-full mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Glassmorphism Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-white/10 backdrop-blur-sm border border-white/20">
              🚀 Available for New Opportunities
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Saiteja Singirikonda
            </span>
          </motion.h1>

          {/* Dynamic Subtitle */}
          <motion.div variants={fadeInUp} className="mb-8">
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Helping Tech Teams Automate Testing, Migrate Systems & Visualize Data
            </p>
            <div className="text-lg text-purple-400 font-semibold h-8">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Role & Location */}
          <motion.div variants={fadeInUp} className="mb-8">
            <p className="text-lg text-gray-400 mb-4">
              <span className="text-purple-400 font-semibold">DevOps Software Engineer</span> at MyEdMaster
            </p>
            <p className="text-gray-400">
              📍 Arlington, Virginia | 🎓 MSCS @ GWU | ☁️ AWS Certified
            </p>
          </motion.div>

          {/* Technical Skills Showcase */}
          <motion.div variants={fadeInUp} className="mb-8">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Core Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-white font-medium">{skill.name}</span>
                  <div className="w-16 h-1 bg-gray-600 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Achievements */}
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
                <div className="text-gray-300 text-sm">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full group">
                <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                View Projects
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-3 rounded-full group">
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
                className="text-gray-400 hover:text-white transition-colors group"
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

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { icon: "⚛️", x: "10%", y: "20%", delay: 0 },
          { icon: "🐍", x: "85%", y: "30%", delay: 1 },
          { icon: "☁️", x: "20%", y: "70%", delay: 2 },
          { icon: "🐳", x: "80%", y: "80%", delay: 3 },
          { icon: "🧠", x: "50%", y: "15%", delay: 4 },
          { icon: "⚙️", x: "15%", y: "85%", delay: 5 },
          { icon: "📊", x: "90%", y: "60%", delay: 6 }
        ].map((tech, index) => (
          <motion.div
            key={index}
            className="absolute text-2xl opacity-20"
            style={{ left: tech.x, top: tech.y }}
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 4, 
              delay: tech.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
