<script setup lang="ts">
const props = defineProps<{ light?: boolean, compact?: boolean }>()

type Step = 'contact' | 'device' | 'laptop-type' | 'desktop-os' | 'imac-drive-type' | 'fusion-size' | 'brand' | 'laptop-os' | 'apple-year' | 'board-repair' | 'ssd-location' | 'ssd-type' | 'ssd-ext-brand' | 'capacity' | 'issue' | 'encrypt' | 'cover' | 'aio' | 'urgency' | 'result' | 'call'

const currentStep = ref<Step>('contact')
const animating = ref(false)

const contact = reactive({
  name: '',
  email: '',
  phone: '',
  preferredContact: 'call' as 'call' | 'email' | 'text',
})
const contactError = ref('')

async function submitContact() {
  contactError.value = ''
  if (!contact.name.trim()) { contactError.value = 'Please enter your name.'; return }
  if (!contact.email.trim() || !contact.email.includes('@')) { contactError.value = 'Please enter a valid email.'; return }
  if (!contact.phone.trim()) { contactError.value = 'Please enter your phone number.'; return }
  // Fire lead capture email (non-blocking)
  if (import.meta.client) {
    fetch('/api/quote-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'lead', ...contact }),
    }).catch(() => {})
  }
  goTo('device')
}

const sel = reactive({
  device: '',
  capacity: '',
  issue: '',
  encrypted: null as boolean | null,
  coverOpened: null as boolean | null,
  aio: null as boolean | null,
  boardRepair: null as boolean | null,
  fusionDrive: false,
  urgency: '',
})

const CALL_DEVICES = ['ssd-external', 'raid', 'phone', 'usb', 'nvr', 'cfast']
const NEEDS_BRAND    = ['external']
const NEEDS_CAPACITY = ['sata', 'win-laptop', 'desktop', 'other-ext', 'ssd-25', 'ssd-nvme', 'ssd-ext-wd', 'ssd-ext-other']

const deviceOptions = [
  { id: 'sata',     label: 'Hard Drive (HDD)',          sub: 'Internal laptop or desktop hard drive',    icon: '💽'  },
  { id: 'external', label: 'External Hard Drive',       sub: 'WD, Seagate, Toshiba, LaCie, and more',   icon: '📦' },
  { id: 'laptop',   label: 'Laptop / Desktop',         sub: 'Recovery from a laptop or desktop computer', icon: '💻' },
  { id: 'ssd',      label: 'SSD / NVMe',               sub: 'Solid state drive, internal or external', icon: '⚡'  },
  { id: 'raid',     label: 'RAID / NAS',               sub: 'Multi-drive array or server storage',     icon: '🗄️' },
  { id: 'phone',    label: 'Smartphone / Tablet',      sub: 'iPhone, Android, iPad',                   icon: '📱' },
  { id: 'usb',      label: 'USB / SD Card',            sub: 'Flash drive or memory card',              icon: '💾' },
  { id: 'nvr',      label: 'NVR / DVR',                sub: 'Security camera recorder or surveillance system', icon: '📷' },
  { id: 'cfast',    label: 'CFast / RedMag / Pro Cards', sub: 'Professional cinema & camera media cards', icon: '🎬' },
]

const brandOptions = [
  { id: 'wd-ext',      label: 'WD / SanDisk / G-Drive', sub: 'WD My Passport, WD Elements, SanDisk, G-Drive', icon: '🔵' },
  { id: 'toshiba-ext', label: 'Toshiba',                sub: 'Toshiba Canvio, Toshiba Backup',                icon: '🔴' },
  { id: 'other-ext',   label: 'Other Brand',            sub: 'Seagate, LaCie, Samsung, Transcend, etc.',      icon: '📦' },
]

const capacityOptions = [
  { id: 'under2', label: 'Under 2TB'      },
  { id: '2to7',   label: '2TB – 7TB'      },
  { id: '8to12',  label: '8TB – 12TB'     },
  { id: '12plus', label: '12TB or Larger' },
]

const ssdCapacityOptions = [
  { id: 'under2', label: 'Under 2TB' },
  { id: '2to8',   label: '2TB – 8TB' },
  { id: '8plus',  label: '8TB or Larger' },
]

const ssdIssueOptions = [
  {
    id: 'ssd-not-recognized',
    label: 'Not Recognized At All',
    sub: 'Drive is not detected by BIOS, Disk Utility, or any computer — completely dead',
    icon: '❌',
  },
  {
    id: 'ssd-corrupted',
    label: 'Recognized but Slow / Corrupted Files',
    sub: 'Drive shows up but files are missing, slow to open, or inaccessible',
    icon: '⚠️',
  },
  {
    id: 'deleted',
    label: 'Deleted Files',
    sub: 'Files were accidentally deleted or drive was formatted',
    icon: '🗑️',
  },
]

const issueOptions = [
  {
    id: 'logical',
    label: 'No Unusual Sounds',
    sub: 'Not detected, corrupted files, or unreadable',
    icon: '🔌',
  },
  {
    id: 'mechanical',
    label: 'Clicking, Beeping, or Grinding',
    sub: 'Mechanical failure — cleanroom recovery required',
    icon: '🔊',
  },
  {
    id: 'deleted',
    label: 'Deleted Files',
    sub: 'Files were accidentally deleted from the drive',
    icon: '🗑️',
  },
]

const urgencyOptions = [
  {
    id: 'standard',
    label: 'Standard',
    sub: 'Regular business hours',
    icon: '📅',
    fee: 0,
  },
  {
    id: 'expedited',
    label: 'Expedited',
    sub: '+$200 upfront non-refundable · Business hours priority',
    icon: '🚀',
    fee: 200,
  },
  {
    id: 'expedited-plus',
    label: 'Expedited Plus',
    sub: '+$500 upfront · 24/7/365 — never stops until complete',
    icon: '⚡',
    fee: 500,
  },
]

function getBasePrice(): number | null {
  const { device, capacity, issue } = sel
  const isAppleLaptop = device === 'laptop-apple-old' || device === 'laptop-apple-new'
  const skipIssue = isAppleLaptop || sel.fusionDrive
  if (!device || (!issue && !skipIssue)) return null
  if (CALL_DEVICES.includes(device)) return null

  const isMech = issue === 'mechanical'

  // Fusion Drive iMac pricing
  if (device === 'desktop-mac' && sel.fusionDrive) {
    if (!capacity) return null
    const hddFee = ['1tb', '2tb'].includes(capacity) ? 300 : 500
    const ssdFee = 300   // SSD portion of fusion is always <2TB
    const rebuildFee = 350
    return hddFee + ssdFee + rebuildFee
  }
  if (device === 'sata' || device === 'win-laptop' || device === 'desktop' || device === 'desktop-mac') {
    if (!capacity) return null
    if (isMech) return (capacity === '8to12' || capacity === '12plus') ? 1800 : 950
    if (capacity === 'under2') return 300
    if (capacity === '2to7')   return 500
    if (capacity === '8to12')  return 600
    return 800 // 12TB+
  }

  // External SSD pricing (WD/SanDisk/G-Drive)
  if (device === 'ssd-ext-wd') {
    if (issue === 'ssd-not-recognized') return 950
    return 600
  }
  // External SSD pricing (Seagate / LaCie) — flat rate
  if (device === 'ssd-ext-seagate') {
    if (issue === 'ssd-not-recognized') return 950
    return 500
  }
  // External SSD pricing (Other brands) — same tiers as regular HDD
  if (device === 'ssd-ext-other') {
    if (issue === 'ssd-not-recognized') return 950
    if (!capacity) return null
    if (capacity === 'under2') return 300
    if (capacity === '2to8')   return 500
    return 600
  }
  // Internal SSD / NVMe pricing
  if (device === 'ssd-25' || device === 'ssd-nvme') {
    if (issue === 'ssd-not-recognized') return 950
    if (!capacity) return null
    if (capacity === 'under2') return 300
    if (capacity === '2to8')   return 500
    return 600 // 8plus
  }
  if (device === 'laptop-apple-old') return 650
  if (device === 'laptop-apple-new') return 950
  if (device === 'wd-ext') return isMech ? 950 : 600
  if (device === 'toshiba-ext') return isMech ? 950 : 500

  // other-ext
  if (isMech) return 950
  if (!capacity) return null
  if (capacity === 'under2' || capacity === '2to7') return 500
  if (capacity === '8to12') return 600
  return 800 // 12+
}

const isHelium = computed(() =>
  sel.device === 'sata' &&
  (sel.capacity === '8to12' || sel.capacity === '12plus') &&
  sel.issue === 'mechanical'
)

const quote = computed(() => {
  const base = getBasePrice()
  if (base === null) return null
  const urg = urgencyOptions.find(u => u.id === sel.urgency)
  if (!urg) return null

  const appleDeposit   = sel.device === 'laptop-apple-new' ? 200 : 0  // refundable
  const boardRepairFee = sel.boardRepair ? 200 : 0  // non-refundable
  const encryptFee     = sel.encrypted ? 200 : 0
  const aioFee         = sel.aio ? 200 : 0
  const coverFee       = sel.coverOpened ? 200 : 0
  const urgFee         = urg.fee
  const heliumDeposit  = isHelium.value ? 300 : 0
  // Deleted files/formatted: minimum fee is $500
  const effectiveBase  = sel.issue === 'deleted' ? Math.max(base, 500) : base
  const deletedUpfront = sel.issue === 'deleted' ? 200 : 0

  const total        = effectiveBase + urgFee + coverFee + encryptFee + aioFee + boardRepairFee
  const upfront      = urgFee + coverFee + heliumDeposit + deletedUpfront
  const dueOnSuccess = effectiveBase + encryptFee - heliumDeposit - deletedUpfront - appleDeposit

  return {
    total, base: effectiveBase, upfront, dueOnSuccess,
    coverFee, urgFee, heliumDeposit, deletedUpfront, encryptFee, aioFee, boardRepairFee, appleDeposit,
    isFusion: sel.fusionDrive,
    deviceLabel: (() => {
      if (sel.device === 'laptop-apple-old') return 'Apple MacBook (2015 or Earlier)'
      if (sel.device === 'laptop-apple-new') return 'Apple MacBook (2016 or Newer)'
      if (sel.device === 'win-laptop')       return 'Windows Laptop'
      if (sel.device === 'desktop')          return 'Windows Desktop Computer'
      if (sel.device === 'desktop-mac')      return sel.fusionDrive ? 'iMac (Fusion Drive)' : 'Mac Desktop (iMac)'
      if (sel.device === 'ssd-25')            return 'Internal 2.5\" SSD'
      if (sel.device === 'ssd-nvme')          return 'Internal NVMe Drive'
      if (sel.device === 'ssd-ext-wd')        return 'WD / SanDisk / G-Drive External SSD'
      if (sel.device === 'ssd-ext-seagate')    return 'Seagate / LaCie External SSD'
      if (sel.device === 'ssd-ext-other')      return 'External SSD'
      return deviceOptions.find(d => d.id === sel.device)?.label ?? sel.device
    })(),
    capacityLabel: sel.fusionDrive ? sel.capacity?.toUpperCase().replace('TB',' TB') : capacityOptions.find(c => c.id === sel.capacity)?.label,
    issueLabel: sel.issue ? ([...issueOptions, ...ssdIssueOptions].find(i => i.id === sel.issue)?.label ?? null) : null,
    urgencyLabel:  urg.label,
  }
})

// ── Navigation ──────────────────────────────────────────────────────────────
function goTo(s: Step, delay = 220) {
  animating.value = true
  setTimeout(() => { currentStep.value = s; animating.value = false }, delay)
}

function pickDevice(id: string) {
  sel.device = id; sel.capacity = ''; sel.issue = ''; sel.encrypted = null; sel.coverOpened = null; sel.aio = null; sel.boardRepair = null; sel.fusionDrive = false; sel.urgency = ''
  if (CALL_DEVICES.includes(id)) goTo('call')
  else if (id === 'external') goTo('brand')
  else if (id === 'ssd') goTo('ssd-location')
  else if (id === 'laptop') goTo('laptop-type')
  else if (NEEDS_CAPACITY.includes(id)) goTo('capacity')
  else goTo('issue')
}
function pickLaptopType(type: string) {
  if (type === 'desktop') { sel.device = 'desktop'; goTo('desktop-os') }
  else { sel.device = 'laptop'; goTo('laptop-os') }
}
function pickSsdExtBrand(brand: string) {
  if (brand === 'wd')       { sel.device = 'ssd-ext-wd';      goTo('capacity') }
  else if (brand === 'seagate') { sel.device = 'ssd-ext-seagate'; goTo('issue') }
  else                      { sel.device = 'ssd-ext-other';   goTo('capacity') }
}
function pickSsdLocation(loc: string) {
  if (loc === 'external') { goTo('ssd-ext-brand') }
  else { goTo('ssd-type') }
}
function pickSsdType(type: string) {
  sel.device = type === 'nvme' ? 'ssd-nvme' : 'ssd-25'
  goTo('capacity')
}
function pickImacDriveType(type: string) {
  if (type === 'fusion') { sel.fusionDrive = true; goTo('fusion-size') }
  else { sel.fusionDrive = false; goTo('capacity') }
}
function pickFusionSize(size: string) {
  sel.capacity = size
  sel.aio = true          // auto-apply $200 disassembly
  sel.coverOpened = false // skip cover question
  goTo('encrypt')
}
function pickDesktopOS(os: string) {
  // Both Windows and Mac desktops use the same capacity-based pricing.
  // iMac is always AIO — we can note this but let the AIO step confirm.
  if (os === 'mac') { sel.device = 'desktop-mac'; sel.aio = true; goTo('imac-drive-type') }
  else { sel.device = 'desktop'; goTo('capacity') }
}
function pickLaptopOS(os: string) {
  if (os === 'apple') { sel.device = 'laptop-apple-new'; goTo('apple-year') }
  else { sel.device = 'win-laptop'; goTo('capacity') }
}
function pickAppleYear(era: string) {
  if (era === 'old') { sel.device = 'laptop-apple-old'; goTo('encrypt') }
  else { sel.device = 'laptop-apple-new'; goTo('board-repair') }
}
function pickBoardRepair(v: boolean) { sel.boardRepair = v; goTo('encrypt') }

function pickBrand(id: string) {
  // Store brand as the device id so pricing logic works unchanged
  sel.device = id
  if (NEEDS_CAPACITY.includes(id)) goTo('capacity')
  else goTo('issue')
}
function pickCapacity(id: string) {
  sel.capacity = id
  if (sel.device === 'ssd-ext-wd' && id === '8plus') goTo('call')
  else goTo('issue')
}
function pickIssue(id: string)    { sel.issue = id;    goTo('encrypt') }
// After encryption: Apple → urgency, Windows/others → cover
function pickEncrypt(v: boolean)  {
  sel.encrypted = v
  const isApple = sel.device === 'laptop-apple-old' || sel.device === 'laptop-apple-new'
  const isSsd   = ['ssd-25','ssd-nvme','ssd-ext-wd','ssd-ext-seagate','ssd-ext-other'].includes(sel.device)
  goTo((isApple || isSsd) ? 'urgency' : 'cover')
}
function pickCover(v: boolean)    { sel.coverOpened = v; sel.device === 'desktop' ? goTo('aio') : goTo('urgency') }

function pickAio(v: boolean)       { sel.aio = v;         goTo('urgency') }
function pickUrgency(id: string) {
  sel.urgency = id
  goTo('result')
  // Fire full quote result email (non-blocking)
  if (import.meta.client) {
    nextTick(() => {
      if (!quote.value) return
      fetch('/api/quote-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'result',
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          preferredContact: contact.preferredContact,
          device: quote.value.deviceLabel,
          capacity: quote.value.capacityLabel,
          issue: quote.value.issueLabel,
          urgency: quote.value.urgencyLabel,
          price: quote.value.total,
        }),
      }).catch(() => {})
    })
  }
}
function back() {
  const s = currentStep.value
  if (s === 'device') goTo('contact', 0)
  else if (s === 'laptop-type') goTo('device', 0)
  else if (s === 'desktop-os')      goTo('laptop-type', 0)
  else if (s === 'ssd-location')    goTo('device', 0)
  else if (s === 'ssd-type')        goTo('ssd-location', 0)
  else if (s === 'ssd-ext-brand')   goTo('ssd-location', 0)
  else if (s === 'imac-drive-type') goTo('desktop-os', 0)
  else if (s === 'fusion-size')     goTo('imac-drive-type', 0)
  else if (s === 'laptop-os')  goTo('laptop-type', 0)
  else if (s === 'apple-year')  goTo('laptop-os', 0)
  else if (s === 'board-repair') goTo('apple-year', 0)
  else if (s === 'brand')    goTo('device', 0)
  else if (s === 'capacity') {
    const wasSsd = sel.device === 'ssd-25' || sel.device === 'ssd-nvme'
    const wasExternal = ['wd-ext','toshiba-ext','other-ext'].includes(sel.device)
    const wasWinLaptop = sel.device === 'win-laptop'
    const wasDesktop = sel.device === 'desktop' || sel.device === 'desktop-mac'
    const wasExtSsd = ['ssd-ext-wd','ssd-ext-other'].includes(sel.device)
    if (wasExtSsd) goTo('ssd-ext-brand', 0)
    else if (wasSsd) goTo('ssd-type', 0)
    else if (wasExternal) goTo('brand', 0)
    else if (wasWinLaptop) goTo('laptop-os', 0)
    else if (wasDesktop) {
      if (sel.device === 'desktop-mac') goTo('imac-drive-type', 0)
      else goTo('desktop-os', 0)
    }
    else goTo('device', 0)
  }
  else if (s === 'issue') {
    if (NEEDS_CAPACITY.includes(sel.device)) goTo('capacity', 0)
    else if (['wd-ext','toshiba-ext','other-ext'].includes(sel.device)) goTo('brand', 0)
    else goTo('device', 0)
  }
  else if (s === 'encrypt') {
    const isAppleOld = sel.device === 'laptop-apple-old'
    const isAppleNew = sel.device === 'laptop-apple-new'
    if (isAppleOld) goTo('apple-year', 0)
    else if (isAppleNew) goTo('board-repair', 0)
    else if (sel.device === 'ssd-ext-seagate') goTo('ssd-ext-brand', 0)
    else if (sel.fusionDrive) goTo('fusion-size', 0)
    else goTo('issue', 0)
  }
  else if (s === 'cover')   goTo('encrypt', 0)
  else if (s === 'aio')     goTo('cover', 0)
  else if (s === 'urgency') {
    const isApple = sel.device === 'laptop-apple-old' || sel.device === 'laptop-apple-new'
    const isSsd = ['ssd-25','ssd-nvme','ssd-ext-wd','ssd-ext-seagate','ssd-ext-other'].includes(sel.device)
    if (sel.fusionDrive || isSsd) goTo('encrypt', 0)
    else if (sel.device === 'desktop') goTo('aio', 0)
    else if (isApple) goTo('encrypt', 0)
    else goTo('cover', 0)
  }
  else if (s === 'result')  goTo('urgency', 0)
  else if (s === 'call')    goTo('device', 0)
}
function reset() {
  animating.value = true
  setTimeout(() => {
    currentStep.value = 'device'
    sel.device = ''; sel.capacity = ''; sel.issue = ''; sel.encrypted = null; sel.coverOpened = null; sel.aio = null; sel.boardRepair = null; sel.fusionDrive = false; sel.urgency = ''
    animating.value = false
  }, 180)
}

// ── Progress ─────────────────────────────────────────────────────────────────
const progressSteps = computed(() => {
  if (CALL_DEVICES.includes(sel.device) || currentStep.value === 'call') return ['Info', 'Device', 'Quote']
  const list = ['Info', 'Device']
  const isExternal = ['wd-ext','toshiba-ext','other-ext','external'].includes(sel.device)
  const isApple = sel.device === 'laptop-apple-old' || sel.device === 'laptop-apple-new' || currentStep.value === 'apple-year' || currentStep.value === 'board-repair'
  const isLaptopFlow = currentStep.value === 'laptop-type' || currentStep.value === 'desktop-os' || currentStep.value === 'laptop-os' || sel.device === 'win-laptop' || sel.device === 'desktop' || sel.device === 'desktop-mac' || isApple
  if (isExternal) list.push('Brand')
  if (isLaptopFlow) {
    list.push('Type')
    if (sel.device !== 'desktop' && currentStep.value !== 'laptop-type') list.push('OS')
    if (isApple) {
      list.push('Year')
      if (sel.device === 'laptop-apple-new' || currentStep.value === 'board-repair') list.push('Board Repair')
    }
  }
  if (NEEDS_CAPACITY.includes(sel.device)) list.push('Capacity')
  if (!isApple) list.push('Issue')
  list.push('Encryption')
  if (!isApple) list.push('Cover')
  if (sel.device === 'desktop') list.push('AIO')
  list.push('Urgency', 'Quote')
  return list
})

const progressIndex = computed(() => {
  const s = currentStep.value
  const isExternal = ['wd-ext','toshiba-ext','other-ext','external'].includes(sel.device)
  const hasCap = NEEDS_CAPACITY.includes(sel.device)
  if (s === 'contact') return 0
  if (s === 'device') return 1
  if (s === 'call') return 2
  if (isExternal) {
    const m: Partial<Record<Step, number>> = { brand: 1 }
    if (hasCap) Object.assign(m, { capacity: 2, issue: 3, encrypt: 4, cover: 5, urgency: 6, result: 7 })
    else Object.assign(m, { issue: 2, encrypt: 3, cover: 4, urgency: 5, result: 6 })
    return m[s] ?? 0
  }
  if (hasCap) {
    const isLaptop = sel.device === 'desktop'
    const m: Partial<Record<Step, number>> = { capacity: 1, issue: 2, encrypt: 3, cover: 4 }
    if (isLaptop) Object.assign(m, { aio: 5, urgency: 6, result: 7 })
    else Object.assign(m, { urgency: 5, result: 6 })
    return m[s] ?? 0
  }
  const m: Partial<Record<Step, number>> = { issue: 1, encrypt: 2, cover: 3, urgency: 4, result: 5 }
  return m[s] ?? 0
})
</script>

<template>
  <div class="iqt-wrap" :class="{ 'iqt-light': props.light, 'iqt-compact': props.compact }">

    <!-- Progress -->
    <div class="iqt-progress" v-if="!props.compact">
      <div
        v-for="(label, idx) in progressSteps"
        :key="label"
        class="iqt-pdot"
        :class="{ active: progressIndex === idx, done: progressIndex > idx }"
      >
        <div class="iqt-pcircle">
          <span v-if="progressIndex > idx">✓</span>
          <span v-else>{{ idx + 1 }}</span>
        </div>
        <span class="iqt-plabel">{{ label }}</span>
      </div>
      <div class="iqt-ptrack">
        <div
          class="iqt-pfill"
          :style="{ width: progressSteps.length > 1 ? (progressIndex / (progressSteps.length - 1) * 100) + '%' : '0%' }"
        />
      </div>
    </div>

    <!-- Body -->
    <div class="iqt-body" :class="{ 'iqt-fade': animating }">

      <!-- STEP: Contact Info -->
      <div v-if="currentStep === 'contact'" class="iqt-contact-step">
        <h3 class="iqt-q">Let's get you an instant quote</h3>
        <p class="iqt-hint" style="margin-bottom:16px;">We'll also use this to follow up with your results.</p>
        <div class="iqt-contact-fields">
          <div class="iqt-field">
            <label class="iqt-label">Full Name <span class="iqt-req">*</span></label>
            <input v-model="contact.name" type="text" class="iqt-input" placeholder="John Smith" />
          </div>
          <div class="iqt-field">
            <label class="iqt-label">Email Address <span class="iqt-req">*</span></label>
            <input v-model="contact.email" type="email" class="iqt-input" placeholder="john@example.com" />
          </div>
          <div class="iqt-field">
            <label class="iqt-label">Phone Number <span class="iqt-req">*</span></label>
            <input v-model="contact.phone" type="tel" class="iqt-input" placeholder="(555) 000-0000" />
          </div>
          <div class="iqt-field">
            <label class="iqt-label">Preferred Contact Method</label>
            <div class="iqt-contact-methods">
              <label class="iqt-method" :class="{ active: contact.preferredContact === 'call' }">
                <input type="radio" v-model="contact.preferredContact" value="call" /> 📞 Call
              </label>
              <label class="iqt-method" :class="{ active: contact.preferredContact === 'email' }">
                <input type="radio" v-model="contact.preferredContact" value="email" /> ✉ Email
              </label>
              <label class="iqt-method" :class="{ active: contact.preferredContact === 'text' }">
                <input type="radio" v-model="contact.preferredContact" value="text" /> 💬 Text
              </label>
            </div>
          </div>
        </div>
        <p v-if="contactError" class="iqt-contact-error">{{ contactError }}</p>
        <div class="iqt-nav" style="justify-content:flex-end;margin-top:16px;">
          <button class="iqt-btn-next" @click="submitContact">Get My Quote →</button>
        </div>
      </div>

      <!-- STEP: Device -->
      <div v-if="currentStep === 'device'">
        <h3 class="iqt-q">What type of device needs recovery?</h3>
        <div class="iqt-grid g3">
          <button
            v-for="d in deviceOptions" :key="d.id"
            class="iqt-card"
            :class="{ selected: sel.device === d.id }"
            @click="pickDevice(d.id)"
          >
            <span class="iqt-icon">{{ d.icon }}</span>
            <span class="iqt-clabel">{{ d.label }}</span>
            <span class="iqt-csub">{{ d.sub }}</span>
          </button>
        </div>
      </div>



      <!-- STEP: Laptop or Desktop -->
      <div v-else-if="currentStep === 'laptop-type'">
        <h3 class="iqt-q">Is it a laptop or desktop computer?</h3>
        <div class="iqt-grid g2">
          <button class="iqt-card iqt-cover-card" @click="pickLaptopType('laptop')">
            <span class="iqt-icon">💻</span>
            <div class="iqt-issue-text">
              <span class="iqt-clabel">Laptop</span>
              <span class="iqt-csub">MacBook, Dell, HP, Lenovo, ASUS, Surface, and more</span>
            </div>
          </button>
          <button class="iqt-card iqt-cover-card" @click="pickLaptopType('desktop')">
            <span class="iqt-icon">🖥️</span>
            <div class="iqt-issue-text">
              <span class="iqt-clabel">Desktop Computer</span>
              <span class="iqt-csub">Tower PC, iMac, AIO, custom build</span>
            </div>
          </button>
        </div>
        <button class="iqt-back" @click="back">← Back</button>
      </div>



      <!-- STEP: iMac Drive Type -->
      <div v-else-if="currentStep === 'imac-drive-type'">
        <h3 class="iqt-q">Does your iMac have a Fusion Drive or a single drive?</h3>
        <p class="iqt-hint">A Fusion Drive combines a traditional hard drive (HDD) and a solid-state drive (SSD) into one volume. Most iMacs from 2012–2019 offered this option. If unsure, select Single Drive.</p>
        <div class="iqt-grid g2">
          <button class="iqt-card iqt-drive-type-card" @click="pickImacDriveType('single')">
            <div class="iqt-drive-imgs">
              <img src="/service-hdd-new-nobg.webp" alt="Hard Drive" class="iqt-drive-img" />
            </div>
            <div class="iqt-issue-text">
              <span class="iqt-clabel">Single Drive</span>
              <span class="iqt-csub">One HDD or one SSD (standard setup)</span>
            </div>
          </button>
          <button class="iqt-card iqt-drive-type-card" @click="pickImacDriveType('fusion')">
            <div class="iqt-drive-imgs">
              <img src="/service-hdd-new-nobg.webp" alt="Hard Drive" class="iqt-drive-img" />
              <span class="iqt-drive-plus">+</span>
              <img src="/service-ssd-new-nobg.webp" alt="NVMe SSD" class="iqt-drive-img" />
            </div>
            <div class="iqt-issue-text">
              <span class="iqt-clabel">Fusion Drive</span>
              <span class="iqt-csub">HDD + NVMe SSD combined — requires Fusion Drive rebuild</span>
            </div>
          </button>
        </div>
        <button class="iqt-back" @click="back">← Back</button>
      </div>

      <!-- STEP: Fusion Drive HDD Size -->
      <div v-else-if="currentStep === 'fusion-size'">
        <h3 class="iqt-q">What is the size of the hard drive in your Fusion Drive?</h3>
        <p class="iqt-hint">This refers to the HDD (spinning drive) portion of the Fusion Drive, not the SSD. Common sizes are 1TB–3TB for most iMacs.</p>
        <div class="iqt-grid g3">
          <button v-for="size in ['1tb','2tb','3tb','4tb','5tb']" :key="size"
            class="iqt-card iqt-cap-card"
            :class="{ selected: sel.capacity === size }"
            @click="pickFusionSize(size)"
          >
            <span class="iqt-icon">💾</span>
            <span class="iqt-clabel">{{ size.replace('tb','TB').toUpperCase() }}</span>
          </button>
        </div>
        <button class="iqt-back" @click="back">← Back</button>
      </div>

      <!-- STEP: Desktop OS -->
      <div v-else-if="currentStep === 'desktop-os'">
        <h3 class="iqt-q">Is it a Windows PC or a Mac desktop?</h3>
        <div class="iqt-grid g2">
          <button class="iqt-card iqt-cover-card" @click="pickDesktopOS('windows')">
            <span class="iqt-icon">🪟</span>
            <div class="iqt-issue-text">
              <span class="iqt-clabel">Windows Desktop</span>
              <span class="iqt-csub">Tower PC, All-in-One Windows, custom build</span>
            </div>
          </button>
          <button class="iqt-card iqt-cover-card" @click="pickDesktopOS('mac')">
            <span class="iqt-icon">🍎</span>
            <div class="iqt-issue-text">
              <span class="iqt-clabel">Mac Desktop (iMac)</span>
              <span class="iqt-csub">iMac, Mac mini, Mac Pro, Mac Studio</span>
            </div>
          </button>
        </div>
        <button class="iqt-back" @click="back">← Back</button>
      </div>

      <!-- STEP: Laptop OS -->
      <div v-else-if="currentStep === 'laptop-os'">
        <h3 class="iqt-q">What operating system does your laptop use?</h3>
        <div class="iqt-grid g2">
          <button class="iqt-card iqt-cover-card" @click="pickLaptopOS('apple')">
            <span class="iqt-icon">🍎</span>
            <div class="iqt-issue-text">
              <span class="iqt-clabel">Apple MacBook</span>
              <span class="iqt-csub">MacBook Air, MacBook Pro, MacBook</span>
            </div>
          </button>
          <button class="iqt-card iqt-cover-card" @click="pickLaptopOS('windows')">
            <span class="iqt-icon">🪟</span>
            <div class="iqt-issue-text">
              <span class="iqt-clabel">Windows Laptop</span>
              <span class="iqt-csub">Dell, HP, Lenovo, ASUS, Acer, Microsoft Surface</span>
            </div>
          </button>
        </div>
        <button class="iqt-back" @click="back">← Back</button>
      </div>

      <!-- STEP: Apple Year -->
      <div v-else-if="currentStep === 'apple-year'">
        <h3 class="iqt-q">What year is your MacBook from?</h3>
        <p class="iqt-hint">2015 and earlier MacBooks had a removable hard drive. 2016 and newer models use soldered storage directly on the logic board.</p>
        <div class="iqt-grid g2">
          <button class="iqt-card iqt-cover-card" @click="pickAppleYear('old')">
            <span class="iqt-icon">📅</span>
            <div class="iqt-issue-text">
              <span class="iqt-clabel">2015 or Earlier</span>
              <span class="iqt-csub">MacBook with removable hard drive</span>
            </div>
          </button>
          <button class="iqt-card iqt-cover-card" @click="pickAppleYear('new')">
            <span class="iqt-icon">⚡</span>
            <div class="iqt-issue-text">
              <span class="iqt-clabel">2016 or Newer</span>
              <span class="iqt-csub">MacBook with soldered / non-removable storage</span>
            </div>
          </button>
        </div>
        <button class="iqt-back" @click="back">← Back</button>
      </div>

      <!-- STEP: Board-Level Repair -->
      <div v-else-if="currentStep === 'board-repair'">
        <h3 class="iqt-q">Has this MacBook been worked on by another repair shop?</h3>
        <p class="iqt-hint">Specifically, did another shop attempt a board-level repair? This means component-level soldering, chip replacement, or logic board repair — not just a software fix or screen replacement.</p>
        <div class="iqt-grid g2">
          <button class="iqt-card iqt-cover-card" @click="pickBoardRepair(false)">
            <span class="iqt-icon">✅</span>
            <div class="iqt-issue-text">
              <span class="iqt-clabel">No — Not Worked On</span>
              <span class="iqt-csub">No prior board-level repair attempt</span>
            </div>
          </button>
          <button class="iqt-card iqt-cover-card" @click="pickBoardRepair(true)">
            <span class="iqt-icon">⚠️</span>
            <div class="iqt-issue-text">
              <span class="iqt-clabel">Yes — Previously Repaired</span>
              <span class="iqt-csub">Another shop attempted board-level or component repair</span>
            </div>
          </button>
        </div>
        <button class="iqt-back" @click="back">← Back</button>
      </div>



      <!-- STEP: External SSD Brand -->
      <div v-else-if="currentStep === 'ssd-ext-brand'">
        <h3 class="iqt-q">What brand is the external SSD?</h3>
        <div class="iqt-grid g1">
          <button class="iqt-card iqt-issue-card" @click="pickSsdExtBrand('wd')">
            <div class="iqt-drive-imgs" style="height:48px;">
              <img src="/sandisk-extreme-pro-external-ssd.png" alt="WD/SanDisk/G-Drive" style="height:44px;width:auto;object-fit:contain;" />
            </div>
            <div class="iqt-issue-text">
              <span class="iqt-clabel">WD / SanDisk / G-Drive</span>
              <span class="iqt-csub">WD My Passport SSD, SanDisk Extreme, G-Drive SSD</span>
            </div>
          </button>
          <button class="iqt-card iqt-issue-card" @click="pickSsdExtBrand('seagate')">
            <span class="iqt-icon">🔶</span>
            <div class="iqt-issue-text">
              <span class="iqt-clabel">Seagate / LaCie</span>
              <span class="iqt-csub">Seagate Fast SSD, LaCie Rugged SSD, LaCie Portable SSD</span>
            </div>
          </button>
          <button class="iqt-card iqt-issue-card" @click="pickSsdExtBrand('other')">
            <span class="iqt-icon">📦</span>
            <div class="iqt-issue-text">
              <span class="iqt-clabel">Other Brand</span>
              <span class="iqt-csub">Samsung T7, Kingston, Crucial, Transcend, etc.</span>
            </div>
          </button>
        </div>
        <button class="iqt-back" @click="back">← Back</button>
      </div>

      <!-- STEP: SSD Location -->
      <div v-else-if="currentStep === 'ssd-location'">
        <h3 class="iqt-q">Is the SSD internal or external?</h3>
        <div class="iqt-grid g2">
          <button class="iqt-card iqt-drive-type-card" @click="pickSsdLocation('internal')">
            <div class="iqt-drive-imgs">
              <img src="/service-ssd-new-nobg.webp" alt="Internal SSD" class="iqt-drive-img" />
            </div>
            <div class="iqt-issue-text">
              <span class="iqt-clabel">Internal SSD</span>
              <span class="iqt-csub">Bare drive — installed inside a computer</span>
            </div>
          </button>
          <button class="iqt-card iqt-drive-type-card" @click="pickSsdLocation('external')">
            <div class="iqt-drive-imgs">
              <img src="/sandisk-extreme-pro-external-ssd.png" alt="SanDisk Extreme Pro External SSD" class="iqt-drive-img" />
            </div>
            <div class="iqt-issue-text">
              <span class="iqt-clabel">External SSD</span>
              <span class="iqt-csub">Drive in an enclosure with USB or Thunderbolt cable</span>
            </div>
          </button>
        </div>
        <button class="iqt-back" @click="back">← Back</button>
      </div>

      <!-- STEP: SSD Type -->
      <div v-else-if="currentStep === 'ssd-type'">
        <h3 class="iqt-q">What type of internal SSD is it?</h3>
        <div class="iqt-grid g2">
          <button class="iqt-card iqt-drive-type-card" @click="pickSsdType('ssd')">
            <div class="iqt-drive-imgs">
              <img src="/ssd-25-sata-crucial.jpg" alt="2.5 inch SATA SSD" class="iqt-drive-img" />
            </div>
            <div class="iqt-issue-text">
              <span class="iqt-clabel">2.5" SATA SSD</span>
              <span class="iqt-csub">Flat rectangular drive — same size as a laptop hard drive</span>
            </div>
          </button>
          <button class="iqt-card iqt-drive-type-card" @click="pickSsdType('nvme')">
            <div class="iqt-drive-imgs">
              <img src="/ssd-nvme-samsung.jpg" alt="NVMe M.2 SSD" class="iqt-drive-img" />
            </div>
            <div class="iqt-issue-text">
              <span class="iqt-clabel">NVMe / M.2 Drive</span>
              <span class="iqt-csub">Small stick-shaped drive — plugs directly into the motherboard</span>
            </div>
          </button>
        </div>
        <button class="iqt-back" @click="back">← Back</button>
      </div>

      <!-- STEP: Brand -->
      <div v-else-if="currentStep === 'brand'">
        <h3 class="iqt-q">What brand is the external drive?</h3>
        <div class="iqt-grid g1">
          <button
            v-for="b in brandOptions" :key="b.id"
            class="iqt-card iqt-issue-card"
            :class="{ selected: sel.device === b.id }"
            @click="pickBrand(b.id)"
          >
            <span class="iqt-icon">{{ b.icon }}</span>
            <div class="iqt-issue-text">
              <span class="iqt-clabel">{{ b.label }}</span>
              <span class="iqt-csub">{{ b.sub }}</span>
            </div>
          </button>
        </div>
        <button class="iqt-back" @click="back">← Back</button>
      </div>

      <!-- STEP: Capacity -->
      <div v-else-if="currentStep === 'capacity'">
        <h3 class="iqt-q">What is the storage capacity?</h3>
        <!-- SSD capacity options (3 tiers) -->
        <div v-if="['ssd-25','ssd-nvme','ssd-ext-wd','ssd-ext-other'].includes(sel.device)" class="iqt-grid g3">
          <button
            v-for="c in ssdCapacityOptions" :key="c.id"
            class="iqt-card iqt-cap-card"
            :class="{ selected: sel.capacity === c.id }"
            @click="pickCapacity(c.id)"
          >
            <span class="iqt-icon">💾</span>
            <span class="iqt-clabel">{{ c.label }}</span>
          </button>
        </div>
        <!-- Standard HDD capacity options (4 tiers) -->
        <div v-else class="iqt-grid g4">
          <button
            v-for="c in capacityOptions" :key="c.id"
            class="iqt-card iqt-cap-card"
            :class="{ selected: sel.capacity === c.id }"
            @click="pickCapacity(c.id)"
          >
            <span class="iqt-icon">💾</span>
            <span class="iqt-clabel">{{ c.label }}</span>
          </button>
        </div>
        <button class="iqt-back" @click="back">← Back</button>
      </div>

      <!-- STEP: Issue -->
      <div v-else-if="currentStep === 'issue'">
        <h3 class="iqt-q">What is happening with your drive?</h3>
        <div class="iqt-grid g1">
          <button
            v-for="i in (sel.device === 'ssd-25' || sel.device === 'ssd-nvme' ? ssdIssueOptions : issueOptions)" :key="i.id"
            class="iqt-card iqt-issue-card"
            :class="{ selected: sel.issue === i.id }"
            @click="pickIssue(i.id)"
          >
            <span class="iqt-icon">{{ i.icon }}</span>
            <div class="iqt-issue-text">
              <span class="iqt-clabel">{{ i.label }}</span>
              <span class="iqt-csub">{{ i.sub }}</span>
            </div>
          </button>
        </div>
        <button class="iqt-back" @click="back">← Back</button>
      </div>


      <!-- STEP: Encryption -->
      <div v-else-if="currentStep === 'encrypt'">
        <h3 class="iqt-q">Is your drive encrypted with a password?</h3>
        <p class="iqt-hint">For example: BitLocker (Windows), FileVault (Mac), or any third-party encryption app where you must enter a password to access your files.</p>
        <div class="iqt-grid g2">
          <button
            class="iqt-card iqt-cover-card"
            :class="{ selected: sel.encrypted === false }"
            @click="pickEncrypt(false)"
          >
            <span class="iqt-icon">🔓</span>
            <span class="iqt-clabel">No — Not Encrypted</span>
            <span class="iqt-csub">No password required to access files</span>
          </button>
          <button
            class="iqt-card iqt-cover-card"
            :class="{ selected: sel.encrypted === true }"
            @click="pickEncrypt(true)"
          >
            <span class="iqt-icon">🔐</span>
            <span class="iqt-clabel">Yes — Drive is Encrypted</span>
            <span class="iqt-csub">BitLocker, FileVault, or third-party encryption</span>
          </button>
        </div>
        <button class="iqt-back" @click="back">← Back</button>
      </div>

      <!-- STEP: Cover Opened -->
      <div v-else-if="currentStep === 'cover'">
        <h3 class="iqt-q">Has the hard drive's metal cover been opened?</h3>
        <p class="iqt-hint">This refers to the actual metal enclosure where the platters are stored — <em>not</em> the plastic casing of an external drive.</p>
        <div class="iqt-grid g2">
          <button
            class="iqt-card iqt-cover-card"
            :class="{ selected: sel.coverOpened === false }"
            @click="pickCover(false)"
          >
            <span class="iqt-icon">✅</span>
            <span class="iqt-clabel">No — Cover is Intact</span>
            <span class="iqt-csub">The metal cover has not been opened</span>
          </button>
          <button
            class="iqt-card iqt-cover-card"
            :class="{ selected: sel.coverOpened === true }"
            @click="pickCover(true)"
          >
            <span class="iqt-icon">⚠️</span>
            <span class="iqt-clabel">Yes — Cover Was Opened</span>
            <span class="iqt-csub">The metal cover where the platters are stored has been opened</span>
          </button>
        </div>
        <button class="iqt-back" @click="back">← Back</button>
      </div>


      <!-- STEP: All-in-One -->
      <div v-else-if="currentStep === 'aio'">
        <h3 class="iqt-q">Is this an All-in-One computer?</h3>
        <p class="iqt-hint">Examples: iMac, Microsoft Surface Studio, HP Envy AIO, or any machine where the screen and computer are one unit and must be fully disassembled to access the drive.</p>
        <div class="iqt-grid g2">
          <button
            class="iqt-card iqt-cover-card"
            :class="{ selected: sel.aio === false }"
            @click="pickAio(false)"
          >
            <span class="iqt-icon">🖥️</span>
            <span class="iqt-clabel">No — Standard Tower or Laptop</span>
            <span class="iqt-csub">Drive is accessible without full disassembly</span>
          </button>
          <button
            class="iqt-card iqt-cover-card"
            :class="{ selected: sel.aio === true }"
            @click="pickAio(true)"
          >
            <span class="iqt-icon">🖥️</span>
            <span class="iqt-clabel">Yes — All-in-One Design</span>
            <span class="iqt-csub">iMac, AIO Windows PC — requires full disassembly</span>
          </button>
        </div>
        <button class="iqt-back" @click="back">← Back</button>
      </div>

      <!-- STEP: Urgency -->
      <div v-else-if="currentStep === 'urgency'">
        <h3 class="iqt-q">How quickly do you need your data back?</h3>
        <div class="iqt-grid g1">
          <button
            v-for="u in urgencyOptions" :key="u.id"
            class="iqt-card iqt-urg-card"
            :class="{ selected: sel.urgency === u.id }"
            @click="pickUrgency(u.id)"
          >
            <span class="iqt-icon">{{ u.icon }}</span>
            <div class="iqt-issue-text">
              <span class="iqt-clabel">{{ u.label }}</span>
              <span class="iqt-csub">{{ u.sub }}</span>
            </div>
          </button>
        </div>
        <button class="iqt-back" @click="back">← Back</button>
      </div>

      <!-- STEP: Result -->
      <div v-else-if="currentStep === 'result' && quote" class="iqt-result">
        <div class="iqt-rbadge">Your Flat-Rate Quote</div>

        <div class="iqt-price">${{ quote.total.toLocaleString() }}</div>
        <p class="iqt-price-lbl">Total Recovery Cost</p>

        <!-- Payment breakdown -->
        <div class="iqt-breakdown">
          <div v-if="quote.appleDeposit > 0" class="iqt-brow deposit">
            <span>Refundable Deposit at Check-In <em>(returned if unrecoverable)</em></span>
            <span class="iqt-bamount">${{ quote.appleDeposit.toLocaleString() }}</span>
          </div>
          <div v-if="quote.boardRepairFee" class="iqt-brow upfront">
            <span>Previous Board-Level Repair Fee <em>(non-refundable)</em></span>
            <span class="iqt-bamount">${{ quote.boardRepairFee.toLocaleString() }}</span>
          </div>
          <div v-if="quote.deletedUpfront" class="iqt-brow upfront">
            <span>Deleted File Recovery Fee <em>(non-refundable)</em></span>
            <span class="iqt-bamount">${{ quote.deletedUpfront.toLocaleString() }}</span>
          </div>
          <div v-if="quote.heliumDeposit" class="iqt-brow upfront">
            <span>Helium Drive Deposit <em>(non-refundable)</em></span>
            <span class="iqt-bamount">${{ quote.heliumDeposit.toLocaleString() }}</span>
          </div>
          <div v-if="quote.coverFee" class="iqt-brow upfront">
            <span>Drive Cover Opened Fee <em>(non-refundable)</em></span>
            <span class="iqt-bamount">${{ quote.coverFee.toLocaleString() }}</span>
          </div>
          <div v-if="quote.aioFee" class="iqt-brow upfront">
            <span>{{ quote.isFusion ? 'iMac Disassembly Fee' : 'Hard Drive Removal Fee' }} <em>(labor fee for drive removal — not a recovery fee, non-refundable)</em></span>
            <span class="iqt-bamount">${{ quote.aioFee.toLocaleString() }}</span>
          </div>
          <div v-if="quote.urgFee" class="iqt-brow upfront">
            <span>{{ quote.urgencyLabel }} Service Fee <em>(non-refundable)</em></span>
            <span class="iqt-bamount">${{ quote.urgFee.toLocaleString() }}</span>
          </div>
          <div class="iqt-brow success">
            <span>Due on Successful Recovery<em v-if="quote.encryptFee"> (includes ${{ quote.encryptFee }} encryption fee)</em></span>
            <span class="iqt-bamount">${{ quote.dueOnSuccess.toLocaleString() }}</span>
          </div>
        </div>

        <!-- Line-item notes -->
        <div class="iqt-notes">
          <div v-if="quote.heliumDeposit" class="iqt-note warn">
            ⚠️ Helium-filled drive (8TB+) — additional cleanroom complexity may require further evaluation.
          </div>
          <div v-if="sel.urgency === 'expedited-plus'" class="iqt-note">
            ⚡ Expedited Plus runs 24/7/365. A modified quote with any additional fees will be provided within a few hours of check-in.
          </div>
        </div>

        <!-- Summary -->
        <div class="iqt-summary">
          <div class="iqt-srow"><span>Device</span><span>{{ quote.deviceLabel }}</span></div>
          <div v-if="quote.capacityLabel" class="iqt-srow"><span>Capacity</span><span>{{ quote.capacityLabel }}</span></div>
          <div v-if="quote.issueLabel" class="iqt-srow"><span>Issue</span><span>{{ quote.issueLabel }}</span></div>
          <div class="iqt-srow"><span>Service</span><span>{{ quote.urgencyLabel }}</span></div>
        </div>

        <div v-if="quote.isFusion" class="iqt-note warn" style="margin-bottom:14px;">
          ⚠️ This quote assumes both drives (HDD + SSD) have <strong>logical issues only</strong> and no mechanical failure. If a mechanical issue is found during our free diagnostic, we will contact you with an updated quote before any work begins. You are never charged without your approval.
        </div>
        <div class="iqt-guarantee">
          <template v-if="quote.upfront > 0 || quote.appleDeposit > 0 || quote.aioFee > 0">
            🛡 <strong>No Data, No Charge</strong> — You only pay the recovery fee if we successfully recover your data.<span v-if="quote.appleDeposit > 0"> Your ${{ quote.appleDeposit.toLocaleString() }} deposit is fully refundable if recovery is unsuccessful.</span><span v-if="quote.aioFee > 0"> The {{ quote.isFusion ? 'iMac disassembly' : 'hard drive removal' }} fee (${{ quote.aioFee }}) covers the labor to physically open and access the drive — this is a hardware labor fee, not a data recovery fee, and is non-refundable regardless of outcome.</span><span v-if="quote.upfront - (quote.aioFee || 0) > 0"> Other non-refundable fees totaling ${{ (quote.upfront - (quote.aioFee || 0)).toLocaleString() }} also apply at check-in.</span>
          </template>
          <template v-else>
            🛡 <strong>No Data, No Charge</strong> — You only pay if we successfully recover your data. If recovery is unsuccessful, you owe nothing for the recovery. Please note: disassembly/removal fees (where applicable) are hardware labor fees — not recovery fees — and are non-refundable. Expedited service fees, cover-open fees, and certain deposits are also non-refundable.
          </template>
        </div>

        <div class="iqt-cta-row">
          <a href="/start-recovery" class="iqt-cta-primary">Start My Recovery →</a>
          <a href="tel:+18182728866" class="iqt-cta-call">📞 818-272-8866</a>
        </div>
        <button class="iqt-restart" @click="reset">← Start Over</button>
      </div>

      <!-- STEP: Call for Quote -->
      <div v-else-if="currentStep === 'call'" class="iqt-call">
        <div class="iqt-call-icon">📞</div>
        <h3 class="iqt-q">Call Us for a Custom Quote</h3>
        <p class="iqt-call-body">
          Pricing for <strong>{{ deviceOptions.find(d => d.id === sel.device)?.label }}</strong> cases
          is customized based on your specific device and situation.
          Give us a call — we'll give you a free quote in minutes.
        </p>
        <div class="iqt-call-actions">
          <a href="tel:+18182728866" class="iqt-cta-primary">📞 Call 818-272-8866</a>
          <a href="/start-recovery" class="iqt-cta-call">Fill Out Recovery Form</a>
        </div>
        <button class="iqt-restart" @click="back">← Change Device</button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.iqt-wrap {
  background: var(--color-card, #13161F);
  border: 1px solid var(--color-border, #1E2233);
  border-radius: 16px;
  padding: 40px 36px 36px;
  max-width: 820px;
  margin: 0 auto;
}

/* ── Progress ─────────────────────────────────── */
.iqt-progress {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 40px;
}
.iqt-ptrack {
  position: absolute;
  top: 17px;
  left: 28px;
  right: 28px;
  height: 2px;
  background: var(--color-border, #1E2233);
  z-index: 0;
}
.iqt-pfill {
  height: 100%;
  background: var(--color-gold, #F5C842);
  transition: width 0.4s ease;
}
.iqt-pdot {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 1;
  flex: 1;
}
.iqt-pcircle {
  width: 36px; height: 36px;
  border-radius: 50%;
  background: var(--color-bg, #0A0C14);
  border: 2px solid var(--color-border, #1E2233);
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 700;
  color: var(--color-muted, #A0A8B8);
  transition: all 0.3s ease;
}
.iqt-pdot.active .iqt-pcircle { border-color: var(--color-gold, #F5C842); color: var(--color-gold, #F5C842); background: rgba(245,200,66,0.08); }
.iqt-pdot.done  .iqt-pcircle  { background: var(--color-gold, #F5C842); border-color: var(--color-gold, #F5C842); color: #000; }
.iqt-plabel { font-size: 11px; color: var(--color-muted, #A0A8B8); text-align: center; white-space: nowrap; }
.iqt-pdot.active .iqt-plabel { color: var(--color-gold, #F5C842); }

/* ── Body ─────────────────────────────────────── */
.iqt-body { transition: opacity 0.2s ease; min-height: 200px; }
.iqt-fade { opacity: 0; }
.iqt-q { font-size: 1.2rem; font-weight: 700; color: #fff; margin-bottom: 8px; text-align: center; }
.iqt-hint { font-size: 0.83rem; color: var(--color-muted, #A0A8B8); text-align: center; margin-bottom: 20px; line-height: 1.5; }

/* ── Grids ────────────────────────────────────── */
.iqt-grid { display: grid; gap: 12px; }
.g4 { grid-template-columns: repeat(4, 1fr); }
.g3 { grid-template-columns: repeat(3, 1fr); }
.g2 { grid-template-columns: repeat(2, 1fr); }
.g1 { grid-template-columns: 1fr; }

/* ── Cards ────────────────────────────────────── */
.iqt-card {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  padding: 18px 12px;
  background: var(--color-bg, #0A0C14);
  border: 1.5px solid var(--color-border, #1E2233);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}
.iqt-card:hover { border-color: var(--color-gold, #F5C842); background: rgba(245,200,66,0.05); transform: translateY(-2px); }
.iqt-card.selected { border-color: var(--color-gold, #F5C842); background: rgba(245,200,66,0.1); }

.iqt-issue-card,
.iqt-urg-card {
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 18px 22px;
  text-align: left;
  gap: 16px;
}
.iqt-cover-card { padding: 24px 18px; }
.iqt-cap-card   { padding: 22px 12px; }
.iqt-drive-type-card { flex-direction: column; gap: 14px; padding: 22px 18px; }
.iqt-drive-imgs { display: flex; align-items: center; gap: 8px; justify-content: center; height: 90px; }
.iqt-drive-img  { height: 80px; width: auto; object-fit: contain; }
.iqt-drive-plus { font-size: 1.4rem; font-weight: 700; color: var(--color-gold, #F5C842); }

.iqt-icon     { font-size: 1.6rem; line-height: 1; flex-shrink: 0; }
.iqt-clabel   { font-size: 0.88rem; font-weight: 700; color: #fff; }
.iqt-csub     { font-size: 0.75rem; color: var(--color-muted, #A0A8B8); margin-top: 3px; line-height: 1.4; }
.iqt-issue-text { display: flex; flex-direction: column; gap: 3px; }

/* ── Back ─────────────────────────────────────── */
.iqt-back {
  margin-top: 18px; background: none; border: none;
  color: var(--color-muted, #A0A8B8); cursor: pointer;
  font-size: 0.85rem; padding: 4px 0; transition: color 0.2s;
}
.iqt-back:hover { color: #fff; }

/* ── Result ───────────────────────────────────── */
.iqt-result { text-align: center; }
.iqt-rbadge {
  display: inline-block;
  background: rgba(245,200,66,0.12); color: var(--color-gold, #F5C842);
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase;
  padding: 4px 14px; border-radius: 20px; border: 1px solid rgba(245,200,66,0.3);
  margin-bottom: 14px;
}
.iqt-price { font-size: 3.2rem; font-weight: 800; color: var(--color-gold, #F5C842); letter-spacing: -0.02em; line-height: 1.1; }
.iqt-price-lbl { color: var(--color-muted, #A0A8B8); font-size: 0.85rem; margin-bottom: 24px; }

.iqt-breakdown {
  background: var(--color-bg, #0A0C14);
  border: 1px solid var(--color-border, #1E2233);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 14px;
  text-align: left;
}
.iqt-brow {
  display: flex; justify-content: space-between; align-items: center;
  padding: 12px 18px; font-size: 0.875rem; color: #d0d8e8;
}
.iqt-brow + .iqt-brow { border-top: 1px solid var(--color-border, #1E2233); }
.iqt-brow.deposit { background: rgba(80,200,120,0.06); }
.iqt-brow.upfront { background: rgba(245,200,66,0.05); }
.iqt-brow em { font-size: 0.75rem; color: var(--color-muted, #A0A8B8); }
.iqt-bamount { font-weight: 700; color: #fff; font-size: 0.95rem; }

.iqt-notes { display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px; text-align: left; }
.iqt-note {
  font-size: 0.8rem; color: var(--color-muted, #A0A8B8);
  background: var(--color-bg, #0A0C14);
  border: 1px solid var(--color-border, #1E2233);
  border-radius: 8px; padding: 10px 14px; line-height: 1.5;
}
.iqt-note.warn { border-color: rgba(245,160,50,0.35); color: #e8b96a; }

.iqt-summary {
  background: var(--color-bg, #0A0C14);
  border: 1px solid var(--color-border, #1E2233);
  border-radius: 10px; padding: 14px 18px;
  margin-bottom: 16px; text-align: left;
}
.iqt-srow {
  display: flex; justify-content: space-between;
  font-size: 0.82rem; padding: 5px 0;
}
.iqt-srow + .iqt-srow { border-top: 1px solid var(--color-border, #1E2233); }
.iqt-srow span:first-child { color: var(--color-muted, #A0A8B8); }
.iqt-srow span:last-child  { color: #fff; font-weight: 600; }

.iqt-guarantee {
  background: rgba(245,200,66,0.06); border: 1px solid rgba(245,200,66,0.2);
  border-radius: 8px; padding: 12px 16px;
  font-size: 0.85rem; color: #fff; margin-bottom: 22px;
}
.iqt-cta-row { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 18px; }
.iqt-cta-primary {
  background: var(--color-gold, #F5C842); color: #000;
  font-weight: 700; font-size: 0.92rem;
  padding: 13px 26px; border-radius: 8px;
  text-decoration: none; transition: background 0.2s;
}
.iqt-cta-primary:hover { background: var(--color-gold-dark, #E8A020); }
.iqt-cta-call {
  background: transparent; border: 1.5px solid var(--color-border, #1E2233);
  color: #fff; font-weight: 600; font-size: 0.92rem;
  padding: 13px 26px; border-radius: 8px;
  text-decoration: none; transition: border-color 0.2s;
}
.iqt-cta-call:hover { border-color: var(--color-gold, #F5C842); }
.iqt-restart {
  background: none; border: none; color: var(--color-muted, #A0A8B8);
  cursor: pointer; font-size: 0.8rem; transition: color 0.2s;
}
.iqt-restart:hover { color: #fff; }

/* ── Call page ────────────────────────────────── */
.iqt-call { text-align: center; padding: 16px 0; }
.iqt-call-icon { font-size: 3rem; margin-bottom: 12px; }
.iqt-call-body { color: var(--color-muted, #A0A8B8); font-size: 0.95rem; line-height: 1.65; margin: 12px 0 28px; }
.iqt-call-actions { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 20px; }

/* ── Responsive ───────────────────────────────── */
@media (max-width: 720px) {
  .iqt-wrap { padding: 28px 18px 24px; }
  .g4 { grid-template-columns: repeat(2, 1fr); }
  .g3 { grid-template-columns: repeat(2, 1fr); }
  .g2 { grid-template-columns: 1fr; }
  .iqt-price { font-size: 2.4rem; }
  .iqt-plabel { display: none; }
  .iqt-ptrack { top: 17px; }
}
@media (max-width: 420px) {
  .g4 { grid-template-columns: 1fr; }
}

/* ── Light theme ──────────────────────────────── */
/* Contact Step */
.iqt-contact-step { display: flex; flex-direction: column; gap: 0; height: 100%; }
.iqt-contact-step .iqt-q { font-size: 1.1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 4px; }
.iqt-contact-step .iqt-hint { font-size: 0.82rem; color: #6b7280; margin-bottom: 18px; }
.iqt-contact-fields { display: flex; flex-direction: column; gap: 14px; width: 100%; flex: 1; }
.iqt-field { display: flex; flex-direction: column; gap: 5px; width: 100%; }
.iqt-label {
  font-size: 0.7rem;
  font-weight: 700;
  color: #374151;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}
.iqt-req { color: #ef4444; }
.iqt-input {
  border: 1.5px solid #e5e7eb;
  border-radius: 8px;
  padding: 11px 14px;
  font-size: 0.92rem;
  color: #1a1a2e;
  font-family: inherit;
  width: 100%;
  background: #f9fafb;
  transition: border-color 0.18s, box-shadow 0.18s, background 0.18s;
}
.iqt-input:focus { outline: none; border-color: #F5C842; background: #fff; box-shadow: 0 0 0 3px rgba(245,200,66,0.15); }
.iqt-input::placeholder { color: #9ca3af; }
.iqt-contact-methods { display: flex; gap: 6px; }
.iqt-method {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 1.5px solid #e5e7eb;
  border-radius: 8px;
  padding: 9px 6px;
  font-size: 0.78rem;
  font-weight: 700;
  color: #6b7280;
  background: #f9fafb;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
  user-select: none;
}
.iqt-method input { display: none; }
.iqt-method:hover { border-color: #d1d5db; background: #f3f4f6; color: #374151; }
.iqt-method.active { border-color: #F5C842; background: #fffbeb; color: #1a1a2e; font-weight: 800; }
.iqt-contact-error { color: #ef4444; font-size: 0.82rem; font-weight: 600; margin-top: 10px; padding: 8px 12px; background: #fef2f2; border-radius: 6px; border: 1px solid #fecaca; }

/* Get My Quote button in contact step */
.iqt-contact-step .iqt-btn-next {
  width: 100%;
  padding: 14px;
  font-size: 1rem;
  font-weight: 900;
  background: #F5C842;
  color: #1a1a1a;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: inherit;
  letter-spacing: 0.01em;
  transition: background 0.2s, transform 0.15s;
  margin-top: 4px;
}
.iqt-contact-step .iqt-btn-next:hover { background: #e0b43a; transform: translateY(-1px); }

.iqt-compact {
  padding: 0;
  height: 540px;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: none;
  border-radius: 0;
  max-width: 100% !important;
  width: 100% !important;
  margin: 0 !important;
  box-sizing: border-box;
}
.iqt-compact .iqt-body {
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  padding: 20px;
  scrollbar-width: thin;
  scrollbar-color: #e2e8f0 transparent;
  background: #fff;
  width: 100%;
  box-sizing: border-box;
}
.iqt-compact .iqt-q {
  font-size: 0.97rem;
  margin-bottom: 12px;
  color: #1a1a2e;
}
.iqt-compact .iqt-hint { color: #6b7280; font-size: 0.8rem; }
.iqt-compact .iqt-grid {
  gap: 7px;
}
.iqt-compact .iqt-card {
  padding: 10px 8px;
  gap: 6px;
  background: #f9fafb;
  border-color: #e5e7eb;
  color: #1a1a2e;
}
.iqt-compact .iqt-card:hover { border-color: #F5C842; background: #fffbeb; }
.iqt-compact .iqt-card.selected { border-color: #F5C842; background: #fffbeb; }
.iqt-compact .iqt-card-icon { font-size: 1.25rem; }
.iqt-compact .iqt-card-label { font-size: 0.75rem; color: #1a1a2e; }
.iqt-compact .iqt-card-sub { font-size: 0.65rem; color: #6b7280; }
.iqt-compact .iqt-nav { margin-top: 14px; gap: 8px; }
.iqt-compact .iqt-btn-back {
  padding: 9px 16px;
  font-size: 0.85rem;
  border-color: #e5e7eb;
  color: #6b7280;
}
.iqt-compact .iqt-btn-next {
  padding: 9px 20px;
  font-size: 0.88rem;
  background: #F5C842;
  color: #1a1a1a;
  border: none;
  border-radius: 7px;
  font-weight: 800;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s;
}
.iqt-compact .iqt-btn-next:hover { background: #e0b43a; }

.iqt-light {
  background: #ffffff;
  border-color: #e2e8f0;
}
.iqt-light .iqt-ptrack      { background: #e2e8f0; }
.iqt-light .iqt-pcircle     { background: #f8fafc; border-color: #cbd5e0; color: #4a5568; }
.iqt-light .iqt-plabel      { color: #718096; }
.iqt-light .iqt-pdot.active .iqt-pcircle { background: rgba(245,200,66,0.1); border-color: #d4a017; color: #9a6e00; }
.iqt-light .iqt-pdot.active .iqt-plabel  { color: #9a6e00; }
.iqt-light .iqt-pdot.done   .iqt-pcircle { background: #d4a017; border-color: #d4a017; color: #fff; }
.iqt-light .iqt-q           { color: #1a202c; }
.iqt-light .iqt-hint        { color: #718096; }
.iqt-light .iqt-card        { background: #f8fafc; border-color: #e2e8f0; }
.iqt-light .iqt-card:hover  { background: rgba(212,160,23,0.06); border-color: #d4a017; }
.iqt-light .iqt-card.selected { background: rgba(212,160,23,0.1); border-color: #d4a017; }
.iqt-light .iqt-clabel      { color: #1a202c; }
.iqt-light .iqt-csub        { color: #718096; }
.iqt-light .iqt-back,
.iqt-light .iqt-restart     { color: #718096; }
.iqt-light .iqt-back:hover,
.iqt-light .iqt-restart:hover { color: #1a202c; }
.iqt-light .iqt-price       { color: #9a6e00; }
.iqt-light .iqt-price-lbl   { color: #718096; }
.iqt-light .iqt-breakdown   { background: #f8fafc; border-color: #e2e8f0; }
.iqt-light .iqt-brow        { color: #2d3748; }
.iqt-light .iqt-brow + .iqt-brow { border-color: #e2e8f0; }
.iqt-light .iqt-brow.deposit { background: rgba(60,180,100,0.05); }
.iqt-light .iqt-brow.upfront { background: rgba(212,160,23,0.05); }
.iqt-light .iqt-brow em     { color: #718096; }
.iqt-light .iqt-bamount     { color: #1a202c; }
.iqt-light .iqt-note        { background: #f8fafc; border-color: #e2e8f0; color: #4a5568; }
.iqt-light .iqt-note.warn   { border-color: rgba(180,100,0,0.3); color: #7b4500; }
.iqt-light .iqt-summary     { background: #f8fafc; border-color: #e2e8f0; }
.iqt-light .iqt-srow + .iqt-srow { border-color: #e2e8f0; }
.iqt-light .iqt-srow span:first-child { color: #718096; }
.iqt-light .iqt-srow span:last-child  { color: #1a202c; }
.iqt-light .iqt-guarantee   { background: rgba(212,160,23,0.06); border-color: rgba(212,160,23,0.25); color: #2d3748; }
.iqt-light .iqt-cta-call    { border-color: #cbd5e0; color: #2d3748; }
.iqt-light .iqt-cta-call:hover { border-color: #d4a017; }
.iqt-light .iqt-rbadge      { background: rgba(212,160,23,0.1); color: #9a6e00; border-color: rgba(212,160,23,0.3); }
.iqt-light .iqt-call-body   { color: #4a5568; }

</style>
