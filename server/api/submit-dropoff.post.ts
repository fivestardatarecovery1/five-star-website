import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()
  const resend = new Resend(config.resendApiKey)

  const {
    firstName, lastName, email, phone,
    manufacturer, modelNo, driveType, driveFormat, driveSize,
    issue, dataTypes, recoveryAttempted, additionalInfo,
    conditionalRates, expeditedService, transferDrive,
    dropOffDate, dropOffTime, todayDate,
  } = body

  const fullName = `${firstName} ${lastName}`

  // ── Email to business ──────────────────────────────────────────
  await resend.emails.send({
    from: 'Five Star Drop-Off Form <noreply@fivestardatarecovery.com>',
    to: ['info@fivestardatarecovery.com'],
    subject: `New Express Drop-Off: ${fullName} — ${manufacturer || 'Unknown Drive'}`,
    html: `
      <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:0 auto;color:#1a1a2e;">
        <div style="background:#0f1623;padding:28px 32px;border-radius:12px 12px 0 0;">
          <h1 style="color:#F5C842;margin:0;font-size:22px;">New Express Drop-Off Submission</h1>
          <p style="color:#8a9bb8;margin:6px 0 0;font-size:14px;">${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PT</p>
        </div>
        <div style="background:#fff;padding:28px 32px;border:1px solid #e8edf4;border-top:none;">

          <h2 style="font-size:15px;color:#6b7280;text-transform:uppercase;letter-spacing:.08em;margin:0 0 16px;">Contact Info</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;width:40%;">Name</td><td style="padding:8px 0;font-weight:700;font-size:14px;">${fullName}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Email</td><td style="padding:8px 0;font-size:14px;"><a href="mailto:${email}" style="color:#F5C842;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Phone</td><td style="padding:8px 0;font-size:14px;"><a href="tel:${phone}" style="color:#F5C842;">${phone}</a></td></tr>
          </table>

          <h2 style="font-size:15px;color:#6b7280;text-transform:uppercase;letter-spacing:.08em;margin:0 0 16px;border-top:1px solid #e8edf4;padding-top:20px;">Drive Details</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;width:40%;">Manufacturer</td><td style="padding:8px 0;font-weight:700;font-size:14px;">${manufacturer}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Model No</td><td style="padding:8px 0;font-size:14px;">${modelNo}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Type</td><td style="padding:8px 0;font-size:14px;">${driveType}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Format</td><td style="padding:8px 0;font-size:14px;">${driveFormat}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Size</td><td style="padding:8px 0;font-size:14px;">${driveSize}</td></tr>
          </table>

          <h2 style="font-size:15px;color:#6b7280;text-transform:uppercase;letter-spacing:.08em;margin:0 0 16px;border-top:1px solid #e8edf4;padding-top:20px;">Recovery Details</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;width:40%;">Issue</td><td style="padding:8px 0;font-size:14px;">${issue}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Data Types</td><td style="padding:8px 0;font-size:14px;">${Array.isArray(dataTypes) ? dataTypes.join(', ') : dataTypes}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Prior Attempts</td><td style="padding:8px 0;font-size:14px;">${recoveryAttempted}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Additional Info</td><td style="padding:8px 0;font-size:14px;">${additionalInfo || '—'}</td></tr>
          </table>

          <h2 style="font-size:15px;color:#6b7280;text-transform:uppercase;letter-spacing:.08em;margin:0 0 16px;border-top:1px solid #e8edf4;padding-top:20px;">Service &amp; Schedule</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;width:40%;">Service</td><td style="padding:8px 0;font-weight:700;font-size:14px;color:${expeditedService?.includes('Expedited') ? '#F5C842' : '#1a1a2e'}">${expeditedService}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Transfer Drive</td><td style="padding:8px 0;font-size:14px;">${transferDrive}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Drop-Off Date</td><td style="padding:8px 0;font-weight:700;font-size:14px;">${dropOffDate}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Drop-Off Time</td><td style="padding:8px 0;font-size:14px;">${dropOffTime}</td></tr>
          </table>

          ${conditionalRates?.length ? `
          <h2 style="font-size:15px;color:#6b7280;text-transform:uppercase;letter-spacing:.08em;margin:0 0 12px;border-top:1px solid #e8edf4;padding-top:20px;">Conditional Rates Selected</h2>
          <ul style="margin:0;padding:0 0 0 18px;font-size:14px;color:#374151;">
            ${(Array.isArray(conditionalRates) ? conditionalRates : [conditionalRates]).map((r: string) => `<li style="padding:4px 0;">${r}</li>`).join('')}
          </ul>` : ''}

        </div>
        <div style="background:#f4f7fc;padding:16px 32px;border-radius:0 0 12px 12px;border:1px solid #e8edf4;border-top:none;text-align:center;">
          <p style="margin:0;font-size:12px;color:#9ca3af;">Five Star Data Recovery · 1731 S Brand Blvd, Glendale, CA 91204 · 818-272-8866</p>
        </div>
      </div>
    `,
  })

  // ── Confirmation email to customer ─────────────────────────────
  await resend.emails.send({
    from: 'Five Star Data Recovery <noreply@fivestardatarecovery.com>',
    to: [email],
    subject: 'We received your drop-off request — Five Star Data Recovery',
    html: `
      <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e;">
        <div style="background:#0f1623;padding:32px;border-radius:12px 12px 0 0;text-align:center;">
          <h1 style="color:#F5C842;margin:0;font-size:24px;">Five Star Data Recovery</h1>
          <p style="color:#8a9bb8;margin:8px 0 0;font-size:14px;">1731 S Brand Blvd, Glendale, CA 91204</p>
        </div>
        <div style="background:#fff;padding:36px 32px;border:1px solid #e8edf4;border-top:none;">
          <h2 style="margin:0 0 12px;font-size:20px;">Hi ${firstName},</h2>
          <p style="font-size:15px;line-height:1.7;color:#374151;margin:0 0 20px;">
            Thank you for submitting your Express Drop-Off request. We've received all your information and our team will be in touch shortly to confirm your appointment.
          </p>
          <div style="background:#f4f7fc;border-radius:10px;padding:20px 24px;margin-bottom:24px;">
            <p style="margin:0 0 8px;font-size:13px;color:#6b7280;text-transform:uppercase;letter-spacing:.07em;font-weight:700;">Your Drop-Off Summary</p>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;width:45%;">Drive</td><td style="padding:6px 0;font-size:14px;font-weight:600;">${manufacturer} — ${driveType}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Service</td><td style="padding:6px 0;font-size:14px;font-weight:600;">${expeditedService?.includes('Expedited') ? 'Expedited Service' : 'Standard Service'}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Preferred Date</td><td style="padding:6px 0;font-size:14px;font-weight:600;">${dropOffDate} ${dropOffTime}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Location</td><td style="padding:6px 0;font-size:14px;font-weight:600;">Glendale, CA</td></tr>
            </table>
          </div>
          <p style="font-size:14px;line-height:1.7;color:#374151;margin:0 0 24px;">
            <strong>What happens next?</strong><br>
            Our team will review your case and reach out to confirm your drop-off appointment. If you have any questions in the meantime, call us at <a href="tel:8182728866" style="color:#F5C842;font-weight:700;">818-272-8866</a>.
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

  // Save to Mission Control (fire & forget)
  // Route through the Nuxt proxy on the local machine (fivestar.ngrok.app → localhost:3456 → localhost:3001)
  const mcUrl = process.env.MC_API_URL
  if (mcUrl) {
    fetch(`${mcUrl}/api/mc-leads/express-submission`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...body }),
      signal: AbortSignal.timeout(4000),
    }).catch(() => {})
  }

  return { success: true }
})
