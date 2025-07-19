
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Layout Overlap Detector",
    description: "A sophisticated tool for detecting layout overlaps and visual issues in web applications, built with advanced testing methodologies.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["Testing", "Automation", "Makefile", "Layout Detection"],
    github: "https://github.com/saiteja-0408/layout-overlap-detector",
    demo: "#"
  },
  {
    id: 2,
    title: "Automated Extraction & Validation with Playwright",
    description: "Advanced automation framework for data extraction, sorting, and validation using Playwright for comprehensive testing workflows.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["Playwright", "JavaScript", "Automation", "Testing"],
    github: "https://github.com/saiteja-0408/Automated-Extraction-Sorting-Validation-Using-Playwright",
    demo: "#"
  },
  {
    id: 3,
    title: "Deep Learning for Uber Fare Prediction",
    description: "Machine learning model using deep learning techniques to predict Uber fare prices with high accuracy and data analysis.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["Python", "Deep Learning", "Jupyter Notebook", "Data Science"],
    github: "https://github.com/saiteja-0408/Deep-Learning-for-Uber-Fare-Prediction",
    demo: "#"
  },
  {
    id: 4,
    title: "CISC Simulator",
    description: "A comprehensive CISC (Complex Instruction Set Computer) simulator built in Java for educational and research purposes.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["Java", "Computer Architecture", "Simulation", "Education"],
    github: "https://github.com/saiteja-0408/CISC-Simulator",
    demo: "#"
  },
  {
    id: 5,
    title: "Disease Prediction ML with Streamlit",
    description: "Interactive machine learning application for disease prediction with a user-friendly Streamlit interface and advanced analytics.",
    image: "https://images.unsplash.com/photo-1583912267550-4b4c4e24c3ec?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["Python", "Streamlit", "Machine Learning", "Healthcare"],
    github: "https://github.com/saiteja-0408/Diseases_Prediction_Streamlit_ML",
    demo: "#"
  },
  {
    id: 6,
    title: "Unqork Corporate Vehicle Request Tracker",
    description: "Enterprise-level vehicle request tracking system built on Unqork platform for efficient corporate fleet management.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["Unqork", "Enterprise", "Tracking", "Corporate Solutions"],
    github: "https://github.com/saiteja-0408/unqork-corporate-vehicle-request-tracker",
    demo: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Here are some of my key projects showcasing my expertise in ServiceNow development, automation testing, 
          machine learning, and enterprise solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-1" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
