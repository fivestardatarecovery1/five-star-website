import { Resend } from 'resend'

// MC lead capture — post to Mission Control in parallel with email
async function postToMC(path: string, data: Record<string, unknown>) {
  const mcUrl = process.env.MC_API_URL
  if (!mcUrl) return
  try {
    await fetch(`${mcUrl}/api/fs-leads/${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
      signal: AbortSignal.timeout(5000),
    })
  } catch {
    // Non-blocking — never fail the response due to MC being down
  }
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const resend = new Resend(process.env.RESEND_API_KEY || '')

  const { session_id, name, email, phone, preferredContact, type, device, device_label, issue, price, urgency, capacity, add_ons, call_required } = body

  // ── Post to MC (non-blocking, fire and forget) ──────────────────────────
  if (type === 'view') {
    await postToMC('view', {})
    return { success: true }
  }

  if (type === 'lead') {
    await postToMC('lead', {
      session_id: session_id || email || name,
      name, email, phone,
      preferred_contact: preferredContact,
    })
    // Don't send email for lead-start — only send email on completion
    return { success: true }
  }

  if (type === 'result' || type === 'call') {
    await postToMC('complete', {
      session_id: session_id || email || name,
      name, email, phone,
      preferred_contact: preferredContact,
      device: device || null,
      device_label: device_label || device || null,
      capacity: capacity || null,
      issue: issue || null,
      urgency: urgency || null,
      price: price || null,
      add_ons: add_ons || null,
      call_required: call_required || type === 'call',
    })
  }

  // ── Email notification (result + call_required only) ────────────────────
  const isResult = type === 'result'
  const isCall = type === 'call' || call_required
  const subject = isCall
    ? `📞 Call Required: ${name} — ${device_label || device}`
    : `💰 Quote Completed: ${name} — ${device_label || device} — $${price?.toLocaleString()}`

  await resend.emails.send({
    from: 'Five Star Quote Tool <noreply@fivestardatarecovery.com>',
    to: ['info@fivestardatarecovery.com'],
    subject,
    html: `
      <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e;">
        <div style="background:#0f1623;padding:24px 28px;border-radius:12px 12px 0 0;border-bottom:2px solid #F5C842;">
          <h1 style="color:#F5C842;margin:0;font-size:18px;">
            ${isCall ? '📞 Needs a Callback — Call Required Device' : '💰 Quote Completed'}
          </h1>
          <p style="color:#8a9bb8;margin:5px 0 0;font-size:12px;">${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PT</p>
        </div>
        <div style="background:#fff;padding:24px 28px;border:1px solid #e8edf4;border-top:none;">
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;width:40%;">Name</td><td style="padding:6px 0;font-weight:700;font-size:14px;">${name}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Email</td><td style="padding:6px 0;font-size:14px;"><a href="mailto:${email}" style="color:#F5C842;">${email || '—'}</a></td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Phone</td><td style="padding:6px 0;font-size:14px;"><a href="tel:${phone}" style="color:#F5C842;">${phone || '—'}</a></td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Preferred Contact</td><td style="padding:6px 0;font-size:14px;text-transform:capitalize;">${preferredContact || '—'}</td></tr>
            <tr><td colspan="2" style="padding:12px 0 4px;border-top:1px solid #e8edf4;"></td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Device</td><td style="padding:6px 0;font-weight:700;font-size:14px;">${device_label || device || '—'}</td></tr>
            ${capacity ? `<tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Capacity</td><td style="padding:6px 0;font-size:14px;">${capacity}</td></tr>` : ''}
            ${issue ? `<tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Issue</td><td style="padding:6px 0;font-size:14px;">${issue}</td></tr>` : ''}
            ${urgency ? `<tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Service</td><td style="padding:6px 0;font-size:14px;">${urgency}</td></tr>` : ''}
            ${isResult ? `<tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Quoted Price</td><td style="padding:6px 0;font-weight:900;font-size:18px;color:#F5C842;">$${price?.toLocaleString()}</td></tr>` : ''}
            ${isCall ? `<tr><td colspan="2" style="padding:10px;background:#fff3cd;border-radius:6px;font-size:13px;color:#856404;margin-top:8px;">⚠️ This customer selected a device that requires a custom quote. Call them back ASAP.</td></tr>` : ''}
          </table>
        </div>
        <div style="background:#f4f7fc;padding:12px 28px;border-radius:0 0 12px 12px;border:1px solid #e8edf4;border-top:none;text-align:center;">
          <p style="margin:0;font-size:11px;color:#9ca3af;">Five Star Data Recovery · 818-272-8866</p>
        </div>
      </div>
    `,
  }).catch(() => {}) // don't fail response if email fails

  return { success: true }
})
