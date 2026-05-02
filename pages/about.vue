<script setup lang="ts">
useSeoMeta({
  title: 'About Us — Five Star Data Recovery',
  description: 'At Five Star Data Recovery, we understand that losing data can be stressful, overwhelming, and sometimes even heartbreaking. Whether it’s personal photos, impor'
})
const faqs = [
  { q: '1. How did Five Star Data Recovery get started?', a: 'Five Star Data Recovery began as a local computer repair shop, helping customers with everything from hardware repairs to basic troubleshooting. In the early years, one case stood out — when our founder, Vahan, was asked to help a family member recover meaningful photos from a failed hard drive. That experience exposed the limitations of typical repair shops and sparked a deeper interest in data recovery. What started as a one-time challenge soon evolved into a long-term pursuit. After years of hands-on learning, investing in advanced equipment, and training in cleanroom procedures, the business gradually transitioned into a dedicated recovery lab. More than a decade later, Five Star Data Recovery now serves clients nationwide, taking on complex cases that most labs turn away.' },
  { q: '2. Who is the founder of Five Star Data Recovery?', a: 'Five Star Data Recovery was founded by Vahan Hovsepian, a lifelong entrepreneur with a passion for solving real-world problems and helping people in meaningful ways. Vahan has been actively involved in business since his early teens, driven by a deep curiosity for technology and a natural desire to serve others. That same drive led him to build Five Star Data Recovery into what it is today — a trusted recovery lab known for technical expertise, honesty, and results. Under his leadership, the company continues to grow while staying true to the core values of hard work, integrity, and genuine customer care.' },
  { q: '3. What makes Five Star Data Recovery different from other labs?', a: 'At Five Star Data Recovery, we focus on doing the work in-house — the right way. Unlike many labs that outsource or rely on software-only solutions, we handle every case with a hands-on, engineering-driven approach. From cleanroom repairs to firmware-level recovery, everything is done by trained specialists in our Glendale lab. We also don’t believe in gimmicks, inflated pricing, or sales pressure. Every client receives a transparent diagnosis, a flat-rate price based on the actual failure — not how valuable your data is — and honest expectations from day one. Our reputation is built on real results, straightforward communication, and a genuine commitment to helping people get their data back safely and securely.' },
  { q: '4. What types of data recovery cases do you specialize in?', a: 'At Five Star Data Recovery, we specialize in advanced data recovery from failed hard drives, SSDs, USB drives, SD cards, RAID systems, and iPhones. Our primary focus is on cases involving physical damage, firmware corruption, electrical issues, and drives that are no longer recognized by the computer. We do not rely on automated software — our engineers perform component-level diagnostics and repairs, including cleanroom work when necessary. We’re also highly experienced with Apple-specific storage devices, including NVMe drives used in MacBook Pros, and perform board-level iPhone data recovery when chips or logic boards have failed.' },
  { q: '5. Do you really perform all recoveries in-house?', a: 'Yes — 100% of our data recoveries are performed in-house at our Glendale, California lab. We never outsource cases or send drives to third parties. This allows us to maintain full control over the recovery process, ensure strict data confidentiality, and deliver consistent, high-quality results. Our lab is equipped with a Class 100 cleanroom, specialized tools like PC-3000, and a team of trained recovery engineers who handle each device with precision and care. When you trust us with your data, you can be confident it’s being worked on directly by the people you spoke with — never shipped off or handed to someone else.' },
  { q: '6. What steps are you taking to stay ahead in data recovery technology?', a: 'Staying ahead in data recovery requires more than just having the right tools — it takes constant learning and global collaboration. At Five Star Data Recovery, we regularly travel to Europe and other parts of the world to receive advanced training from some of the top data recovery engineers in the industry. We also invest heavily in the latest tools and technologies, including cleanroom equipment, micro soldering stations, and advanced firmware-level recovery systems like PC-3000. This ongoing investment ensures that we can recover data from the newest devices, evolving storage technologies, and complex failures that many labs simply aren’t equipped to handle.' }
]
const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div>
    <NavBar />
    <HeroSection
      title="About Us"
      subtitle="Get Your Data Back In No Time."
      description="At Five Star Data Recovery, we understand that losing data can be stressful, overwhelming, and sometimes even heartbreaking. Whether it’s personal photos, important business documents, or critical client files, we know how valuable your data is—and we’ve built our business around helping you get it "
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
          <h2 class="section-title">About Us</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get Your Data Back In No Time.</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">At Five Star Data Recovery, we understand that losing data can be stressful, overwhelming, and sometimes even heartbreaking. Whether it’s personal photos, important business documents, or critical client files, we know how valuable your data is—and we’ve built our business around helping you get it back.</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Who We Are</h2>
        </div>
        <div class="section-body">
          <p>At Five Star Data Recovery, we’re more than just engineers — we’re problem solvers dedicated to helping you recover what matters most. Based in Glendale, California, our team specializes in professional data recovery services for hard drives, SSDs, RAID systems, iPhones, USBs, and more.</p>
          <p>With years of hands-on experience and a state-of-the-art Class 100 cleanroom lab, we’ve earned a reputation for delivering high success rates, honest diagnostics, and upfront pricing. Every case is handled by trained recovery experts who follow strict protocols to maximize the chances of success — all while maintaining full transparency with our clients.</p>
          <p>We believe in doing things the right way — no gimmicks, no hidden fees, just skilled engineers working hard to recover your data as quickly and safely as possible.</p>
          <p>Whether it’s a business-critical RAID system or a personal external hard drive, we treat every case with urgency and care — because behind every device is a story worth recovering.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get To Know Us - Honesty, integrity &amp; experience</h2>
        </div>
        <div class="section-body">
          <p>At the core of everything we do is a commitment to honesty, integrity, and delivering real results. We believe that trust is earned — not claimed — which is why we never overpromise and always provide clear, honest assessments of your data recovery options.</p>
          <p>Our team has successfully handled thousands of complex recovery cases, from failed RAID arrays to water-damaged SSDs. That depth of experience allows us to approach each job with confidence and care, using proven methods and industry-standard tools to give your data the best chance of recovery.</p>
          <p>We don’t believe in scare tactics or pushing unnecessary services. Instead, we focus on transparency, straightforward pricing, and respectful communication — so you always know exactly what to expect at every step.</p>
          <p>When you choose Five Star Data Recovery, you’re working with a team that values long-term relationships over quick sales — because to us, every successful recovery is more than just a job. It’s a promise kept.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">How We Got Here</h2>
        </div>
        <div class="section-body">
          <p>Five Star Data Recovery began as a small computer repair shop in 2012 (previously known as Platinum Plus Services), proudly serving our local community with everyday tech support. But everything changed when our founder, Vahan, faced a deeply personal challenge: helping a family member recover irreplaceable photos from a failed hard drive.</p>
          <p>What started as a simple favor quickly turned into a mission. After years of hands-on training, research, and investment into advanced tools and cleanroom technology, Vahan transformed the company into a dedicated data recovery lab — now trusted by clients across the country.</p>
          <p>That journey still guides us today. Every recovery case is handled with the same care and urgency that first inspired this path — because we know firsthand just how valuable your data truly is.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Dedication to Research &amp; Development</h2>
        </div>
        <div class="section-body">
          <p>At Five Star Data Recovery, innovation isn’t optional — it’s essential. We continuously invest in research and development to stay ahead of the latest storage technologies, firmware behaviors, and failure trends across hard drives, SSDs, and RAID systems.</p>
          <p>From building proprietary tools to analyzing chip-level damage on the newest NAND architectures, our in-house team is always testing, learning, and refining recovery techniques. This commitment to R&amp;D enables us to recover data from cases that others might consider “unrecoverable.”</p>
          <p>Our lab isn’t just a workspace — it’s a place of constant experimentation and technical growth. Whether we’re reverse-engineering firmware modules or testing new soldering procedures, every advancement we make directly improves the outcomes for our clients.</p>
          <p>We don’t settle for what works today — we’re always preparing for what’s next.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">At Five Star Data Recovery, your data is our priority.</h2>
        </div>
        <div class="section-body">
          <p>Contact us today for a free consultation and find out why so many customers trust us when it matters most.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Customer Reviews</h2>
        </div>
        <div class="section-body">
          <p>We take pride in delivering exceptional service and results. Don’t just take our word for it—see what our customers have to say about their experience with Five Star Data Recovery.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Total Reviews</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">1,000+</h2>
        </div>
        <div class="section-body">
          <p>Growth in reviews this year</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Average Rating</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">4.9</h2>
        </div>
        <div class="section-body">
          <p>Consistent excellence</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Drives Recovered</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">100,000+</h2>
        </div>
        <div class="section-body">
          <p>Industry-leading success rate My drive was clicking like crazy and wouldn’t mount. Five Star recovered 12 years of family photos. I’m beyond grateful.</p>
          <p>I heard a hard drive clicking noise and panicked. These guys explained everything clearly, fixed it fast, and saved my client data.</p>
          <p>We lost an entire wedding video project after formatting our Lacie Rugged SSD. Five Star Data Recovery recovered all the footage in less than 72 hours. Total lifesavers.</p>
          <p>I had 4TB of files on my Lacie d2 drive that suddenly stopped mounting. Other places said it was hopeless. Five Star got everything back.</p>
          <p>My team uses a 4big RAID for media production. One drive failed, then another. We thought we lost the whole project. Five Star not only recovered the files—they kept the folder structure completely intact.</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">FIVE STAR DATA RECOVERY TEAM</h2>
        </div>
        <div class="section-body">

        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Vahan Hovsepian</h2>
        </div>
        <div class="section-body">
          <p>Head Engineer/Owner</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Aleksandr Ohanyan</h2>
        </div>
        <div class="section-body">
          <p>Engineer</p>
        </div>
      </div>
    </section>
    <section class="section-bg-3 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Elen Hovsepian</h2>
        </div>
        <div class="section-body">
          <p>Executive Manager</p>
        </div>
      </div>
    </section>
    <section class="section-bg-1 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Monika Sahakyan</h2>
        </div>
        <div class="section-body">
          <p>Marketing Specialist</p>
        </div>
      </div>
    </section>
    <section class="section-bg-2 section-pad">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Gina Gravino</h2>
        </div>
        <div class="section-body">
          <p>Sales/Marketing</p>
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
          <h2 class="cta-title">Need Help With About Us?</h2>
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
