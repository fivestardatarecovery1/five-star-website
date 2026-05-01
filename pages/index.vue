<script setup lang="ts">
useSeoMeta({
  title: 'Expert Data Recovery Services — Glendale, CA',
  description: 'Five Star Data Recovery — professional hard drive, SSD, RAID, and mobile data recovery in Glendale, CA. No data, no charge. Free evaluation. Call 323-672-3000.'
})

const services = [
  { icon: '💾', title: 'Hard Drive Recovery', desc: 'Mechanical failures, clicking drives, read errors, and firmware corruption. We recover from all major HDD brands.', href: '/services/hard-drive-recovery' },
  { icon: '⚡', title: 'SSD Recovery', desc: 'Flash memory failures, controller issues, and NAND chip recovery. Modern SSD forensics and data extraction.', href: '/services/ssd-recovery' },
  { icon: '🖥️', title: 'RAID / Server Recovery', desc: 'RAID 0, 1, 5, 6, 10, and NAS array reconstruction. Enterprise-grade recovery with minimal downtime.', href: '/services/raid-recovery' },
  { icon: '💻', title: 'Laptop Recovery', desc: 'Dropped laptops, liquid spills, and dead drives from all brands — Dell, HP, Lenovo, Asus, and more.', href: '/services/laptop-recovery' },
  { icon: '🗄️', title: 'External HDD Recovery', desc: 'WD My Passport, Seagate Backup Plus, LaCie, and other portable drives recovered quickly.', href: '/services/external-hdd-recovery' },
  { icon: '🍎', title: 'Mac / iMac Recovery', desc: 'Apple Fusion Drive, T2/M1/M2 chip Macs, and Time Machine failures handled by certified Apple technicians.', href: '/services/mac-recovery' },
  { icon: '📱', title: 'iPhone & Mobile', desc: 'iOS and Android data recovery from broken screens, water damage, and failed updates.', href: '/services/mobile-recovery' },
  { icon: '🔌', title: 'USB Flash Drive', desc: 'Broken connectors, failed controllers, and corrupted partitions on USB and thumb drives.', href: '/services/usb-recovery' },
  { icon: '📷', title: 'SD Card Recovery', desc: 'Camera cards, drone footage, and dashcam recovery from all SD card formats.', href: '/services/hard-drive-recovery' },
  { icon: '🌐', title: 'NAS Device Recovery', desc: 'Synology, QNAP, Buffalo, and custom NAS enclosures with failed drives or corrupted volumes.', href: '/services/raid-recovery' },
  { icon: '💧', title: 'Water Damage Recovery', desc: 'Submerged and flood-damaged drives recovered in our cleanroom before corrosion sets in.', href: '/services/hard-drive-recovery' },
  { icon: '🔥', title: 'Fire & Disaster Recovery', desc: 'Smoke, heat, and physical trauma recovery. We specialize in extreme-condition data extraction.', href: '/services/hard-drive-recovery' },
]

const whyUs = [
  { icon: '🏆', title: 'No Data = No Charge', desc: 'You only pay if we successfully recover your data. Zero risk to you.' },
  { icon: '🔒', title: 'Cleanroom Facility', desc: 'ISO Class 5 cleanroom for all hard drive and physical media repairs.' },
  { icon: '⚡', title: '24-48 Hour Turnaround', desc: 'Emergency same-day service available. We work around the clock.' },
  { icon: '✈️', title: 'Free Nationwide Shipping', desc: 'Ship your device to us for free. We pay both ways.' },
  { icon: '⭐', title: '5.0 Star Rating', desc: 'Hundreds of 5-star reviews from businesses and individuals across the US.' },
  { icon: '🔐', title: '100% Confidential', desc: 'Your data is never shared. Strict privacy policy and NDA available.' },
  { icon: '📞', title: 'Available 24/7/365', desc: 'Our team never sleeps. Call us anytime, even on holidays.' },
  { icon: '🛡️', title: '10+ Years Experience', desc: 'Over a decade recovering critical data for businesses and families.' },
]

const steps = [
  { num: '01', title: 'Contact Us', desc: 'Call 323-672-3000 or fill out our form. We respond within 1 hour.' },
  { num: '02', title: 'Free Evaluation', desc: 'Ship your device to us for free. We assess the damage at no charge.' },
  { num: '03', title: 'Get a Quote', desc: 'We provide a flat-rate quote before any work begins. No surprises.' },
  { num: '04', title: 'Recovery Work', desc: 'Our engineers work in our cleanroom to recover every recoverable file.' },
  { num: '05', title: 'Data Delivered', desc: 'Receive your data on a new drive or via secure download. Done.' },
]

const reviews = [
  {
    name: 'Michael T.',
    role: 'Small Business Owner',
    stars: 5,
    text: 'My RAID server failed and I thought 8 years of business data was gone forever. Five Star recovered 100% of it within 48 hours. Worth every penny.',
  },
  {
    name: 'Sarah K.',
    role: 'Photographer',
    stars: 5,
    text: 'Dropped my external hard drive with 3 years of wedding photography. They recovered every single file. I cried when I got the call. Incredible team.',
  },
  {
    name: 'James R.',
    role: 'IT Manager',
    stars: 5,
    text: 'We use Five Star for all our enterprise data emergencies. Professional, fast, and the cleanroom facility is state-of-the-art. Highly recommend.',
  },
]

const faqs = [
  { q: 'How much does data recovery cost?', a: 'Our pricing depends on the type of device and severity of damage. We offer free evaluations and flat-rate quotes before any work begins. Standard recovery starts from $299.' },
  { q: 'How long does the recovery process take?', a: 'Standard turnaround is 3-5 business days. Rush service (24-48 hours) is available for emergencies. We\'ll give you a timeline after evaluation.' },
  { q: 'What if you can\'t recover my data?', a: 'Simple — you pay nothing. Our "No Data = No Charge" policy means you only pay if we successfully recover your files.' },
  { q: 'Do I need to bring my device in person?', a: 'No. We provide free nationwide shipping both ways. Just contact us and we\'ll send a prepaid shipping label.' },
  { q: 'Is my data kept confidential?', a: 'Absolutely. We have strict confidentiality policies and can sign an NDA upon request. Your data is never shared or copied.' },
  { q: 'What types of drives can you recover from?', a: 'We recover from all storage media: hard drives, SSDs, RAID arrays, NAS devices, external drives, USB flash drives, SD cards, and mobile devices.' },
  { q: 'My hard drive is making a clicking noise — is recovery still possible?', a: 'Yes, but time is critical. A clicking drive means head failure. Stop using it immediately and contact us. The sooner we receive it, the better the recovery chances.' },
  { q: 'Do you have a physical location I can visit?', a: 'Yes! Our lab is located at 1731 S Brand Blvd Suite 100, Glendale, CA 91204. Walk-ins are welcome during business hours.' },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => {
  openFaq.value = openFaq.value === i ? null : i
}

const partners = ['Western Digital', 'Seagate', 'Samsung', 'Toshiba', 'HGST', 'LaCie', 'SanDisk', 'Kingston', 'Synology', 'QNAP']
</script>

<template>
  <div>
    <NavBar />

    <!-- Hero -->
    <HeroSection
      title="Recovering What Can't Be Replaced"
      subtitle="Get Your Data Back. Guaranteed."
      description="Professional data recovery for hard drives, SSDs, RAID systems, and mobile devices. No data recovered = no charge. Free evaluation on every case."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ Available 24/7/365</span>
          <span class="badge">✅ No Data = No Charge</span>
          <span class="badge">✅ 10+ Years in Business</span>
          <span class="badge">✅ Free Nationwide Shipping</span>
        </div>
      </template>
    </HeroSection>

    <!-- Trust Logos Strip -->
    <section class="trust-strip">
      <div class="container">
        <p class="strip-label">We Recover From All Major Brands</p>
        <div class="logo-badges">
          <span v-for="p in partners" :key="p" class="logo-badge">{{ p }}</span>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our <span class="gold-underline gold">Recovery Services</span></h2>
          <p class="section-subtitle">Whatever the device, whatever the damage — we've seen it before and we've recovered it before.</p>
        </div>
        <div class="services-grid">
          <div v-for="s in services" :key="s.title" class="service-card card">
            <div class="service-icon">{{ s.icon }}</div>
            <h3 class="service-title">{{ s.title }}</h3>
            <p class="service-desc">{{ s.desc }}</p>
            <NuxtLink :to="s.href" class="service-link">Learn More →</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose <span class="gold-underline gold">Five Star</span>?</h2>
          <p class="section-subtitle">We've built our reputation on results, transparency, and treating every client's data like it's irreplaceable — because it is.</p>
        </div>
        <div class="grid-4">
          <div v-for="w in whyUs" :key="w.title" class="why-card card">
            <div class="why-icon">{{ w.icon }}</div>
            <h3 class="why-title">{{ w.title }}</h3>
            <p class="why-desc">{{ w.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="process-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">How It <span class="gold-underline gold">Works</span></h2>
          <p class="section-subtitle">Simple, transparent, and stress-free from start to finish.</p>
        </div>
        <div class="process-steps">
          <div v-for="(step, i) in steps" :key="step.num" class="process-step">
            <div class="step-num">{{ step.num }}</div>
            <div class="step-content">
              <h3 class="step-title">{{ step.title }}</h3>
              <p class="step-desc">{{ step.desc }}</p>
            </div>
            <div v-if="i < steps.length - 1" class="step-arrow">→</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="stats-bar">
      <div class="container stats-inner">
        <div class="stat">
          <span class="stat-num">10+</span>
          <span class="stat-label">Years in Business</span>
        </div>
        <div class="stat-divider" />
        <div class="stat">
          <span class="stat-num">5.0</span>
          <span class="stat-label">Star Rating</span>
        </div>
        <div class="stat-divider" />
        <div class="stat">
          <span class="stat-num">21,000+</span>
          <span class="stat-label">Drives Recovered</span>
        </div>
        <div class="stat-divider" />
        <div class="stat">
          <span class="stat-num">100%</span>
          <span class="stat-label">Confidential</span>
        </div>
      </div>
    </section>

    <!-- Reviews -->
    <section class="reviews-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Our <span class="gold-underline gold">Clients Say</span></h2>
          <p class="section-subtitle">Real stories from real people who trusted us with their most important data.</p>
        </div>
        <div class="grid-3">
          <div v-for="r in reviews" :key="r.name" class="review-card card">
            <div class="review-stars">{{ '★'.repeat(r.stars) }}</div>
            <p class="review-text">"{{ r.text }}"</p>
            <div class="review-author">
              <span class="author-name">{{ r.name }}</span>
              <span class="author-role">{{ r.role }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Second CTA -->
    <section class="cta-section">
      <div class="container cta-inner">
        <div class="cta-copy">
          <h2 class="section-title">Don't Wait — <span class="gold">Every Hour Matters</span></h2>
          <p class="section-subtitle" style="max-width:480px">The longer a failing drive operates, the lower your chances of full recovery. Contact us now for a free, no-obligation evaluation.</p>
          <a href="tel:3236723000" class="btn btn-gold" style="font-size:18px;padding:16px 36px">📞 Call 323-672-3000</a>
        </div>
        <div class="cta-form-wrap">
          <HeroSection
            title=""
            subtitle=""
          />
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Frequently Asked <span class="gold-underline gold">Questions</span></h2>
        </div>
        <div class="faq-list">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-item" :class="{ open: openFaq === i }">
            <button class="faq-question" @click="toggleFaq(i)">
              <span>{{ faq.q }}</span>
              <span class="faq-icon">{{ openFaq === i ? '−' : '+' }}</span>
            </button>
            <div v-if="openFaq === i" class="faq-answer">{{ faq.a }}</div>
          </div>
        </div>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
/* Trust badges in hero */
.trust-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;
}
.badge {
  background: rgba(255,255,255,0.06);
  border: 1px solid var(--border);
  color: var(--white);
  padding: 7px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
}

/* Trust strip */
.trust-strip {
  background: var(--card-bg);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 28px 0;
}
.strip-label {
  text-align: center;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--muted);
  margin-bottom: 18px;
}
.logo-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
.logo-badge {
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--border);
  color: var(--muted);
  padding: 8px 18px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.03em;
}

/* Services */
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.service-icon { font-size: 32px; margin-bottom: 12px; }
.service-title {
  font-family: var(--font-heading);
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--white);
}
.service-desc { font-size: 14px; color: var(--muted); line-height: 1.6; margin-bottom: 14px; }
.service-link { color: var(--gold); font-size: 14px; font-weight: 600; transition: opacity 0.2s; }
.service-link:hover { opacity: 0.8; }

@media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .services-grid { grid-template-columns: 1fr; } }

/* Why section */
.why-card { text-align: center; }
.why-icon { font-size: 36px; margin-bottom: 12px; }
.why-title {
  font-family: var(--font-heading);
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--white);
}
.why-desc { font-size: 14px; color: var(--muted); }

/* Process */
.process-section { background: var(--card-bg); }
.process-steps {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex-wrap: wrap;
}
.process-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  min-width: 160px;
  position: relative;
}
.step-num {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--gold);
  color: #0A0C14;
  font-family: var(--font-heading);
  font-size: 18px;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  flex-shrink: 0;
}
.step-title {
  font-family: var(--font-heading);
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 6px;
  color: var(--white);
}
.step-desc { font-size: 13px; color: var(--muted); }
.step-arrow {
  font-size: 24px;
  color: var(--gold);
  align-self: flex-start;
  margin-top: 14px;
  flex-shrink: 0;
}
@media (max-width: 768px) { .step-arrow { display: none; } }

/* Stats bar */
.stats-bar {
  background: linear-gradient(135deg, #0f1220, #13161F);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 48px 0;
}
.stats-inner {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
}
.stat { text-align: center; }
.stat-num {
  display: block;
  font-family: var(--font-heading);
  font-size: clamp(36px, 5vw, 56px);
  font-weight: 900;
  color: var(--gold);
  line-height: 1;
  margin-bottom: 6px;
}
.stat-label { font-size: 14px; color: var(--muted); font-weight: 500; }
.stat-divider {
  width: 1px;
  height: 60px;
  background: var(--border);
}
@media (max-width: 640px) { .stat-divider { display: none; } }

/* Reviews */
.review-stars { color: var(--gold); font-size: 20px; letter-spacing: 2px; margin-bottom: 14px; }
.review-text { font-size: 15px; color: var(--muted); font-style: italic; line-height: 1.7; margin-bottom: 20px; }
.review-author { border-top: 1px solid var(--border); padding-top: 14px; display: flex; flex-direction: column; gap: 3px; }
.author-name { font-weight: 700; font-size: 15px; color: var(--white); }
.author-role { font-size: 13px; color: var(--muted); }

/* CTA section */
.cta-section { background: var(--card-bg); }
.cta-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.cta-form-wrap :deep(.hero) {
  background: transparent;
  padding: 0;
}
.cta-form-wrap :deep(.hero-inner) {
  grid-template-columns: 1fr;
}
.cta-form-wrap :deep(.hero-copy) {
  display: none;
}
@media (max-width: 900px) {
  .cta-inner { grid-template-columns: 1fr; }
}

/* FAQ */
.faq-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 8px; }
.faq-item {
  background: var(--card-bg);
  border: 1px solid var(--border);
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.2s;
}
.faq-item.open { border-color: var(--gold); }
.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: none;
  border: none;
  color: var(--white);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  text-align: left;
  gap: 12px;
  font-family: var(--font-body);
}
.faq-icon {
  color: var(--gold);
  font-size: 22px;
  font-weight: 400;
  flex-shrink: 0;
}
.faq-answer {
  padding: 0 24px 20px;
  font-size: 15px;
  color: var(--muted);
  line-height: 1.7;
}
</style>
