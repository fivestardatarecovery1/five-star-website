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

  const { session_id, name, email, phone, preferredContact, type, device, device_label, issue, price, urgency, capacity, add_ons, call_required, source_page } = body

  // ── Post to MC (non-blocking, fire and forget) ──────────────────────────
  if (type === 'view') {
    await postToMC('view', { source_page: source_page || null })
    return { success: true }
  }

  if (type === 'lead') {
    await postToMC('lead', {
      session_id: session_id || email || name,
      name, email, phone,
      preferred_contact: preferredContact,
      source_page: source_page || null,
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
      source_page: source_page || null,
    })
  }

  // ── Email notification (result + call_required only) ────────────────────
  const isResult = type === 'result'
  const isCall = type === 'call' || call_required
  const subject = isCall
    ? `📞 Call Required: ${name} — ${device_label || device}`
    : `💰 Quote Completed: ${name} — ${device_label || device} — $${price?.toLocaleString()}`

  // ── Customer confirmation email (result only, not call-required) ──
  if (isResult && !isCall && email) {
    const firstName = (name || '').split(' ')[0] || 'there'
    await resend.emails.send({
      from: 'Five Star Data Recovery <noreply@fivestardatarecovery.com>',
      to: [email],
      subject: `Your Instant Quote — $${price?.toLocaleString()} for ${device_label || device}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e;">
          <div style="background:#0f1623;padding:28px 32px;border-radius:12px 12px 0 0;">
            <h1 style="color:#F5C842;margin:0;font-size:22px;">Five Star Data Recovery</h1>
            <p style="color:#8a9bb8;margin:6px 0 0;font-size:13px;">1731 S Brand Blvd, Glendale, CA 91204 &middot; (818) 272-8866</p>
          </div>
          <div style="background:#fff;padding:32px;border:1px solid #e8edf4;border-top:none;">
            <h2 style="margin:0 0 8px;font-size:20px;color:#111;">Hi ${firstName}, here&rsquo;s your quote!</h2>
            <p style="font-size:15px;color:#374151;line-height:1.7;margin:0 0 24px;">Based on what you&rsquo;ve told us, here&rsquo;s our estimated price for your data recovery case.</p>

            <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:24px;margin-bottom:24px;">
              <p style="margin:0 0 14px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#9ca3af;">Your Quote Summary</p>
              <table style="width:100%;border-collapse:collapse;">
                ${device_label ? `<tr><td style="padding:8px 0;border-bottom:1px solid #e8edf4;font-size:13px;color:#6b7280;width:40%;">Device</td><td style="padding:8px 0;border-bottom:1px solid #e8edf4;font-size:14px;font-weight:600;color:#111;">${device_label}</td></tr>` : ''}
                ${capacity ? `<tr><td style="padding:8px 0;border-bottom:1px solid #e8edf4;font-size:13px;color:#6b7280;">Capacity</td><td style="padding:8px 0;border-bottom:1px solid #e8edf4;font-size:14px;color:#111;">${capacity}</td></tr>` : ''}
                ${issue ? `<tr><td style="padding:8px 0;border-bottom:1px solid #e8edf4;font-size:13px;color:#6b7280;">Issue</td><td style="padding:8px 0;border-bottom:1px solid #e8edf4;font-size:14px;color:#111;">${issue}</td></tr>` : ''}
                ${urgency ? `<tr><td style="padding:8px 0;border-bottom:1px solid #e8edf4;font-size:13px;color:#6b7280;">Service</td><td style="padding:8px 0;border-bottom:1px solid #e8edf4;font-size:14px;color:#111;">${urgency}</td></tr>` : ''}
                <tr><td style="padding:12px 0 0;font-size:13px;color:#6b7280;font-weight:700;">Estimated Price</td><td style="padding:12px 0 0;font-size:28px;font-weight:900;color:#F5C842;">$${price?.toLocaleString()}</td></tr>
              </table>
            </div>

            <p style="font-size:13px;color:#6b7280;line-height:1.6;margin:0 0 28px;">This is an estimate based on the information provided. Final pricing is confirmed after our free diagnostic. <strong>No data, no charge.</strong></p>

            <p style="font-size:15px;font-weight:700;color:#111;margin:0 0 14px;">Ready to get started?</p>
            <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
              <tr>
                <td style="padding:0 0 10px 0;">
                  <a href="https://www.fivestardatarecovery.com/appointments" style="display:block;background:#c62828;color:#fff;text-decoration:none;padding:16px 20px;border-radius:10px;font-weight:800;font-size:16px;text-align:center;line-height:1.4;">
                    Schedule Express Drop-Off<br><em style="font-weight:400;font-size:12px;opacity:.85;">(For Local Customers)</em>
                  </a>
                </td>
              </tr>
              <tr>
                <td style="padding:0;">
                  <a href="https://www.fivestardatarecovery.com/data-recovery/mail-in-service" style="display:block;background:#1e40af;color:#fff;text-decoration:none;padding:16px 20px;border-radius:10px;font-weight:800;font-size:16px;text-align:center;line-height:1.4;">
                    Start Mail-In Recovery<br><em style="font-weight:400;font-size:12px;opacity:.85;">(Free Shipping Nationwide)</em>
                  </a>
                </td>
              </tr>
            </table>

            <p style="font-size:13px;color:#374151;margin:0;">Questions? Call us at <a href="tel:8182728866" style="color:#c62828;font-weight:700;">818-272-8866</a>.</p>
          </div>
          <div style="background:#f4f7fc;padding:14px 32px;border-radius:0 0 12px 12px;border:1px solid #e8edf4;border-top:none;text-align:center;">
            <p style="margin:0;font-size:11px;color:#9ca3af;">&copy; 2025 Five Star Data Recovery &middot; 818-272-8866 &middot; Glendale, CA</p>
          </div>
        </div>`,
    }).catch(() => {})
  }

  // ── Internal notification to staff ──
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
