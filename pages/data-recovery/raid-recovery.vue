<script setup lang="ts">
useSeoMeta({
  title: 'RAID Data Recovery — All RAID Levels & NAS Devices',
  description: 'Expert RAID data recovery for RAID 0, 1, 5, 6, 10, and NAS arrays. Flat-rate pricing per drive. No data = no charge. Emergency service available. Call 323-672-3000.'
})

const raidTypes = [
  { type: 'RAID 0', desc: 'Striped arrays — if one drive fails, all data is at risk. We rebuild the stripe set and recover files.' },
  { type: 'RAID 1', desc: 'Mirrored arrays — drive failures or file system corruption. Recovery from surviving mirror.' },
  { type: 'RAID 5', desc: 'Most common business RAID — we handle single and double drive failures, parity corruption, and controller issues.' },
  { type: 'RAID 6', desc: 'Dual-parity arrays — two simultaneous drive failures handled with specialized RAID 6 reconstruction tools.' },
  { type: 'RAID 10', desc: 'Striped mirrors — multiple drive failures and array corruption recovered with full verification.' },
  { type: 'NAS / SAN', desc: 'Synology, QNAP, Buffalo, Drobo, NetGear, and custom NAS enclosures — all supported.' },
]

const faqs = [
  { q: 'How much does RAID recovery cost?', a: 'RAID recovery is priced per drive at our flat rates: $300/drive for standard recovery (up to 2TB), $400/drive for drives over 2TB. Clean room mechanical recovery is $650-$950 per affected drive. You receive a full breakdown before work begins.' },
  { q: 'How long does RAID recovery take?', a: 'Standard RAID recovery (3-8 drives) typically takes 5-7 business days. Expedited service is available for time-critical cases. Larger arrays or mechanical failures may require additional time.' },
  { q: 'Do you work on NAS devices?', a: 'Yes — Synology, QNAP, Buffalo, Drobo, NetGear ReadyNAS, WD My Cloud, and all other NAS devices. We support EXT3, EXT4, XFS, Btrfs, ZFS, and other NAS file systems.' },
  { q: 'Can you recover RAID if multiple drives failed simultaneously?', a: 'This depends on the RAID level. RAID 5 can typically survive one drive failure, RAID 6 can survive two. For RAID 0, we attempt recovery from all available drives. Contact us to discuss your specific situation.' },
  { q: 'What if the RAID controller also failed?', a: 'Controller failure adds complexity but does not prevent recovery. We can often reconstruct the RAID parameters (stripe size, order, start offset) through analysis of the raw drive data.' },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="RAID Data Recovery"
      subtitle="All RAID Levels. All NAS Brands. No Data = No Charge."
      description="Our RAID recovery specialists handle all array configurations — RAID 0, 1, 5, 6, 10, NAS, and SAN systems. Flat-rate pricing per drive with no premium for RAID reconstruction. We always create full disk clones before any work begins."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ All RAID Levels</span>
          <span class="badge">✅ Flat-Rate Per Drive</span>
          <span class="badge">✅ NAS / SAN</span>
          <span class="badge">✅ Emergency Service</span>
        </div>
      </template>
    </HeroSection>

    <section class="intro-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Professional <span class="gold-underline gold">RAID Recovery</span></h2>
        </div>
        <div class="intro-content">
          <p>RAID systems are designed for redundancy and performance — but they are not immune to failure. Drive failures, controller malfunctions, accidental deletions, power surges, and human error can all render a RAID array inaccessible. When your RAID fails, every hour counts.</p>
          <p>At Five Star Data Recovery, we specialize in recovering data from all RAID configurations. Our pricing is simple: flat-rate per drive, with no additional charge for RAID reconstruction. We never charge more just because it's a RAID array.</p>
          <p>Before any recovery work begins, we create 1-to-1 sector-level clones of every drive in the array. This ensures your original drives are never put at risk during the recovery process.</p>
        </div>
      </div>
    </section>

    <section class="raid-types-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Supported <span class="gold-underline gold">RAID Configurations</span></h2>
        </div>
        <div class="raid-grid">
          <div v-for="r in raidTypes" :key="r.type" class="raid-card card">
            <h3 class="raid-type">{{ r.type }}</h3>
            <p class="raid-desc">{{ r.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="pricing-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">RAID Recovery <span class="gold-underline gold">Pricing</span></h2>
          <p class="section-subtitle">Transparent flat-rate pricing — you know the full cost before we begin.</p>
        </div>
        <div class="pricing-table-wrap">
          <table class="pricing-table">
            <thead>
              <tr>
                <th>Recovery Type</th>
                <th>Price Per Drive</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Standard (≤ 2TB drive)</td>
                <td class="price">$300</td>
                <td>Logical / firmware failure</td>
              </tr>
              <tr>
                <td>Standard (> 2TB drive)</td>
                <td class="price">$400</td>
                <td>$100 surcharge for drives over 2TB</td>
              </tr>
              <tr>
                <td>Clean Room Recovery</td>
                <td class="price">$650–$950</td>
                <td>Mechanical failure, clicking, head crash</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="pricing-example">
          <h3 class="example-title">Example: RAID 5 with 4 × 2TB Drives</h3>
          <p class="example-text">4 drives × $300/drive = <strong class="gold">$1,200 total</strong> — includes full RAID reconstruction at no extra charge.</p>
        </div>
      </div>
    </section>

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

    <section class="cta-band">
      <div class="container cta-band-inner">
        <div>
          <h2 class="cta-title">RAID Down? Don't Wait.</h2>
          <p class="cta-sub">Every hour increases the risk of further data loss. Call us now for a free consultation.</p>
        </div>
        <div class="cta-actions">
          <a href="tel:3236723000" class="btn btn-gold">📞 323-672-3000</a>
          <NuxtLink to="/data-recovery/free-quote" class="btn btn-outline-sm">Get Free Quote</NuxtLink>
        </div>
      </div>
    </section>
    <FooterBar />
  </div>
</template>

<style scoped>
.trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--white); padding: 7px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; }
.intro-content p { font-size: 16px; color: var(--muted); line-height: 1.8; margin-bottom: 16px; max-width: 800px; }
.raid-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.raid-type { font-family: var(--font-heading); font-size: 18px; font-weight: 700; color: var(--gold); margin-bottom: 10px; }
.raid-desc { font-size: 14px; color: var(--muted); line-height: 1.6; }
.pricing-table-wrap { overflow-x: auto; margin-bottom: 32px; }
.pricing-table { width: 100%; border-collapse: collapse; }
.pricing-table th { background: rgba(245,200,66,0.1); color: var(--gold); font-family: var(--font-heading); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; padding: 14px 20px; text-align: left; border-bottom: 1px solid var(--border); }
.pricing-table td { padding: 16px 20px; font-size: 15px; color: var(--muted); border-bottom: 1px solid var(--border); }
.pricing-table tr:hover td { background: rgba(255,255,255,0.02); }
.price { color: var(--white); font-weight: 700; font-size: 17px; }
.pricing-example { background: var(--card-bg); border: 1px solid var(--border); border-radius: 12px; padding: 24px 28px; }
.example-title { font-family: var(--font-heading); font-size: 16px; font-weight: 700; color: var(--white); margin-bottom: 8px; }
.example-text { font-size: 15px; color: var(--muted); }
.faq-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 8px; }
.faq-item { background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; }
.faq-item.open { border-color: var(--gold); }
.faq-question { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; color: var(--white); font-size: 16px; font-weight: 600; cursor: pointer; text-align: left; gap: 12px; font-family: var(--font-body); }
.faq-icon { color: var(--gold); font-size: 22px; font-weight: 400; flex-shrink: 0; }
.faq-answer { padding: 0 24px 20px; font-size: 15px; color: var(--muted); line-height: 1.7; }
.cta-band { background: linear-gradient(135deg, #0f1220, #13161F); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 56px 0; }
.cta-band-inner { display: flex; justify-content: space-between; align-items: center; gap: 32px; flex-wrap: wrap; }
.cta-title { font-family: var(--font-heading); font-size: 28px; font-weight: 900; color: var(--white); margin-bottom: 8px; }
.cta-sub { font-size: 16px; color: var(--muted); }
.cta-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-outline-sm { display: inline-block; padding: 14px 28px; border: 2px solid var(--gold); color: var(--gold); border-radius: 8px; font-weight: 700; font-size: 15px; text-decoration: none; }
.btn-outline-sm:hover { background: rgba(245,200,66,0.1); }
@media (max-width: 768px) { .raid-grid { grid-template-columns: 1fr; } .cta-band-inner { flex-direction: column; } }
</style>
