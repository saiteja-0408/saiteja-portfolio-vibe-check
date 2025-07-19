-- Reset projects to original placeholder images
-- Run this in your Supabase SQL Editor

-- Delete all existing projects
DELETE FROM projects;

-- Re-insert original projects with placeholder images
INSERT INTO projects (title, description, image_url, github_url, live_url, technologies) VALUES
('Portfolio Website', 'A modern portfolio website built with React, TypeScript, and Tailwind CSS', 'https://via.placeholder.com/400x300', 'https://github.com/example/portfolio', 'https://portfolio.example.com', ARRAY['React', 'TypeScript', 'Tailwind CSS']),
('E-commerce Platform', 'Full-stack e-commerce platform with payment integration', 'https://via.placeholder.com/400x300', 'https://github.com/example/ecommerce', 'https://ecommerce.example.com', ARRAY['Next.js', 'Node.js', 'PostgreSQL', 'Stripe']),
('Task Management App', 'A collaborative task management application', 'https://via.placeholder.com/400x300', 'https://github.com/example/taskapp', 'https://taskapp.example.com', ARRAY['React', 'Firebase', 'Material-UI']); 