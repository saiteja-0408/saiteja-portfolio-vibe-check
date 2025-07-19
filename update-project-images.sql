-- -- Update project images with real Unsplash URLs
-- -- Run this in your Supabase SQL Editor

-- -- Update E-commerce Website image
-- UPDATE projects 
-- SET image_url = 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&h=400&q=80'
-- WHERE title = 'E-commerce Platform';

-- -- Update Task Management App image  
-- UPDATE projects 
-- SET image_url = 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400&q=80'
-- WHERE title = 'Task Management App';

-- -- Update Portfolio Website image
-- UPDATE projects 
-- SET image_url = 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=400&q=80'
-- WHERE title = 'Portfolio Website';

-- -- If the titles don't match exactly, let's also update by ID or create new entries
-- -- First, let's see what projects exist
-- -- SELECT * FROM projects;

-- -- Alternative: Insert new projects with correct images if they don't exist
-- INSERT INTO projects (title, description, image_url, github_url, live_url, technologies) 
-- SELECT 'E-commerce Website', 'A modern e-commerce platform built with React and Node.js.', 
--        'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&h=400&q=80',
--        'https://github.com/example/ecommerce', 'https://ecommerce.example.com', 
--        ARRAY['React', 'Node.js', 'MongoDB', 'Express']
-- WHERE NOT EXISTS (SELECT 1 FROM projects WHERE title = 'E-commerce Website');

-- INSERT INTO projects (title, description, image_url, github_url, live_url, technologies) 
-- SELECT 'Task Management App', 'A productivity application to manage tasks and projects.',
--        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400&q=80',
--        'https://github.com/example/taskapp', 'https://taskapp.example.com',
--        ARRAY['React', 'Firebase', 'Tailwind CSS']
-- WHERE NOT EXISTS (SELECT 1 FROM projects WHERE title = 'Task Management App');

-- INSERT INTO projects (title, description, image_url, github_url, live_url, technologies) 
-- SELECT 'Portfolio Website', 'A personal portfolio website showcasing projects and skills.',
--        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&h=400&q=80',
--        'https://github.com/example/portfolio', 'https://portfolio.example.com',
--        ARRAY['React', 'TypeScript', 'Tailwind CSS']
-- WHERE NOT EXISTS (SELECT 1 FROM projects WHERE title = 'Portfolio Website'); 