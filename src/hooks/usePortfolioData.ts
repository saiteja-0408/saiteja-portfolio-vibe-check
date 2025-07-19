import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

// Types
export interface Project {
  id: string;
  title: string;
  description: string;
  image_url?: string;
  github_url?: string;
  live_url?: string;
  technologies: string[];
  created_at: string;
  updated_at: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: number;
  icon?: string;
  created_at: string;
}

export interface AboutInfo {
  id: string;
  section: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

// Projects
export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data as Project[];
    },
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (project: Omit<Project, "id" | "created_at" | "updated_at">) => {
      const { data, error } = await supabase
        .from("projects")
        .insert([project])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
};

// Skills
export const useSkills = () => {
  return useQuery({
    queryKey: ["skills"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("skills")
        .select("*")
        .order("category", { ascending: true });
      
      if (error) throw error;
      return data as Skill[];
    },
  });
};

export const useCreateSkill = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (skill: Omit<Skill, "id" | "created_at">) => {
      const { data, error } = await supabase
        .from("skills")
        .insert([skill])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["skills"] });
    },
  });
};

// About Info
export const useAboutInfo = () => {
  return useQuery({
    queryKey: ["about-info"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("about_info")
        .select("*")
        .order("created_at", { ascending: true });
      
      if (error) throw error;
      return data as AboutInfo[];
    },
  });
};

// Contact Messages
export const useCreateContactMessage = () => {
  return useMutation({
    mutationFn: async (message: Omit<ContactMessage, "id" | "created_at">) => {
      const { data, error } = await supabase
        .from("contact_messages")
        .insert([message])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
  });
};