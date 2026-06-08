/**
 * POST /api/mc-leads/transfer-pickup-appointment
 *
 * Bulletproof appointment handler — emails fire directly from Vercel via Resend
 * (never depends on ngrok/MC backend). MC backend save is best-effort only.
 */
import { Resend } from 'resend'

const REASON_LABELS: Record<string, string> = {
  drop_off_transfer: 'Drop Off a Transfer Drive',
  pickup_recovery:   'Pick Up My Recovered Data',
  review_data:       'Review Recovered Data In Person',
}

function formatDate(dateStr: string): string {
  if (!dateStr) return dateStr
  const [y, m, d] = dateStr.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric',
  })
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()
  const resendKey = config.resendApiKey || process.env.RESEND_API_KEY || ''
  const resend   = resendKey ? new Resend(resendKey) : null

  const {
    firstName, lastName, email, phone, caseNumber,
    reason, appointmentDate, appointmentTime,
  } = body

  const fullName      = `${firstName} ${lastName}`
  const reasonLabel   = REASON_LABELS[reason] || reason
  const formattedDate = formatDate(appointmentDate)

  // ── Emails — sent from Vercel, never depend on MC backend ───────────────
  if (resend) {
    try {
      // Internal notification → Five Star staff
      await resend.emails.send({
        from:    'Five Star Appointments <noreply@fivestardatarecovery.com>',
        to:      ['info@fivestardatarecovery.com'],
        subject: `📅 New Appointment: ${reasonLabel} — ${fullName} on ${formattedDate} at ${appointmentTime}`,
        html: `
          <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:0 auto;color:#1a1a2e;">
            <div style="background:#0f1623;padding:28px 32px;border-radius:12px 12px 0 0;">
              <h1 style="color:#F5C842;margin:0;font-size:22px;">📅 New Appointment Scheduled</h1>
              <p style="color:#8a9bb8;margin:6px 0 0;font-size:14px;">${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PT</p>
            </div>
            <div style="background:#fff;padding:28px 32px;border:1px solid #e8edf4;border-top:none;">
              <h2 style="font-size:15px;color:#6b7280;text-transform:uppercase;letter-spacing:.08em;margin:0 0 16px;">Appointment Details</h2>
              <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
                <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;width:40%;">Reason</td><td style="padding:8px 0;font-weight:700;font-size:14px;color:#F5C842;">${reasonLabel}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Date</td><td style="padding:8px 0;font-weight:700;font-size:14px;">${formattedDate}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Time</td><td style="padding:8px 0;font-weight:700;font-size:14px;">${appointmentTime}</td></tr>
              </table>
              <h2 style="font-size:15px;color:#6b7280;text-transform:uppercase;letter-spacing:.08em;margin:0 0 16px;border-top:1px solid #e8edf4;padding-top:20px;">Customer Info</h2>
              <table style="width:100%;border-collapse:collapse;">
                <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;width:40%;">Name</td><td style="padding:8px 0;font-weight:700;font-size:14px;">${fullName}</td></tr>
                <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Email</td><td style="padding:8px 0;font-size:14px;"><a href="mailto:${email}" style="color:#F5C842;">${email}</a></td></tr>
                <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Phone</td><td style="padding:8px 0;font-size:14px;"><a href="tel:${phone}" style="color:#F5C842;">${phone}</a></td></tr>
                ${caseNumber ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Case #</td><td style="padding:8px 0;font-size:14px;">${caseNumber}</td></tr>` : ''}
              </table>
            </div>
            <div style="background:#f4f7fc;padding:16px 32px;border-radius:0 0 12px 12px;border:1px solid #e8edf4;border-top:none;text-align:center;">
              <p style="margin:0;font-size:12px;color:#9ca3af;">Five Star Data Recovery · 1731 S Brand Blvd, Glendale, CA 91204 · 818-272-8866</p>
            </div>
          </div>
        `,
      })

      // Confirmation email → customer
      await resend.emails.send({
        from:    'Five Star Data Recovery <noreply@fivestardatarecovery.com>',
        to:      [email],
        subject: `Appointment Confirmed — ${formattedDate} at ${appointmentTime}`,
        html: `
          <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e;">
            <div style="background:#0f1623;padding:32px;border-radius:12px 12px 0 0;text-align:center;">
              <h1 style="color:#F5C842;margin:0;font-size:24px;">Five Star Data Recovery</h1>
              <p style="color:#8a9bb8;margin:8px 0 0;font-size:14px;">1731 S Brand Blvd, Glendale, CA 91204</p>
            </div>
            <div style="background:#fff;padding:36px 32px;border:1px solid #e8edf4;border-top:none;">
              <h2 style="margin:0 0 8px;font-size:22px;">Hi ${firstName}, you're all set! ✅</h2>
              <p style="font-size:15px;line-height:1.7;color:#374151;margin:0 0 24px;">
                Your appointment is confirmed. Just show up at our office at your scheduled time — no printout needed.
              </p>
              <div style="background:#f4f7fc;border-radius:10px;padding:20px 24px;margin-bottom:24px;">
                <p style="margin:0 0 12px;font-size:13px;color:#6b7280;text-transform:uppercase;letter-spacing:.07em;font-weight:700;">Your Confirmed Appointment</p>
                <table style="width:100%;border-collapse:collapse;">
                  <tr><td style="padding:8px 0;border-bottom:1px solid #e8edf4;color:#6b7280;font-size:14px;width:45%;">Reason</td><td style="padding:8px 0;border-bottom:1px solid #e8edf4;font-size:14px;font-weight:700;">${reasonLabel}</td></tr>
                  <tr><td style="padding:8px 0;border-bottom:1px solid #e8edf4;color:#6b7280;font-size:14px;">Date</td><td style="padding:8px 0;border-bottom:1px solid #e8edf4;font-size:15px;font-weight:800;color:#F5C842;">📅 ${formattedDate}</td></tr>
                  <tr><td style="padding:8px 0;border-bottom:1px solid #e8edf4;color:#6b7280;font-size:14px;">Time</td><td style="padding:8px 0;border-bottom:1px solid #e8edf4;font-size:15px;font-weight:800;color:#F5C842;">⏰ ${appointmentTime}</td></tr>
                  <tr><td style="padding:8px 0;border-bottom:1px solid #e8edf4;color:#6b7280;font-size:14px;">Location</td><td style="padding:8px 0;border-bottom:1px solid #e8edf4;font-size:14px;font-weight:600;">1731 S Brand Blvd., Glendale, CA 91204</td></tr>
                  ${caseNumber ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Case #</td><td style="padding:8px 0;font-size:14px;font-weight:600;">${caseNumber}</td></tr>` : ''}
                </table>
              </div>
              <p style="font-size:14px;line-height:1.7;color:#374151;margin:0 0 24px;">
                Questions? Call us at <a href="tel:8182728866" style="color:#c62828;font-weight:700;">818-272-8866</a>.
              </p>
              <div style="text-align:center;">
                <a href="https://www.fivestardatarecovery.com" style="display:inline-block;background:#F5C842;color:#1a1a1a;padding:13px 32px;border-radius:8px;font-weight:800;text-decoration:none;font-size:15px;">Visit Our Website</a>
              </div>
            </div>
            <div style="background:#f4f7fc;padding:16px 32px;border-radius:0 0 12px 12px;border:1px solid #e8edf4;border-top:none;text-align:center;">
              <p style="margin:0;font-size:12px;color:#9ca3af;">© 2025 Five Star Data Recovery · 818-272-8866 · Glendale, CA</p>
            </div>
          </div>
        `,
      })
    } catch (emailErr: any) {
      console.error('[transfer-pickup-appointment] Email error:', emailErr?.message)
      // Email failed — return a real error so the user knows
      return { ok: false, error: 'Failed to send confirmation email. Please call us at 818-272-8866.' }
    }
  } else {
    console.error('[transfer-pickup-appointment] RESEND_API_KEY not configured — emails not sent')
  }

  // ── Save to MC backend — best-effort, never blocks the response ──────────
  const isVercel = !!process.env.VERCEL
  const mcUrl = isVercel
    ? 'https://fivestar.ngrok.app/api/mc-leads/transfer-pickup-appointment'
    : 'http://localhost:3001/api/fs-leads/transfer-pickup-appointment'

  fetch(mcUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(8000),
  }).catch((err) => {
    console.error('[transfer-pickup-appointment] MC save failed (non-blocking):', err?.message)
  })

  return { ok: true }
})
