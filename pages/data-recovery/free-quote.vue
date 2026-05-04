<script setup lang="ts">
useSeoMeta({
  title: 'Get a Free Quote — Five Star Data Recovery | Glendale, CA',
  description: 'Get a free data recovery quote from Five Star Data Recovery. No obligation, no hidden fees. Free diagnostic evaluation. Located in Glendale, CA.'
})
const submitted = ref(false)
</script>

<template>
  <div class="page-content">
    <NavBar />
    <HeroSection
      title="Get a Free Data Recovery Quote"
      subtitle="No Obligation. No Hidden Fees."
      description="We understand your files are private. Whether you're recovering sensitive business files or personal memories, we keep your data protected from start to finish. Get your free quote in minutes — no commitment required."
      bgImage="/hard-drive-recovery-service-los-angeles.webp"
    />
    <StatsBar />

    <!-- FORM SECTION -->
    <section class="s-white">
      <div class="container" style="display:grid;grid-template-columns:1fr 520px;gap:60px;align-items:start;">
        <div>
          <div class="section-label">Free Evaluation</div>
          <h2 class="s-heading">Your Data Stays Secure</h2>
          <p style="font-size:0.94rem;color:#4a5568;line-height:1.8;margin-bottom:14px;">We understand your files are private. Whether you\'re recovering sensitive business files or personal memories, we keep your data protected from start to finish.</p>
          <div style="margin-top:32px;display:flex;flex-direction:column;gap:14px;">
            <div style="display:flex;align-items:center;gap:12px;font-size:0.9rem;color:#4a5568;">
              <span style="color:#C9A84C;font-weight:700;font-size:1.1rem;">✓</span> Free same-day diagnostic evaluation
            </div>
            <div style="display:flex;align-items:center;gap:12px;font-size:0.9rem;color:#4a5568;">
              <span style="color:#C9A84C;font-weight:700;font-size:1.1rem;">✓</span> Flat-rate pricing — no surprises
            </div>
            <div style="display:flex;align-items:center;gap:12px;font-size:0.9rem;color:#4a5568;">
              <span style="color:#C9A84C;font-weight:700;font-size:1.1rem;">✓</span> No data recovered = no charge <em style="color:#999;">(most cases)</em>
            </div>
            <div style="display:flex;align-items:center;gap:12px;font-size:0.9rem;color:#4a5568;">
              <span style="color:#C9A84C;font-weight:700;font-size:1.1rem;">✓</span> Strict confidentiality — your files stay private
            </div>
          </div>
        </div>
        <div style="background:#fff;border:1px solid #e8ecf2;border-radius:14px;padding:40px;box-shadow:0 4px 32px rgba(0,0,0,0.08);">
          <h3 style="font-size:1.2rem;font-weight:800;color:#1a1a2e;margin-bottom:24px;padding-bottom:14px;border-bottom:2px solid #f0f0f0;">Get a Free Quote in Minutes!</h3>
          <form @submit.prevent="submitted = true" style="display:flex;flex-direction:column;gap:14px;">
            <div class="mf-row">
              <div class="mf-group">
                <label>NAME <span class="mf-req">*</span></label>
                <input type="text" placeholder="Name / Required" class="mf-input" required />
              </div>
              <div class="mf-group">
                <label>EMAIL <span class="mf-req">*</span></label>
                <input type="email" placeholder="Email Address / Required" class="mf-input" required />
              </div>
            </div>
            <div class="mf-row">
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
              <div class="mf-group">
                <label>PHONE</label>
                <input type="tel" placeholder="Phone Number" class="mf-input" />
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
                  <label class="mf-radio"><input type="radio" name="contactfq" value="call" checked /> CALL</label>
                  <label class="mf-radio"><input type="radio" name="contactfq" value="email" /> EMAIL</label>
                  <label class="mf-radio"><input type="radio" name="contactfq" value="text" /> TEXT</label>
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
              ✓ Thank you! We'll reach out with a quote shortly.
            </div>
            <button type="submit" class="mf-submit">Request a Consultation</button>
          </form>
        </div>
      </div>
    </section>

    <!-- TRUST SIGNALS -->
    <section class="s-grey">
      <div class="container" style="display:grid;grid-template-columns:repeat(4,1fr);gap:24px;text-align:center;">
        <div style="background:#fff;border-radius:12px;padding:28px;border:1px solid #e8ecf2;">
          <div style="font-size:2rem;margin-bottom:10px;">🔬</div>
          <strong style="font-size:0.95rem;color:#1a1a2e;display:block;margin-bottom:6px;">Class 100 Cleanroom</strong>
          <p style="font-size:0.82rem;color:#4a5568;line-height:1.5;margin:0;">Professional-grade recovery environment</p>
        </div>
        <div style="background:#fff;border-radius:12px;padding:28px;border:1px solid #e8ecf2;">
          <div style="font-size:2rem;margin-bottom:10px;">💰</div>
          <strong style="font-size:0.95rem;color:#1a1a2e;display:block;margin-bottom:6px;">Flat-Rate Pricing</strong>
          <p style="font-size:0.82rem;color:#4a5568;line-height:1.5;margin:0;">No hidden fees, ever</p>
        </div>
        <div style="background:#fff;border-radius:12px;padding:28px;border:1px solid #e8ecf2;">
          <div style="font-size:2rem;margin-bottom:10px;">🛡</div>
          <strong style="font-size:0.95rem;color:#1a1a2e;display:block;margin-bottom:6px;">No Data, No Charge</strong>
          <p style="font-size:0.82rem;color:#4a5568;line-height:1.5;margin:0;">You only pay if we succeed <em>(most cases)</em></p>
        </div>
        <div style="background:#fff;border-radius:12px;padding:28px;border:1px solid #e8ecf2;">
          <div style="font-size:2rem;margin-bottom:10px;">🚚</div>
          <strong style="font-size:0.95rem;color:#1a1a2e;display:block;margin-bottom:6px;">Free Shipping</strong>
          <p style="font-size:0.82rem;color:#4a5568;line-height:1.5;margin:0;">Free two-way shipping nationwide</p>
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
  div[style*="grid-template-columns:1fr 520px"] { grid-template-columns: 1fr !important; }
  div[style*="grid-template-columns:repeat(4"] { grid-template-columns: repeat(2,1fr) !important; }
}
</style>
