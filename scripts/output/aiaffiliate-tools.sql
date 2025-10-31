
-- Originality (25% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Originality',
  'originality',
  'Accurate AI Checker, Plagiarism Checker and Fact Checker Lets You Publish with Integrity',
  'Accurate AI Checker, Plagiarism Checker and Fact Checker Lets You Publish with Integrity',
  'Accurate AI Checker, Plagiarism Checker and Fact Checker Lets You Publish with Integrity Commission: 25%. $12.95/mo',
  'https://originality.ai/ai-checker',
  'https://originality.ai/ai-checker?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'writing' LIMIT 1),
  'paid',
  false,
  ARRAY['Content Verification','25%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'originality'
);


-- Eztrackr ($5 commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Eztrackr',
  'eztrackr',
  'Track your job applications effortlessly, gain valuable insights, all in one place',
  'Track your job applications effortlessly, gain valuable insights, all in one place',
  'Track your job applications effortlessly, gain valuable insights, all in one place Commission: $5. Contact for pricing',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Career Tools','$5']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'eztrackr'
);


-- Testimonial (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Testimonial',
  'testimonial',
  'Get testimonials from your customers with ease
Collecting testimonials is hard, we get it! So we bui',
  'Get testimonials from your customers with ease
Collecting testimonials is hard, we get it! So we built Testimonial. In minutes, you can collect text and video testimonials from your customers with no need for a developer or website hosting.',
  'Get testimonials from your customers with ease
Collecting testimonials is hard, we get it! So we built Testimonial. In minutes, you can collect text and video testimonials from your customers with no need for a developer or website hosting. Commission: 30%. $21/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Marketing & Sales','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'testimonial'
);


-- Meetgeek (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Meetgeek',
  'meetgeek',
  'Your Personalized AI Meeting Automation platform
Maximize the value of your customer calls|
Automati',
  'Your Personalized AI Meeting Automation platform
Maximize the value of your customer calls|
Automatically video record, transcribe, summarize, and
share granular insights from every meeting to any tool.',
  'Your Personalized AI Meeting Automation platform
Maximize the value of your customer calls|
Automatically video record, transcribe, summarize, and
share granular insights from every meeting to any tool. Commission: 30%. $15/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Career Tools','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'meetgeek'
);


-- Candy (40% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Candy',
  'candy',
  'Create your own ai girlfriend and start chatting',
  'Create your own ai girlfriend and start chatting',
  'Create your own ai girlfriend and start chatting Commission: 40%. $5.99/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Media Production','40%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'candy'
);


-- Ailawyer (15% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Ailawyer',
  'ailawyer',
  'AI Lawyer: your personal legal AI assistant',
  'AI Lawyer: your personal legal AI assistant',
  'AI Lawyer: your personal legal AI assistant Commission: 15%. Contact for pricing',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Professional Services','15%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'ailawyer'
);


-- Hunter (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Hunter',
  'hunter',
  'all-in-one email outreach platform. Find and connect with the people that matter to your business.',
  'all-in-one email outreach platform. Find and connect with the people that matter to your business.',
  'all-in-one email outreach platform. Find and connect with the people that matter to your business. Commission: 30%. $34/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Marketing & Sales','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'hunter'
);


-- Ahelp (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Ahelp',
  'ahelp',
  'Get AHelp for your
Writing, Homework and Research',
  'Get AHelp for your
Writing, Homework and Research',
  'Get AHelp for your
Writing, Homework and Research Commission: 30%. $9.95/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'writing' LIMIT 1),
  'paid',
  true,
  ARRAY['Content Creation','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'ahelp'
);


-- Synthesia (25% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Synthesia',
  'synthesia',
  'Turn text to video, in minutes.',
  'Turn text to video, in minutes.',
  'Turn text to video, in minutes. Commission: 25%. $18/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Media Production','25%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'synthesia'
);


-- Aiapply (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Aiapply',
  'aiapply',
  'Automate your
job search with AI',
  'Automate your
job search with AI',
  'Automate your
job search with AI Commission: 30%. $29/mo',
  'https://www.aiapply.co/',
  'https://www.aiapply.co/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Career Tools','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'aiapply'
);


-- Finalroundai (25% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Finalroundai',
  'finalroundai',
  'Unlock Your Interview Superpowers with AI,
Your AI-Powered Interview Copilot',
  'Unlock Your Interview Superpowers with AI,
Your AI-Powered Interview Copilot',
  'Unlock Your Interview Superpowers with AI,
Your AI-Powered Interview Copilot Commission: 25%. $96/mo',
  'https://www.finalroundai.com/',
  'https://www.finalroundai.com/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Career Tools','25%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'finalroundai'
);


-- Swooped (20% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Swooped',
  'swooped',
  'LAND YOUR DREAM JOB
Top jobs, AI resume and cover letter optimization, and one-click applications. S',
  'LAND YOUR DREAM JOB
Top jobs, AI resume and cover letter optimization, and one-click applications. Swooped’s job search tracking software finds your next role 3x faster',
  'LAND YOUR DREAM JOB
Top jobs, AI resume and cover letter optimization, and one-click applications. Swooped’s job search tracking software finds your next role 3x faster Commission: 20%. $39/mo',
  'https://swooped.co/',
  'https://swooped.co/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Career Tools','20%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'swooped'
);


-- Pollo (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Pollo',
  'pollo',
  'Visualize Your Creativity with an
Unbounded AI Video Generator',
  'Visualize Your Creativity with an
Unbounded AI Video Generator',
  'Visualize Your Creativity with an
Unbounded AI Video Generator Commission: 30%. $15/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Media Production','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'pollo'
);


-- Resumefromspace (40% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Resumefromspace',
  'resumefromspace',
  'Land your dream job with Tailored AI-Powered Resume',
  'Land your dream job with Tailored AI-Powered Resume',
  'Land your dream job with Tailored AI-Powered Resume Commission: 40%. $4.99/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Document Processing','40%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'resumefromspace'
);


-- Faceless (20% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Faceless',
  'faceless',
  'Use AI to automatically create and post custom videos daily',
  'Use AI to automatically create and post custom videos daily',
  'Use AI to automatically create and post custom videos daily Commission: 20%. $15/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Media Production','20%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'faceless'
);


-- Seobotai (20% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Seobotai',
  'seobotai',
  'SEObot takes 100% of SEO work out of your way so that you
can focus on building your product.',
  'SEObot takes 100% of SEO work out of your way so that you
can focus on building your product.',
  'SEObot takes 100% of SEO work out of your way so that you
can focus on building your product. Commission: 20%. $19/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'writing' LIMIT 1),
  'paid',
  false,
  ARRAY['Content Creation','20%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'seobotai'
);


-- Undetectable (25% - 30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Undetectable',
  'undetectable',
  'Advanced AI Detector and Humanizer: We Make AI Human',
  'Advanced AI Detector and Humanizer: We Make AI Human',
  'Advanced AI Detector and Humanizer: We Make AI Human Commission: 25% - 30%. $5/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'writing' LIMIT 1),
  'paid',
  true,
  ARRAY['Content Verification','25% - 30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'undetectable'
);


-- Mailerlite (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Mailerlite',
  'mailerlite',
  'Digital marketing tools to grow your audience faster and drive revenue smarter.',
  'Digital marketing tools to grow your audience faster and drive revenue smarter.',
  'Digital marketing tools to grow your audience faster and drive revenue smarter. Commission: 30%. $9/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Marketing & Sales','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'mailerlite'
);


-- Customgpt (15% - 20% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Customgpt',
  'customgpt',
  'Build custom AI agents with the #1 platform for accuracy—no code needed, full data security.',
  'Build custom AI agents with the #1 platform for accuracy—no code needed, full data security.',
  'Build custom AI agents with the #1 platform for accuracy—no code needed, full data security. Commission: 15% - 20%. $89/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'writing' LIMIT 1),
  'paid',
  false,
  ARRAY['Content Creation','15% - 20%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'customgpt'
);


-- Jenni (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Jenni',
  'jenni',
  'Meet Your Intelligent Research Assistant
The AI-powered workspace to help you read, write, and organ',
  'Meet Your Intelligent Research Assistant
The AI-powered workspace to help you read, write, and organize research with ease.',
  'Meet Your Intelligent Research Assistant
The AI-powered workspace to help you read, write, and organize research with ease. Commission: 30%. $12/mo',
  'https://jenni.ai/',
  'https://jenni.ai/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'writing' LIMIT 1),
  'paid',
  true,
  ARRAY['Content Creation','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'jenni'
);


-- Askyourpdf (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Askyourpdf',
  'askyourpdf',
  'Turn Complex PDFs into Easy-to-Understand Summaries in Seconds',
  'Turn Complex PDFs into Easy-to-Understand Summaries in Seconds',
  'Turn Complex PDFs into Easy-to-Understand Summaries in Seconds Commission: 30%. $14.99/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Document Processing','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'askyourpdf'
);


-- Kits (25% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Kits',
  'kits',
  'Clone voices. Sing like anyone. Play any instrument.',
  'Clone voices. Sing like anyone. Play any instrument.',
  'Clone voices. Sing like anyone. Play any instrument. Commission: 25%. $9.59/mo',
  'https://www.app.kits.ai/',
  'https://www.app.kits.ai/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Media Production','25%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'kits'
);


-- Browse (20% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Browse',
  'browse',
  'The easiest way to extract and monitor data from any website.',
  'The easiest way to extract and monitor data from any website.',
  'The easiest way to extract and monitor data from any website. Commission: 20%. $19/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Professional Services','20%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'browse'
);


-- Cal (20% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Cal',
  'cal',
  'The better way to schedule your meetings. A fully customizable scheduling software for individuals, ',
  'The better way to schedule your meetings. A fully customizable scheduling software for individuals, businesses taking calls and developers building scheduling platforms where users meet users.',
  'The better way to schedule your meetings. A fully customizable scheduling software for individuals, businesses taking calls and developers building scheduling platforms where users meet users. Commission: 20%. $15/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Career Tools','20%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'cal'
);


-- Arcads (25% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Arcads',
  'arcads',
  'Create winning ads with AI Actors, Generate 100s of winning videos from text.',
  'Create winning ads with AI Actors, Generate 100s of winning videos from text.',
  'Create winning ads with AI Actors, Generate 100s of winning videos from text. Commission: 25%. $110/mo',
  'https://arcads.ai/',
  'https://arcads.ai/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Media Production','25%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'arcads'
);


-- Lovo (20% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Lovo',
  'lovo',
  'Hyper realistic AI voice generator that captivates your audience',
  'Hyper realistic AI voice generator that captivates your audience',
  'Hyper realistic AI voice generator that captivates your audience Commission: 20%. $29/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Media Production','20%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'lovo'
);


-- Salesamurai (25% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Salesamurai',
  'salesamurai',
  'Your All-In-One Tool For Massive Etsy SEO Growth',
  'Your All-In-One Tool For Massive Etsy SEO Growth',
  'Your All-In-One Tool For Massive Etsy SEO Growth Commission: 25%. $9.99/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Marketing & Sales','25%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'salesamurai'
);


-- CallRail ($50 commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'CallRail',
  'callrail',
  'Call tracking + AI that turns calls into cost savings',
  'Call tracking + AI that turns calls into cost savings',
  'Call tracking + AI that turns calls into cost savings Commission: $50. $45/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Marketing & Sales','$50']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'callrail'
);


-- Gamma (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Gamma',
  'gamma',
  'Create AI Powered PowerPoint Presentations in Seconds',
  'Create AI Powered PowerPoint Presentations in Seconds',
  'Create AI Powered PowerPoint Presentations in Seconds Commission: 30%. $8/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Document Processing','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'gamma'
);


-- Winston (40% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Winston',
  'winston',
  'The most trusted AI detector',
  'The most trusted AI detector',
  'The most trusted AI detector Commission: 40%. $12/mo',
  'https://gowinston.ai/',
  'https://gowinston.ai/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'writing' LIMIT 1),
  'paid',
  true,
  ARRAY['Content Verification','40%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'winston'
);


-- Termly (35% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Termly',
  'termly',
  'All-In-One Compliance Solution for Small Businesses',
  'All-In-One Compliance Solution for Small Businesses',
  'All-In-One Compliance Solution for Small Businesses Commission: 35%. $10/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Professional Services','35%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'termly'
);


-- Aragon (20% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Aragon',
  'aragon',
  'The Leading AI Headshot Generator for Professionals. Turn your selfies into studio-quality headshots',
  'The Leading AI Headshot Generator for Professionals. Turn your selfies into studio-quality headshots in minutes.',
  'The Leading AI Headshot Generator for Professionals. Turn your selfies into studio-quality headshots in minutes. Commission: 20%. $35/mo',
  'https://www.aragon.ai/',
  'https://www.aragon.ai/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Media Production','20%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'aragon'
);


-- RenderNet ( commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'RenderNet',
  'rendernet',
  'Bring stories alive with AI characters. Unlock the power of AI to create stunning images and videos ',
  'Bring stories alive with AI characters. Unlock the power of AI to create stunning images and videos starring your own custom-designed virtual humans',
  'Bring stories alive with AI characters. Unlock the power of AI to create stunning images and videos starring your own custom-designed virtual humans Commission: . Contact for pricing',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Media Production','']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'rendernet'
);


-- Taja (50% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Taja',
  'taja',
  'Turn videos into 27 pieces of content to post across all socials in one click',
  'Turn videos into 27 pieces of content to post across all socials in one click',
  'Turn videos into 27 pieces of content to post across all socials in one click Commission: 50%. $49.99/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'writing' LIMIT 1),
  'paid',
  true,
  ARRAY['Content Creation','50%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'taja'
);


-- Adcreative (30% - 40% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Adcreative',
  'adcreative',
  'Generate ad banners, texts, photoshoots, and videos that outperform those of your competitors.',
  'Generate ad banners, texts, photoshoots, and videos that outperform those of your competitors.',
  'Generate ad banners, texts, photoshoots, and videos that outperform those of your competitors. Commission: 30% - 40%. $19/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Marketing & Sales','30% - 40%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'adcreative'
);


-- Creatify (25% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Creatify',
  'creatify',
  'Grow Your Business with AI-powered Video Ads, Create & test marketing videos at scale to maximize RO',
  'Grow Your Business with AI-powered Video Ads, Create & test marketing videos at scale to maximize ROI.',
  'Grow Your Business with AI-powered Video Ads, Create & test marketing videos at scale to maximize ROI. Commission: 25%. $33/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Marketing & Sales','25%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'creatify'
);


-- Elai (25% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Elai',
  'elai',
  'AI Video Generation Powerhouse for Corporate Learning.',
  'AI Video Generation Powerhouse for Corporate Learning.',
  'AI Video Generation Powerhouse for Corporate Learning. Commission: 25%. $23/mo',
  'https://elai.io/',
  'https://elai.io/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Media Production','25%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'elai'
);


-- Topview (25% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Topview',
  'topview',
  'AI Video Creation That Drives Business Success
AI learns trends to create viral videos in one-click',
  'AI Video Creation That Drives Business Success
AI learns trends to create viral videos in one-click',
  'AI Video Creation That Drives Business Success
AI learns trends to create viral videos in one-click Commission: 25%. $11/mo',
  'https://www.topview.ai/',
  'https://www.topview.ai/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Media Production','25%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'topview'
);


-- Searchapi (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Searchapi',
  'searchapi',
  'Google Search API Real-time SERP API for easy SERP scraping',
  'Google Search API Real-time SERP API for easy SERP scraping',
  'Google Search API Real-time SERP API for easy SERP scraping Commission: 30%. $40/mo',
  'https://www.searchapi.io/',
  'https://www.searchapi.io/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Web Development','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'searchapi'
);


-- Apob (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Apob',
  'apob',
  'Create your AI Influencer Supercharge your AI image and video content creation with APOB AI Influenc',
  'Create your AI Influencer Supercharge your AI image and video content creation with APOB AI Influencer Generator',
  'Create your AI Influencer Supercharge your AI image and video content creation with APOB AI Influencer Generator Commission: 30%. $6/mo',
  'https://app.apob.ai/',
  'https://app.apob.ai/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Media Production','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'apob'
);


-- Relevanceai (15% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Relevanceai',
  'relevanceai',
  'The leading AI Workforce platform that delivers human-quality work, From AI tools to AI agents to mu',
  'The leading AI Workforce platform that delivers human-quality work, From AI tools to AI agents to multi-agent teams, anyone can build and manage an entire AI workforce in one powerful visual platform.',
  'The leading AI Workforce platform that delivers human-quality work, From AI tools to AI agents to multi-agent teams, anyone can build and manage an entire AI workforce in one powerful visual platform. Commission: 15%. $19/mo',
  'https://relevanceai.com/',
  'https://relevanceai.com/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Professional Services','15%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'relevanceai'
);


-- Crayo (20% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Crayo',
  'crayo',
  'Generate viral-ready clips in Seconds, Your all-in-one tool for creating AI voiceovers, engaging sub',
  'Generate viral-ready clips in Seconds, Your all-in-one tool for creating AI voiceovers, engaging subtitles optimized gameplay, and more.',
  'Generate viral-ready clips in Seconds, Your all-in-one tool for creating AI voiceovers, engaging subtitles optimized gameplay, and more. Commission: 20%. $13/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Media Production','20%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'crayo'
);


-- Luna (20% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Luna',
  'luna',
  'All-in-one cold outreach platform that does its job
Luna.ai makes finding and attracting new custome',
  'All-in-one cold outreach platform that does its job
Luna.ai makes finding and attracting new customers magically simple.',
  'All-in-one cold outreach platform that does its job
Luna.ai makes finding and attracting new customers magically simple. Commission: 20%. $100/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Marketing & Sales','20%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'luna'
);


-- Project Not Found ( commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Project Not Found',
  'photo-ai',
  '',
  '',
  ' Commission: . Contact for pricing',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Productivity','']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'photo-ai'
);


-- Aiktp (25% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Aiktp',
  'aiktp',
  'AI Content Generator
AI-powered tool that generates SEO Content of 2,000-2,500 words. With AIKTP, yo',
  'AI Content Generator
AI-powered tool that generates SEO Content of 2,000-2,500 words. With AIKTP, you get high-quality content quickly and easily by simply providing keywords or an outline, generating a full article in one minute',
  'AI Content Generator
AI-powered tool that generates SEO Content of 2,000-2,500 words. With AIKTP, you get high-quality content quickly and easily by simply providing keywords or an outline, generating a full article in one minute Commission: 25%. $9/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'writing' LIMIT 1),
  'paid',
  false,
  ARRAY['Content Creation','25%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'aiktp'
);


-- Lovable (20% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Lovable',
  'lovable',
  'Idea to app in seconds.
Lovable is your superhuman full stack engineer.',
  'Idea to app in seconds.
Lovable is your superhuman full stack engineer.',
  'Idea to app in seconds.
Lovable is your superhuman full stack engineer. Commission: 20%. $20/mo',
  'https://lovable.dev/#via=aiaffiliate',
  'https://lovable.dev/#via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Web Development','20%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'lovable'
);


-- Flat (20% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Flat',
  'flat',
  'Write music online, together.
Flat is a collaborative music notation platform for beginner composers',
  'Write music online, together.
Flat is a collaborative music notation platform for beginner composers and professionals alike.',
  'Write music online, together.
Flat is a collaborative music notation platform for beginner composers and professionals alike. Commission: 20%. $9.99/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Media Production','20%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'flat'
);


-- ChatUp (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'ChatUp',
  'chatup',
  'Face Swap, AI Image, Create AI Girlfriend',
  'Face Swap, AI Image, Create AI Girlfriend',
  'Face Swap, AI Image, Create AI Girlfriend Commission: 30%. $14.99/mo',
  'https://aichattings.com/',
  'https://aichattings.com/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Communication','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'chatup'
);


-- Shipfast (30% - 50% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Shipfast',
  'shipfast',
  'Ship your startup
in days,not weeks
The NextJS boilerplate with all you need to build your SaaS, AI ',
  'Ship your startup
in days,not weeks
The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app and make your first $ online fast.',
  'Ship your startup
in days,not weeks
The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app and make your first $ online fast. Commission: 30% - 50%. $199/mo',
  'https://shipfa.st/',
  'https://shipfa.st/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Web Development','30% - 50%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'shipfast'
);


-- Project Not Found ( commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Project Not Found',
  'fiverr-logo-maker',
  '',
  '',
  ' Commission: . Contact for pricing',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Productivity','']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'fiverr-logo-maker'
);


-- Projectionlab (20% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Projectionlab',
  'projectionlab',
  'Build Financial Plans You Love. Simulate your financial future and chart a course toward your best l',
  'Build Financial Plans You Love. Simulate your financial future and chart a course toward your best life.',
  'Build Financial Plans You Love. Simulate your financial future and chart a course toward your best life. Commission: 20%. $14/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Professional Services','20%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'projectionlab'
);


-- Opus (25% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Opus',
  'opus',
  '#1 AI VIDEO CLIPPING TOOL
1 long video, 10 viral clips. Create 10x faster.
OpusClip is a generative ',
  '#1 AI VIDEO CLIPPING TOOL
1 long video, 10 viral clips. Create 10x faster.
OpusClip is a generative AI video tool that repurposes long videos into shorts in one click.',
  '#1 AI VIDEO CLIPPING TOOL
1 long video, 10 viral clips. Create 10x faster.
OpusClip is a generative AI video tool that repurposes long videos into shorts in one click. Commission: 25%. $15/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Media Production','25%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'opus'
);


-- Upgrow (35% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Upgrow',
  'upgrow',
  'Get Real Logo of Instagram Fans automatically using AI.
No bots, no fake followers, no passwords.
Or',
  'Get Real Logo of Instagram Fans automatically using AI.
No bots, no fake followers, no passwords.
Organic growth by real-human IG experts & patented AI.
Guaranteed growth – or your money back.',
  'Get Real Logo of Instagram Fans automatically using AI.
No bots, no fake followers, no passwords.
Organic growth by real-human IG experts & patented AI.
Guaranteed growth – or your money back. Commission: 35%. $59/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Productivity','35%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'upgrow'
);


-- Seowriting (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Seowriting',
  'seowriting',
  'AI Writing Tool for Generating 1000+ Articles in Hours
AI writing tool for 1-click SEO-optimized art',
  'AI Writing Tool for Generating 1000+ Articles in Hours
AI writing tool for 1-click SEO-optimized articles, blog posts & affiliate content. Available in 48 languages, auto-posted to WordPress with AI Images.',
  'AI Writing Tool for Generating 1000+ Articles in Hours
AI writing tool for 1-click SEO-optimized articles, blog posts & affiliate content. Available in 48 languages, auto-posted to WordPress with AI Images. Commission: 30%. $14/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'writing' LIMIT 1),
  'paid',
  true,
  ARRAY['Content Creation','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'seowriting'
);


-- Betterpic (20% - 35% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Betterpic',
  'betterpic',
  'Professional AI Headshot Generator in 4K Resolution',
  'Professional AI Headshot Generator in 4K Resolution',
  'Professional AI Headshot Generator in 4K Resolution Commission: 20% - 35%. $35/mo',
  'https://www.betterpic.io/',
  'https://www.betterpic.io/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Document Processing','20% - 35%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'betterpic'
);


-- Gptzero (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Gptzero',
  'gptzero',
  'More than an AI detector.
Preserve what’s human.',
  'More than an AI detector.
Preserve what’s human.',
  'More than an AI detector.
Preserve what’s human. Commission: 30%. $8.33/mo',
  'https://gptzero.me/',
  'https://gptzero.me/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'writing' LIMIT 1),
  'paid',
  true,
  ARRAY['Content Verification','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'gptzero'
);


-- Aicut (50% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Aicut',
  'aicut',
  'Automate & Grow Your
Faceless Channel
🤖',
  'Automate & Grow Your
Faceless Channel
🤖',
  'Automate & Grow Your
Faceless Channel
🤖 Commission: 50%. $12.5/mo',
  'https://www.aicut.pro/',
  'https://www.aicut.pro/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Media Production','50%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'aicut'
);


-- Spicychat (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Spicychat',
  'spicychat',
  'Welcome to your ultimate destination for personalized, uncensored roleplaying',
  'Welcome to your ultimate destination for personalized, uncensored roleplaying',
  'Welcome to your ultimate destination for personalized, uncensored roleplaying Commission: 30%. Contact for pricing',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Productivity','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'spicychat'
);


-- Piktochart (40% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Piktochart',
  'piktochart',
  'Meet the next generation of infographics
Transform complex ideas into captivating visuals that infor',
  'Meet the next generation of infographics
Transform complex ideas into captivating visuals that inform and engage your audience. With Piktochart AI, you can create stunning infographics, reports, and presentations in seconds, perfectly aligned with your brand. No design experience required.',
  'Meet the next generation of infographics
Transform complex ideas into captivating visuals that inform and engage your audience. With Piktochart AI, you can create stunning infographics, reports, and presentations in seconds, perfectly aligned with your brand. No design experience required. Commission: 40%. $14/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Professional Services','40%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'piktochart'
);


-- Generateads (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Generateads',
  'generateads',
  'Scroll-Stopping Ads in 3 clicks.
Generate scroll-stopping static ads in minutes with our AI Ads Gene',
  'Scroll-Stopping Ads in 3 clicks.
Generate scroll-stopping static ads in minutes with our AI Ads Generator. Make them from scratch or clone winning ads from the Inspiration Library.',
  'Scroll-Stopping Ads in 3 clicks.
Generate scroll-stopping static ads in minutes with our AI Ads Generator. Make them from scratch or clone winning ads from the Inspiration Library. Commission: 30%. $34/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Marketing & Sales','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'generateads'
);


-- Panoee (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Panoee',
  'panoee',
  'Just the best Virtual Tour Software for all your needs 🚀
Panoee is the free virtual tour software f',
  'Just the best Virtual Tour Software for all your needs 🚀
Panoee is the free virtual tour software for creating immersive 3D 360 tours for real estate, hospitality, tourism, architecture, education, museums, and art galleries.',
  'Just the best Virtual Tour Software for all your needs 🚀
Panoee is the free virtual tour software for creating immersive 3D 360 tours for real estate, hospitality, tourism, architecture, education, museums, and art galleries. Commission: 30%. $7/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Professional Services','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'panoee'
);


-- Zebracat (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Zebracat',
  'zebracat',
  'Craft Viral Videos in Seconds with AI
Turn boring text or audio into viral videos for TikTok, Instag',
  'Craft Viral Videos in Seconds with AI
Turn boring text or audio into viral videos for TikTok, Instagram, and YouTube with just a few clicks. Bring your story to life with unique AI visuals, high quality AI avatars and voices. 
No editing skills needed.',
  'Craft Viral Videos in Seconds with AI
Turn boring text or audio into viral videos for TikTok, Instagram, and YouTube with just a few clicks. Bring your story to life with unique AI visuals, high quality AI avatars and voices. 
No editing skills needed. Commission: 30%. $19.5/mo',
  'http://studio.zebracat.ai/signup/',
  'http://studio.zebracat.ai/signup/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Media Production','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'zebracat'
);


-- Mymap (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Mymap',
  'mymap',
  'Turn ideas into diagrams using AI
Transform ideas into ready-to-use flowcharts, mind maps, matrices,',
  'Turn ideas into diagrams using AI
Transform ideas into ready-to-use flowcharts, mind maps, matrices, and presentations simply by chatting with AI — no design skills needed.',
  'Turn ideas into diagrams using AI
Transform ideas into ready-to-use flowcharts, mind maps, matrices, and presentations simply by chatting with AI — no design skills needed. Commission: 30%. $12/mo',
  'https://aiaffiliate.cc/en/affiliate-program/www.mymap.ai/',
  'https://aiaffiliate.cc/en/affiliate-program/www.mymap.ai/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Professional Services','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'mymap'
);


-- Capsolver (10% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Capsolver',
  'capsolver',
  'Unleashing Your RPA Potential
Discover seamless automatic captcha solving with our AI-powered Auto W',
  'Unleashing Your RPA Potential
Discover seamless automatic captcha solving with our AI-powered Auto Web Unblock technology!',
  'Unleashing Your RPA Potential
Discover seamless automatic captcha solving with our AI-powered Auto Web Unblock technology! Commission: 10%. $0.8/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Productivity','10%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'capsolver'
);


-- Sourcely (20% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Sourcely',
  'sourcely',
  'Find Sources in Seconds. Save Your Sleep.
Paste your text, essay or paper to find, summarize, and ad',
  'Find Sources in Seconds. Save Your Sleep.
Paste your text, essay or paper to find, summarize, and add credible academic sources. (That’s something Google Scholar can’t do!)',
  'Find Sources in Seconds. Save Your Sleep.
Paste your text, essay or paper to find, summarize, and add credible academic sources. (That’s something Google Scholar can’t do!) Commission: 20%. $14/mo',
  'https://www.sourcely.net/',
  'https://www.sourcely.net/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Professional Services','20%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'sourcely'
);


-- Pixelbin (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Pixelbin',
  'pixelbin',
  'Unleash the Full Potential of Your Digital Assets
Real-time image transformations, optimisations and',
  'Unleash the Full Potential of Your Digital Assets
Real-time image transformations, optimisations and digital asset management to deliver one-of-a-kind visual experiences and better engagement on the web',
  'Unleash the Full Potential of Your Digital Assets
Real-time image transformations, optimisations and digital asset management to deliver one-of-a-kind visual experiences and better engagement on the web Commission: 30%. $19/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Media Production','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'pixelbin'
);


-- Webflow (50% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Webflow',
  'webflow',
  'More than a website builder
Your site should do more than look good
As the first-ever website experi',
  'More than a website builder
Your site should do more than look good
As the first-ever website experience platform, Webflow lets marketers, designers, and developers come together to build, manage, and optimize web experiences that get results.',
  'More than a website builder
Your site should do more than look good
As the first-ever website experience platform, Webflow lets marketers, designers, and developers come together to build, manage, and optimize web experiences that get results. Commission: 50%. $14/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Web Development','50%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'webflow'
);


-- Outrank (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Outrank',
  'outrank',
  'Grow Organic Traffic on Auto-Pilot
Get traffic and outrank competitors with automatic SEO-optimized ',
  'Grow Organic Traffic on Auto-Pilot
Get traffic and outrank competitors with automatic SEO-optimized content generation while you sleep.',
  'Grow Organic Traffic on Auto-Pilot
Get traffic and outrank competitors with automatic SEO-optimized content generation while you sleep. Commission: 30%. $99/mo',
  'https://outrank.so/',
  'https://outrank.so/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'writing' LIMIT 1),
  'paid',
  true,
  ARRAY['Content Creation','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'outrank'
);


-- Builderkit (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Builderkit',
  'builderkit',
  'Build and Ship your AI SaaS super fast 🚀
Highly modular NextJS AI Boilerplate that allows you to sh',
  'Build and Ship your AI SaaS super fast 🚀
Highly modular NextJS AI Boilerplate that allows you to ship an AI App super fast
Save 40+ hours of development effort with our Pre-Built Apps & Robust Deployable Codebase',
  'Build and Ship your AI SaaS super fast 🚀
Highly modular NextJS AI Boilerplate that allows you to ship an AI App super fast
Save 40+ hours of development effort with our Pre-Built Apps & Robust Deployable Codebase Commission: 30%. $99/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Web Development','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'builderkit'
);


-- Hypeauditor (20% - 50% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Hypeauditor',
  'hypeauditor',
  'Find Authentic Influencers. Any Industry. Any Size. Influencer marketing platform for brands and age',
  'Find Authentic Influencers. Any Industry. Any Size. Influencer marketing platform for brands and agencies',
  'Find Authentic Influencers. Any Industry. Any Size. Influencer marketing platform for brands and agencies Commission: 20% - 50%. Contact for pricing',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Marketing & Sales','20% - 50%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'hypeauditor'
);


-- Machined (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Machined',
  'machined',
  'Boost your organic traffic
with Researched + Interlinked AI Articles
SEO-Optimized Content Clusters.',
  'Boost your organic traffic
with Researched + Interlinked AI Articles
SEO-Optimized Content Clusters. Published Directly to Your Website. No Sweat.',
  'Boost your organic traffic
with Researched + Interlinked AI Articles
SEO-Optimized Content Clusters. Published Directly to Your Website. No Sweat. Commission: 30%. $49/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Productivity','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'machined'
);


-- Microns (50% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Microns',
  'microns',
  'Marketplace of Micro Startups',
  'Marketplace of Micro Startups',
  'Marketplace of Micro Startups Commission: 50%. $40/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Marketing & Sales','50%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'microns'
);


-- Audionotes (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Audionotes',
  'audionotes',
  'Your cluttered Thoughts into clear Text Notes using AI
Capture and turn your voice recordings, text ',
  'Your cluttered Thoughts into clear Text Notes using AI
Capture and turn your voice recordings, text notes, images, audio files, and YouTube videos into perfect notes for meetings, journals, lectures, emails, and more!',
  'Your cluttered Thoughts into clear Text Notes using AI
Capture and turn your voice recordings, text notes, images, audio files, and YouTube videos into perfect notes for meetings, journals, lectures, emails, and more! Commission: 30%. $9.99/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Professional Services','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'audionotes'
);


-- Zeemo (25% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Zeemo',
  'zeemo',
  'Caption video with magical AI
Add captions and translation automatically in multiple languages with ',
  'Caption video with magical AI
Add captions and translation automatically in multiple languages with one click',
  'Caption video with magical AI
Add captions and translation automatically in multiple languages with one click Commission: 25%. $6.67/mo',
  'https://zeemo.ai/',
  'https://zeemo.ai/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Media Production','25%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'zeemo'
);


-- Linguix (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Linguix',
  'linguix',
  'Free AI Grammar Check
Use our free grammar check online checker to instantly eliminate writing error',
  'Free AI Grammar Check
Use our free grammar check online checker to instantly eliminate writing errors and make your content better.',
  'Free AI Grammar Check
Use our free grammar check online checker to instantly eliminate writing errors and make your content better. Commission: 30%. $14.99/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'writing' LIMIT 1),
  'paid',
  true,
  ARRAY['Content Creation','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'linguix'
);


-- Aiseo (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Aiseo',
  'aiseo',
  'The #1 AI Content Generator for Undetectable SEO-Optimized Writing',
  'The #1 AI Content Generator for Undetectable SEO-Optimized Writing',
  'The #1 AI Content Generator for Undetectable SEO-Optimized Writing Commission: 30%. $15/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'writing' LIMIT 1),
  'paid',
  true,
  ARRAY['Content Creation','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'aiseo'
);


-- Coda (20% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Coda',
  'coda',
  'Your all-in-one collaborative workspace.',
  'Your all-in-one collaborative workspace.',
  'Your all-in-one collaborative workspace. Commission: 20%. $10/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Professional Services','20%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'coda'
);


-- Chatpdf (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Chatpdf',
  'chatpdf',
  'Chat with any PDF
Join millions of students, researchers and professionals to instantly
answer quest',
  'Chat with any PDF
Join millions of students, researchers and professionals to instantly
answer questions and understand research with AI',
  'Chat with any PDF
Join millions of students, researchers and professionals to instantly
answer questions and understand research with AI Commission: 30%. $19.99/mo',
  'https://www.chatpdf.com/',
  'https://www.chatpdf.com/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Document Processing','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'chatpdf'
);


-- Kittl (20% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Kittl',
  'kittl',
  'DESIGN. DELIVER. COLLABORATE.
Kittl makes it simple to create professional designs — just the right ',
  'DESIGN. DELIVER. COLLABORATE.
Kittl makes it simple to create professional designs — just the right tools, no unnecessary extras.',
  'DESIGN. DELIVER. COLLABORATE.
Kittl makes it simple to create professional designs — just the right tools, no unnecessary extras. Commission: 20%. $10/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Professional Services','20%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'kittl'
);


-- Hitpaw (60% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Hitpaw',
  'hitpaw',
  'Ultimate Photo Solution Meets All Your Needs',
  'Ultimate Photo Solution Meets All Your Needs',
  'Ultimate Photo Solution Meets All Your Needs Commission: 60%. $24.99/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Media Production','60%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'hitpaw'
);


-- Tactiq (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Tactiq',
  'tactiq',
  'Focus on the meeting, let AI handle the notes.
Get live, in-meeting transcriptions and insightful AI',
  'Focus on the meeting, let AI handle the notes.
Get live, in-meeting transcriptions and insightful AI summaries - ensuring you always take the right actions and get more out of your meetings.',
  'Focus on the meeting, let AI handle the notes.
Get live, in-meeting transcriptions and insightful AI summaries - ensuring you always take the right actions and get more out of your meetings. Commission: 30%. $8/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Document Processing','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'tactiq'
);


-- Getimg (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Getimg',
  'getimg',
  'All-In-One Creative toolkit for creating images with AI
Easy to use AI Tools for generating images f',
  'All-In-One Creative toolkit for creating images with AI
Easy to use AI Tools for generating images from text, expanding photos, creating videos or training custom AI models. Type words get content — it’s that simple.',
  'All-In-One Creative toolkit for creating images with AI
Easy to use AI Tools for generating images from text, expanding photos, creating videos or training custom AI models. Type words get content — it’s that simple. Commission: 30%. $9/mo',
  'https://getimg.ai/',
  'https://getimg.ai/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Media Production','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'getimg'
);


-- Basedlabs (40% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Basedlabs',
  'basedlabs',
  'The Most Based
AI Models in One Place',
  'The Most Based
AI Models in One Place',
  'The Most Based
AI Models in One Place Commission: 40%. $29/mo',
  'https://www.basedlabs.ai/',
  'https://www.basedlabs.ai/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Media Production','40%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'basedlabs'
);


-- Datacamp (15% - 20% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Datacamp',
  'datacamp',
  'Learn data and AI skills
Unlock the power of data and AI by learning Python, ChatGPT, SQL, Power BI,',
  'Learn data and AI skills
Unlock the power of data and AI by learning Python, ChatGPT, SQL, Power BI, and earn industry-leading Certifications.',
  'Learn data and AI skills
Unlock the power of data and AI by learning Python, ChatGPT, SQL, Power BI, and earn industry-leading Certifications. Commission: 15% - 20%. $14/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Productivity','15% - 20%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'datacamp'
);


-- Mailshake (60% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Mailshake',
  'mailshake',
  'Manage Email and LinkedIn Campaigns in One Place – No More Switching Tools',
  'Manage Email and LinkedIn Campaigns in One Place – No More Switching Tools',
  'Manage Email and LinkedIn Campaigns in One Place – No More Switching Tools Commission: 60%. $29/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Marketing & Sales','60%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'mailshake'
);


-- Chatbase (20% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Chatbase',
  'chatbase',
  'Custom ChatGPT for your business
Build a custom GPT, embed it on your website and let it handle cust',
  'Custom ChatGPT for your business
Build a custom GPT, embed it on your website and let it handle customer support, lead generation, engage with your users, and more.',
  'Custom ChatGPT for your business
Build a custom GPT, embed it on your website and let it handle customer support, lead generation, engage with your users, and more. Commission: 20%. $19/mo',
  'https://www.chatbase.co/',
  'https://www.chatbase.co/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'writing' LIMIT 1),
  'paid',
  false,
  ARRAY['Content Creation','20%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'chatbase'
);


-- Live3d (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Live3d',
  'live3d',
  'Live3D - #1 VTuber Software Suite
Live3D is dedicated to building an amazing creativity platform for',
  'Live3D - #1 VTuber Software Suite
Live3D is dedicated to building an amazing creativity platform for VTubers',
  'Live3D - #1 VTuber Software Suite
Live3D is dedicated to building an amazing creativity platform for VTubers Commission: 30%. $3/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Professional Services','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'live3d'
);


-- Directify (50% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Directify',
  'directify',
  'Create a Directory Website with No-Code
Add listings, custom pages, categories without any technical',
  'Create a Directory Website with No-Code
Add listings, custom pages, categories without any technical skills. Get up and running in minutes, with everything you need to create a directory website.',
  'Create a Directory Website with No-Code
Add listings, custom pages, categories without any technical skills. Get up and running in minutes, with everything you need to create a directory website. Commission: 50%. $24.5/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Web Development','50%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'directify'
);


-- Instatus (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Instatus',
  'instatus',
  'A giant leap for status pages
Get a beautiful status page in 10 seconds, without paying thousands of',
  'A giant leap for status pages
Get a beautiful status page in 10 seconds, without paying thousands of dollars!',
  'A giant leap for status pages
Get a beautiful status page in 10 seconds, without paying thousands of dollars! Commission: 30%. $20/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Web Development','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'instatus'
);


-- Descript (15% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Descript',
  'descript',
  'If you can edit text, you can make viral clips.
Descript is the AI-powered, fully featured, end-to-e',
  'If you can edit text, you can make viral clips.
Descript is the AI-powered, fully featured, end-to-end video editor that you already know how to use.',
  'If you can edit text, you can make viral clips.
Descript is the AI-powered, fully featured, end-to-end video editor that you already know how to use. Commission: 15%. $12/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Media Production','15%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'descript'
);


-- Dzine (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Dzine',
  'dzine',
  'Stylar is now Dzine.
The Most Controllable AI Image & Design Tool
Boost creators’ ideas to professio',
  'Stylar is now Dzine.
The Most Controllable AI Image & Design Tool
Boost creators’ ideas to professional visuals with generative AI.
Help designers cut down their repetitive work time by 10x.',
  'Stylar is now Dzine.
The Most Controllable AI Image & Design Tool
Boost creators’ ideas to professional visuals with generative AI.
Help designers cut down their repetitive work time by 10x. Commission: 30%. $8.99/mo',
  'https://www.dzine.ai/',
  'https://www.dzine.ai/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Media Production','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'dzine'
);


-- Fxreplay (20% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Fxreplay',
  'fxreplay',
  'Backtest Your Strategy.For Free.
Supercharge your trading with FX Replay - Experience the ultimate w',
  'Backtest Your Strategy.For Free.
Supercharge your trading with FX Replay - Experience the ultimate web-based backtesting tool using Tradingview!',
  'Backtest Your Strategy.For Free.
Supercharge your trading with FX Replay - Experience the ultimate web-based backtesting tool using Tradingview! Commission: 20%. $17.99/mo',
  'https://fxreplay.com/',
  'https://fxreplay.com/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Professional Services','20%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'fxreplay'
);


-- Quillbot (10% - 20% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Quillbot',
  'quillbot',
  'We use AI to strengthen writing and boost productivity—without sacrificing authenticity.',
  'We use AI to strengthen writing and boost productivity—without sacrificing authenticity.',
  'We use AI to strengthen writing and boost productivity—without sacrificing authenticity. Commission: 10% - 20%. $8.33/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'writing' LIMIT 1),
  'paid',
  false,
  ARRAY['Content Creation','10% - 20%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'quillbot'
);


-- Remotive ($25 commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Remotive',
  'remotive',
  'Find your dream remote job without the hassle',
  'Find your dream remote job without the hassle',
  'Find your dream remote job without the hassle Commission: $25. $79/mo',
  'https://remotive.com/accelerator',
  'https://remotive.com/accelerator?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Career Tools','$25']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'remotive'
);


-- Removebg (15% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Removebg',
  'removebg',
  'Remove Image Background
100% Automatically and Free',
  'Remove Image Background
100% Automatically and Free',
  'Remove Image Background
100% Automatically and Free Commission: 15%. $9/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Document Processing','15%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'removebg'
);


-- Unriddle (25% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Unriddle',
  'unriddle',
  'Quickly find info in research papers, simplify complex topics, write with AI and keep everything org',
  'Quickly find info in research papers, simplify complex topics, write with AI and keep everything organized.',
  'Quickly find info in research papers, simplify complex topics, write with AI and keep everything organized. Commission: 25%. $20/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  false,
  ARRAY['Career Tools','25%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'unriddle'
);


-- Speakai (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Speakai',
  'speakai',
  'Transcribe, Translate, Analyze & Share',
  'Transcribe, Translate, Analyze & Share',
  'Transcribe, Translate, Analyze & Share Commission: 30%. $15/mo',
  'https://speakai.co/',
  'https://speakai.co/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Document Processing','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'speakai'
);


-- Fireflies (30% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Fireflies',
  'fireflies',
  'Automate your meeting notes
Fireflies.ai helps your team transcribe, summarize, search, and analyze ',
  'Automate your meeting notes
Fireflies.ai helps your team transcribe, summarize, search, and analyze voice conversations.',
  'Automate your meeting notes
Fireflies.ai helps your team transcribe, summarize, search, and analyze voice conversations. Commission: 30%. $10/mo',
  '',
  '',
  (SELECT id FROM tool_categories WHERE slug = 'productivity' LIMIT 1),
  'paid',
  true,
  ARRAY['Career Tools','30%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'fireflies'
);


-- Typefully (20% commission)
INSERT INTO tools (
  name, slug, tagline, description, long_description,
  website_url, affiliate_url, category_id, pricing_type, featured, tags
)
SELECT
  'Typefully',
  'typefully',
  'Write better content
Grow your audience faster',
  'Write better content
Grow your audience faster',
  'Write better content
Grow your audience faster Commission: 20%. $29/mo',
  'https://typefully.com/',
  'https://typefully.com/?via=aiaffiliate',
  (SELECT id FROM tool_categories WHERE slug = 'writing' LIMIT 1),
  'paid',
  false,
  ARRAY['Content Creation','20%']::text[]
WHERE NOT EXISTS (
  SELECT 1 FROM tools WHERE slug = 'typefully'
);
