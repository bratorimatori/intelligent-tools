
-- Jasper AI
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Jasper AI',
  'jasper-ai',
  'AI content writing platform for marketers',
  'AI content writing platform for marketers',
  'AI content writing platform for marketers',
  'https://jasper.ai',
  'https://aiaffiliate.cc/your-jasper-link',
  (SELECT id FROM tool_categories WHERE slug = 'writing' LIMIT 1),
  'paid',
  false,
  ARRAY['Writing']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'jasper-ai'
);


-- Copy.ai
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Copy.ai',
  'copyai',
  'AI-powered copywriting tool',
  'AI-powered copywriting tool',
  'AI-powered copywriting tool',
  'https://copy.ai',
  'https://aiaffiliate.cc/your-copyai-link',
  (SELECT id FROM tool_categories WHERE slug = 'writing' LIMIT 1),
  'freemium',
  false,
  ARRAY['Writing']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'copyai'
);
