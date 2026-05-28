import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()
  const resend = new Resend(config.resendApiKey)

  const { firstName, lastName, email, phone, manufacturer, driveType, driveFormat, driveSize,
    issue, dataTypes, recoveryAttempted, additionalInfo, conditionalRates, expeditedService,
    transferDrive, streetAddress, city, state, zip, country, shippingCarrier, date } = body

  const fullName = `${firstName} ${lastName}`

  await resend.emails.send({
    from: 'Five Star Mail-In Form <noreply@fivestardatarecovery.com>',
    to: ['info@fivestardatarecovery.com'],
    subject: `New Mail-In Request: ${fullName} — ${manufacturer || 'Unknown Drive'}`,
    html: `
      <div style="font-family:Inter,Arial,sans-serif;max-width:640px;margin:0 auto;color:#1a1a2e;">
        <div style="background:#0f1623;padding:28px 32px;border-radius:12px 12px 0 0;">
          <h1 style="color:#F5C842;margin:0;font-size:22px;">New Mail-In Recovery Request</h1>
          <p style="color:#8a9bb8;margin:6px 0 0;font-size:14px;">${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PT</p>
        </div>
        <div style="background:#fff;padding:28px 32px;border:1px solid #e8edf4;border-top:none;">
          <h2 style="font-size:14px;color:#6b7280;text-transform:uppercase;letter-spacing:.08em;margin:0 0 12px;">Contact</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;width:40%;">Name</td><td style="padding:6px 0;font-weight:700;font-size:14px;">${fullName}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Email</td><td style="padding:6px 0;font-size:14px;"><a href="mailto:${email}" style="color:#F5C842;">${email}</a></td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Phone</td><td style="padding:6px 0;font-size:14px;"><a href="tel:${phone}" style="color:#F5C842;">${phone}</a></td></tr>
          </table>
          <h2 style="font-size:14px;color:#6b7280;text-transform:uppercase;letter-spacing:.08em;margin:0 0 12px;border-top:1px solid #e8edf4;padding-top:16px;">Drive</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;width:40%;">Manufacturer</td><td style="padding:6px 0;font-weight:700;font-size:14px;">${manufacturer}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Type</td><td style="padding:6px 0;font-size:14px;">${driveType}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Format</td><td style="padding:6px 0;font-size:14px;">${driveFormat}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Size</td><td style="padding:6px 0;font-size:14px;">${driveSize}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Issue</td><td style="padding:6px 0;font-weight:700;font-size:14px;">${issue}</td></tr>
          </table>
          <h2 style="font-size:14px;color:#6b7280;text-transform:uppercase;letter-spacing:.08em;margin:0 0 12px;border-top:1px solid #e8edf4;padding-top:16px;">Recovery</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;width:40%;">Data Types</td><td style="padding:6px 0;font-size:14px;">${Array.isArray(dataTypes) ? dataTypes.join(', ') : dataTypes}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Prior Attempts</td><td style="padding:6px 0;font-size:14px;">${recoveryAttempted}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Additional Info</td><td style="padding:6px 0;font-size:14px;">${additionalInfo || '—'}</td></tr>
          </table>
          <h2 style="font-size:14px;color:#6b7280;text-transform:uppercase;letter-spacing:.08em;margin:0 0 12px;border-top:1px solid #e8edf4;padding-top:16px;">Service & Shipping</h2>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;width:40%;">Service</td><td style="padding:6px 0;font-weight:700;font-size:14px;color:${expeditedService?.includes('Expedited') ? '#F5C842' : '#1a1a2e'}">${expeditedService}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Transfer Drive</td><td style="padding:6px 0;font-size:14px;">${transferDrive}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Carrier Pref</td><td style="padding:6px 0;font-size:14px;">${shippingCarrier || 'No preference'}</td></tr>
          </table>
          <h2 style="font-size:14px;color:#6b7280;text-transform:uppercase;letter-spacing:.08em;margin:0 0 12px;border-top:1px solid #e8edf4;padding-top:16px;">Ship From</h2>
          <p style="font-size:14px;margin:0 0 16px;color:#1a1a2e;">${streetAddress}, ${city}, ${state} ${zip}, ${country}</p>
          ${conditionalRates?.length ? `<h2 style="font-size:14px;color:#6b7280;text-transform:uppercase;letter-spacing:.08em;margin:0 0 10px;border-top:1px solid #e8edf4;padding-top:16px;">Conditional Rates</h2><ul style="margin:0;padding:0 0 0 18px;font-size:14px;color:#374151;">${(Array.isArray(conditionalRates) ? conditionalRates : [conditionalRates]).map((r: string) => `<li style="padding:3px 0;">${r}</li>`).join('')}</ul>` : ''}
        </div>
        <div style="background:#f4f7fc;padding:14px 32px;border-radius:0 0 12px 12px;border:1px solid #e8edf4;border-top:none;text-align:center;">
          <p style="margin:0;font-size:12px;color:#9ca3af;">Five Star Data Recovery · 1731 S Brand Blvd, Glendale, CA 91204 · 818-272-8866</p>
        </div>
      </div>`,
  })

  await resend.emails.send({
    from: 'Five Star Data Recovery <noreply@fivestardatarecovery.com>',
    to: [email],
    subject: 'We received your mail-in request — Five Star Data Recovery',
    html: `
      <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e;">
        <div style="background:#0f1623;padding:32px;border-radius:12px 12px 0 0;text-align:center;">
          <h1 style="color:#F5C842;margin:0;font-size:24px;">Five Star Data Recovery</h1>
          <p style="color:#8a9bb8;margin:8px 0 0;font-size:14px;">1731 S Brand Blvd, Glendale, CA 91204</p>
        </div>
        <div style="background:#fff;padding:36px 32px;border:1px solid #e8edf4;border-top:none;">
          <h2 style="margin:0 0 12px;font-size:20px;">Hi ${firstName},</h2>
          <p style="font-size:15px;line-height:1.7;color:#374151;margin:0 0 20px;">
            We've received your mail-in recovery request. We'll send your <strong>free prepaid shipping label</strong> to this email shortly so you can get your device to us right away.
          </p>
          <div style="background:#f4f7fc;border-radius:10px;padding:20px 24px;margin-bottom:24px;">
            <p style="margin:0 0 10px;font-size:13px;color:#6b7280;text-transform:uppercase;letter-spacing:.07em;font-weight:700;">Your Request Summary</p>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;width:45%;">Drive</td><td style="padding:6px 0;font-size:14px;font-weight:600;">${manufacturer} — ${driveType}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Issue</td><td style="padding:6px 0;font-size:14px;font-weight:600;">${issue}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Service</td><td style="padding:6px 0;font-size:14px;font-weight:600;">${expeditedService?.includes('Expedited') ? 'Expedited Service' : 'Standard Service (3–5 business days)'}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Shipping</td><td style="padding:6px 0;font-size:14px;font-weight:600;">Free prepaid label — both ways</td></tr>
            </table>
          </div>
          <p style="font-size:14px;line-height:1.7;color:#374151;margin:0 0 24px;">
            <strong>What happens next?</strong><br>
            You'll receive your prepaid shipping label by email. Package your device securely and drop it at your nearest FedEx or USPS location. We'll notify you the moment it arrives and send your diagnosis the same day.
          </p>
          <p style="font-size:14px;color:#374151;margin:0 0 24px;">Questions? Call us at <a href="tel:8182728866" style="color:#F5C842;font-weight:700;">818-272-8866</a>.</p>
          <div style="text-align:center;">
            <a href="https://www.fivestardatarecovery.com" style="display:inline-block;background:#F5C842;color:#1a1a1a;padding:13px 32px;border-radius:8px;font-weight:800;text-decoration:none;font-size:15px;">Visit Our Website</a>
          </div>
        </div>
        <div style="background:#f4f7fc;padding:16px 32px;border-radius:0 0 12px 12px;border:1px solid #e8edf4;border-top:none;text-align:center;">
          <p style="margin:0;font-size:12px;color:#9ca3af;">© 2025 Five Star Data Recovery · 818-272-8866 · Glendale, CA</p>
        </div>
      </div>`,
  })

  return { success: true }
})
