# Export & Deployment Guide

## 📦 Exporting the Project

### Step 1: Verify All Files Are Present

Make sure you have all these essential files:

#### Core Files
- ✅ `/App.tsx` - Main application component
- ✅ `/main.tsx` - Entry point (should exist in Figma Make)
- ✅ `/index.html` - HTML template
- ✅ `/package.json` - Dependencies
- ✅ `/tsconfig.json` - TypeScript configuration
- ✅ `/vite.config.ts` - Vite build configuration

#### Pages
- ✅ `/pages/HomePage.tsx`
- ✅ `/pages/ProjectsPage.tsx`
- ✅ `/pages/ExperiencePage.tsx`
- ✅ `/pages/AboutPage.tsx`
- ✅ `/pages/ContactPage.tsx`
- ✅ `/pages/ResumePage.tsx`

#### Components
- ✅ `/components/Navbar.tsx`
- ✅ `/components/AnimatedPage.tsx`
- ✅ `/components/ProjectCard.tsx`
- ✅ `/components/ProjectModal.tsx`
- ✅ `/components/ExperienceTimeline.tsx`
- ✅ `/components/SkillCluster.tsx`
- ✅ `/components/ui/*` (all Shadcn components)

#### Data
- ✅ `/data/projects.ts`
- ✅ `/data/experience.ts`
- ✅ `/data/skills.ts`
- ✅ `/data/contact.ts`

#### Styles
- ✅ `/styles/globals.css`

#### Documentation
- ✅ `/README.md`
- ✅ `/SETUP.md`
- ✅ `/COMPLIANCE.md`

### Step 2: Download from Figma Make

1. Click the **Export** or **Download** button in Figma Make
2. This will download a ZIP file containing all your project files
3. Extract the ZIP to your desired location

### Step 3: Install Dependencies

```bash
cd [your-project-folder]
npm install
```

### Step 4: Test Locally

```bash
npm run dev
```

Open `http://localhost:5173` and verify everything works:
- [ ] Homepage loads with profile picture
- [ ] All navigation links work
- [ ] Projects page shows all 21 projects
- [ ] Project filters work correctly
- [ ] Experience timeline displays properly
- [ ] About page shows skills
- [ ] Contact page displays info correctly
- [ ] Resume link opens Google Drive

### Step 5: Build for Production

```bash
npm run build
```

This creates an optimized build in the `/dist` folder.

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Follow the prompts:**
   - Link to your Vercel account
   - Choose project name
   - Confirm build settings

4. **Your site is live!** Vercel will give you a URL like `your-project.vercel.app`

**Custom Domain:**
```bash
vercel --prod
vercel domains add yourdomain.com
```

### Option 2: Netlify

1. **Create account at netlify.com**

2. **Drag & drop deployment:**
   - Build your project: `npm run build`
   - Drag the `/dist` folder to Netlify's deployment page

3. **Or connect Git repository:**
   - Push code to GitHub
   - Connect repository in Netlify
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

### Option 3: GitHub Pages

1. **Install gh-pages:**
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json:**
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  },
  "homepage": "https://[your-username].github.io/[repo-name]"
}
```

3. **Deploy:**
```bash
npm run deploy
```

### Option 4: AWS Amplify

1. **Install Amplify CLI:**
```bash
npm install -g @aws-amplify/cli
```

2. **Initialize:**
```bash
amplify init
```

3. **Add hosting:**
```bash
amplify add hosting
```

4. **Deploy:**
```bash
amplify publish
```

### Option 5: Custom Server (VPS)

If you have your own server:

1. **Build the project:**
```bash
npm run build
```

2. **Upload dist/ folder to your server:**
```bash
scp -r dist/* user@yourserver.com:/var/www/html/
```

3. **Configure web server (Nginx example):**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 🔧 Common Issues & Fixes

### Issue: Images not loading
**Fix:** Make sure all `figma:asset/` imports are correct. The profile picture should use the hash: `0cf11c76192416317c97ea111baa7976101b16f9.png`

### Issue: Routing not working on deployment
**Fix:** Add a `_redirects` file (Netlify) or configure your hosting for SPA:
```
/*    /index.html   200
```

### Issue: Build fails
**Check:**
1. All imports are correct
2. No TypeScript errors: `npm run type-check`
3. All dependencies installed: `npm install`

### Issue: Styles not applying
**Fix:** Verify `globals.css` is imported in `main.tsx`

## 📋 Pre-Deployment Checklist

Before deploying, verify:

- [ ] All personal information is correct
  - [ ] Name, email, phone in contact.ts
  - [ ] LinkedIn URL
  - [ ] Resume Google Drive link
- [ ] Profile picture loads correctly
- [ ] All 21 projects display properly
- [ ] All 4 experiences show up
- [ ] Skills are up to date
- [ ] No console errors in browser
- [ ] Mobile responsive (test on phone or use browser dev tools)
- [ ] All animations work smoothly
- [ ] Resume link opens in new tab

## 🎯 Post-Deployment

After deployment:

1. **Test all pages** on the live site
2. **Test on different devices** (phone, tablet, desktop)
3. **Test on different browsers** (Chrome, Firefox, Safari)
4. **Share the link!** Add it to:
   - LinkedIn profile
   - Resume
   - Email signature
   - GitHub profile

## 🔄 Updating Your Site

To update your deployed site:

1. **Make changes locally**
2. **Test:** `npm run dev`
3. **Build:** `npm run build`
4. **Deploy:**
   - Vercel: `vercel --prod`
   - Netlify: Push to Git or drag new dist/ folder
   - GitHub Pages: `npm run deploy`

## 💡 Tips

- **Use a custom domain** for professional look
- **Enable HTTPS** (most platforms do this automatically)
- **Set up analytics** (Google Analytics, Plausible)
- **Monitor performance** with Lighthouse
- **Keep dependencies updated** monthly: `npm update`

## 📞 Need Help?

Common resources:
- Vite docs: https://vitejs.dev
- React docs: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Vercel docs: https://vercel.com/docs
- Netlify docs: https://docs.netlify.com

---

Good luck with your deployment! 🚀
