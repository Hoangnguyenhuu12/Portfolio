# Deploy to Vercel - Step by Step Guide

Your portfolio is ready to deploy! Here's how:

## Step 1: Initialize Git Repository

```bash
cd /path/to/portfolio
git init
git add .
git commit -m "Initial commit: AI Engineer portfolio"
```

## Step 2: Push to GitHub

1. Go to https://github.com/new
2. Create new repository: `ai-portfolio` (or any name)
3. **Do NOT** initialize with README, .gitignore, or license
4. Copy the commands shown, run them:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ai-portfolio.git
git push -u origin main
```

(Replace `YOUR_USERNAME` with your actual GitHub username)

## Step 3: Deploy to Vercel

### Option A: Using Vercel Dashboard (Easiest)

1. Go to https://vercel.com
2. Click **"Sign up"** → Continue with GitHub
3. Authorize Vercel to access your GitHub
4. Click **"New Project"**
5. Select your `ai-portfolio` repository
6. Click **"Import"**
7. Vercel auto-detects Next.js settings ✅
8. Click **"Deploy"**

**Done!** Your site is live at: `https://your-username.vercel.app`

---

## Step 4: Custom Domain (Optional)

To use `hoang.dev` or your own domain:

1. In Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain name
3. Follow DNS setup instructions (Vercel shows exact steps)
4. Wait 1-2 minutes for DNS propagation
5. Site accessible at your custom domain

---

## Troubleshooting

### Build Error: "Module not found"
- On your computer, run: `npm install`
- Commit changes: `git add . && git commit -m "Add node_modules lock" && git push`

### Site shows 404
- Check Vercel dashboard → Deployments
- Look for red error icon and click to see error details

### Custom domain not working
- DNS might take time (up to 48 hours, usually 5-10 min)
- Check domain's DNS settings in registrar

### Want to make changes?
1. Edit files on your computer
2. `git add . && git commit -m "Update" && git push`
3. Vercel auto-deploys in ~30 seconds ✅

---

## Environment Variables (if needed later)

If you add API keys or secrets:
1. Vercel Dashboard → Settings → Environment Variables
2. Add KEY=VALUE pairs
3. Redeploy

---

## Performance Monitoring

After deployment, check speed:
- Vercel Dashboard → Analytics
- Or run: https://pagespeed.web.dev/

---

## Quick Commands Reference

```bash
# Test locally before pushing
npm run dev
# → Open http://localhost:3000

# Build for production
npm run build

# Push changes to GitHub
git add .
git commit -m "Your message"
git push

# Vercel auto-deploys on every push to main branch
```

---

## Next Steps

1. ✅ Verify site works (click links, test dark mode)
2. ✅ Share URL with recruiters
3. ✅ Add to resume/LinkedIn
4. ✅ Update projects as you complete new ones
5. ✅ Monitor Google Search Console for visibility

---

**Your portfolio is now live and auto-deploys on every GitHub push!** 🚀
