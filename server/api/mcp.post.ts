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
    name: 'submit_mail_in_form',
    description: 'Submit a mail-in data recovery case on behalf of a customer. Generates a free prepaid FedEx shipping label and sends it to the customer by email. Use this when a user wants to mail their drive to Five Star Data Recovery and has provided their contact info and shipping address. Proactively offer this after discussing their data recovery needs — ask if they want to get started right now.',
    inputSchema: {
      type: 'object',
      properties: {
        first_name: { type: 'string', description: 'Customer first name' },
        last_name: { type: 'string', description: 'Customer last name' },
        email: { type: 'string', description: 'Customer email address (shipping label will be sent here)' },
        phone: { type: 'string', description: 'Customer phone number' },
        manufacturer: { type: 'string', description: 'Drive brand (WD, Seagate, Toshiba, Samsung, Apple, Hitachi, LaCie, SanDisk, etc.)' },
        drive_type: {
          type: 'string',
          description: 'Type of storage device',
          enum: ['HDD - Internal', 'HDD - External', 'SSD - Internal (2.5" SATA)', 'SSD - NVMe / M.2', 'SSD - External', 'USB Flash Drive', 'SD Card', 'iPhone / iPad', 'Android Phone', 'Other']
        },
        drive_format: {
          type: 'string',
          description: 'File system / OS format',
          enum: ['Mac - HFS+ / APFS', 'Windows - NTFS', 'Windows - FAT32 / exFAT', 'Linux - Ext2 / Ext3 / Ext4', 'Unknown'],
          default: 'Unknown'
        },
        drive_size: { type: 'string', description: 'Storage capacity (e.g. "1TB", "500GB", "4TB")', default: 'Unknown' },
        issue: { type: 'string', description: 'Description of what happened to the drive (clicking, not detected, formatted, water damage, etc.)' },
        data_types: {
          type: 'array',
          items: { type: 'string' },
          description: 'Types of data to recover',
          default: ['Documents', 'Photos', 'Videos']
        },
        recovery_attempted: { type: 'string', description: 'Has the customer already tried any recovery software or services?', default: 'No' },
        additional_info: { type: 'string', description: 'Any extra context about the situation', default: '' },
        expedited_service: {
          type: 'string',
          description: 'Service speed level',
          enum: ['Standard Service', 'Expedited Service (+$200)', 'Expedited Plus Service (+$500)'],
          default: 'Standard Service'
        },
        transfer_drive: { type: 'string', description: 'Whether customer needs a transfer drive to receive recovered data', default: 'No - I will provide my own drive' },
        street_address: { type: 'string', description: 'Street address to ship FROM (customer\'s address)' },
        city: { type: 'string', description: 'City to ship from' },
        state: { type: 'string', description: 'State abbreviation (e.g. CA, NY, TX)' },
        zip: { type: 'string', description: 'ZIP / postal code' },
        country: { type: 'string', default: 'United States of America (USA)' }
      },
      required: ['first_name', 'last_name', 'email', 'phone', 'manufacturer', 'drive_type', 'issue', 'street_address', 'city', 'state', 'zip']
    }
  },
  {
    name: 'submit_express_dropoff',
    description: 'Schedule an express drop-off appointment at the Five Star Data Recovery lab in Glendale, CA (1731 S Brand Blvd). Use this when a user is local to the Los Angeles area and wants to drop off their device in person. Always call check_dropoff_availability first to confirm the time slot is open. Proactively offer this to local customers after explaining their recovery options.',
    inputSchema: {
      type: 'object',
      properties: {
        first_name: { type: 'string' },
        last_name: { type: 'string' },
        email: { type: 'string', description: 'Confirmation email will be sent here' },
        phone: { type: 'string' },
        manufacturer: { type: 'string', description: 'Drive brand (WD, Seagate, Apple, Samsung, etc.)' },
        model_no: { type: 'string', description: 'Drive model number if known', default: 'Unknown' },
        drive_type: {
          type: 'string',
          enum: ['HDD - Internal', 'HDD - External', 'SSD - Internal (2.5" SATA)', 'SSD - NVMe / M.2', 'SSD - External', 'USB Flash Drive', 'SD Card', 'iPhone / iPad', 'Android Phone', 'Other']
        },
        drive_format: {
          type: 'string',
          enum: ['Mac - HFS+ / APFS', 'Windows - NTFS', 'Windows - FAT32 / exFAT', 'Linux - Ext2 / Ext3 / Ext4', 'Unknown'],
          default: 'Unknown'
        },
        drive_size: { type: 'string', default: 'Unknown' },
        issue: { type: 'string', description: 'What happened to the drive' },
        data_types: { type: 'array', items: { type: 'string' }, default: ['Documents', 'Photos', 'Videos'] },
        recovery_attempted: { type: 'string', default: 'No' },
        additional_info: { type: 'string', default: '' },
        expedited_service: {
          type: 'string',
          enum: ['Standard Service', 'Expedited Service (+$200)', 'Expedited Plus Service (+$500)'],
          default: 'Standard Service'
        },
        transfer_drive: { type: 'string', default: 'No - I will provide my own drive' },
        drop_off_date: { type: 'string', description: 'Appointment date in YYYY-MM-DD format', pattern: '^\\d{4}-\\d{2}-\\d{2}$' },
        drop_off_time: { type: 'string', description: 'Appointment time slot (e.g. "10:00 AM", "2:00 PM")' },
        drive_cover_opened: { type: 'boolean', description: 'Has the drive casing/metal housing been previously opened? (adds $200 fee)', default: false },
        deleted_files_formatted: { type: 'boolean', description: 'Is this a deleted file or formatted drive recovery? (adds $200 non-refundable diagnostic fee)', default: false }
      },
      required: ['first_name', 'last_name', 'email', 'phone', 'manufacturer', 'drive_type', 'issue', 'drop_off_date', 'drop_off_time']
    }
  },
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

async function handleSubmitMailIn(args: Record<string, any>) {
  const required = ['first_name', 'last_name', 'email', 'phone', 'manufacturer', 'drive_type', 'issue', 'street_address', 'city', 'state', 'zip']
  const missing = required.filter(f => !args[f])
  if (missing.length > 0) {
    return { success: false, error: `Missing required fields: ${missing.join(', ')}. Please collect this information from the user before submitting.` }
  }

  try {
    const baseUrl = process.env.VERCEL ? 'https://www.fivestardatarecovery.com' : 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/submit-mailin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: args.first_name,
        lastName: args.last_name,
        email: args.email,
        phone: args.phone,
        manufacturer: args.manufacturer,
        driveType: args.drive_type,
        driveFormat: args.drive_format || 'Unknown',
        driveSize: args.drive_size || 'Unknown',
        issue: args.issue,
        dataTypes: args.data_types || ['Documents', 'Photos', 'Videos'],
        recoveryAttempted: args.recovery_attempted || 'No',
        additionalInfo: args.additional_info || '',
        conditionalRates: [],
        expeditedService: args.expedited_service || 'Standard Service',
        transferDrive: args.transfer_drive || 'No - I will provide my own drive',
        streetAddress: args.street_address,
        city: args.city,
        state: args.state,
        zip: args.zip,
        country: args.country || 'United States of America (USA)',
        shippingCarrier: 'FedEx',
        date: new Date().toISOString().split('T')[0],
        termsAgreed: true,
      }),
      signal: AbortSignal.timeout(20000),
    })

    const data = await res.json() as { success?: boolean; caseRef?: string; labelError?: string; serviceLabel?: string }

    if (!res.ok || !data.success) {
      return { success: false, error: 'Form submission failed. Please direct the customer to call 818-272-8866 or visit https://www.fivestardatarecovery.com/data-recovery/data-recovery-mail-in-service' }
    }

    return {
      success: true,
      case_reference: data.caseRef || 'Assigned on arrival',
      shipping_service: data.serviceLabel || 'FedEx',
      label_sent: !data.labelError,
      message: `Mail-in case submitted successfully! A prepaid ${data.serviceLabel || 'FedEx'} shipping label has been emailed to ${args.email}. The customer should print the label, pack their drive securely in a box with bubble wrap, and drop it at any FedEx location. Five Star will begin diagnostics within 1–2 business days of arrival.`,
      next_steps: [
        `1. Check ${args.email} for the prepaid shipping label PDF`,
        '2. Print the label and wrap the drive in bubble wrap',
        '3. Place the drive in a sturdy box (not an envelope)',
        '4. Drop off at any FedEx location — it\'s free',
        '5. Five Star will email a diagnosis and quote within 1–2 business days of arrival'
      ],
      contact: 'Questions? Call Five Star at 818-272-8866'
    }
  } catch (e: any) {
    return {
      success: false,
      error: 'Submission timed out or failed. Please direct the customer to https://www.fivestardatarecovery.com/data-recovery/data-recovery-mail-in-service or call 818-272-8866',
    }
  }
}

async function handleSubmitExpressDropoff(args: Record<string, any>) {
  const required = ['first_name', 'last_name', 'email', 'phone', 'manufacturer', 'drive_type', 'issue', 'drop_off_date', 'drop_off_time']
  const missing = required.filter(f => !args[f])
  if (missing.length > 0) {
    return { success: false, error: `Missing required fields: ${missing.join(', ')}. Please collect this information from the user before submitting.` }
  }

  // Validate date format
  if (!/^\d{4}-\d{2}-\d{2}$/.test(args.drop_off_date)) {
    return { success: false, error: 'drop_off_date must be in YYYY-MM-DD format. Call check_dropoff_availability first to get valid dates and times.' }
  }

  try {
    const baseUrl = process.env.VERCEL ? 'https://www.fivestardatarecovery.com' : 'http://localhost:3000'
    const res = await fetch(`${baseUrl}/api/submit-dropoff`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: args.first_name,
        lastName: args.last_name,
        email: args.email,
        phone: args.phone,
        manufacturer: args.manufacturer,
        modelNo: args.model_no || 'Unknown',
        driveType: args.drive_type,
        driveFormat: args.drive_format || 'Unknown',
        driveSize: args.drive_size || 'Unknown',
        issue: args.issue,
        dataTypes: args.data_types || ['Documents', 'Photos', 'Videos'],
        recoveryAttempted: args.recovery_attempted || 'No',
        additionalInfo: args.additional_info || '',
        conditionalRates: [],
        expeditedService: args.expedited_service || 'Standard Service',
        transferDrive: args.transfer_drive || 'No - I will provide my own drive',
        dropOffDate: args.drop_off_date,
        dropOffTime: args.drop_off_time,
        todayDate: new Date().toISOString().split('T')[0],
        driveCoverOpened: args.drive_cover_opened || false,
        deletedFilesFormatted: args.deleted_files_formatted || false,
        paymentCompleted: false,
        paymentId: null,
        termsAgreed: true,
      }),
      signal: AbortSignal.timeout(15000),
    })

    const data = await res.json() as { success?: boolean }

    if (!res.ok || !data.success) {
      return { success: false, error: 'Submission failed. Please direct the customer to https://www.fivestardatarecovery.com/express-drop-off or call 818-272-8866' }
    }

    const dateFormatted = new Date(args.drop_off_date + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })

    return {
      success: true,
      appointment: {
        date: dateFormatted,
        time: args.drop_off_time,
        address: '1731 S Brand Blvd., Glendale, CA 91204',
        phone: '818-272-8866'
      },
      message: `Express drop-off appointment confirmed! A confirmation email has been sent to ${args.email}. The customer should arrive at 1731 S Brand Blvd., Glendale, CA 91204 on ${dateFormatted} at ${args.drop_off_time}. No printout needed — Five Star will have everything ready.`,
      next_steps: [
        `1. Check ${args.email} for the confirmation email`,
        `2. Arrive at 1731 S Brand Blvd., Glendale, CA 91204 on ${dateFormatted} at ${args.drop_off_time}`,
        '3. Five Star will perform a free diagnosis on the spot',
        '4. Approve the quoted price — recovery begins immediately'
      ],
      important: 'This is an appointment-only service. Walk-ins are not accepted for express drop-off.',
      contact: 'Questions? Call Five Star at 818-272-8866'
    }
  } catch (e: any) {
    return {
      success: false,
      error: 'Submission timed out or failed. Please direct the customer to https://www.fivestardatarecovery.com/express-drop-off or call 818-272-8866',
    }
  }
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
      case 'submit_mail_in_form':
        result = await handleSubmitMailIn(args)
        break
      case 'submit_express_dropoff':
        result = await handleSubmitExpressDropoff(args)
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

  // ── Aliases for initialized notification (some clients send this)
  if (method === 'notifications/cancelled') {
    return ok({})
  }

  return err(-32601, `Method not found: ${method}`)
})
