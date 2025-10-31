# Affiliate Tools Scraper Guide

## Quick Start

1. Visit https://aiaffiliate.cc/en
2. Collect tool information (name, URL, affiliate link)
3. Edit `scripts/scrape-affiliate-tools.ts` - add tools to `manualTools` array
4. Run: `npx tsx scripts/scrape-affiliate-tools.ts`
5. Import the generated SQL into Supabase

## What It Does

- Scrapes/collects tools from aiaffiliate.cc
- Generates SQL to import into your database
- Automatically creates slugs, maps categories, detects pricing
- Prevents duplicates

## Output

- `scripts/output/import-affiliate-tools.sql` - SQL to run in Supabase
- `scripts/output/affiliate-tools.json` - JSON backup

## Legal Notes

⚠️ Check aiaffiliate.cc Terms of Service before scraping
⚠️ Respect rate limits and robots.txt
⚠️ Consider manual collection for best results

## Example

```typescript
const manualTools = [
  {
    name: 'Jasper AI',
    url: 'https://jasper.ai',
    affiliateLink: 'https://aiaffiliate.cc/en/programs/3/jasper-ai?ref=YOUR_ID',
    description: 'AI content writing platform',
    category: 'Writing',
    pricing: 'Paid - Starting at $49/month'
  }
];
```
