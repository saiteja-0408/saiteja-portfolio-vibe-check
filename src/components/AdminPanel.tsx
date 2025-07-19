import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useCreateProject, useCreateSkill } from '@/hooks/usePortfolioData';
import { toast } from '@/hooks/use-toast';
import { databaseService } from '@/services/database';

const AdminPanel = () => {
  const [showAdmin, setShowAdmin] = useState(false);
  const createProject = useCreateProject();
  const createSkill = useCreateSkill();

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

  const [tableStatus, setTableStatus] = useState<{
    projects: boolean;
    skills: boolean;
    contact_messages: boolean;
    about_info: boolean;
  } | null>(null);

  const handleTestConnection = async () => {
    try {
      const isConnected = await databaseService.testConnection();
      const tablesExist = await databaseService.checkTablesExist();
      setTableStatus(tablesExist);
      
      if (isConnected) {
        toast({
          title: "Success",
          description: "Database connection is working!",
        });
      } else {
        toast({
          title: "Error",
          description: "Database connection failed. Please run the SQL script in Supabase.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Connection test failed.",
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
        >
          Admin Panel
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            Admin Panel
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowAdmin(false)}
            >
              Close
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Test Connection */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Database Connection</h3>
            <Button 
              onClick={handleTestConnection}
              variant="outline"
              size="sm"
            >
              Test Database Connection
            </Button>
            
            {tableStatus && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Table Status:</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className={`p-2 rounded ${tableStatus.projects ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    Projects: {tableStatus.projects ? '✅' : '❌'}
                  </div>
                  <div className={`p-2 rounded ${tableStatus.skills ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    Skills: {tableStatus.skills ? '✅' : '❌'}
                  </div>
                  <div className={`p-2 rounded ${tableStatus.contact_messages ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    Contact: {tableStatus.contact_messages ? '✅' : '❌'}
                  </div>
                  <div className={`p-2 rounded ${tableStatus.about_info ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    About: {tableStatus.about_info ? '✅' : '❌'}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="border-t pt-6">
            {/* Add Project Form */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Add Project</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={projectData.title}
                  onChange={(e) => setProjectData(prev => ({ ...prev, title: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="image_url">Image URL</Label>
                <Input
                  id="image_url"
                  value={projectData.image_url}
                  onChange={(e) => setProjectData(prev => ({ ...prev, image_url: e.target.value }))}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={projectData.description}
                onChange={(e) => setProjectData(prev => ({ ...prev, description: e.target.value }))}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="github_url">GitHub URL</Label>
                <Input
                  id="github_url"
                  value={projectData.github_url}
                  onChange={(e) => setProjectData(prev => ({ ...prev, github_url: e.target.value }))}
                />
              </div>
              <div>
                <Label htmlFor="live_url">Live URL</Label>
                <Input
                  id="live_url"
                  value={projectData.live_url}
                  onChange={(e) => setProjectData(prev => ({ ...prev, live_url: e.target.value }))}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="technologies">Technologies (comma-separated)</Label>
              <Input
                id="technologies"
                value={projectData.technologies}
                onChange={(e) => setProjectData(prev => ({ ...prev, technologies: e.target.value }))}
                placeholder="React, TypeScript, Tailwind CSS"
              />
            </div>
            <Button 
              onClick={handleAddProject}
              disabled={createProject.isPending}
            >
              {createProject.isPending ? 'Adding...' : 'Add Project'}
            </Button>
          </div>
          </div>

          <div className="border-t pt-6">
            {/* Add Skill Form */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Add Skill</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="skill_name">Name</Label>
                  <Input
                    id="skill_name"
                    value={skillData.name}
                    onChange={(e) => setSkillData(prev => ({ ...prev, name: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    value={skillData.category}
                    onChange={(e) => setSkillData(prev => ({ ...prev, category: e.target.value as 'frontend' | 'backend' | 'database' | 'devops' | 'other' }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  >
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="database">Database</option>
                    <option value="devops">DevOps</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="proficiency">Proficiency (1-100)</Label>
                  <Input
                    id="proficiency"
                    type="number"
                    min="1"
                    max="100"
                    value={skillData.proficiency}
                    onChange={(e) => setSkillData(prev => ({ ...prev, proficiency: parseInt(e.target.value) }))}
                  />
                </div>
                <div>
                  <Label htmlFor="icon">Icon</Label>
                  <Input
                    id="icon"
                    value={skillData.icon}
                    onChange={(e) => setSkillData(prev => ({ ...prev, icon: e.target.value }))}
                  />
                </div>
              </div>
              <Button 
                onClick={handleAddSkill}
                disabled={createSkill.isPending}
              >
                {createSkill.isPending ? 'Adding...' : 'Add Skill'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPanel; 