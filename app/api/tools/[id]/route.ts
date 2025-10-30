import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// GET - Fetch a single tool by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = await createClient();

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
      .eq('id', params.id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'Tool not found' }, { status: 404 });
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error in GET /api/tools/[id]:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PATCH - Update a tool
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const supabase = await createClient();

    // Check if tool exists
    const { data: existingTool } = await supabase
      .from('tools')
      .select('id')
      .eq('id', params.id)
      .single();

    if (!existingTool) {
      return NextResponse.json({ error: 'Tool not found' }, { status: 404 });
    }

    // If slug is being changed, check if new slug exists
    if (body.slug) {
      const { data: slugExists } = await supabase
        .from('tools')
        .select('id')
        .eq('slug', body.slug)
        .neq('id', params.id)
        .single();

      if (slugExists) {
        return NextResponse.json(
          { error: 'A tool with this slug already exists' },
          { status: 400 }
        );
      }
    }

    // Update tool
    const updateData: any = {};
    const allowedFields = [
      'name', 'slug', 'tagline', 'description', 'long_description',
      'website_url', 'affiliate_url', 'logo_url', 'screenshot_url',
      'category_id', 'pricing_type', 'price_from', 'price_to',
      'pricing_info', 'featured', 'sponsored', 'tags', 'metadata'
    ];

    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        updateData[field] = body[field];
      }
    }

    const { data, error } = await supabase
      .from('tools')
      .update(updateData)
      .eq('id', params.id)
      .select()
      .single();

    if (error) {
      console.error('Error updating tool:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error in PATCH /api/tools/[id]:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE - Delete a tool
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const supabase = await createClient();

    // Check if tool exists
    const { data: existingTool } = await supabase
      .from('tools')
      .select('id')
      .eq('id', params.id)
      .single();

    if (!existingTool) {
      return NextResponse.json({ error: 'Tool not found' }, { status: 404 });
    }

    // Delete tool
    const { error } = await supabase
      .from('tools')
      .delete()
      .eq('id', params.id);

    if (error) {
      console.error('Error deleting tool:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in DELETE /api/tools/[id]:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
