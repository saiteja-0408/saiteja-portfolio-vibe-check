
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skills = {
  servicenow: [
    { name: "ServiceNow ITSM", level: 90 },
    { name: "Vulnerability Response", level: 85 },
    { name: "ServiceNow Development", level: 88 },
    { name: "Workflow Management", level: 82 },
    { name: "Incident Management", level: 85 },
  ],
  development: [
    { name: "JavaScript", level: 80 },
    { name: "Python", level: 75 },
    { name: "Java", level: 70 },
    { name: "Playwright", level: 85 },
    { name: "React", level: 75 },
  ],
  analytics: [
    { name: "Machine Learning", level: 75 },
    { name: "Data Analysis", level: 80 },
    { name: "Deep Learning", level: 70 },
    { name: "Jupyter Notebook", level: 85 },
    { name: "Predictive Modeling", level: 78 },
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
          With 5.6 years of experience in IT, I specialize in ServiceNow development, automation testing, 
          and machine learning. Here's an overview of my technical expertise.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="animate-slide-up [animation-delay:0ms]">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4 text-center">ServiceNow</h3>
              {skills.servicenow.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </CardContent>
          </Card>
          
          <Card className="animate-slide-up [animation-delay:200ms]">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4 text-center">Development</h3>
              {skills.development.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </CardContent>
          </Card>
          
          <Card className="animate-slide-up [animation-delay:400ms]">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4 text-center">Analytics & ML</h3>
              {skills.analytics.map((skill) => (
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
