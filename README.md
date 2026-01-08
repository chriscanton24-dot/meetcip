# Call Intelligence Platform - Landing Page

**Modern React + Vite + Tailwind Landing Page**

## 🎨 Design Features

- **Distinctive Typography**: DM Sans + Outfit (avoiding generic AI fonts)
- **Bold Color Scheme**: Deep navy + electric cyan (no purple gradients)
- **Animations**: Float, glow, slide-up effects
- **Unique Elements**: Gradient meshes, noise textures, floating blobs
- **Mobile Responsive**: 4 breakpoints (sm, md, lg, xl)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project
cd cip-landing

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:3000

### Build for Production

```bash
npm run build
```

Output in `dist/` folder

## 📦 Deployment to Vercel (FREE)

### Method 1: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Method 2: Vercel Dashboard (Recommended)

1. Push code to GitHub
2. Go to https://vercel.com
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

Your site will be live at: `https://your-project.vercel.app`

## 📁 Project Structure

```
cip-landing/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── PricingPage.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Demo.tsx
│   ├── App.tsx          # Main app with routing
│   ├── main.tsx         # React entry point
│   └── index.css        # Global styles + Tailwind
├── index.html           # HTML entry
├── package.json
├── tailwind.config.js   # Custom design tokens
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript config
```

## 🎯 Pages

- **/** - Home (Hero, Features, Testimonials, Pricing, FAQ)
- **/pricing** - Detailed pricing plans
- **/about** - Company story and values
- **/contact** - Contact form and information
- **/demo** - Demo request form

## 🔧 Customization

### Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: { DEFAULT: '#0F172A' },  // Deep navy
  accent: { DEFAULT: '#06B6D4' },   // Electric cyan
}
```

### Fonts
Edit `index.html` Google Fonts link and `tailwind.config.js`

### Content
Edit component files in `src/components/` and `src/pages/`

## ✅ Testing Checklist

- [ ] All pages load correctly
- [ ] Navigation works (desktop + mobile)
- [ ] Forms validate and submit
- [ ] Mobile responsive (375px, 768px, 1024px, 1280px)
- [ ] No console errors
- [ ] Images load properly
- [ ] Links work
- [ ] Fast loading (<2s)

## 🐛 Common Issues

### Port already in use
```bash
# Change port in vite.config.ts
server: { port: 3001 }
```

### TypeScript errors during build
```bash
# Skip type checking
npm run build -- --no-typecheck
```

### Tailwind classes not applying
```bash
# Restart dev server
npm run dev
```

## 📞 Support

Questions? Contact: chriscanton24@gmail.com

## 📄 License

Proprietary - Call Intelligence Platform © 2025
