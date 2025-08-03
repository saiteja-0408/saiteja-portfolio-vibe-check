
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Calendar, MapPin, GraduationCap, Award, Code, Database, Cloud, Zap, Brain, Server, Shield } from "lucide-react";

const AboutSection = () => {
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

  const experience = [
    {
      company: "MyEdMaster",
      role: "DevOps Software Engineer",
      duration: "May 2025 - Present",
      location: "Washington, DC",
      achievements: [
        "Building comprehensive cloud-based health and wellness platform with React & Django",
        "Implementing ML models for health risk assessments using Python & TensorFlow",
        "Reducing deployment time by 80% with CI/CD pipelines using AWS & Docker",
        "Managing infrastructure as code with Terraform and AWS CloudFormation"
      ],
      tech: ["React", "Django", "AWS", "ML", "Python", "Docker", "Terraform"]
    },
    {
      company: "The George Washington University",
      role: "Software Engineer",
      duration: "Aug 2023 - Jul 2025",
      location: "Washington, DC",
      achievements: [
        "Data analysis and visualization for GW Athletics using Python & SQL",
        "Created interactive dashboards for coaching analysis with Tableau & PowerBI",
        "Utilized Python, SQL, Tableau for statistical analysis and reporting",
        "Built automated data pipelines reducing manual work by 60%"
      ],
      tech: ["Python", "SQL", "Tableau", "NumPy", "Seaborn", "PowerBI"]
    },
    {
      company: "Wipro",
      role: "Software Development Engineer",
      duration: "Dec 2021 - Dec 2022",
      location: "Bangalore, India",
      achievements: [
        "Reduced testing time by 70% using Selenium frameworks and custom automation",
        "Automated complete websites and test frameworks with Java & Selenium",
        "Increased test coverage by 20% for critical modules using CI/CD",
        "Implemented parallel test execution reducing test suite time by 50%"
      ],
      tech: ["Selenium", "Java", "Test Automation", "CI/CD", "Jenkins", "Maven"]
    },
    {
      company: "Veon Consulting",
      role: "Software Developer",
      duration: "Mar 2020 - Sep 2021",
      location: "Hyderabad, India",
      achievements: [
        "Migrated 150K+ records with 98% accuracy (Salesforce → SAP B1)",
        "Led team of 5 in database migration projects using ETL tools",
        "Created workflows for data migration to multiple platforms",
        "Implemented data validation and error handling reducing migration errors by 90%"
      ],
      tech: ["Salesforce", "SAP B1", "XML", "XSLT", "Database", "ETL"]
    }
  ];

  const skills = [
    { name: "Python", level: 95, category: "Programming", icon: "🐍" },
    { name: "JavaScript", level: 90, category: "Programming", icon: "⚡" },
    { name: "Java", level: 85, category: "Programming", icon: "☕" },
    { name: "SQL", level: 90, category: "Database", icon: "🗄️" },
    { name: "AWS", level: 88, category: "Cloud", icon: "☁️" },
    { name: "Docker", level: 85, category: "DevOps", icon: "🐳" },
    { name: "Selenium", level: 92, category: "Testing", icon: "🔍" },
    { name: "React", level: 80, category: "Frontend", icon: "⚛️" },
    { name: "Django", level: 75, category: "Backend", icon: "🐍" },
    { name: "Tableau", level: 85, category: "Data", icon: "📊" },
    { name: "Machine Learning", level: 88, category: "AI/ML", icon: "🧠" },
    { name: "Git", level: 90, category: "DevOps", icon: "📝" }
  ];

  const certifications = [
    { name: "AWS Certified Solutions Architect", icon: "☁️", color: "text-orange-500" },
    { name: "Certified Unqork Developer", icon: "⚡", color: "text-blue-500" },
    { name: "Python Programming", icon: "🐍", color: "text-green-500" },
    { name: "Machine Learning", icon: "🧠", color: "text-purple-500" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-theme-secondary to-theme-primary">
      <div className="section-container">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="section-title">About Me</h2>
            <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
              Tech shouldn't slow you down. It should automate, accelerate, and scale. 
              I help companies do just that with 3+ years of experience in software engineering.
            </p>
          </motion.div>

          {/* Personal Story */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">My Journey</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  I'm a <span className="font-semibold text-blue-600">Certified Unqork Developer</span> and 
                  <span className="font-semibold text-blue-600"> AWS-trained engineer</span> with a passion for 
                  building smarter systems and solving critical problems.
                </p>
                <p>
                  I've built real-time web scrapers, workflow automations, and scalable backend systems using 
                  Python, Java, SQL, Tableau, Flask, Spring Boot, AWS, Docker, Jenkins, REST APIs, and Selenium.
                </p>
                <p>
                  Whether it's building smarter systems or solving critical problems— I use tech to remove 
                  bottlenecks and increase velocity.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      <span className="mr-1">{cert.icon}</span>
                      {cert.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">Key Achievements</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Cut testing time by 70% using custom Selenium frameworks</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">Migrated 150K+ records with 98% accuracy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-700">Automated data pipelines that sped up reporting by 25%</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">Built CI/CD pipelines reducing deployment time by 40%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technical Expertise */}
              <Card className="bg-white/50 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">Technical Expertise</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <Cloud className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-700">Cloud Infrastructure</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Brain className="h-4 w-4 text-purple-500" />
                      <span className="text-sm text-gray-700">Machine Learning</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Server className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-700">Backend Development</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4 text-orange-500" />
                      <span className="text-sm text-gray-700">DevOps & Security</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Skills Visualization */}
          <motion.div variants={fadeInUp} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200/50"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 mt-1">{skill.category}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Professional Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="lg:w-1/3">
                      <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200/50">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">{exp.role}</h4>
                        <p className="text-lg font-semibold text-blue-600 mb-2">{exp.company}</p>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center text-gray-600 mb-4">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-2/3">
                      <div className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200/50">
                        <h5 className="font-semibold text-gray-800 mb-3">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
