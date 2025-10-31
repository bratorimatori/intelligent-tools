# Deployment Guide - Intelligent Tools AI Directory

## Prerequisites

- GitHub account
- Vercel account (free tier works)
- Supabase project with database setup

## Step 1: Push Code to GitHub

Your code is already pushed to: `https://github.com/bratorimatori/intelligent-tools.git`

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

### Option B: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository: `bratorimatori/intelligent-tools`
4. Configure the project:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

## Step 3: Configure Environment Variables

In Vercel dashboard, go to **Settings** → **Environment Variables** and add:

### Required Variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SITE_URL=https://intelligenttools.co
NEXT_PUBLIC_SITE_NAME=Intelligent Tools
```

### Optional Variables:

```bash
# For AI content generation
ANTHROPIC_API_KEY=your-anthropic-api-key

# For analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Important**: Add these for all environments (Production, Preview, Development)

## Step 4: Supabase Database Setup

1. Go to your Supabase project
2. Run the SQL migrations in order:
   - `supabase/migrations/001_initial_schema.sql`
   - `supabase/migrations/001_ai_tools_schema.sql`
   - `supabase/migrations/002_seed_data.sql`

3. Enable Row Level Security (RLS) if needed
4. Configure authentication if using auth features

## Step 5: Custom Domain (Optional)

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Add your custom domain: `intelligenttools.co`
3. Follow Vercel's DNS configuration instructions
4. Update `NEXT_PUBLIC_SITE_URL` environment variable to your custom domain

## Step 6: Deploy

1. Click **Deploy** in Vercel
2. Wait for the build to complete (usually 2-3 minutes)
3. Visit your deployment URL

## Continuous Deployment

Vercel automatically deploys:
- **Production**: When you push to `main` branch
- **Preview**: When you create a pull request

## Monitoring & Analytics

1. **Vercel Analytics**: Enable in Vercel dashboard
2. **Error Tracking**: Available in Vercel dashboard
3. **Performance Monitoring**: Built-in Next.js analytics

## Troubleshooting

### Build Fails

- Check build logs in Vercel dashboard
- Verify all environment variables are set
- Ensure Node.js version is 20+ (set in Vercel settings if needed)

### Database Connection Issues

- Verify Supabase URL and anon key are correct
- Check Supabase project is not paused
- Ensure RLS policies allow public read access for tools

### Styling Issues

- Clear `.next` cache locally and rebuild
- Check Tailwind CSS configuration
- Verify PostCSS is processing correctly

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] Environment variables are set
- [ ] Database connection works
- [ ] Images load properly
- [ ] All pages render without errors
- [ ] SEO metadata is correct
- [ ] Analytics tracking works
- [ ] Custom domain configured (if applicable)

## Performance Optimization

The site is already optimized with:
- ✓ Next.js 15 with Turbopack
- ✓ Server-side rendering
- ✓ Static generation where possible
- ✓ Image optimization ready
- ✓ Security headers configured

## Support

For issues:
- Vercel: https://vercel.com/docs
- Next.js: https://nextjs.org/docs
- Supabase: https://supabase.com/docs
