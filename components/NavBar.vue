<script setup lang="ts">
const route = useRoute()
const menuOpen = ref(false)
const servicesOpen = ref(false)

const services = [
  { label: 'Hard Drive Recovery', href: '/services/hard-drive-recovery' },
  { label: 'SSD Recovery', href: '/services/ssd-recovery' },
  { label: 'RAID Recovery', href: '/services/raid-recovery' },
  { label: 'Laptop Recovery', href: '/services/laptop-recovery' },
  { label: 'External HDD Recovery', href: '/services/external-hdd-recovery' },
  { label: 'Mac / iMac Recovery', href: '/services/mac-recovery' },
  { label: 'iPhone & Mobile Recovery', href: '/services/mobile-recovery' },
  { label: 'USB & Flash Recovery', href: '/services/usb-recovery' },
]

function closeAll() {
  menuOpen.value = false
  servicesOpen.value = false
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
        <li class="has-dropdown" @mouseenter="servicesOpen = true" @mouseleave="servicesOpen = false">
          <span class="dropdown-trigger">Services <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></span>
          <ul v-if="servicesOpen" class="dropdown">
            <li v-for="s in services" :key="s.href">
              <NuxtLink :to="s.href">{{ s.label }}</NuxtLink>
            </li>
          </ul>
        </li>
        <li><NuxtLink to="/pricing">Pricing</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>

      <!-- Right CTAs -->
      <div class="nav-cta">
        <a href="tel:3236723000" class="nav-phone">323-672-3000</a>
        <NuxtLink to="/contact" class="btn btn-gold nav-quote-btn">Get Free Quote</NuxtLink>
      </div>

      <!-- Mobile hamburger -->
      <button class="hamburger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </div>

    <!-- Mobile menu -->
    <div v-if="menuOpen" class="mobile-menu">
      <NuxtLink to="/" @click="closeAll">Home</NuxtLink>
      <div class="mobile-section-label">Services</div>
      <NuxtLink v-for="s in services" :key="s.href" :to="s.href" @click="closeAll">{{ s.label }}</NuxtLink>
      <NuxtLink to="/pricing" @click="closeAll">Pricing</NuxtLink>
      <NuxtLink to="/about" @click="closeAll">About</NuxtLink>
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
  background: rgba(10, 12, 20, 0.92);
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
.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 8px 0;
  min-width: 220px;
  list-style: none;
  margin-top: 8px;
  box-shadow: 0 16px 40px rgba(0,0,0,0.4);
}
.dropdown li a {
  display: block;
  padding: 10px 20px;
  font-size: 14px;
  color: var(--muted);
  transition: background 0.15s, color 0.15s;
}
.dropdown li a:hover {
  background: rgba(245,200,66,0.08);
  color: var(--gold);
}

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
}
.mobile-menu a {
  display: block;
  padding: 10px 0;
  font-size: 15px;
  color: var(--muted);
  border-bottom: 1px solid var(--border);
}
.mobile-menu a:hover { color: var(--gold); }
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
}

@media (max-width: 900px) {
  .nav-links, .nav-cta { display: none; }
  .hamburger { display: flex; }
  .mobile-menu { display: flex; }
}
</style>
