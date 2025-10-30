// Analytics helper functions for tracking events

export type AnalyticsEventType = 'view' | 'click' | 'submit' | 'upvote';

interface TrackEventParams {
  event_type: AnalyticsEventType;
  tool_id?: string;
  blog_post_id?: string;
  metadata?: Record<string, any>;
}

/**
 * Track an analytics event
 */
export async function trackEvent(params: TrackEventParams): Promise<boolean> {
  try {
    const response = await fetch('/api/analytics/track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    return response.ok;
  } catch (error) {
    console.error('Failed to track event:', error);
    return false;
  }
}

/**
 * Track tool page view
 */
export function trackToolView(toolId: string): Promise<boolean> {
  return trackEvent({
    event_type: 'view',
    tool_id: toolId,
  });
}

/**
 * Track affiliate link click
 */
export function trackToolClick(toolId: string, url: string): Promise<boolean> {
  return trackEvent({
    event_type: 'click',
    tool_id: toolId,
    metadata: { url },
  });
}

/**
 * Track tool upvote
 */
export function trackToolUpvote(toolId: string): Promise<boolean> {
  return trackEvent({
    event_type: 'upvote',
    tool_id: toolId,
  });
}

/**
 * Track tool submission
 */
export function trackToolSubmit(toolName: string): Promise<boolean> {
  return trackEvent({
    event_type: 'submit',
    metadata: { tool_name: toolName },
  });
}

/**
 * Track blog post view
 */
export function trackBlogView(blogPostId: string): Promise<boolean> {
  return trackEvent({
    event_type: 'view',
    blog_post_id: blogPostId,
  });
}
