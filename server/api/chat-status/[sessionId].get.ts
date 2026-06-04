/**
 * GET /api/chat-status/:sessionId
 * Proxies to MC backend — returns human_takeover status + admin_replies for the widget to poll.
 */
export default defineEventHandler(async (event) => {
  const sessionId = getRouterParam(event, 'sessionId')
  if (!sessionId) return { human_takeover: false, admin_replies: [], ack_index: 0 }

  const mcUrl = process.env.MC_API_URL || 'http://localhost:3001'

  try {
    const res = await fetch(`${mcUrl}/api/fs-leads/chat-status/${sessionId}`, {
      signal: AbortSignal.timeout(5000),
    })
    if (!res.ok) return { human_takeover: false, admin_replies: [], ack_index: 0 }
    return await res.json()
  } catch {
    return { human_takeover: false, admin_replies: [], ack_index: 0 }
  }
})
