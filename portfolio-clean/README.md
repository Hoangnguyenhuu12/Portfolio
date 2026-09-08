# AI Engineer Portfolio - Nguyễn Hữu Hoàng

Minimalist, modern portfolio website for AI engineers specializing in LLM & RAG systems. Built with Next.js, React, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 📋 Deployment Options

### Option 1: Vercel (Recommended)
**Fastest & easiest - takes 2 minutes**

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Select your repository
4. Click "Deploy" (Vercel auto-detects Next.js)
5. Your site goes live at `your-username.vercel.app` or custom domain

**Custom Domain:**
- In Vercel dashboard → Settings → Domains
- Add your domain (e.g., `hoang.dev`)
- Follow DNS setup instructions

### Option 2: GitHub Pages
**Free, simple, no server needed**

```bash
# 1. Build as static site
npm run export

# 2. Push to GitHub
git add .
git commit -m "Deploy portfolio"
git push origin main

# 3. In GitHub repo → Settings → Pages
# Set Source to "deploy" branch (or root if using gh-pages)
```

Site lives at `yourusername.github.io` or custom domain

### Option 3: Netlify

1. Push repo to GitHub
2. Go to [netlify.com](https://netlify.com) → "New site from Git"
3. Select repository & auto-deploy
4. Lives at `your-site.netlify.app`

---

## ✏️ Customization Guide

### 1. Update Personal Info

**File:** `components/Portfolio.jsx`

```javascript
// Line ~15: Update GitHub link
href="https://github.com/YOUR_USERNAME"

// Line ~145: Update email
href="mailto:your.email@gmail.com"
```

### 2. Update Projects

**File:** `components/Portfolio.jsx`

Find the `projects` section in content object (around line 50):

```javascript
projects: {
  title: 'Featured Projects',
  items: [
    {
      title: 'Your Project Name',
      desc: 'Project description here...',
      tech: ['Python', 'LangChain', 'Your Tech'],
      link: 'https://github.com/yourrepo' // or project URL
    },
    // Add more projects...
  ]
}
```

### 3. Update Experience & Timeline

**File:** `components/Portfolio.jsx`

Update the `about.experience` section:

```javascript
experience: {
  title: 'Experience',
  internship: {
    role: 'Your Role',
    company: 'Company Name',
    duration: 'Duration',
    desc: 'What you did...'
  },
  education: {
    role: 'Your Program',
    company: 'University Name',
    duration: 'When',
    desc: 'Focus areas...'
  }
}
```

### 4. Update Skills

**File:** `components/Portfolio.jsx`

Modify `skills.categories`:

```javascript
skills: {
  title: 'Core Technologies',
  categories: {
    ai: { 
      name: 'AI/ML', 
      items: ['Skill 1', 'Skill 2', 'Skill 3'] 
    },
    lang: { 
      name: 'Languages', 
      items: ['Python', 'Go', 'Rust'] 
    },
    tools: { 
      name: 'Tools & Platforms', 
      items: ['Docker', 'K8s', 'AWS'] 
    }
  }
}
```

### 5. Add Social Links

Add more social buttons in the contact section:

```javascript
// Add LinkedIn, Twitter, etc.
<a href="https://linkedin.com/in/yourprofile" target="_blank">
  LinkedIn
</a>
```

### 6. Change Colors & Theme

Modify `Portfolio.jsx` color references:
- Primary color: `#3b82f6` (blue) → change to your brand color
- Update in multiple places (buttons, accents, etc.)

---

## 🎨 Design Decisions & Why They Work

### Minimalism
- **No clutter** → Recruiters can find what matters (projects, tech, contact) in 10 seconds
- **Whitespace** → Breathing room = professional impression
- **Consistency** → Same styling throughout

### Dark/Light Mode
- **Auto-detection** → Respects user's OS preference
- **Manual toggle** → Users can override
- **Better accessibility** → Works for all light conditions

### Bilingual Support (EN/VI)
- **Toggle button** → Easy language switch
- **Complete content** → Both languages full-featured
- **Hiring in US & Vietnam** → Covers both markets

### Tech Stack Emphasis
- **Tech badges** → Immediately shows what you know
- **Skills section** → Organized by category
- **Project tech** → Each project shows its tech stack
- **Why?** → Big Tech hires for skills + projects

### Mobile Responsive
- Hero: Full-width, readable on mobile
- Projects: Grid adapts (2 cols on desktop, 1 on mobile)
- Navigation: Hamburger menu ready

---

## 📊 SEO & Visibility

This portfolio includes:
- Meta tags for search engines
- Open Graph for social sharing
- Semantic HTML
- Fast load time (Next.js optimization)

**To improve ranking:**
1. Add keywords naturally in your about section
2. Include project descriptions that mention your tech
3. Keep it updated with recent projects
4. Share on GitHub/LinkedIn with link to portfolio

---

## 🔐 Security & Best Practices

✅ What this portfolio does right:
- No sensitive data hardcoded
- No tracking/analytics (keep it clean)
- Static site = no backend vulnerabilities
- Git-safe (no secrets in code)

**Before deploying:**
- Double-check email is correct
- Verify GitHub link is public
- Ensure project links work
- Test on mobile

---

## 📱 Testing Checklist

- [ ] Works on mobile (iPhone, Android)
- [ ] Dark/Light mode toggle works
- [ ] Language toggle (EN/VI) works
- [ ] All links clickable
- [ ] Email link opens mail client
- [ ] GitHub link opens in new tab
- [ ] No broken images/icons
- [ ] Text is readable in all sections
- [ ] Navigation smooth
- [ ] Fast load time (check Lighthouse)

---

## 🎯 Optimization Tips for Big Tech Recruiting

### Content
- ✅ Keep projects concise but impactful
- ✅ Mention specific tech (LangChain, Vector DB, OCR)
- ✅ Show real impact (what did users gain?)
- ✅ Include links to working demos/code

### Design
- ✅ Professional but not corporate
- ✅ Fast loading (Google cares)
- ✅ Mobile-friendly (recruiters use phones)
- ✅ Accessibility (WCAG standards)

### SEO
- ✅ Title & meta description for Google
- ✅ Keywords: "AI Engineer", "LLM", "Python"
- ✅ Open Graph tags for social sharing

---

## 🚀 Next Steps

1. **Customize content** (projects, skills, experience)
2. **Deploy** (Vercel recommended)
3. **Test** on mobile & different browsers
4. **Share** on GitHub, LinkedIn, Twitter
5. **Monitor** via Google Search Console
6. **Update** regularly with new projects

---

## 💡 Pro Tips for Standing Out

1. **Make projects public on GitHub** → With good README
2. **Add demo video/GIF** → Link in portfolio
3. **Show problem-solving** → Not just what you built, why
4. **Write about your tech** → Medium posts, blog
5. **Keep it updated** → New projects every 2-3 months
6. **Be specific** → "Reduced latency 40%" beats "optimized"

---

## ❓ Troubleshooting

**Dark mode not working?**
- Clear browser cache
- Check system preference settings

**Links not working?**
- Verify URLs are correct
- Use absolute URLs (https://...)

**Page not loading?**
- Check Node version: `node --version` (should be 16+)
- Clear node_modules: `rm -rf node_modules && npm install`

**Deployment fails?**
- Check build logs in platform dashboard
- Ensure package.json has all dependencies

---

## 📝 License

This portfolio is customized for Nguyễn Hữu Hoàng. Feel free to adapt the design for your own use.

---

**Questions?** Check out Next.js docs: https://nextjs.org/docs
