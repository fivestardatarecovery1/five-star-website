<script setup lang="ts">
useSeoMeta({
  title: 'Start Your Data Recovery — Five Star Data Recovery | Glendale, CA',
  description: 'Start your data recovery with Five Star Data Recovery. Free diagnostic, no data no charge guarantee. Drop off, mail-in, or call us today.'
})

const reviews = [{'text': 'Starting my data recovery process with Five Star was incredibly simple. I filled out the online form and got a quote within minutes. The instructions were clear, and the free prepaid shipping label made sending in my drive super convenient. They kept me updated every step of the way, and I had my recovered files back sooner than expected.', 'name': 'Emily S.', 'location': 'Summerlin, NV'}, {'text': 'The team made the whole data recovery process stress-free. From my initial phone call to dropping off my hard drive, they explained everything clearly. Within just a few days, they had recovered all my important files. Highly recommend!', 'name': 'Jessica R.', 'location': 'Austin, TX'}, {'text': 'I never thought getting started with data recovery could be this easy. I used their online Start Recovery form late at night, and someone followed up with me first thing the next morning. Their quick response and clear pricing made it an easy decision to move forward.', 'name': 'Timothy A.', 'location': 'New York, NY'}]
const faqs = [
  { q: 'Testimonials from Satisfied Clients', a: '"Starting my data recovery process with Five Star was incredibly simple. I filled out the online form and got a quote within minutes. The instructions were clear, and the free prepaid shipping label made sending in my drive super convenient. They kept me updated every step of the way, and I had my recovered files back sooner than expected." Emily S. Summerlin, NV "The team made the whole data recovery process stress-free. From my initial phone call to dropping off my hard drive, they explained everything clearly. Within just a few days, they had recovered all my important files. Highly recommend!"' },
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
const submitted = ref(false)
</script>

<template>
  <div class="page-content">
    <NavBar />
    <HeroSection
      title="Start Your Data Recovery Today"
      subtitle="Fast. Secure. Professional."
      description="Ready to get your data back? Starting your recovery with Five Star Data Recovery is simple. Fill out the form below or choose your preferred drop-off or mail-in option. Our team will contact you promptly to guide you through the next steps."
      bgImage="/hard-drive-recovery-service-los-angeles.webp"
    />
    <StatsBar />

    <!-- OPTIONS -->
    <section class="s-white">
      <div class="container">
        <div class="section-label center">How to Start</div>
        <h2 class="s-heading center">Choose Your Recovery Option</h2>
        <p class="s-intro center">We offer multiple convenient ways to get your recovery started. Choose the option that works best for you.</p>
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:28px;margin-top:40px;">
          <div style="background:#f4f7fc;border-radius:14px;padding:36px;text-align:center;border:1px solid #e8ecf2;">
            <div style="font-size:2.4rem;margin-bottom:16px;">🚗</div>
            <h3 style="font-size:1.1rem;font-weight:800;color:#1a1a2e;margin-bottom:12px;">Drop Off In Person</h3>
            <p style="font-size:0.9rem;color:#4a5568;line-height:1.7;margin-bottom:20px;">Visit our Glendale, CA lab for same-day evaluation. Walk-ins welcome.</p>
            <p style="font-size:0.85rem;font-weight:700;color:#C9A84C;">805 N. Brand Blvd, Suite 250<br>Glendale, CA 91203</p>
          </div>
          <div style="background:#f4f7fc;border-radius:14px;padding:36px;text-align:center;border:1px solid #e8ecf2;">
            <div style="font-size:2.4rem;margin-bottom:16px;">📦</div>
            <h3 style="font-size:1.1rem;font-weight:800;color:#1a1a2e;margin-bottom:12px;">Mail Your Drive</h3>
            <p style="font-size:0.9rem;color:#4a5568;line-height:1.7;margin-bottom:20px;">Not local? No problem. We offer free shipping both ways for mail-in clients across the U.S.</p>
            <NuxtLink to="/data-recovery/mail-in-service" style="background:#C9A84C;color:#1a1a1a;padding:10px 20px;border-radius:6px;font-weight:700;font-size:0.9rem;text-decoration:none;display:inline-block;">Mail-In Form →</NuxtLink>
          </div>
          <div style="background:#f4f7fc;border-radius:14px;padding:36px;text-align:center;border:1px solid #e8ecf2;">
            <div style="font-size:2.4rem;margin-bottom:16px;">⚡</div>
            <h3 style="font-size:1.1rem;font-weight:800;color:#1a1a2e;margin-bottom:12px;">Expedited Recovery</h3>
            <p style="font-size:0.9rem;color:#4a5568;line-height:1.7;margin-bottom:20px;">Need your data back ASAP? Our expedited service handles your case 24/7 with priority turnaround.</p>
            <NuxtLink to="/expedited-service" style="background:#C9A84C;color:#1a1a1a;padding:10px 20px;border-radius:6px;font-weight:700;font-size:0.9rem;text-decoration:none;display:inline-block;">Learn More →</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- FORM -->
    <section class="s-grey">
      <div class="container" style="max-width:800px;margin:0 auto;">
        <div class="section-label center">Get Started</div>
        <h2 class="s-heading center">Start Your Recovery Now</h2>
        <div style="background:#fff;border-radius:14px;padding:48px;box-shadow:0 4px 32px rgba(0,0,0,0.08);">
          <form @submit.prevent="submitted = true" style="display:flex;flex-direction:column;gap:16px;">
            <div class="mf-row">
              <div class="mf-group">
                <label>NAME <span class="mf-req">*</span></label>
                <input type="text" placeholder="Your Name" class="mf-input" required />
              </div>
              <div class="mf-group">
                <label>EMAIL <span class="mf-req">*</span></label>
                <input type="email" placeholder="Email Address" class="mf-input" required />
              </div>
            </div>
            <div class="mf-row">
              <div class="mf-group">
                <label>PHONE</label>
                <input type="tel" placeholder="Phone Number" class="mf-input" />
              </div>
              <div class="mf-group">
                <label>SELECT YOUR DEVICE TYPE</label>
                <div class="mf-select-wrap">
                  <select class="mf-input">
                    <option value="">— Select (Optional) —</option>
                    <option>Hard Drive</option><option>SSD</option><option>RAID/Server</option>
                    <option>External HDD</option><option>Mac/iMac</option><option>iPhone/Mobile</option>
                    <option>USB Flash Drive</option><option>SD Card</option><option>NAS Device</option><option>Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="mf-row">
              <div class="mf-group">
                <label>SELECT ISSUE WITH DEVICE</label>
                <div class="mf-select-wrap">
                  <select class="mf-input">
                    <option value="">Select Issue</option>
                    <option>Not Detected / Not Showing Up</option><option>Clicking / Grinding Noise</option>
                    <option>Water Damage</option><option>Corrupted Files</option><option>Accidental Deletion</option>
                    <option>Physical Damage</option><option>Not Spinning</option><option>Other</option>
                  </select>
                </div>
              </div>
              <div class="mf-group">
                <label>Preferred Contact Method</label>
                <div class="mf-radio-group">
                  <label class="mf-radio"><input type="radio" name="contactsr" value="call" checked /> CALL</label>
                  <label class="mf-radio"><input type="radio" name="contactsr" value="email" /> EMAIL</label>
                  <label class="mf-radio"><input type="radio" name="contactsr" value="text" /> TEXT</label>
                </div>
              </div>
            </div>
            <div class="mf-group mf-full">
              <label>PREFERRED RESPONSE TIME</label>
              <div class="mf-select-wrap">
                <select class="mf-input">
                  <option value="">Select Preferred Time</option>
                  <option>Immediately (24/7)</option><option>During Business Hours</option>
                  <option>Morning (8am - 12pm)</option><option>Afternoon (12pm - 5pm)</option><option>Evening (5pm - 8pm)</option>
                </select>
              </div>
            </div>
            <div v-if="submitted" style="background:#d4edda;border:1px solid #c3e6cb;border-radius:8px;padding:16px;color:#155724;font-weight:600;">
              ✓ Thank you! We'll be in touch within 24 hours.
            </div>
            <button type="submit" class="mf-submit">Request a Consultation</button>
          </form>
        </div>
      </div>
    </section>

    <!-- REVIEWS -->
    <section class="s-white">
      <div class="container">
        <div class="section-label center">Client Stories</div>
        <h2 class="s-heading center">Testimonials from Satisfied Clients</h2>
        <div class="reviews-grid">
          <div v-for="r in reviews" :key="r.name" class="review-card">
            <div class="review-quote">"</div>
            <p class="review-body">{{ r.text }}</p>
            <div class="review-footer">
              <div class="review-stars">★★★★★</div>
              <div class="review-meta">
                <strong class="review-name">{{ r.name }}</strong>
                <span class="review-loc">{{ r.location }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="s-grey">
      <div class="container">
        <div class="section-label center">Got Questions?</div>
        <h2 class="s-heading center">Frequently Asked Questions</h2>
        <div class="faq-wrap">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-row" :class="{ active: openFaq === i }">
            <button class="faq-trigger" @click="toggleFaq(i)">
              <span>{{ faq.q }}</span>
              <span class="faq-toggle">{{ openFaq === i ? '−' : '+' }}</span>
            </button>
            <div v-if="openFaq === i" class="faq-answer" v-html="faq.a" />
          </div>
        </div>
      </div>
    </section>

    <!-- VIDEO -->
    <section class="page-video-section">
      <div class="container page-video-inner">
        <div>
          <h2 class="page-video-heading">See Why Thousands Trust Us With Their Important Data</h2>
          <p class="page-video-desc">Data loss is stressful — but working with us doesn't have to be. Watch how our team handles each recovery with care, professionalism, and precision.</p>
        </div>
        <div class="page-video-embed">
          <iframe src="https://www.youtube.com/embed/14ACFHJ24hg?start=60" title="Five Star Data Recovery" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
*, *::before, *::after { box-sizing: border-box; }
.page-content { font-family: 'Inter', sans-serif; color: #1a1a2e; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 28px; }
.s-white { background: #fff; padding: 88px 0; }
.s-grey { background: #f4f7fc; padding: 88px 0; }
.section-label { font-size: 0.72rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #C9A84C; margin-bottom: 10px; }
.section-label.center { text-align: center; }
.s-heading { font-size: clamp(1.5rem, 2.8vw, 2.1rem); font-weight: 900; color: #1a1a2e; line-height: 1.25; margin-bottom: 14px; }
.s-heading.center { text-align: center; }
.s-intro { font-size: 1rem; color: #4a5568; line-height: 1.75; margin-bottom: 40px; }
.s-intro.center { text-align: center; max-width: 700px; margin-left: auto; margin-right: auto; }
.s-body { font-size: 0.94rem; color: #4a5568; line-height: 1.8; margin-bottom: 14px; }
.faq-wrap { margin: 40px 0 0; display: flex; flex-direction: column; gap: 8px; }
.faq-row { border: 1.5px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #fff; }
.faq-row.active { border-color: #C9A84C; }
.faq-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; color: #1a1a2e; font-size: 1rem; font-weight: 700; cursor: pointer; text-align: left; gap: 16px; font-family: inherit; }
.faq-toggle { color: #C9A84C; font-size: 1.4rem; font-weight: 300; flex-shrink: 0; line-height: 1; }
.faq-answer { padding: 4px 24px 20px; font-size: 0.9rem; color: #4a5568; line-height: 1.8; border-top: 1px solid #f0f2f7; }
.faq-answer :deep(.faq-link) { color: #C9A84C; font-weight: 600; text-decoration: underline; }
.faq-answer :deep(.faq-link:hover) { color: #b8923e; }
.mf-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.mf-group { display: flex; flex-direction: column; gap: 5px; }
.mf-group label { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: #555; }
.mf-req { color: #e53935; }
.mf-full { grid-column: 1 / -1; }
.mf-input { height: 52px; border: 1px solid #ddd; border-radius: 6px; padding: 0 16px; font-size: 15px; color: #333; background: #fff; width: 100%; box-sizing: border-box; font-family: inherit; appearance: none; }
.mf-input:focus { outline: none; border-color: #C9A84C; }
.mf-select-wrap { position: relative; }
.mf-select-wrap .mf-input { padding-right: 36px; cursor: pointer; }
.mf-radio-group { display: flex; gap: 14px; align-items: center; height: 40px; }
.mf-radio { display: flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: #444; cursor: pointer; }
.mf-radio input { width: 14px; height: 14px; accent-color: #C9A84C; cursor: pointer; }
.mf-submit { width: 100%; height: 62px; background: #C9A84C; color: #1a1a1a; font-weight: 800; font-size: 18px; border: none; border-radius: 6px; cursor: pointer; font-family: inherit; margin-top: 4px; transition: background 0.2s; }
.mf-submit:hover { background: #b8923e; }
.reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 44px; }
.review-card { background: #fff; border: 1.5px solid #e8ecf2; border-radius: 14px; padding: 32px 28px; display: flex; flex-direction: column; box-shadow: 0 2px 16px rgba(0,0,0,0.05); }
.review-quote { font-size: 3.5rem; color: #C9A84C; line-height: 0.8; margin-bottom: 14px; font-family: Georgia, serif; }
.review-body { font-size: 0.9rem; color: #4a5568; line-height: 1.75; flex: 1; font-style: italic; margin-bottom: 20px; }
.review-footer { border-top: 1px solid #f0f2f7; padding-top: 16px; display: flex; align-items: center; justify-content: space-between; }
.review-stars { color: #C9A84C; font-size: 0.95rem; letter-spacing: 2px; }
.review-meta { text-align: right; }
.review-name { display: block; font-size: 0.88rem; font-weight: 700; color: #1a1a2e; }
.review-loc { display: block; font-size: 0.78rem; color: #718096; margin-top: 2px; }
.btn-gold-full { display: block; width: 100%; text-align: center; background: #C9A84C; color: #1a1a1a; padding: 18px; border-radius: 8px; font-weight: 800; font-size: 1.05rem; text-decoration: none; letter-spacing: 0.04em; transition: background 0.2s; }
.btn-gold-full:hover { background: #b8923e; }
.page-video-section { background: #2a2d38; padding: 70px 0; }
.page-video-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.page-video-heading { font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 800; color: #fff; line-height: 1.25; }
.page-video-desc { font-size: 0.95rem; color: #9ba3b8; line-height: 1.8; margin-top: 16px; }
.page-video-embed { position: relative; border-radius: 14px; overflow: hidden; aspect-ratio: 16/9; box-shadow: 0 12px 48px rgba(0,0,0,0.4); }
.page-video-embed iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }
@media (max-width: 768px) {
  .reviews-grid, .page-video-inner, .mf-row { grid-template-columns: 1fr; }
  .mf-full { grid-column: 1; }
}
@media (max-width: 768px) {
  div[style*="grid-template-columns:repeat(3"] { grid-template-columns: 1fr !important; }
}
</style>
