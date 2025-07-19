
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 -z-10"></div>
      <div className="absolute inset-0 opacity-20 -z-10">
        <div className="absolute right-0 top-1/3 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute left-1/4 bottom-1/4 w-96 h-96 bg-purple-300/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-right">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Welcome to my portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-6">
              Frontend Developer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              I create engaging web experiences with modern technologies.
              Passionate about building beautiful interfaces and powerful user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full opacity-10 blur-2xl"></div>
              <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-white shadow-xl">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Your Photo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
