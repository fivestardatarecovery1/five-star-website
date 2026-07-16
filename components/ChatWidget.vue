<template>
  <ClientOnly>
    <!-- Bubble -->
    <button
      class="chat-bubble"
      :class="{ 'chat-bubble--open': open }"
      @click="toggleChat"
      aria-label="Chat with us"
    >
      <span v-if="!open" class="chat-bubble-icon">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </span>
      <span v-else class="chat-bubble-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </span>
      <span v-if="!open && unread > 0" class="chat-unread">{{ unread }}</span>
    </button>

    <!-- Panel -->
    <Transition name="chat-panel">
      <div v-if="open" ref="panelEl" class="chat-panel">
        <!-- Header -->
        <div class="chat-header">
          <div class="chat-header-avatar">A</div>
          <div class="chat-header-info">
            <span class="chat-header-name">Alex</span>
            <span class="chat-header-status">
              <span class="chat-status-dot"></span> Five Star Data Recovery
            </span>
          </div>
          <button class="chat-close" @click="open = false">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <!-- Human takeover banner -->
        <div v-if="humanTakeover" class="chat-takeover-banner">
          <span class="chat-takeover-dot"></span>
          You're now connected with our team 👋
        </div>

        <!-- Messages -->
        <div class="chat-messages" ref="messagesEl">
          <div
            v-for="(msg, i) in visibleMessages"
            :key="i"
            class="chat-msg-wrap"
            :class="msg.role === 'user' ? 'chat-msg-wrap--user' : msg.role === 'support' ? 'chat-msg-wrap--support' : 'chat-msg-wrap--agent'"
          >
            <div v-if="msg.role === 'assistant'" class="chat-msg-avatar">A</div>
            <div v-if="msg.role === 'support'" class="chat-msg-avatar chat-msg-avatar--support">★</div>
            <div class="chat-msg" :class="msg.role === 'user' ? 'chat-msg--user' : msg.role === 'support' ? 'chat-msg--support' : 'chat-msg--agent'">
              <div v-if="msg.role === 'support'" class="chat-msg-support-label">Support</div>
              <span v-html="formatMsg(msg.content)"></span>
            </div>
          </div>

          <!-- Typing indicator -->
          <div v-if="loading && !streamingText" class="chat-msg-wrap chat-msg-wrap--agent">
            <div class="chat-msg-avatar">A</div>
            <div class="chat-msg chat-msg--agent chat-msg--typing">
              <span></span><span></span><span></span>
            </div>
          </div>

          <!-- Streaming message -->
          <div v-if="streamingText" class="chat-msg-wrap chat-msg-wrap--agent">
            <div class="chat-msg-avatar">A</div>
            <div class="chat-msg chat-msg--agent">
              <span v-html="formatMsg(streamingText)"></span>
            </div>
          </div>

          <!-- Callback card -->
          <div v-if="callbackReady && !callbackDone" class="chat-submit-card chat-submit-card--callback">
            <div class="chat-submit-card-title">📞 Request a Callback</div>
            <div class="chat-submit-card-details">
              <div><strong>Name:</strong> {{ callbackReady.name }}</div>
              <div><strong>Phone:</strong> {{ callbackReady.phone }}</div>
              <div v-if="callbackReady.issue"><strong>Issue:</strong> {{ callbackReady.issue }}</div>
            </div>
            <div class="chat-submit-card-actions">
              <button class="chat-submit-btn" :disabled="callbackSubmitting" @click="submitCallback">
                {{ callbackSubmitting ? 'Sending…' : '📞 Request Callback' }}
              </button>
              <button class="chat-submit-edit" @click="callbackReady = null">Edit</button>
            </div>
          </div>
          <div v-if="callbackDone" class="chat-submit-success chat-submit-success--callback">
            <div class="chat-submit-success-icon" style="background:#c62828;">📞</div>
            <strong>Callback requested!</strong>
            <p>Our team will call you back at {{ callbackDone }} as soon as possible.</p>
          </div>

          <!-- Submit ready card -->
          <div v-if="submitReady && !submitDone" class="chat-submit-card">
            <div class="chat-submit-card-title">📋 Ready to submit your case</div>
            <div class="chat-submit-card-details">
              <div><strong>Name:</strong> {{ submitReady.firstName }} {{ submitReady.lastName }}</div>
              <div><strong>Email:</strong> {{ submitReady.email }}</div>
              <div v-if="submitReady.streetAddress"><strong>Ship from:</strong> {{ submitReady.streetAddress }}, {{ submitReady.city }}, {{ submitReady.state }}</div>
            </div>
            <div class="chat-submit-card-actions">
              <button class="chat-submit-btn" :disabled="submitting" @click="submitCase">
                {{ submitting ? 'Submitting…' : '✓ Submit My Case' }}
              </button>
              <button class="chat-submit-edit" @click="submitReady = null">Edit</button>
            </div>
          </div>

          <!-- Submit success -->
          <div v-if="submitDone" class="chat-submit-success">
            <div class="chat-submit-success-icon">✓</div>
            <strong>Case submitted!</strong>
            <p>Check your email for your prepaid shipping label and case details.</p>
            <p style="font-size:0.8rem;color:#6b7280;margin-top:6px;">Questions? Call <a href="tel:8182728866" style="color:#c62828;font-weight:700;">818-272-8866</a></p>
          </div>
        </div>

        <!-- Input -->
        <div class="chat-input-wrap">
          <textarea
            ref="inputEl"
            v-model="draft"
            class="chat-input"
            :placeholder="humanTakeover ? 'Message our team…' : 'Type a message…'"
            rows="1"
            :disabled="loading || submitDone"
            @keydown.enter.prevent="sendMessage"
            @input="autoResize"
          ></textarea>
          <button class="chat-send" :disabled="!draft.trim() || loading || submitDone" @click="sendMessage">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
            </svg>
          </button>
        </div>
        <div class="chat-footer">Powered by Five Star AI · <a href="tel:8182728866">818-272-8866</a></div>
      </div>
    </Transition>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, nextTick, onMounted, onUnmounted } from 'vue'

interface Message { role: 'user' | 'assistant' | 'support'; content: string }

const props = defineProps<{ autoOpen?: boolean }>()

const open = ref(false)
const draft = ref('')
const loading = ref(false)
const streamingText = ref('')
const unread = ref(0)
const submitReady = ref<any>(null)
const submitting = ref(false)
const submitDone = ref(false)
const callbackReady = ref<any>(null)
const callbackSubmitting = ref(false)
const callbackDone = ref<string | null>(null)
const messagesEl = ref<HTMLElement | null>(null)
const inputEl = ref<HTMLTextAreaElement | null>(null)
const panelEl = ref<HTMLElement | null>(null)

const messages = ref<Message[]>([])
const GREETING = 'Hi there! 👋 I\'m Alex from Five Star Data Recovery. Whether your drive is clicking, not showing up, or you accidentally deleted something — I can help get your data back.\n\nWhat happened to your device?'

const sessionId = ref('')
if (import.meta.client) sessionId.value = crypto.randomUUID()
const sourcePage = ref(import.meta.client ? window.location.pathname : '/')
const isFirstExchange = ref(true)

// Human takeover state
const humanTakeover = ref(false)
const seenReplyIds = ref<Set<string>>(new Set())
let statusPollInterval: ReturnType<typeof setInterval> | null = null

const visibleMessages = ref<Message[]>([
  { role: 'assistant', content: GREETING }
])

// Visual viewport resize handler (iOS keyboard fix)
function onViewportResize() {
  if (!panelEl.value || !import.meta.client) return
  const vv = (window as any).visualViewport
  if (!vv) return
  // Read layout values first, then batch all writes in rAF to avoid forced reflow
  const isMobile = window.innerWidth <= 600
  const height = vv.height
  const top = vv.offsetTop
  requestAnimationFrame(() => {
    if (!panelEl.value) return
    if (isMobile) {
      panelEl.value.style.height = height + 'px'
      panelEl.value.style.top = top + 'px'
      scrollToBottom()
    } else {
      panelEl.value.style.height = ''
      panelEl.value.style.top = ''
    }
  })
}

onMounted(() => {
  if (!import.meta.client) return
  const vv = (window as any).visualViewport
  if (vv) vv.addEventListener('resize', onViewportResize)
  // Auto-open if user clicked the stub bubble before the widget loaded
  if (props.autoOpen) {
    open.value = true
    nextTick(() => { inputEl.value?.focus(); onViewportResize() })
  }
})

onUnmounted(() => {
  if (!import.meta.client) return
  const vv = (window as any).visualViewport
  if (vv) vv.removeEventListener('resize', onViewportResize)
  stopStatusPoll()
})

// ── Human takeover polling ────────────────────────────────────────────────

function startStatusPoll(intervalMs = 5000) {
  stopStatusPoll()
  statusPollInterval = setInterval(pollChatStatus, intervalMs)
}

function stopStatusPoll() {
  if (statusPollInterval !== null) {
    clearInterval(statusPollInterval)
    statusPollInterval = null
  }
}

async function pollChatStatus() {
  if (!sessionId.value || !import.meta.client) return
  try {
    const res = await fetch(`/api/chat-status/${sessionId.value}`)
    if (!res.ok) return
    const data = await res.json() as any

    const wasHuman = humanTakeover.value
    humanTakeover.value = Boolean(data.human_takeover)

    if (humanTakeover.value && !wasHuman) {
      // Just got taken over — switch to faster poll
      startStatusPoll(3000)
      scrollToBottom()
    } else if (!humanTakeover.value && wasHuman) {
      // Released back to AI
      visibleMessages.value.push({
        role: 'assistant',
        content: "You've been reconnected with our AI assistant 🤖 — feel free to keep asking questions!"
      })
      scrollToBottom()
      startStatusPoll(5000) // back to slow poll
    }

    // Show new admin replies
    const adminReplies: Array<{ id: string; content: string; sent_at: string }> = data.admin_replies || []
    const newReplies = adminReplies.filter(r => !seenReplyIds.value.has(r.id))
    if (newReplies.length > 0) {
      for (const reply of newReplies) {
        visibleMessages.value.push({ role: 'support', content: reply.content })
        seenReplyIds.value.add(reply.id)
      }
      scrollToBottom()
      // Acknowledge
      fetch(`/api/chat-message-ack/${sessionId.value}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ack_index: adminReplies.length }),
      }).catch(() => {})
    }
  } catch {}
}

function toggleChat() {
  open.value = !open.value
  unread.value = 0
  if (open.value) {
    nextTick(() => {
      inputEl.value?.focus()
      onViewportResize()
    })
  }
}

function formatMsg(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>')
    .replace(/•\s/g, '• ')
}

function autoResize(e: Event) {
  const el = e.target as HTMLTextAreaElement
  // Two-frame approach: reset height in frame 1, read + set in frame 2
  // This avoids forced reflow (write then read in same frame)
  requestAnimationFrame(() => {
    el.style.height = 'auto'
    requestAnimationFrame(() => {
      const next = Math.min(el.scrollHeight, 120)
      el.style.height = next + 'px'
    })
  })
}

function scrollToBottom() {
  nextTick(() => {
    if (!messagesEl.value) return
    // Read scrollHeight, then write scrollTop in next rAF to avoid forced reflow
    const el = messagesEl.value
    requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight
    })
  })
}

async function sendMessage() {
  const text = draft.value.trim()
  if (!text || loading.value) return
  draft.value = ''

  // Reset textarea height
  if (inputEl.value) inputEl.value.style.height = 'auto'

  // Add user message to visible chat
  const userMsg: Message = { role: 'user', content: text }
  visibleMessages.value.push(userMsg)
  scrollToBottom()

  // If human has taken over — save to MC (not AI) and return
  if (humanTakeover.value) {
    messages.value.push(userMsg)
    fetch('/api/chat-save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: sessionId.value,
        messages: messages.value,
        sourcePage: sourcePage.value,
        outcome: 'human',
      }),
    }).catch(() => {})
    nextTick(() => inputEl.value?.focus())
    return
  }

  messages.value.push(userMsg)

  loading.value = true
  streamingText.value = ''

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: messages.value, sessionId: sessionId.value, sourcePage: sourcePage.value }),
    })

    if (!res.ok) throw new Error('Request failed')

    const reader = res.body!.getReader()
    const decoder = new TextDecoder()
    let buffer = ''
    let fullText = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      buffer += decoder.decode(value, { stream: true })
      const lines = buffer.split('\n')
      buffer = lines.pop() || ''

      for (const line of lines) {
        if (!line.startsWith('data: ')) continue
        const data = line.slice(6)
        if (data === '[DONE]') continue
        try {
          const { text } = JSON.parse(data)
          if (text) {
            fullText += text
            streamingText.value = fullText
            scrollToBottom()
          }
        } catch {}
      }
    }

    // Check for submit action
    const submitMatch = fullText.match(/SUBMIT_READY:(\{.*?\})(?:\n|$)/s)
    if (submitMatch) {
      try {
        submitReady.value = JSON.parse(submitMatch[1])
        fullText = fullText.replace(/SUBMIT_READY:\{.*?\}(?:\n|$)/s, '').trim()
        if (!fullText) fullText = 'I have everything I need! Please review your case details below and confirm when ready.'
      } catch {}
    }

    // Check for callback action
    const callbackMatch = fullText.match(/SUBMIT_CALLBACK:(\{.*?\})(?:\n|$)/s)
    if (callbackMatch) {
      try {
        callbackReady.value = JSON.parse(callbackMatch[1])
        fullText = fullText.replace(/SUBMIT_CALLBACK:\{.*?\}(?:\n|$)/s, '').trim()
        if (!fullText) fullText = 'Got it! Please confirm your details below and I\'ll have someone call you back shortly.'
      } catch {}
    }

    streamingText.value = ''

    // Strip internal signals before displaying
    const humanRequested = fullText.includes('HUMAN_REQUESTED')
    const displayText = fullText.replace(/HUMAN_REQUESTED\s*/g, '').trim()

    const assistantMsg: Message = { role: 'assistant', content: displayText }
    visibleMessages.value.push(assistantMsg)
    messages.value.push({ role: 'assistant', content: fullText }) // keep signal in history for detection
    scrollToBottom()

    if (!open.value) unread.value++

    // Save transcript client-side (Vercel kills server after stream ends)
    const outcome = fullText.includes('SUBMIT_READY') ? 'submitted'
      : fullText.includes('SUBMIT_CALLBACK') ? 'callback'
      : humanRequested ? 'human_requested'
      : 'active'
    const notifyNew = isFirstExchange.value
    isFirstExchange.value = false
    fetch('/api/chat-save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: sessionId.value,
        messages: messages.value,
        sourcePage: sourcePage.value,
        outcome,
        isNew: notifyNew,
      }),
    }).catch(() => {})

    // Start polling for human takeover after first AI exchange
    if (notifyNew) startStatusPoll(5000)

  } catch (e) {
    streamingText.value = ''
    visibleMessages.value.push({
      role: 'assistant',
      content: 'Sorry, I ran into an issue. Please call us at **818-272-8866** and we\'ll get you sorted right away.'
    })
    scrollToBottom()
  } finally {
    loading.value = false
    nextTick(() => inputEl.value?.focus())
  }
}

async function submitCallback() {
  if (!callbackReady.value) return
  callbackSubmitting.value = true
  try {
    await fetch('/api/chat-callback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(callbackReady.value),
    })
    callbackDone.value = callbackReady.value.phone
    callbackReady.value = null
    visibleMessages.value.push({ role: 'assistant', content: `Perfect! I've notified our team and they'll call you at **${callbackDone.value}** as soon as possible. We're looking forward to helping you get your data back! 📞` })
    scrollToBottom()
  } catch {
    callbackSubmitting.value = false
    visibleMessages.value.push({ role: 'assistant', content: 'There was an issue sending your request. Please call us directly at **818-272-8866**.' })
    scrollToBottom()
  }
}

async function submitCase() {
  if (!submitReady.value) return
  submitting.value = true
  try {
    const today = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Los_Angeles' })
    const res = await fetch('/api/submit-mailin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...submitReady.value, date: today, shippingCarrier: 'FedEx', termsAgreed: true }),
    })
    const data = await res.json() as any
    if (data.success || res.ok) {
      submitDone.value = true
      submitReady.value = null
      visibleMessages.value.push({ role: 'assistant', content: '🎉 Your case is submitted! You\'ll receive a prepaid FedEx label and all the details at your email. We\'ll take great care of your drive.' })
      scrollToBottom()
    } else {
      throw new Error('Submission failed')
    }
  } catch {
    submitting.value = false
    visibleMessages.value.push({ role: 'assistant', content: 'There was a problem submitting. Please call us at **818-272-8866** and we\'ll get you set up right away.' })
    scrollToBottom()
  }
}
</script>

<style scoped>
/* ── Bubble ── */
.chat-bubble {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #c62828;
  color: #fff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(198,40,40,0.45);
  transition: transform 0.2s, box-shadow 0.2s;
}
.chat-bubble:hover { transform: scale(1.07); box-shadow: 0 6px 24px rgba(198,40,40,0.55); }
.chat-bubble--open { background: #374151; box-shadow: 0 4px 16px rgba(0,0,0,0.25); }
.chat-bubble-icon { display: flex; align-items: center; justify-content: center; }
.chat-unread {
  position: absolute;
  top: -2px; right: -2px;
  background: #F5C842;
  color: #1a1a2e;
  font-size: 0.7rem;
  font-weight: 900;
  min-width: 18px;
  height: 18px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
}

/* ── Panel ── */
.chat-panel {
  position: fixed;
  bottom: 96px;
  right: 24px;
  z-index: 9998;
  width: 360px;
  max-width: calc(100vw - 32px);
  max-height: calc(100dvh - 120px);
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 16px 48px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
}
.chat-panel-enter-active, .chat-panel-leave-active { transition: opacity 0.2s, transform 0.2s; }
.chat-panel-enter-from, .chat-panel-leave-to { opacity: 0; transform: translateY(12px) scale(0.97); }

/* ── Header ── */
.chat-header {
  background: #c62828;
  color: #fff;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}
.chat-header-avatar {
  width: 38px; height: 38px;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: 1rem; flex-shrink: 0;
}
.chat-header-info { flex: 1; min-width: 0; }
.chat-header-name { display: block; font-weight: 800; font-size: 0.95rem; }
.chat-header-status { font-size: 0.75rem; opacity: 0.85; display: flex; align-items: center; gap: 5px; }
.chat-status-dot { width: 7px; height: 7px; border-radius: 50%; background: #4ade80; display: inline-block; }
.chat-close { background: none; border: none; color: rgba(255,255,255,0.8); cursor: pointer; padding: 4px; display: flex; align-items: center; }
.chat-close:hover { color: #fff; }

/* ── Messages ── */
.chat-messages {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  padding: 16px 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #f8fafc;
}
.chat-msg-wrap { display: flex; align-items: flex-end; gap: 8px; }
.chat-msg-wrap--user { flex-direction: row-reverse; padding-left: 36px; }
.chat-msg-avatar {
  width: 28px; height: 28px; border-radius: 50%;
  background: #c62828; color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.72rem; font-weight: 800; flex-shrink: 0;
}
.chat-msg {
  max-width: 78%;
  min-width: 0;
  padding: 10px 13px;
  border-radius: 16px;
  font-size: 0.875rem;
  line-height: 1.55;
  word-break: break-word;
  overflow-wrap: anywhere;
}
.chat-msg--agent {
  background: #fff;
  color: #1a1a2e;
  border-bottom-left-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.07);
}
.chat-msg--user {
  background: #c62828;
  color: #fff;
  border-bottom-right-radius: 4px;
}

/* Typing dots */
.chat-msg--typing { display: flex; align-items: center; gap: 4px; padding: 12px 16px; }
.chat-msg--typing span {
  width: 7px; height: 7px; border-radius: 50%; background: #d1d5db;
  animation: typing-dot 1.2s infinite ease-in-out;
}
.chat-msg--typing span:nth-child(2) { animation-delay: 0.2s; }
.chat-msg--typing span:nth-child(3) { animation-delay: 0.4s; }
@keyframes typing-dot {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
  30% { transform: translateY(-5px); opacity: 1; }
}

/* ── Human takeover banner ── */
.chat-takeover-banner {
  background: linear-gradient(135deg, #064e3b, #065f46);
  color: #6ee7b7;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 7px 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #059669;
  flex-shrink: 0;
  letter-spacing: 0.01em;
}
.chat-takeover-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #34d399;
  flex-shrink: 0;
  animation: pulse-green 1.5s infinite;
}
@keyframes pulse-green {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(0.85); }
}

/* ── Support (human admin) messages ── */
.chat-msg-wrap--support { align-items: flex-start; }
.chat-msg-avatar--support {
  background: #065f46 !important;
  color: #6ee7b7 !important;
  font-size: 0.6rem !important;
}
.chat-msg--support {
  background: #ecfdf5;
  color: #064e3b;
  border: 1.5px solid #6ee7b7;
  border-bottom-left-radius: 4px;
  box-shadow: 0 1px 4px rgba(6,95,70,0.12);
}
.chat-msg-support-label {
  font-size: 0.65rem;
  font-weight: 800;
  color: #059669;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 4px;
}

/* ── Submit card ── */
.chat-submit-card {
  background: #fff;
  border: 2px solid #c62828;
  border-radius: 14px;
  padding: 14px 16px;
  margin: 4px 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
}
.chat-submit-card--callback { border-color: #c62828; }
.chat-submit-card-title { font-weight: 800; font-size: 0.9rem; color: #1a1a2e; margin-bottom: 10px; }
.chat-submit-card-details { font-size: 0.8rem; color: #374151; line-height: 1.8; margin-bottom: 12px; }
.chat-submit-card-details div { border-bottom: 1px solid #f1f5f9; padding-bottom: 3px; }
.chat-submit-card-actions { display: flex; gap: 8px; }
.chat-submit-btn {
  flex: 1; background: #c62828; color: #fff; border: none;
  padding: 10px 16px; border-radius: 8px; font-weight: 800; font-size: 0.875rem;
  cursor: pointer; transition: background 0.15s;
}
.chat-submit-btn:hover:not(:disabled) { background: #b91c1c; }
.chat-submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
.chat-submit-edit {
  background: none; border: 1.5px solid #d1d5db; color: #6b7280;
  padding: 10px 14px; border-radius: 8px; font-size: 0.875rem; cursor: pointer;
}
.chat-submit-edit:hover { border-color: #9ca3af; color: #374151; }

/* ── Submit success ── */
.chat-submit-success {
  background: #f0fdf4; border: 2px solid #22c55e; border-radius: 14px;
  padding: 16px; text-align: center; font-size: 0.875rem; color: #1a1a2e;
}
.chat-submit-success-icon {
  width: 40px; height: 40px; border-radius: 50%; background: #22c55e; color: #fff;
  font-size: 1.2rem; display: flex; align-items: center; justify-content: center;
  margin: 0 auto 8px; font-weight: 900;
}
.chat-submit-success p { margin: 4px 0; color: #374151; font-size: 0.82rem; }

/* ── Input ── */
.chat-input-wrap {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding: 12px 12px 10px;
  background: #fff;
  border-top: 1px solid #e5e7eb;
  flex-shrink: 0;
}
.chat-input {
  flex: 1;
  border: 1.5px solid #e5e7eb;
  border-radius: 12px;
  padding: 9px 13px;
  font-size: 16px; /* Must be 16px+ to prevent iOS auto-zoom */
  font-family: inherit;
  resize: none;
  line-height: 1.5;
  color: #1a1a2e;
  background: #f9fafb;
  transition: border-color 0.15s;
  max-height: 120px;
  overflow-y: auto;
}
.chat-input:focus { outline: none; border-color: #c62828; background: #fff; }
.chat-input:disabled { opacity: 0.6; }
.chat-send {
  width: 38px; height: 38px; border-radius: 50%;
  background: #c62828; color: #fff; border: none;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; flex-shrink: 0; transition: background 0.15s, transform 0.1s;
}
.chat-send:hover:not(:disabled) { background: #b91c1c; transform: scale(1.05); }
.chat-send:disabled { background: #d1d5db; cursor: not-allowed; }
.chat-footer {
  text-align: center;
  font-size: 0.7rem;
  color: #9ca3af;
  padding: 4px 12px 8px;
  background: #fff;
  flex-shrink: 0;
}
.chat-footer a { color: #9ca3af; text-decoration: none; }
.chat-footer a:hover { color: #6b7280; }

/* Mobile — full screen chat */
@media (max-width: 600px) {
  .chat-panel {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    width: 100vw;
    max-width: 100vw;
    max-height: 100dvh;
    border-radius: 0;
    z-index: 99999;
    box-sizing: border-box;
    overflow: hidden;
  }
  .chat-messages {
    padding: 14px 12px;
    overflow-x: hidden;
    box-sizing: border-box;
  }
  .chat-msg-wrap { max-width: 100%; box-sizing: border-box; }
  .chat-msg-wrap--user { padding-left: 44px; }
  .chat-msg-wrap--agent { padding-right: 8px; }
  .chat-msg { max-width: 100%; box-sizing: border-box; }
  .chat-input-wrap { padding: 10px; box-sizing: border-box; }
  .chat-bubble { bottom: 16px; right: 16px; width: 52px; height: 52px; }
}
</style>
