<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery Service Pricing — Five Star Data Recovery',
  description: 'View our flat-rate data recovery pricing for hard drives, SSDs, USB drives, RAID systems and more. No hidden fees. No data, no charge. Free evaluation on every case.'
})

const reviews = [
  { text: 'My external hard drive suddenly started acting up and wouldn\'t open any files. I found out it had bad sectors and thought everything was lost. Five Star Data Recovery recovered all of my documents, including years of business data. Their team was professional, honest, and incredibly skilled.', name: 'Mark R.', location: 'West Covina, CA' },
  { text: 'My old hard drive was full of irreplaceable family memories, but it stopped responding due to bad sectors. I brought it to Five Star Data Recovery, and within days they recovered every last photo. I can\'t thank them enough for saving what I thought was gone forever.', name: 'Samantha L.', location: 'Burbank, CA' },
  { text: 'After being told by another company that my hard drive was unrecoverable due to bad sectors, I decided to get a second opinion. Five Star Data Recovery not only diagnosed the issue accurately but used advanced imaging tools to safely recover my data. Worth every penny.', name: 'David N.', location: 'New York, NY' },
]

const mainTiers = [
  {
    name: 'Logical Data Recovery',
    price: '$300',
    unit: '/Per Drive',
    items: [
      'Desktop Drives',
      'USB Flash Drives',
      'Solid State Drives (SSD) (Per Drive)',
      'RAID/NAS drive-level performance and reliability',
    ],
  },
  {
    name: 'Logical Data Recovery (+)',
    price: '$500',
    unit: '/Per Drive',
    items: [
      'Drives Larger than 2TB (Up to 6TB)',
      'Drives with USB 2.0/3.0 Connector',
      'LaCie/Seagate Drives',
      'Encrypted Drives',
    ],
  },
  {
    name: 'Logical Data Recovery (++)',
    price: '$600',
    unit: '/Per Drive',
    items: [
      'Drives 8TB and Larger (Up to 12TB)',
      'G-Drive Portable Drives',
      'SanDisk Portable Drives',
      'Western Digital Portable Drives',
    ],
  },
  {
    name: 'Clean Room Data Recovery',
    price: '$950',
    unit: '/Per Drive',
    items: [
      'Stiction (Beeping)',
      'Monolith/Chip Off Recovery',
      'Component Level – All Devices',
      'Driver Making Clicking Sounds',
    ],
  },
]

const additionalFees = [
  {
    name: 'Expedited Service (+)',
    price: '+$200',
    unit: '/Per Drive',
    type: 'list',
    items: [
      'Priority Service',
      'During Business Hours',
      'Dedicated Engineer',
    ],
  },
  {
    name: 'Excess Labor Fees',
    price: '+$350',
    unit: '/Per Drive',
    type: 'list',
    items: [
      'Drives w/Software Media Damage',
      'Drives w/Firmware File System Damage',
    ],
  },
  {
    name: 'Expedited Plus (++)',
    price: '+$500',
    unit: '/Per Drive',
    type: 'list',
    items: [
      'Case Parts 24/7 Until Complete',
      'After Hours, Weekends, Holidays',
    ],
  },
  {
    name: 'Drives Larger than 12TB',
    price: '+$200',
    unit: '/Per Drive',
    type: 'desc',
    desc: 'This fee is in addition to all of our standard flat rate prices. Drives above 12TB require a surcharge applied per drive.',
  },
]

const nonRefundableFees = [
  {
    name: 'Drive Cover Opened',
    fee: '$200',
    unit: '/Per Drive',
    items: [
      'Applies if Drive Cover is Opened',
      'Previous Recovery Attempt Made Clean Room Necessary',
    ],
  },
  {
    name: 'Deleted File Recovery',
    fee: '$200',
    unit: '/Per Drive',
    items: [
      'Non-refundable portion of fee',
      'Applies to Deleted or Formatted Recoveries',
    ],
  },
  {
    name: 'Hard Drive Encryption',
    fee: '$200',
    unit: '/Per Drive',
    items: [
      'Applies if the drive has encrypted data',
      'Applies if the drive has had previous encryption',
    ],
  },
]

const raidExamples = [
  {
    label: 'Example A',
    title: 'RAID 5 — 4 Hard Drives, each 2TB',
    total: '$1,200.00',
    drives: [
      'Drive 1 – $300.00 Flat Rate',
      'Drive 2 – $300.00 Flat Rate',
      'Drive 3 – $300.00 Flat Rate',
      'Drive 4 – $300.00 Flat Rate',
    ],
    note: '',
  },
  {
    label: 'Example B — RAID 5, 4 × 6TB drives',
    title: 'RAID 5 — 4 Hard Drives, each 6TB',
    total: '$2,000.00',
    drives: [
      'Drive 1 – $500.00 (Logical Data Recovery +)',
      'Drive 2 – $500.00 (Logical Data Recovery +)',
      'Drive 3 – $500.00 (Logical Data Recovery +)',
      'Drive 4 – $500.00 (Logical Data Recovery +)',
    ],
    note: '$300.00 + $100.00 Surcharge for Drives Larger than 2TB',
  },
  {
    label: 'Example C',
    title: 'RAID 0 — 4 Hard Drives, each 6TB, one with bad heads',
    total: '$2,450.00',
    drives: [
      'Drive 1 – $500.00 (Logical Data Recovery +)',
      'Drive 2 – $500.00 (Logical Data Recovery +)',
      'Drive 3 – $500.00 (Logical Data Recovery +)',
      'Drive 4 – $950.00 Flat Rate Clean Room Data Recovery Fee',
    ],
    note: '',
  },
]

const faqs = [
  {
    q: 'Do you offer any student discounts?',
    a: 'Yes, of course. We offer a $20.00 student discount to all active students. Simply provide proof of current enrollment and we will apply the discount to your bill.',
  },
  {
    q: 'How much does USB data recovery cost?',
    a: 'Our USB Data Recovery fees are flat rate with no hidden fees or surprises. Our fees are $300.00 or $950.00, depending on the type of recovery. Our Logical USB Data Recovery fee is $300.00. For Chip-Off or Monolith recoveries, the fee is $950.00.',
  },
  {
    q: 'How much does RAID data recovery cost?',
    a: 'Our RAID Data Recovery prices are flat-rate per drive. Our flat rate fees are $300.00, $500.00, or $600.00 per drive, depending on the size of the drive. If any of the drives have mechanical issues requiring clean room work, the fee for that drive will be $950.00.',
  },
  {
    q: 'Do I pay a fee if the data is not recoverable?',
    a: 'In most cases, no. We stand by our No Data, No Charge policy. If we are unable to recover your data, you will not be charged for the recovery service. Exceptions may apply in certain cases — our team will always be transparent about any applicable fees before beginning work.',
  },
  {
    q: 'How much does hard drive data recovery cost?',
    a: 'Our hard drive data recovery fees start at $300.00 for standard logical recoveries. For drives with physical damage requiring clean room work, fees start at $950.00. All pricing is flat-rate with no hidden fees.',
  },
  {
    q: 'Do you offer any discounts for military or veterans?',
    a: 'Yes. We offer a discount for active military members and veterans. Please contact us directly to apply your discount. We appreciate your service.',
  },
  {
    q: 'Are there any upfront fees for data recovery services?',
    a: 'In most cases, no — we offer a completely free evaluation and you only pay once we confirm recovery and you approve the price. However, certain situations do require a non-refundable upfront fee: if your drive cover has been previously opened ($200), if your case involves deleted or formatted file recovery ($200), or if you select an Expedited Service option ($200–$500). Our team will always disclose any applicable fees before any work begins.',
  },
  {
    q: 'I need my data recovery, but I can\'t afford it. Do you offer payment plans for data recovery?',
    a: 'Yes. We understand data loss can happen unexpectedly. We offer flexible payment plan options to help make recovery accessible. Please visit our Payment Plan page or call us to discuss your options.',
  },
  {
    q: 'I need my data recovered immediately. Do you have an expedited service?',
    a: 'Yes! We offer an Expedited Service for an additional $200.00 per drive. With expedited service, your case receives priority status and is worked on exclusively during business hours by a dedicated engineer. For round-the-clock recovery including after hours, weekends, and holidays, our Expedited Plus (++) service is available for an additional $500.00 per drive.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <!-- 1. HERO -->
    <HeroSection
      title="Data Recovery Service Pricing"
      subtitle="Flat-Rate Pricing. No Hidden Fees. No Data, No Charge."
      description="At Five Star Data Recovery, our flat-rate pricing is based on the type of device and the specific issue, with no hidden fees or surprises. Whether you're recovering data from a hard drive, SSD, phone, or RAID system, you'll know exactly what to expect before we begin. We also stand by our No Data, No Charge policy — you only pay if we recover your data (exceptions may apply)."
      bgImage="/data-recovery-pricing-los-angeles.jpg"
    />

    <StatsBar />

    <!-- 2. MAIN PRICING TIERS — dark navy -->
    <section class="s-dark">
      <div class="container">
        <div class="section-label gold-label center">Pricing</div>
        <h2 class="s-heading-light center">Data Recovery Pricing</h2>
        <div class="pricing-grid-4">
          <div v-for="tier in mainTiers" :key="tier.name" class="pricing-card main-card">
            <div class="card-top-bar" />
            <h3 class="card-name">{{ tier.name }}</h3>
            <div class="card-price-wrap">
              <span class="card-price">{{ tier.price }}</span>
              <span class="card-unit">{{ tier.unit }}</span>
            </div>
            <div class="card-divider" />
            <p class="card-includes-label">Includes:</p>
            <ul class="card-items">
              <li v-for="item in tier.items" :key="item">
                <span class="item-check">✓</span>{{ item }}
              </li>
            </ul>
            <NuxtLink to="/start-recovery" class="card-btn">START RECOVERY</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. ADDITIONAL FEES — white -->
    <section class="s-white">
      <div class="container">
        <div class="section-label center">Add-Ons</div>
        <h2 class="s-heading center">Additional Fees (If Applies)</h2>
        <div class="pricing-grid-4">
          <div v-for="fee in additionalFees" :key="fee.name" class="pricing-card add-card">
            <div class="card-top-bar gold-bar" />
            <h3 class="card-name-dark">{{ fee.name }}</h3>
            <div class="card-price-wrap-dark">
              <span class="card-price-dark">{{ fee.price }}</span>
              <span class="card-unit-dark">{{ fee.unit }}</span>
            </div>
            <div class="card-divider-dark" />
            <template v-if="fee.type === 'list'">
              <p class="card-includes-label-dark">Includes:</p>
              <ul class="card-items-dark">
                <li v-for="item in (fee as any).items" :key="item">
                  <span class="item-check-gold">✓</span>{{ item }}
                </li>
              </ul>
            </template>
            <template v-else>
              <p class="card-desc-dark">{{ (fee as any).desc }}</p>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- 4. NON-REFUNDABLE FEES — light grey -->
    <section class="s-grey">
      <div class="container">
        <div class="section-label center">Non-Refundable</div>
        <h2 class="s-heading center">Non-Refundable Fees (If Applies)</h2>
        <div class="pricing-grid-3">
          <div v-for="fee in nonRefundableFees" :key="fee.name" class="pricing-card nr-card">
            <div class="card-top-bar gold-bar" />
            <h3 class="card-name-dark">{{ fee.name }}</h3>
            <div class="card-price-wrap-dark">
              <span class="card-price-dark">{{ fee.fee }}</span>
              <span class="card-unit-dark">{{ fee.unit }}</span>
            </div>
            <div class="card-divider-dark" />
            <ul class="card-items-dark">
              <li v-for="item in fee.items" :key="item">
                <span class="item-check-gold">✓</span>{{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. RAID PRICING — white -->
    <section class="s-white">
      <div class="container">
        <div class="section-label center">RAID &amp; NAS</div>
        <h2 class="s-heading center">RAID/NAS Data Recovery Pricing</h2>
        <p class="raid-intro">
          Our RAID Data Recovery prices are flat-rate per drive. We don't charge any premiums to rebuild the RAID in order to recover the data. Our flat rate Data Recovery fees are the same as our single drive Data Recovery prices, $300.00, $500.00, or $600.00 per drive, depending on the size of the drive. If any of the drives have mechanical issues, then the fee for that drive will be $950.00 (this is not very common for RAID systems, especially for RAIDs that are set up as a RAID 5).
        </p>
        <div class="raid-examples">
          <div v-for="ex in raidExamples" :key="ex.label" class="raid-box">
            <div class="raid-box-header">
              <span class="raid-label">{{ ex.label }}</span>
              <span class="raid-total">Total: {{ ex.total }}</span>
            </div>
            <p class="raid-box-title">{{ ex.title }}</p>
            <div class="raid-drives">
              <span v-for="drv in ex.drives" :key="drv" class="raid-drive-pill">{{ drv }}</span>
            </div>
            <p v-if="ex.note" class="raid-note">{{ ex.note }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. FAQ — dark -->
    <section class="s-dark-faq">
      <div class="container">
        <div class="section-label gold-label center">Got Questions?</div>
        <h2 class="s-heading-light center">Frequently Asked Questions</h2>
        <div class="faq-wrap">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="faq-row"
            :class="{ active: openFaq === i }"
          >
            <button class="faq-trigger" @click="toggleFaq(i)">
              <span>{{ faq.q }}</span>
              <span class="faq-toggle">{{ openFaq === i ? '−' : '+' }}</span>
            </button>
            <div v-if="openFaq === i" class="faq-answer">{{ faq.a }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 7. REVIEWS -->
    <ReviewsSection :reviews="reviews" />

    <!-- 8. CONTACT BAND -->
    <section class="s-contact-band">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Contact Us for Data Recovery Service Pricing</h2>
        </div>
        <div class="contact-body">
          <p class="contact-body-text">If you're experiencing issues with your data storage device, don't wait. Acting early gives you the best chance of recovering your data safely and completely.</p>
          <ul class="contact-bullets">
            <li>Visit our lab in Glendale, CA</li>
            <li>Mail your drive to us from anywhere in the U.S.</li>
            <li>Call us today for a free evaluation</li>
          </ul>
          <p class="contact-outro">Trust our experts for fast, secure, and professional data recovery — and get back what matters most.</p>
        </div>
        <NuxtLink to="/start-recovery" class="btn-start-recovery">Start Your Recovery</NuxtLink>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
*, *::before, *::after { box-sizing: border-box; }
.page-content { font-family: 'Inter', sans-serif; color: #1a1a2e; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 28px; }

/* ─── Section backgrounds ─── */
.s-white     { background: #fff; padding: 88px 0; }
.s-grey      { background: #f4f7fc; padding: 88px 0; }
.s-dark      { background: #0A0C14; padding: 88px 0; }
.s-dark-faq  { background: #0f1228; padding: 88px 0; }

/* ─── Labels & headings ─── */
.section-label {
  font-size: 0.72rem; font-weight: 800; letter-spacing: 0.14em;
  text-transform: uppercase; color: #7a5900; margin-bottom: 10px;
}
.section-label.center { text-align: center; }
.gold-label { color: #C9A84C; }
.s-heading {
  font-size: clamp(1.5rem, 2.8vw, 2.2rem); font-weight: 900;
  color: #1a1a2e; line-height: 1.25; margin-bottom: 40px;
}
.s-heading.center { text-align: center; }
.s-heading-light {
  font-size: clamp(1.5rem, 2.8vw, 2.2rem); font-weight: 900;
  color: #fff; line-height: 1.25; margin-bottom: 40px;
}
.s-heading-light.center { text-align: center; }

/* ─── Pricing grids ─── */
.pricing-grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.pricing-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

/* ─── Main cards (dark navy) ─── */
.pricing-card {
  border-radius: 14px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.main-card {
  background: #0f1623;
  border: 1px solid rgba(245,200,66,0.18);
  padding-bottom: 28px;
}
.card-top-bar {
  height: 4px;
  background: #F5C842;
  flex-shrink: 0;
}
.main-card .card-name {
  font-size: 1rem; font-weight: 800; color: #fff;
  padding: 22px 24px 0; line-height: 1.3;
}
.card-price-wrap {
  display: flex; align-items: baseline; gap: 6px;
  padding: 16px 24px 0;
}
.card-price {
  font-size: 2.2rem; font-weight: 900; color: #F5C842; line-height: 1;
}
.card-unit {
  font-size: 0.8rem; font-weight: 600; color: rgba(255,255,255,0.55);
}
.card-divider {
  height: 1px; background: rgba(255,255,255,0.1);
  margin: 18px 24px;
}
.card-includes-label {
  font-size: 0.72rem; font-weight: 800; letter-spacing: 0.1em;
  text-transform: uppercase; color: rgba(255,255,255,0.45);
  padding: 0 24px; margin-bottom: 10px;
}
.card-items {
  list-style: none; padding: 0 24px; margin: 0 0 24px; flex: 1;
}
.card-items li {
  display: flex; align-items: flex-start; gap: 8px;
  font-size: 0.88rem; color: rgba(255,255,255,0.85);
  padding: 6px 0; border-bottom: 1px solid rgba(255,255,255,0.06);
  line-height: 1.45;
}
.item-check {
  color: #F5C842; font-weight: 700; flex-shrink: 0; margin-top: 1px;
}
.card-btn {
  display: block; margin: auto 24px 0;
  background: #F5C842; color: #0A0C14;
  text-align: center; font-weight: 800; font-size: 0.82rem;
  letter-spacing: 0.1em; text-decoration: none;
  padding: 13px 0; border-radius: 7px;
  transition: background 0.2s;
}
.card-btn:hover { background: #d9af30; }

/* ─── Additional / Non-refundable cards (white bg) ─── */
.add-card, .nr-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  padding-bottom: 28px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.05);
}
.gold-bar { background: #C9A84C; }
.card-name-dark {
  font-size: 1rem; font-weight: 800; color: #1a1a2e;
  padding: 22px 24px 0; line-height: 1.3;
}
.card-price-wrap-dark {
  display: flex; align-items: baseline; gap: 6px;
  padding: 14px 24px 0;
}
.card-price-dark {
  font-size: 2rem; font-weight: 900; color: #C9A84C; line-height: 1;
}
.card-unit-dark {
  font-size: 0.8rem; font-weight: 600; color: #6b7280;
}
.card-divider-dark {
  height: 1px; background: #e8ecf2;
  margin: 16px 24px;
}
.card-includes-label-dark {
  font-size: 0.72rem; font-weight: 800; letter-spacing: 0.1em;
  text-transform: uppercase; color: #9ca3af;
  padding: 0 24px; margin-bottom: 10px;
}
.card-items-dark {
  list-style: none; padding: 0 24px; margin: 0; flex: 1;
}
.card-items-dark li {
  display: flex; align-items: flex-start; gap: 8px;
  font-size: 0.88rem; color: #374151;
  padding: 6px 0; border-bottom: 1px solid #f3f4f6;
  line-height: 1.45;
}
.item-check-gold {
  color: #C9A84C; font-weight: 700; flex-shrink: 0; margin-top: 1px;
}
.card-desc-dark {
  font-size: 0.88rem; color: #4a5568; line-height: 1.7;
  padding: 0 24px; margin: 0;
}

/* ─── RAID section ─── */
.raid-intro {
  font-size: 1rem; color: #4a5568; line-height: 1.8;
  max-width: 860px; margin: 0 auto 48px;
  text-align: center;
}
.raid-examples {
  display: flex; flex-direction: column; gap: 24px;
  max-width: 900px; margin: 0 auto;
}
.raid-box {
  background: #f8f9fc;
  border: 1px solid #e2e8f0;
  border-left: 4px solid #C9A84C;
  border-radius: 10px;
  padding: 24px 28px;
}
.raid-box-header {
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 8px; flex-wrap: wrap; gap: 8px;
}
.raid-label {
  font-size: 0.72rem; font-weight: 800; letter-spacing: 0.12em;
  text-transform: uppercase; color: #C9A84C;
}
.raid-total {
  font-size: 1.1rem; font-weight: 900; color: #1a1a2e;
}
.raid-box-title {
  font-size: 0.95rem; font-weight: 700; color: #374151;
  margin: 0 0 14px;
}
.raid-drives {
  display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 10px;
}
.raid-drive-pill {
  background: #fff; border: 1px solid #e2e8f0;
  border-radius: 6px; padding: 6px 14px;
  font-size: 0.83rem; color: #374151; font-weight: 500;
}
.raid-note {
  font-size: 0.82rem; color: #6b7280; font-style: italic;
  margin: 6px 0 0;
}

/* ─── FAQ (dark) ─── */
.faq-wrap {
  margin: 40px auto 0; max-width: 800px;
  display: flex; flex-direction: column; gap: 8px;
}
.faq-row {
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px; overflow: hidden;
  background: rgba(255,255,255,0.04);
  transition: border-color 0.2s;
}
.faq-row.active { border-color: #C9A84C; }
.faq-trigger {
  width: 100%; display: flex; justify-content: space-between;
  align-items: center; padding: 20px 24px;
  background: none; border: none;
  color: #fff; font-size: 0.97rem; font-weight: 700;
  cursor: pointer; text-align: left; gap: 16px;
  font-family: inherit;
}
.faq-toggle {
  color: #C9A84C; font-size: 1.4rem; font-weight: 300;
  flex-shrink: 0; line-height: 1;
}
.faq-answer {
  padding: 4px 24px 20px;
  font-size: 0.9rem; color: rgba(255,255,255,0.68);
  line-height: 1.8;
  border-top: 1px solid rgba(255,255,255,0.08);
}

/* ─── Contact band ─── */
.s-contact-band { background: #fff; padding: 64px 0; }
.contact-banner-card {
  background: linear-gradient(to right, #1a1a2e 55%, rgba(26,26,46,0.75) 100%),
    url('/hard-drive-data-recovery-specialist-glendale-ca.jpg') right center / cover no-repeat;
  border-radius: 12px; padding: 40px 48px; margin-bottom: 28px;
  min-height: 120px; display: flex; align-items: center; overflow: hidden;
}
.contact-banner-heading {
  font-size: clamp(1.3rem, 2.5vw, 1.8rem); font-weight: 900;
  color: #fff; line-height: 1.25; max-width: 560px; margin: 0;
}
.contact-body { margin-bottom: 28px; }
.contact-body-text {
  font-size: 0.95rem; color: #2d3748; line-height: 1.75; margin-bottom: 14px;
}
.contact-bullets {
  list-style: disc; padding-left: 20px; margin: 0 0 12px;
}
.contact-bullets li { font-size: 0.9rem; color: #4a5568; padding: 3px 0; }
.contact-outro { font-size: 0.9rem; color: #4a5568; }
.btn-start-recovery {
  display: block; width: 100%; text-align: center;
  background: #C9A84C; color: #1a1a1a; padding: 18px;
  border-radius: 8px; font-weight: 800; font-size: 1.05rem;
  text-decoration: none; letter-spacing: 0.04em; transition: background 0.2s;
}
.btn-start-recovery:hover { background: #b8923e; }

/* ─── Responsive ─── */
@media (max-width: 1024px) {
  .pricing-grid-4 { grid-template-columns: repeat(2, 1fr); }
  .pricing-grid-3 { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .pricing-grid-4,
  .pricing-grid-3 { grid-template-columns: 1fr; }
  .contact-banner-card { padding: 28px 24px; }
  .raid-box { padding: 18px 18px; }
}
</style>
