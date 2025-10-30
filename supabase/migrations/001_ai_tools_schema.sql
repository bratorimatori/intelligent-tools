-- AI Tools Directory Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tool Categories Table
CREATE TABLE tool_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tools Table
CREATE TABLE tools (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  tagline TEXT,
  description TEXT,
  long_description TEXT,
  website_url TEXT NOT NULL,
  affiliate_url TEXT,
  logo_url TEXT,
  screenshot_url TEXT,
  category_id UUID REFERENCES tool_categories(id) ON DELETE SET NULL,
  pricing_type TEXT CHECK (pricing_type IN ('free', 'freemium', 'paid', 'open_source')),
  price_from DECIMAL(10,2),
  price_to DECIMAL(10,2),
  pricing_info TEXT,
  featured BOOLEAN DEFAULT false,
  sponsored BOOLEAN DEFAULT false,
  upvotes INTEGER DEFAULT 0,
  view_count INTEGER DEFAULT 0,
  click_count INTEGER DEFAULT 0,
  tags TEXT[],
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blog Categories Table
CREATE TABLE blog_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blog Posts Table
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  featured_image TEXT,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  category_id UUID REFERENCES blog_categories(id) ON DELETE SET NULL,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMPTZ,
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Sponsors Table (for monetization)
CREATE TABLE sponsors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_id UUID REFERENCES tools(id) ON DELETE CASCADE,
  tier TEXT CHECK (tier IN ('featured', 'gold', 'silver')) NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  start_date TIMESTAMPTZ NOT NULL,
  end_date TIMESTAMPTZ NOT NULL,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Analytics Events Table
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_type TEXT CHECK (event_type IN ('view', 'click', 'submit', 'upvote')) NOT NULL,
  tool_id UUID REFERENCES tools(id) ON DELETE CASCADE,
  blog_post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  session_id TEXT,
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tool Submissions Table (for user submissions)
CREATE TABLE tool_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  website_url TEXT NOT NULL,
  description TEXT,
  submitter_email TEXT NOT NULL,
  status TEXT CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
  reviewed_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  reviewed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for better performance
CREATE INDEX idx_tools_category ON tools(category_id);
CREATE INDEX idx_tools_featured ON tools(featured) WHERE featured = true;
CREATE INDEX idx_tools_sponsored ON tools(sponsored) WHERE sponsored = true;
CREATE INDEX idx_tools_slug ON tools(slug);
CREATE INDEX idx_tools_created_at ON tools(created_at DESC);
CREATE INDEX idx_blog_posts_category ON blog_posts(category_id);
CREATE INDEX idx_blog_posts_published ON blog_posts(published, published_at DESC) WHERE published = true;
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_analytics_tool ON analytics_events(tool_id, created_at DESC);
CREATE INDEX idx_analytics_type ON analytics_events(event_type, created_at DESC);
CREATE INDEX idx_sponsors_tool ON sponsors(tool_id, active) WHERE active = true;

-- Enable Row Level Security
ALTER TABLE tool_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE sponsors ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE tool_submissions ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Tool Categories: Public read access
CREATE POLICY "Tool categories are viewable by everyone"
  ON tool_categories FOR SELECT
  USING (true);

-- Tools: Public read access
CREATE POLICY "Tools are viewable by everyone"
  ON tools FOR SELECT
  USING (true);

-- Blog Categories: Public read access
CREATE POLICY "Blog categories are viewable by everyone"
  ON blog_categories FOR SELECT
  USING (true);

-- Blog Posts: Public can view published posts
CREATE POLICY "Published blog posts are viewable by everyone"
  ON blog_posts FOR SELECT
  USING (published = true OR auth.uid() = author_id);

-- Sponsors: Public read for active sponsors
CREATE POLICY "Active sponsors are viewable by everyone"
  ON sponsors FOR SELECT
  USING (active = true);

-- Analytics: Anyone can insert analytics events
CREATE POLICY "Anyone can log analytics events"
  ON analytics_events FOR INSERT
  WITH CHECK (true);

-- Tool Submissions: Anyone can submit
CREATE POLICY "Anyone can submit tools"
  ON tool_submissions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can view their own submissions"
  ON tool_submissions FOR SELECT
  USING (submitter_email = auth.jwt()->>'email');

-- Functions

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for tools updated_at
CREATE TRIGGER update_tools_updated_at
  BEFORE UPDATE ON tools
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger for blog_posts updated_at
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Function to increment view count
CREATE OR REPLACE FUNCTION increment_tool_views(tool_uuid UUID)
RETURNS void AS $$
BEGIN
  UPDATE tools SET view_count = view_count + 1 WHERE id = tool_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to increment click count
CREATE OR REPLACE FUNCTION increment_tool_clicks(tool_uuid UUID)
RETURNS void AS $$
BEGIN
  UPDATE tools SET click_count = click_count + 1 WHERE id = tool_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to increment upvotes
CREATE OR REPLACE FUNCTION increment_tool_upvotes(tool_uuid UUID)
RETURNS void AS $$
BEGIN
  UPDATE tools SET upvotes = upvotes + 1 WHERE id = tool_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Insert initial tool categories
INSERT INTO tool_categories (name, slug, description, icon) VALUES
  ('AI Writing', 'ai-writing', 'Content creation and copywriting tools', 'PenTool'),
  ('Image Generation', 'image-generation', 'Create stunning visuals with AI', 'Image'),
  ('Code Generation', 'code-generation', 'AI-powered development tools', 'Code'),
  ('Productivity', 'productivity', 'Boost your workflow with AI', 'Zap'),
  ('Video Generation', 'video-generation', 'AI-powered video creation', 'Video'),
  ('Audio & Voice', 'audio-voice', 'Voice synthesis and audio tools', 'Mic');

-- Insert initial blog categories
INSERT INTO blog_categories (name, slug, description) VALUES
  ('AI Writing Tools', 'ai-writing-tools', 'Reviews and guides for AI-powered writing assistants'),
  ('AI Image Generation', 'ai-image-generation', 'Explore tools for creating stunning AI-generated images'),
  ('AI Productivity', 'ai-productivity', 'Boost your productivity with AI-powered tools'),
  ('AI Development', 'ai-development', 'Tools for developers building with AI');
