/**
 * Advanced scraper for aiaffiliate.cc using Puppeteer
 * Handles dynamic content loading
 *
 * Usage: npx tsx scripts/scrape-aiaffiliate-puppeteer.ts
 */

import puppeteer from 'puppeteer';
import * as fs from 'fs';
import * as path from 'path';

interface Tool {
  name: string;
  slug: string;
  description: string;
  category: string;
  pricing: string;
  commissionRate: string;
  monthlyPrice: string;
  website_url: string;
  affiliate_url: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function mapCategory(categoryName: string): string {
  const categoryMap: Record<string, string> = {
    'writing': 'writing',
    'content': 'writing',
    'copywriting': 'writing',
    'seo': 'writing',
    'image': 'image',
    'art': 'image',
    'design': 'image',
    'photo': 'image',
    'video': 'video',
    'audio': 'audio',
    'voice': 'audio',
    'music': 'audio',
    'code': 'coding',
    'coding': 'coding',
    'developer': 'coding',
    'programming': 'coding',
    'productivity': 'productivity',
    'automation': 'productivity',
    'chatbot': 'productivity',
    'assistant': 'productivity',
  };

  const normalized = categoryName.toLowerCase();
  for (const [key, value] of Object.entries(categoryMap)) {
    if (normalized.includes(key)) {
      return value;
    }
  }

  return 'productivity';
}

function mapPricing(pricingText: string): 'free' | 'freemium' | 'paid' {
  const normalized = pricingText.toLowerCase();
  if (normalized.includes('free') && !normalized.includes('from')) {
    return 'free';
  }
  if (normalized.includes('freemium') || normalized.includes('free plan')) {
    return 'freemium';
  }
  return 'paid';
}

async function scrapeHomePage(): Promise<Tool[]> {
  console.log('🚀 Launching browser...\n');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  const tools: Tool[] = [];

  try {
    console.log('📄 Loading https://aiaffiliate.cc/en ...\n');
    await page.goto('https://aiaffiliate.cc/en', {
      waitUntil: 'networkidle2',
      timeout: 60000
    });

    // Wait for content to load
    await page.waitForSelector('a[href*="/affiliate-program/"]', { timeout: 10000 });

    // Scroll to load all tools
    console.log('📜 Scrolling to load all tools...\n');
    await autoScroll(page);

    console.log('🔍 Extracting tool data...\n');

    // Extract all tool links
    const toolLinks = await page.$$eval('a[href*="/affiliate-program/"]', (links) => {
      return links
        .map(link => (link as HTMLAnchorElement).href)
        .filter((href, index, self) =>
          href.includes('/en/affiliate-program/') &&
          !href.includes('#') &&
          self.indexOf(href) === index
        );
    });

    console.log(`Found ${toolLinks.length} tool pages to scrape\n`);

    // Scrape each tool page (limit to first 10 for testing, remove limit for all)
    const linksToScrape = toolLinks.slice(0, 136); // Change to toolLinks.length for all

    for (let i = 0; i < linksToScrape.length; i++) {
      const url = linksToScrape[i];
      console.log(`[${i + 1}/${linksToScrape.length}] Scraping ${url.split('/').pop()}...`);

      try {
        const tool = await scrapeToolPage(page, url);
        if (tool) {
          tools.push(tool);
          console.log(`  ✓ ${tool.name} - ${tool.commissionRate} commission`);
        }
      } catch (error) {
        console.log(`  ✗ Error: ${error.message}`);
      }

      // Rate limiting - wait 1 second between requests
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

  } catch (error) {
    console.error('Error during scraping:', error);
  } finally {
    await browser.close();
  }

  return tools;
}

async function scrapeToolPage(page: any, url: string): Promise<Tool | null> {
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

  // Wait for main content
  await page.waitForSelector('h1', { timeout: 10000 });

  const toolData = await page.evaluate(() => {
    const name = document.querySelector('h1')?.textContent?.replace('AI Affiliate Program', '').trim() || '';
    const description = document.querySelector('.prose p')?.textContent?.trim() || '';
    const category = document.querySelector('a[href*="/category/"]')?.textContent?.trim() || 'Productivity';

    // Extract pricing info
    const pricingSection = document.querySelector('.rounded-xl');
    const monthlyPrice = Array.from(pricingSection?.querySelectorAll('.flex') || [])
      .find(el => el.textContent?.includes('Monthly Price'))
      ?.querySelector('span:last-child')?.textContent?.trim() || '';

    const commissionRate = Array.from(pricingSection?.querySelectorAll('.flex') || [])
      .find(el => el.textContent?.includes('Commission Rate'))
      ?.querySelector('span:last-child')?.textContent?.trim() || '';

    const pricing = monthlyPrice || 'Contact for pricing';

    // Get affiliate link
    const affiliateButton = document.querySelector('a[href*="via=aiaffiliate"]') as HTMLAnchorElement;
    const websiteUrl = affiliateButton?.href || '';

    return {
      name,
      description,
      category,
      pricing,
      commissionRate,
      monthlyPrice,
      websiteUrl,
    };
  });

  if (!toolData.name) return null;

  const slug = url.split('/').pop() || slugify(toolData.name);

  return {
    name: toolData.name,
    slug: slug,
    description: toolData.description,
    category: toolData.category,
    pricing: toolData.pricing,
    commissionRate: toolData.commissionRate,
    monthlyPrice: toolData.monthlyPrice,
    website_url: toolData.websiteUrl,
    affiliate_url: toolData.websiteUrl, // Already has ?via=aiaffiliate
  };
}

async function autoScroll(page: any) {
  await page.evaluate(async () => {
    await new Promise<void>((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight - window.innerHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });

  // Wait a bit for any lazy-loaded content
  await new Promise(resolve => setTimeout(resolve, 2000));
}

function generateSQL(tools: Tool[]): string {
  const sqlStatements: string[] = [];

  tools.forEach(tool => {
    const categorySlug = mapCategory(tool.category);
    const pricingType = mapPricing(tool.pricing);

    const sql = `
-- ${tool.name} (${tool.commissionRate} commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  '${tool.name.replace(/'/g, "''")}',
  '${tool.slug}',
  '${tool.description.substring(0, 100).replace(/'/g, "''")}',
  '${tool.description.replace(/'/g, "''")}',
  '${tool.description.replace(/'/g, "''")} Commission: ${tool.commissionRate}. ${tool.pricing}',
  '${tool.website_url.split('?')[0]}',
  '${tool.affiliate_url}',
  (SELECT id FROM tool_categories WHERE slug = '${categorySlug}' LIMIT 1),
  '${pricingType}',
  ${tool.commissionRate.includes('30%') || tool.commissionRate.includes('40%') || tool.commissionRate.includes('50%') ? 'true' : 'false'},
  ARRAY['${tool.category}','${tool.commissionRate}']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = '${tool.slug}'
);
`;
    sqlStatements.push(sql);
  });

  return sqlStatements.join('\n');
}

async function main() {
  console.log('🤖 AI Affiliate Tools Scraper (Puppeteer)\n');
  console.log('='.repeat(50) + '\n');

  const tools = await scrapeHomePage();

  if (tools.length === 0) {
    console.log('\n❌ No tools scraped. Check the website structure.\n');
    return;
  }

  console.log(`\n✅ Successfully scraped ${tools.length} tools!\n`);

  // Generate SQL
  const sql = generateSQL(tools);

  // Save files
  const outputDir = path.join(process.cwd(), 'scripts', 'output');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const sqlFile = path.join(outputDir, 'aiaffiliate-tools.sql');
  fs.writeFileSync(sqlFile, sql);

  const jsonFile = path.join(outputDir, 'aiaffiliate-tools.json');
  fs.writeFileSync(jsonFile, JSON.stringify(tools, null, 2));

  console.log(`📁 Files saved:`);
  console.log(`   SQL: ${sqlFile}`);
  console.log(`   JSON: ${jsonFile}\n`);

  console.log(`📊 Summary by category:`);
  const byCategory: Record<string, number> = {};
  tools.forEach(tool => {
    const cat = mapCategory(tool.category);
    byCategory[cat] = (byCategory[cat] || 0) + 1;
  });

  Object.entries(byCategory).forEach(([cat, count]) => {
    console.log(`   ${cat}: ${count} tools`);
  });

  console.log(`\n📈 Top commissions:`);
  const sorted = [...tools].sort((a, b) => {
    const aRate = parseInt(a.commissionRate) || 0;
    const bRate = parseInt(b.commissionRate) || 0;
    return bRate - aRate;
  }).slice(0, 10);

  sorted.forEach(tool => {
    console.log(`   ${tool.name}: ${tool.commissionRate}`);
  });

  console.log(`\n✅ Done! Import the SQL file into Supabase.\n`);
}

main().catch(console.error);
