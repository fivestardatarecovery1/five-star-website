<script setup lang="ts">
useSeoMeta({
  title: 'Data Recovery Experts – Five Star Data Recovery',
  description: 'Recover lost files from hard drives, iPhones, SSDs, and more. Based in Los Angeles, Five Star Data Recovery provides data recovery services.'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "name": "Five Star Data Recovery",
            "image": "https://www.fivestardatarecovery.com/wp-content/uploads/logo.png",
            "telephone": "+1-818-272-8866",
            "priceRange": "$300 - $950",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1731 S Brand Blvd.",
              "addressLocality": "Glendale",
              "addressRegion": "CA",
              "postalCode": "91204",
              "addressCountry": "US"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "10:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "10:00",
                "closes": "14:00"
              }
            ],
            "areaServed": [
              { "@type": "City", "name": "Glendale" },
              { "@type": "City", "name": "Los Angeles" },
              { "@type": "Country", "name": "United States" }
            ],
            "url": "https://www.fivestardatarecovery.com/",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "498"
            },
            "review": [
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Jennifer K." },
                "datePublished": "2024-11-20",
                "reviewBody": "Fast and reliable service. They recovered all my important files from a completely dead hard drive.",
                "name": "Lifesaving Recovery",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5",
                  "worstRating": "1"
                }
              }
            ]
          },
          {
            "@type": "LocalBusiness",
            "name": "Five Star Data Recovery",
            "url": "https://www.fivestardatarecovery.com/",
            "telephone": "+1-818-272-8866",
            "priceRange": "$300 - $950",
            "image": "https://www.fivestardatarecovery.com/wp-content/uploads/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1731 S Brand Blvd.",
              "addressLocality": "Glendale",
              "addressRegion": "CA",
              "postalCode": "91204",
              "addressCountry": "US"
            }
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What types of devices do you recover data from?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We recover data from hard drives, SSDs, RAID arrays, iPhones, CFast Cards, USB flash drives, SD cards and more."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer free diagnostics?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes — we offer a free diagnosis as long as the customer agrees to the initial minimum quoted price. We always start with a free consultation, during which we ask for details about the issue. Based on the information provided, we give an initial price quote. If the customer is comfortable with that price, we proceed with a full diagnostic at no charge. If the issue turns out to be different and the price changes, the customer will have the option to accept the updated quote or walk away without paying anything. We're 100% transparent — no surprises and no obligations."
                }
              },
              {
                "@type": "Question",
                "name": "How much does data recovery cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All of our data recovery fees are flat-rate, based on the specific issue and type of device. We've made pricing simple and transparent — you can view our current rates on our pricing page. If you're unsure what the issue is, just give us a call for a free phone consultation. Our team will guide you through the symptoms and help you understand what category your device might fall into. No hidden fees. No gimmicks. Just honest, upfront pricing from start to finish."
                }
              },
              {
                "@type": "Question",
                "name": "What if you can't recover my data?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We operate under a No Data — No Charge policy for most cases. However, there are two exceptions where a non-refundable fee will apply, due to the higher complexity and labor involved: Deleted File Recoveries — These require advanced scanning and are not covered under the standard policy. Drives with Opened Covers — If the top metal cover (where the platters are housed) has been removed before arrival, a cleanroom inspection fee will be charged regardless of outcome. For all other cases, if we can't recover your data, you don't pay anything."
                }
              },
              {
                "@type": "Question",
                "name": "How long does the data recovery process take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For most standard cases — such as drives up to 4TB with logical issues — the typical turnaround time is 3 to 5 business days. More complex recoveries (e.g., drives with mechanical damage or larger than 4TB) may take longer depending on the severity of the issue and parts availability. If you need your data back quickly, we offer two fast-track options: Expedited Service: Priority recovery during business hours. Expedited Plus Service: 24/7 emergency recovery, including weekends and holidays. You choose the timeline — we make it happen."
                }
              },
              {
                "@type": "Question",
                "name": "Are you able to recover data from physically damaged drives?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we specialize in recovering data from drives with physical damage, including those that are clicking, not spinning, or water-damaged."
                }
              },
              {
                "@type": "Question",
                "name": "Where is your data recovery lab located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our main data recovery lab is located in Glendale, California, and we proudly serve the entire Los Angeles area. Not located nearby? No problem — we offer free and fast nationwide shipping within the U.S. Whether you're in California or across the country, we make it easy to send in your device securely and get the recovery process started."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer emergency or after-hours data recovery?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, our Expedite Plus Service offers 24/7 emergency data recovery, even on weekends and holidays."
                }
              }
            ]
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.fivestardatarecovery.com/"
              }
            ]
          }
        ]
      })
    }
  ]
})

const services = [
  { img: '/service-hdd-new-nobg-400.webp', title: 'Hard Drive Recovery', desc: 'Mechanical failures, clicking drives, read errors, and firmware corruption. We recover from all major HDD brands.', href: '/data-recovery/hard-drive-recovery' },
  { img: '/service-ssd-new-nobg-400.webp', title: 'SSD Recovery', desc: 'Flash memory failures, controller issues, and NAND chip recovery. NVMe, SATA and mSATA SSDs.', href: '/data-recovery/ssd-data-recovery' },
  { img: '/raid-server-data-recovery-glendale-ca-nobg-400.webp', title: 'RAID / Server Recovery', desc: 'RAID 0, 1, 5, 6, 10, and NAS array reconstruction. Enterprise-grade recovery with minimal downtime.', href: '/data-recovery/raid-data-recovery' },
  { img: '/laptop-computer-data-recovery-glendale-ca-nobg-400.webp', title: 'Laptop Recovery', desc: 'Dropped laptops, liquid spills, and dead drives from all brands — Dell, HP, Lenovo, Asus, and more.', href: '/data-recovery/laptop-data-recovery' },
  { img: '/external-hard-drive-data-recovery-glendale-ca-nobg-400.webp', title: 'External HDD Recovery', desc: 'WD My Passport, Seagate Backup Plus, LaCie, and other portable drives recovered quickly.', href: '/data-recovery/external-hard-drive-data-recovery' },
  { img: '/mac-imac-macbook-data-recovery-glendale-ca-nobg-400.webp', title: 'Mac / iMac Recovery', desc: 'Apple Fusion Drive, T2/M1/M2 chip Macs, and Time Machine failures handled by certified technicians.', href: '/data-recovery/mac-data-recovery' },
  { img: '/service-iphone-nobg-400.webp', title: 'iPhone & Mobile', desc: 'iOS and Android data recovery from broken screens, water damage, and failed updates.', href: '/data-recovery/iphone-data-recovery', small: true },
  { img: '/service-sd-new-nobg-400.webp', title: 'SD Card Recovery', desc: 'Camera cards, drone footage, and dashcam recovery from all SD card formats.', href: '/data-recovery/sd-card-data-recovery' },
  { img: '/nas-network-attached-storage-data-recovery-glendale-ca-nobg-400.webp', title: 'NAS Device Recovery', desc: 'Synology, QNAP, Buffalo, and custom NAS enclosures with failed drives or corrupted volumes.', href: '/data-recovery/nas-data-recovery' },
  { img: '/deleted-file-recovery-service-glendale-ca-nobg-400.webp', title: 'Deleted File Recovery', desc: 'Accidentally deleted files, formatted drives, and corrupted partitions recovered safely.', href: '/data-recovery/deleted-files' },
  { img: '/clean-room-data-recovery-equipment-glendale-ca-nobg-400.webp', title: 'Clean Room Recovery', desc: 'ISO Class 5 cleanroom for physically damaged drives with platter, head, and motor failures.', href: '/data-recovery/clean-room-data-recovery' },
  { img: '/cfast-card-data-recovery-service-glendale-ca-nobg-400.webp', title: 'Video File Repair', desc: 'Corrupted, unplayable, or damaged video footage recovered from cameras, drones, and all formats.', href: '/data-recovery/video-file-repair' },
]

const whyUs = [
  { icon: '🚫💰', title: 'No Data = No Charge', desc: 'If we aren\'t able to recover your data — or you\'re not 100% satisfied with the results — you can decline the recovery and pay nothing.' },
  { icon: '📋', title: 'Flat Rate Pricing', desc: 'All of our prices are upfront and transparent. Flat rate pricing based on the exact issue with your drive. Never any bait and switch gimmicks.' },
  { icon: '👨‍💻', title: 'Top Notch Engineers', desc: 'All of our engineers have received the highest level of training — equipped to handle all types of logical and Clean Room recoveries.' },
  { icon: '⭐', title: 'Five Star Service', desc: 'We take pride in providing only the best customer service possible. Five Star is more than just a name for us — it\'s a way of doing business.' },
  { icon: '⚡', title: 'Expedited Service', desc: 'We offer both Expedited and Expedited Plus Data Recovery Services. Contact us today for more information on both options.' },
  { icon: '📞', title: 'Available 24/7', desc: 'Have a question at 1:00 am? Not a problem. Give us a call and one of our staff members will be happy to answer your questions.' },
  { icon: '🔒', title: 'Data Security', desc: 'Our state-of-the-art laboratory was built in 2014 with data security as the main priority. We take all steps necessary to ensure your data privacy.' },
  { icon: '🔔', title: 'Case Updates', desc: 'Our engineers will keep you posted with updates throughout the entire recovery process. Stay connected with your engineers every step of the way.' },
]

const steps = [
  { num: '1', title: 'Drop off or Mail in Your Drive', desc: 'You can visit our Glendale lab for a quick drop-off, or securely mail your device using our prepaid shipping label — whichever is more convenient for you.' },
  { num: '2', title: 'Receive a Free Diagnosis', desc: 'Our team will evaluate your device and provide a detailed diagnosis along with an initial quote — completely free of charge and with no obligation to proceed.' },
  { num: '3', title: 'Our Engineers Work on Recovering Your Data', desc: 'We carefully begin the recovery process using advanced tools and cleanroom procedures.' },
  { num: '4', title: 'Review & Approve the Recovered Data', desc: 'After recovery is complete, you\'ll receive a detailed file list to review so you can confirm everything important has been successfully recovered.' },
  { num: '5', title: 'Receive Your Recovered Data', desc: 'Once approved, we\'ll securely transfer your data to a new drive and return it to you via pickup or insured shipping — ready for immediate use.' },
]

const reviews = [
  {
    name: 'Daniel K.',
    role: 'Santa Monica, CA',
    stars: 5,
    text: 'We had a failed RAID 5 array with two bad drives, and our business data was at risk. Five Star Data Recovery worked through the night with their Expedited Plus Service and got us back up and running in 48 hours. True professionals.',
  },
  {
    name: 'Linda M.',
    role: 'Austin, TX',
    stars: 5,
    text: 'My laptop\'s SSD just disappeared from the system. No backups, nothing. I contacted several companies, and Five Star stood out. They explained the process clearly and recovered my most important work files. SSD recovery experts for sure.',
  },
  {
    name: 'Jason T.',
    role: 'New York, NY',
    stars: 5,
    text: 'I broke my USB flash drive during a presentation — completely bent the connector. I thought I had lost all my client data. The team at Five Star carefully extracted the chip and recovered all of it. I\'m beyond impressed.',
  },
  {
    name: 'Alex R.',
    role: 'Pasadena, CA',
    stars: 5,
    text: 'I thought my external hard drive was completely dead — it wasn\'t even spinning. Five Star Data Recovery not only diagnosed the problem fast but recovered all my photos and documents within a few days. Highly recommend them for hard drive recovery!',
  },
  {
    name: 'Megan S.',
    role: 'Los Angeles, CA',
    stars: 5,
    text: 'My iPhone had severe water damage and wouldn\'t turn on at all. I had years of family photos that I thought were gone forever. These guys are miracle workers — they recovered everything from my iPhone. Absolutely worth it!',
  },
]

const faqs = [
  { q: 'What types of devices do you recover data from?', a: 'We recover data from <strong>hard drives, SSDs, RAID arrays, iPhones, CFast Cards, USB flash drives, SD cards</strong> and more.' },
  { q: 'Do you offer free diagnostics?', a: 'Yes — we offer a <strong>free diagnosis</strong> as long as the customer agrees to the initial minimum quoted price.<br><br>We always start with a free consultation, during which we ask for details about the issue. Based on the information provided, we give an initial price quote. If the customer is comfortable with that price, we proceed with a full diagnostic at no charge.<br><br>If the issue turns out to be different and the price changes, the customer will have the option to accept the updated quote or walk away without paying anything.<br><br><strong>We\'re 100% transparent — no surprises and no obligations.</strong>' },
  { q: 'How much does data recovery cost?', a: 'All of our data recovery fees are <strong>flat-rate</strong>, based on the specific issue and type of device.<br><br>We\'ve made pricing simple and transparent — you can view our current rates on our <strong>pricing page</strong>.<br><br>If you\'re unsure what the issue is, just give us a call for a free phone consultation. Our team will guide you through the symptoms and help you understand what category your device might fall into.<br><br><strong>No hidden fees. No gimmicks. Just honest, upfront pricing from start to finish.</strong>' },
  { q: 'What if you can\'t recover my data?', a: 'We operate under a <strong>No Data — No Charge</strong> policy for most cases.<br><br>However, there are two exceptions where a non-refundable fee will apply, due to the higher complexity and labor involved:<br><br>&nbsp;&nbsp;&nbsp;&nbsp;📁 <strong>Deleted File Recoveries</strong> — These require advanced scanning and are not covered under the standard policy.<br>&nbsp;&nbsp;&nbsp;&nbsp;🔧 <strong>Drives with Opened Covers</strong> — If the top metal cover (where the platters are housed) has been removed before arrival, a cleanroom inspection fee will be charged regardless of outcome.<br><br>For all other cases, if we can\'t recover your data, <strong>you don\'t pay anything</strong>.' },
  { q: 'How long does the data recovery process take?', a: 'For most standard cases — such as drives up to 4TB with logical issues — the typical turnaround time is <strong>3 to 5 business days</strong>.<br><br>More complex recoveries (e.g., drives with mechanical damage or larger than 4TB) may take longer depending on the severity of the issue and parts availability.<br><br>If you need your data back quickly, we offer two fast-track options:<br><br>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Expedited Service:</strong> Priority recovery during business hours.<br>&nbsp;&nbsp;&nbsp;&nbsp;• <strong>Expedited Plus Service:</strong> 24/7 emergency recovery, including weekends and holidays.<br><br>You choose the timeline — we make it happen.' },
  { q: 'Are you able to recover data from physically damaged drives?', a: 'Yes, we specialize in recovering data from drives with <strong>physical damage</strong>, including those that are clicking, not spinning, or water-damaged.' },
  { q: 'Where is your data recovery lab located?', a: 'Our main data recovery lab is located in <strong>Glendale, California</strong>, and we proudly serve the entire Los Angeles area.<br><br>Not located nearby? No problem — we offer <strong>free and fast nationwide shipping</strong> within the U.S.<br><br>Whether you\'re in California or across the country, we make it easy to send in your device securely and get the recovery process started.' },
  { q: 'Do you offer emergency or after-hours data recovery?', a: 'Yes, our <strong>Expedited Plus Service</strong> offers 24/7 emergency data recovery, even on weekends and holidays.' },
]

const reviewIndex = ref(0)
const videoPlaying = ref(false)
const maxReviewIndex = reviews.length - 3
const nextReview = () => { reviewIndex.value = reviewIndex.value >= maxReviewIndex ? 0 : reviewIndex.value + 1 }
const prevReview = () => { reviewIndex.value = reviewIndex.value <= 0 ? maxReviewIndex : reviewIndex.value - 1 }

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
      subtitle="Get Your Data Back In No Time."
      description="At Five Star Data Recovery, we offer clear, flat-rate pricing for all of our professional data recovery services. You'll never have to guess how much it will cost to recover your important files. Whether you're dealing with a failed hard drive, damaged SSD, or a non-responsive flash drive, our team is here to help with transparent pricing and no hidden fees. Simply visit our pricing page or contact us for a free consultation to get started."
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

    <StatsBar />

    <!-- Services Grid -->
    <section class="services-section section-dark-gray">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Data Recovery Services</h2>
          <p class="section-subtitle">From physically damaged drives to complex RAID failures — our engineers deliver results when it matters most.</p>
        </div>
        <div class="services-grid">
          <NuxtLink v-for="s in services" :key="s.title" :to="s.href" class="service-card card">
            <div class="service-img-wrap">
              <img
                :src="s.img"
                :srcset="`${s.img.replace('-400.webp', '-260.webp')} 260w, ${s.img} 400w`"
                sizes="(max-width: 768px) 260px, 200px"
                :alt="s.title"
                class="service-img"
                :class="{ 'service-img-small': s.small }"
                width="200" height="200"
                loading="lazy"
              />
            </div>
            <h3 class="service-title">{{ s.title }}</h3>
            <p class="service-desc">{{ s.desc }}</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-section section-white">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Why Choose Five Star Data Recovery</h2>
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
    <section class="process-section section-dark-gray">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Data Recovery Process</h2>
          <p class="section-subtitle">Our data recovery process is built around security, transparency, and peace of mind. From start to finish, we keep you informed with clear updates at every stage.</p>
        </div>
        <div class="process-steps">
          <div v-for="step in steps" :key="step.num" class="process-step">
            <div class="step-label">STEP</div>
            <div class="step-num">{{ step.num }}</div>
            <div class="step-divider" />
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-desc">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>



    <!-- Reviews -->
    <section class="reviews-section section-bg-2">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Reviews from Satisfied Clients</h2>
          <p class="section-subtitle">Don't take our word for it. Here's what our clients have to say about their experience with Five Star Data Recovery.</p>
        </div>
        <div class="reviews-carousel">
          <button class="carousel-btn carousel-prev" @click="prevReview" aria-label="Previous">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="carousel-window">
            <div class="carousel-track" :style="{ transform: `translateX(calc(-${reviewIndex} * (33.333% + 20px)))` }">
              <div v-for="r in reviews" :key="r.name" class="review-card">
                <div class="review-stars">★★★★★</div>
                <p class="review-text">&ldquo;{{ r.text }}&rdquo;</p>
                <div class="review-author">
                  <div class="author-avatar">{{ r.name.charAt(0) }}</div>
                  <div>
                    <div class="author-name">{{ r.name }}</div>
                    <div class="author-role">{{ r.role }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-btn carousel-next" @click="nextReview" aria-label="Next">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
        </div>
        <div v-if="reviews.length > 3" class="carousel-dots">
          <button v-for="(_, i) in reviews" :key="i" class="carousel-dot" :class="{ active: i === reviewIndex }" @click="reviewIndex = i" :aria-label="`Go to review ${i + 1}`" />
        </div>
      </div>
    </section>

    <!-- Second CTA -->
    <!-- Video Section -->
    <section class="video-section section-dark-gray">
      <div class="container video-inner">
        <div class="video-copy">
          <h2 class="section-title">See Why Thousands Trust Us With Their Important Data</h2>
          <p class="video-desc">Data loss is stressful — but working with us doesn’t have to be. Watch how our team handles each recovery with care, professionalism, and precision. From diagnostics to delivery, we offer flat-rate pricing, honest communication, and proven results — all from our secure Glendale lab.</p>
        </div>
        <div class="video-embed">
          <!-- YouTube facade: load iframe only on click to prevent 435KB JS blocking LCP -->
          <div v-if="!videoPlaying" class="yt-facade" @click="videoPlaying = true" role="button" aria-label="Play video: Five Star Data Recovery" tabindex="0" @keydown.enter="videoPlaying = true" @keydown.space.prevent="videoPlaying = true">
            <img
              src="https://i.ytimg.com/vi/14ACFHJ24hg/hqdefault.jpg"
              alt="Five Star Data Recovery — Play Video"
              width="480" height="360"
              loading="lazy"
              class="yt-thumb" />
            <div class="yt-play-btn" aria-hidden="true">
              <svg width="68" height="48" viewBox="0 0 68 48"><path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z" fill="#f00"/><path d="M45 24 27 14v20" fill="#fff"/></svg>
            </div>
          </div>
          <iframe
            v-else
            src="https://www.youtube.com/embed/14ACFHJ24hg?start=60&autoplay=1"
            title="Five Star Data Recovery"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
    </section>

    <section class="cta-section">
      <div class="container">
      <div class="cta-two-col">
        <!-- Left: dark image side -->
        <div class="cta-left">
          <h2 class="cta-heading">Get a Free Quote within Minutes!</h2>
          <p class="cta-desc">Our expert engineers use advanced technology to recover your data quickly and securely. We specialize in complex cases with high success rates, offering tailored solutions for both businesses and individuals. Fill out the form to start a seamless recovery process.</p>
          <ul class="cta-bullets">
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5C842" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Quick and Secure Data Recovery</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5C842" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> Expert Engineers for All Devices</li>
            <li><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5C842" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> No Data, No Fee Guarantee</li>
          </ul>
          <p class="cta-desc">Contact our specialists today for a quick, hassle-free recovery. We’re here to guide you every step of the way and ensure your data is securely restored. Your peace of mind is our priority.</p>
        </div>
        <!-- Right: form -->
        <div class="cta-right">
          <form @submit.prevent class="cta-form">
            <div class="cta-form-row">
              <div class="cta-field">
                <label>NAME <span class="req">*</span></label>
                <input type="text" placeholder="Name / Required" />
              </div>
              <div class="cta-field">
                <label>EMAIL <span class="req">*</span></label>
                <input type="email" placeholder="Email Address / Required" />
              </div>
            </div>
            <div class="cta-form-row">
              <div class="cta-field">
                <label for="cta-device-type">SELECT YOUR DEVICE TYPE</label>
                <div class="cta-select-wrap">
                  <select id="cta-device-type"><option value="">Device Type</option><option>Hard Drive</option><option>SSD</option><option>RAID/Server</option><option>Laptop</option><option>External HDD</option><option>Mac/iMac</option><option>iPhone/Mobile</option><option>USB Flash Drive</option><option>SD Card</option><option>Other</option></select>
                  <svg class="sel-arrow" width="12" height="8" viewBox="0 0 12 8"><path d="M1 1l5 5 5-5" stroke="#666" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>
                </div>
              </div>
              <div class="cta-field">
                <label>PHONE</label>
                <input type="tel" placeholder="Phone Number / Required" />
              </div>
            </div>
            <div class="cta-form-row">
              <div class="cta-field">
                <label for="cta-device-issue">SELECT ISSUE WITH DEVICE</label>
                <div class="cta-select-wrap">
                  <select id="cta-device-issue"><option value="">Select Issue with Device</option><option>Not Detected</option><option>Clicking/Grinding Noise</option><option>Water Damage</option><option>Corrupted Files</option><option>Accidental Deletion</option><option>Physical Damage</option><option>Other</option></select>
                  <svg class="sel-arrow" width="12" height="8" viewBox="0 0 12 8"><path d="M1 1l5 5 5-5" stroke="#666" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>
                </div>
              </div>
              <div class="cta-field">
                <label>Preferred Contact Method</label>
                <div class="cta-radio-group">
                  <label><input type="radio" name="ctaContact" value="call" checked /> CALL</label>
                  <label><input type="radio" name="ctaContact" value="email" /> EMAIL</label>
                  <label><input type="radio" name="ctaContact" value="text" /> TEXT</label>
                </div>
              </div>
            </div>
            <div class="cta-form-row">
              <div class="cta-field" style="grid-column: 1 / -1">
                <label for="cta-response-time">PREFERRED RESPONSE TIME</label>
                <div class="cta-select-wrap">
                  <select id="cta-response-time">
                    <option value="">Select Preferred Time</option>
                    <option>Immediately (24/7)</option>
                    <option>During Business Hours</option>
                    <option>Morning (8am – 12pm)</option>
                    <option>Afternoon (12pm – 5pm)</option>
                    <option>Evening (5pm – 8pm)</option>
                  </select>
                  <svg class="sel-arrow" width="12" height="8" viewBox="0 0 12 8"><path d="M1 1l5 5 5-5" stroke="#666" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>
                </div>
              </div>
            </div>
            <button type="submit" class="cta-submit">Get a Quote!</button>
          </form>
        </div>
      </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="faq-section section-dark-gray">
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
            <div v-if="openFaq === i" class="faq-answer" v-html="faq.a" />
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
.hero-stats-strip {
  background: #111111;
  background-image: radial-gradient(circle, rgba(245,200,66,0.07) 1px, transparent 1px);
  background-size: 28px 28px;
  border-top: 3px solid var(--gold);
  border-bottom: 3px solid var(--gold);
  padding: 44px 0;
}
.hero-stats-inner {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 16px;
  flex-wrap: wrap;
}
.hero-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.hero-stat-num {
  font-family: var(--font-heading);
  font-size: 48px;
  font-weight: 900;
  color: var(--gold);
  line-height: 1;
}
.hero-stat-label {
  font-size: 15px;
  font-weight: 600;
  color: #aab0be;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.hero-stat-divider {
  width: 1px;
  height: 60px;
  background: rgba(255,255,255,0.12);
}

/* Services */
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.service-img-wrap {
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  background: transparent;
}
.service-img {
  width: auto;
  height: 100%;
  max-width: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
}
.service-card:hover .service-img { transform: scale(1.05); }
.service-img-small { height: 75% !important; }
.service-title {
  font-family: var(--font-heading);
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--white);
}
.service-desc { font-size: 14px; color: var(--muted); line-height: 1.6; margin-bottom: 14px; }
.service-card { display: block; text-decoration: none; cursor: pointer; }
.service-card:hover { border-color: var(--gold); transform: translateY(-3px); }

@media (max-width: 1024px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .services-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .services-grid { grid-template-columns: 1fr; } }

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
.process-steps {
  display: flex;
  gap: 16px;
  align-items: stretch;
}
.process-step {
  flex: 1;
  background: #1e2130;
  border: 1px solid rgba(245,200,66,0.15);
  border-radius: 12px;
  padding: 28px 20px 24px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}
.process-step:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 36px rgba(0,0,0,0.4);
}
.step-label {
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.18em;
  color: var(--gold);
  opacity: 0.7;
  margin-bottom: 2px;
  text-transform: uppercase;
}
.step-num {
  font-family: var(--font-heading);
  font-size: 52px;
  font-weight: 900;
  color: var(--gold);
  line-height: 1;
  margin-bottom: 14px;
}
.step-divider {
  width: 36px;
  height: 3px;
  background: var(--gold);
  border-radius: 2px;
  margin-bottom: 14px;
}
.step-title {
  font-family: var(--font-heading);
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
  line-height: 1.4;
}
.step-desc {
  font-size: 13px;
  color: #9ba3b8;
  line-height: 1.6;
  flex: 1;
}
@media (max-width: 900px) {
  .process-steps { flex-wrap: wrap; }
  .process-step { min-width: calc(50% - 8px); flex: none; }
}
@media (max-width: 540px) {
  .process-steps { gap: 12px; }
  .process-step { min-width: 0; width: 100%; flex: 0 0 100%; box-sizing: border-box; }
}

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
@media (max-width: 640px) {
  .stat-divider { display: none; }
  .stats-inner { gap: 20px; }
  .stat-num { font-size: 36px; }
}

/* Reviews — contain overflow at section level */
.reviews-section { overflow: hidden; }

/* Reviews carousel */
.reviews-carousel {
  display: flex;
  align-items: center;
  gap: 16px;
}
.carousel-window {
  flex: 1;
  overflow: hidden;
}
.carousel-track {
  display: flex;
  gap: 20px;
  transition: transform 0.4s ease;
  /* each card = (100% - 2 gaps) / 3 = calc(33.333% - 14px) */
}
.review-card {
  flex: 0 0 calc(33.333% - 14px);
  min-width: 0;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 24px rgba(0,0,0,0.09);
  border-radius: 14px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 260px;
}
/* #F5C842 gold on white = 1.55:1 fails. #8a6300 dark amber = 4.91:1 passes WCAG AA */
.review-stars { color: #8a6300; font-size: 22px; letter-spacing: 3px; margin-bottom: 16px; }
.review-text {
  font-size: 16px;
  color: #2d3a4a;
  font-style: italic;
  line-height: 1.75;
  flex: 1;
  margin-bottom: 24px;
}
.review-author {
  display: flex;
  align-items: center;
  gap: 14px;
  border-top: 1px solid #e8ecf4;
  padding-top: 16px;
}
.author-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #e8ecf4;
  color: #4a5568;
  font-weight: 800;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.author-name { font-weight: 700; font-size: 15px; color: #0d1520; }
.author-role { font-size: 13px; color: #7a5900; font-weight: 600; }
.carousel-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid #e2e8f0;
  background: #ffffff;
  color: #2d3a4a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.carousel-btn:hover { border-color: #F5C842; color: #F5C842; }
.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
}
.carousel-dot {
  /* 44x44 actual button size for WCAG 2.5.5 touch target */
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
/* Visual dot rendered via ::before */
.carousel-dot::before {
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #d0d7e4;
  transition: background 0.2s, width 0.2s, border-radius 0.2s;
  display: block;
  flex-shrink: 0;
}
.carousel-dot.active::before {
  background: #F5C842;
  width: 24px;
  border-radius: 4px;
}
@media (max-width: 640px) {
  /* Switch to native scroll-snap on mobile — bypasses JS transform */
  .reviews-carousel { flex-direction: column; gap: 0; }
  .carousel-btn { display: none; }
  .carousel-window {
    width: 100%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .carousel-window::-webkit-scrollbar { display: none; }
  .carousel-track {
    transform: none !important;
    gap: 12px;
    padding: 0 4px 4px;
  }
  .review-card {
    flex: 0 0 calc(100vw - 64px);
    max-width: calc(100vw - 64px);
    scroll-snap-align: start;
    padding: 20px 16px;
    min-height: auto;
  }
  .review-text { font-size: 14px; }
  .carousel-dots { margin-top: 16px; }
}

/* Video section */
.video-section { padding: 70px 0; }
.video-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}
.video-copy { display: flex; flex-direction: column; gap: 20px; }
.video-copy .section-title { font-size: 32px; line-height: 1.25; }
.video-desc { font-size: 15px; color: #9ba3b8; line-height: 1.8; }
.video-embed {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 16/9;
  box-shadow: 0 12px 48px rgba(0,0,0,0.15);
}
.video-embed iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
/* YouTube lazy-load facade */
.yt-facade {
  position: absolute;
  inset: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
}
.yt-thumb {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.85;
}
.yt-play-btn {
  position: relative;
  z-index: 1;
  transition: transform 0.15s;
}
.yt-facade:hover .yt-play-btn {
  transform: scale(1.1);
}
@media (max-width: 900px) {
  .video-inner { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .video-section { padding: 48px 0; }
  .video-copy .section-title { font-size: 24px; }
}

/* CTA section */
.cta-section { padding: 60px 0; background: #f4f6fa; }
.cta-two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 420px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 48px rgba(0,0,0,0.13);
}
.cta-left {
  background: linear-gradient(rgba(10,12,20,0.82), rgba(10,12,20,0.82)),
    url('/data-recovery-clean-room-technician-glendale-ca.jpg') center/cover no-repeat;
  padding: 48px 44px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}
.cta-heading {
  font-family: var(--font-heading);
  font-size: 30px;
  font-weight: 900;
  color: var(--gold);
  line-height: 1.2;
}
.cta-desc {
  font-size: 15px;
  color: #c8d0e0;
  line-height: 1.75;
}
.cta-bullets {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.cta-bullets li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
}
.cta-right {
  background: #ffffff;
  padding: 48px 44px;
  display: flex;
  align-items: center;
}
.cta-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.cta-form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}
.cta-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.cta-field label {
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #555;
}
.req { color: #e53935; }
.cta-field input {
  height: 50px;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0 16px;
  font-size: 15px;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  font-family: var(--font-body);
  transition: border-color 0.2s;
}
.cta-field input:focus { outline: none; border-color: var(--gold); }
.cta-select-wrap { position: relative; }
.cta-select-wrap select {
  width: 100%;
  height: 50px;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0 36px 0 16px;
  font-size: 15px;
  color: #333;
  background: #fff;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  font-family: var(--font-body);
  box-sizing: border-box;
  transition: border-color 0.2s;
}
.cta-select-wrap select:focus { outline: none; border-color: var(--gold); }
.sel-arrow { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); pointer-events: none; }
.cta-radio-group {
  display: flex;
  align-items: center;
  gap: 20px;
  height: 50px;
}
.cta-radio-group label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  color: #444 !important;
  cursor: pointer;
}
.cta-radio-group input[type="radio"] { accent-color: var(--gold); width: 16px; height: 16px; }
.cta-submit {
  width: 100%;
  height: 58px;
  background: var(--gold);
  color: #1a1a1a;
  font-weight: 800;
  font-size: 18px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
  font-family: var(--font-body);
  letter-spacing: 0.02em;
  margin-top: 4px;
}
.cta-submit:hover { background: var(--gold-dark); transform: translateY(-1px); }
@media (max-width: 900px) {
  .cta-two-col { grid-template-columns: 1fr; }
  .cta-left { padding: 40px 28px; }
  .cta-right { padding: 36px 28px; }
}
@media (max-width: 640px) {
  .cta-two-col { border-radius: 12px; }
  .cta-left { padding: 32px 20px; }
  .cta-right { padding: 28px 20px; }
  .cta-heading { font-size: 24px; }
  .cta-form-row { grid-template-columns: 1fr; }
}

/* FAQ */
.faq-list { width: 100%; display: flex; flex-direction: column; gap: 10px; }
.faq-item {
  background: #1e2130;
  border: 1px solid #363a4a;
  border-radius: 10px;
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.faq-item.open {
  border-color: var(--gold);
  box-shadow: 0 4px 16px rgba(245,200,66,0.1);
}
.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: none;
  border: none;
  color: #e8ecf4;
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
  font-size: 15px;
  color: #9ba3b8;
  line-height: 1.75;
  border-top: 1px solid #2d3144;
  padding: 16px 24px 22px;
}
.faq-answer strong { color: #ffffff; }
</style>
