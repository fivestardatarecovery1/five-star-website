import { defineEventHandler, readBody, createError } from 'h3'

// Cache the audience ID for the lifetime of the serverless instance
let cachedAudienceId: string | null = null

const FROM_EMAIL = 'Five Star Data Recovery <hello@fivestardatarecovery.com>'
const NOTIFY_EMAIL = 'info@fivestardatarecovery.com'
const SITE_URL = 'https://fivestardatarecovery.com'

function welcomeEmailHtml(email: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to Five Star Data Recovery</title>
</head>
<body style="margin:0;padding:0;background:#0A0C14;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0A0C14;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#12141F;border-radius:12px;overflow:hidden;border:1px solid #1E2235;">
          <!-- Header -->
          <tr>
            <td style="background:#12141F;padding:36px 40px 28px;border-bottom:1px solid #1E2235;text-align:center;">
              <div style="font-size:22px;font-weight:700;color:#F5C842;letter-spacing:0.5px;">⭐ Five Star Data Recovery</div>
              <div style="font-size:12px;color:#6B7280;margin-top:4px;letter-spacing:1px;text-transform:uppercase;">Glendale, CA · 818-272-8866</div>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <h1 style="margin:0 0 16px;font-size:26px;font-weight:700;color:#F5F5F5;line-height:1.3;">
                You're on the list! 🎉
              </h1>
              <p style="margin:0 0 20px;font-size:15px;color:#9CA3AF;line-height:1.7;">
                Thanks for subscribing to the Five Star Data Recovery blog. You'll get expert tips on data recovery, storage best practices, and insights from our lab — delivered straight to your inbox.
              </p>
              <p style="margin:0 0 28px;font-size:15px;color:#9CA3AF;line-height:1.7;">
                In the meantime, if you're dealing with a data emergency right now, our team is ready to help.
              </p>
              <div style="text-align:center;margin-bottom:32px;">
                <a href="${SITE_URL}/instant-quote" style="display:inline-block;background:#F5C842;color:#0A0C14;font-size:15px;font-weight:700;padding:14px 32px;border-radius:8px;text-decoration:none;letter-spacing:0.3px;">
                  Get an Instant Quote
                </a>
              <br/><br/>
              <a href="${SITE_URL}/blog" style="display:inline-block;background:transparent;color:#F5C842;font-size:14px;font-weight:600;padding:10px 24px;border-radius:8px;text-decoration:none;border:1px solid #F5C842;letter-spacing:0.3px;">
                  Browse the Blog →
                </a>
              </div>
              <hr style="border:none;border-top:1px solid #1E2235;margin:0 0 24px;" />
              <p style="margin:0;font-size:13px;color:#6B7280;line-height:1.6;">
                📍 1731 S Brand Blvd., Glendale, CA 91204<br />
                📞 <a href="tel:8182728866" style="color:#F5C842;text-decoration:none;">818-272-8866</a><br />
                🌐 <a href="${SITE_URL}" style="color:#F5C842;text-decoration:none;">fivestardatarecovery.com</a>
              </p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#0A0C14;padding:20px 40px;text-align:center;border-top:1px solid #1E2235;">
              <p style="margin:0;font-size:12px;color:#4B5563;">
                You're receiving this because you subscribed at fivestardatarecovery.com.<br />
                To unsubscribe, reply with "unsubscribe" in the subject line.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

function notifyEmailHtml(subscriberEmail: string): string {
  const now = new Date().toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
    dateStyle: 'medium',
    timeStyle: 'short',
  })
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /><title>New Blog Subscriber</title></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#fff;border-radius:10px;overflow:hidden;border:1px solid #e5e7eb;">
          <tr>
            <td style="background:#F5C842;padding:20px 32px;">
              <div style="font-size:18px;font-weight:700;color:#0A0C14;">⭐ New Blog Subscriber</div>
            </td>
          </tr>
          <tr>
            <td style="padding:28px 32px;">
              <p style="margin:0 0 12px;font-size:15px;color:#374151;">A new visitor just subscribed to the Five Star Data Recovery blog.</p>
              <table cellpadding="0" cellspacing="0" style="width:100%;background:#f3f4f6;border-radius:8px;overflow:hidden;">
                <tr>
                  <td style="padding:16px 20px;font-size:14px;color:#6B7280;width:110px;">Email</td>
                  <td style="padding:16px 20px;font-size:14px;font-weight:600;color:#111827;">${subscriberEmail}</td>
                </tr>
                <tr style="background:#ebebeb;">
                  <td style="padding:16px 20px;font-size:14px;color:#6B7280;">Time</td>
                  <td style="padding:16px 20px;font-size:14px;color:#111827;">${now} PT</td>
                </tr>
              </table>
              <p style="margin:20px 0 0;font-size:13px;color:#9CA3AF;">
                They've been added to the <strong>Five Star Data Recovery – Blog Subscribers</strong> audience in Resend.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const email = (body?.email || '').trim().toLowerCase()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid email address' })
  }

  const config = useRuntimeConfig()
  const apiKey = config.resendApiKey

  if (!apiKey) {
    throw createError({ statusCode: 500, statusMessage: 'Email service not configured' })
  }

  // ─── Get or create the audience ────────────────────────────────────────────
  let audienceId = (config.resendAudienceId as string) || cachedAudienceId

  if (!audienceId) {
    const listRes = await fetch('https://api.resend.com/audiences', {
      headers: { Authorization: `Bearer ${apiKey}` },
    })
    const listData = await listRes.json()
    const existing = listData?.data?.find(
      (a: { name: string; id: string }) =>
        a.name === 'Five Star Data Recovery - Blog Subscribers'
    )

    if (existing) {
      audienceId = existing.id
    } else {
      const createRes = await fetch('https://api.resend.com/audiences', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'Five Star Data Recovery - Blog Subscribers' }),
      })
      const created = await createRes.json()
      audienceId = created?.id
    }

    if (audienceId) cachedAudienceId = audienceId
  }

  if (!audienceId) {
    throw createError({ statusCode: 500, statusMessage: 'Could not initialize mailing list' })
  }

  // ─── Add the contact ────────────────────────────────────────────────────────
  const contactRes = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, unsubscribed: false }),
  })

  const contactData = await contactRes.json()

  const isNew = contactRes.ok
  const alreadyExists = !contactRes.ok &&
    (contactData?.message || '').toLowerCase().includes('already')

  if (!isNew && !alreadyExists) {
    throw createError({ statusCode: 500, statusMessage: 'Could not subscribe. Please try again.' })
  }

  // ─── Fire emails in parallel (non-blocking to subscriber UX) ───────────────
  // Only send welcome email for genuinely new subscribers
  const emailPromises: Promise<Response>[] = []

  if (isNew) {
    // 1. Welcome email → subscriber
    emailPromises.push(
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [email],
          subject: "You're subscribed — Five Star Data Recovery Blog",
          html: welcomeEmailHtml(email),
        }),
      })
    )

    // 2. Notification email → info@fivestardatarecovery.com
    emailPromises.push(
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [NOTIFY_EMAIL],
          subject: `New subscriber: ${email}`,
          html: notifyEmailHtml(email),
        }),
      })
    )
  }

  // Fire and forget — don't fail the subscription if emails error
  await Promise.allSettled(emailPromises)

  return { success: true, alreadySubscribed: !isNew }
})
