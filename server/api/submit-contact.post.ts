export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()

  const mcUrl = config.mcApiUrl || 'http://localhost:3001'
  const mcToken = config.mcApiToken || ''

  try {
    // Get visitor IP
    const ip = getRequestHeader(event, 'x-forwarded-for')?.split(',')[0]?.trim()
      || getRequestHeader(event, 'x-real-ip')
      || ''

    const payload = {
      session_id: body.session_id || null,
      name: body.name || null,
      email: body.email || null,
      phone: body.phone || null,
      reason: body.reason || null,
      message: body.message || null,
      preferred_contact: body.preferred_contact || null,
      ip,
    }

    await $fetch(`${mcUrl}/api/fs-analytics/contact-submission`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    return { ok: true }
  } catch (err: any) {
    console.error('[submit-contact] Failed to save:', err?.message)
    // Don't fail visibly — contact form should still show success to user
    return { ok: true, warn: 'save_failed' }
  }
})
