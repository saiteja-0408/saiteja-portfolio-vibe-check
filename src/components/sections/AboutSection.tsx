
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-slide-right">
            <div className="relative w-full aspect-square max-w-md mx-auto lg:ml-0">
              <div className="absolute -left-4 -top-4 w-full h-full border-2 border-primary rounded-lg"></div>
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">About Image</span>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-4">
              A passionate developer with a creative mindset
            </h3>
            
            <p className="text-gray-700 mb-6">
              I am a frontend developer with a passion for creating beautiful and functional user interfaces. 
              With a background in design and development, I bring a unique perspective to every project.
            </p>
            
            <p className="text-gray-700 mb-6">
              My journey in web development started several years ago, and I've been continually expanding my 
              skills and knowledge. I love working with modern technologies like React, TypeScript, and Tailwind CSS 
              to build responsive, accessible, and performant web applications.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-bold text-primary">Education</h4>
                <p className="text-gray-700">Computer Science, University Name</p>
              </div>
              <div>
                <h4 className="font-bold text-primary">Experience</h4>
                <p className="text-gray-700">5+ Years</p>
              </div>
              <div>
                <h4 className="font-bold text-primary">Location</h4>
                <p className="text-gray-700">City, Country</p>
              </div>
              <div>
                <h4 className="font-bold text-primary">Languages</h4>
                <p className="text-gray-700">English, Spanish</p>
              </div>
            </div>
            
            <Button size="lg" variant="default">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
