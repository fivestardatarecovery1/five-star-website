<script setup lang="ts">
const route = useRoute()
const menuOpen = ref(false)
const servicesOpen = ref(false)
const mobileServicesOpen = ref(false)
let closeTimer: ReturnType<typeof setTimeout> | null = null

const byDevice = [
  { label: 'Hard Drive Recovery', href: '/data-recovery/hard-drive-recovery' },
  { label: 'SSD Recovery', href: '/data-recovery/ssd-recovery' },
  { label: 'RAID Recovery', href: '/data-recovery/raid-recovery' },
  { label: 'Laptop Recovery', href: '/data-recovery/laptop-recovery' },
  { label: 'Desktop Recovery', href: '/data-recovery/desktop-recovery' },
  { label: 'External HDD Recovery', href: '/data-recovery/external-hard-drive' },
  { label: 'Mac / iMac Recovery', href: '/data-recovery/mac-recovery' },
  { label: 'iPhone Recovery', href: '/data-recovery/iphone-recovery' },
  { label: 'USB Flash Drive', href: '/data-recovery/usb-recovery' },
  { label: 'SD Card Recovery', href: '/data-recovery/sd-card-recovery' },
  { label: 'NAS Recovery', href: '/data-recovery/nas-recovery' },
  { label: 'CFast Card Recovery', href: '/data-recovery/cfast-recovery' },
]

const byBrand = [
  { label: 'Western Digital', href: '/data-recovery/western-digital-recovery' },
  { label: 'Seagate', href: '/data-recovery/seagate-recovery' },
  { label: 'Samsung', href: '/data-recovery/samsung-recovery' },
  { label: 'LaCie', href: '/data-recovery/lacie-recovery' },
  { label: 'Toshiba', href: '/data-recovery/toshiba-recovery' },
  { label: 'Hitachi', href: '/data-recovery/hitachi-recovery' },
]

const byProblem = [
  { label: 'Hard Drive Clicking', href: '/hard-drive-clicking' },
  { label: "Drive Won't Power On", href: '/drive-doesnt-power-on' },
  { label: 'Dropped Hard Drive', href: '/data-recovery/dropped-hard-drive' },
  { label: 'Bad Sectors', href: '/data-recovery/bad-sectors' },
  { label: 'Drive Not Showing Up', href: '/data-recovery/hard-drive-not-showing-up' },
  { label: 'Deleted Files', href: '/data-recovery/deleted-files' },
]

const special = [
  { label: 'Clean Room Recovery', href: '/data-recovery/clean-room' },
  { label: 'Video File Repair', href: '/data-recovery/video-file-repair' },
  { label: 'Mail-In Service', href: '/data-recovery/data-recovery-mail-in-service' },
  { label: 'Expedited Service', href: '/expedited-service' },
  { label: 'Expedited Service Plus', href: '/expedited-service-plus' },
]

function openDropdown() {
  if (closeTimer) clearTimeout(closeTimer)
  servicesOpen.value = true
}

function scheduleClose() {
  closeTimer = setTimeout(() => {
    servicesOpen.value = false
  }, 150)
}

function cancelClose() {
  if (closeTimer) clearTimeout(closeTimer)
}

function closeAll() {
  servicesOpen.value = false
  menuOpen.value = false
  mobileServicesOpen.value = false
}

watch(() => route.path, closeAll)
</script>

<template>
  <div class="navbar-root">
  <AnnouncementBar />
  <nav class="navbar">
    <!-- Top bar -->
    <div class="topbar">
      <div class="container topbar-inner">


      </div>
    </div>

    <!-- Main nav -->
    <div class="navbar-main">
      <div class="container nav-inner">
        <!-- Logo -->
        <NuxtLink to="/" class="nav-logo" @click="closeAll">
          <img src="/logo.webp" alt="Five Star Data Recovery" />
        </NuxtLink>

        <!-- Desktop nav links -->
        <ul class="nav-links">
          <li><NuxtLink to="/" exact-active-class="active">Home</NuxtLink></li>

          <li
            class="has-dropdown"
            @mouseenter="openDropdown"
            @mouseleave="scheduleClose"
          >
            <NuxtLink to="/data-recovery" class="dropdown-trigger" :class="{ active: servicesOpen || $route.path.startsWith('/data-recovery') }" @click="closeAll">
              Data Recovery
              <svg class="chevron" :class="{ rotated: servicesOpen }" width="11" height="7" viewBox="0 0 11 7" fill="none">
                <path d="M1 1l4.5 4.5L10 1" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </NuxtLink>

            <!-- Mega dropdown -->
            <Transition name="dropdown">
              <div
                v-show="servicesOpen"
                class="mega-dropdown"
                @mouseenter="cancelClose"
                @mouseleave="scheduleClose"
              >
                <div class="mega-grid">
                  <div class="mega-col">
                    <div class="mega-col-header">By Device</div>
                    <NuxtLink v-for="s in byDevice" :key="s.href" :to="s.href" class="mega-link" @click="closeAll">
                      <span class="mega-link-dot">›</span>{{ s.label }}
                    </NuxtLink>
                  </div>
                  <div class="mega-col">
                    <div class="mega-col-header">By Brand</div>
                    <NuxtLink v-for="s in byBrand" :key="s.href" :to="s.href" class="mega-link" @click="closeAll">
                      <span class="mega-link-dot">›</span>{{ s.label }}
                    </NuxtLink>
                    <div class="mega-col-header" style="margin-top:20px">Special Services</div>
                    <NuxtLink v-for="s in special" :key="s.href" :to="s.href" class="mega-link" @click="closeAll">
                      <span class="mega-link-dot">›</span>{{ s.label }}
                    </NuxtLink>
                  </div>
                  <div class="mega-col">
                    <div class="mega-col-header">By Problem</div>
                    <NuxtLink v-for="s in byProblem" :key="s.href" :to="s.href" class="mega-link" @click="closeAll">
                      <span class="mega-link-dot">›</span>{{ s.label }}
                    </NuxtLink>
                  </div>
                </div>
                <div class="mega-footer">
                  <NuxtLink to="/data-recovery" class="mega-footer-link" @click="closeAll">→ View All Data Recovery Services</NuxtLink>
                  <a href="tel:8182728866" class="mega-footer-phone">📞 818-272-8866</a>
                </div>
              </div>
            </Transition>
          </li>

          <li><NuxtLink to="/instant-quote" active-class="active" class="nav-quote-link">Instant Quote</NuxtLink></li>
          <li><NuxtLink to="/pricing" active-class="active">Pricing</NuxtLink></li>
          <li><NuxtLink to="/blog" active-class="active">Blog</NuxtLink></li>
          <li><NuxtLink to="/about" active-class="active">About</NuxtLink></li>
          <li><NuxtLink to="/contact" active-class="active">Contact</NuxtLink></li>
        </ul>

        <!-- Mobile hamburger -->
        <button class="hamburger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide-down">
      <div v-if="menuOpen" class="mobile-menu">
        <NuxtLink to="/" @click="closeAll">Home</NuxtLink>
        <button class="mobile-section-toggle" @click="mobileServicesOpen = !mobileServicesOpen">
          Data Recovery <span class="toggle-icon">{{ mobileServicesOpen ? '▲' : '▼' }}</span>
        </button>
        <div v-if="mobileServicesOpen" class="mobile-services">
          <div class="mobile-section-label">By Device</div>
          <NuxtLink v-for="s in byDevice" :key="s.href" :to="s.href" @click="closeAll">{{ s.label }}</NuxtLink>
          <div class="mobile-section-label">By Brand</div>
          <NuxtLink v-for="s in byBrand" :key="s.href" :to="s.href" @click="closeAll">{{ s.label }}</NuxtLink>
          <div class="mobile-section-label">By Problem</div>
          <NuxtLink v-for="s in byProblem" :key="s.href" :to="s.href" @click="closeAll">{{ s.label }}</NuxtLink>
          <div class="mobile-section-label">Special Services</div>
          <NuxtLink v-for="s in special" :key="s.href" :to="s.href" @click="closeAll">{{ s.label }}</NuxtLink>
        </div>
        <NuxtLink to="/instant-quote" @click="closeAll">Instant Quote</NuxtLink>
        <NuxtLink to="/pricing" @click="closeAll">Pricing</NuxtLink>
        <NuxtLink to="/blog" @click="closeAll">Blog</NuxtLink>
        <NuxtLink to="/about" @click="closeAll">About Us</NuxtLink>
        <NuxtLink to="/contact" @click="closeAll">Contact</NuxtLink>
        <NuxtLink to="/appointments" @click="closeAll" class="mobile-appt-btn">📅 Schedule Appointment</NuxtLink>
        <a href="tel:8182728866" class="mobile-phone">📞 818-272-8866</a>
      </div>
    </Transition>
  </nav>
  </div><!-- /.navbar-root -->
</template>

<style scoped>
/* ── Top bar ── */
.topbar {
  background: #f0f2f5;
  border-bottom: 1px solid #dde1ea;
  padding: 7px 0;
}
.topbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}
.topbar-item {
  font-size: 12px;
  color: #555e72;
}
.topbar-divider {
  color: var(--border);
  font-size: 12px;
}
.topbar-phone {
  font-size: 12px;
  font-weight: 700;
  color: var(--gold);
  text-decoration: none;
  transition: opacity 0.2s;
}
.topbar-phone:hover { opacity: 0.8; }

/* ── Sticky wrapper ── */
nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
}

/* ── Main navbar ── */
.navbar-main {
  background: #ffffff;
  border-bottom: 2px solid #e8ebf0;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
}
.nav-inner {
  display: flex;
  align-items: center;
  height: 86px;
  gap: 36px;
}

/* ── Logo ── */
.nav-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}
.nav-logo img {
  height: 62px;
  width: auto;
  display: block;
}

/* ── Nav links ── */
.nav-links {
  display: flex;
  list-style: none;
  gap: 0;
  margin: 0 0 0 auto;
  padding: 0;
  align-items: center;
}
.nav-links > li {
  display: flex;
  align-items: center;
  position: relative;
}

/* Separator between nav items */
.nav-links > li + li {
  border-left: 1px solid #e8ebf0;
}
.nav-links li { position: relative; }
.nav-links a,
.dropdown-trigger {
  font-size: 15px;
  font-weight: 600;
  color: #2d3a4a;
  transition: color 0.2s, background 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 18px;
  white-space: nowrap;
  text-decoration: none;
  letter-spacing: 0.01em;
}
.nav-links a:hover,
.dropdown-trigger:hover,
.nav-links a.active,
.dropdown-trigger.active {
  color: #c0392b;
  background: rgba(192,57,43,0.06);
}

.chevron {
  transition: transform 0.2s;
}
.chevron.rotated { transform: rotate(180deg); }

/* ── Mega Dropdown ── */
.mega-dropdown {
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  background: #2a2d38;
  border: 1px solid rgba(245,200,66,0.2);
  border-radius: 16px;
  padding: 28px;
  min-width: min(700px, calc(100vw - 48px));
  box-shadow: 0 24px 80px rgba(0,0,0,0.5);
  z-index: 500;
}

.mega-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 20px;
}

.mega-col-header {
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--gold);
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(245,200,66,0.2);
}

.mega-dropdown .mega-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 0;
  font-size: 13px;
  color: #ffffff !important;
  text-decoration: none;
  transition: color 0.15s, gap 0.15s;
  line-height: 1.4;
}
.mega-dropdown .mega-link:hover {
  color: var(--gold) !important;
  gap: 10px;
}
.mega-link-dot {
  color: var(--gold);
  font-size: 14px;
  line-height: 1;
  flex-shrink: 0;
  opacity: 0.6;
  transition: opacity 0.15s;
}
.mega-link:hover .mega-link-dot { opacity: 1; }

.mega-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 18px;
  border-top: 1px solid rgba(255,255,255,0.06);
}
.mega-footer-link {
  font-size: 13px;
  font-weight: 600;
  color: var(--gold);
  text-decoration: none;
  transition: opacity 0.2s;
}
.mega-footer-link:hover { opacity: 0.8; }
.mega-footer-phone {
  font-size: 13px;
  color: #9ba3b8;
  text-decoration: none;
  transition: color 0.2s;
}
.mega-footer-phone:hover { color: #fff; }

/* Dropdown animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-6px);
}

/* ── Instant Quote nav highlight ── */
.nav-quote-link {
  color: var(--color-gold, #F5C842) !important;
  font-weight: 700 !important;
}
.nav-quote-link:hover, .nav-quote-link.active {
  color: #fff !important;
}
.nav-appt-cta {
  display: inline-flex;
  align-items: center;
  background: #F5C842;
  color: #0a0c14;
  font-weight: 700;
  font-size: 13px;
  padding: 9px 18px;
  border-radius: 8px;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.18s, transform 0.15s;
  flex-shrink: 0;
  margin-left: 16px;
}
.nav-appt-cta:hover { background: #e0a800; transform: translateY(-1px); }
@media (max-width: 900px) { .nav-appt-cta { display: none; } }
.mobile-appt-btn {
  background: #F5C842 !important;
  color: #0a0c14 !important;
  font-weight: 800 !important;
  border-radius: 8px !important;
  text-align: center;
}

/* ── Right CTAs ── */
.topbar-quote-btn {
  background: #c0392b;
  color: #fff;
  font-weight: 800;
  font-size: 12px;
  padding: 7px 16px;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s, transform 0.15s;
  white-space: nowrap;
  letter-spacing: 0.02em;
  margin-left: 4px;
}
.topbar-quote-btn:hover {
  background: #a93226;
  transform: translateY(-1px);
}

/* ── Hamburger ── */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-left: auto;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: #2d3a4a;
  border-radius: 2px;
  transition: all 0.25s;
}
.hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

/* ── Mobile menu ── */
.mobile-menu {
  display: flex;
  flex-direction: column;
  background: #0d1020;
  border-top: 1px solid var(--border);
  max-height: 80vh;
  overflow-y: auto;
}
.mobile-menu > a,
.mobile-menu > button {
  display: flex;
  align-items: center;
  padding: 14px 24px;
  font-size: 15px;
  font-family: var(--font-body);
  color: #c0c8d8;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  text-decoration: none;
  background: none;
  border-left: none;
  border-right: none;
  border-top: none;
  cursor: pointer;
  transition: color 0.2s, background 0.2s;
}
.mobile-menu > a:hover { color: #fff; background: rgba(255,255,255,0.04); }
.mobile-section-toggle {
  font-weight: 600 !important;
  color: #fff !important;
  justify-content: space-between;
}
.toggle-icon { color: var(--gold); font-size: 11px; }
.mobile-services {
  background: rgba(0,0,0,0.3);
  padding: 0 0 8px;
}
.mobile-services a {
  display: block;
  padding: 10px 36px;
  font-size: 14px;
  color: #9ba3b8;
  text-decoration: none;
  border-bottom: 1px solid rgba(255,255,255,0.03);
  transition: color 0.2s;
}
.mobile-services a:hover { color: var(--gold); }
.mobile-section-label {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--gold);
  padding: 14px 36px 4px;
  font-weight: 700;
}
.mobile-phone {
  color: var(--gold) !important;
  font-weight: 700 !important;
  background: rgba(245,200,66,0.08) !important;
}

/* Mobile slide animation */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: max-height 0.25s ease, opacity 0.2s ease;
  overflow: hidden;
}
.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
}
.slide-down-enter-to { max-height: 90vh; }

@media (max-width: 1100px) {
  .nav-links, .nav-cta { display: none; }
  .hamburger { display: flex; }
}
@media (max-width: 600px) {
  .topbar-item, .topbar-divider { display: none; }
  .topbar-phone { margin-left: auto; }
}
</style>
