import { MetadataRoute } from 'next';
import { createClient } from '@/lib/supabase/server';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://intelligenttools.co';
  const supabase = await createClient();

  // Fetch all tools
  const { data: tools } = await supabase
    .from('tools')
    .select('slug, updated_at')
    .order('updated_at', { ascending: false });

  // Fetch all blog posts
  const { data: blogPosts } = await supabase
    .from('blog_posts')
    .select('slug, updated_at')
    .eq('published', true)
    .order('updated_at', { ascending: false });

  // Fetch all categories
  const { data: categories } = await supabase
    .from('tool_categories')
    .select('slug, created_at');

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/submit`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Tool pages
  const toolPages: MetadataRoute.Sitemap = (tools || []).map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(tool.updated_at),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Blog post pages
  const blogPages: MetadataRoute.Sitemap = (blogPosts || []).map((post) => ({
    url: `${baseUrl}/blog/post/${post.slug}`,
    lastModified: new Date(post.updated_at),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = (categories || []).map((category) => ({
    url: `${baseUrl}/tools?category=${category.slug}`,
    lastModified: new Date(category.created_at),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...toolPages, ...blogPages, ...categoryPages];
}
