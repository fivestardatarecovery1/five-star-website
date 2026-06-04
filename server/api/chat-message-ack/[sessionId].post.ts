/**
 * POST /api/chat-message-ack/:sessionId
 * Proxies to MC backend — widget acknowledges received admin replies up to a given index.
 */
export default defineEventHandler(async (event) => {
  const sessionId = getRouterParam(event, 'sessionId')
  if (!sessionId) return { ok: false }

  const body = await readBody(event)
  const mcUrl = process.env.MC_API_URL || 'http://localhost:3001'

  try {
    const res = await fetch(`${mcUrl}/api/fs-leads/chat-message-ack/${sessionId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(5000),
      body: JSON.stringify({ ack_index: body?.ack_index ?? 0 }),
    })
    if (!res.ok) return { ok: false }
    return await res.json()
  } catch {
    return { ok: false }
  }
})
