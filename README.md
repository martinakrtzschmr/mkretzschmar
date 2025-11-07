# Martin Kretzschmar Portfolio

A modern, responsive portfolio website built with Next.js, Chakra UI, and Supabase.

## Features

- **Modern UI**: Built with Chakra UI for beautiful, accessible components
- **Authentication**: Complete auth system with Supabase Auth
- **Database**: PostgreSQL database with Supabase
- **Responsive Design**: Mobile-first approach with responsive layouts
- **TypeScript**: Full type safety throughout the application
- **Routing**: Next.js App Router with multiple pages

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **UI Library**: Chakra UI v4
- **Backend**: Supabase (PostgreSQL, Auth, Real-time)
- **Styling**: Tailwind CSS v4
- **Icons**: React Icons
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd mkretzschmar-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

4. Configure your Supabase project:
   - Create a new project at [supabase.com](https://supabase.com)
   - Get your project URL and anon key from the API settings
   - Update `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Set up the database:
   - Go to your Supabase dashboard
   - Navigate to the SQL Editor
   - Run the following SQL to create the necessary tables:

```sql
-- Create profiles table
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  updated_at TIMESTAMP WITH TIME ZONE,
  username TEXT UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  website TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create projects table
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  live_url TEXT,
  github_url TEXT,
  technologies TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE
);

-- Create skills table
CREATE TABLE skills (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  proficiency INTEGER CHECK (proficiency >= 0 AND proficiency <= 100),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view all profiles" ON profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can view all projects" ON projects FOR SELECT USING (true);
CREATE POLICY "Users can insert own projects" ON projects FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own projects" ON projects FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own projects" ON projects FOR DELETE USING (auth.uid() = user_id);

CREATE POLICY "Users can view all skills" ON skills FOR SELECT USING (true);
CREATE POLICY "Users can insert own skills" ON skills FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own skills" ON skills FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own skills" ON skills FOR DELETE USING (auth.uid() = user_id);
```

6. Run the development server:
```bash
npm run dev
# or for WSL2 users
npm run linux-dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── components/         # Reusable components
│   ├── about/             # About page
│   ├── projects/          # Projects page
│   ├── skills/            # Skills page
│   ├── contact/           # Contact page
│   ├── login/             # Authentication pages
│   ├── signup/
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── providers.tsx      # Chakra UI provider
├── lib/                   # Utility libraries
│   ├── supabase/          # Supabase configuration
│   ├── auth.ts            # Authentication helpers
│   ├── database.types.ts  # Database type definitions
│   └── theme.ts           # Chakra UI theme
├── public/                # Static assets
└── middleware.ts          # Next.js middleware for auth
```

## Pages

- **Home** (`/`) - Hero section, featured projects, skills overview
- **About** (`/about`) - Personal story, experience, education
- **Projects** (`/projects`) - Portfolio of work with detailed project cards
- **Skills** (`/skills`) - Technical skills with proficiency levels
- **Contact** (`/contact`) - Contact form and information
- **Login** (`/login`) - User authentication
- **Signup** (`/signup`) - User registration

## Authentication

The app includes a complete authentication system with:
- User registration and login
- Password reset functionality
- Protected routes with middleware
- User profile management
- Session handling

## Database Schema

### Tables

- **profiles**: User profile information
- **projects**: Portfolio projects with metadata
- **skills**: User skills with proficiency levels

### Features

- Row Level Security (RLS) enabled
- User-specific data isolation
- Real-time subscriptions
- Type-safe database operations

## Customization

### Theme
Edit `lib/theme.ts` to customize colors, fonts, and component styles.

### Content
Update the content in each page component to reflect your personal information.

### Database
Modify `lib/database.types.ts` if you change the database schema.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help, please open an issue on GitHub or contact me directly.