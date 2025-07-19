import { supabase } from "@/integrations/supabase/client";

export const databaseService = {
  // Test database connection
  async testConnection() {
    try {
      const { data, error } = await supabase
        .from("projects")
        .select("count")
        .limit(1);
      
      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error("Database connection test failed:", error);
      return { success: false, error };
    }
  },

  // Projects
  async getProjects() {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });
    
    if (error) throw error;
    return data;
  },

  async createProject(project: any) {
    const { data, error } = await supabase
      .from("projects")
      .insert([project])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Skills
  async getSkills() {
    const { data, error } = await supabase
      .from("skills")
      .select("*")
      .order("category", { ascending: true });
    
    if (error) throw error;
    return data;
  },

  async createSkill(skill: any) {
    const { data, error } = await supabase
      .from("skills")
      .insert([skill])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // About Info
  async getAboutInfo() {
    const { data, error } = await supabase
      .from("about_info")
      .select("*")
      .order("created_at", { ascending: true });
    
    if (error) throw error;
    return data;
  },

  // Contact Messages
  async createContactMessage(message: any) {
    const { data, error } = await supabase
      .from("contact_messages")
      .insert([message])
      .select()
      .single();
    
    if (error) throw error;
    return data;
  }
};