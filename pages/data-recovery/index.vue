<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery Services — Five Star Data Recovery | Glendale, CA',
  description: 'Expert data recovery services for hard drives, SSDs, RAID arrays, iPhones, USB drives, and more. Free evaluation, flat-rate pricing, no data no charge. Glendale, CA.'
})

const services = [
  {
    icon: '💾',
    title: 'Hard Drive Recovery',
    text: 'We recover data from all HDD brands and models — clicking drives, firmware failures, bad sectors, and more.',
    href: '/data-recovery/hard-drive-recovery',
  },
  {
    icon: '⚡',
    title: 'SSD Recovery',
    text: 'Specialized tools for SATA, NVMe, and mSATA solid-state drives — including controller failures and NAND damage.',
    href: '/data-recovery/ssd-recovery',
  },
  {
    icon: '🖥️',
    title: 'RAID Recovery',
    text: 'We rebuild and recover from all RAID configurations (RAID 0, 1, 5, 6, 10) and NAS/server arrays.',
    href: '/data-recovery/raid-recovery',
  },
  {
    icon: '💻',
    title: 'Laptop Recovery',
    text: 'Crashed, dropped, or water-damaged laptop? We recover data from all laptop drive types.',
    href: '/data-recovery/laptop-recovery',
  },
  {
    icon: '🖥️',
    title: 'Desktop Recovery',
    text: 'From accidental deletion to complete drive failure — we recover files from desktop HDDs and SSDs.',
    href: '/data-recovery/desktop-recovery',
  },
  {
    icon: '📦',
    title: 'External HDD Recovery',
    text: 'WD My Passport, Seagate Backup Plus, LaCie, G-Drive — we specialize in external hard drive recovery.',
    href: '/data-recovery/external-hard-drive',
  },
  {
    icon: '🍎',
    title: 'Mac / iMac Recovery',
    text: 'Recovery for all Apple machines — MacBook Pro, MacBook Air, iMac, Mac Mini, and Mac Pro.',
    href: '/data-recovery/mac-recovery',
  },
  {
    icon: '📱',
    title: 'iPhone Recovery',
    text: 'Component-level iPhone data recovery for devices with water damage, screen damage, or boot failures.',
    href: '/data-recovery/iphone-recovery',
  },
  {
    icon: '🔌',
    title: 'USB Flash Drive',
    text: 'Chip-off and logical recovery for USB flash drives of all brands and capacities.',
    href: '/data-recovery/usb-recovery',
  },
  {
    icon: '📷',
    title: 'SD Card Recovery',
    text: 'Camera, drone, GoPro, or phone SD cards — we recover photos, videos, and all file types.',
    href: '/data-recovery/sd-card-recovery',
  },
  {
    icon: '🌐',
    title: 'NAS Recovery',
    text: 'Synology, QNAP, Drobo, and custom NAS arrays — multi-drive recovery handled with precision.',
    href: '/data-recovery/nas-recovery',
  },
  {
    icon: '🎥',
    title: 'Video File Repair',
    text: 'Corrupted or unplayable footage from cameras, drones, and professional video equipment.',
    href: '/data-recovery/video-file-repair',
  },
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
  { label: 'Deleted Files', href: '/data-recovery/deleted-files' },
]

const special = [
  { label: 'Clean Room Recovery', href: '/data-recovery/clean-room' },
  { label: 'Mail-In Service', href: '/data-recovery/mail-in-service' },
  { label: 'Express Drop-Off', href: '/data-recovery/express-drop-off' },
  { label: 'Free Quote', href: '/data-recovery/free-quote' },
  { label: 'Expedited Service', href: '/expedited-service' },
  { label: 'Expedited Service Plus', href: '/expedited-service-plus' },
]

const steps = [
  { num: '1', title: 'Drop Off or Mail In Your Drive', text: 'Visit our Glendale lab for a quick drop-off, or securely mail your device using our prepaid shipping label — whichever is more convenient for you.' },
  { num: '2', title: 'Receive a Free Diagnosis', text: 'Our team evaluates your device and provides a detailed diagnosis along with an initial quote — completely free of charge and with no obligation to proceed.' },
  { num: '3', title: 'Engineers Begin Recovery', text: 'We carefully begin the recovery process using advanced tools and cleanroom procedures for physically damaged media.' },
  { num: '4', title: 'Review Recovered Files', text: "After recovery is complete, you'll receive a detailed file list to review and confirm everything important has been successfully recovered." },
  { num: '5', title: 'Receive Your Data', text: "Once approved, we securely transfer your data to a new drive and return it via pickup or insured shipping — ready for immediate use." },
]

const faqs = [
  {
    q: 'How long does data recovery take?',
    a: 'Our standard turnaround is 3–5 business days. Expedited and same-day options are available for urgent cases. Complex RAID or multi-drive recoveries may take longer depending on the failure type.'
  },
  {
    q: 'How much does data recovery cost?',
    a: 'Our pricing is flat-rate and transparent. Hard drive recovery typically ranges from $300–$800. SSD, RAID, and chip-off recoveries vary by complexity. We provide a free evaluation with an exact quote before any work begins — no surprises.'
  },
  {
    q: 'What is the "No Data, No Charge" guarantee?',
    a: 'If we are unable to recover your data, you owe nothing in most cases. We believe you should only pay for results. A detailed file list is provided for your approval before final payment.'
  },
  {
    q: 'Can you recover data from a physically damaged drive?',
    a: 'Yes. Our ISO-certified clean room allows us to safely open drives and perform head swaps, platter transfers, and other physical repairs needed before logical recovery can begin.'
  },
  {
    q: 'Is my data kept confidential?',
    a: 'Absolutely. All recoveries are handled with strict confidentiality. We never access your files beyond what is necessary for the recovery process, and we do not retain copies of your data.'
  },
  {
    q: 'Do you offer mail-in service?',
    a: 'Yes — we serve clients nationwide with our secure mail-in program. We provide prepaid shipping labels so you can send your device from anywhere in the U.S. safely and at no cost to you.'
  },
]

const reviews = [
  {
    text: 'Five Star Data Recovery saved my business. My external hard drive crashed right before a major deadline and I thought everything was lost. They recovered <strong>100% of my files</strong> within two days. The pricing was completely transparent — no surprises. I can\'t recommend them enough.',
    name: 'Michael T.',
    location: 'Glendale, CA'
  },
  {
    text: 'I dropped my MacBook and the hard drive stopped working entirely. I was devastated — five years of photos and work gone. Five Star recovered everything. The technicians were incredibly professional and kept me updated throughout the process. Worth every penny.',
    name: 'Sarah L.',
    location: 'Los Angeles, CA'
  },
  {
    text: 'After my NAS array failed, I thought our company data was gone for good. Five Star\'s engineers rebuilt the RAID and recovered <strong>all critical files</strong>. Their flat-rate pricing meant no surprises on the bill. Hands down the best data recovery lab in the area.',
    name: 'David R.',
    location: 'Burbank, CA'
  },
  {
    text: 'My clicking hard drive had years of irreplaceable family photos. Five Star diagnosed it for free, gave me an honest quote, and delivered all my photos back within 3 days. The clean room process they use is state-of-the-art. Truly five-star service.',
    name: 'Jennifer K.',
    location: 'Pasadena, CA'
  },
  {
    text: 'I tried two other places before Five Star — both said recovery was impossible. Five Star got <strong>everything back</strong>. The team is incredibly skilled and honest. If you have data that needs recovering, stop looking and call them first.',
    name: 'Carlos M.',
    location: 'Hollywood, CA'
  },
  {
    text: 'Water damaged my external drive and I panicked. Five Star recovered all my files within 48 hours. The no-data no-charge policy gave me peace of mind from the start. Exceptional service and extremely knowledgeable staff.',
    name: 'Amanda S.',
    location: 'Beverly Hills, CA'
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">
    <NavBar />

    <HeroSection
      title="Professional Data Recovery Services"
      subtitle="Get Your Data Back In No Time."
      description="Losing access to your photos, videos, or work files can feel overwhelming. Whether it's a failed hard drive, damaged phone, or broken USB stick, Five Star Data Recovery is here to help. Our lab handles everything from corrupted files to failed external hard drives. We offer expert, in-house data recovery services to restore your most important data—quickly, safely, and affordably."
      bgImage="/data-recovery-hero.jpg"
      :trustBadges="[
        { icon: 'clock', text: 'Available 24/7/365' },
        { icon: 'check', text: 'No Data = No Charge' },
        { icon: 'shield', text: '10+ Years in Business' },
        { icon: 'star', text: 'Free Nationwide Shipping' },
      ]"
    />

    <StatsBar />

    <!-- COMMON REASONS SECTION -->
    <section class="s-white">
      <div class="container reasons-layout">
        <div class="reasons-copy">
          <h2 class="reasons-heading">Common Reasons You May Need Data Recovery</h2>
          <p class="reasons-intro">Data loss can happen when you least expect it. Some of the most common causes include:</p>
          <ul class="reasons-list">
            <li>Accidental deletion of important files</li>
            <li>Reformatting the drive without backup</li>
            <li>Virus or ransomware attacks</li>
            <li>Failed iOS or system updates</li>
            <li>Drops, spills, or other physical damage</li>
            <li>Electrical surges or overheating</li>
            <li>Crashes or corruption caused by a failed operating system update</li>
          </ul>
          <p class="reasons-body">You still have options if your file system becomes corrupted or you work with damaged drives.</p>
          <p class="reasons-body">Our team can recover data quickly and professionally—even from completely dead devices.</p>
        </div>
        <div class="reasons-image">
          <img src="/common-reasons-data-recovery.jpg" alt="Data recovery technician working on hard drive with blue gloves" class="reasons-img" />
        </div>
      </div>
    </section>

    <!-- SERVICES GRID -->
    <section class="s-white">
      <div class="container">
        <div class="section-label center">What We Recover</div>
        <h2 class="s-heading center">Data Recovery for Every Device Type</h2>
        <p class="s-intro center">It doesn't matter if you are a student, a small business owner, a photographer, or an IT worker — we can help. Our team works with care, precision, and complete confidentiality.</p>
        <div class="services-grid">
          <NuxtLink v-for="svc in services" :key="svc.href" :to="svc.href" class="service-card">
            <div class="svc-icon">{{ svc.icon }}</div>
            <h3 class="svc-title">{{ svc.title }}</h3>
            <p class="svc-body">{{ svc.text }}</p>
            <span class="svc-link">Learn more →</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- BY BRAND + BY PROBLEM + SPECIAL -->
    <section class="s-grey">
      <div class="container three-col">
        <div class="ref-col">
          <div class="ref-col-header">Recovery by Brand</div>
          <NuxtLink v-for="b in brands" :key="b.href" :to="b.href" class="ref-link">
            <span class="ref-dot">›</span>{{ b.label }}
          </NuxtLink>
        </div>
        <div class="ref-col">
          <div class="ref-col-header">Recovery by Problem</div>
          <NuxtLink v-for="p in problems" :key="p.href" :to="p.href" class="ref-link">
            <span class="ref-dot">›</span>{{ p.label }}
          </NuxtLink>
        </div>
        <div class="ref-col">
          <div class="ref-col-header">Special Services</div>
          <NuxtLink v-for="s in special" :key="s.href" :to="s.href" class="ref-link">
            <span class="ref-dot">›</span>{{ s.label }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- WHY CHOOSE US — white -->
    <section class="s-white">
      <div class="container asym-layout">
        <div class="asym-minor">
          <div class="section-label">Why Choose Us</div>
          <h2 class="s-heading">Trusted by Thousands Across the Greater Los Angeles Area</h2>
          <p class="s-body">At Five Star Data Recovery, we offer flat-rate pricing for all of our data recovery services. No need to wonder how much it's going to cost. Simply visit our pricing page for details — never any bait-and-switch gimmicks.</p>
          <div class="why-list">
            <div class="why-item">
              <div class="why-icon">🛡</div>
              <div>
                <strong class="why-title">No Data = No Charge</strong>
                <p class="why-body">If we aren't able to recover your data or you're not 100% satisfied with the results, you can decline the recovery and pay nothing (most cases).</p>
              </div>
            </div>
            <div class="why-item">
              <div class="why-icon">💰</div>
              <div>
                <strong class="why-title">Flat Rate Pricing</strong>
                <p class="why-body">All prices are upfront and transparent. Pricing is flat-rate depending on the exact issue with your drive. No hidden fees, ever.</p>
              </div>
            </div>
            <div class="why-item">
              <div class="why-icon">🔬</div>
              <div>
                <strong class="why-title">Top Notch Engineers</strong>
                <p class="why-body">All of our engineers have received the highest level of training — qualified to handle all types of logical and clean room recoveries.</p>
              </div>
            </div>
            <div class="why-item">
              <div class="why-icon">⭐</div>
              <div>
                <strong class="why-title">Five Star Service</strong>
                <p class="why-body">We take pride in providing only the best customer service possible. Five Star is more than just a name — it's our standard.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="asym-major">
          <img src="/hard-drive-recovery-service-los-angeles.webp" alt="Data recovery lab Glendale CA" class="rounded-img" />
          <div class="img-stat-badge">
            <span class="stat-num">21,000+</span>
            <span class="stat-label">Successful Recoveries</span>
          </div>
        </div>
      </div>
    </section>

    <!-- PROCESS — grey -->
    <section class="s-grey">
      <div class="container">
        <div class="section-label center">Our Process</div>
        <h2 class="s-heading center">How Our Recovery Process Works</h2>
        <p class="s-intro center">Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stage.</p>
        <div class="process-track">
          <div v-for="(step, i) in steps" :key="step.num" class="process-node">
            <div class="process-circle">{{ step.num }}</div>
            <div v-if="i < steps.length - 1" class="process-connector" />
            <h3 class="process-title">{{ step.title }}</h3>
            <p class="process-body">{{ step.text }}</p>
          </div>
        </div>
        <div class="guarantee-strip">
          <span class="guarantee-icon">🛡</span>
          <p><strong>No Data, No Charge Guarantee</strong> — If we can't recover your data, you owe nothing. <em>(most cases)</em></p>
        </div>
      </div>
    </section>

    <!-- FULL-WIDTH BANNER -->
    <section class="fullwidth-banner">
      <div class="banner-overlay" />
      <div class="container banner-inner">
        <h2 class="banner-heading">See Why Thousands Trust Us With Their Important Data</h2>
        <p class="banner-sub">Data loss is stressful — but working with us doesn't have to be. We offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        <div class="banner-stats">
          <div class="bstat"><span class="bstat-num">99%</span><span class="bstat-lbl">Recovery Success Rate</span></div>
          <div class="bstat-div" />
          <div class="bstat"><span class="bstat-num">3–5</span><span class="bstat-lbl">Day Standard Turnaround</span></div>
          <div class="bstat-div" />
          <div class="bstat"><span class="bstat-num">$0</span><span class="bstat-lbl">If We Can't Recover</span><em class="bstat-note">(Most Cases)</em></div>
          <div class="bstat-div" />
          <div class="bstat"><span class="bstat-num">24/7</span><span class="bstat-lbl">Available Support</span></div>
        </div>
      </div>
    </section>

    <!-- MID-PAGE FORM -->
    <section class="mid-form-section" style="background: linear-gradient(to right, rgba(50,52,58,0.92) 0%, rgba(50,52,58,0.72) 50%, rgba(30,32,38,0.2) 100%), url('/hard-drive-recovery-service-los-angeles.webp') right center / cover no-repeat;">
      <div class="container mid-form-inner">
        <div class="mid-form-text">
          <div class="section-label light">Get Started</div>
          <h2 class="dark-heading">Start Your Data Recovery Today</h2>
          <p class="dark-body">Don't wait — the longer a failing drive is used, the lower the chances of a full recovery. Our engineers are standing by to evaluate your device and give you a free, no-obligation quote.</p>
          <p class="dark-body">Stop using the device immediately if you notice any unusual symptoms. The sooner you bring it to us, the better your chances of a full recovery.</p>
          <div class="dark-features">
            <div class="df"><span class="df-check">✓</span> Free same-day evaluation</div>
            <div class="df"><span class="df-check">✓</span> Flat-rate pricing, no surprises</div>
            <div class="df"><span class="df-check">✓</span> No data recovered = no charge <em class="df-note">(most cases)</em></div>
          </div>
        </div>
        <div class="mid-form-card">
          <h3 class="mid-form-title">Get a Free Quote in Minutes!</h3>
          <form @submit.prevent class="mid-consult-form">
            <div class="mf-row">
              <div class="mf-group">
                <label>NAME <span class="mf-req">*</span></label>
                <input type="text" placeholder="Name / Required" class="mf-input" />
              </div>
              <div class="mf-group">
                <label>EMAIL <span class="mf-req">*</span></label>
                <input type="email" placeholder="Email Address / Required" class="mf-input" />
              </div>
            </div>
            <div class="mf-row">
              <div class="mf-group">
                <label for="mf-device-type">SELECT YOUR DEVICE TYPE</label>
                <div class="mf-select-wrap">
                  <select id="mf-device-type" class="mf-input">
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
                <label for="mf-device-issue">SELECT ISSUE WITH DEVICE</label>
                <div class="mf-select-wrap">
                  <select id="mf-device-issue" class="mf-input">
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
                  <label class="mf-radio"><input type="radio" name="contactDataRecIdx" value="call" checked /> CALL</label>
                  <label class="mf-radio"><input type="radio" name="contactDataRecIdx" value="email" /> EMAIL</label>
                  <label class="mf-radio"><input type="radio" name="contactDataRecIdx" value="text" /> TEXT</label>
                </div>
              </div>
            </div>
            <div class="mf-group mf-full">
              <label for="mf-response-time">PREFERRED RESPONSE TIME</label>
              <div class="mf-select-wrap">
                <select id="mf-response-time" class="mf-input">
                  <option value="">Select Preferred Time</option>
                  <option>Immediately (24/7)</option><option>During Business Hours</option>
                  <option>Morning (8am – 12pm)</option><option>Afternoon (12pm – 5pm)</option><option>Evening (5pm – 8pm)</option>
                </select>
              </div>
            </div>
            <button type="submit" class="mf-submit">Request a Free Evaluation</button>
          </form>
        </div>
      </div>
    </section>

    <!-- FAQ — grey -->
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
            <div v-if="openFaq === i" class="faq-answer">{{ faq.a }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- VIDEO SECTION -->
    <section class="page-video-section">
      <div class="container page-video-inner">
        <div class="page-video-copy">
          <h2 class="page-video-heading">See Why Thousands Trust Us With Their Important Data</h2>
          <p class="page-video-desc">Data loss is stressful — but working with us doesn't have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        </div>
        <div class="page-video-embed">
          <iframe src="https://www.youtube.com/embed/14ACFHJ24hg?start=60" title="Five Star Data Recovery" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
        </div>
      </div>
    </section>

    <ReviewsSection :reviews="reviews" />

    <!-- CONTACT BAND -->
    <section class="s-contact-band">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Contact Us for Data Recovery Services</h2>
        </div>
        <div class="contact-body">
          <p class="contact-body-text">If you're experiencing data loss, don't wait. Acting early gives you the best chance of recovering your data safely and completely.</p>
          <ul class="contact-bullets">
            <li>Visit our lab in Glendale, CA</li>
            <li>Mail your drive to us from anywhere in the U.S.</li>
            <li>Call us today for a free evaluation</li>
          </ul>
          <p class="contact-outro">Trust our experts for fast, secure, and professional data recovery services — and get back what matters most.</p>
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
.s-white { background: #fff; padding: 88px 0; }
.s-grey  { background: #f4f7fc; padding: 88px 0; }
.section-label { font-size: 0.72rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: #7a5900; margin-bottom: 10px; }
.section-label.center { text-align: center; }
.section-label.light { color: #C9A84C; }
.s-heading { font-size: clamp(1.5rem, 2.8vw, 2.1rem); font-weight: 900; color: #1a1a2e; line-height: 1.25; margin-bottom: 14px; }
.s-heading.center { text-align: center; }
.s-intro { font-size: 1rem; color: #4a5568; line-height: 1.75; margin-bottom: 40px; }
.s-intro.center { text-align: center; max-width: 680px; margin-left: auto; margin-right: auto; }
.s-body { font-size: 0.94rem; color: #4a5568; line-height: 1.8; margin-bottom: 14px; }

/* ── Services Grid ── */
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 8px;
}
.service-card {
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1.5px solid #e8ecf2;
  border-radius: 14px;
  padding: 28px 24px;
  text-decoration: none;
  color: inherit;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  position: relative;
  overflow: hidden;
}
.service-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: #C9A84C;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}
.service-card:hover { border-color: #C9A84C; box-shadow: 0 8px 32px rgba(201,168,76,0.15); transform: translateY(-3px); }
.service-card:hover::before { transform: scaleX(1); }
.svc-icon { font-size: 1.8rem; margin-bottom: 12px; line-height: 1; }
.svc-title { font-size: 0.97rem; font-weight: 800; color: #1a1a2e; margin-bottom: 10px; line-height: 1.3; }
.svc-body { font-size: 0.85rem; color: #4a5568; line-height: 1.7; flex: 1; }
.svc-link { margin-top: 16px; font-size: 0.82rem; font-weight: 700; color: #C9A84C; letter-spacing: 0.03em; }

/* ── Three-col reference section ── */
.three-col { display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; }
.ref-col { display: flex; flex-direction: column; gap: 4px; }
.ref-col-header {
  font-size: 0.72rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase;
  color: #7a5900; margin-bottom: 14px; padding-bottom: 10px; border-bottom: 2px solid #e8ecf2;
}
.ref-link {
  display: flex; align-items: center; gap: 7px;
  padding: 8px 0;
  font-size: 0.9rem; color: #2d3748; text-decoration: none;
  border-bottom: 1px solid #e8ecf2;
  transition: color 0.15s, gap 0.15s;
}
.ref-link:hover { color: #C9A84C; gap: 12px; }
.ref-dot { color: #C9A84C; font-size: 1.1rem; line-height: 1; flex-shrink: 0; }

/* ── Why Choose Us ── */
.asym-layout { display: grid; grid-template-columns: 3fr 2fr; gap: 64px; align-items: center; }
.asym-major { position: relative; }
.rounded-img { width: 100%; border-radius: 14px; display: block; object-fit: cover; max-height: 460px; }
.img-stat-badge { position: absolute; bottom: -20px; left: 24px; background: #C9A84C; color: #fff; border-radius: 10px; padding: 14px 22px; box-shadow: 0 8px 24px rgba(201,168,76,0.4); }
.stat-num { display: block; font-size: 1.6rem; font-weight: 900; line-height: 1; }
.stat-label { display: block; font-size: 0.75rem; font-weight: 600; opacity: 0.85; margin-top: 3px; }
.why-list { display: flex; flex-direction: column; gap: 24px; margin-top: 28px; }
.why-item { display: flex; gap: 18px; align-items: flex-start; }
.why-icon { font-size: 1.5rem; flex-shrink: 0; margin-top: 2px; }
.why-title { display: block; font-size: 0.97rem; font-weight: 800; color: #1a1a2e; margin-bottom: 5px; }
.why-body { font-size: 0.88rem; color: #4a5568; line-height: 1.7; margin: 0; }

/* ── Process ── */
.process-track { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0; position: relative; margin: 8px 0 36px; }
.process-node { position: relative; padding: 0 12px; text-align: center; }
.process-circle { width: 56px; height: 56px; border-radius: 50%; background: #1a1a2e; color: #C9A84C; font-size: 1.1rem; font-weight: 900; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; border: 2px solid #C9A84C; }
.process-connector { position: absolute; top: 27px; left: calc(50% + 28px); width: calc(100% - 56px); height: 2px; background: linear-gradient(90deg, #C9A84C, rgba(201,168,76,0.3)); }
.process-title { font-size: 0.82rem; font-weight: 700; color: #1a1a2e; margin-bottom: 10px; line-height: 1.3; }
.process-body { font-size: 0.8rem; color: #4a5568; line-height: 1.65; }
.guarantee-strip { background: #1a1a2e; border-radius: 10px; padding: 18px 28px; display: flex; align-items: center; gap: 16px; }
.guarantee-icon { font-size: 1.5rem; flex-shrink: 0; }
.guarantee-strip p { margin: 0; color: rgba(255,255,255,0.8); font-size: 0.92rem; line-height: 1.5; }
.guarantee-strip strong { color: #C9A84C; }

/* ── Banner ── */
.fullwidth-banner { position: relative; background: #0d111f; padding: 72px 0; overflow: hidden; }
.banner-overlay { position: absolute; inset: 0; background: url('/hard-drive-data-recovery-specialist-glendale-ca.jpg') center/cover no-repeat; opacity: 0.12; }
.banner-inner { position: relative; text-align: center; }
.banner-heading { font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 900; color: #fff; margin-bottom: 14px; }
.banner-sub { font-size: 1rem; color: rgba(255,255,255,0.65); max-width: 640px; margin: 0 auto 48px; line-height: 1.7; }
.banner-stats { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; }
.bstat { text-align: center; padding: 0 40px; }
.bstat-num { display: block; font-size: 2.2rem; font-weight: 900; color: #C9A84C; line-height: 1; margin-bottom: 6px; }
.bstat-lbl { display: block; font-size: 0.82rem; color: rgba(255,255,255,0.6); }
.bstat-note { display: block; font-size: 0.72rem; color: rgba(255,255,255,0.4); font-style: italic; margin-top: 3px; }
.bstat-div { width: 1px; height: 48px; background: rgba(255,255,255,0.15); }

/* ── Mid-page form ── */
.mid-form-section { position: relative; padding: 72px 0; overflow: hidden; }
.mid-form-inner { position: relative; display: grid; grid-template-columns: 1fr 480px; gap: 60px; align-items: center; }
.mid-form-card { background: #fff; border-radius: 8px; padding: 32px 32px 28px; box-shadow: 0 20px 60px rgba(0,0,0,0.4); }
.mid-form-title { font-size: 20px; font-weight: 800; color: #1a1a2e; margin-bottom: 20px; padding-bottom: 14px; border-bottom: 2px solid #f0f0f0; }
.mid-consult-form { display: flex; flex-direction: column; gap: 14px; }
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
.dark-heading { font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 900; color: #fff; margin-bottom: 18px; line-height: 1.25; }
.dark-body { font-size: 0.94rem; color: rgba(255,255,255,0.72); line-height: 1.8; margin-bottom: 14px; }
.dark-features { margin-top: 24px; display: flex; flex-direction: column; gap: 10px; }
.df { font-size: 0.9rem; color: rgba(255,255,255,0.85); display: flex; align-items: center; gap: 10px; }
.df-check { color: #C9A84C; font-weight: 700; }
.df-note { font-size: 0.8rem; color: rgba(255,255,255,0.5); }

/* ── FAQ ── */
.faq-wrap { margin: 40px 0 0; display: flex; flex-direction: column; gap: 8px; max-width: 820px; margin-left: auto; margin-right: auto; }
.faq-row { border: 1.5px solid #e2e8f0; border-radius: 10px; overflow: hidden; background: #fff; }
.faq-row.active { border-color: #C9A84C; }
.faq-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; color: #1a1a2e; font-size: 1rem; font-weight: 700; cursor: pointer; text-align: left; gap: 16px; font-family: inherit; }
.faq-toggle { color: #C9A84C; font-size: 1.4rem; font-weight: 300; flex-shrink: 0; line-height: 1; }
.faq-answer { padding: 4px 24px 20px; font-size: 0.9rem; color: #4a5568; line-height: 1.8; border-top: 1px solid #f0f2f7; }

/* ── Video ── */
.page-video-section { background: #2a2d38; padding: 70px 0; }
.page-video-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.page-video-copy { display: flex; flex-direction: column; gap: 20px; }
.page-video-heading { font-size: clamp(1.4rem, 2.5vw, 2rem); font-weight: 800; color: #fff; line-height: 1.25; }
.page-video-desc { font-size: 0.95rem; color: #9ba3b8; line-height: 1.8; }
.page-video-embed { position: relative; border-radius: 14px; overflow: hidden; aspect-ratio: 16/9; box-shadow: 0 12px 48px rgba(0,0,0,0.4); }
.page-video-embed iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: none; }

/* ── Contact Band ── */
.s-contact-band { background: #fff; padding: 64px 0; }
.contact-banner-card { background: linear-gradient(to right, #1a1a2e 55%, rgba(26,26,46,0.75) 100%), url('/hard-drive-data-recovery-specialist-glendale-ca.jpg') right center / cover no-repeat; border-radius: 12px; padding: 40px 48px; margin-bottom: 28px; min-height: 120px; display: flex; align-items: center; overflow: hidden; }
.contact-banner-heading { font-size: clamp(1.3rem, 2.5vw, 1.8rem); font-weight: 900; color: #fff; line-height: 1.25; max-width: 560px; margin: 0; }
.contact-body { margin-bottom: 28px; }
.contact-body-text { font-size: 0.95rem; color: #2d3748; line-height: 1.75; margin-bottom: 14px; }
.contact-bullets { list-style: disc; padding-left: 20px; margin: 0 0 12px; }
.contact-bullets li { font-size: 0.9rem; color: #4a5568; padding: 3px 0; }
.contact-outro { font-size: 0.9rem; color: #4a5568; }
.btn-start-recovery { display: block; width: 100%; text-align: center; background: #C9A84C; color: #1a1a1a; padding: 18px; border-radius: 8px; font-weight: 800; font-size: 1.05rem; text-decoration: none; letter-spacing: 0.04em; transition: background 0.2s; }
.btn-start-recovery:hover { background: #b8923e; }

/* ── Common Reasons Section ── */
.reasons-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}
.reasons-heading {
  font-size: clamp(1.6rem, 2.8vw, 2.2rem);
  font-weight: 900;
  color: #1a1a2e;
  line-height: 1.2;
  margin-bottom: 18px;
}
.reasons-intro {
  font-size: 0.95rem;
  color: #4a5568;
  line-height: 1.75;
  margin-bottom: 14px;
}
.reasons-list {
  margin: 0 0 18px 0;
  padding: 0 0 0 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.reasons-list li {
  font-size: 0.95rem;
  color: #4a5568;
  line-height: 1.6;
}
.reasons-body {
  font-size: 0.95rem;
  color: #4a5568;
  line-height: 1.75;
  margin-bottom: 8px;
}
.reasons-img {
  width: 100%;
  height: auto;
  border-radius: 16px;
  display: block;
  object-fit: cover;
}

/* ── Responsive ── */
@media (max-width: 1200px) {
  .services-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 1024px) {
  .process-track { grid-template-columns: repeat(3, 1fr); gap: 24px; }
  .process-connector { display: none; }
  .mid-form-inner { grid-template-columns: 1fr 440px; gap: 40px; }
  .asym-layout { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 900px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .three-col { grid-template-columns: 1fr; gap: 32px; }
}
@media (max-width: 768px) {
  .asym-layout, .mid-form-inner, .reasons-layout { grid-template-columns: 1fr; gap: 36px; }
  .page-video-inner { grid-template-columns: 1fr; }
  .bstat-div { display: none; }
  .img-stat-badge { bottom: 12px; }
  .mf-row { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .services-grid { grid-template-columns: 1fr; }
  .process-track { grid-template-columns: 1fr; }
}
</style>
