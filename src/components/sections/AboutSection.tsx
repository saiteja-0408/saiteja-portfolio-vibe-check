
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
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/src/assets/profile-photo.jpg" 
                  alt="Saiteja Singirikonda working"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-4">
              ServiceNow Developer & Technology Enthusiast
            </h3>
            
            <p className="text-gray-700 mb-6">
              I am a ServiceNow Developer at Cognizant with 5.6 years of experience in IT. I specialize in ITSM and 
              Vulnerability Response modules, bringing deep technical expertise to enterprise solutions.
            </p>
            
            <p className="text-gray-700 mb-6">
              My journey spans across various domains including automation testing with Playwright, machine learning 
              for predictive analytics, and system architecture. I enjoy building innovative solutions that bridge 
              the gap between complex enterprise systems and user-friendly interfaces.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-bold text-primary">Current Role</h4>
                <p className="text-gray-700">ServiceNow Developer at Cognizant</p>
              </div>
              <div>
                <h4 className="font-bold text-primary">Experience</h4>
                <p className="text-gray-700">5.6 Years</p>
              </div>
              <div>
                <h4 className="font-bold text-primary">Location</h4>
                <p className="text-gray-700">Hyderabad, Telangana, India</p>
              </div>
              <div>
                <h4 className="font-bold text-primary">Specialization</h4>
                <p className="text-gray-700">ITSM & Vulnerability Response</p>
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
