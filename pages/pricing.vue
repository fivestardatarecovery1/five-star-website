<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery Pricing — Five Star Data Recovery',
  description: 'At Five Star Data Recovery, we keep things simple and transparent. Our flat-rate pricing is based on the type of device and the specific issue, with no hidden f'
})
const faqs = [
  { q: '1. Do you offer any student discounts?', a: 'Yes, of course. We offer a $20.00 student discount to all active students. Simply provide proof of current enrollment and we will apply the discount to your bill.' },
  { q: '2. How much does USB data recovery cost?', a: 'Our USB Data Recovery fees are flat rate with no hidden fees or surprises. Our fees are $300.00 or $650.00, depending on the type of recovery (Logical vs Chip-Off). Our Logical USB Data Recovery fee is $300.00. Examples of issues that fall under the logical data recovery category: USB Drive is recognized by the computer, but some of the files are missingUSB Drive is recognized by the computer, but you accidentally deleted some files and need them recoveredUSB Drive is recognized by the computer, but you’re having problems copying the files off from the drive.USB Drive is recognized by the computer (disk utility or disk management) with the correct storage capacity, but it does not mount. Our Chip-Off USB Data Recovery fee is $650.00. Examples of issues that fall under the “Chip-Off” Data Recovery Category: USB Drive is not recognized by the computer whatsoever (not by disk utility or disk management).USB Drive is recognized by the computer, but with an incorrect storage capacity.USB Drive is recognized by the computer, but every single file is damaged (not a single working file). If you don’t see your specific issue here, please feel free to contact us and we will make sure to provide you a quote immediately and add the issue to our list.' },
  { q: '3. How much does RAID data recovery cost?', a: 'Our RAID Data Recovery prices are flat-rate per drive. We don’t charge any premiums to rebuild the RAID in order to recover the data. Our flat rate Data Recovery fees are the same as our single drive Data Recovery prices, $300.00 or $400.00 per drive, depending on the size of the drive. If any of the drives have mechanical issues, then the fee for that drive will be $650.00 or $950.00 (this is not very common for RAID systems, especially for RAIDs that are set up as a RAID 5). Example A. You have a RAID 5 with 4 Hard Drives and each drive is 2TB, your total recovery fee would be $1,200.00. How this is broken down: Drive 1 – $300.00 Flat Rate Drive 2 – $300.00 Flat Rate Drive 3 – $300.00 Flat Rate Drive 4 – $300.00 Flat Rate Total Recovery Fee – $1,200.00 Example B. You have a RAID 5 with 4 Hard Drives and each drive is 6TB, your total recovery fee would be $1,600.00. How this is broken down: Drive 1 – $400.00 Flat Rate ($300.00 + $100.00 Surcharge for Drives Larger than 2TB) Drive 2 – $400.00 Flat Rate ($300.00 + $100.00 Surcharge for Drives Larger than 2TB) Drive 3 – $400.00 Flat Rate ($300.00 + $100.00 Surcharge for Drives Larger than 2TB) Drive 4 – $400.00 Flat Rate ($300.00 + $100.00 Surcharge for Drives Larger than 2TB) Total Recovery Fee – $1,600.00 Example C. You have a RAID 0 with 4 Hard Drives, Each Drive is 6TB, and one drive has bad read/write heads (clicking sounds). Your total recovery fee would be $2,150.00. Here is how its broken down. Drive 1 – $400.00 Flat Rate ($300.00 + $100.00 Surcharge for Drives Larger than 2TB) Drive 2 – $400.00 Flat Rate ($300.00 + $100.00 Surcharge for Drives Larger than 2TB) Drive 3 – $400.00 Flat Rate ($300.00 + $100.00 Surcharge for Drives Larger than 2TB) Drive 4 – $950.00 Flat Rate Clean Room Data Recovery Fee Total Recovery Fee – $2,150.00' },
  { q: '4. Do I pay a fee if the data is not recoverable?', a: 'Absolutely not. Five Star Data Recovery will never, ever charge you a penny if the data is not recoverable OR if you are not happy with the recovery results. We stand by our name and want to make sure you receive nothing but Five Star service. Regardless of how much time, effort or money we spend on your case, you will never pay a penny until you approve the recovery results. The only cases that will have an upfront non-refundable fee are cases where the hard drive cover has been opened by someone other than us (just to clarify, we are referring to the actual drive’s cover, where the platters are, not the enclosure of the hard drive) and Deleted File Recoveries ($100.00 non-refundable payment is due when the case is dropped off). The only reason we charge this fee is to cover the extra time our engineers have to spend on these cases to figure out what was done to the drive before it got to our lab. These cases are always more challenging and time-consuming.' },
  { q: '5. How much does hard drive data recovery cost?', a: 'Our Hard Drive Data Recovery fees are flat rate with no hidden fees or surprises. Our fees are $300.00, $400.00, $650.00, or $950.00, depending on the type of recovery (Logical vs Clean Room). Our Logical Data Recovery Fees are either $300.00 or $400.00. 90% of the cases we deal with, fall under this category. Examples of issues that fall under the logical data recovery category: Hard drive powers on, spins, keeps spinning as usual, but does not mount on the computer.Hard drive shows up in Disk Utility or Disk Management, but you cannot access any of the files.Hard Drive mounts, you can see your files, but you keep getting an error message when you try to move the files to another drive.Hard Drive mounts, you can see your files and copy them to another drive, but the copying process is moving extremely slow.Hard Drive does not power on at all (this one is a 50/50. Sometimes the issues are electronic and still falls under our Logical Data Recovery pricing, and sometimes the issue is mechanical and falls under our Clean Room recovery pricing. We will do a free diagnosis and let you know the exact cost). Our Clean Room Data Recovery Fees are either $650.00 or $950.00. Examples of cases that fall under the Clean Room Data Recovery category: Hard Drive powers on to a clicking sounds.Hard Drive powers on to a beeping sound.Hard Drive is making whirling sounds.Hard Drive was dropped or physically damaged and is now making unusual sounds. If you do not see your specific issue here, please feel free to contact us and we will make sure to provide you a quote immediately and add the issue to our list.' },
  { q: '6. Do you offer any discounts for military or veterans?', a: 'Yes, of course. How could we not? We are very thankful to all of our Veterans and active military personnel for your service to us and our country. We offer a $20.00 discount to all of our men and women in service.' },
  { q: '7. Are there any upfront fees for data recovery services?', a: 'At Five Star Data Recovery, we won’t charge you a penny until the data is recovered and you are satisfied with the results. The only upfront fees that could apply are “Expedited Service” or “Drive Cover Opened” fees. Our Expedited Service is optional and offered to those who need to have their data recovery as soon as possible without any delays. The “Drive Cover Opened” fee applies to any drive that has been opened by someone other than the Engineers here at Five Star Data Recovery (just to clarify, we are referring to the actual drive cover, where the platters are, not the enclosure of the hard drive).' },
  { q: '8. I need my data recovery, but can’t afford it. Do you offer payment plans for data recovery?', a: 'Yes of course. Please contact us here or feel free to give us a call and we will do our best to be as helpful as possible. We understand that Data Recovery is not something that most people expect and the entire situation can catch us completely off guard financially. We offer flexible Data Recovery Payment Plan options to help you get your data recovered safely. These payment plans are customized for each and every customer depending on their situation. So please do not hesitate to let us know how we can best help you. Once the terms are clear and we come to an agreement, we will start working on your case immediately. Once the data is recovered we will send you a report of the recovery or you can come in to review the results. If approved, we will transfer the recovered data to your new drive and store it for you safely at our facility until the terms of the payment plan are fulfilled.' },
  { q: '9. I need my data recovered immediately. Do you have an expedited service? If so, how much does it cost and how long will the process take with this service?', a: 'Yes, of course. We offer an Expedited Data Recovery Service for a $200.00 Flat Rate fee, paid upfront and non-refundable. Our Expedited Data Recovery Service entails our Engineers start working on your case within 1-2 hours and the entire recovery process will be handled without any delays. It’s impossible to say how long the recovery will take, as every case is different, but we can assure you that there won’t be any delays at all. Once we diagnose the drive, we will contact you within 1-2 hours and let you know how long we believe the process will take. IF your case is SUPER urgent, please look into our Expedited Plus Data Recovery Service. With our Expedited Plus Service, you will have a dedicated Engineer work on your case 24/7 without any downtime at all. This includes holidays and weekends.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="Data Recovery Pricing"
      subtitle="At Five Star Data Recovery, we keep things simple and transparent. Our flat-rate pricing is based on the type of device and the specific issue, with no hidden fees or surprises. Whether you’re recovering data from a hard drive, SSD, phone, or RAID system, you’ll know exactly what to expect before we begin. We also stand by our No Data, No Charge policy — you only pay if we recover your data (exceptions may apply)."
      description="At Five Star Data Recovery, we keep things simple and transparent. Our flat-rate pricing is based on the type of device and the specific issue, with no hidden fees or surprises. Whether you’re recovering data from a hard drive, SSD, phone, or RAID system, you’ll know exactly what to expect before we"
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
          <h2 class="section-title">Logical Data Recovery</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Desktop Drives</li>
            <li>USB Flash Drives</li>
            <li>Solid State Drives (SSD) (Per Drive)</li>
            <li>RAID/NAS drive-level performance and reliability</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Logical Data Recovery (+)</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Drives Larger than 2TB (Up to 6TB)</li>
            <li>Drives with USB 2.0/3.0 Connector</li>
            <li>LaCie/Seagate Portable Drives</li>
            <li>Encrypted Drives</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Logical Data Recovery (++)</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Drives 8TB and Larger (Up to 12TB)</li>
            <li>G-Drive Portable Drives</li>
            <li>SanDisk Portable Drives</li>
            <li>Western Digital Portable Drives</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Clean Room Data Recovery</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Stiction (Beeping)</li>
            <li>Monolith/Chip Off Recovery</li>
            <li>Component Level – All Devices</li>
            <li>Drives Making Clicking Sounds</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Additional Fees (If Applies)</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Expedited Service</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Priority Service</li>
            <li>During Normal Business Hours</li>
            <li>Dedicated Engineer</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Expedited Plus</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Case Runs 24/7 Until Complete</li>
            <li>After Hours, Weekends, Holidays</li>
            <li>Dedicated Engineer</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Excess Labor Fees</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Drives w/Severe Media Damage</li>
            <li>Drives w/Severe File System Damage</li>
            <li>Drives Previously Opened/Contaminated</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Non-Refundable Fees (If Applies)</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Drive Cover Opened</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Applies if Drives Cover is Opened</li>
            <li>Previous Recovery Attempt Made (Clean Room)</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Deleted File Recovery</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Non-refundable portion of fee</li>
            <li>Applies to Deleted or Formatted Recoveries</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Hard Drive Encryption</h2>
        </div>
        <div class="section-body">
          <ul class="content-list">
            <li>Applies if the drive is encrypted</li>
            <li>Applies if the drive has bitLocker encryption</li>
          </ul>
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
          <h2 class="cta-title">Need Help With Data Recovery Pricing?</h2>
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
