// TEMPORARY DEBUG ENDPOINT — remove after FedEx issue resolved
export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const clientId = config.fedexClientId || process.env.FEDEX_CLIENT_ID || ''
  const clientSecret = config.fedexClientSecret || process.env.FEDEX_CLIENT_SECRET || ''
  const accountNumber = config.fedexAccountNumber || process.env.FEDEX_ACCOUNT_NUMBER || ''

  // Step 1: Get token
  const tokenRes = await fetch('https://apis.fedex.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'client_credentials', client_id: clientId, client_secret: clientSecret }),
  })
  const tokenData = await tokenRes.json() as any
  if (!tokenData.access_token) return { error: 'Token failed', tokenData }

  const token = tokenData.access_token

  // Step 2: Attempt a shipment
  const today = new Date().toISOString().split('T')[0]
  const body = {
    labelResponseOptions: 'LABEL',
    accountNumber: { value: accountNumber },
    requestedShipment: {
      shipper: {
        contact: { personName: 'Test User', phoneNumber: '7025255000' },
        address: { streetLines: ['123 Test St'], city: 'Las Vegas', stateOrProvinceCode: 'NV', postalCode: '89101', countryCode: 'US' },
      },
      recipients: [{
        contact: { personName: 'Five Star Data Recovery', phoneNumber: '8182728866' },
        address: { streetLines: ['1731 S Brand Blvd'], city: 'Glendale', stateOrProvinceCode: 'CA', postalCode: '91204', countryCode: 'US' },
      }],
      shipDatestamp: today,
      serviceType: 'FEDEX_2_DAY',
      packagingType: 'YOUR_PACKAGING',
      pickupType: 'DROPOFF_AT_FEDEX_LOCATION',
      shippingChargesPayment: {
        paymentType: 'SENDER',
        payor: { responsibleParty: { accountNumber: { value: accountNumber } } },
      },
      labelSpecification: { imageType: 'PDF', labelStockType: 'PAPER_85X11_TOP_HALF_LABEL' },
      requestedPackageLineItems: [{ weight: { units: 'LB', value: 2 } }],
    },
  }

  const shipRes = await fetch('https://apis.fedex.com/ship/v1/shipments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`, 'X-locale': 'en_US' },
    body: JSON.stringify(body),
  })
  const shipData = await shipRes.json() as any

  // Return full response minus encoded label (too large)
  const output = shipData?.output
  if (output?.transactionShipments) {
    for (const s of output.transactionShipments) {
      for (const p of s?.pieceResponses || []) {
        for (const d of p?.packageDocuments || []) {
          d.encodedLabel = d.encodedLabel ? '[LABEL_DATA_PRESENT]' : '[NO_LABEL]'
        }
      }
    }
  }

  return {
    httpStatus: shipRes.status,
    accountNumber,
    clientIdPrefix: clientId.substring(0, 8) + '...',
    fullResponse: shipData,
  }
})
