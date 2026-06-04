/**
 * POST /api/chat-callback
 * Fires when Alex collects a callback request in chat.
 * Sends email to staff + logs to Mission Control.
 */
import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, phone, issue } = body || {}

  if (!name || !phone) return { ok: false, error: 'Missing required fields' }

  const config = useRuntimeConfig()
  const resendKey = config.resendApiKey || process.env.RESEND_API_KEY || ''
  const mcUrl = process.env.MC_API_URL || 'http://localhost:3001'

  const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })

  // ── Email to staff ────────────────────────────────────────────────────────
  if (resendKey) {
    const resend = new Resend(resendKey)
    await resend.emails.send({
      from: 'Five Star AI Chat <noreply@fivestardatarecovery.com>',
      to: ['info@fivestardatarecovery.com'],
      subject: `📞 Callback Request: ${name} — ${phone}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;color:#1a1a2e;">
          <div style="background:#0f1623;padding:22px 28px;border-radius:12px 12px 0 0;border-bottom:2px solid #c62828;">
            <h1 style="color:#c62828;margin:0;font-size:18px;">📞 Callback Request via AI Chat</h1>
            <p style="color:#8a9bb8;margin:5px 0 0;font-size:12px;">${timestamp} PT</p>
          </div>
          <div style="background:#fff;padding:24px 28px;border:1px solid #e8edf4;border-top:none;border-radius:0 0 12px 12px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;color:#6b7280;font-size:14px;width:35%;">Name</td>
                  <td style="padding:8px 0;border-bottom:1px solid #f1f5f9;font-weight:700;font-size:15px;">${name}</td></tr>
              <tr><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;color:#6b7280;font-size:14px;">Phone</td>
                  <td style="padding:8px 0;border-bottom:1px solid #f1f5f9;font-size:15px;">
                    <a href="tel:${phone}" style="color:#c62828;font-weight:700;text-decoration:none;">${phone}</a>
                  </td></tr>
              <tr><td style="padding:10px 0 0;color:#6b7280;font-size:14px;vertical-align:top;">Issue</td>
                  <td style="padding:10px 0 0;font-size:14px;color:#374151;line-height:1.6;">${issue || '—'}</td></tr>
            </table>
            <div style="margin-top:20px;padding:14px;background:#fff8e1;border-radius:8px;font-size:13px;color:#92400e;">
              ⚡ Call them back ASAP — they came in through the website chat.
            </div>
          </div>
        </div>`,
    }).catch(() => {})
  }

  // ── Log to Mission Control (non-blocking) ─────────────────────────────────
  try {
    await fetch(`${mcUrl}/api/fs-leads/complete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        session_id: `chat-callback-${Date.now()}`,
        name, phone,
        device_label: 'Chat callback request',
        issue: issue || null,
        status: 'call_required',
        call_required: true,
        source_page: '/chat',
      }),
      signal: AbortSignal.timeout(5000),
    })
  } catch(e) { console.error('[chat-callback] MC save failed:', (e as any)?.message) }

  return { ok: true }
})
