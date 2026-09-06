/**
 * analytics.client.ts — Five Star custom analytics tracker v2
 *
 * Collects: page views, time on page, scroll depth, device/browser/OS,
 * screen resolution, language, timezone, connection type, ISP (server-side),
 * UTM params, referrer, session paths, and conversion events.
 *
 * visitor_id  → localStorage (persists across sessions, identifies returning visitors)
 * session_id  → sessionStorage (one per browser tab/session)
 * sequence    → page number within session (1, 2, 3...)
 */

// Analytics events are routed through our own server-side proxy (/api/track-analytics)
// to avoid CORS issues with direct browser → ngrok calls.
const MC_ENDPOINT = ''

// ─── Helpers ────────────────────────────────────────────────────────────────

function getOrCreate(storage: Storage, key: string, factory: () => string): string {
  let val = storage.getItem(key)
  if (!val) { val = factory(); storage.setItem(key, val) }
  return val
}

function uuid(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = Math.random() * 16 | 0
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
  })
}

function getDeviceType(): string {
  const ua = navigator.userAgent
  if (/iPad/i.test(ua)) return 'tablet'
  if (/Mobi|Android|iPhone|iPod/i.test(ua)) return 'mobile'
  return 'desktop'
}

function getBrowser(): string {
  const ua = navigator.userAgent
  if (/Edg\//i.test(ua)) return 'Edge'
  if (/Chrome\//i.test(ua) && !/Chromium/i.test(ua)) return 'Chrome'
  if (/Firefox\//i.test(ua)) return 'Firefox'
  if (/Safari\//i.test(ua) && !/Chrome/i.test(ua)) return 'Safari'
  return 'Other'
}

function getOS(): string {
  const ua = navigator.userAgent
  if (/Windows/i.test(ua)) return 'Windows'
  if (/iPhone|iPad|iPod/i.test(ua)) return 'iOS'
  if (/Mac OS X/i.test(ua)) return 'macOS'
  if (/Android/i.test(ua)) return 'Android'
  if (/Linux/i.test(ua)) return 'Linux'
  return 'Other'
}

function getConnectionType(): string {
  const conn = (navigator as any).connection
  if (!conn) return ''
  return conn.effectiveType || conn.type || ''
}

function getPageLoadTime(): number {
  try {
    const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (nav) return Math.round(nav.loadEventEnd - nav.startTime)
    // Fallback
    const t = performance.timing
    return t.loadEventEnd > 0 ? Math.round(t.loadEventEnd - t.navigationStart) : 0
  } catch { return 0 }
}

function throttle<T extends (...args: any[]) => void>(fn: T, ms: number): T {
  let last = 0
  return ((...args: any[]) => {
    const now = Date.now()
    if (now - last >= ms) { last = now; fn(...args) }
  }) as T
}

async function sendEvent(payload: Record<string, unknown>) {
  try {
    // Route through server-side proxy to avoid CORS — browser never touches ngrok directly
    await fetch('/api/track-analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    })
  } catch { /* never break the site */ }
}

// ─── Plugin ─────────────────────────────────────────────────────────────────

export default defineNuxtPlugin((nuxtApp) => {
  const visitorId = getOrCreate(localStorage, 'fs_vid', uuid)
  const sessionId = getOrCreate(sessionStorage, 'fs_sid', uuid)

  const getNextSeq = (): number => {
    const n = parseInt(sessionStorage.getItem('fs_seq') || '0') + 1
    sessionStorage.setItem('fs_seq', String(n))
    return n
  }

  const getLandingReferrer = (): string => {
    const key = 'fs_ref'
    if (!sessionStorage.getItem(key)) sessionStorage.setItem(key, document.referrer || '')
    return sessionStorage.getItem(key) || ''
  }

  // ── Time on page + scroll depth tracking ──────────────────────────────────
  let pageStartTime = Date.now()
  let currentPage = ''
  let maxScrollDepth = 0
  let lastPageViewPath = ''
  let lastPageViewAt = 0
  // Cache page height once — avoids reading scrollHeight on every scroll event.
  // Reading scrollHeight during scroll forces layout recalculation of all
  // content-visibility:auto sections, causing forced reflow on every scroll.
  let cachedPageHeight = 0

  const updateScrollDepth = throttle(() => {
    if (!cachedPageHeight) return // height not cached yet, skip
    const scrolled = window.scrollY + window.innerHeight
    const depth = Math.min(100, Math.round((scrolled / cachedPageHeight) * 100))
    if (depth > maxScrollDepth) maxScrollDepth = depth
  }, 300)

  const sendPageExit = () => {
    if (!currentPage) return
    const timeOnPage = Math.round((Date.now() - pageStartTime) / 1000)
    sendEvent({
      event_type: 'page_exit',
      session_id: sessionId,
      visitor_id: visitorId,
      page: currentPage,
      time_on_page: timeOnPage,
      scroll_depth: maxScrollDepth,
    })
  }

  // ── Page view ──────────────────────────────────────────────────────────────
  const sendPageView = () => {
    const params = new URLSearchParams(window.location.search)
    const page = window.location.pathname + window.location.search

    // Deduplicate: Nuxt can fire page:finish multiple times per navigation.
    // Skip if same path was already sent within 2 seconds.
    const now = Date.now()
    if (window.location.pathname === lastPageViewPath && now - lastPageViewAt < 2000) return
    lastPageViewPath = window.location.pathname
    lastPageViewAt = now

    const sequence = getNextSeq()

    sendEvent({
      event_type: 'pageview',
      visitor_id: visitorId,
      session_id: sessionId,
      page,
      page_title: document.title,
      referrer: getLandingReferrer(),
      sequence,
      device_type: getDeviceType(),
      browser: getBrowser(),
      os: getOS(),
      screen_width: window.screen.width,
      screen_height: window.screen.height,
      viewport_width: window.innerWidth,
      viewport_height: window.innerHeight,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      connection_type: getConnectionType(),
      page_load_ms: sequence === 1 ? getPageLoadTime() : 0,
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || '',
    })

    // Reset scroll + timer for new page
    maxScrollDepth = 0
    pageStartTime = Date.now()
    currentPage = page
  }

  // ── Lifecycle hooks ────────────────────────────────────────────────────────
  nuxtApp.hook('page:start', () => {
    sendPageExit() // send exit data for the page we're leaving
  })

  nuxtApp.hook('page:finish', () => {
    // Defer analytics off the main thread so it doesn't block LCP/hydration paint
    const schedule = (typeof requestIdleCallback !== 'undefined')
      ? (fn: () => void) => requestIdleCallback(fn, { timeout: 3000 })
      : (fn: () => void) => setTimeout(fn, 0)
    schedule(() => {
      sendPageView()
      // Cache page height ONCE in rAF — never read scrollHeight during scroll events
      requestAnimationFrame(() => { cachedPageHeight = document.documentElement.scrollHeight })
      window.addEventListener('scroll', updateScrollDepth, { passive: true })
    })
  })

  // Capture exit when tab closes / user navigates away
  window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') sendPageExit()
  })

  // ── Expose global tracker for conversion events ───────────────────────────
  // Components call: window.$analytics.track('conversion', { form: 'instant-quote' })
  ;(window as any).$analytics = {
    track: (eventType: string, data: Record<string, unknown> = {}) => {
      sendEvent({
        event_type: eventType,
        session_id: sessionId,
        visitor_id: visitorId,
        page: window.location.pathname,
        ...data,
      })
    }
  }

  // ── Click tracking ───────────────────────────────────────────────────────────────
  function getElementLocation(el: HTMLElement): string {
    if (el.closest('header')) return 'header'
    if (el.closest('footer')) return 'footer'
    if (el.closest('[class*="hero"]') || el.closest('#hero')) return 'hero'
    if (el.closest('nav')) return 'nav'
    if (el.closest('form')) return 'form'
    return 'body'
  }

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const closest = (sel: string) => target.closest(sel) as HTMLElement | null

    const phoneLink = closest('a[href^="tel:"]')
    if (phoneLink) {
      sendEvent({
        event_type: 'action',
        action_type: 'phone_click',
        element_label: phoneLink.textContent?.trim() || 'Phone',
        element_location: getElementLocation(phoneLink),
        session_id: sessionId,
        visitor_id: visitorId,
        page: window.location.pathname,
      })
      return
    }

    const btn = closest('button, a[href], [role="button"]')
    if (btn && !closest('nav') && btn.textContent?.trim()) {
      const label = btn.textContent!.trim().slice(0, 80)
      if (label.length > 2) {
        sendEvent({
          event_type: 'action',
          action_type: 'cta_click',
          element_label: label,
          element_location: getElementLocation(btn),
          session_id: sessionId,
          visitor_id: visitorId,
          page: window.location.pathname,
        })
      }
    }
  }, { capture: true, passive: true })

  // ── Scroll milestones ───────────────────────────────────────────────────────────────
  const milestonesFired = new Set<number>()
  const checkMilestones = throttle(() => {
    if (!cachedPageHeight) return
    const pct = Math.min(100, Math.round(((window.scrollY + window.innerHeight) / cachedPageHeight) * 100))
    for (const m of [25, 50, 75, 100]) {
      if (pct >= m && !milestonesFired.has(m)) {
        milestonesFired.add(m)
        sendEvent({
          event_type: 'action',
          action_type: 'scroll_milestone',
          element_label: `${m}%`,
          session_id: sessionId,
          visitor_id: visitorId,
          page: window.location.pathname,
        })
      }
    }
  }, 500)
  window.addEventListener('scroll', checkMilestones, { passive: true })
  nuxtApp.hook('page:start', () => milestonesFired.clear())

  // ── Heartbeat (active tab, every 30s) ────────────────────────────────────────────────
  let hbInterval: ReturnType<typeof setInterval> | null = null
  const startHb = () => {
    if (hbInterval) return
    hbInterval = setInterval(() => {
      if (document.visibilityState === 'visible')
        sendEvent({
          event_type: 'heartbeat',
          session_id: sessionId,
          visitor_id: visitorId,
          page: window.location.pathname,
          time_on_page: Math.round((Date.now() - pageStartTime) / 1000),
        })
    }, 30000)
  }
  document.addEventListener('visibilitychange', () =>
    document.visibilityState === 'visible'
      ? startHb()
      : (hbInterval && (clearInterval(hbInterval), hbInterval = null))
  )
  startHb()

  // ── Live Chat Widget ──────────────────────────────────────────────────────
  let liveChatId: number | null = null
  let chatWidget: HTMLElement | null = null
  let chatMessages: Array<{sender: string, message: string, created_at: string}> = []
  let chatCheckInterval: ReturnType<typeof setInterval> | null = null
  let chatMinimized = false
  let userClosed = false

  function renderMinimizedBar() {
    if (!chatWidget) return
    chatWidget.innerHTML = `
      <div id="fschat-bar" style="display:flex;align-items:center;gap:10px;background:#1a1a1a;border:1px solid #D4AF37;border-top:2px solid #D4AF37;border-radius:14px;padding:10px 16px;cursor:pointer;box-shadow:0 4px 20px rgba(0,0,0,0.4);min-width:220px;font-family:Inter,system-ui,sans-serif;user-select:none">
        <div style="width:28px;height:28px;border-radius:50%;background:#D4AF37;color:#1a1a1a;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;flex-shrink:0">A</div>
        <span style="font-weight:700;font-size:14px;color:#ffffff;flex:1">Five Star Data Recovery</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2.5" stroke-linecap="round"><polyline points="18 15 12 9 6 15"/></svg>
      </div>
    `
    const bar = chatWidget.querySelector('#fschat-bar')
    bar?.addEventListener('click', () => { chatMinimized = false; renderWidget() })
  }

  function renderWidget() {
    if (!chatWidget) return
    if (chatMinimized) { renderMinimizedBar(); return }
    const msgs = chatMessages.map(m => {
      const isAgent = m.sender === 'agent'
      return `<div style="display:flex;flex-direction:column;align-items:${isAgent ? 'flex-start' : 'flex-end'};margin-bottom:8px">
        <div style="background:${isAgent ? '#2a2a2a' : '#1a1a1a'};color:${isAgent ? '#D4AF37' : '#ffffff'};border-radius:${isAgent ? '12px 12px 12px 2px' : '12px 12px 2px 12px'};padding:10px 14px;max-width:85%;font-size:14px;line-height:1.5">${m.message}</div>
        <span style="font-size:10px;color:#9ca3af;margin-top:3px">${isAgent ? 'Support' : 'You'}</span>
      </div>`
    }).join('')

    chatWidget.innerHTML = `
      <div style="background:#111111;border:1px solid #D4AF37;border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.6);width:340px;font-family:Inter,system-ui,sans-serif;overflow:hidden">
        <div style="background:#1a1a1a;padding:14px 16px;display:flex;align-items:center;gap:10px;border-bottom:2px solid #D4AF37">
          <span style="width:9px;height:9px;border-radius:50%;background:#22c55e;box-shadow:0 0 6px #22c55e;flex-shrink:0"></span>
          <span style="font-size:14px;font-weight:700;color:#ffffff;flex:1">Five Star Data Recovery</span>
          <button id="fschat-minimize" style="background:transparent;border:none;color:#9ca3af;cursor:pointer;padding:4px 6px;line-height:1;font-size:20px;touch-action:manipulation" title="Minimize">&#8722;</button>
          <button id="fschat-close" style="background:transparent;border:none;color:#9ca3af;cursor:pointer;font-size:18px;padding:4px;line-height:1;touch-action:manipulation">&times;</button>
        </div>
        <div id="fschat-msgs" style="padding:14px;max-height:260px;overflow-y:auto;display:flex;flex-direction:column;background:#111111">${msgs}</div>
        <div style="padding:12px 14px;border-top:1px solid #2a2a2a;display:flex;gap:8px;background:#111111">
          <input id="fschat-input" placeholder="Type your reply..." style="flex:1;background:#1a1a1a;border:1px solid #D4AF37;border-radius:8px;color:#e5e7eb;padding:8px 12px;font-size:16px;outline:none;font-family:inherit" />
          <button id="fschat-send" style="background:#D4AF37;border:none;border-radius:8px;color:#1a1a1a;padding:8px 14px;font-size:15px;cursor:pointer;font-weight:700;touch-action:manipulation">Send</button>
        </div>
      </div>
    `
    // Scroll to bottom
    const msgsEl = chatWidget.querySelector('#fschat-msgs') as HTMLElement
    if (msgsEl) msgsEl.scrollTop = msgsEl.scrollHeight

    const minimizeBtn = chatWidget.querySelector('#fschat-minimize')
    const closeBtn = chatWidget.querySelector('#fschat-close')
    const sendBtn  = chatWidget.querySelector('#fschat-send')
    const input    = chatWidget.querySelector('#fschat-input') as HTMLInputElement

    minimizeBtn?.addEventListener('click', () => { chatMinimized = true; renderMinimizedBar() })
    closeBtn?.addEventListener('click', () => { userClosed = true; chatWidget!.style.display = 'none' })
    sendBtn?.addEventListener('click', sendReply)
    input?.addEventListener('keydown', (e: KeyboardEvent) => { if (e.key === 'Enter') sendReply() })
  }

  async function sendReply() {
    const input = chatWidget?.querySelector('#fschat-input') as HTMLInputElement
    const msg = input?.value?.trim()
    if (!msg || !liveChatId) return
    input.value = ''
    try {
      await fetch('/api/track-analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _livechat_reply: true, chat_id: liveChatId, session_id: sessionId, message: msg })
      })
      chatMessages.push({ sender: 'visitor', message: msg, created_at: new Date().toISOString() })
      renderWidget()
    } catch {}
  }

  function mountChatWidget() {
    if (chatWidget) return
    chatWidget = document.createElement('div')
    chatWidget.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:99999;max-width:calc(100vw - 32px)'
    document.body.appendChild(chatWidget)
    // Keep widget above keyboard on iOS (visualViewport tracks the visible area)
    const vv = (window as any).visualViewport
    if (vv) {
      vv.addEventListener('resize', () => {
        if (!chatWidget) return
        const keyboardOffset = window.innerHeight - vv.offsetTop - vv.height
        chatWidget.style.bottom = Math.max(24, keyboardOffset + 12) + 'px'
      })
    }
  }

  async function checkForChat() {
    try {
      const MC_BASE = 'https://mc.hovsepianholdings.com'
      const res = await fetch(`${MC_BASE}/api/fs-analytics/live-chat/check/${sessionId}`)
      const data = await res.json()
      if (!data.active) { liveChatId = null; return }
      liveChatId = data.chat_id
      chatMessages = data.messages || []
      mountChatWidget()
      if (!userClosed) {
        chatWidget!.style.display = 'block'
        renderWidget()
      }
    } catch {}
  }

  // ── SSE connection — instant push from MC, no polling delay ──────────────────
  const MC_BASE = 'https://mc.hovsepianholdings.com'
  let sseSource: EventSource | null = null

  function connectSSE() {
    if (sseSource) { sseSource.close(); sseSource = null; }
    sseSource = new EventSource(`${MC_BASE}/api/fs-analytics/live-chat/stream/${sessionId}`)

    sseSource.onmessage = (e: MessageEvent) => {
      try {
        const data = JSON.parse(e.data)
        if (data.type === 'connected') return // just connected, no active chat
        if (data.type === 'init' || data.type === 'chat' || data.type === 'message') {
          liveChatId = data.chat_id
          chatMessages = data.messages || []
          mountChatWidget()
          if (!userClosed) {
            chatWidget!.style.display = 'block'
            renderWidget()
          }
        }
      } catch {}
    }

    sseSource.onerror = () => {
      // Reconnect after 5s on error
      sseSource?.close()
      sseSource = null
      setTimeout(connectSSE, 5000)
    }
  }

  // Connect immediately
  connectSSE()

  // Fallback poll every 30s in case SSE is blocked (corporate firewalls, etc.)
  chatCheckInterval = setInterval(checkForChat, 30000)

})
