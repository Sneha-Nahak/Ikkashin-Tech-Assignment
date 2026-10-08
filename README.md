# Social Baluni Public School - Website Restructuring

> A modern, scalable landing page for Social Baluni Public School built with Next.js and TypeScript

## 🎯 Project Overview

This project delivers a complete website restructuring for Social Baluni Public School (SBPS), implementing the design principles outlined in the proposal: **"Clarity over clutter. Hierarchy over decoration."**

The website serves as a digital platform representing:
- **3,000+ students** across three schools (Boarding, Defence Academy, IIT/NEET)
- **400+ faculty and staff members**
- Comprehensive academics, IIT/NDA preparation, and sports programs

## 🏗️ Project Structure

```
sbps-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Main landing page
│   │   └── globals.css         # Global styles & Tailwind directives
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation header (mobile-responsive)
│   │   ├── Hero.tsx            # Hero section with CTAs
│   │   ├── QuickActions.tsx     # Quick navigation cards
│   │   ├── About.tsx           # Why Choose SBPS section
│   │   ├── Academics.tsx       # Academic programs showcase
│   │   ├── IITNDASection.tsx    # IIT/NDA preparation details
│   │   ├── Sports.tsx          # Sports & extracurriculars
│   │   ├── Achievements.tsx     # Student achievements
│   │   ├── News.tsx            # News & events
│   │   ├── Admissions.tsx       # Admission process & dates
│   │   └── Footer.tsx          # Footer with links & contact
├── public/                      # Static assets (favicon, etc.)
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
└── package.json
```

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 15 + React 19 + TypeScript |
| **Styling** | Tailwind CSS + Custom utilities |
| **Icons** | Lucide React |
| **Deployment** | Vercel (recommended) or any Node.js host |

## 🎨 Design System

### Color Palette
```
Primary:    #1F5E3B (Deep Green - trust, growth)
Secondary:  #5E9B73 (Light Green - harmony)
Accent:     #C8372D (Red - urgency, importance)
Background: #F8F6F0 (Warm White - clarity)
Alt BG:     #E6F0E9 (Light Green - subtle)
Text:       #1A1D1B (Near Black - readability)
Muted:      #5C665F (Grey - secondary text)
Border:     #DAD8CF (Light Grey - separation)
```

### Typography
- **Display**: Merriweather (serif) - headings, impact
- **Body**: Inter (sans-serif) - clarity, readability

### Key Components
- Responsive grid layouts (1 col mobile → 2/3/4 cols desktop)
- Card-based design with hover states
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

### 1. **Information Architecture**
Reorganized from information-heavy to user-intent driven:
- **Hero**: Clear identity & CTAs
- **Quick Actions**: Fast navigation to key areas
- **About**: Why Choose SBPS
- **Academics**: Core curriculum + IIT/Engineering + NDA
- **IIT/NDA**: Dedicated competitive prep section
- **Sports**: Multi-sport ecosystem
- **Achievements**: Student success stories
- **News & Events**: Latest updates
- **Admissions**: Clear process & important dates
- **Footer**: Links, contact, social media

### 2. **Visual Hierarchy**
- Primary color (#1F5E3B) for main actions and headings
- Secondary color (#5E9B73) for hover states and accents
- Accent color (#C8372D) for critical information
- Whitespace to reduce visual noise
- Typography scale: Display → Heading 2 → Heading 3 → Body

### 3. **Accessibility**
- Semantic HTML (header, nav, main, section, article, footer)
- ARIA labels and roles throughout
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards
- Alt text placeholders for images
- Skip-to-main-content link

### 4. **SEO Optimization**
- **Meta tags**: Title, description, keywords
- **Open Graph**: Social media sharing support
- **Twitter Card**: Tweet preview optimization
- **Semantic HTML**: Proper heading hierarchy (h1, h2, h3)
- **Structured data**: Schema markup ready
- **Mobile-friendly**: Responsive design built-in
- **Fast performance**: Optimized Next.js build
- **Internal linking**: Navigation between sections

### 5. **Performance**
- Static site generation with Next.js
- Optimized CSS with Tailwind
- Lucide icons (lightweight SVG)
- Code splitting per component
- Responsive images ready for integration
- Lazy loading support

## 📋 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Steps

1. **Clone/Extract Project**
   ```bash
   cd sbps-website
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser

4. **Build for Production**
   ```bash
   npm run build
   npm start
   # or
   yarn build
   yarn start
   ```

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

### Traditional Hosting (Node.js)
```bash
npm run build
npm start
```

Environment variables (if needed):
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

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

### Component Architecture
- All components are client/server safe (proper 'use client' usage)
- Reusable Tailwind utility classes
- Consistent spacing system (4px base unit)
- Color palette variables in Tailwind config

### Styling Approach
- Utility-first with Tailwind CSS
- Custom components in `globals.css`
- No CSS files needed for individual components
- Easy to theme/update via `tailwind.config.ts`

### Performance Tips
- Images: Use Next.js `Image` component when adding real images
- Fonts: Google Fonts preconnected in layout
- Icons: Lucide React (lightweight SVG)
- CSS: Tailwind purges unused styles in production

## 🤝 Contributing

When extending the project:
1. Follow TypeScript strict mode
2. Use semantic HTML
3. Maintain accessibility standards
4. Keep components focused and reusable
5. Update this README with changes
6. Test on mobile devices

## 📞 Contact Information

**Social Baluni Public School**
- Phone: +91-1792-242100
- Email: info@sbpsdoon.com
- Address: Baluni Campus, Dehradun, Uttarakhand, India
- Website: https://www.sbpsdoon.com/

## 📄 License

This website redesign is proprietary work for Social Baluni Public School prepared by Ikkashin Technologies Pvt. Ltd.

---

**Built with ❤️ using Next.js + TypeScript + Tailwind CSS**

*Last Updated: December 2024*
