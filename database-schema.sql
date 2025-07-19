-- Portfolio Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  github_url TEXT,
  live_url TEXT,
  technologies TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Skills table
CREATE TABLE IF NOT EXISTS skills (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  category VARCHAR(50) NOT NULL CHECK (category IN ('frontend', 'backend', 'database', 'devops', 'other')),
  proficiency INTEGER NOT NULL CHECK (proficiency >= 1 AND proficiency <= 100),
  icon VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- About info table
CREATE TABLE IF NOT EXISTS about_info (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  section VARCHAR(50) NOT NULL CHECK (section IN ('hero', 'about', 'experience')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_skills_category ON skills(category);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_about_info_section ON about_info(section);

-- Enable Row Level Security (RLS)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE about_info ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to projects" ON projects
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access to skills" ON skills
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access to about_info" ON about_info
  FOR SELECT USING (true);

-- Create policies for public insert access (for admin panel)
CREATE POLICY "Allow public insert access to projects" ON projects
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert access to skills" ON skills
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert access to contact_messages" ON contact_messages
  FOR INSERT WITH CHECK (true);

-- Create policies for service role to manage all data
CREATE POLICY "Allow service role full access to projects" ON projects
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Allow service role full access to skills" ON skills
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Allow service role full access to contact_messages" ON contact_messages
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Allow service role full access to about_info" ON about_info
  FOR ALL USING (auth.role() = 'service_role');

-- Insert sample data
INSERT INTO projects (title, description, image_url, github_url, live_url, technologies) VALUES
('Portfolio Website', 'A modern portfolio website built with React, TypeScript, and Tailwind CSS', 'https://via.placeholder.com/400x300', 'https://github.com/example/portfolio', 'https://portfolio.example.com', ARRAY['React', 'TypeScript', 'Tailwind CSS']),
('E-commerce Platform', 'Full-stack e-commerce platform with payment integration', 'https://via.placeholder.com/400x300', 'https://github.com/example/ecommerce', 'https://ecommerce.example.com', ARRAY['Next.js', 'Node.js', 'PostgreSQL', 'Stripe']),
('Task Management App', 'A collaborative task management application', 'https://via.placeholder.com/400x300', 'https://github.com/example/taskapp', 'https://taskapp.example.com', ARRAY['React', 'Firebase', 'Material-UI']);

INSERT INTO skills (name, category, proficiency, icon) VALUES
('React', 'frontend', 90, 'react'),
('TypeScript', 'frontend', 85, 'typescript'),
('Next.js', 'frontend', 80, 'nextjs'),
('Node.js', 'backend', 85, 'nodejs'),
('PostgreSQL', 'database', 75, 'postgresql'),
('Docker', 'devops', 70, 'docker'),
('AWS', 'devops', 65, 'aws'),
('Python', 'backend', 80, 'python');

INSERT INTO about_info (title, content, section) VALUES
('Full Stack Developer', 'Passionate about creating beautiful and functional web applications', 'hero'),
('About Me', 'I am a dedicated full-stack developer with 3+ years of experience building modern web applications. I love working with React, TypeScript, and Node.js to create scalable solutions.', 'about'),
('Experience', 'I have worked on various projects ranging from small business websites to large-scale enterprise applications. My expertise includes frontend development, backend APIs, and database design.', 'experience'); 