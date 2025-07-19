
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Cloud, Brain, Shield, Zap, BarChart3, Grid3X3, TrendingUp, Target, Clock, Star } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
  description: string;
  years: number;
  projects: number;
  certifications: string[];
  trending: "up" | "down" | "stable";
  lastUsed: string;
}

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"bars" | "cards" | "radar">("bars");
  const [sortBy, setSortBy] = useState<"level" | "name" | "years" | "projects">("level");

  const skills: Skill[] = [
    {
      name: "Python",
      level: 95,
      category: "Programming",
      icon: "🐍",
      description: "Core language for data science, automation, and backend development",
      years: 4,
      projects: 12,
      certifications: ["Python Programming", "Data Science"],
      trending: "up",
      lastUsed: "2025"
    },
    {
      name: "AWS",
      level: 88,
      category: "Cloud",
      icon: "☁️",
      description: "Cloud infrastructure, deployment, and serverless architecture",
      years: 3,
      projects: 8,
      certifications: ["AWS Certified Solutions Architect"],
      trending: "up",
      lastUsed: "2025"
    },
    {
      name: "Selenium",
      level: 92,
      category: "Testing",
      icon: "🔍",
      description: "Automated testing frameworks and CI/CD integration",
      years: 3,
      projects: 6,
      certifications: ["Test Automation"],
      trending: "stable",
      lastUsed: "2024"
    },
    {
      name: "React",
      level: 80,
      category: "Frontend",
      icon: "⚛️",
      description: "Modern frontend development with TypeScript and state management",
      years: 2,
      projects: 5,
      certifications: ["Frontend Development"],
      trending: "up",
      lastUsed: "2025"
    },
    {
      name: "Django",
      level: 75,
      category: "Backend",
      icon: "🐍",
      description: "Full-stack web development with Python backend",
      years: 2,
      projects: 4,
      certifications: ["Backend Development"],
      trending: "up",
      lastUsed: "2025"
    },
    {
      name: "SQL",
      level: 90,
      category: "Database",
      icon: "🗄️",
      description: "Database design, optimization, and data migration",
      years: 4,
      projects: 10,
      certifications: ["Database Management"],
      trending: "stable",
      lastUsed: "2025"
    },
    {
      name: "Docker",
      level: 85,
      category: "DevOps",
      icon: "🐳",
      description: "Containerization and deployment automation",
      years: 3,
      projects: 7,
      certifications: ["DevOps Engineering"],
      trending: "up",
      lastUsed: "2025"
    },
    {
      name: "Machine Learning",
      level: 88,
      category: "AI/ML",
      icon: "🧠",
      description: "ML models, data analysis, and predictive modeling",
      years: 3,
      projects: 6,
      certifications: ["Machine Learning", "Data Science"],
      trending: "up",
      lastUsed: "2025"
    },
    {
      name: "Java",
      level: 85,
      category: "Programming",
      icon: "☕",
      description: "Enterprise development and system architecture",
      years: 3,
      projects: 8,
      certifications: ["Java Development"],
      trending: "stable",
      lastUsed: "2024"
    },
    {
      name: "Tableau",
      level: 85,
      category: "Data Analytics",
      icon: "📊",
      description: "Data visualization and business intelligence",
      years: 2,
      projects: 5,
      certifications: ["Data Analytics"],
      trending: "up",
      lastUsed: "2025"
    },
    {
      name: "Git",
      level: 90,
      category: "DevOps",
      icon: "📝",
      description: "Version control and collaborative development",
      years: 4,
      projects: 15,
      certifications: ["Git & GitHub"],
      trending: "stable",
      lastUsed: "2025"
    },
    {
      name: "Terraform",
      level: 70,
      category: "DevOps",
      icon: "🏗️",
      description: "Infrastructure as code and cloud automation",
      years: 2,
      projects: 3,
      certifications: ["Infrastructure as Code"],
      trending: "up",
      lastUsed: "2025"
    }
  ];

  const categories = ["all", "Programming", "Cloud", "Testing", "Frontend", "Backend", "Database", "DevOps", "AI/ML", "Data Analytics"];

  const filteredSkills = skills.filter(skill => 
    selectedCategory === "all" || skill.category === selectedCategory
  ).sort((a, b) => {
    switch (sortBy) {
      case "level": return b.level - a.level;
      case "name": return a.name.localeCompare(b.name);
      case "years": return b.years - a.years;
      case "projects": return b.projects - a.projects;
      default: return 0;
    }
  });

  const getTrendingIcon = (trending: string) => {
    switch (trending) {
      case "up": return <TrendingUp className="h-4 w-4 text-green-500" />;
      case "down": return <TrendingUp className="h-4 w-4 text-red-500 rotate-180" />;
      default: return <Target className="h-4 w-4 text-blue-500" />;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming": return <Code className="h-4 w-4" />;
      case "Cloud": return <Cloud className="h-4 w-4" />;
      case "Testing": return <Shield className="h-4 w-4" />;
      case "Frontend": return <Code className="h-4 w-4" />;
      case "Backend": return <Database className="h-4 w-4" />;
      case "Database": return <Database className="h-4 w-4" />;
      case "DevOps": return <Zap className="h-4 w-4" />;
      case "AI/ML": return <Brain className="h-4 w-4" />;
      case "Data Analytics": return <BarChart3 className="h-4 w-4" />;
      default: return <Code className="h-4 w-4" />;
    }
  };

  const getLevelColor = (level: number) => {
    if (level >= 90) return "text-green-600";
    if (level >= 80) return "text-blue-600";
    if (level >= 70) return "text-yellow-600";
    return "text-gray-600";
  };

  const getProgressColor = (level: number) => {
    if (level >= 90) return "bg-gradient-to-r from-green-500 to-emerald-500";
    if (level >= 80) return "bg-gradient-to-r from-blue-500 to-cyan-500";
    if (level >= 70) return "bg-gradient-to-r from-yellow-500 to-orange-500";
    return "bg-gradient-to-r from-gray-500 to-slate-500";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive showcase of my technical expertise across multiple domains, 
            demonstrating both depth and breadth of knowledge.
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 space-y-4"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="flex items-center gap-2"
                >
                  {category !== "all" && getCategoryIcon(category)}
                  {category === "all" ? "All Skills" : category}
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === "bars" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("bars")}
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Bars
              </Button>
              <Button
                variant={viewMode === "cards" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("cards")}
              >
                <Grid3X3 className="h-4 w-4 mr-2" />
                Cards
              </Button>
            </div>

            {/* Sort Options */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="level">Sort by Level</option>
              <option value="name">Sort by Name</option>
              <option value="years">Sort by Experience</option>
              <option value="projects">Sort by Projects</option>
            </select>
          </div>

          {/* Active Filter Display */}
          {selectedCategory !== "all" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="flex items-center gap-2"
            >
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Filtered by: {selectedCategory}
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedCategory("all")}
                className="text-gray-500 hover:text-gray-700"
              >
                Clear Filter
              </Button>
            </motion.div>
          )}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            {viewMode === "bars" ? (
              <motion.div
                key="bars"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/50 backdrop-blur-sm rounded-lg p-6 border border-gray-200/50"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <div>
                          <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                          <p className="text-sm text-gray-600">{skill.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className={`text-lg font-bold ${getLevelColor(skill.level)}`}>
                            {skill.level}%
                          </div>
                          <div className="text-xs text-gray-500">{skill.category}</div>
                        </div>
                        {getTrendingIcon(skill.trending)}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Progress value={skill.level} className="h-3">
                        <div className={`h-full rounded-full transition-all duration-1000 ${getProgressColor(skill.level)}`} />
                      </Progress>
                      
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{skill.years} years experience</span>
                        <span>{skill.projects} projects</span>
                        <span>Last used: {skill.lastUsed}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="cards"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group"
                  >
                    <Card className="h-full bg-white/50 backdrop-blur-sm border border-gray-200/50 hover:shadow-xl transition-all duration-300">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="outline" className="text-xs">
                            {skill.category}
                          </Badge>
                          {getTrendingIcon(skill.trending)}
                        </div>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <span className="text-2xl">{skill.icon}</span>
                          {skill.name}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <p className="text-gray-600 text-sm mb-4">{skill.description}</p>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600">Proficiency</span>
                            <span className={`font-bold ${getLevelColor(skill.level)}`}>
                              {skill.level}%
                            </span>
                          </div>
                          <Progress value={skill.level} className="h-2">
                            <div className={`h-full rounded-full transition-all duration-1000 ${getProgressColor(skill.level)}`} />
                          </Progress>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{skill.years} years</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            <span>{skill.projects} projects</span>
                          </div>
                        </div>

                        {skill.certifications.length > 0 && (
                          <div className="mb-4">
                            <div className="text-xs font-medium text-gray-700 mb-2">Certifications:</div>
                            <div className="flex flex-wrap gap-1">
                              {skill.certifications.map((cert) => (
                                <Badge key={cert} variant="secondary" className="text-xs">
                                  {cert}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="text-xs text-gray-500">
                          Last used: {skill.lastUsed}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Total Skills", value: skills.length, icon: "🛠️" },
            { label: "Advanced Level", value: skills.filter(s => s.level >= 85).length, icon: "🚀" },
            { label: "Years Experience", value: Math.max(...skills.map(s => s.years)), icon: "⏰" },
            { label: "Total Projects", value: skills.reduce((sum, s) => sum + s.projects, 0), icon: "📊" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-4 bg-white/30 backdrop-blur-sm rounded-lg border border-gray-200/50"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
