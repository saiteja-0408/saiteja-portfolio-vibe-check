
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink, ArrowUp, Heart, Code, Zap } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    sections: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Projects", href: "#projects" },
      { name: "Skills", href: "#skills" },
      { name: "Contact", href: "#contact" }
    ],
    projects: [
      { name: "Health Platform", href: "#projects" },
      { name: "Testing Framework", href: "#projects" },
      { name: "Data Migration", href: "#projects" },
      { name: "ML Models", href: "#projects" }
    ],
    technologies: [
      { name: "Python", href: "#skills" },
      { name: "AWS", href: "#skills" },
      { name: "React", href: "#skills" },
      { name: "Docker", href: "#skills" }
    ]
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/saiteja-singirikonda/",
      icon: Linkedin,
      color: "text-blue-600"
    },
    {
      name: "GitHub",
      href: "https://github.com/saiteja-0408",
      icon: Github,
      color: "text-gray-800"
    },
    {
      name: "Email",
      href: "mailto:saiteja0408.s@gmail.com",
      icon: Mail,
      color: "text-red-600"
    }
  ];

  const achievements = [
    { value: "4+", label: "Years Experience" },
    { value: "25+", label: "Projects Completed" },
    { value: "98%", label: "Success Rate" },
    { value: "15+", label: "Technologies" }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Saiteja Singirikonda</h3>
                    <p className="text-gray-300 text-sm">DevOps Software Engineer</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  Passionate about building scalable solutions and automating processes. 
                  Always eager to learn new technologies and solve complex problems.
                </p>
                
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.sections.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Featured Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4">Featured Projects</h4>
              <ul className="space-y-2">
                {footerLinks.projects.map((project) => (
                  <li key={project.name}>
                    <a
                      href={project.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <Code className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {project.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-4">Technologies</h4>
              <ul className="space-y-2">
                {footerLinks.technologies.map((tech) => (
                  <li key={tech.name}>
                    <a
                      href={tech.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <Zap className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {tech.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Achievements Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-700"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {achievement.value}
                  </div>
                  <div className="text-sm text-gray-300">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 text-sm text-gray-300"
            >
              <span>© {currentYear} Saiteja Singirikonda. All rights reserved.</span>
              <span>•</span>
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>and lots of</span>
              <Code className="h-4 w-4 text-blue-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-4"
            >
              <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                Available for Opportunities
              </Badge>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-gray-300 hover:text-white hover:bg-white/10"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
