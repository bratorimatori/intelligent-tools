export interface Tool {
  id: string;
  name: string;
  slug: string;
  tagline?: string;
  description?: string;
  long_description?: string;
  website_url: string;
  affiliate_url?: string;
  logo_url?: string;
  screenshot_url?: string;
  category_id?: string;
  pricing_type?: 'free' | 'freemium' | 'paid' | 'open_source';
  price_from?: number;
  price_to?: number;
  pricing_info?: string;
  featured: boolean;
  sponsored: boolean;
  upvotes: number;
  view_count: number;
  click_count: number;
  tags?: string[];
  metadata?: any;
  created_at: string;
  updated_at: string;
}

export interface ToolCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  created_at: string;
}

export interface Sponsor {
  id: string;
  tool_id: string;
  tier: 'featured' | 'gold' | 'silver';
  amount: number;
  start_date: string;
  end_date: string;
  active: boolean;
  created_at: string;
}

export interface AnalyticsEvent {
  id: string;
  event_type: 'view' | 'click' | 'submit';
  tool_id?: string;
  metadata?: any;
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  created_at: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  created_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  featured_image?: string;
  category_id?: string;
  published: boolean;
  published_at?: string;
  view_count: number;
  created_at: string;
  updated_at: string;
}
