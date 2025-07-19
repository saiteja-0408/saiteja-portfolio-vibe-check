import { supabase } from '@/integrations/supabase/client';
import { supabaseAdmin } from '@/integrations/supabase/admin-client';

// Types for our portfolio data
export interface Project {
  id: string;
  title: string;
  description: string;
  image_url?: string;
  github_url?: string;
  live_url?: string;
  technologies: string[];
  created_at: string;
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
  proficiency: number; // 1-100
  icon?: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

export interface AboutInfo {
  id: string;
  title: string;
  content: string;
  section: 'hero' | 'about' | 'experience';
}

// Database operations
export const databaseService = {
  // Test connection
  async testConnection(): Promise<boolean> {
    try {
      const { data, error } = await supabaseAdmin
        .from('projects')
        .select('count')
        .limit(1);
      
      if (error) {
        console.error('Connection test failed:', error);
        return false;
      }
      return true;
    } catch (error) {
      console.error('Connection test error:', error);
      return false;
    }
  },

  // Check if tables exist
  async checkTablesExist(): Promise<{ projects: boolean; skills: boolean; contact_messages: boolean; about_info: boolean }> {
    const results = {
      projects: false,
      skills: false,
      contact_messages: false,
      about_info: false
    };

    try {
      // Test each table
      const projectsTest = await supabaseAdmin.from('projects').select('id').limit(1);
      results.projects = !projectsTest.error;

      const skillsTest = await supabaseAdmin.from('skills').select('id').limit(1);
      results.skills = !skillsTest.error;

      const contactTest = await supabaseAdmin.from('contact_messages').select('id').limit(1);
      results.contact_messages = !contactTest.error;

      const aboutTest = await supabaseAdmin.from('about_info').select('id').limit(1);
      results.about_info = !aboutTest.error;

      return results;
    } catch (error) {
      console.error('Table check error:', error);
      return results;
    }
  },

  // Projects
  async getProjects(): Promise<Project[]> {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data || [];
  },

  async createProject(project: Omit<Project, 'id' | 'created_at'>): Promise<Project> {
    const { data, error } = await supabaseAdmin
      .from('projects')
      .insert([project])
      .select()
      .single();
    
    if (error) {
      console.error('Database error:', error);
      throw error;
    }
    return data;
  },

  // Skills
  async getSkills(): Promise<Skill[]> {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('category', { ascending: true });
    
    if (error) throw error;
    return data || [];
  },

  async createSkill(skill: Omit<Skill, 'id'>): Promise<Skill> {
    const { data, error } = await supabaseAdmin
      .from('skills')
      .insert([skill])
      .select()
      .single();
    
    if (error) {
      console.error('Database error:', error);
      throw error;
    }
    return data;
  },

  // Contact Messages
  async createContactMessage(message: Omit<ContactMessage, 'id' | 'created_at'>): Promise<ContactMessage> {
    const { data, error } = await supabaseAdmin
      .from('contact_messages')
      .insert([message])
      .select()
      .single();
    
    if (error) {
      console.error('Database error:', error);
      throw error;
    }
    return data;
  },

  // About Info
  async getAboutInfo(): Promise<AboutInfo[]> {
    const { data, error } = await supabase
      .from('about_info')
      .select('*')
      .order('section', { ascending: true });
    
    if (error) throw error;
    return data || [];
  },

  async updateAboutInfo(id: string, updates: Partial<AboutInfo>): Promise<AboutInfo> {
    const { data, error } = await supabase
      .from('about_info')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
}; 