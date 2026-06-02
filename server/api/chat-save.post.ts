/**
 * POST /api/chat-save
 * Called from the browser after each exchange to save the transcript.
 * Also sends a staff notification email on the first user message.
 */
import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { sessionId, messages, sourcePage, outcome, outcomeDetail, isNew } = body || {}

  if (!sessionId || !messages?.length) return { ok: false }

  const config = useRuntimeConfig()
  const mcUrl = process.env.MC_API_URL || 'http://localhost:3001'
  const resendKey = config.resendApiKey || process.env.RESEND_API_KEY || ''

  // ── Save to MC ─────────────────────────────────────────────────────────────
  try {
    await fetch(`${mcUrl}/api/fs-leads/chat-session`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(5000),
      body: JSON.stringify({ session_id: sessionId, messages, source_page: sourcePage, outcome, outcome_detail: outcomeDetail }),
    })
  } catch {}

  // ── Human requested alert — ping Vahan on Telegram immediately ──────────────
  const humanRequested = messages.some((m: any) => m.role === 'assistant' && m.content?.includes('HUMAN_REQUESTED'))
  if (humanRequested) {
    const lastUserMsg = [...messages].reverse().find((m: any) => m.role === 'user')?.content || ''
    fetch(`${mcUrl}/api/nova/alert`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(5000),
      body: JSON.stringify({
        secret: 'mc-agent-internal-2024',
        message: `🔴 LIVE CHAT — Customer wants a human!\n\n"${lastUserMsg.slice(0, 120)}"\n\nOpen Mission Control → Five Star → Live Chat to take over.`,
      }),
    }).catch(() => {})
  }

  // ── Email staff on first real exchange (user msg + AI response = 3 messages) ─
  if (isNew && resendKey && messages.length >= 2) {
    const firstUserMsg = messages.find((m: any) => m.role === 'user')?.content || ''
    const resend = new Resend(resendKey)
    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })

    resend.emails.send({
      from: 'Five Star AI Chat <noreply@fivestardatarecovery.com>',
      to: ['info@fivestardatarecovery.com'],
      subject: `💬 New Chat: "${firstUserMsg.slice(0, 60)}${firstUserMsg.length > 60 ? '…' : ''}"`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:540px;margin:0 auto;">
          <div style="background:#0f1623;padding:20px 24px;border-radius:12px 12px 0 0;border-bottom:2px solid #c62828;">
            <h1 style="color:#c62828;margin:0;font-size:17px;">💬 New AI Chat Started</h1>
            <p style="color:#8a9bb8;margin:5px 0 0;font-size:12px;">${timestamp} PT · ${sourcePage || '/'}</p>
          </div>
          <div style="background:#fff;padding:20px 24px;border:1px solid #e8edf4;border-top:none;border-radius:0 0 12px 12px;">
            <p style="font-size:13px;color:#6b7280;margin:0 0 12px;">Customer's first message:</p>
            <div style="background:#f8fafc;border-left:3px solid #c62828;padding:12px 16px;border-radius:4px;font-size:14px;color:#1a1a2e;line-height:1.6;">${firstUserMsg}</div>
            <p style="font-size:12px;color:#9ca3af;margin:16px 0 0;">View full transcript in Mission Control → Five Star → 💬 AI Chat</p>
          </div>
        </div>`,
    }).catch(() => {})
  }

  return { ok: true }
})
