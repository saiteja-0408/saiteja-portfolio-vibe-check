import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { databaseService, Project, Skill, ContactMessage, AboutInfo } from '@/services/database';

// Projects hooks
export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: databaseService.getProjects,
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (project: Omit<Project, 'id' | 'created_at'>) => 
      databaseService.createProject(project),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
};

// Skills hooks
export const useSkills = () => {
  return useQuery({
    queryKey: ['skills'],
    queryFn: databaseService.getSkills,
  });
};

export const useCreateSkill = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (skill: Omit<Skill, 'id'>) => 
      databaseService.createSkill(skill),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['skills'] });
    },
  });
};

// Contact messages hooks
export const useCreateContactMessage = () => {
  return useMutation({
    mutationFn: (message: Omit<ContactMessage, 'id' | 'created_at'>) => 
      databaseService.createContactMessage(message),
  });
};

// About info hooks
export const useAboutInfo = () => {
  return useQuery({
    queryKey: ['about-info'],
    queryFn: databaseService.getAboutInfo,
  });
};

export const useUpdateAboutInfo = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<AboutInfo> }) => 
      databaseService.updateAboutInfo(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['about-info'] });
    },
  });
}; 