# M.D.N TECH - Official Website

Modern, futuristic website for M.D.N TECH - transforming visions into digital reality.

## 🚀 Tech Stack

- **React 19** - Latest React with concurrent features
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Intersection Observer** - Scroll-triggered animations
- **React Icons** - Icon library for social media

## 🎨 Design Features

- ✨ **3D Background** - Canvas-based particle system with parallax effects
- 🎯 **Matrix Theme** - Green (#00FF41) on black futuristic design
- 📱 **Fully Responsive** - Mobile-first design approach
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🎭 **Smooth Animations** - Framer Motion powered transitions
- 🔍 **SEO Optimized** - Comprehensive meta tags and schema markup

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Development

The development server runs on `http://localhost:5173` (or the next available port).

The site features:

### Sections
1. **Hero** - Main landing with CTA
2. **Services** - 4 expandable service cards
   - Web & App Development
   - Blockchain Solutions
   - Social Media Management
   - Content Creation
3. **Portfolio** - 3 featured projects with links
4. **Stats** - Animated counters showing experience
5. **About** - Company story and values
6. **Contact** - Modal form with validation

### Components
- `Background3D` - Animated particle background
- `Header` - Fixed navigation with mobile menu
- `Footer` - Links and social media icons
- `ContactModal` - Full-featured contact form

## 🎨 Design System

### Colors
```css
Primary Green: #00FF41
Black Background: #000000
Card Background: #1A1A1A
Text Colors: #FFFFFF, #F5F5F5, #B3B3B3
```

### Typography
- **Primary Font**: Inter (headings, UI)
- **Secondary Font**: Space Grotesk (body text)
- **Mono Font**: JetBrains Mono (logo, technical elements)

### Spacing Scale
4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px, 192px, 256px

## 📝 Content

All content is from the SEO-optimized documentation:
- Hero tagline and CTA
- Service descriptions (brief + detailed)
- Portfolio project info
- About section narrative
- Contact form fields

## 🔧 Configuration

### Tailwind Config
Located in `tailwind.config.js` - includes all brand colors, fonts, and custom utilities.

### Vite Config
Located in `vite.config.js` - configured for React with Fast Refresh.

## 🌍 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Build Settings
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## 📋 TODO (Future Enhancements)

- [ ] Add real logo files (replace text logo)
- [ ] Add project logo images
- [ ] Connect social media URLs
- [ ] Integrate contact form backend (EmailJS or custom API)
- [ ] Add blog section
- [ ] Implement case study pages
- [ ] Add testimonials carousel
- [ ] Multi-language support
- [ ] Analytics integration (Google Analytics, Plausible)
- [ ] Performance monitoring

## 🔗 Project URLs

- **Swarm Resistance**: https://www.cryptomeda.tech/
- **Chaos Genesis**: https://www.chaosgenesis.com/
- **Royal Stroje**: https://www.royalstroje.sk/

## 📧 Contact

Email: chaosgenesisnft@gmail.com

## 📄 License

© 2024 M.D.N TECH. All rights reserved.

---

## 🎯 MVP Status

✅ All sections built and functional
✅ Responsive design implemented
✅ Animations and interactions working
✅ SEO meta tags added
✅ Contact form with validation (frontend only)
✅ 3D background effects

### Known Limitations (MVP)
- Social media links are placeholder (#)
- Contact form logs to console (no backend)
- Project logos use text placeholders
- Using temporary email address

### Ready for:
- Local development
- Vercel deployment
- Content updates
- Logo integration
- Backend integration
