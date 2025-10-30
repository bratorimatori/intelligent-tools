import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { event_type, tool_id, blog_post_id, metadata } = body;

    // Validate required fields
    if (!event_type) {
      return NextResponse.json(
        { error: 'event_type is required' },
        { status: 400 }
      );
    }

    // Validate event type
    const validEventTypes = ['view', 'click', 'submit', 'upvote'];
    if (!validEventTypes.includes(event_type)) {
      return NextResponse.json(
        { error: 'Invalid event_type' },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    // Get session ID from cookies or generate one
    const sessionId = request.cookies.get('session_id')?.value ||
                     crypto.randomUUID();

    // Insert analytics event
    const { error: analyticsError } = await supabase
      .from('analytics_events')
      .insert({
        event_type,
        tool_id: tool_id || null,
        blog_post_id: blog_post_id || null,
        session_id: sessionId,
        metadata: metadata || {},
      });

    if (analyticsError) {
      console.error('Analytics insert error:', analyticsError);
      // Don't fail the request if analytics fails
    }

    // Update counters based on event type
    if (event_type === 'view' && tool_id) {
      const { error: viewError } = await supabase.rpc(
        'increment_tool_views',
        { tool_uuid: tool_id }
      );

      if (viewError) {
        console.error('View count update error:', viewError);
      }
    }

    if (event_type === 'click' && tool_id) {
      const { error: clickError } = await supabase.rpc(
        'increment_tool_clicks',
        { tool_uuid: tool_id }
      );

      if (clickError) {
        console.error('Click count update error:', clickError);
      }
    }

    if (event_type === 'upvote' && tool_id) {
      const { error: upvoteError } = await supabase.rpc(
        'increment_tool_upvotes',
        { tool_uuid: tool_id }
      );

      if (upvoteError) {
        console.error('Upvote count update error:', upvoteError);
      }
    }

    // Set session cookie if new
    const response = NextResponse.json({ success: true });
    if (!request.cookies.get('session_id')) {
      response.cookies.set('session_id', sessionId, {
        maxAge: 60 * 60 * 24 * 365, // 1 year
        httpOnly: true,
        sameSite: 'lax',
      });
    }

    return response;
  } catch (error) {
    console.error('Analytics tracking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
