import { Resend } from 'resend'

const COUNTRY_CODES: Record<string, string> = {
  'United States of America (USA)': 'US', 'Canada': 'CA', 'United Kingdom': 'GB',
  'Australia': 'AU', 'Germany': 'DE', 'France': 'FR', 'Spain': 'ES',
  'Italy': 'IT', 'Japan': 'JP', 'Mexico': 'MX', 'Brazil': 'BR', 'Other': 'US',
}

async function getFedexToken(clientId: string, clientSecret: string): Promise<string> {
  const res = await fetch('https://apis-sandbox.fedex.com/oauth/token', {
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
        contact: { personName: opts.recipientName, phoneNumber: opts.recipientPhone.replace(/\D/g, '') || '0000000000' },
        address: { streetLines: [opts.street], city: opts.city, stateOrProvinceCode: opts.state, postalCode: opts.zip, countryCode: opts.countryCode },
      },
      recipients: [{
        contact: { personName: 'Five Star Data Recovery', phoneNumber: '8182728866', companyName: 'Five Star Data Recovery' },
        address: { streetLines: ['1731 S Brand Blvd'], city: 'Glendale', stateOrProvinceCode: 'CA', postalCode: '91204', countryCode: 'US' },
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

  const res = await fetch('https://apis-sandbox.fedex.com/ship/v1/shipments', {
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
  const fedexClientId = config.fedexClientId || process.env.FEDEX_CLIENT_ID || ''
  const fedexClientSecret = config.fedexClientSecret || process.env.FEDEX_CLIENT_SECRET || ''
  const fedexAccountNumber = config.fedexAccountNumber || process.env.FEDEX_ACCOUNT_NUMBER || ''
  const resendApiKey = config.resendApiKey || process.env.RESEND_API_KEY || ''

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
    const token = await getFedexToken(fedexClientId, fedexClientSecret)
    labelBase64 = await createFedexLabel({
      token, accountNumber: fedexAccountNumber,
      recipientName: fullName, recipientPhone: phone,
      street: streetAddress, city, state, zip, countryCode, serviceType,
    })
  } catch (e: any) {
    console.error('FedEx label error:', e.message)
    labelError = e.message
  }

  const resend = new Resend(resendApiKey)

  // Get sequential case number from MC backend
  let caseRef = `FS-${13710 + Math.floor(Math.random() * 10)}` // fallback
  try {
    const isVercel = !!process.env.VERCEL
    const cnUrl = isVercel
      ? 'https://fivestar.ngrok.app/api/mc-leads/next-case-number'
      : 'http://localhost:3001/api/fs-leads/next-case-number'
    const cnRes = await fetch(cnUrl, { method: 'POST', signal: AbortSignal.timeout(4000) })
    const cnData = await cnRes.json() as any
    if (cnData?.caseNumber) caseRef = cnData.caseNumber
  } catch {}
  const safeName = `${firstName} ${lastName}`.replace(/[^a-zA-Z0-9 ]/g, '').trim()
  const labelFilename = `${safeName} - ${caseRef} - Five Star Data Recovery - Prepaid Shipping Label.pdf`

  // ── Generate packing slip (before emails so we can attach it) ──
  const packingSlipHtmlEarly = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Packing Slip</title>
<style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;font-size:13px;color:#111;background:#fff;padding:32px;max-width:680px;margin:0 auto}.header{display:flex;justify-content:space-between;align-items:flex-start;border-bottom:3px solid #1a1a2e;padding-bottom:16px;margin-bottom:24px}.logo{font-size:20px;font-weight:900;color:#1a1a2e}.logo span{color:#F5C842}.header-right{text-align:right;font-size:12px;color:#555}.section{margin-bottom:20px}.section-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#888;margin-bottom:8px;border-bottom:1px solid #eee;padding-bottom:4px}table{width:100%;border-collapse:collapse}td{padding:5px 8px 5px 0;vertical-align:top}td:first-child{color:#555;width:45%;font-size:12px}td:last-child{font-weight:600}.highlight{background:#f9f5e7;border:1.5px solid #F5C842;border-radius:6px;padding:12px 14px;margin-bottom:20px}.footer{border-top:1px solid #eee;padding-top:14px;margin-top:24px;text-align:center;font-size:11px;color:#888}</style>
</head><body>
<div class="header"><div><div class="logo">FIVE<span>★</span>STAR</div><div style="font-size:11px;color:#555;margin-top:3px;">Data Recovery &middot; 1731 S Brand Blvd, Glendale, CA 91204 &middot; 818-272-8866</div></div><div class="header-right"><div style="font-weight:700;font-size:13px;">PACKING SLIP</div><div>Ref: ${caseRef}</div><div>Date: ${new Date().toLocaleDateString('en-US')}</div><div>Service: ${serviceLabel}</div></div></div>
<div class="highlight"><strong style="font-size:14px;display:block;margin-bottom:4px;">Please include this slip inside your package</strong><p style="font-size:12px;color:#555;line-height:1.5;">This helps our team identify your device immediately upon arrival.</p></div>
<div class="section"><div class="section-label">Customer</div><table><tr><td>Name</td><td>${fullName}</td></tr><tr><td>Email</td><td>${email}</td></tr><tr><td>Phone</td><td>${phone}</td></tr><tr><td>Ship From</td><td>${streetAddress}, ${city}, ${state} ${zip}</td></tr></table></div>
<div class="section"><div class="section-label">Device</div><table><tr><td>Manufacturer</td><td>${manufacturer}</td></tr><tr><td>Drive Type</td><td>${driveType}</td></tr><tr><td>Drive Format</td><td>${driveFormat}</td></tr><tr><td>Drive Size</td><td>${driveSize}</td></tr><tr><td>Issue</td><td>${issue}</td></tr></table></div>
<div class="section"><div class="section-label">Recovery Details</div><table><tr><td>Data to Recover</td><td>${Array.isArray(dataTypes) ? dataTypes.join('; ') : dataTypes}</td></tr><tr><td>Prior Attempts</td><td>${recoveryAttempted}</td></tr>${additionalInfo ? `<tr><td>Notes</td><td>${additionalInfo}</td></tr>` : ''}</table></div>
<div class="section"><div class="section-label">Service</div><table><tr><td>Level</td><td style="font-weight:700;">${expeditedService}</td></tr><tr><td>Transfer Drive</td><td>${transferDrive}</td></tr></table></div>
<div class="section"><div class="section-label">Ship To</div><table><tr><td>Company</td><td style="font-weight:900;">Five Star Data Recovery</td></tr><tr><td>Address</td><td>1731 S Brand Blvd, Glendale, CA 91204</td></tr><tr><td>Phone</td><td>818-272-8866</td></tr></table></div>
<div class="footer"><p>No Data, No Charge &middot; fivestardatarecovery.com &middot; Mon–Fri 10am–6pm &middot; Sat 10am–2pm</p></div>
</body></html>`
  const packingSlipBase64Early = Buffer.from(packingSlipHtmlEarly).toString('base64')
  const slipFilename = `${safeName} - ${caseRef} - Five Star Data Recovery - Packing Slip.pdf`

  const attachments: { filename: string; content: string }[] = []
  if (labelBase64) attachments.push({ filename: labelFilename, content: labelBase64 })
  attachments.push({ filename: slipFilename, content: packingSlipBase64Early })

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

  // ── Generate packing slip HTML ──────────────────────────────
  const packingSlipHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Packing Slip — Five Star Data Recovery</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Arial, sans-serif; font-size: 13px; color: #111; background: #fff; padding: 32px; max-width: 680px; margin: 0 auto; }
  .header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 3px solid #1a1a2e; padding-bottom: 16px; margin-bottom: 24px; }
  .logo { font-size: 20px; font-weight: 900; color: #1a1a2e; }
  .logo span { color: #F5C842; }
  .header-right { text-align: right; font-size: 12px; color: #555; }
  .title { font-size: 18px; font-weight: 900; text-align: center; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 0.08em; color: #1a1a2e; }
  .section { margin-bottom: 20px; }
  .section-label { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #888; margin-bottom: 8px; border-bottom: 1px solid #eee; padding-bottom: 4px; }
  table { width: 100%; border-collapse: collapse; }
  td { padding: 5px 8px 5px 0; vertical-align: top; }
  td:first-child { color: #555; width: 45%; font-size: 12px; }
  td:last-child { font-weight: 600; }
  .highlight { background: #f9f5e7; border: 1.5px solid #F5C842; border-radius: 6px; padding: 12px 14px; margin-bottom: 20px; }
  .highlight strong { font-size: 14px; display: block; margin-bottom: 4px; }
  .highlight p { font-size: 12px; color: #555; line-height: 1.5; }
  .footer { border-top: 1px solid #eee; padding-top: 14px; margin-top: 24px; text-align: center; font-size: 11px; color: #888; }
  .print-note { background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 6px; padding: 10px 14px; font-size: 12px; color: #0369a1; margin-bottom: 20px; }
  @media print { .print-note { display: none; } }
</style>
</head>
<body>
  <div class="header">
    <div>
      <div class="logo">FIVE<span>★</span>STAR</div>
      <div style="font-size:11px;color:#555;margin-top:3px;">Data Recovery</div>
      <div style="font-size:11px;color:#555;">1731 S Brand Blvd, Glendale, CA 91204</div>
      <div style="font-size:11px;color:#555;">818-272-8866</div>
    </div>
    <div class="header-right">
      <div style="font-weight:700;font-size:13px;">PACKING SLIP</div>
      <div>Date: ${new Date().toLocaleDateString('en-US')}</div>
      <div>Service: ${serviceLabel}</div>
    </div>
  </div>

  <div class="print-note">📄 Print this page and place it inside your package before sealing. Use Ctrl+P (or Cmd+P on Mac) to print.</div>

  <div class="highlight">
    <strong>IMPORTANT: Please include this slip inside your package</strong>
    <p>This helps our team identify your device immediately upon arrival and begin processing without delay.</p>
  </div>

  <div class="section">
    <div class="section-label">Customer Information</div>
    <table>
      <tr><td>Name</td><td>${fullName}</td></tr>
      <tr><td>Email</td><td>${email}</td></tr>
      <tr><td>Phone</td><td>${phone}</td></tr>
      <tr><td>Ship From</td><td>${streetAddress}, ${city}, ${state} ${zip}</td></tr>
    </table>
  </div>

  <div class="section">
    <div class="section-label">Device Information</div>
    <table>
      <tr><td>Manufacturer</td><td>${manufacturer}</td></tr>
      <tr><td>Drive Type</td><td>${driveType}</td></tr>
      <tr><td>Drive Format</td><td>${driveFormat}</td></tr>
      <tr><td>Drive Size</td><td>${driveSize}</td></tr>
      <tr><td>Issue</td><td>${issue}</td></tr>
    </table>
  </div>

  <div class="section">
    <div class="section-label">Recovery Details</div>
    <table>
      <tr><td>Data to Recover</td><td>${Array.isArray(dataTypes) ? dataTypes.join('; ') : dataTypes}</td></tr>
      <tr><td>Prior Attempts</td><td>${recoveryAttempted}</td></tr>
      ${additionalInfo ? `<tr><td>Additional Notes</td><td>${additionalInfo}</td></tr>` : ''}
    </table>
  </div>

  <div class="section">
    <div class="section-label">Service Selection</div>
    <table>
      <tr><td>Service Level</td><td style="color:${expeditedService?.includes('Expedited') ? '#b45309' : '#1a1a2e'};font-weight:700;">${expeditedService} — ${serviceLabel}</td></tr>
      <tr><td>Transfer Drive</td><td>${transferDrive}</td></tr>
      ${conditionalRates?.length ? `<tr><td>Conditional Rates</td><td>${(Array.isArray(conditionalRates) ? conditionalRates : [conditionalRates]).join('; ')}</td></tr>` : ''}
    </table>
  </div>

  <div class="section">
    <div class="section-label">Ship To</div>
    <table>
      <tr><td>Company</td><td style="font-weight:900;">Five Star Data Recovery</td></tr>
      <tr><td>Address</td><td>1731 S Brand Blvd</td></tr>
      <tr><td>City/State/ZIP</td><td>Glendale, CA 91204</td></tr>
      <tr><td>Phone</td><td>818-272-8866</td></tr>
    </table>
  </div>

  <div class="footer">
    <p>No Data, No Charge &nbsp;·&nbsp; fivestardatarecovery.com &nbsp;·&nbsp; 818-272-8866</p>
    <p style="margin-top:4px;">Mon–Fri 10am–6pm &nbsp;·&nbsp; Sat 10am–2pm</p>
  </div>
</body>
</html>`

  const packingSlipBase64 = packingSlipBase64Early // used for browser display

  // Save to Mission Control (awaited - Vercel kills fire-and-forget before completion)
  const mcUrl = process.env.MC_API_URL || 'http://localhost:3001'
  try {
    await fetch(`${mcUrl}/api/fs-leads/mailin-submission`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...body }),
      signal: AbortSignal.timeout(5000),
    })
  } catch(e) { console.error('[submit-mailin] MC save failed:', (e as any)?.message) }

  return { success: true, labelBase64, serviceLabel, labelError, packingSlipBase64, caseRef }
})
