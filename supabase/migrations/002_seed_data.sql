-- Seed Data for IntelligentTools.co
-- Run this after running 001_initial_schema.sql

-- Insert Tool Categories
INSERT INTO tool_categories (name, slug, description, icon) VALUES
  ('Writing', 'writing', 'AI-powered writing assistants and content generators', 'PenTool'),
  ('Image Generation', 'image', 'Create stunning visuals with AI image generators', 'Image'),
  ('Code Generation', 'coding', 'AI coding assistants and development tools', 'Code'),
  ('Productivity', 'productivity', 'Boost your workflow with AI productivity tools', 'Zap'),
  ('Video', 'video', 'AI video creation and editing tools', 'Video'),
  ('Audio', 'audio', 'Voice synthesis and audio generation tools', 'Mic');

-- Insert Sample AI Tools
INSERT INTO tools (name, slug, tagline, description, long_description, website_url, category_id, pricing_type, featured, upvotes, view_count) VALUES
  (
    'ChatGPT',
    'chatgpt',
    'Conversational AI that understands and responds',
    'ChatGPT is an advanced AI language model that can help with writing, coding, analysis, and more.',
    'ChatGPT is developed by OpenAI and represents a significant advancement in conversational AI. It can assist with a wide range of tasks including writing, coding, data analysis, learning, and creative work. The model is trained on diverse internet text and can engage in natural, contextual conversations.',
    'https://chat.openai.com',
    (SELECT id FROM tool_categories WHERE slug = 'writing'),
    'freemium',
    true,
    1250,
    15420
  ),
  (
    'Midjourney',
    'midjourney',
    'AI art generator that creates stunning visuals',
    'Midjourney is an AI-powered image generation tool that creates unique artwork from text descriptions.',
    'Midjourney is a research lab and AI program that generates images from textual descriptions. It has gained popularity for its ability to create artistic, dreamlike images with impressive quality and style. The tool is accessed through Discord and offers various subscription tiers for different usage levels.',
    'https://www.midjourney.com',
    (SELECT id FROM tool_categories WHERE slug = 'image'),
    'paid',
    true,
    980,
    12300
  ),
  (
    'GitHub Copilot',
    'github-copilot',
    'Your AI pair programmer',
    'GitHub Copilot suggests code and entire functions in real-time as you code.',
    'GitHub Copilot is an AI-powered code completion tool developed by GitHub and OpenAI. It analyzes the context in your code editor and provides suggestions for whole lines or entire functions. Trained on billions of lines of public code, it supports dozens of programming languages and integrates directly into popular IDEs.',
    'https://github.com/features/copilot',
    (SELECT id FROM tool_categories WHERE slug = 'coding'),
    'paid',
    true,
    875,
    10500
  ),
  (
    'Notion AI',
    'notion-ai',
    'AI-powered workspace and note-taking',
    'Notion AI helps you write, brainstorm, and organize your thoughts with AI assistance.',
    'Notion AI integrates artificial intelligence directly into your Notion workspace. It can help you write better, think bigger, and augment your creativity. Features include automatic summarization, writing assistance, translation, and more - all within your familiar Notion environment.',
    'https://www.notion.so/product/ai',
    (SELECT id FROM tool_categories WHERE slug = 'productivity'),
    'freemium',
    true,
    720,
    8900
  ),
  (
    'DALL-E 3',
    'dall-e-3',
    'Create realistic images from text descriptions',
    'DALL-E 3 by OpenAI generates highly detailed images from natural language prompts.',
    'DALL-E 3 is the latest iteration of OpenAI''s text-to-image system. It can create realistic images and art from natural language descriptions with improved accuracy and detail over previous versions. The model understands nuance and detail, allowing you to easily translate your ideas into accurate images.',
    'https://openai.com/dall-e-3',
    (SELECT id FROM tool_categories WHERE slug = 'image'),
    'freemium',
    true,
    650,
    7800
  ),
  (
    'Runway',
    'runway',
    'AI-powered video editing and generation',
    'Runway offers AI tools for video editing, generation, and creative exploration.',
    'Runway is a comprehensive AI toolkit for creators, offering video generation, editing, and manipulation capabilities. It includes features like text-to-video, image-to-video, motion tracking, green screen removal, and more. Runway is designed for creative professionals and makes advanced AI technology accessible to video creators.',
    'https://runwayml.com',
    (SELECT id FROM tool_categories WHERE slug = 'video'),
    'freemium',
    false,
    420,
    5200
  ),
  (
    'ElevenLabs',
    'elevenlabs',
    'AI voice generator with natural speech',
    'ElevenLabs creates realistic voice overs from text using advanced AI technology.',
    'ElevenLabs is a voice AI research company that develops natural-sounding speech synthesis and voice cloning technology. Their platform allows you to generate speech in multiple languages with various voices, or clone your own voice. It''s widely used for audiobooks, content creation, gaming, and accessibility applications.',
    'https://elevenlabs.io',
    (SELECT id FROM tool_categories WHERE slug = 'audio'),
    'freemium',
    false,
    380,
    4600
  ),
  (
    'Jasper',
    'jasper',
    'AI content platform for businesses',
    'Jasper helps teams create content faster with AI-powered writing assistance.',
    'Jasper (formerly Jarvis) is an AI content platform designed for businesses and marketing teams. It can generate blog posts, social media content, ad copy, emails, and more. With brand voice customization and team collaboration features, Jasper is built for professional content creation at scale.',
    'https://www.jasper.ai',
    (SELECT id FROM tool_categories WHERE slug = 'writing'),
    'paid',
    false,
    310,
    3800
  );

-- Insert Blog Categories
INSERT INTO blog_categories (name, slug, description) VALUES
  ('Reviews', 'reviews', 'In-depth reviews of AI tools and platforms'),
  ('Guides', 'guides', 'How-to guides and tutorials for AI tools'),
  ('News', 'news', 'Latest AI industry news and updates'),
  ('Comparisons', 'comparisons', 'Side-by-side comparisons of AI tools');

-- Insert Sample Blog Posts
INSERT INTO blog_posts (title, slug, excerpt, content, category_id, published, published_at, view_count) VALUES
  (
    'ChatGPT vs Claude: Which AI Assistant is Better in 2025?',
    'chatgpt-vs-claude-2025',
    'A comprehensive comparison of the two leading AI assistants, examining their strengths, weaknesses, and ideal use cases.',
    '# ChatGPT vs Claude: Which AI Assistant is Better in 2025?

In the rapidly evolving landscape of AI assistants, ChatGPT and Claude have emerged as the two frontrunners. Both offer impressive capabilities, but they excel in different areas. Let''s dive deep into what makes each unique.

## Overview

**ChatGPT** by OpenAI has been the household name since its launch, continually improving with each iteration. The latest GPT-4 model offers multimodal capabilities and extensive plugin support.

**Claude** by Anthropic focuses on being helpful, harmless, and honest. It excels at longer conversations and maintains context exceptionally well.

## Key Differences

### Context Window
Claude offers a significantly larger context window, allowing for longer conversations and document analysis without losing track of earlier information.

### Accuracy
Both models are highly accurate, but they excel in different domains. ChatGPT tends to be better at creative tasks, while Claude shows superior performance in analytical reasoning.

### Integration
ChatGPT has a more mature ecosystem with plugins, API access, and integrations. Claude is catching up but currently offers fewer third-party integrations.

## Which Should You Choose?

The choice between ChatGPT and Claude depends on your specific needs:

- **Choose ChatGPT if:** You need plugin integrations, want multimodal capabilities, or require extensive API access.
- **Choose Claude if:** You work with long documents, need superior context retention, or prioritize safety and accuracy.

## Conclusion

Both AI assistants are excellent choices in 2025. Many power users actually subscribe to both, using each for its strengths. As the AI landscape continues to evolve, competition between these platforms only benefits users with better features and capabilities.',
    (SELECT id FROM blog_categories WHERE slug = 'comparisons'),
    true,
    NOW() - INTERVAL '2 days',
    1842
  ),
  (
    'Getting Started with Midjourney: A Complete Guide',
    'getting-started-midjourney-guide',
    'Learn how to create stunning AI-generated artwork with Midjourney, from basic prompts to advanced techniques.',
    '# Getting Started with Midjourney: A Complete Guide

Midjourney has revolutionized digital art creation, making it possible for anyone to generate stunning visuals. This guide will walk you through everything you need to know.

## What is Midjourney?

Midjourney is an AI-powered image generation tool that creates unique artwork based on text descriptions (prompts). It operates through Discord, making it accessible yet powerful.

## Setting Up

1. Join the Midjourney Discord server
2. Choose a subscription plan (Basic, Standard, or Pro)
3. Navigate to a newcomer room
4. Start creating!

## Writing Effective Prompts

The key to great Midjourney images is writing effective prompts. Here are some tips:

### Be Specific
Instead of "a cat," try "a fluffy orange tabby cat sitting on a windowsill at sunset, photorealistic"

### Use Style Modifiers
Add artistic styles to your prompts: "in the style of Van Gogh" or "digital art" or "cinematic lighting"

### Aspect Ratios
Control your image dimensions with --ar 16:9 or --ar 1:1

## Advanced Techniques

### Image Weight
Use --iw to control how much the AI should reference an uploaded image

### Chaos Parameter
Add --chaos 0-100 to control variety in your generations

### Quality Settings
Adjust rendering time with --quality or --q

## Common Mistakes to Avoid

1. Being too vague in prompts
2. Not iterating on successful images
3. Ignoring the community showcase for inspiration
4. Forgetting to save your favorite generations

## Conclusion

Midjourney is an incredibly powerful tool that democratizes art creation. With practice and experimentation, you''ll be creating professional-quality images in no time.',
    (SELECT id FROM blog_categories WHERE slug = 'guides'),
    true,
    NOW() - INTERVAL '5 days',
    2156
  ),
  (
    'Top 10 AI Tools for Developers in 2025',
    'top-ai-tools-developers-2025',
    'Discover the best AI-powered development tools that are transforming how developers write, test, and deploy code.',
    '# Top 10 AI Tools for Developers in 2025

The developer toolkit has been transformed by AI. Here are the essential AI tools every developer should know about in 2025.

## 1. GitHub Copilot

The original AI pair programmer continues to dominate. With support for dozens of languages and deep IDE integration, it''s become indispensable for many developers.

**Best for:** Code completion, function generation, boilerplate code

## 2. Cursor

An AI-first code editor that goes beyond autocomplete. Cursor understands your entire codebase and can make multi-file edits.

**Best for:** Large refactoring, codebase understanding

## 3. Tabnine

A privacy-focused alternative to Copilot that can run locally. Great for developers working on sensitive projects.

**Best for:** Enterprises, privacy-conscious teams

## 4. ChatGPT/Claude for Debugging

Large language models excel at understanding error messages and suggesting fixes.

**Best for:** Debugging, learning new technologies

## 5. Phind

A developer-focused search engine that provides AI-generated answers with code examples.

**Best for:** Research, learning, troubleshooting

## 6. Codeium

Free AI coding assistant with features comparable to paid alternatives.

**Best for:** Individual developers, students

## 7. Amazon CodeWhisperer

AWS''s answer to Copilot, with excellent support for AWS services.

**Best for:** AWS development, cloud applications

## 8. Replit Ghostwriter

Built into Replit, perfect for rapid prototyping and learning.

**Best for:** Quick projects, education, collaboration

## 9. Sourcegraph Cody

AI assistant that understands your entire codebase, including private code.

**Best for:** Enterprise codebases, code search

## 10. Mintlify

Automatically generates documentation from your code.

**Best for:** Documentation, maintaining codebases

## Conclusion

These AI tools are not replacing developers—they''re augmenting our capabilities and letting us focus on higher-level problems. Experiment with different tools to find what works best for your workflow.',
    (SELECT id FROM blog_categories WHERE slug = 'reviews'),
    true,
    NOW() - INTERVAL '1 week',
    3421
  ),
  (
    'The Future of AI Video Generation: What to Expect in 2025',
    'future-ai-video-generation-2025',
    'Exploring the latest developments in AI video generation and what they mean for content creators and businesses.',
    '# The Future of AI Video Generation: What to Expect in 2025

AI video generation has evolved from a novelty to a practical tool. Here''s what''s happening in 2025 and what to expect next.

## Current State of AI Video

Tools like Runway, Pika, and Stable Video Diffusion have made it possible to generate short video clips from text prompts or images. While impressive, current limitations include:

- Short duration (typically 4-8 seconds)
- Inconsistent character/object persistence
- Occasional physics violations
- High computational requirements

## Major Developments in 2025

### Longer Generations
The latest models can generate up to 30 seconds of coherent video, with some experimental systems reaching 2 minutes.

### Better Consistency
Character and object persistence has dramatically improved, making it possible to create short narratives.

### Style Control
Fine-grained control over artistic style, camera movement, and lighting is now standard.

## Industry Impact

### Content Creation
Social media creators are using AI video for B-roll, effects, and quick content generation.

### Advertising
Agencies are prototyping commercials faster than ever, though final production still requires human oversight.

### Film and TV
Pre-visualization and concept art have been revolutionized, but full production use is still limited.

## Ethical Considerations

As these tools become more powerful, questions arise:

- Deepfake concerns and misinformation
- Copyright and training data
- Job displacement in creative industries
- Authentication and provenance

## What''s Next

Looking ahead, we can expect:

1. **Longer form content**: 5-10 minute generations by late 2025
2. **Real-time generation**: Live video manipulation and generation
3. **Multi-modal control**: Voice, text, and gesture inputs
4. **Personalization**: Models that learn your style preferences

## Conclusion

AI video generation is at an inflection point. While current tools are impressive, they''re just the beginning. The next few years will see rapid advancement that transforms video production.',
    (SELECT id FROM blog_categories WHERE slug = 'news'),
    true,
    NOW() - INTERVAL '3 days',
    1653
  );
