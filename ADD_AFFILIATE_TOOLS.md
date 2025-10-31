# Adding Tools with Affiliate Links

## Overview
You can add tools from aiaffiliate.cc with your affiliate links. The database already has an `affiliate_url` field ready.

## Method 1: SQL Insert (Recommended for Bulk)

Run this SQL in your Supabase SQL Editor:

```sql
-- Example: Adding a tool with affiliate link
INSERT INTO tools (
  name,
  slug,
  tagline,
  description,
  long_description,
  website_url,
  affiliate_url,
  category_id,
  pricing_type,
  featured,
  sponsored
) VALUES (
  'Tool Name',
  'tool-slug',
  'Short tagline about the tool',
  'Brief description of the tool',
  'Longer detailed description with features and benefits',
  'https://originaltool.com',
  'https://aiaffiliate.cc/your-affiliate-link',
  'category-uuid-here',
  'freemium', -- or 'free', 'paid'
  false,
  false
);
```

## Method 2: Using the Admin Interface

1. Go to `http://localhost:3000/admin/tools/new`
2. Fill in the form with tool details
3. Add your affiliate link in the "Affiliate URL" field
4. Submit

## Method 3: Bulk Import Script

Create a CSV or JSON file with your tools and affiliate links, then use a script to import them.

### Example JSON structure:

```json
[
  {
    "name": "ChatGPT",
    "slug": "chatgpt",
    "tagline": "AI-powered conversational assistant",
    "description": "ChatGPT helps with writing, coding, analysis and more",
    "website_url": "https://chat.openai.com",
    "affiliate_url": "https://aiaffiliate.cc/your-chatgpt-link",
    "category_slug": "writing",
    "pricing_type": "freemium"
  }
]
```

## Getting Category IDs

Run this SQL to see available categories:

```sql
SELECT id, name, slug FROM tool_categories ORDER BY name;
```

## Tips for Affiliate Links

1. **Test links first** - Make sure your affiliate links work before adding them
2. **Track conversions** - The database tracks `click_count` automatically when users click affiliate links
3. **Disclosure** - Consider adding a note that some links are affiliate links (good practice)
4. **Update existing tools** - You can add affiliate links to existing tools:

```sql
UPDATE tools
SET affiliate_url = 'https://aiaffiliate.cc/your-link'
WHERE slug = 'tool-slug';
```

## How Users Will See Affiliate Links

When users click on a tool:
- If `affiliate_url` exists, they see a "Visit with Affiliate Link" button
- If only `website_url` exists, they see a regular "Visit Website" button
- Both can coexist - you can show both options

## Revenue Tracking

Your database already tracks:
- `click_count` - Number of times affiliate link was clicked
- `view_count` - Number of times tool page was viewed
- `upvotes` - User engagement

This helps you identify which tools drive the most revenue.

## Example: Adding Top 10 AI Tools from aiaffiliate.cc

```sql
-- Get category IDs first
SELECT id, name FROM tool_categories;

-- Then insert tools with your affiliate links
-- Replace category IDs and affiliate URLs with your actual values

INSERT INTO tools (name, slug, tagline, description, website_url, affiliate_url, category_id, pricing_type, featured)
VALUES
  ('Jasper AI', 'jasper-ai', 'AI Content Writing Platform', 'Create high-quality content with AI', 'https://jasper.ai', 'YOUR_AFFILIATE_LINK', 'writing-category-id', 'paid', true),
  ('Copy.ai', 'copy-ai', 'AI-Powered Copywriting', 'Generate marketing copy instantly', 'https://copy.ai', 'YOUR_AFFILIATE_LINK', 'writing-category-id', 'freemium', true);
```

## Next Steps

1. Browse aiaffiliate.cc and note the tools you want to add
2. Get your affiliate links for each tool
3. Decide on categories (or create new ones if needed)
4. Add tools using one of the methods above
5. Test that affiliate links work correctly
6. Monitor click_count to track performance
