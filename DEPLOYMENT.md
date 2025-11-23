# Deployment Guide - M.D.N TECH Website

## 🚀 Quick Deployment to Vercel

### Option 1: Vercel CLI (Fastest)

```bash
# 1. Install Vercel CLI globally
npm i -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy (run from project root)
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: mdntech (or your choice)
# - Directory: ./ (current directory)
# - Build settings: Auto-detected (Vite)

# 4. Deploy to production
vercel --prod
```

### Option 2: GitHub + Vercel (Recommended for CI/CD)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - M.D.N TECH website"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Click "Deploy"

3. **Configuration (Auto-detected)**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## 🌍 Custom Domain Setup

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain (mdntech.com)
4. Update your DNS records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

## 📝 Environment Variables (If needed later)

For future backend integration, add in Vercel dashboard:

```env
VITE_API_URL=your-api-url
VITE_EMAIL_SERVICE_ID=your-emailjs-service-id
VITE_EMAIL_TEMPLATE_ID=your-emailjs-template-id
```

## 🔧 Build Optimization

The project is already optimized with:
- ✅ Code splitting
- ✅ Asset optimization
- ✅ Lazy loading
- ✅ Minification
- ✅ Tree shaking

### Check Build Size

```bash
npm run build

# Analyze bundle size
npm install -g vite-bundle-visualizer
npx vite-bundle-visualizer
```

## 📊 Performance Checklist

Before deploying to production:

- [ ] Test on mobile devices
- [ ] Check Lighthouse scores (aim for 90+)
- [ ] Verify all links work
- [ ] Test contact form validation
- [ ] Check responsive breakpoints
- [ ] Test animations on different devices
- [ ] Verify SEO meta tags
- [ ] Test accessibility (keyboard navigation, screen readers)

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Vite Config Issues

If you see path resolution errors, ensure `vite.config.js` is correct:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Change if deploying to subdirectory
})
```

### 404 on Routes

For SPAs on Vercel, create `vercel.json`:

```json
{
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

## 📈 Post-Deployment

1. **Add Analytics**
   - Google Analytics
   - Vercel Analytics (built-in)
   - Plausible (privacy-focused)

2. **Set up Monitoring**
   - Vercel's built-in monitoring
   - Sentry for error tracking

3. **Performance Monitoring**
   - Use Lighthouse CI
   - Set up performance budgets

## 🔄 Continuous Deployment

Once connected to GitHub, every push to `main` will:
1. Auto-deploy to production
2. Run build checks
3. Deploy preview for PRs

## 📱 Testing URLs

After deployment, test:
- Desktop: Chrome, Firefox, Safari, Edge
- Mobile: iOS Safari, Chrome Mobile
- Tablet: iPad, Android tablets

## ✅ Production Checklist

Before going live:
- [ ] Domain configured
- [ ] SSL certificate active (auto by Vercel)
- [ ] All content reviewed
- [ ] Contact form tested
- [ ] Social media links updated (when ready)
- [ ] Logo uploaded (when ready)
- [ ] Analytics installed
- [ ] Performance tested
- [ ] SEO verified
- [ ] Accessibility checked

## 🆘 Support

For Vercel support:
- Docs: https://vercel.com/docs
- Discord: https://vercel.com/discord

For project issues:
- Email: chaosgenesisnft@gmail.com
