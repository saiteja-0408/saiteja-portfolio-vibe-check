
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

  const projects: Project[] = [
    {
      id: 1,
      title: "Health & Wellness Platform",
      description: "Comprehensive cloud-based platform for health risk assessments and wellness tracking. Built with React frontend, Django backend, and ML models for personalized health insights.",
      image: "/placeholder.svg",
      technologies: ["React", "Django", "Python", "AWS", "ML", "Docker", "PostgreSQL"],
      category: "Full-Stack",
      github: "https://github.com/saiteja-0408/health-platform",
      live: "https://health-platform.demo.com",
      date: "2025",
      featured: true,
      complexity: "Advanced",
      impact: "Reduced health assessment time by 60%",
      role: "Lead Developer"
    },
    {
      id: 2,
      title: "Automated Testing Framework",
      description: "Custom Selenium-based testing framework that reduced testing time by 70%. Implemented parallel execution, CI/CD integration, and comprehensive reporting.",
      image: "/placeholder.svg",
      technologies: ["Selenium", "Java", "Jenkins", "Maven", "TestNG", "Docker"],
      category: "DevOps",
      github: "https://github.com/saiteja-0408/test-automation",
      date: "2022",
      featured: true,
      complexity: "Advanced",
      impact: "70% reduction in testing time",
      role: "Test Automation Engineer"
    },
    {
      id: 3,
      title: "Data Migration Pipeline",
      description: "ETL pipeline for migrating 150K+ records from Salesforce to SAP B1 with 98% accuracy. Built data validation, error handling, and rollback mechanisms.",
      image: "/placeholder.svg",
      technologies: ["Python", "Salesforce", "SAP B1", "XML", "XSLT", "ETL"],
      category: "Data Engineering",
      github: "https://github.com/saiteja-0408/data-migration",
      date: "2021",
      featured: true,
      complexity: "Advanced",
      impact: "98% migration accuracy",
      role: "Data Engineer"
    },
    {
      id: 4,
      title: "GW Athletics Dashboard",
      description: "Interactive dashboard for coaching analysis using Python, SQL, and Tableau. Provides real-time statistics and performance metrics for athletic teams.",
      image: "/placeholder.svg",
      technologies: ["Python", "SQL", "Tableau", "NumPy", "Seaborn", "PowerBI"],
      category: "Data Analytics",
      github: "https://github.com/saiteja-0408/athletics-dashboard",
      date: "2024",
      featured: false,
      complexity: "Intermediate",
      impact: "25% faster reporting",
      role: "Data Analyst"
    },
    {
      id: 5,
      title: "CI/CD Pipeline Automation",
      description: "Automated deployment pipeline using AWS, Docker, and Terraform. Reduced deployment time by 80% and improved reliability with infrastructure as code.",
      image: "/placeholder.svg",
      technologies: ["AWS", "Docker", "Terraform", "Jenkins", "Git", "Kubernetes"],
      category: "DevOps",
      github: "https://github.com/saiteja-0408/cicd-pipeline",
      date: "2025",
      featured: false,
      complexity: "Advanced",
      impact: "80% faster deployments",
      role: "DevOps Engineer"
    },
    {
      id: 6,
      title: "ML Health Risk Assessment",
      description: "Machine learning model for health risk assessment using Python and TensorFlow. Processes patient data to predict health risks with 85% accuracy.",
      image: "/placeholder.svg",
      technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "ML"],
      category: "Machine Learning",
      github: "https://github.com/saiteja-0408/ml-health-assessment",
      date: "2025",
      featured: false,
      complexity: "Advanced",
      impact: "85% prediction accuracy",
      role: "ML Engineer"
    }
  ];

  const categories = ["all", "Full-Stack", "DevOps", "Data Engineering", "Data Analytics", "Machine Learning"];
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
      filtered = filtered.filter(project => project.category === selectedCategory);
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
      case "Full-Stack": return <Code className="h-4 w-4" />;
      case "DevOps": return <Shield className="h-4 w-4" />;
      case "Data Engineering": return <Database className="h-4 w-4" />;
      case "Data Analytics": return <Zap className="h-4 w-4" />;
      case "Machine Learning": return <Brain className="h-4 w-4" />;
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
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
            Showcasing my technical expertise through real-world projects that demonstrate 
            problem-solving, innovation, and impact across various domains.
          </p>
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
                      {category === "all" ? "All Categories" : category}
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
                    <Card className="h-full bg-theme-card/50 backdrop-blur-sm border border-theme overflow-hidden hover:shadow-xl transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            {getCategoryIcon(project.category)}
                            <Badge variant="outline" className="text-xs">
                              {project.category}
                            </Badge>
                          </div>
                          {project.featured && (
                            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg font-bold text-theme-primary group-hover:text-accent-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <div className="flex items-center justify-between text-sm text-theme-secondary">
                          <span>{project.date}</span>
                          <Badge className={getComplexityColor(project.complexity)}>
                            {project.complexity}
                          </Badge>
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
                          {project.technologies.slice(0, 4).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 4} more
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
          className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Total Projects", value: projects.length, icon: "📊" },
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
