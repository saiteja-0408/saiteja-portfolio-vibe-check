
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A modern e-commerce platform built with React and Node.js.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A productivity application to manage tasks and projects.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["React", "Firebase", "Tailwind CSS"],
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=400&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    github: "#",
    demo: "#"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Here are some of my recent projects that showcase my skills and experience in web development.
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
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </Button>
                <Button size="sm">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Live Demo
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
