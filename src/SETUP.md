# Personal Portfolio - Production Setup

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser to http://localhost:5173
```

## Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Tech Stack

- **Framework**: Vite + React 18 + TypeScript
- **Styling**: Tailwind CSS v4.0 + CSS Variables
- **Animation**: Motion (Framer Motion)
- **UI Components**: Shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **State Management**: React Hooks

## Project Structure

```
/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn components (Radix UI + Tailwind)
│   ├── figma/          # Protected Figma import utilities
│   ├── Navbar.tsx      # Main navigation
│   ├── Footer.tsx      # Site footer
│   └── ...             # Other components
├── pages/              # Page components
│   ├── HomePage.tsx
│   ├── ProjectsPage.tsx
│   ├── ExperiencePage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   └── ResumePage.tsx
├── data/               # Static data (projects, experience, skills)
├── styles/             # Global styles
│   └── globals.css     # CSS variables + Tailwind config
├── scripts/            # Build/maintenance scripts
│   └── fix-imports.mjs # Auto-fix versioned imports
└── App.tsx             # Root component

```

## Design Tokens (CSS Variables)

All design tokens are defined in `/styles/globals.css`:

### Colors
- `--surface`, `--surface-elevated` - Background colors
- `--ink-primary`, `--ink-secondary`, `--ink-tertiary` - Text colors
- `--accent`, `--accent-light`, `--accent-dark` - Brand colors
- `--muted`, `--success`, `--warning`, `--danger` - Utility colors

### Typography Scale
- `--text-display`: 44px (32px on mobile)
- `--text-h1`: 36px (24px on mobile)
- `--text-h2`: 28px (20px on mobile)
- `--text-h3`: 22px
- `--text-body`: 18px
- `--text-small`: 14px

### Spacing
- Container max-width: 1200px (responsive)
- Padding: 16px baseline (adjusts per breakpoint)
- Gaps: 4/8/12/16/24/32/48px scale

### Border Radius
- `--r-sm`: 8px
- `--r-md`: 12px
- `--r-lg`: 16px

### Shadows
- `--shadow-sm`: Subtle
- `--shadow-md`: Medium
- `--shadow-lg`: Prominent

## Responsive Breakpoints

Matches Figma Make behavior at standard device widths:

| Breakpoint | Width  | Container | Use Case          |
|------------|--------|-----------|-------------------|
| Desktop    | 1440px | 1140px    | Large screens     |
| Desktop    | 1200px | 960px     | Standard desktop  |
| Tablet L   | 992px  | 720px     | Landscape tablets |
| Tablet P   | 768px  | 100%      | Portrait tablets  |
| Mobile     | 390px  | 100%      | Standard mobile   |
| Mobile S   | 360px  | 100%      | Small mobile      |

Typography scales down automatically at tablet and mobile breakpoints.

## Font Setup

Primary font: **Inter** (Google Fonts)

Fallback stack:
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```

Weights used: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

## Browser Support

Tested and verified on:
- Chrome/Edge (latest)
- Safari (latest)
- Firefox (latest)

Cross-platform compatibility: Windows, macOS, iOS, Android

## Component Library

### Shadcn/ui Components Available
- Forms: Input, Textarea, Select, Checkbox, Radio, Switch
- Overlays: Dialog, Drawer, Popover, Tooltip, Sheet
- Navigation: Tabs, Breadcrumb, Pagination, Navigation Menu
- Data: Table, Card, Badge, Avatar
- Feedback: Alert, Toast (Sonner), Progress, Skeleton
- Layout: Accordion, Collapsible, Separator, Aspect Ratio

### Custom Components
- `AnimatedPage`: Page transition wrapper
- `ProjectCard`: Project showcase card
- `ExperienceTimeline`: Work experience timeline
- `SkillCluster`: Animated skill tags
- `Navbar`: Responsive navigation with mobile menu
- `Footer`: Site footer with social links

## Development Guidelines

### No Design Changes
- Do not modify visual appearance without explicit approval
- Preserve exact spacing, typography, and layout from design
- Maintain pixel parity at all documented breakpoints

### Code Standards
- **No versioned imports**: Use `from 'package'` not `from 'package@version'`
- **No node: protocol**: Use plain specifiers for Node built-ins
- **Use CSS variables**: Never hardcode colors, spacing, or typography
- **Component composition**: Break complex UIs into reusable components
- **Semantic naming**: Components, variables, and files use descriptive names

### Import Fixes
If you encounter versioned imports, run:
```bash
node scripts/fix-imports.mjs
```

## Visual QA Checklist

Before deployment, verify at each breakpoint (1440/1200/992/768/390/360):

✓ Layout matches design exactly  
✓ Text wrapping and line breaks are correct  
✓ Spacing and alignment are pixel-perfect  
✓ Images are crisp (use @1x/@2x for retina)  
✓ Animations are smooth (or disabled per prefers-reduced-motion)  
✓ All interactive states work (hover/focus/active/disabled)  
✓ Navigation and modals function correctly  
✓ Color contrast meets WCAG AA standards  

## Environment Variables

No environment variables required for basic functionality.

For external APIs or services:
- Add `.env.local` file (git-ignored)
- Use `VITE_` prefix for client-side variables
- Document all required variables in this section

## Performance

- Code splitting via React lazy loading
- Optimized images (WebP with fallbacks)
- CSS variables for theme consistency
- Minimal JavaScript bundle size
- Motion animations respect reduced-motion preferences

## Deployment

Compatible with:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Build output: `/dist` directory

## Support

For issues or questions:
1. Check this README
2. Review the design guidelines in `/guidelines/Guidelines.md`
3. Verify responsive behavior at documented breakpoints
4. Check browser console for errors

---

**Last Updated**: October 6, 2025  
**Version**: 1.0.0  
**Status**: Production Ready ✓
