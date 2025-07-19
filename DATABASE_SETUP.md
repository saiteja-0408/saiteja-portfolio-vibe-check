# Database Setup Guide

## 🚀 Quick Start

Your portfolio is now connected to Supabase! Here's what you need to do to complete the setup:

### 1. Set Up Database Tables

1. Go to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Navigate to your project: `jkfkxrcttwnvvkkrgejp`
3. Go to **SQL Editor**
4. Copy and paste the entire contents of `database-schema.sql` into the editor
5. Click **Run** to create all tables and sample data

### 2. Verify Connection

Once you run the SQL script, your portfolio will automatically:
- ✅ Load projects from the database
- ✅ Display skills with proficiency levels
- ✅ Show loading states while fetching data
- ✅ Handle errors gracefully

### 3. Test the Admin Panel

1. Visit your portfolio at `http://localhost:8080`
2. Look for the **Admin Panel** button in the bottom-right corner
3. Click it to open the admin interface
4. Try adding a new project or skill to test the database connection

### 4. Environment Variables (Optional)

The project is already configured with your Supabase credentials. If you want to use environment variables:

1. Create a `.env.local` file (already done)
2. Add your Supabase URL and key:
   ```
   VITE_SUPABASE_URL=https://jkfkxrcttwnvvkkrgejp.supabase.co
   VITE_SUPABASE_ANON_KEY=your_anon_key_here
   ```

## 📊 Database Schema

### Tables Created:

1. **projects** - Portfolio projects
   - `id` (UUID, Primary Key)
   - `title` (VARCHAR)
   - `description` (TEXT)
   - `image_url` (TEXT)
   - `github_url` (TEXT)
   - `live_url` (TEXT)
   - `technologies` (TEXT[])
   - `created_at` (TIMESTAMP)

2. **skills** - Technical skills
   - `id` (UUID, Primary Key)
   - `name` (VARCHAR)
   - `category` (VARCHAR - frontend/backend/database/devops/other)
   - `proficiency` (INTEGER 1-100)
   - `icon` (VARCHAR)
   - `created_at` (TIMESTAMP)

3. **contact_messages** - Contact form submissions
   - `id` (UUID, Primary Key)
   - `name` (VARCHAR)
   - `email` (VARCHAR)
   - `message` (TEXT)
   - `created_at` (TIMESTAMP)

4. **about_info** - About section content
   - `id` (UUID, Primary Key)
   - `title` (VARCHAR)
   - `content` (TEXT)
   - `section` (VARCHAR - hero/about/experience)
   - `created_at` (TIMESTAMP)

## 🔐 Security

- **Row Level Security (RLS)** is enabled on all tables
- **Public read access** for projects, skills, and about info
- **Authenticated users** can submit contact messages
- **Service role** has full access for admin operations

## 🛠️ Features Implemented

### ✅ Completed:
- Database connection with Supabase
- React Query for data fetching
- Loading states and error handling
- Admin panel for adding content
- Environment variable support
- TypeScript types for all data

### 🔄 Next Steps:
1. Update other sections (Skills, About, Contact) to use database data
2. Add image upload functionality
3. Implement authentication for admin access
4. Add more admin features (edit, delete)

## 🐛 Troubleshooting

### If you see "Failed to load projects":
1. Check that you've run the SQL script in Supabase
2. Verify your Supabase URL and key are correct
3. Check the browser console for detailed error messages

### If the admin panel doesn't work:
1. Ensure you have the service role key for admin operations
2. Check that RLS policies are correctly set up
3. Verify the database tables exist

## 📝 Sample Data

The SQL script includes sample data:
- 3 example projects
- 8 common skills with proficiency levels
- 3 about section entries

You can modify or add to this data through the admin panel or directly in Supabase.

## 🔗 Useful Links

- [Supabase Dashboard](https://supabase.com/dashboard)
- [Supabase Documentation](https://supabase.com/docs)
- [React Query Documentation](https://tanstack.com/query/latest) 