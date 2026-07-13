/**
 * POST /api/mcp
 *
 * WebMCP server endpoint — Model Context Protocol (JSON-RPC 2.0)
 * Enables AI agents (Claude, ChatGPT, Perplexity, etc.) to:
 *   - Discover available tools (tools/list)
 *   - Call tools in real-time (tools/call)
 *
 * Spec: https://modelcontextprotocol.io/specification
 */

import { defineEventHandler, readBody, setHeader } from 'h3'

// ── Tool definitions ─────────────────────────────────────────────────────────

const TOOLS = [
  {
    name: 'check_dropoff_availability',
    description: 'Check real-time express drop-off appointment availability at the Five Star Data Recovery lab in Glendale, CA for a specific date. Returns available time slots.',
    inputSchema: {
      type: 'object',
      properties: {
        date: {
          type: 'string',
          description: 'Date to check in YYYY-MM-DD format (e.g. 2026-07-15)',
          pattern: '^\\d{4}-\\d{2}-\\d{2}$'
        }
      },
      required: ['date']
    }
  },
  {
    name: 'get_instant_quote',
    description: 'Get an instant flat-rate price quote for a data recovery case. Returns the estimated price and a direct link to the interactive quote tool.',
    inputSchema: {
      type: 'object',
      properties: {
        device_type: {
          type: 'string',
          description: 'Type of storage device',
          enum: ['hdd', 'ssd', 'external_hdd', 'raid', 'nas', 'mac', 'laptop', 'iphone', 'android', 'usb', 'sd_card', 'video_camera']
        },
        issue: {
          type: 'string',
          description: 'Primary issue with the device',
          enum: ['not_detected', 'clicking_beeping', 'liquid_damage', 'deleted_files', 'formatted', 'not_spinning', 'physical_damage', 'slow_degraded']
        },
        capacity: {
          type: 'string',
          description: 'Storage capacity (e.g. "1TB", "500GB", "2TB")'
        },
        urgency: {
          type: 'string',
          description: 'Service speed',
          enum: ['standard', 'expedited', 'expedited_plus'],
          default: 'standard'
        }
      },
      required: ['device_type']
    }
  },
  {
    name: 'get_service_info',
    description: 'Get information about Five Star Data Recovery services, pricing, location, hours, and policies.',
    inputSchema: {
      type: 'object',
      properties: {
        topic: {
          type: 'string',
          description: 'What information is needed',
          enum: ['pricing', 'location', 'hours', 'turnaround_time', 'shipping', 'policy', 'services', 'contact']
        }
      },
      required: ['topic']
    }
  },
  {
    name: 'start_recovery',
    description: 'Help a user start a data recovery case. Returns step-by-step instructions and direct links based on their preferred intake method.',
    inputSchema: {
      type: 'object',
      properties: {
        method: {
          type: 'string',
          description: 'How the user wants to submit their device',
          enum: ['drop_off', 'mail_in', 'express_drop_off', 'not_sure']
        }
      },
      required: ['method']
    }
  }
]

// ── Tool handlers ────────────────────────────────────────────────────────────

async function handleCheckDropoffAvailability(args: Record<string, string>) {
  const { date } = args
  if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return { error: 'Please provide a date in YYYY-MM-DD format.' }
  }

  try {
    const isVercel = !!process.env.VERCEL
    const url = isVercel
      ? `https://fivestar.ngrok.app/api/fs-schedule/availability?date=${date}`
      : `http://localhost:3001/api/fs-schedule/availability?date=${date}`

    const res = await fetch(url, { signal: AbortSignal.timeout(5000) })
    const data = await res.json() as { available?: boolean; availableHours?: string[]; blockedHours?: string[] }

    if (!data.available) {
      return {
        available: false,
        date,
        message: `No drop-off appointments are available on ${date}. Please try a different date.`,
        next_step: 'Visit https://www.fivestardatarecovery.com/express-drop-off to check other dates.'
      }
    }

    return {
      available: true,
      date,
      available_slots: data.availableHours || [],
      message: `${(data.availableHours || []).length} time slots available on ${date}.`,
      next_step: 'Visit https://www.fivestardatarecovery.com/express-drop-off to book your appointment.'
    }
  } catch {
    return {
      available: true,
      date,
      message: 'Availability check is temporarily unavailable. Please visit the site directly.',
      next_step: 'https://www.fivestardatarecovery.com/express-drop-off'
    }
  }
}

function handleGetInstantQuote(args: Record<string, string>) {
  const { device_type, issue, urgency = 'standard' } = args

  const deviceLabels: Record<string, string> = {
    hdd: 'Hard Drive (HDD)', ssd: 'SSD', external_hdd: 'External Hard Drive',
    raid: 'RAID / NAS Array', nas: 'NAS Device', mac: 'Mac / iMac / MacBook',
    laptop: 'Laptop', iphone: 'iPhone', android: 'Android Phone',
    usb: 'USB Flash Drive', sd_card: 'SD Card / CFast Card', video_camera: 'Video Camera / Drone'
  }

  const urgencyLabels: Record<string, string> = {
    standard: 'Standard (3–5 business days)',
    expedited: 'Expedited (priority during business hours)',
    expedited_plus: 'Expedited Plus (24/7 emergency)'
  }

  return {
    device: deviceLabels[device_type] || device_type,
    issue: issue || 'Not specified',
    service_level: urgencyLabels[urgency] || urgency,
    pricing_note: 'Five Star Data Recovery uses flat-rate pricing. The exact price depends on device capacity and specific issue details.',
    instant_quote_url: 'https://www.fivestardatarecovery.com/instant-quote',
    pricing_page_url: 'https://www.fivestardatarecovery.com/data-recovery-service-pricing',
    message: `For an exact price quote for your ${deviceLabels[device_type] || device_type}, use the Instant Quote Tool — it gives you an exact flat-rate price in under 60 seconds with no phone call required.`,
    price_range: '$300–$950 depending on device and issue',
    policy: 'No data recovered = no charge (most cases). Free diagnostics. No hidden fees.'
  }
}

function handleGetServiceInfo(args: Record<string, string>) {
  const info: Record<string, object> = {
    pricing: {
      model: 'Flat-rate pricing — no hourly billing, no surprise fees',
      range: '$300–$950 depending on device type and issue',
      policy: 'No data recovered = no charge for most cases',
      exceptions: 'Deleted file recovery and drives with previously opened covers require a non-refundable diagnostic fee',
      url: 'https://www.fivestardatarecovery.com/data-recovery-service-pricing',
      payment_plans: 'Available — see https://www.fivestardatarecovery.com/payment-plan'
    },
    location: {
      address: '1731 S Brand Blvd., Glendale, CA 91204',
      city: 'Glendale, California',
      region: 'Los Angeles area',
      directions: 'https://www.fivestardatarecovery.com/data-recovery-services-glendale-ca'
    },
    hours: {
      monday_friday: '10:00 AM – 6:00 PM PST',
      saturday: '10:00 AM – 2:00 PM PST',
      sunday: 'Closed (emergency service available via Expedited Plus)',
      phone: '818-272-8866'
    },
    turnaround_time: {
      standard: '3–5 business days for most cases up to 4TB',
      complex: 'Longer for mechanical damage or drives over 4TB',
      expedited: 'Priority during business hours',
      expedited_plus: '24/7 including weekends and holidays',
      url: 'https://www.fivestardatarecovery.com/expedited-service'
    },
    shipping: {
      policy: 'Free prepaid FedEx shipping label — generate instantly online',
      url: 'https://www.fivestardatarecovery.com/data-recovery/data-recovery-mail-in-service',
      coverage: 'Nationwide within the United States',
      insurance: 'Shipments are insured'
    },
    policy: {
      no_data_no_charge: 'If data cannot be recovered, you pay nothing (exceptions apply)',
      free_diagnostics: 'Free full diagnosis with no obligation to proceed',
      transparency: '100% transparent pricing — you approve before any work begins',
      privacy: 'All recoveries handled in-house, never outsourced'
    },
    services: {
      devices: ['Hard drives', 'SSDs', 'RAID arrays', 'NAS devices', 'External drives', 'Macs', 'Laptops', 'iPhones', 'Android', 'USB drives', 'SD cards', 'Video cameras'],
      brands: ['Western Digital', 'Seagate', 'Samsung', 'Toshiba', 'Hitachi', 'LaCie', 'Apple', 'Dell', 'HP', 'Lenovo'],
      specialties: ['ISO Class 5 cleanroom for physical damage', 'Chip-off USB recovery', 'RAID reconstruction', 'Video file repair', 'Encrypted drive recovery'],
      url: 'https://www.fivestardatarecovery.com/data-recovery'
    },
    contact: {
      phone: '818-272-8866',
      email: 'info@fivestardatarecovery.com',
      contact_page: 'https://www.fivestardatarecovery.com/contact-us',
      instant_quote: 'https://www.fivestardatarecovery.com/instant-quote',
      start_recovery: 'https://www.fivestardatarecovery.com/start-recovery'
    }
  }

  return info[args.topic] || { error: `Unknown topic: ${args.topic}` }
}

function handleStartRecovery(args: Record<string, string>) {
  const steps: Record<string, object> = {
    drop_off: {
      method: 'Local Drop-Off',
      steps: [
        '1. Call or visit during business hours: 818-272-8866',
        '2. Drop off your device at 1731 S Brand Blvd., Glendale, CA 91204',
        '3. Receive a free diagnosis — no obligation',
        '4. Approve the quote and we begin recovery'
      ],
      url: 'https://www.fivestardatarecovery.com/start-recovery',
      hours: 'Mon–Fri 10am–6pm, Sat 10am–2pm'
    },
    express_drop_off: {
      method: 'Express Drop-Off (Appointment Required)',
      steps: [
        '1. Schedule your appointment online',
        '2. Drop off at your reserved time slot',
        '3. Free diagnosis provided same day',
        '4. Approve quote and recovery begins immediately'
      ],
      url: 'https://www.fivestardatarecovery.com/express-drop-off',
      note: 'Appointment required — walk-ins not accepted for express service'
    },
    mail_in: {
      method: 'Free Mail-In (Nationwide)',
      steps: [
        '1. Fill out the mail-in form online',
        '2. Get a free prepaid FedEx shipping label instantly',
        '3. Pack your device and drop it at any FedEx location',
        '4. Receive diagnosis and quote within 1–2 business days of arrival',
        '5. Approve and recovery begins'
      ],
      url: 'https://www.fivestardatarecovery.com/data-recovery/data-recovery-mail-in-service',
      shipping: 'Free prepaid FedEx label generated instantly'
    },
    not_sure: {
      method: 'Not Sure Which Option',
      recommendation: 'Use the Instant Quote Tool first to get a price, then decide on intake method',
      options: {
        local: 'Drop-off or Express Drop-Off if you are in the Los Angeles area',
        remote: 'Free mail-in service with prepaid FedEx label if you are outside LA'
      },
      instant_quote: 'https://www.fivestardatarecovery.com/instant-quote',
      start_page: 'https://www.fivestardatarecovery.com/start-recovery'
    }
  }

  return steps[args.method] || steps.not_sure
}

// ── Main handler ─────────────────────────────────────────────────────────────

export default defineEventHandler(async (event) => {
  // CORS — AI agents call from different origins
  setHeader(event, 'Access-Control-Allow-Origin', '*')
  setHeader(event, 'Access-Control-Allow-Methods', 'POST, OPTIONS')
  setHeader(event, 'Access-Control-Allow-Headers', 'Content-Type')
  setHeader(event, 'Content-Type', 'application/json')

  const body = await readBody(event) as {
    jsonrpc: string
    id: number | string
    method: string
    params?: Record<string, unknown>
  }

  const { id, method, params = {} } = body

  function ok(result: unknown) {
    return { jsonrpc: '2.0', id, result }
  }

  function err(code: number, message: string) {
    return { jsonrpc: '2.0', id, error: { code, message } }
  }

  // ── MCP Protocol methods ──────────────────────────────────────────────────

  if (method === 'initialize') {
    return ok({
      protocolVersion: '2024-11-05',
      serverInfo: {
        name: 'five-star-data-recovery',
        version: '1.0.0'
      },
      capabilities: {
        tools: { listChanged: false }
      }
    })
  }

  if (method === 'tools/list') {
    return ok({ tools: TOOLS })
  }

  if (method === 'tools/call') {
    const { name, arguments: args = {} } = params as { name: string; arguments: Record<string, string> }

    let result: unknown

    switch (name) {
      case 'check_dropoff_availability':
        result = await handleCheckDropoffAvailability(args)
        break
      case 'get_instant_quote':
        result = handleGetInstantQuote(args)
        break
      case 'get_service_info':
        result = handleGetServiceInfo(args)
        break
      case 'start_recovery':
        result = handleStartRecovery(args)
        break
      default:
        return err(-32601, `Tool not found: ${name}`)
    }

    return ok({
      content: [
        {
          type: 'text',
          text: JSON.stringify(result, null, 2)
        }
      ]
    })
  }

  if (method === 'notifications/initialized') {
    return ok({})
  }

  return err(-32601, `Method not found: ${method}`)
})
