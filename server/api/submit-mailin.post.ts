import { Resend } from 'resend'

const COUNTRY_CODES: Record<string, string> = {
  'United States of America (USA)': 'US', 'Canada': 'CA', 'United Kingdom': 'GB',
  'Australia': 'AU', 'Germany': 'DE', 'France': 'FR', 'Spain': 'ES',
  'Italy': 'IT', 'Japan': 'JP', 'Mexico': 'MX', 'Brazil': 'BR', 'Other': 'US',
}

async function getFedexToken(clientId: string, clientSecret: string): Promise<string> {
  const res = await fetch('https://apis.fedex.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    }),
  })
  const data = await res.json() as { access_token?: string }
  if (!data.access_token) throw new Error('FedEx auth failed')
  return data.access_token
}

async function createFedexLabel(opts: {
  token: string, accountNumber: string,
  recipientName: string, recipientPhone: string,
  street: string, city: string, state: string, zip: string, countryCode: string,
  serviceType: string,
}): Promise<string> {
  const today = new Date().toISOString().split('T')[0]
  const body = {
    labelResponseOptions: 'LABEL',
    accountNumber: { value: opts.accountNumber },
    requestedShipment: {
      shipper: {
        contact: { personName: 'Five Star Data Recovery', phoneNumber: '8182728866', companyName: 'Five Star Data Recovery' },
        address: { streetLines: ['1731 S Brand Blvd'], city: 'Glendale', stateOrProvinceCode: 'CA', postalCode: '91204', countryCode: 'US' },
      },
      recipients: [{
        contact: { personName: opts.recipientName, phoneNumber: opts.recipientPhone.replace(/\D/g, '') || '0000000000' },
        address: { streetLines: [opts.street], city: opts.city, stateOrProvinceCode: opts.state, postalCode: opts.zip, countryCode: opts.countryCode },
      }],
      shipDatestamp: today,
      serviceType: opts.serviceType,
      packagingType: 'YOUR_PACKAGING',
      pickupType: 'DROPOFF_AT_FEDEX_LOCATION',
      shippingChargesPayment: {
        paymentType: 'SENDER',
        payor: { responsibleParty: { accountNumber: { value: opts.accountNumber } } },
      },
      labelSpecification: {
        imageType: 'PDF',
        labelStockType: 'PAPER_85X11_TOP_HALF_LABEL',
      },
      requestedPackageLineItems: [{
        weight: { units: 'LB', value: 2 },
        dimensions: { length: 12, width: 10, height: 6, units: 'IN' },
      }],
    },
  }

  const res = await fetch('https://apis.fedex.com/ship/v1/shipments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${opts.token}`, 'X-locale': 'en_US' },
    body: JSON.stringify(body),
  })
  const data = await res.json() as any
  const labelBase64 = data?.output?.transactionShipments?.[0]?.pieceResponses?.[0]?.packageDocuments?.[0]?.encodedLabel
  if (!labelBase64) {
    console.error('FedEx response:', JSON.stringify(data))
    throw new Error('FedEx label generation failed')
  }
  return labelBase64
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()

  const {
    firstName, lastName, email, phone, manufacturer, driveType, driveFormat, driveSize,
    issue, dataTypes, recoveryAttempted, additionalInfo, conditionalRates, expeditedService,
    transferDrive, streetAddress, city, state, zip, country, shippingCarrier, date,
  } = body

  const fullName = `${firstName} ${lastName}`
  const countryCode = COUNTRY_CODES[country] || 'US'
  const serviceType = expeditedService?.includes('Expedited') ? 'PRIORITY_OVERNIGHT' : 'FEDEX_2_DAY'
  const serviceLabel = expeditedService?.includes('Expedited') ? 'FedEx Priority Overnight' : 'FedEx 2Day'

  // ── Generate FedEx label ──────────────────────────────────────
  let labelBase64 = ''
  let labelError = ''
  try {
    const token = await getFedexToken(config.fedexClientId, config.fedexClientSecret)
    labelBase64 = await createFedexLabel({
      token, accountNumber: config.fedexAccountNumber,
      recipientName: fullName, recipientPhone: phone,
      street: streetAddress, city, state, zip, countryCode, serviceType,
    })
  } catch (e: any) {
    console.error('FedEx label error:', e.message)
    labelError = e.message
  }

  const resend = new Resend(config.resendApiKey)
  const attachments = labelBase64 ? [{ filename: 'shipping-label.pdf', content: labelBase64 }] : []

  // ── Email to business ─────────────────────────────────────────
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
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;width:40%;">Name</td><td style="padding:6px 0;font-weight:700;font-size:14px;">${fullName}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Email</td><td style="padding:6px 0;font-size:14px;"><a href="mailto:${email}" style="color:#F5C842;">${email}</a></td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Phone</td><td style="padding:6px 0;font-size:14px;"><a href="tel:${phone}" style="color:#F5C842;">${phone}</a></td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Drive</td><td style="padding:6px 0;font-weight:700;font-size:14px;">${manufacturer} / ${driveType} / ${driveFormat} / ${driveSize}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Issue</td><td style="padding:6px 0;font-weight:700;font-size:14px;">${issue}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Service</td><td style="padding:6px 0;font-weight:700;font-size:14px;color:#F5C842;">${expeditedService} — ${serviceLabel}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Ship From</td><td style="padding:6px 0;font-size:14px;">${streetAddress}, ${city}, ${state} ${zip}, ${country}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Transfer Drive</td><td style="padding:6px 0;font-size:14px;">${transferDrive}</td></tr>
            <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Prior Attempts</td><td style="padding:6px 0;font-size:14px;">${recoveryAttempted}</td></tr>
          </table>
          ${labelError ? `<p style="color:#dc2626;font-size:13px;">⚠ FedEx label generation failed: ${labelError}</p>` : '<p style="color:#22c55e;font-size:13px;">✓ Prepaid label generated and sent to customer</p>'}
        </div>
        <div style="background:#f4f7fc;padding:14px 32px;border-radius:0 0 12px 12px;border:1px solid #e8edf4;border-top:none;text-align:center;">
          <p style="margin:0;font-size:12px;color:#9ca3af;">Five Star Data Recovery · 1731 S Brand Blvd, Glendale, CA 91204 · 818-272-8866</p>
        </div>
      </div>`,
  })

  // ── Confirmation + label to customer ─────────────────────────
  await resend.emails.send({
    from: 'Five Star Data Recovery <noreply@fivestardatarecovery.com>',
    to: [email],
    subject: 'Your prepaid shipping label — Five Star Data Recovery',
    attachments,
    html: `
      <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e;">
        <div style="background:#0f1623;padding:32px;border-radius:12px 12px 0 0;text-align:center;">
          <h1 style="color:#F5C842;margin:0;font-size:24px;">Five Star Data Recovery</h1>
          <p style="color:#8a9bb8;margin:8px 0 0;font-size:14px;">1731 S Brand Blvd, Glendale, CA 91204</p>
        </div>
        <div style="background:#fff;padding:36px 32px;border:1px solid #e8edf4;border-top:none;">
          <h2 style="margin:0 0 12px;font-size:20px;">Hi ${firstName}, here's your shipping label!</h2>
          <p style="font-size:15px;line-height:1.7;color:#374151;margin:0 0 20px;">
            ${labelBase64
              ? 'Your <strong>prepaid ' + serviceLabel + ' label</strong> is attached to this email as a PDF. Print it, attach it to your package, and drop it off at any FedEx location — shipping is completely on us.'
              : "We're preparing your prepaid shipping label and will send it in a separate email shortly. Call us at 818-272-8866 if you need it urgently."
            }
          </p>
          <div style="background:#f4f7fc;border-radius:10px;padding:20px 24px;margin-bottom:24px;">
            <p style="margin:0 0 10px;font-size:13px;color:#6b7280;text-transform:uppercase;letter-spacing:.07em;font-weight:700;">Shipment Summary</p>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;width:45%;">Ship To</td><td style="padding:6px 0;font-size:14px;font-weight:600;">1731 S Brand Blvd, Glendale CA 91204</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Service</td><td style="padding:6px 0;font-size:14px;font-weight:600;">${serviceLabel}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Drive</td><td style="padding:6px 0;font-size:14px;font-weight:600;">${manufacturer} — ${driveType}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280;font-size:14px;">Recovery</td><td style="padding:6px 0;font-size:14px;font-weight:600;">${expeditedService?.includes('Expedited') ? 'Expedited (6–24 hours)' : 'Standard (3–5 business days)'}</td></tr>
            </table>
          </div>
          <p style="font-size:14px;line-height:1.7;color:#374151;margin:0 0 8px;"><strong>Packing tips:</strong></p>
          <ul style="font-size:14px;color:#374151;line-height:1.8;margin:0 0 24px;padding-left:20px;">
            <li>Wrap your drive in bubble wrap or anti-static bag</li>
            <li>Use a sturdy box with padding on all sides</li>
            <li>Do NOT use an envelope or soft mailer</li>
          </ul>
          <p style="font-size:14px;color:#374151;margin:0 0 24px;">Questions? Call <a href="tel:8182728866" style="color:#F5C842;font-weight:700;">818-272-8866</a></p>
          <div style="text-align:center;">
            <a href="https://www.fivestardatarecovery.com" style="display:inline-block;background:#F5C842;color:#1a1a1a;padding:13px 32px;border-radius:8px;font-weight:800;text-decoration:none;font-size:15px;">Visit Our Website</a>
          </div>
        </div>
        <div style="background:#f4f7fc;padding:16px 32px;border-radius:0 0 12px 12px;border:1px solid #e8edf4;border-top:none;text-align:center;">
          <p style="margin:0;font-size:12px;color:#9ca3af;">© 2025 Five Star Data Recovery · 818-272-8866 · Glendale, CA</p>
        </div>
      </div>`,
  })

  return { success: true, labelBase64, serviceLabel, labelError }
})
