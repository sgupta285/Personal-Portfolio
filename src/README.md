# Srijan Gupta - Portfolio Website

A modern, production-ready portfolio website built with React, TypeScript, and Tailwind CSS v4.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
├── /components/          # Reusable React components
│   ├── /ui/             # Shadcn UI components (Button, Badge, etc.)
│   ├── AnimatedPage.tsx
│   ├── ExperienceTimeline.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectModal.tsx
│   └── SkillCluster.tsx
├── /pages/              # Page components
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   ├── ExperiencePage.tsx
│   ├── HomePage.tsx
│   ├── ProjectsPage.tsx
│   └── ResumePage.tsx
├── /data/               # Static data
│   ├── contact.ts
│   ├── experience.ts
│   ── projects.ts
│   └── skills.ts
├── /styles/             # Global styles and Tailwind configuration
│   └── globals.css
├── App.tsx              # Main app component with routing
├── main.tsx             # App entry point
└── index.html           # HTML template
```

## 🎨 Key Features

### Pages
- **Home**: Hero section with profile picture, bio, and call-to-action buttons
- **Projects**: Filterable project showcase with 7 categories
  - Full-Stack & Real-Time
  - Mobile
  - ML & AI Systems
  - Quantitative Finance
  - Product Analytics
  - Data Science
  - Econometrics
- **Experience**: Timeline view of professional experience
- **About**: Skills, technologies, and education
- **Contact**: Contact information and social links
- **Resume**: Direct link to download resume from Google Drive

### Design System
- **Tailwind CSS v4**: Modern utility-first CSS framework
- **Motion (Framer Motion)**: Smooth animations and transitions
- **Responsive Design**: Optimized for all screen sizes
  - Desktop: 1440px, 1200px
  - Tablet: 992px, 768px
  - Mobile: 390px, 360px

### Technologies Used
- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Motion (Framer Motion)
- Lucide React (icons)

## 🔧 Customization

### Update Personal Information

1. **Contact Info** (`/data/contact.ts`):
   - Email, phone, LinkedIn
   - Resume link

2. **Experience** (`/data/experience.ts`):
   - Add/edit work experiences
   - Update bullet points

3. **Projects** (`/data/projects.ts`):
   - Add/edit projects
   - Update categories, tech stack, descriptions

4. **Skills** (`/data/skills.ts`):
   - Update skill clusters
   - Add new technologies

5. **Bio/About** (`/pages/HomePage.tsx` and `/pages/AboutPage.tsx`):
   - Update the `bio` constant

### Update Profile Picture
Replace the image import in `/pages/HomePage.tsx`:
```typescript
import profilePic from 'figma:asset/[YOUR_IMAGE_HASH].png';
```

### Update Resume Link
Edit the Google Drive link in `/pages/ResumePage.tsx`:
```typescript
window.open('https://drive.google.com/file/d/[YOUR_FILE_ID]/view', '_blank');
```

## 📝 Content Guidelines

### Projects
Each project includes:
- Title and subtitle
- Category classification
- Technology stack
- Problem statement
- Technical approach
- Measurable outcomes
- Key highlights
- Optional links (Tableau, reports)

### Experience
Each experience includes:
- Company name
- Role/title
- Time period
- Achievement-focused bullet points (no tech stack list)

## 🎯 Design Principles

1. **Clean & Professional**: Minimal design with clear hierarchy
2. **Performance**: Optimized animations and lazy loading
3. **Accessibility**: Semantic HTML and ARIA labels
4. **Responsive**: Mobile-first approach with breakpoints
5. **Measurable Impact**: Focus on metrics and outcomes

## 📦 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Deploy to GitHub Pages
```bash
npm run build
# Copy dist/ contents to your gh-pages branch
```

## 🐛 Troubleshooting

### Development server not starting
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `rm -rf dist .vite`

### Build errors
- Check TypeScript errors: `npm run type-check`
- Verify all imports are correct
- Ensure all required dependencies are installed

### Styling issues
- Tailwind not working: Check `globals.css` imports
- Custom properties not applying: Verify CSS variable definitions

## 📄 License

This project is open source and available for personal use.

## 🤝 Contact

**Srijan Gupta**
- Email: srijangupta2013@gmail.com
- LinkedIn: [linkedin.com/in/srijan-gupta-1b6456215](https://www.linkedin.com/in/srijan-gupta-1b6456215/)
- Phone: +1 (608) 598-7333

---

Built with ❤️ using React, TypeScript, and Tailwind CSS