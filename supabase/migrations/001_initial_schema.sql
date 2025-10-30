-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Blog Categories Table
CREATE TABLE blog_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Blog Posts Table
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  featured_image TEXT,
  category_id UUID REFERENCES blog_categories(id),
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP,
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Tool Categories Table
CREATE TABLE tool_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  icon TEXT,
  created_at TIMESTAMP DEFAULT NOW()
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
  category_id UUID REFERENCES tool_categories(id),
  pricing_type TEXT, -- 'free', 'freemium', 'paid', 'open_source'
  price_from DECIMAL,
  price_to DECIMAL,
  pricing_info TEXT,
  featured BOOLEAN DEFAULT false,
  sponsored BOOLEAN DEFAULT false,
  upvotes INTEGER DEFAULT 0,
  view_count INTEGER DEFAULT 0,
  click_count INTEGER DEFAULT 0,
  tags TEXT[],
  metadata JSONB,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Sponsors Table (for future monetization)
CREATE TABLE sponsors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tool_id UUID REFERENCES tools(id),
  tier TEXT, -- 'featured', 'gold', 'silver'
  amount DECIMAL,
  start_date DATE,
  end_date DATE,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Analytics Events Table (for tracking clicks and views)
CREATE TABLE analytics_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_type TEXT, -- 'view', 'click', 'submit'
  tool_id UUID REFERENCES tools(id),
  metadata JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Tool Submissions Table (for user-submitted tools pending approval)
CREATE TABLE tool_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  website_url TEXT NOT NULL,
  description TEXT,
  submitter_email TEXT,
  submitter_name TEXT,
  category_slug TEXT,
  status TEXT DEFAULT 'pending', -- 'pending', 'approved', 'rejected'
  admin_notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_category ON blog_posts(category_id);
CREATE INDEX idx_blog_posts_published ON blog_posts(published, published_at);
CREATE INDEX idx_tools_slug ON tools(slug);
CREATE INDEX idx_tools_category ON tools(category_id);
CREATE INDEX idx_tools_featured ON tools(featured);
CREATE INDEX idx_tools_sponsored ON tools(sponsored);
CREATE INDEX idx_analytics_tool ON analytics_events(tool_id, created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE tool_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE sponsors ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE tool_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to blog_categories"
  ON blog_categories FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access to published blog_posts"
  ON blog_posts FOR SELECT
  USING (published = true);

CREATE POLICY "Allow public read access to tool_categories"
  ON tool_categories FOR SELECT
  USING (true);

CREATE POLICY "Allow public read access to tools"
  ON tools FOR SELECT
  USING (true);

CREATE POLICY "Allow public insert to analytics_events"
  ON analytics_events FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow public insert to tool_submissions"
  ON tool_submissions FOR INSERT
  WITH CHECK (true);
