import { defineEventHandler, readBody, createError } from 'h3'

// Cache the audience ID for the lifetime of the serverless instance
let cachedAudienceId: string | null = null

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

  // Get or create the audience
  let audienceId = (config.resendAudienceId as string) || cachedAudienceId

  if (!audienceId) {
    // List existing audiences and find ours, or create it
    const listRes = await fetch('https://api.resend.com/audiences', {
      headers: { Authorization: `Bearer ${apiKey}` },
    })
    const listData = await listRes.json()
    const existing = listData?.data?.find((a: { name: string; id: string }) =>
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

  // Add the contact
  const contactRes = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, unsubscribed: false }),
  })

  const contactData = await contactRes.json()

  // Treat "already exists" as a success
  if (!contactRes.ok) {
    const msg = contactData?.message || ''
    if (msg.toLowerCase().includes('already')) {
      return { success: true, alreadySubscribed: true }
    }
    throw createError({ statusCode: 500, statusMessage: 'Could not subscribe. Please try again.' })
  }

  return { success: true }
})
