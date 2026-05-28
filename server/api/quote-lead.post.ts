import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const resend = new Resend(process.env.RESEND_API_KEY || '')

  const { name, email, phone, preferredContact, type, device, issue, price, urgency, capacity } = body

  const isResult = type === 'result'
  const subject = isResult
    ? `💰 Quote Completed: ${name} — ${device} — $${price?.toLocaleString()}`
    : `🔔 New Quote Started: ${name} — ${email}`

  await resend.emails.send({
    from: 'Five Star Quote Tool <noreply@fivestardatarecovery.com>',
    to: ['info@fivestardatarecovery.com'],
    subject,
    html: `
      <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e;">
        <div style="background:#0f1623;padding:24px 28px;border-radius:12px 12px 0 0;border-bottom:2px solid #F5C842;">
          <h1 style="color:#F5C842;margin:0;font-size:18px;">
            ${isResult ? '💰 Quote Completed' : '🔔 New Lead — Quote Started'}
          </h1>
          <p style="color:#8a9bb8;margin:5px 0 0;font-size:12px;">${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PT</p>
        </div>
        <div style="background:#fff;padding:24px 28px;border:1px solid #e8edf4;border-top:none;">
          <table style="width:100%;border-collapse:collapse;margin-bottom:${isResult ? '20px' : '0'};">
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;width:40%;">Name</td><td style="padding:6px 0;font-weight:700;font-size:14px;">${name}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Email</td><td style="padding:6px 0;font-size:14px;"><a href="mailto:${email}" style="color:#F5C842;">${email}</a></td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Phone</td><td style="padding:6px 0;font-size:14px;"><a href="tel:${phone}" style="color:#F5C842;">${phone}</a></td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Preferred Contact</td><td style="padding:6px 0;font-size:14px;text-transform:capitalize;">${preferredContact}</td></tr>
            ${isResult ? `
            <tr><td colspan="2" style="padding:12px 0 4px;border-top:1px solid #e8edf4;"></td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Device</td><td style="padding:6px 0;font-weight:700;font-size:14px;">${device}</td></tr>
            ${capacity ? `<tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Capacity</td><td style="padding:6px 0;font-size:14px;">${capacity}</td></tr>` : ''}
            ${issue ? `<tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Issue</td><td style="padding:6px 0;font-size:14px;">${issue}</td></tr>` : ''}
            ${urgency ? `<tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Service</td><td style="padding:6px 0;font-size:14px;">${urgency}</td></tr>` : ''}
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Quoted Price</td><td style="padding:6px 0;font-weight:900;font-size:18px;color:#F5C842;">$${price?.toLocaleString()}</td></tr>
            ` : ''}
          </table>
          ${!isResult ? `<p style="font-size:12px;color:#9ca3af;margin:8px 0 0;font-style:italic;">This lead entered their contact info but has not yet seen a price. Follow up via ${preferredContact}.</p>` : ''}
        </div>
        <div style="background:#f4f7fc;padding:12px 28px;border-radius:0 0 12px 12px;border:1px solid #e8edf4;border-top:none;text-align:center;">
          <p style="margin:0;font-size:11px;color:#9ca3af;">Five Star Data Recovery · 818-272-8866</p>
        </div>
      </div>
    `,
  })

  return { success: true }
})
