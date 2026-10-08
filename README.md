# Social Baluni Public School - Landing Page

> Modern landing page for Social Baluni Public School. Built with Next.js, TypeScript, and Tailwind CSS. Features responsive dual-header navbar, hero section, and comprehensive school information with smooth animations.

## 🎯 Project Overview

A complete, production-ready landing page for Social Baluni Public School (SBPS) implementing the design philosophy: **"Clarity over clutter. Hierarchy over decoration."**

The website represents:
- **3,000+ students** across three schools (Boarding, Defence Academy, IIT/NEET)
- **400+ faculty and staff members**
- Comprehensive academics, IIT/NDA preparation, and sports programs

## 🏗️ Project Structure

```
sbps-website/
├── app/
│   ├── layout.tsx              # Root layout with metadata & suppressHydrationWarning
│   ├── page.tsx                # Main landing page
│   ├── globals.css             # Global styles & Tailwind directives
│   └── staff-login/
│       └── page.tsx            # Staff login portal page
├── components/
│   ├── Navbar.tsx              # Dual-header sticky navbar with scroll detection
│   ├── Hero.tsx                # Hero section with campus image & CTAs
│   ├── QuickActions.tsx         # Quick navigation cards
│   ├── Stats.tsx               # Statistics: 3000+ students, 400+ faculty, 75% IIT success
│   ├── About.tsx               # Why Choose SBPS section
│   ├── Academics.tsx           # Academic programs showcase
│   ├── IITNDASection.tsx        # IIT/NDA preparation details
│   ├── Sports.tsx              # Sports & extracurriculars
│   ├── Achievements.tsx         # Student achievements
│   ├── News.tsx                # News & events
│   ├── Admissions.tsx           # Admission process & dates
│   └── Footer.tsx              # Footer with SBPS logo & contact info
├── public/
│   └── sbps-school.png         # Hero section background image
├── .npmrc                       # npm config with legacy-peer-deps=true
├── tailwind.config.ts          # Tailwind CSS configuration with custom colors
├── tsconfig.json               # TypeScript strict mode configuration
├── next.config.ts              # Next.js configuration
└── package.json
```

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16.4.0 |
| **Runtime** | React 19.3.0 + TypeScript 5.5.4 |
| **Styling** | Tailwind CSS 3.4.13 + Autoprefixer |
| **Icons** | Lucide React 0.416.0 |
| **Build Tools** | Tailwind Turbopack 4.0.13 |
| **Deployment** | Vercel (recommended) or Node.js hosting |

## 🎨 Design System

### Color Palette (Tailwind Config)
```
Primary:    #1F5E3B (Deep Green - headings, main actions)
Secondary:  #5E9B73 (Light Green - hover states, secondary elements)
Accent:     #C8372D (Red - CTAs, Staff Login button, active nav links)
Background: #F8F6F0 (Warm White - page background)
Alt BG:     #E6F0E9 (Light Green - stats section, alternate backgrounds)
Text:       #1A1D1B (Near Black - main text, high contrast)
Text Muted: #5C665F (Grey - secondary text, descriptions)
Border:     #DAD8CF (Light Grey - card borders, separators)
```

### Custom SVG Logo
- Shield shape with white color
- Green book symbol inside
- Red accent circle for branding
- Used in navbar (red circular background) and footer

### Typography
- **Display**: Merriweather (serif) - headings, impact
- **Body**: Inter (sans-serif) - clarity, readability

### Animations & Transitions
- **Fast**: 200ms (hover effects, quick interactions)
- **Base**: 300ms (standard transitions, smooth movements)
- **Slow**: 500ms (complex animations, page transitions)
- Includes fade-in, slide-up, and scale animations

### Key UI Elements
- Responsive grid layouts (1 col mobile → 2/3/4 cols desktop)
- Card-based design with hover states and shadows
- Rounded corners (lg) on cards and buttons
- Accessible color contrast ratios (WCAG AA+)
- Mobile-first responsive approach

## 📱 Responsive Design

### Breakpoints
- **Mobile**: 320px - 640px (single column)
- **Tablet**: 641px - 1024px (2-3 columns)
- **Desktop**: 1025px+ (3-4 columns, full layouts)

### Mobile-First Features
- Touch-friendly buttons (min 44x44px)
- Readable font sizes: 16px+ on mobile
- Stacked layouts on small screens
- Hamburger menu for navigation
- Optimized padding/margins for readability

## 🚀 Key Features

### 1. **Dual-Header Sticky Navbar**
- Top header: Primary green background with red accent border, school logo in red circle, and school name/CBSE affiliation info
- Bottom navigation: Dark grey background with navigation links and Staff Login button
- Scroll-based active link detection (updates which link is highlighted based on viewport position)
- Mobile hamburger menu (hidden on desktop, visible on mobile with dropdown from top header)
- Smooth animations and hover effects with red underline animation on active links

### 2. **Hero Section**
- Large, responsive campus image (sbps-school.png) with gradient overlay
- Center-aligned headline on mobile, left-aligned on desktop
- CTAs: "Start Your Journey" (primary green) and "Explore the School" (secondary button)
- Mobile-first responsive with image scaling on hover

### 3. **Statistics Dashboard (New Component)**
- "By the Numbers" section with 3 stat cards
- 3000+ Students, 400+ Faculty & Staff, 75% IIT Success Rate
- Card-based layout with icons and hover effects
- Light green background section
- Positioned after Quick Actions, before About

### 4. **Staff Login Portal**
- Separate route: `/staff-login`
- Email and password form inputs with icons
- "Remember me" checkbox, "Forgot password?" link
- Red accent button styling
- Security disclaimer at bottom
- Help section with IT support email

### 5. **Information Architecture**
- **Hero**: Clear identity & CTAs
- **Quick Actions**: Fast navigation cards
- **Stats**: Key metrics & numbers
- **About**: Why Choose SBPS
- **Academics**: Core curriculum + IIT/Engineering + NDA
- **IIT/NDA**: Dedicated competitive prep section
- **Sports**: Multi-sport ecosystem
- **Achievements**: Student success stories
- **News & Events**: Latest updates
- **Admissions**: Clear process & important dates
- **Footer**: SBPS logo, links, contact, social media

### 6. **Visual Design**
- Primary green for main headings and buttons
- Red accent for CTAs, active states, and important information
- Subtle red accent backgrounds (0.02-0.6 opacity)
- Consistent spacing and padding throughout
- Smooth transitions on all interactive elements
- Box shadows on hover for depth

### 7. **Mobile Responsiveness**
- **Mobile-first approach**: Designed for 320px and up
- **Hamburger menu**: Navigation on small screens
- **Flexible layouts**: Stacked cards on mobile, grid on desktop
- **Touch-friendly**: Buttons and links sized for touch (44x44px minimum)
- **Readable text**: 16px+ on mobile, proper line-height

### 8. **Accessibility**
- Semantic HTML (header, nav, main, section, article, footer)
- ARIA labels on buttons and interactive elements
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards
- Alt text and aria-label attributes
- Proper heading hierarchy (h1, h2, h3)
- Screen reader friendly

### 9. **SEO Optimization**
- Meta tags: Title, description, keywords, author
- Open Graph tags for social media sharing
- Twitter Card meta tags
- Semantic HTML structure
- Proper heading hierarchy
- Mobile-friendly responsive design
- Fast performance (optimized Next.js build)

### 10. **Performance**
- Static site generation with Next.js
- Optimized CSS with Tailwind (purged unused styles in production)
- Lightweight SVG icons (Lucide React)
- Image optimization ready (Next.js Image component)
- Code splitting per component
- Lazy loading support
- Production bundle: ~119 kB First Load JS

## 📋 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm 9+ or yarn 4+

### Quick Start

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Sneha-Nahak/Ikkashin-Tech-Assignment.git
   cd Ikkashin-Tech-Assignment/sbps-website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # Note: .npmrc file includes legacy-peer-deps=true to handle peer dependency conflicts
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3001](http://localhost:3001) in your browser
   (Port 3001 is used if 3000 is already in use)

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

5. **Lint & Type Check**
   ```bash
   npm run lint
   ```

### Environment Setup
No environment variables required for the static site. For future backend integration, add a `.env.local` file:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🚢 Deployment

### Vercel (Recommended - Easiest)

Automatically detects Next.js and deploys with zero configuration.

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to Vercel"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel automatically detects Next.js settings
   - Deploy with a single click

3. **Custom Domain**
   - Add custom domain in Vercel dashboard
   - Update DNS records
   - Get automatic HTTPS certificate

### Manual Deployment (Node.js Hosting)

For services like Heroku, DigitalOcean, AWS, etc.:

```bash
# Build the project
npm run build

# Start the production server
npm start
```

**Procfile** (for Heroku):
```
web: npm start
```

**Dockerfile** (for container deployment):
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

ENV NODE_ENV=production
CMD ["npm", "start"]

EXPOSE 3000
```

### Environment Configuration
The `.npmrc` file includes `legacy-peer-deps=true` to handle peer dependency resolution during deployment.

**Important:** Ensure your deployment environment uses:
- Node.js 18+
- `npm install` (uses .npmrc automatically)

## 🔄 Dummy Data Integration

The site uses sample data embedded in components:
- Student statistics (3000+ students, 400+ staff)
- Achievement metrics (75% IIT success rate, 1200+ admissions)
- News items with dates and descriptions
- Sports programs and clubs
- Admission process steps and dates

To replace with real data:
1. Create API endpoints in `/src/app/api/`
2. Fetch data in components using `fetch()` or external libraries
3. Update component props accordingly

## 🔐 Security Considerations

Current static site is inherently secure. When adding backend:

- **API Routes**: Implement rate limiting, CORS
- **Form Submissions**: Server-side validation, CSRF protection
- **Contact Forms**: Use nodemailer or third-party service
- **Admin Panel**: JWT/session-based authentication
- **Environment Variables**: Never commit sensitive data
- **Headers**: Implement security headers in `next.config.ts`

```typescript
// next.config.ts example
const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
]
```

## 📊 Future Enhancements

### Phase 2: Dynamic Content
- Backend API (Node.js + Express or Nest.js)
- Database (PostgreSQL + Prisma ORM)
- Admin CMS for managing:
  - News & announcements
  - Events
  - Sports achievements
  - Faculty profiles
  - Galleries
  - Admissions

### Phase 3: Advanced Features
- Student portal login
- Parent dashboard
- Online admissions form
- Event registration
- Photo/video galleries
- Achievement tracking
- Social media integration

### Phase 4: Scaling
- CDN for media (Cloudinary)
- Search functionality (Algolia)
- Analytics (Vercel Analytics)
- A/B testing
- Performance monitoring

## 🎯 Design Principles Applied

From the proposal:
- ✅ **Clarity over clutter**: Clean layouts, focused messaging
- ✅ **Hierarchy over decoration**: Clear visual hierarchy, purposeful colors
- ✅ **Purpose over repetition**: Each section serves user intent
- ✅ **Consistency over isolated treatments**: Unified design system
- ✅ **Scalability over static content**: Component-based, ready for dynamic data
- ✅ **Mobile-first responsive**: Works seamlessly on all devices
- ✅ **Accessibility**: WCAG AA compliance throughout
- ✅ **SEO-friendly**: Proper markup, metadata, performance

## 📝 Development Notes

### Hydration & Client Components
- **Navbar.tsx**: Client component with scroll detection (useEffect for event listeners)
- **Footer.tsx**: Client component for current year calculation (prevents hydration mismatch)
- **Stats.tsx**: Server-rendered static component (no client logic)
- All other components: Server-rendered for optimal performance

### Hydration Mismatch Fixes Applied
- Initial state values match between server and client
- useEffect hooks properly initialize state before rendering
- No dynamic content (Math.random, Date) rendered directly in JSX
- Root layout uses `suppressHydrationWarning` for expected responsive behavior mismatches

### Component Architecture
- Functional components with TypeScript interfaces
- Props-based customization
- Reusable Tailwind utility classes
- Consistent spacing system (4px base unit, scaled to 8, 12, 16, 24, 32px)
- Custom animations defined in Tailwind config

### Tailwind Configuration
- Extends default config with custom colors
- Animation definitions: fast (200ms), base (300ms), slow (500ms)
- Custom gradient backgrounds with red accent
- Typography scale for responsive text sizing

### Styling Approach
- Utility-first with Tailwind CSS
- No CSS-in-JS or separate CSS files
- Global styles in `globals.css` (reset, Tailwind directives, animations)
- Theme colors referenced from `tailwind.config.ts`
- Easy to update colors/animations via config file

### TypeScript Strict Mode
- Enabled in `tsconfig.json`
- No `any` types - full type safety
- Proper React component typing

### Performance Tips for Extending
1. **Images**: Use Next.js `Image` component (automatic optimization)
2. **Fonts**: Google Fonts preconnected in layout
3. **Icons**: Lucide React (lightweight, tree-shakeable)
4. **CSS**: Tailwind purges unused styles automatically in production
5. **Code Splitting**: Each component is automatically code-split
6. **Images**: Lazy loading support built-in with Next.js Image

### Responsive Breakpoints (Tailwind)
- **sm**: 640px (tablets)
- **md**: 768px (medium tablets/small desktops)
- **lg**: 1024px (desktops)
- **xl**: 1280px (large desktops)

## 📦 Dependency Management

### Current Dependencies
```json
{
  "next": "16.4.0",           // React framework with SSG/SSR
  "react": "19.3.0",          // Latest React with new features
  "react-dom": "19.3.0",      // React rendering
  "typescript": "5.5.4",      // Type safety
  "tailwindcss": "3.4.13",    // Utility CSS framework
  "@tailwindcss/turbopack": "4.0.13", // Turbopack integration
  "lucide-react": "0.416.0",  // Icon library
  "autoprefixer": "10.6.1",   // CSS vendor prefixes
}
```

### .npmrc Configuration
The `.npmrc` file contains:
```
legacy-peer-deps=true
```

This allows npm to install packages with peer dependency conflicts during deployment on services like Vercel.

### Updating Dependencies
To update dependencies safely:
```bash
npm update                    # Updates to compatible versions
npm outdated                  # Shows outdated packages
npm audit                     # Shows security vulnerabilities
npm audit fix                 # Fixes known vulnerabilities
```

## 🤝 Contributing

When extending the project:
1. Follow TypeScript strict mode
2. Use semantic HTML and proper heading hierarchy
3. Maintain accessibility standards (WCAG AA+)
4. Use Tailwind utility classes (no new CSS files)
5. Test on mobile devices and multiple screen sizes
6. Keep components focused and reusable
7. Update color values through `tailwind.config.ts` only
8. Test scroll detection and navigation on mobile browsers
9. Verify hydration (no console errors)
10. Update this README with new features/components

## 📞 Contact Information

**Social Baluni Public School**
- Phone: +91-1792-242100
- Email: info@sbpsdoon.com
- Address: Baluni Campus, Dehradun, Uttarakhand, India
- Website: https://www.sbpsdoon.com/

## 📄 License

This website redesign is proprietary work for Social Baluni Public School.

## 🔗 Live Demo

- **Production**: Available on Vercel at your-vercel-url.vercel.app
- **Development**: Run `npm run dev` and open [http://localhost:3001](http://localhost:3001)

---

**Built with ❤️ by Ikkashin Technologies**

Tech Stack: Next.js 16 • React 19 • TypeScript 5 • Tailwind CSS 3 • Lucide React

*Last Updated: October 2024*
*Project Status: ✅ Production Ready*
