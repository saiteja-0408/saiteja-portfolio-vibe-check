import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useCreateProject, useCreateSkill } from '@/hooks/usePortfolioData';
import { useToast } from '@/hooks/use-toast';
import { databaseService } from '@/services/database';

const AdminPanel = () => {
  const [showAdmin, setShowAdmin] = useState(false);
  const createProject = useCreateProject();
  const createSkill = useCreateSkill();
  const { toast } = useToast();

  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    image_url: '',
    github_url: '',
    live_url: '',
    technologies: ''
  });

  const [skillData, setSkillData] = useState({
    name: '',
    category: 'frontend' as const,
    proficiency: 80,
    icon: ''
  });

  const handleAddProject = async () => {
    try {
      await createProject.mutateAsync({
        ...projectData,
        technologies: projectData.technologies.split(',').map(t => t.trim())
      });

      setProjectData({
        title: '',
        description: '',
        image_url: '',
        github_url: '',
        live_url: '',
        technologies: ''
      });

      toast({
        title: "Success",
        description: "Project added successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add project. Please check your database connection.",
        variant: "destructive",
      });
    }
  };

  const handleAddSkill = async () => {
    try {
      await createSkill.mutateAsync(skillData);

      setSkillData({
        name: '',
        category: 'frontend',
        proficiency: 80,
        icon: ''
      });

      toast({
        title: "Success",
        description: "Skill added successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add skill. Please check your database connection.",
        variant: "destructive",
      });
    }
  };

  const testConnection = async () => {
    const result = await databaseService.testConnection();
    if (result.success) {
      toast({
        title: "Success",
        description: "Database connection successful!",
      });
    } else {
      toast({
        title: "Error",
        description: "Database connection failed. Check your Supabase configuration.",
        variant: "destructive",
      });
    }
  };

  if (!showAdmin) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={() => setShowAdmin(true)}
          variant="outline"
          size="sm"
          className="opacity-50 hover:opacity-100"
        >
          Admin
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background border rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Admin Panel</h2>
            <Button variant="outline" onClick={() => setShowAdmin(false)}>
              Close
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Add Project */}
            <Card>
              <CardHeader>
                <CardTitle>Add Project</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="project-title">Title</Label>
                  <Input
                    id="project-title"
                    value={projectData.title}
                    onChange={(e) => setProjectData(prev => ({ ...prev, title: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="project-description">Description</Label>
                  <Textarea
                    id="project-description"
                    value={projectData.description}
                    onChange={(e) => setProjectData(prev => ({ ...prev, description: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="project-image">Image URL</Label>
                  <Input
                    id="project-image"
                    value={projectData.image_url}
                    onChange={(e) => setProjectData(prev => ({ ...prev, image_url: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="project-github">GitHub URL</Label>
                  <Input
                    id="project-github"
                    value={projectData.github_url}
                    onChange={(e) => setProjectData(prev => ({ ...prev, github_url: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="project-live">Live URL</Label>
                  <Input
                    id="project-live"
                    value={projectData.live_url}
                    onChange={(e) => setProjectData(prev => ({ ...prev, live_url: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="project-tech">Technologies (comma-separated)</Label>
                  <Input
                    id="project-tech"
                    value={projectData.technologies}
                    onChange={(e) => setProjectData(prev => ({ ...prev, technologies: e.target.value }))}
                  />
                </div>
                <Button 
                  onClick={handleAddProject} 
                  disabled={createProject.isPending}
                  className="w-full"
                >
                  {createProject.isPending ? 'Adding...' : 'Add Project'}
                </Button>
              </CardContent>
            </Card>

            {/* Add Skill */}
            <Card>
              <CardHeader>
                <CardTitle>Add Skill</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="skill-name">Name</Label>
                  <Input
                    id="skill-name"
                    value={skillData.name}
                    onChange={(e) => setSkillData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="skill-category">Category</Label>
                  <select
                    id="skill-category"
                    value={skillData.category}
                    onChange={(e) => setSkillData(prev => ({ ...prev, category: e.target.value as any }))}
                    className="w-full p-2 border rounded"
                  >
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="tools">Tools</option>
                    <option value="cloud">Cloud</option>
                    <option value="database">Database</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="skill-proficiency">Proficiency (0-100)</Label>
                  <Input
                    id="skill-proficiency"
                    type="number"
                    min="0"
                    max="100"
                    value={skillData.proficiency}
                    onChange={(e) => setSkillData(prev => ({ ...prev, proficiency: parseInt(e.target.value) }))}
                  />
                </div>
                <div>
                  <Label htmlFor="skill-icon">Icon (emoji or icon name)</Label>
                  <Input
                    id="skill-icon"
                    value={skillData.icon}
                    onChange={(e) => setSkillData(prev => ({ ...prev, icon: e.target.value }))}
                  />
                </div>
                <Button 
                  onClick={handleAddSkill} 
                  disabled={createSkill.isPending}
                  className="w-full"
                >
                  {createSkill.isPending ? 'Adding...' : 'Add Skill'}
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Button onClick={testConnection} variant="outline" className="w-full">
              Test Database Connection
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;