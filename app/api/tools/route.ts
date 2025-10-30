import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// GET - Fetch all tools with optional filters
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category');
    const pricing = searchParams.get('pricing');
    const search = searchParams.get('search');
    const featured = searchParams.get('featured');
    const limit = searchParams.get('limit');

    const supabase = await createClient();
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

    // Apply filters
    if (category && category !== 'all') {
      query = query.eq('category_id', category);
    }

    if (pricing && pricing !== 'all') {
      query = query.eq('pricing_type', pricing);
    }

    if (search) {
      query = query.or(`name.ilike.%${search}%,description.ilike.%${search}%,tagline.ilike.%${search}%`);
    }

    if (featured === 'true') {
      query = query.eq('featured', true);
    }

    // Apply limit
    if (limit) {
      query = query.limit(parseInt(limit));
    }

    // Order by created_at descending
    query = query.order('created_at', { ascending: false });

    const { data, error } = await query;

    if (error) {
      console.error('Error fetching tools:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error in GET /api/tools:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST - Create a new tool
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const supabase = await createClient();

    // Validate required fields
    const requiredFields = ['name', 'slug', 'website_url'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Check if slug already exists
    const { data: existingTool } = await supabase
      .from('tools')
      .select('id')
      .eq('slug', body.slug)
      .single();

    if (existingTool) {
      return NextResponse.json(
        { error: 'A tool with this slug already exists' },
        { status: 400 }
      );
    }

    // Insert tool
    const { data, error } = await supabase
      .from('tools')
      .insert({
        name: body.name,
        slug: body.slug,
        tagline: body.tagline || null,
        description: body.description || null,
        long_description: body.long_description || null,
        website_url: body.website_url,
        affiliate_url: body.affiliate_url || null,
        logo_url: body.logo_url || null,
        screenshot_url: body.screenshot_url || null,
        category_id: body.category_id || null,
        pricing_type: body.pricing_type || 'freemium',
        price_from: body.price_from || null,
        price_to: body.price_to || null,
        pricing_info: body.pricing_info || null,
        featured: body.featured || false,
        sponsored: body.sponsored || false,
        tags: body.tags || [],
        metadata: body.metadata || {},
      })
      .select()
      .single();

    if (error) {
      console.error('Error creating tool:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 201 });
  } catch (error) {
    console.error('Error in POST /api/tools:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
