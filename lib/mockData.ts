import { BlogCategory, BlogPost, ToolCategory, Tool } from '@/types/database';

// Blog Categories
export const blogCategories: BlogCategory[] = [
  {
    id: '1',
    name: 'AI Writing Tools',
    slug: 'ai-writing-tools',
    description: 'Reviews and guides for AI-powered writing assistants',
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'AI Image Generation',
    slug: 'ai-image-generation',
    description: 'Explore tools for creating stunning AI-generated images',
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'AI Productivity',
    slug: 'ai-productivity',
    description: 'Boost your productivity with AI-powered tools',
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'AI Development',
    slug: 'ai-development',
    description: 'Tools for developers building with AI',
    created_at: new Date().toISOString(),
  },
];

// Sample Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Best AI Writing Tools in 2025: A Comprehensive Guide',
    slug: 'best-ai-writing-tools-2025',
    excerpt: 'Discover the top AI writing assistants that are transforming content creation. From ChatGPT to Claude, we compare features, pricing, and real-world performance.',
    content: `AI writing tools have revolutionized how we create content. In this comprehensive guide, we'll explore the best options available in 2025.

## ChatGPT: The Pioneer

OpenAI's ChatGPT remains the most popular AI writing assistant. With its GPT-4 model, it can handle everything from blog posts to code generation.

**Pros:**
- Incredibly versatile
- Large knowledge base
- Strong reasoning capabilities

**Cons:**
- Can be expensive at $20/month
- Sometimes verbose
- Requires internet connection

## Claude: The Long-Context Champion

Anthropic's Claude excels at handling long documents and maintaining context throughout conversations.

**Pros:**
- 200K token context window
- Excellent at analysis
- Strong ethical guidelines

**Cons:**
- Limited image generation
- Smaller user base
- Fewer integrations

## Jasper: The Marketing Specialist

Jasper focuses specifically on marketing content with templates and brand voice features.

**Pros:**
- Marketing-specific templates
- Brand voice training
- SEO optimization

**Cons:**
- Expensive ($49+/month)
- Learning curve
- Best for teams

## Conclusion

Each tool has its strengths. ChatGPT for versatility, Claude for long-form analysis, and Jasper for marketing teams.`,
    featured_image: 'blog/ai-writing-tools.jpg',
    category_id: '1',
    published: true,
    published_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    view_count: 1250,
    created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '2',
    title: 'Midjourney vs DALL-E 3: Which AI Image Generator is Right for You?',
    slug: 'midjourney-vs-dalle-3',
    excerpt: 'An in-depth comparison of the two leading AI image generation tools. We test both with the same prompts and compare quality, ease of use, and pricing.',
    content: `The battle for AI image generation supremacy continues between Midjourney and DALL-E 3. Let's break down the differences.

## Image Quality

**Midjourney** produces highly artistic, dramatic images with strong aesthetic appeal. The v6 model excels at:
- Photorealistic portraits
- Artistic compositions
- Consistent characters

**DALL-E 3** offers more literal interpretations with excellent text rendering. It's better at:
- Following complex prompts
- Generating text in images
- Natural integration with ChatGPT

## Ease of Use

Midjourney requires Discord, which can be confusing for beginners. DALL-E 3 is built into ChatGPT Plus, making it incredibly accessible.

## Pricing

- Midjourney: $10-120/month depending on plan
- DALL-E 3: $20/month with ChatGPT Plus

## Verdict

Choose Midjourney for artistic control and stunning visuals. Choose DALL-E 3 for convenience and prompt accuracy.`,
    featured_image: 'blog/midjourney-dalle-comparison.jpg',
    category_id: '2',
    published: true,
    published_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    view_count: 2100,
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '3',
    title: 'How to Automate Your Workflow with AI Tools in 2025',
    slug: 'automate-workflow-ai-tools',
    excerpt: 'Learn how to combine multiple AI tools to create powerful automation workflows that save hours every week.',
    content: `Automation is the key to maximizing productivity with AI tools. Here's how to build powerful workflows.

## The Automation Stack

Start with these core tools:
1. **Zapier/Make** - Connect your apps
2. **ChatGPT API** - Generate content
3. **Supabase** - Store your data
4. **n8n** - Advanced workflow automation

## Example Workflow: Content Creation Pipeline

Here's a workflow that generates and publishes blog content automatically:

1. **Trigger**: New topic added to Airtable
2. **Research**: ChatGPT researches the topic
3. **Outline**: Claude creates detailed outline
4. **Draft**: GPT-4 writes the article
5. **Edit**: Claude reviews and improves
6. **Images**: DALL-E generates featured image
7. **Publish**: Post to WordPress
8. **Social**: Share on Twitter/LinkedIn

## Time Saved

What used to take 3-4 hours now takes 30 minutes of reviewing and editing.

## Getting Started

Start small. Automate one task at a time. Test thoroughly before relying on automation.`,
    featured_image: 'blog/ai-automation-workflow.jpg',
    category_id: '3',
    published: true,
    published_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    view_count: 890,
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: '4',
    title: '10 AI Tools Every Developer Should Know About',
    slug: '10-ai-tools-developers',
    excerpt: 'From code generation to debugging, these AI tools are transforming software development in 2025.',
    content: `AI is changing how developers work. Here are 10 essential tools for modern development.

## 1. GitHub Copilot
The original AI coding assistant. Suggests code as you type with impressive accuracy.

## 2. Cursor
An AI-first code editor built on VSCode. Chat with your codebase and generate features.

## 3. v0.dev
Generate complete UI components from text descriptions. Perfect for frontend work.

## 4. Claude Code
AI-powered CLI for development tasks. Excellent for complex codebases.

## 5. ChatGPT Plus
Still the best for explaining code, debugging, and architectural decisions.

## 6. Phind
Search engine specifically for developers with AI-powered answers.

## 7. Codeium
Free alternative to Copilot with good performance.

## 8. Tabnine
Privacy-focused code completion that runs locally.

## 9. Replit AI
Entire IDE with AI assistance built in. Great for quick prototypes.

## 10. Perplexity
Research tool that cites sources. Perfect for learning new technologies.

## Conclusion

The key is combining these tools effectively. Use Cursor for daily coding, ChatGPT for complex problems, and v0.dev for UI work.`,
    featured_image: 'blog/ai-tools-developers.jpg',
    category_id: '4',
    published: true,
    published_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    view_count: 3200,
    created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    updated_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

// Tool Categories
export const toolCategories: ToolCategory[] = [
  {
    id: 'writing',
    name: 'AI Writing',
    slug: 'ai-writing',
    description: 'Content creation and copywriting tools',
    icon: 'PenTool',
    created_at: new Date().toISOString(),
  },
  {
    id: 'image',
    name: 'Image Generation',
    slug: 'image-generation',
    description: 'Create stunning visuals with AI',
    icon: 'Image',
    created_at: new Date().toISOString(),
  },
  {
    id: 'coding',
    name: 'Code Generation',
    slug: 'code-generation',
    description: 'AI-powered development tools',
    icon: 'Code',
    created_at: new Date().toISOString(),
  },
  {
    id: 'productivity',
    name: 'Productivity',
    slug: 'productivity',
    description: 'Boost your workflow with AI',
    icon: 'Zap',
    created_at: new Date().toISOString(),
  },
  {
    id: 'video',
    name: 'Video Generation',
    slug: 'video-generation',
    description: 'AI-powered video creation',
    icon: 'Video',
    created_at: new Date().toISOString(),
  },
  {
    id: 'audio',
    name: 'Audio & Voice',
    slug: 'audio-voice',
    description: 'Voice synthesis and audio tools',
    icon: 'Mic',
    created_at: new Date().toISOString(),
  },
];

// Sample AI Tools
export const tools: Tool[] = [
  {
    id: '1',
    name: 'ChatGPT',
    slug: 'chatgpt',
    tagline: 'The AI assistant that started it all',
    description: 'OpenAI\'s flagship conversational AI model capable of helping with writing, coding, analysis, and creative tasks.',
    long_description: `ChatGPT is the most widely-used AI assistant in the world, with over 100 million users. Built on GPT-4, it excels at natural conversation, code generation, content creation, and complex problem-solving.

Key Features:
- Advanced reasoning with GPT-4
- Code interpreter for data analysis
- DALL-E 3 integration for images
- Web browsing for current information
- Custom GPTs for specialized tasks

Perfect for: Content creators, developers, students, businesses, and anyone looking to enhance productivity with AI.`,
    website_url: 'https://chat.openai.com',
    affiliate_url: 'https://chat.openai.com?ref=intelligenttools',
    logo_url: 'tools/chatgpt-logo.png',
    screenshot_url: 'tools/chatgpt-screenshot.png',
    category_id: 'writing',
    pricing_type: 'freemium',
    price_from: 0,
    price_to: 20,
    pricing_info: 'Free tier available. Plus: $20/month',
    featured: true,
    sponsored: false,
    upvotes: 2850,
    view_count: 15200,
    click_count: 3800,
    tags: ['writing', 'coding', 'chat', 'popular'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Claude',
    slug: 'claude',
    tagline: 'AI assistant with massive context and strong reasoning',
    description: 'Anthropic\'s Claude offers 200K token context window, making it perfect for analyzing long documents and maintaining coherent long-form conversations.',
    long_description: `Claude by Anthropic is known for its exceptional long-context capabilities and strong ethical guidelines. With a 200K token context window, it can process entire codebases or books in a single conversation.

Key Features:
- 200K token context window
- Excellent at technical writing
- Strong reasoning capabilities
- Constitutional AI for safety
- API access for developers

Perfect for: Developers, researchers, technical writers, and anyone working with large documents or codebases.`,
    website_url: 'https://claude.ai',
    affiliate_url: 'https://claude.ai?ref=intelligenttools',
    logo_url: 'tools/claude-logo.png',
    screenshot_url: 'tools/claude-screenshot.png',
    category_id: 'writing',
    pricing_type: 'freemium',
    price_from: 0,
    price_to: 20,
    pricing_info: 'Free tier available. Pro: $20/month',
    featured: true,
    sponsored: false,
    upvotes: 1920,
    view_count: 8900,
    click_count: 2100,
    tags: ['writing', 'coding', 'analysis', 'long-context'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Midjourney',
    slug: 'midjourney',
    tagline: 'Create stunning AI art and images',
    description: 'The leading AI image generation tool known for its artistic, high-quality outputs. Perfect for creative professionals and artists.',
    long_description: `Midjourney is the gold standard for AI image generation, producing highly artistic and visually stunning images. Version 6 brings photorealistic capabilities and consistent character generation.

Key Features:
- Photorealistic image generation
- Artistic style control
- Consistent characters
- Community gallery
- Commercial usage rights

Perfect for: Artists, designers, marketers, content creators, and anyone needing high-quality visuals.`,
    website_url: 'https://midjourney.com',
    affiliate_url: 'https://midjourney.com?ref=intelligenttools',
    logo_url: 'tools/midjourney-logo.png',
    screenshot_url: 'tools/midjourney-screenshot.png',
    category_id: 'image',
    pricing_type: 'paid',
    price_from: 10,
    price_to: 120,
    pricing_info: 'Basic: $10/mo, Standard: $30/mo, Pro: $60/mo, Mega: $120/mo',
    featured: true,
    sponsored: false,
    upvotes: 2100,
    view_count: 12500,
    click_count: 3200,
    tags: ['image', 'art', 'design', 'popular'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'GitHub Copilot',
    slug: 'github-copilot',
    tagline: 'Your AI pair programmer',
    description: 'AI-powered code completion that suggests entire functions and helps you code faster. Integrated directly into your IDE.',
    long_description: `GitHub Copilot revolutionized coding by providing intelligent code suggestions as you type. Trained on billions of lines of code, it understands context and can generate entire functions.

Key Features:
- Real-time code suggestions
- Multi-language support
- IDE integration
- Context-aware completions
- Chat interface for questions

Perfect for: Developers of all skill levels looking to code faster and learn new patterns.`,
    website_url: 'https://github.com/features/copilot',
    affiliate_url: 'https://github.com/features/copilot?ref=intelligenttools',
    logo_url: 'tools/copilot-logo.png',
    screenshot_url: 'tools/copilot-screenshot.png',
    category_id: 'coding',
    pricing_type: 'paid',
    price_from: 10,
    price_to: 19,
    pricing_info: 'Individual: $10/mo, Business: $19/user/mo',
    featured: true,
    sponsored: false,
    upvotes: 1750,
    view_count: 9800,
    click_count: 2400,
    tags: ['coding', 'development', 'productivity', 'popular'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '5',
    name: 'Notion AI',
    slug: 'notion-ai',
    tagline: 'AI-powered workspace and knowledge management',
    description: 'Built into Notion, this AI assistant helps you write, brainstorm, and organize information faster within your workspace.',
    long_description: `Notion AI integrates seamlessly into your Notion workspace, providing writing assistance, summarization, and organization tools without leaving your notes.

Key Features:
- Writing assistance
- Content summarization
- Brainstorming tools
- Translation
- Native Notion integration

Perfect for: Notion users, teams, students, and anyone managing knowledge bases.`,
    website_url: 'https://notion.so/product/ai',
    affiliate_url: 'https://notion.so/product/ai?ref=intelligenttools',
    logo_url: 'tools/notion-logo.png',
    screenshot_url: 'tools/notion-screenshot.png',
    category_id: 'productivity',
    pricing_type: 'paid',
    price_from: 10,
    price_to: 10,
    pricing_info: '$10/month as add-on to Notion subscription',
    featured: false,
    sponsored: false,
    upvotes: 980,
    view_count: 5600,
    click_count: 1200,
    tags: ['productivity', 'writing', 'organization'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '6',
    name: 'Runway',
    slug: 'runway',
    tagline: 'AI-powered video generation and editing',
    description: 'Create and edit videos using AI. Generate video from text, extend footage, and apply creative effects with machine learning.',
    long_description: `Runway is pioneering AI video generation with tools like Gen-2 for text-to-video and advanced editing features that save hours of manual work.

Key Features:
- Text-to-video generation
- Video editing with AI
- Motion tracking
- Green screen removal
- Style transfer

Perfect for: Video creators, filmmakers, marketers, and content producers.`,
    website_url: 'https://runwayml.com',
    affiliate_url: 'https://runwayml.com?ref=intelligenttools',
    logo_url: 'tools/runway-logo.png',
    screenshot_url: 'tools/runway-screenshot.png',
    category_id: 'video',
    pricing_type: 'freemium',
    price_from: 0,
    price_to: 95,
    pricing_info: 'Free tier available. Standard: $12/mo, Pro: $28/mo, Unlimited: $95/mo',
    featured: true,
    sponsored: false,
    upvotes: 1450,
    view_count: 7800,
    click_count: 1900,
    tags: ['video', 'editing', 'generation', 'creative'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '7',
    name: 'ElevenLabs',
    slug: 'elevenlabs',
    tagline: 'Realistic AI voice generation',
    description: 'Generate incredibly realistic voices in multiple languages. Perfect for audiobooks, podcasts, and voiceovers.',
    long_description: `ElevenLabs offers the most realistic AI voice synthesis available, with emotion control and voice cloning capabilities.

Key Features:
- Ultra-realistic voices
- Voice cloning
- Multi-language support
- Emotion and tone control
- API access

Perfect for: Content creators, podcasters, audiobook producers, and game developers.`,
    website_url: 'https://elevenlabs.io',
    affiliate_url: 'https://elevenlabs.io?ref=intelligenttools',
    logo_url: 'tools/elevenlabs-logo.png',
    screenshot_url: 'tools/elevenlabs-screenshot.png',
    category_id: 'audio',
    pricing_type: 'freemium',
    price_from: 0,
    price_to: 99,
    pricing_info: 'Free tier available. Starter: $5/mo, Creator: $22/mo, Pro: $99/mo',
    featured: false,
    sponsored: false,
    upvotes: 1280,
    view_count: 6400,
    click_count: 1600,
    tags: ['audio', 'voice', 'text-to-speech'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: '8',
    name: 'Jasper',
    slug: 'jasper',
    tagline: 'AI copilot for marketing teams',
    description: 'Marketing-focused AI writing tool with templates, brand voice, and SEO optimization. Built for content marketing at scale.',
    long_description: `Jasper is designed specifically for marketing teams, offering templates, brand voice training, and integrations with marketing tools.

Key Features:
- Marketing templates
- Brand voice training
- SEO optimization
- Team collaboration
- Content calendar

Perfect for: Marketing teams, agencies, and businesses creating content at scale.`,
    website_url: 'https://jasper.ai',
    affiliate_url: 'https://jasper.ai?ref=intelligenttools',
    logo_url: 'tools/jasper-logo.png',
    screenshot_url: 'tools/jasper-screenshot.png',
    category_id: 'writing',
    pricing_type: 'paid',
    price_from: 49,
    price_to: 125,
    pricing_info: 'Creator: $49/mo, Teams: $125/mo, Business: Custom',
    featured: false,
    sponsored: false,
    upvotes: 890,
    view_count: 4200,
    click_count: 980,
    tags: ['marketing', 'writing', 'seo', 'business'],
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];
