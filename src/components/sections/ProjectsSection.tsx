
import { useState, useMemo, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Search, Filter, Calendar, Code, Database, Cloud, Brain, Shield, Zap } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  github?: string;
  live?: string;
  date: string;
  featured: boolean;
  complexity: "Beginner" | "Intermediate" | "Advanced";
  impact: string;
  role: string;
}

const ProjectsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedComplexity, setSelectedComplexity] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [expandedTechnologies, setExpandedTechnologies] = useState<Set<number>>(new Set());

  // Listen for filter events from navigation
  useEffect(() => {
    const handleFilterEvent = (event: CustomEvent) => {
      const { category } = event.detail;
      if (category) {
        setSelectedCategory(category);
        // Clear other filters when filtering by category
        setSearchTerm("");
        setSelectedComplexity("all");
      }
    };

    window.addEventListener('filterProjects', handleFilterEvent as EventListener);
    
    return () => {
      window.removeEventListener('filterProjects', handleFilterEvent as EventListener);
    };
  }, []);

  const toggleTechnologies = (projectId: number) => {
    setExpandedTechnologies(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Layout Overlap Detector",
      description: "High-performance Qt 6/QML demo showcasing sweep-line overlap detection engine in O(n log n) time. Mimics Siemens Calibre DESIGNrev geometry checks with background threading, dynamic UI, and JSON-driven layouts. Perfect for learning EDA-style geometry algorithms.",
      image: "/ProjectsPhotos/Layout Overlap Detector.png",
      technologies: ["Qt 6", "QML", "C++", "CMake", "nlohmann-json", "Sweep-Line Algorithm", "Background Threading"],
      category: "Algorithm Engineering",
      github: "https://github.com/saiteja-0408/layout-overlap-detector",
      date: "2025",
      featured: true,
      complexity: "Advanced",
      impact: "O(n log n) performance vs O(n²) naive approach",
      role: "Lead Developer"
    },
    {
      id: 2,
      title: "Automated Extraction & Validation",
      description: "Playwright-based automation framework for web data extraction, sorting, and validation. Features robust error handling, dynamic output naming, command-line customization, and comprehensive data processing pipelines.",
      image: "/ProjectsPhotos/Automated Extraction & Validation.png",
      technologies: ["Playwright", "JavaScript", "Node.js", "Web Automation", "Data Processing", "Error Handling"],
      category: "Automation",
      github: "https://github.com/saiteja-0408/Automated-Extraction-Sorting-Validation-Using-Playwright",
      date: "2025",
      featured: true,
      complexity: "Advanced",
      impact: "Automated data extraction with 95% accuracy",
      role: "Automation Engineer"
    },
    {
      id: 3,
      title: "Unqork Corporate Vehicle Tracker",
      description: "Enterprise-grade vehicle request tracking system built on Unqork's no-code platform. Streamlines corporate fleet management with approval workflows, real-time tracking, and comprehensive reporting dashboards.",
      image: "/ProjectsPhotos/Unqork Corporate Vehicle Tracker.png",
      technologies: ["Unqork", "No-Code Platform", "JavaScript", "API Integration", "Workflow Automation"],
      category: "Enterprise Solutions",
      github: "https://github.com/saiteja-0408/unqork-corporate-vehicle-request-tracker",
      date: "2024",
      featured: true,
      complexity: "Intermediate",
      impact: "Streamlined vehicle request process by 70%",
      role: "Platform Developer"
    },
    {
      id: 4,
      title: "CISC Simulator",
      description: "Educational computer architecture simulator implementing CISC instruction set. Features interactive assembly programming, memory management, and real-time instruction execution visualization for learning computer organization concepts.",
      image: "/ProjectsPhotos/CISC Simulator.png",
      technologies: ["C++", "Computer Architecture", "Assembly", "Memory Management", "Educational Software"],
      category: "Educational Software",
      github: "https://github.com/saiteja-0408/CISC-Simulator",
      date: "2024",
      featured: true,
      complexity: "Intermediate",
      impact: "Enhanced computer architecture learning experience",
      role: "Educational Software Developer"
    },
    {
      id: 5,
      title: "Deep Learning Uber Fare Prediction",
      description: "Machine learning model for Uber fare prediction using deep learning techniques. Processes historical ride data, weather conditions, and traffic patterns to predict accurate fare estimates with advanced neural network architectures.",
      image: "/ProjectsPhotos/Deep Learning Uber Fare Prediction.png",
      technologies: ["Python", "TensorFlow", "Deep Learning", "Neural Networks", "Data Science", "Pandas", "NumPy"],
      category: "Machine Learning",
      github: "https://github.com/saiteja-0408/Deep-Learning-for-Uber-Fare-Prediction",
      date: "2024",
      featured: true,
      complexity: "Advanced",
      impact: "Improved fare prediction accuracy by 15%",
      role: "ML Engineer"
    },
    {
      id: 6,
      title: "Health & Wellness Platform",
      description: "Comprehensive cloud-based platform for health risk assessments and wellness tracking. Built with React frontend, Django backend, and ML models for personalized health insights.",
      image: "/ProjectsPhotos/Health & Wellness Platform.png",
      technologies: ["React", "Django", "Python", "AWS", "ML", "Docker", "PostgreSQL"],
      category: "Full-Stack",
      date: "2025",
      featured: false,
      complexity: "Advanced",
      impact: "Reduced health assessment time by 60%",
      role: "Lead Developer"
    },
    {
      id: 7,
      title: "Automated Testing Framework",
      description: "Custom Selenium-based testing framework that reduced testing time by 70%. Implemented parallel execution, CI/CD integration, and comprehensive reporting.",
      image: "/ProjectsPhotos/Automated Testing Framework.png",
      technologies: ["Selenium", "Java", "Jenkins", "Maven", "TestNG", "Docker"],
      category: "DevOps",
      date: "2022",
      featured: false,
      complexity: "Advanced",
      impact: "70% reduction in testing time",
      role: "Test Automation Engineer"
    },
    {
      id: 8,
      title: "Data Migration Pipeline",
      description: "ETL pipeline for migrating 150K+ records from Salesforce to SAP B1 with 98% accuracy. Built data validation, error handling, and rollback mechanisms.",
      image: "/ProjectsPhotos/Data Migration Pipeline.png",
      technologies: ["Python", "Salesforce", "SAP B1", "XML", "XSLT", "ETL"],
      category: "Data Engineering",
      date: "2021",
      featured: false,
      complexity: "Advanced",
      impact: "98% migration accuracy",
      role: "Data Engineer"
    },
    {
      id: 9,
      title: "GW Athletics Dashboard",
      description: "Interactive dashboard for coaching analysis using Python, SQL, and Tableau. Provides real-time statistics and performance metrics for athletic teams.",
      image: "/ProjectsPhotos/GW Athletics Dashboard.png",
      technologies: ["Python", "SQL", "Tableau", "NumPy", "Seaborn", "PowerBI"],
      category: "Data Analytics",
      date: "2024",
      featured: false,
      complexity: "Intermediate",
      impact: "25% faster reporting",
      role: "Data Analyst"
    },
    {
      id: 10,
      title: "CI/CD Pipeline Automation",
      description: "Automated deployment pipeline using AWS, Docker, and Terraform. Reduced deployment time by 80% and improved reliability with infrastructure as code.",
      image: "/ProjectsPhotos/CI:CD Pipeline Automation.png",
      technologies: ["AWS", "Docker", "Terraform", "Jenkins", "Git", "Kubernetes"],
      category: "DevOps",
      date: "2025",
      featured: false,
      complexity: "Advanced",
      impact: "80% faster deployments",
      role: "DevOps Engineer"
    },
    {
      id: 11,
      title: "ML Health Risk Assessment",
      description: "Machine learning model for health risk assessment using Python and TensorFlow. Processes patient data to predict health risks with 85% accuracy.",
      image: "/ProjectsPhotos/ML Health Risk Assessment.png",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "ML"],
      category: "Machine Learning",
      date: "2025",
      featured: false,
      complexity: "Advanced",
      impact: "85% prediction accuracy",
      role: "ML Engineer"
    }
  ];

  const categories = ["all", "github", "Algorithm Engineering", "Automation", "Enterprise Solutions", "Educational Software", "Machine Learning", "Full-Stack", "DevOps", "Data Engineering", "Data Analytics"];
  const complexities = ["all", "Beginner", "Intermediate", "Advanced"];

  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      if (selectedCategory === "github") {
        filtered = filtered.filter(project => project.github);
      } else {
        filtered = filtered.filter(project => project.category === selectedCategory);
      }
    }

    // Filter by complexity
    if (selectedComplexity !== "all") {
      filtered = filtered.filter(project => project.complexity === selectedComplexity);
    }

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date": {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
        case "complexity": {
          const complexityOrder = { "Beginner": 1, "Intermediate": 2, "Advanced": 3 };
          return complexityOrder[b.complexity] - complexityOrder[a.complexity];
        }
        case "name": {
          return a.title.localeCompare(b.title);
        }
        default: {
          return 0;
        }
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedComplexity, sortBy, projects]);

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Algorithm Engineering": return <Code className="h-4 w-4" />;
      case "Automation": return <Shield className="h-4 w-4" />;
      case "Enterprise Solutions": return <Database className="h-4 w-4" />;
      case "Educational Software": return <Brain className="h-4 w-4" />;
      case "Machine Learning": return <Zap className="h-4 w-4" />;
      case "Full-Stack": return <Cloud className="h-4 w-4" />;
      case "DevOps": return <Shield className="h-4 w-4" />;
      case "Data Engineering": return <Database className="h-4 w-4" />;
      case "Data Analytics": return <Zap className="h-4 w-4" />;
      default: return <Code className="h-4 w-4" />;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-theme-secondary to-theme-primary">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h2 className="section-title">Featured Projects</h2>
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
              <Github className="h-6 w-6 text-white" />
            </div>
          </div>
          <p className="text-xl text-theme-secondary max-w-4xl mx-auto leading-relaxed">
            Showcasing my technical expertise through real-world projects that demonstrate 
            problem-solving, innovation, and impact across various domains. 
            <span className="text-green-500 font-semibold"> GitHub projects featured first</span> with 
            advanced algorithms, automation frameworks, and enterprise solutions.
          </p>
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-sm text-theme-secondary">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>GitHub Projects</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-theme-secondary">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>Featured</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-theme-secondary">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Advanced</span>
            </div>
          </div>
        </motion.div>

        {/* Advanced Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-theme-secondary h-4 w-4" />
              <Input
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : 
                       category === "github" ? "GitHub Projects" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedComplexity} onValueChange={setSelectedComplexity}>
                <SelectTrigger className="w-40">
                  <Zap className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Complexity" />
                </SelectTrigger>
                <SelectContent>
                  {complexities.map((complexity) => (
                    <SelectItem key={complexity} value={complexity}>
                      {complexity === "all" ? "All Levels" : complexity}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-32">
                  <Calendar className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="complexity">Complexity</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Active Filters Display */}
          {(searchTerm || selectedCategory !== "all" || selectedComplexity !== "all") && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="flex flex-wrap gap-2 items-center"
            >
              <span className="text-sm text-theme-secondary mr-2">Active Filters:</span>
              {searchTerm && (
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Search: {searchTerm}
                </Badge>
              )}
              {selectedCategory !== "all" && (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Category: {selectedCategory}
                </Badge>
              )}
              {selectedComplexity !== "all" && (
                <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                  Complexity: {selectedComplexity}
                </Badge>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedComplexity("all");
                }}
                className="text-theme-secondary hover:text-theme-primary border-theme"
              >
                Clear All Filters
              </Button>
            </motion.div>
          )}
        </motion.div>



        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Show All Projects Button when filters are active */}
          {(searchTerm || selectedCategory !== "all" || selectedComplexity !== "all") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-6"
            >
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedComplexity("all");
                }}
                variant="default"
                className="bg-blue-600 hover:bg-blue-700"
              >
                Show All Projects ({projects.length})
              </Button>
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12"
              >
                <div className="text-theme-secondary text-lg mb-4">No projects found matching your criteria</div>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setSelectedComplexity("all");
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group"
                  >
                    <Card className={`h-full backdrop-blur-sm border overflow-hidden hover:shadow-xl transition-all duration-300 ${
                      project.github 
                        ? "bg-gradient-to-br from-theme-card/80 to-theme-card/60 border-gradient-to-r from-green-400/50 to-emerald-400/50" 
                        : "bg-theme-card/50 border-theme"
                    }`}>
                      {/* Project Image */}
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border-b border-gray-200">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                          style={{ maxHeight: '100%', maxWidth: '100%' }}
                          onLoad={() => console.log(`✅ Image loaded: ${project.image}`)}
                          onError={(e) => {
                            console.error(`❌ Image failed to load: ${project.image}`);
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.innerHTML = `
                              <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                                <div class="text-center text-gray-500">
                                  <div class="text-4xl mb-2">📱</div>
                                  <div class="text-sm">Project Preview</div>
                                  <div class="text-xs mt-1">${project.title}</div>
                                </div>
                              </div>
                            `;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute top-3 right-3 flex gap-2">
                          {project.github && (
                            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs">
                              <Github className="h-3 w-3 mr-1" />
                              GitHub
                            </Badge>
                          )}
                          {project.featured && (
                            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <div className="absolute bottom-3 left-3">
                          <Badge className="bg-white/20 backdrop-blur-sm text-white text-xs">
                            {project.complexity}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-2 mb-2">
                          {getCategoryIcon(project.category)}
                          <Badge variant="outline" className="text-xs">
                            {project.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg font-bold text-theme-primary group-hover:text-accent-primary transition-colors flex items-center gap-2">
                          {project.title}
                          {project.github && (
                            <span className="text-xs text-green-500 animate-pulse">⭐</span>
                          )}
                        </CardTitle>
                        <div className="flex items-center justify-between text-sm text-theme-secondary">
                          <span>{project.date}</span>
                          <span className="text-xs text-theme-secondary">{project.role}</span>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <p className="text-theme-secondary text-sm mb-4 line-clamp-3">
                          {project.description}
                        </p>
                        
                        <div className="space-y-3 mb-4">
                          <div className="text-xs text-theme-secondary">
                            <strong>Impact:</strong> {project.impact}
                          </div>
                          <div className="text-xs text-theme-secondary">
                            <strong>Role:</strong> {project.role}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-4">
                          {expandedTechnologies.has(project.id) 
                            ? project.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))
                            : (
                              <>
                                {project.technologies.slice(0, 4).map((tech) => (
                                  <Badge key={tech} variant="secondary" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                                {project.technologies.length > 4 && (
                                  <Badge 
                                    variant="outline" 
                                    className="text-xs cursor-pointer hover:bg-theme-secondary hover:text-theme-primary transition-colors"
                                    onClick={() => toggleTechnologies(project.id)}
                                  >
                                    +{project.technologies.length - 4} more
                                  </Badge>
                                )}
                              </>
                          )}
                          {expandedTechnologies.has(project.id) && project.technologies.length > 4 && (
                            <Badge 
                              variant="outline" 
                              className="text-xs cursor-pointer hover:bg-theme-secondary hover:text-theme-primary transition-colors"
                              onClick={() => toggleTechnologies(project.id)}
                            >
                              Show less
                            </Badge>
                          )}
                        </div>

                        <div className="flex gap-2">
                          {project.github && (
                            <Button size="sm" variant="outline" asChild>
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-1" />
                                Code
                              </a>
                            </Button>
                          )}
                          {project.live && (
                            <Button size="sm" variant="outline" asChild>
                              <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-4 w-4 mr-1" />
                                Live
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-6"
        >
          {[
            { label: "Total Projects", value: projects.length, icon: "📊" },
            { label: "GitHub Projects", value: 5, icon: "🐙" },
            { label: "Featured Projects", value: projects.filter(p => p.featured).length, icon: "⭐" },
            { label: "Advanced Level", value: projects.filter(p => p.complexity === "Advanced").length, icon: "🚀" },
            { label: "Technologies Used", value: new Set(projects.flatMap(p => p.technologies)).size, icon: "🛠️" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4 bg-theme-card/30 backdrop-blur-sm rounded-lg border border-theme"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-theme-primary">{stat.value}</div>
              <div className="text-sm text-theme-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
