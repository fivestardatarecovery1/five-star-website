<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery Services — All Devices & Media Types',
  description: 'Professional data recovery services for hard drives, SSDs, RAID, laptops, Macs, iPhones, USB drives, SD cards, and more. Flat-rate pricing. No data = no charge. Call 323-672-3000.'
})

const services = [
  { icon: '💾', title: 'Hard Drive Recovery', desc: 'Mechanical failures, clicking drives, read errors, firmware corruption — all HDD brands.', href: '/data-recovery/hard-drive-recovery' },
  { icon: '⚡', title: 'SSD Recovery', desc: 'Flash memory failures, controller issues, NAND chip recovery for NVMe, mSATA, SATA.', href: '/data-recovery/ssd-recovery' },
  { icon: '🖥️', title: 'RAID / Server Recovery', desc: 'RAID 0, 1, 5, 6, 10, and NAS array reconstruction — enterprise-grade recovery.', href: '/data-recovery/raid-recovery' },
  { icon: '💻', title: 'Laptop Recovery', desc: 'Dropped laptops, liquid spills, dead drives — all brands recovered.', href: '/data-recovery/laptop-recovery' },
  { icon: '🖥️', title: 'Desktop Recovery', desc: 'Internal desktop drives from Windows and Linux systems — full recovery service.', href: '/data-recovery/desktop-recovery' },
  { icon: '🗄️', title: 'External HDD Recovery', desc: 'WD My Passport, Seagate Backup Plus, LaCie, and other portable drives.', href: '/data-recovery/external-hard-drive' },
  { icon: '🍎', title: 'Mac Recovery', desc: 'Apple Fusion Drive, T2/M1/M2 Macs, Time Machine failures.', href: '/data-recovery/mac-recovery' },
  { icon: '📱', title: 'iPhone Recovery', desc: 'iOS data recovery from broken screens, water damage, failed updates.', href: '/data-recovery/iphone-recovery' },
  { icon: '🔌', title: 'USB Flash Drive', desc: 'Broken connectors, failed controllers, corrupted partitions.', href: '/data-recovery/usb-recovery' },
  { icon: '📷', title: 'SD Card Recovery', desc: 'Camera cards, drone footage, dashcam recovery from all SD formats.', href: '/data-recovery/sd-card-recovery' },
  { icon: '🌐', title: 'NAS Recovery', desc: 'Synology, QNAP, Buffalo, and custom NAS enclosures.', href: '/data-recovery/nas-recovery' },
  { icon: '🎬', title: 'Video File Repair', desc: 'Corrupted, damaged, or unplayable video footage from any camera.', href: '/data-recovery/video-file-repair' },
  { icon: '🏭', title: 'Clean Room Recovery', desc: 'ISO Class 5 cleanroom for head replacements, platter swaps, PCB repairs.', href: '/data-recovery/clean-room' },
  { icon: '📦', title: 'Mail-In Service', desc: 'Free prepaid shipping nationwide — drop it in the mail, we do the rest.', href: '/data-recovery/mail-in-service' },
  { icon: '💳', title: 'CFast Card Recovery', desc: 'Professional-grade CFast media recovery for filmmakers and photographers.', href: '/data-recovery/cfast-recovery' },
  { icon: '🗑️', title: 'Deleted Files', desc: 'Accidental deletion, formatted drives, emptied recycle bins recovered.', href: '/data-recovery/deleted-files' },
]

const brands = [
  { label: 'Western Digital', href: '/data-recovery/western-digital-recovery' },
  { label: 'Seagate', href: '/data-recovery/seagate-recovery' },
  { label: 'Samsung', href: '/data-recovery/samsung-recovery' },
  { label: 'LaCie', href: '/data-recovery/lacie-recovery' },
  { label: 'Toshiba', href: '/data-recovery/toshiba-recovery' },
  { label: 'Hitachi', href: '/data-recovery/hitachi-recovery' },
]

const problems = [
  { label: 'Hard Drive Clicking', href: '/hard-drive-clicking' },
  { label: "Drive Won't Power On", href: '/drive-doesnt-power-on' },
  { label: 'Dropped Hard Drive', href: '/data-recovery/dropped-hard-drive' },
  { label: 'Bad Sectors', href: '/data-recovery/bad-sectors' },
  { label: 'Drive Not Showing Up', href: '/data-recovery/hard-drive-not-showing-up' },
]
</script>

<template>
  <div>
    <NavBar />

    <HeroSection
      title="Professional Data Recovery Services"
      subtitle="Every Device. Every Failure Type. Recovered."
      description="We recover data from hard drives, SSDs, RAID arrays, Macs, iPhones, USB drives, SD cards, NAS devices, and more. Flat-rate pricing, no hidden fees, and a no data = no charge guarantee."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ No Data = No Charge</span>
          <span class="badge">✅ Free Evaluation</span>
          <span class="badge">✅ All Devices</span>
          <span class="badge">✅ 24/7 Available</span>
        </div>
      </template>
    </HeroSection>

    <!-- Services Grid -->
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">All <span class="gold-underline gold">Recovery Services</span></h2>
          <p class="section-subtitle">Whatever the device, whatever the failure — we've recovered it before.</p>
        </div>
        <div class="services-grid">
          <NuxtLink v-for="s in services" :key="s.title" :to="s.href" class="service-card card">
            <div class="service-icon">{{ s.icon }}</div>
            <h3 class="service-title">{{ s.title }}</h3>
            <p class="service-desc">{{ s.desc }}</p>
            <span class="service-link">Learn More →</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- By Brand -->
    <section class="brand-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Recovery by <span class="gold-underline gold">Brand</span></h2>
          <p class="section-subtitle">We specialize in recovering data from every major storage brand.</p>
        </div>
        <div class="brand-grid">
          <NuxtLink v-for="b in brands" :key="b.label" :to="b.href" class="brand-card card">
            <h3 class="brand-name">{{ b.label }}</h3>
            <span class="brand-link">Recovery Services →</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Common Problems -->
    <section class="problem-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Common <span class="gold-underline gold">Problems</span></h2>
          <p class="section-subtitle">Recognize your issue? Click to learn what we do and how we fix it.</p>
        </div>
        <div class="problem-grid">
          <NuxtLink v-for="p in problems" :key="p.label" :to="p.href" class="problem-card card">
            <span class="problem-label">{{ p.label }}</span>
            <span class="problem-arrow">→</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2 class="section-title">Not Sure What You Need?</h2>
        <p class="section-subtitle" style="max-width:600px;margin:0 auto 32px">
          Call us and describe your situation. Our engineers will tell you exactly what's possible — for free. No obligation to proceed.
        </p>
        <div class="cta-buttons">
          <a href="tel:3236723000" class="btn btn-gold" style="font-size:18px;padding:16px 36px">📞 Call 323-672-3000</a>
          <NuxtLink to="/data-recovery/free-quote" class="btn btn-outline">Get a Free Quote →</NuxtLink>
        </div>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
.trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.badge {
  background: rgba(255,255,255,0.06);
  border: 1px solid var(--border);
  color: var(--white);
  padding: 7px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.service-card {
  text-decoration: none;
  display: block;
  transition: border-color 0.2s, transform 0.2s;
}
.service-card:hover {
  border-color: var(--gold);
  transform: translateY(-2px);
}
.service-icon { font-size: 30px; margin-bottom: 12px; }
.service-title {
  font-family: var(--font-heading);
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--white);
}
.service-desc { font-size: 13px; color: var(--muted); line-height: 1.6; margin-bottom: 12px; }
.service-link { color: var(--gold); font-size: 13px; font-weight: 600; }

.brand-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.brand-card {
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: border-color 0.2s;
}
.brand-card:hover { border-color: var(--gold); }
.brand-name { font-size: 16px; font-weight: 700; color: var(--white); }
.brand-link { font-size: 13px; color: var(--gold); }

.problem-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  max-width: 800px;
  margin: 0 auto;
}
.problem-card {
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: border-color 0.2s;
}
.problem-card:hover { border-color: var(--gold); }
.problem-label { font-size: 15px; font-weight: 600; color: var(--white); }
.problem-arrow { color: var(--gold); font-size: 18px; }

.cta-section { background: var(--card-bg); text-align: center; }
.cta-buttons { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

.btn-outline {
  display: inline-block;
  padding: 16px 32px;
  border: 2px solid var(--gold);
  color: var(--gold);
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  transition: background 0.2s;
}
.btn-outline:hover { background: rgba(245,200,66,0.1); }

@media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) {
  .services-grid, .brand-grid, .problem-grid { grid-template-columns: 1fr; }
}
</style>
