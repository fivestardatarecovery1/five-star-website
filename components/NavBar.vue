<script setup lang="ts">
const route = useRoute()
const menuOpen = ref(false)
const servicesOpen = ref(false)
const mobileServicesOpen = ref(false)

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
  { label: 'Mail-In Service', href: '/data-recovery/mail-in-service' },
  { label: 'Expedited Service', href: '/expedited-service' },
  { label: 'Expedited Service Plus', href: '/expedited-service-plus' },
]

function closeAll() {
  menuOpen.value = false
  servicesOpen.value = false
  mobileServicesOpen.value = false
}

watch(() => route.path, closeAll)
</script>

<template>
  <nav class="navbar">
    <div class="container nav-inner">
      <!-- Logo -->
      <NuxtLink to="/" class="nav-logo" @click="closeAll">
        <img src="/logo.png" alt="Five Star Data Recovery" height="44" />
        <span class="nav-logo-text">Five Star Data Recovery</span>
      </NuxtLink>

      <!-- Desktop nav -->
      <ul class="nav-links">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li
          class="has-dropdown"
          @mouseenter="servicesOpen = true"
          @mouseleave="servicesOpen = false"
        >
          <span class="dropdown-trigger">
            Services
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </span>
          <div v-if="servicesOpen" class="mega-dropdown">
            <div class="mega-col">
              <div class="mega-col-title">By Device</div>
              <NuxtLink v-for="s in byDevice" :key="s.href" :to="s.href" class="mega-link">{{ s.label }}</NuxtLink>
            </div>
            <div class="mega-col">
              <div class="mega-col-title">By Brand</div>
              <NuxtLink v-for="s in byBrand" :key="s.href" :to="s.href" class="mega-link">{{ s.label }}</NuxtLink>
              <div class="mega-col-title" style="margin-top:16px">Special Services</div>
              <NuxtLink v-for="s in special" :key="s.href" :to="s.href" class="mega-link">{{ s.label }}</NuxtLink>
            </div>
            <div class="mega-col">
              <div class="mega-col-title">By Problem</div>
              <NuxtLink v-for="s in byProblem" :key="s.href" :to="s.href" class="mega-link">{{ s.label }}</NuxtLink>
            </div>
          </div>
        </li>
        <li><NuxtLink to="/pricing">Pricing</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/reviews">Reviews</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>

      <!-- Right CTAs -->
      <div class="nav-cta">
        <a href="tel:3236723000" class="nav-phone">323-672-3000</a>
        <NuxtLink to="/data-recovery/free-quote" class="btn btn-gold nav-quote-btn">Free Quote</NuxtLink>
      </div>

      <!-- Mobile hamburger -->
      <button class="hamburger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="mobile-menu">
      <NuxtLink to="/" @click="closeAll">Home</NuxtLink>
      <button class="mobile-section-toggle" @click="mobileServicesOpen = !mobileServicesOpen">
        Services {{ mobileServicesOpen ? '▲' : '▼' }}
      </button>
      <template v-if="mobileServicesOpen">
        <div class="mobile-section-label">By Device</div>
        <NuxtLink v-for="s in byDevice" :key="s.href" :to="s.href" @click="closeAll">{{ s.label }}</NuxtLink>
        <div class="mobile-section-label">By Brand</div>
        <NuxtLink v-for="s in byBrand" :key="s.href" :to="s.href" @click="closeAll">{{ s.label }}</NuxtLink>
        <div class="mobile-section-label">By Problem</div>
        <NuxtLink v-for="s in byProblem" :key="s.href" :to="s.href" @click="closeAll">{{ s.label }}</NuxtLink>
        <div class="mobile-section-label">Special Services</div>
        <NuxtLink v-for="s in special" :key="s.href" :to="s.href" @click="closeAll">{{ s.label }}</NuxtLink>
      </template>
      <NuxtLink to="/pricing" @click="closeAll">Pricing</NuxtLink>
      <NuxtLink to="/about" @click="closeAll">About Us</NuxtLink>
      <NuxtLink to="/reviews" @click="closeAll">Reviews</NuxtLink>
      <NuxtLink to="/contact" @click="closeAll">Contact</NuxtLink>
      <a href="tel:3236723000" class="mobile-phone">📞 323-672-3000</a>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(10, 12, 20, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  height: 70px;
  gap: 32px;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}
.nav-logo img { height: 44px; width: auto; }
.nav-logo-text {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 15px;
  color: var(--white);
  line-height: 1.2;
  max-width: 120px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 28px;
  margin: 0;
  padding: 0;
  flex: 1;
}
.nav-links a,
.dropdown-trigger {
  font-size: 14px;
  font-weight: 500;
  color: var(--muted);
  transition: color 0.2s;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
}
.nav-links a:hover,
.dropdown-trigger:hover,
.nav-links a.router-link-active {
  color: var(--white);
}

.has-dropdown { position: relative; }

.mega-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: -40px;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  min-width: 640px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  z-index: 200;
}

.mega-col-title {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--gold);
  margin-bottom: 10px;
}

.mega-link {
  display: block;
  padding: 6px 0;
  font-size: 13px;
  color: var(--muted);
  transition: color 0.15s;
  text-decoration: none;
}
.mega-link:hover { color: var(--white); }

.nav-cta {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
}
.nav-phone {
  color: var(--gold);
  font-weight: 700;
  font-size: 15px;
  transition: opacity 0.2s;
  text-decoration: none;
}
.nav-phone:hover { opacity: 0.8; }
.nav-quote-btn { padding: 10px 20px; font-size: 13px; }

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;
}
.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: all 0.25s;
}

.mobile-menu {
  display: none;
  flex-direction: column;
  padding: 16px 24px 24px;
  border-top: 1px solid var(--border);
  gap: 2px;
  max-height: 80vh;
  overflow-y: auto;
}
.mobile-menu a {
  display: block;
  padding: 10px 0;
  font-size: 15px;
  color: var(--muted);
  border-bottom: 1px solid var(--border);
  text-decoration: none;
}
.mobile-menu a:hover { color: var(--gold); }
.mobile-section-toggle {
  background: none;
  border: none;
  border-bottom: 1px solid var(--border);
  color: var(--white);
  font-size: 15px;
  font-weight: 600;
  padding: 10px 0;
  cursor: pointer;
  text-align: left;
  width: 100%;
  font-family: var(--font-body);
}
.mobile-section-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--gold);
  padding: 12px 0 4px;
  font-weight: 600;
}
.mobile-phone {
  color: var(--gold) !important;
  font-weight: 700;
  margin-top: 12px;
  text-decoration: none;
}

@media (max-width: 1100px) {
  .nav-links, .nav-cta { display: none; }
  .hamburger { display: flex; }
  .mobile-menu { display: flex; }
}
</style>
