// Supabase helper functions for common queries
import { createClient } from '@/lib/supabase/client';
import type { Tool, ToolCategory, BlogPost, BlogCategory } from '@/types/database';

/**
 * Fetch all tools with optional filters
 */
export async function getTools(filters?: {
  category?: string;
  pricing?: string;
  search?: string;
  featured?: boolean;
  limit?: number;
}) {
  const supabase = createClient();
  let query = supabase
    .from('tools')
    .select(`
      *,
      tool_categories (
        id,
        name,
        slug,
        description,
        icon
      )
    `);

  if (filters?.category && filters.category !== 'all') {
    query = query.eq('category_id', filters.category);
  }

  if (filters?.pricing && filters.pricing !== 'all') {
    query = query.eq('pricing_type', filters.pricing);
  }

  if (filters?.search) {
    query = query.or(
      `name.ilike.%${filters.search}%,description.ilike.%${filters.search}%,tagline.ilike.%${filters.search}%`
    );
  }

  if (filters?.featured) {
    query = query.eq('featured', true);
  }

  if (filters?.limit) {
    query = query.limit(filters.limit);
  }

  query = query.order('created_at', { ascending: false });

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching tools:', error);
    return [];
  }

  return data as Tool[];
}

/**
 * Fetch a single tool by slug
 */
export async function getToolBySlug(slug: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('tools')
    .select(`
      *,
      tool_categories (
        id,
        name,
        slug,
        description,
        icon
      )
    `)
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('Error fetching tool:', error);
    return null;
  }

  return data as Tool;
}

/**
 * Fetch a single tool by ID
 */
export async function getToolById(id: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('tools')
    .select(`
      *,
      tool_categories (
        id,
        name,
        slug,
        description,
        icon
      )
    `)
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching tool:', error);
    return null;
  }

  return data as Tool;
}

/**
 * Fetch all tool categories
 */
export async function getToolCategories() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('tool_categories')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  return data as ToolCategory[];
}

/**
 * Fetch tools by category
 */
export async function getToolsByCategory(categoryId: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('tools')
    .select('*')
    .eq('category_id', categoryId)
    .order('upvotes', { ascending: false });

  if (error) {
    console.error('Error fetching tools by category:', error);
    return [];
  }

  return data as Tool[];
}

/**
 * Fetch featured tools
 */
export async function getFeaturedTools(limit: number = 6) {
  return getTools({ featured: true, limit });
}

/**
 * Fetch all blog posts with optional filters
 */
export async function getBlogPosts(filters?: {
  category?: string;
  published?: boolean;
  limit?: number;
}) {
  const supabase = createClient();
  let query = supabase
    .from('blog_posts')
    .select(`
      *,
      blog_categories (
        id,
        name,
        slug,
        description
      )
    `);

  if (filters?.category && filters.category !== 'all') {
    query = query.eq('category_id', filters.category);
  }

  if (filters?.published !== undefined) {
    query = query.eq('published', filters.published);
  }

  if (filters?.limit) {
    query = query.limit(filters.limit);
  }

  query = query.order('published_at', { ascending: false });

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }

  return data as BlogPost[];
}

/**
 * Fetch a single blog post by slug
 */
export async function getBlogPostBySlug(slug: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('blog_posts')
    .select(`
      *,
      blog_categories (
        id,
        name,
        slug,
        description
      )
    `)
    .eq('slug', slug)
    .eq('published', true)
    .single();

  if (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }

  return data as BlogPost;
}

/**
 * Fetch all blog categories
 */
export async function getBlogCategories() {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('blog_categories')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching blog categories:', error);
    return [];
  }

  return data as BlogCategory[];
}

/**
 * Search tools
 */
export async function searchTools(query: string) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('tools')
    .select(`
      *,
      tool_categories (
        id,
        name,
        slug
      )
    `)
    .or(`name.ilike.%${query}%,description.ilike.%${query}%,tagline.ilike.%${query}%`)
    .limit(10);

  if (error) {
    console.error('Error searching tools:', error);
    return [];
  }

  return data as Tool[];
}

/**
 * Get related tools (same category, excluding current tool)
 */
export async function getRelatedTools(toolId: string, categoryId: string, limit: number = 3) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('tools')
    .select('*')
    .eq('category_id', categoryId)
    .neq('id', toolId)
    .order('upvotes', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching related tools:', error);
    return [];
  }

  return data as Tool[];
}

/**
 * Get popular tools (by upvotes)
 */
export async function getPopularTools(limit: number = 10) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('tools')
    .select(`
      *,
      tool_categories (
        id,
        name,
        slug
      )
    `)
    .order('upvotes', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching popular tools:', error);
    return [];
  }

  return data as Tool[];
}

/**
 * Get trending tools (by recent views)
 */
export async function getTrendingTools(limit: number = 10) {
  const supabase = createClient();

  const { data, error } = await supabase
    .from('tools')
    .select(`
      *,
      tool_categories (
        id,
        name,
        slug
      )
    `)
    .order('view_count', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('Error fetching trending tools:', error);
    return [];
  }

  return data as Tool[];
}
