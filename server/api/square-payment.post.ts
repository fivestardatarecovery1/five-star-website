import crypto from 'node:crypto'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { sourceId, amountCents, note } = body

  if (!sourceId || !amountCents || amountCents <= 0) {
    throw createError({ statusCode: 400, statusMessage: 'Missing payment details.' })
  }

  const accessToken = process.env.SQUARE_ACCESS_TOKEN || 'EAAAl7brzUy0iwOjbTjt4NVU2xhHjG1zNYLs5SAwjy6HLpQDlwpAC_dPVrzfdVh-'
  const locationId = 'DNWSXVRTKAHZ9'

  try {
    const response = await $fetch<any>('https://connect.squareup.com/v2/payments', {
      method: 'POST',
      headers: {
        'Square-Version': '2025-01-23',
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        source_id: sourceId,
        idempotency_key: crypto.randomUUID(),
        amount_money: {
          amount: amountCents,
          currency: 'USD',
        },
        location_id: locationId,
        note: note || 'Five Star Data Recovery — Express Drop-Off Upfront Fee',
      }),
    })

    return { success: true, payment: response.payment }
  } catch (err: any) {
    const squareErrors = err?.data?.errors || []
    const msg = squareErrors[0]?.detail || squareErrors[0]?.code || 'Payment failed.'
    throw createError({ statusCode: 402, statusMessage: msg })
  }
})
