<script setup lang="ts">
useSeoMeta({
  title: 'Hard Drive No Power? — Five Star Data Recovery',
  description: 'If your hard drive isn’t turning on, you’re not alone. Many people run into this problem and worry their files are lost forever. At Five Star Data Recovery, we '
})
const faqs = [
  { q: '1. Can you recover data from a drive that shows no signs of life?', a: 'Yes. Even if your hard drive appears completely dead with no lights or activity, we have specialized tools and recovery techniques to extract data directly from non-functioning drives.' },
  { q: '2. Can I get a detailed file list before finalizing the recovery?', a: 'Yes. After completing the recovery, we’ll provide you with a list of the files found. This lets you review the results before proceeding with final data delivery.' },
  { q: '3. Is there an additional fee for replacement parts if needed?', a: 'No. Our flat-rate pricing includes all necessary donor parts such as matching PCBs or compatible heads (if clean room service is required). There are never any surprise part charges.' },
  { q: '4. If my hard drive gets no power, can I recover the data?', a: 'A: Yes. Even if your hard drive shows no signs of power, data recovery is often still possible. The issue could be related to a failed circuit board (PCB), power surge damage, or internal electrical failure. At Five Star Data Recovery, we use specialized tools and donor parts to repair the electronic components or bypass the failure entirely. Once the drive powers on safely, we create a sector-by-sector clone to recover your important files. For urgent cases, our Expedited Plus Service ensures 24/7 engineer attention until your recovery is complete.' },
  { q: '5. What happens if the recovery is unsuccessful?', a: 'If we’re unable to recover your data, you won’t owe anything further beyond any required upfront fees (only applies in special non-standard cases like deleted files or prior tampering). For most standard cases, our No Data, No Charge policy applies.' },
  { q: '6. What are common signs that my hard drive has no power?', a: 'If your hard drive is not spinning, makes no sound, shows no lights, and is not recognized by any computer or external enclosure, it likely has a power-related failure. Stop all DIY attempts and contact a professional recovery lab.' },
  { q: '7. Can you recover data from all brands of hard drives with power failure?', a: 'Yes. We perform no-power data recovery on all major brands including Western Digital, Seagate, Toshiba, Hitachi, and others—whether it’s an internal drive or an external USB drive.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Hard Drive No Power?"
      subtitle="Get Your Data Back In No Time."
      description="If your hard drive isn’t turning on, you’re not alone. Many people run into this problem and worry their files are lost forever. At Five Star Data Recovery, we specialize in helping people recover their files when a Hard Drive doesnt power on or shows no signs of life."
    >
      <template #badges>
        <div class="trust-badges">
          <span class="badge">✅ Free Evaluation</span>
          <span class="badge">✅ No Data, No Charge</span>
          <span class="badge">✅ Flat-Rate Pricing</span>
          <span class="badge">✅ 21,000+ Recoveries</span>
        </div>
      </template>
    </HeroSection>
    <StatsBar />

    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Are the Signs of a No Power Issue?</h2>
        </div>
        <div class="section-body">
          <p>A hard drive with no power will usually show some or all of these signs:</p>
          <ul class="content-list">
            <li>The drive is not spinning or making any noise</li>
            <li>Your computer doesn't detect the drive</li>
            <li>No LED lights turn on (for external drives)</li>
            <li>You don’t hear the usual clicking or humming sounds</li>
          </ul>
          <p>In these cases, the drive is likely not receiving electricity. This could be from a failed circuit board, damaged cable, or even a shorted power supply.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Common Reasons Why a Hard Drive Doesn’t Power On</h2>
        </div>
        <div class="section-body">
          <p>Several problems can cause your Hard Drive to not power on:</p>
          <ul class="content-list">
            <li>Faulty power adapter or USB cable – Sometimes the problem is not the drive itself, but the cable or power source</li>
            <li>Damaged PCB (Printed Circuit Board) – The board on the bottom of the drive can get fried due to power surges or age</li>
            <li>Burnt components – Overheating or electrical damage can cause parts inside the drive to fail</li>
            <li>Incorrect power connection – Plugging a 12V adapter into a 5V port can instantly damage the drive</li>
            <li>Internal short circuit – This can stop power from reaching the motor or heads inside the drive</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What You Should (and Shouldn’t) Do</h2>
        </div>
        <div class="section-body">
          <p>If your hard drive doesn’t power on, the most important thing is to avoid doing anything that could make the situation worse.</p>
          <p>Don’t:</p>
          <ul class="content-list">
            <li>Try to open the hard drive</li>
            <li>Swap circuit boards between different drives</li>
            <li>Plug and unplug the drive repeatedly</li>
            <li>Use DIY software—these tools won’t help if the drive is not spinning</li>
          </ul>
          <ul class="content-list">
            <li>Check your cables and power source</li>
            <li>Try the drive on another computer or enclosure</li>
            <li>Bring it to a professional recovery lab if the issue continues</li>
          </ul>
          <p>A drive that doesn’t spin can still hold your files. We have tools and cleanroom environments that allow us to fix hard drives and safely extract data without causing additional damage.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Hard Drive Recovery Process</h2>
        </div>
        <div class="section-body">
          <p>At Five Star Data Recovery, we follow a step-by-step method to recover data from drives with no power:</p>
          <ol class="content-list">
            <li>Free Diagnostic – We inspect the drive’s board, connectors, and internal parts</li>
            <li>Safe Imaging – If the drive powers on after repair, we create a full image of the data to prevent further wear</li>
            <li>Data Extraction – We extract and rebuild the file structure, so your data is delivered exactly as it was before</li>
            <li>Verification – You’ll see a file list and confirm that the data is correct before final delivery</li>
          </ol>
          <p>If your Hard Drive has No Power, we will first determine if the issue is external (cable or enclosure) or internal (board or heads). If needed, we can replace damaged parts using donor drives matched to your specific model.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Data Recovery Process</h2>
        </div>
        <div class="section-body">
          <p>Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stage. With a commitment to honest service and no hidden fees, we follow through on every promise — ensuring a smooth and stress-free experience.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Drop off or Mail in Your Drive</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Receive a Free Diagnosis</h2>
        </div>
        <div class="section-body">
          <p>Our team will evaluate your device and provide a detailed diagnosis along with an initial quote — completely free of charge and with no obligation to proceed.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Engineers work on Recovering your Data</h2>
        </div>
        <div class="section-body">
          <p>We carefully begin the recovery process using advanced tools and cleanroom procedures.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Review &amp; Approve the Recovered</h2>
        </div>
        <div class="section-body">
          <p>After recovery is complete, you’ll receive a detailed file list to review so you can confirm everything important has been successfully recovered.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Receive your recovered data</h2>
        </div>
        <div class="section-body">
          <p>Once approved, we’ll securely transfer your data to a new drive and return it to you via pickup or insured shipping — ready for immediate use.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Five Star Data Recovery?</h2>
        </div>
        <div class="section-body">
          <p>We have helped thousands of clients recover files from drives not spinning or completely dead. Here's what makes us different:</p>
          <ul class="content-list">
            <li>Upfront, Flat Rate Pricing</li>
            <li>Cleanroom for safe hardware work</li>
            <li>Years of experience with no-power drives</li>
            <li>“No Data, No Charge” policy</li>
            <li>Clear communication and flat-rate pricing</li>
            <li>Fast turnaround with Expedited and Expedited Plus Service options</li>
          </ul>
          <p>Our goal is simple: recover your data safely, affordably, and quickly—even when the hard drive doesn’t power on.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Start YourRecovery Today</h2>
        </div>
        <div class="section-body">
          <p>Don’t let a non-working drive turn into a permanent data loss situation. If your Hard Drive has No Power, let the experts at Five Star Data Recovery bring it back to life.</p>
          <p>Contact us today for a free evaluation. We’ll help you fix your hard drive and recover the important files you thought were gone forever.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Testimonials from Satisfied Clients</h2>
        </div>
        <div class="section-body">
          <p>“My external hard drive suddenly started acting up and wouldn’t open any files. I found out it had bad sectors and thought everything was lost. Five Star Data Recovery recovered all of my documents, including years of business data. Their team was professional, honest, and incredibly skilled.”</p>
          <p>Mark R.</p>
          <p>West Covina, CA</p>
          <p>“My old hard drive was full of irreplaceable family memories, but it stopped responding due to bad sectors. I brought it to Five Star Data Recovery, and within days they recovered every last photo. I can’t thank them enough for saving what I thought was gone forever.”</p>
          <p>Samantha L.</p>
          <p>Burbank, CA</p>
          <p>“After being told by another company that my hard drive was unrecoverable due to bad sectors, I decided to get a second opinion. Five Star Data Recovery not only diagnosed the issue accurately but used advanced imaging tools to safely recover my data. Worth every penny.”</p>
          <p>David N.</p>
          <p>New York, NY</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get a Free Quote within Minutes!</h2>
        </div>
        <div class="section-body">
          <p>Our expert engineers use advanced technology to recover your data quickly and securely. We specialize in complex cases with high success rates, offering tailored solutions for both businesses and individuals. Fill out the form to start a seamless recovery process.</p>
          <ul class="content-list">
            <li>Quick and Secure Data Recovery</li>
            <li>Expert Engineers for All Devices</li>
            <li>No Data, No Fee Guarantee</li>
          </ul>
          <p>Contact our specialists today for a quick, hassle-free recovery. We’re here to guide you every step of the way and ensure your data is securely restored. Your peace of mind is our priority.</p>
          <p>Data loss is stressful — but working with us doesn’t have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        </div>
      </div>
    </section>

    <section class="faq-section section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Frequently Asked Questions</h2>
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

    <section class="cta-band section-bg-2">
      <div class="container cta-band-inner">
        <div>
          <h2 class="cta-title">Need Help With Hard Drive No Power??</h2>
          <p class="cta-sub">Free evaluation. No data, no charge. Contact us today.</p>
        </div>
        <div class="cta-actions">
          <a href="tel:8182728866" class="btn btn-gold">📞 818-272-8866</a>
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
.section-pad { padding: 72px 0; }
.section-body p { font-size: 16px; color: var(--muted); line-height: 1.8; margin-bottom: 16px; max-width: 860px; }
.section-body strong { color: var(--white); font-weight: 600; }
.content-list { padding-left: 20px; margin: 12px 0 16px; }
.content-list li { font-size: 15px; color: var(--muted); line-height: 1.7; margin-bottom: 8px; }
.faq-list { max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 8px; }
.faq-item { background: var(--card-bg); border: 1px solid var(--border); border-radius: 10px; overflow: hidden; }
.faq-item.open { border-color: var(--gold); }
.faq-question { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: none; border: none; color: var(--white); font-size: 16px; font-weight: 600; cursor: pointer; text-align: left; gap: 12px; font-family: var(--font-body); }
.faq-icon { color: var(--gold); font-size: 22px; font-weight: 400; flex-shrink: 0; }
.faq-answer { padding: 0 24px 20px; font-size: 15px; color: var(--muted); line-height: 1.7; }
.cta-band { background: linear-gradient(135deg, #0f1220, #13161F); border-top: 1px solid var(--border); padding: 56px 0; }
.cta-band-inner { display: flex; justify-content: space-between; align-items: center; gap: 32px; flex-wrap: wrap; }
.cta-title { font-family: var(--font-heading); font-size: 28px; font-weight: 900; color: var(--white); margin-bottom: 8px; }
.cta-sub { font-size: 16px; color: var(--muted); }
.cta-actions { display: flex; gap: 16px; flex-wrap: wrap; }
.btn-outline-sm { display: inline-block; padding: 14px 28px; border: 2px solid var(--gold); color: var(--gold); border-radius: 8px; font-weight: 700; font-size: 15px; text-decoration: none; }
.btn-outline-sm:hover { background: rgba(245,200,66,0.1); }
@media (max-width: 768px) { .cta-band-inner { flex-direction: column; } }
</style>
