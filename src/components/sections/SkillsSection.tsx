
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skills = {
  frontend: [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Tailwind CSS", level: 85 },
  ],
  backend: [
    { name: "Node.js", level: 70 },
    { name: "Express", level: 65 },
    { name: "MongoDB", level: 60 },
    { name: "Firebase", level: 75 },
  ],
  tools: [
    { name: "Git", level: 80 },
    { name: "VS Code", level: 90 },
    { name: "Figma", level: 70 },
    { name: "Webpack", level: 65 },
  ]
};

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">{name}</span>
        <span className="text-xs font-medium text-gray-500">{level}%</span>
      </div>
      <Progress value={level} className="h-2" />
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          I have experience working with various technologies and tools in web development.
          Here's an overview of my technical skills.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="animate-slide-up [animation-delay:0ms]">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4 text-center">Frontend</h3>
              {skills.frontend.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </CardContent>
          </Card>
          
          <Card className="animate-slide-up [animation-delay:200ms]">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4 text-center">Backend</h3>
              {skills.backend.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </CardContent>
          </Card>
          
          <Card className="animate-slide-up [animation-delay:400ms]">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4 text-center">Tools</h3>
              {skills.tools.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
