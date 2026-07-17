<script setup lang="ts">
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
            "image": "https://www.fivestardatarecovery.com/logo.webp",
            "telephone": "+1-818-272-8866",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1731 S Brand Blvd.",
              "addressLocality": "Glendale",
              "addressRegion": "CA",
              "postalCode": "91204",
              "addressCountry": "US"
            },
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "url": "https://www.fivestardatarecovery.com/",
            "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "498" },
            "review": [
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "David R." },
                "datePublished": "2024-11-20",
                "reviewBody": "My CFast card suddenly became unreadable right in the middle of a film shoot. I brought it in for evaluation and was relieved when they said recovery was possible. Within days, I had all my RAW footage back. Quick, professional, and highly recommended for anyone dealing with CFast card failure.",
                "name": "CFast Recovery Success",
                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5", "worstRating": "1" }
              }
            ],
            "priceRange": "$300 - $950"
          },
          {
            "@type": "Service",
            "name": "CFast Card Data Recovery Services",
            "url": "https://www.fivestardatarecovery.com/data-recovery/cfast-card-data-recovery/",
            "areaServed": [{ "@type": "Country", "name": "United States" }],
            "description": "Professional CFast card data recovery for production professionals. Recovers footage from ARRI, RED, Canon, Blackmagic cameras. Video file repair included. Flat-rate pricing, No Data No Charge. Serving Glendale, Los Angeles, and nationwide."
          },
          {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.fivestardatarecovery.com/" },
              { "@type": "ListItem", "position": 2, "name": "Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/" },
              { "@type": "ListItem", "position": 3, "name": "CFast Card Data Recovery", "item": "https://www.fivestardatarecovery.com/data-recovery/cfast-card-data-recovery/" }
            ]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "Can you recover video files from a corrupted CFast card?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We specialize in recovering video files from corrupted CFast cards used in professional cameras like Blackmagic, Canon, and ARRI. Whether your CFast card won't mount, shows errors, or displays as unreadable, our engineers have the tools and expertise to safely recover your footage." } },
              { "@type": "Question", "name": "I tried using data recovery software and now my recovered files show 0MB or won't play. Can you still help?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. This is a common issue after DIY recovery attempts. If your recovered video files show 0MB, won't open, or appear corrupted, we can often perform professional video file repair. Even if the file structures were damaged by software like First Aid or CHKDSK, we'll do our best to rebuild and repair the files for playback." } },
              { "@type": "Question", "name": "My CFast card is showing missing or empty folders\u2014can you recover the data?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. If your CFast card shows missing folders, empty directories, or incomplete file lists, it could be due to logical corruption or file system errors. We can perform a full deep scan to locate and recover your missing video files and folders. Depending on the type of video files you have, if the recovered files are damaged or won't play, we may also need to perform professional video file repair to restore them to a usable state." } },
              { "@type": "Question", "name": "Can you repair damaged video files from a CFast card?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer professional video file repair services for footage that appears corrupt, incomplete, or won't play after recovery. This includes working with a wide range of professional and complex video formats commonly used with CFast cards, such as ProRes, CinemaDNG, Blackmagic RAW (BRAW), Canon XF-AVC, REDCODE RAW (R3D), MXF, MOV, and MP4. Our engineers use specialized tools to rebuild damaged headers, repair broken file structures, and restore playability. We strongly recommend avoiding further DIY recovery attempts, as they can make repair more difficult or even impossible." } },
              { "@type": "Question", "name": "What should I do immediately after noticing an issue with my CFast card?", "acceptedAnswer": { "@type": "Answer", "text": "Stop using the card right away. Remove it from your camera or card reader and avoid running any disk repair tools like First Aid or CHKDSK. Continued use or DIY repair attempts can make professional recovery much more difficult." } },
              { "@type": "Question", "name": "Can you recover data from physically damaged CFast cards?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. If your CFast card has physical issues like broken connectors, damaged pins, or water exposure, we can often repair the hardware enough to access the internal memory and recover your data." } },
              { "@type": "Question", "name": "How long does CFast data recovery take?", "acceptedAnswer": { "@type": "Answer", "text": "Standard CFast data recovery usually takes 2\u20135 business days. For urgent projects or time-sensitive shoots, we offer Expedited and Expedited Plus service options for faster turnaround. If the card contains damaged or corrupted video files that require video file repair, the turnaround time may be significantly longer. Completion depends on the number of videos, file sizes, level of corruption, and video codec (e.g., ProRes, MXF, or RAW). In such cases, we'll provide a time estimate after evaluating the files." } },
              { "@type": "Question", "name": "What file types can you recover from a CFast card?", "acceptedAnswer": { "@type": "Answer", "text": "We recover a wide range of professional video and media file formats stored on CFast cards. This includes ProRes, CinemaDNG, Blackmagic RAW (BRAW), Canon XF-AVC, REDCODE RAW (R3D), MXF, MOV, MP4, AVI, DNxHD, DNxHR, and XAVC formats. In addition to video files, we also recover RAW image files, JPEGs, WAV audio, project files, and other production data commonly saved on CFast media. If your file type isn't listed, contact us\u2014we likely support it too." } },
              { "@type": "Question", "name": "What CFast card brands can you recover data from?", "acceptedAnswer": { "@type": "Answer", "text": "We recover data from all major CFast card brands, including SanDisk, Lexar, Delkin Devices, Angelbird, ProGrade Digital, Sony, Transcend, ADATA, Hoodman, and Wise Advanced. Whether you're using CFast 2.0 cards for professional video production or earlier generation CFast models, our lab is equipped to handle recoveries from all manufacturers. Even if your CFast card brand isn't listed here, we likely support it as well\u2014just contact us for a free evaluation." } },
              { "@type": "Question", "name": "How much does CFast card data recovery cost?", "acceptedAnswer": { "@type": "Answer", "text": "At Five Star Data Recovery, CFast card recovery is priced using our flat-rate structure with no hidden fees: $300 for logical recovery (e.g., file system corruption, card not mounting) for cards up to 2TB. $500 for deleted file recovery, which includes a $200 non-refundable upfront fee with the balance due only if recovery is successful. $950 for component-level recovery involving physical damage, failed controllers, or chip-off procedures. In some cases, additional charges may apply if recovered video files are damaged or unplayable and require our advanced video file repair services. We'll evaluate your card and provide a clear estimate before starting any work. All evaluations are free, and every recovery is handled in-house by our experienced engineers." } }
            ]
          }
        ]
      })
    }
  ]
})

useSeoMeta({
  title: 'CFast Card Data Recovery - Five Star Data Recovery',
  ogTitle: 'CFast Card Data Recovery - Five Star Data Recovery',
  description: 'Five Star Data Recovery is the leading CFast Data Recovery Company. We offer fast and secure services to get back your valuable data.',
  ogDescription: 'Five Star Data Recovery is the leading CFast Data Recovery Company. We offer fast and secure services to get back your valuable data.',
  ogImage: 'https://www.fivestardatarecovery.com/cfast-data-recovery-hero.webp',
})

const trustBadges = [
  { icon: 'clock', text: 'Available 24/7/365' },
  { icon: 'check', text: 'No Data = No Charge' },
  { icon: 'shield', text: '10+ Years in Business' },
  { icon: 'star', text: 'Free Nationwide Shipping' },
]

const reviews = [
  {
    text: "My CFast card suddenly became unreadable right in the middle of a film shoot. I brought it in for evaluation and was relieved when they said recovery was possible. Within days, I had all my RAW footage back. Quick, professional, and highly recommended for anyone dealing with CFast card failure.",
    name: 'David R.',
    location: 'Glendale, CA',
  },
  {
    text: "My CFast card was showing errors and wouldn&#39;t mount on any device. The staff was friendly and explained how CFast recovery works, especially with large video files. They successfully recovered all my footage without any loss. I&#39;ll definitely use them again if I ever have another issue.",
    name: 'Angela T.',
    location: 'Burbank, CA',
  },
  {
    text: "I made the mistake of running First Aid on my CFast card after it started acting up, and all my video files completely disappeared. I thought I had made things worse, but Vahan was still able to recover and repair all my missing footage. They explained why using First Aid can actually damage file structures on failing media.",
    name: 'David N.',
    location: 'New York, NY',
  },
]

const faqs = [
  {
    q: 'Can you recover video files from a corrupted CFast card?',
    a: 'Yes. We specialize in recovering video files from corrupted CFast cards used in professional cameras like <strong>Blackmagic, Canon, and ARRI</strong>. Whether your CFast card won&#39;t mount, shows errors, or displays as unreadable, our engineers have the tools and expertise to safely recover your footage.',
  },
  {
    q: 'I tried using data recovery software and now my recovered files show 0MB or won&#39;t play. Can you still help?',
    a: 'Yes. This is a common issue after DIY recovery attempts. If your recovered video files show 0MB, won&#39;t open, or appear corrupted, we can often perform <strong>professional video file repair</strong>. Even if the file structures were damaged by software like First Aid or CHKDSK, we&#39;ll do our best to rebuild and repair the files for playback.',
  },
  {
    q: 'My CFast card is showing missing or empty folders\u2014can you recover the data?',
    a: 'Absolutely. If your CFast card shows missing folders, empty directories, or incomplete file lists, it could be due to logical corruption or file system errors. We can perform a full deep scan to locate and recover your missing video files and folders. Depending on the type of video files you have, if the recovered files are damaged or won&#39;t play, we may also need to perform <strong>professional video file repair</strong> to restore them to a usable state.',
  },
  {
    q: 'Can you repair damaged video files from a CFast card?',
    a: 'Yes. We offer professional video file repair services for footage that appears corrupt, incomplete, or won&#39;t play after recovery. This includes working with a wide range of professional and complex video formats commonly used with CFast cards, such as <strong>ProRes, CinemaDNG, Blackmagic RAW (BRAW), Canon XF-AVC, REDCODE RAW (R3D), MXF, MOV, and MP4</strong>. Our engineers use specialized tools to rebuild damaged headers, repair broken file structures, and restore playability. We strongly recommend avoiding further DIY recovery attempts, as they can make repair more difficult or even impossible.',
  },
  {
    q: 'What should I do immediately after noticing an issue with my CFast card?',
    a: 'Stop using the card right away. Remove it from your camera or card reader and <strong>avoid running any disk repair tools</strong> like First Aid or CHKDSK. Continued use or DIY repair attempts can make professional recovery much more difficult.',
  },
  {
    q: 'Can you recover data from physically damaged CFast cards?',
    a: 'Yes. If your CFast card has physical issues like broken connectors, damaged pins, or water exposure, we can often repair the hardware enough to access the internal memory and recover your data.',
  },
  {
    q: 'How long does CFast data recovery take?',
    a: 'Standard CFast data recovery usually takes <strong>2\u20135 business days</strong>. For urgent projects or time-sensitive shoots, we offer <strong>Expedited and Expedited Plus</strong> service options for faster turnaround. If the card contains damaged or corrupted video files that require video file repair, the turnaround time may be significantly longer. Completion depends on the number of videos, file sizes, level of corruption, and video codec (e.g., ProRes, MXF, or RAW). In such cases, we&#39;ll provide a time estimate after evaluating the files.',
  },
  {
    q: 'What file types can you recover from a CFast card?',
    a: 'We recover a wide range of professional video and media file formats stored on CFast cards. This includes <strong>ProRes, CinemaDNG, Blackmagic RAW (BRAW), Canon XF-AVC, REDCODE RAW (R3D), MXF, MOV, MP4, AVI, DNxHD, DNxHR, and XAVC</strong> formats. In addition to video files, we also recover <strong>RAW image files, JPEGs, WAV audio, project files</strong>, and other production data commonly saved on CFast media. If your file type isn&#39;t listed, contact us\u2014we likely support it too.',
  },
  {
    q: 'What CFast card brands can you recover data from?',
    a: 'We recover data from all major CFast card brands, including <strong>SanDisk, Lexar, Delkin Devices, Angelbird, ProGrade Digital, Sony, Transcend, ADATA, Hoodman, and Wise Advanced</strong>. Whether you&#39;re using CFast 2.0 cards for professional video production or earlier generation CFast models, our lab is equipped to handle recoveries from all manufacturers. Even if your CFast card brand isn&#39;t listed here, we likely support it as well\u2014just contact us for a free evaluation.',
  },
  {
    q: 'How much does CFast Data Recovery Cost?',
    a: 'At Five Star Data Recovery, CFast card recovery is priced using our flat-rate structure with no hidden fees:<br><br><strong>$300.00</strong> \u2013 For logical recovery (e.g., file system corruption, card not mounting), for cards up to 2TB<br><strong>$500.00</strong> \u2013 For deleted file recovery. This includes a <strong>$200.00 non-refundable upfront fee</strong>, with the balance due only if recovery is successful<br><strong>$950.00</strong> \u2013 For component-level recovery involving physical damage, failed controllers, or chip-off procedures<br><br>In some cases, additional charges may apply if recovered video files are damaged or unplayable and require our advanced video file repair services. We&#39;ll evaluate your card and provide a clear estimate before starting any work. All evaluations are free, and every recovery is handled in-house by our experienced engineers.',
  },
]

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }
</script>

<template>
  <div class="page-content">


    <HeroSection
      title="CFast Data Recovery"
      subtitle="Get Your Data Back In No Time."
      description="Video, film, and photography professionals trust CFast cards for their speed and reliability. But even the most advanced storage can fail\u2014and when it does, every second counts.<br><br>At Five Star Data Recovery, we provide quick and safe CFast data recovery. We help production companies, content creators, and industry professionals get their files back quickly. If your CFast card cannot be read, is accidentally formatted, or shows errors, our engineers can help. They are skilled at recovering lost data and fixing damaged video files. We work with all kinds of CFast cards, including major brands and media used in ARRI, RED, Canon, and Blackmagic cameras."
      bgImage="/cfast-data-recovery-hero.webp"
      :trustBadges="trustBadges"
    />

    <StatsBar />

    <!-- SECTION 1 — Common Issues -->
    <section class="s-white">
      <div class="container">
        <div class="two-col-layout">
          <div>
            <h2 class="s-heading">Common Issues with CFast Cards</h2>
            <p class="s-body">While CFast cards are built for high performance, they&#39;re not immune to failure. Here are some of the most common issues we see:</p>
            <ul class="content-list">
              <li>Accidental file deletion</li>
              <li>Formatted or reformatted CFast cards</li>
              <li>Corrupted file systems</li>
              <li>Card not recognized by camera or computer</li>
              <li>CFast card showing 0 bytes or RAW file system</li>
              <li>Physical damage or bent pins</li>
              <li>Video files that won&#39;t open or are partially missing</li>
            </ul>
            <p class="s-body">If you have any problems with your CFast card, stop using it right away. Please contact us for help. The earlier we get involved, the better your chances for achieving a full recovery.</p>
          </div>
          <div class="section-img-wrap">
            <img src="/cfast-card-recovery-professional-640.webp" alt="Professional CFast cards for cinema cameras — data recovery" class="section-img" width="640" height="427" loading="lazy"
               srcset="/cfast-card-recovery-professional-640.webp 640w, /cfast-card-recovery-professional-800.webp 800w, /cfast-card-recovery-professional-1280.webp 1280w"
               sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 1024px) 50vw, 640px" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2 — Types We Recover -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Types of CFast Cards We Recover From</h2>
        <p class="s-body">We offer professional CFast card data recovery for nearly all formats and brands used in the industry, including:</p>
        <ul class="content-list">
          <li>CFast 2.0 cards (most commonly used in modern cinema cameras)</li>
          <li>Lexar CFast cards</li>
          <li>SanDisk Extreme Pro CFast cards</li>
          <li>Angelbird AV Pro CFast cards</li>
          <li>ProGrade Digital CFast 2.0</li>
          <li>Sony, Delkin, Wise Advanced, and other professional-grade cards</li>
        </ul>
        <p class="s-body">No matter if you use a Canon C300, ARRI Alexa, Blackmagic URSA, or RED Komodo, we know your workflow. We have also recovered data from the cards you depend on.</p>
      </div>
    </section>

    <!-- SECTION 3 — What Not to Do -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">What Not To Do If You Accidentally Format or Delete Files</h2>
        <p class="s-body">Mistakes happen, but what you do next makes all the difference. If you accidentally format your CFast card or delete important footage:</p>
        <ul class="content-list">
          <li>Do not record new data onto the card.</li>
          <li>Do not run multiple types of recovery software.</li>
          <li>Do not attempt to repair the file system using system utilities.</li>
        </ul>
        <p class="s-body">If you have already tried recovery software and the files came back corrupted or won&#39;t open, please stop. We specialize in repairing damaged video files\u2014especially high-bitrate files like ProRes, RAW, MXF, and BRAW. Trying more DIY tools may make things worse or overwrite remaining recoverable content.</p>
      </div>
    </section>

    <!-- SECTION 4 — <NuxtLink to="/expedited-service">Expedited</NuxtLink> Services -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Expedited Services for Rush Projects</h2>
        <p class="s-body">We understand the urgency of production deadlines. That&#39;s why we offer two levels of expedited CFast data recovery:</p>
        <ul class="content-list">
          <li><strong>Expedited Service</strong> \u2013 For $200 per card, we will prioritize your recovery case. We will process it during business hours.</li>
          <li><strong>Expedited Plus Service</strong> \u2013 For $500 per card, our team works on your case around the clock. We remain available 24/7, including nights, weekends, and holidays, until we complete the job.</li>
        </ul>
        <p class="s-body">Both expedited services are prepaid and non-refundable, regardless of the recovery outcome. They&#39;re ideal for post-production houses, DITs, and creatives who need fast turnaround on critical footage.</p>
        <p class="s-body"><strong>Note:</strong> Expedited Fees are in addition to the standard data recovery fees.</p>
      </div>
    </section>

    <!-- SECTION 5 — Trusted by Creative Industry -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Trusted by the Creative Industry</h2>
        <p class="s-body">We&#39;ve recovered data for video editors, producers, directors, and digital imaging technicians across Hollywood and beyond. Our clients include production studios, ad agencies, wedding videographers, and independent filmmakers. We understand that losing raw footage or production files can delay deadlines and cost thousands.</p>
        <p class="s-body">That&#39;s why our data recovery services are designed with media professionals in mind \u2014 fast, secure, and confidential. Whether it&#39;s a failed CFast card, damaged SSD, or corrupted <NuxtLink to="/data-recovery/external-hard-drive-data-recovery">external</NuxtLink> drive, we provide reliable recovery solutions and deep experience with pro camera formats like ARRI, RED, and Blackmagic. When CFast card data is critical and irreplaceable, professionals trust Five Star Data Recovery. With our advanced tools we have the experience to handle sensitive video formats.</p>
      </div>
    </section>

    <!-- SECTION 6 — Get Help Now -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Get Help with Your CFast Card Now</h2>
        <p class="s-body">Whether you&#39;re dealing with a corrupt CFast card, accidental deletion, or damaged media files, we&#39;re here to help. We offer free diagnostics, transparent pricing, and fast results. Our team has extensive experience recovering data from high-end cameras and production media, making us the trusted choice for professionals.</p>
        <p class="s-body">Don&#39;t risk your files with generic software tools. Trust the experts in CFast card data recovery who understand the urgency and sensitivity of your work. Contact Five Star Data Recovery today and let us bring your media back to life. We&#39;re available 24/7 by phone or email to answer any urgent questions or concerns \u2014 day or night, we&#39;re here when you need us most.</p>
      </div>
    </section>

    <!-- SECTION 7 — Real-World Success Story -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Real-World Success Story: Repaired Video Files After Software Recovery Failure</h2>
        <p class="s-body">One of our clients\u2014a documentary filmmaker\u2014accidentally formatted a CFast card containing critical footage shot over a two-day production. In a panic, they used off-the-shelf data recovery software and felt relieved when it seemed to recover all the files. However, after they attempted to open the recovered files, they realized that all the video content was damaged. Most files were unreadable or showed visual glitches and corrupted frames.</p>
        <p class="s-body">Thankfully, they contacted us and provided the original CFast card, untouched since formatting. Because the original card had not been altered, we were able to conduct a clean forensic recovery and isolate the raw video data. Our engineers used proprietary repair tools to reconstruct the headers, timecodes, and broken segments. We fixed all the damaged clips and returned a fully usable project to the client. This saved thousands of dollars on reshoots and kept the project on schedule.</p>
        <p class="s-body">This case highlights why you should never write new data to a formatted CFast card and always consult experts if the files appear corrupted.</p>
      </div>
    </section>

    <!-- SECTION 8 — Why DIY Tools Fail -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">Why DIY Data Recovery Tools Often Fail with CFast Cards</h2>
        <p class="s-body">It may be tempting to use free or cheap data recovery software. However, these tools are usually made for general storage devices. This includes <NuxtLink to="/data-recovery/usb-data-recovery">USB</NuxtLink> flash drives and basic SD cards. They lack the technical sophistication needed to handle professional-grade CFast card data\u2014especially when it involves large video files or non-standard file systems used in high-end cameras.</p>
        <p class="s-body">Many software programs do not handle fragmented file structures well. They also often misread special video formats. These formats include CinemaDNG, REDCODE RAW, and Canon XF-AVC. As a result, even if the software &ldquo;recovers&rdquo; the files, the output is often incomplete, glitchy, or completely unreadable.</p>
        <p class="s-body">We&#39;ve seen cases where clients used DIY tools that rewrote portions of the card&#39;s file table\u2014making a proper recovery far more difficult. Others created cloned images incorrectly, omitting key metadata needed to rebuild the footage. Sadly, in some cases, this good-intentioned testing has permanently erased important parts of the CFast card data.</p>
        <p class="s-body">This is why we always advise against using general-purpose tools if your project involves professional video content. A single wrong step could mean losing hours\u2014or days\u2014of irreplaceable footage.</p>
      </div>
    </section>

    <!-- SECTION 9 — Recovery Process -->
    <section class="s-white">
      <div class="container">
        <div class="two-col-layout">
          <div>
            <h2 class="s-heading">Our CFast Card Data Recovery Process</h2>
            <p class="s-body">We follow a structured and proven process for recovering lost or damaged CFast card data. This ensures the safest and most effective path to restoring your files:</p>
            <div class="process-steps">
              <div class="process-step">
                <div class="step-num">1</div>
                <div>
                  <h3 class="step-title">Clone the Original Drive</h3>
                  <p class="step-body">Before we do anything, we create a sector-by-sector clone of the original CFast card. This protects the original media from further damage or overwrites.</p>
                </div>
              </div>
              <div class="process-step">
                <div class="step-num">2</div>
                <div>
                  <h3 class="step-title">Scan for Lost Data</h3>
                  <p class="step-body">We use advanced data recovery tools to scan the cloned image for deleted files, lost partitions, and corrupted data structures.</p>
                </div>
              </div>
              <div class="process-step">
                <div class="step-num">3</div>
                <div>
                  <h3 class="step-title">Extract and Test Files</h3>
                  <p class="step-body">Recovered files are extracted and checked for integrity. If the files open and perform correctly, the recovery is considered complete.</p>
                </div>
              </div>
              <div class="process-step">
                <div class="step-num">4</div>
                <div>
                  <h3 class="step-title">Repair Damaged Files (If Needed)</h3>
                  <p class="step-body">If the recovered files don&#39;t function properly, especially video files, we proceed with our in-house repair process. This step includes rebuilding file headers, correcting the structure, and stitching fragmented video data.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="section-img-wrap">
            <img src="/cfast-recovery-process-640.webp" alt="CFast card data recovery process" class="section-img" width="640" height="427" loading="lazy"
               srcset="/cfast-recovery-process-640.webp 640w, /cfast-recovery-process-800.webp 800w, /cfast-recovery-process-1280.webp 1280w"
               sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 1024px) 50vw, 640px" />
          </div>
        </div>
      </div>
    </section>

    <!-- REVIEWS -->
    <ClientOnly>
      <LazyReviewsSection :reviews="reviews" />
    </ClientOnly>
    <!-- SECTION 10 — <NuxtLink to="/data-recovery/video-file-repair">video file</NuxtLink> Repair -->
    <section class="s-grey">
      <div class="container">
        <h2 class="s-heading">We Also Repair Damaged Video Files</h2>
        <p class="s-body">If you recover your CFast card files but they won&#39;t play, don&#39;t panic. At Five Star Data Recovery, we specialize in repairing damaged or incomplete video files. We use special tools and manual methods to fix corrupted footage. This includes fixing broken headers and missing metadata. This service is especially helpful for production environments using large-format codecs like ProRes, RED, BRAW, and Canon XF.</p>
        <p class="s-body">For more details, please visit our dedicated <NuxtLink to="/data-recovery/video-file-repair" class="inline-link">video file repair page</NuxtLink>.</p>
      </div>
    </section>

    <!-- SECTION 11 — Nationwide -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading">Nationwide Service with Free Round-Trip Shipping</h2>
        <p class="s-body">No matter where you&#39;re located in the U.S., Five Star Data Recovery makes it easy to get your CFast card to us. We provide free round-trip shipping for all recovery cases. This way, you can get expert data recovery without leaving your home or studio. Once you create a recovery ticket, we&#39;ll email you a prepaid shipping label and instructions. When the recovery is complete, we&#39;ll return your files on a new drive and ship everything back to you at no cost.</p>
      </div>
    </section>

    <!-- QUOTE FORM -->
    <ClientOnly>
    <LazyQuoteFormSection
      description="Cinema cameras run on CFast cards\u2014and when they fail, your entire production is at risk. Our engineers have recovered ProRes, R3D, BRAW, and MXF footage from every major brand of CFast card, and can repair corrupted files that DIY tools make worse."
      bullet1="ARRI, RED, Blackmagic, Canon cinema camera media"
      bullet2="Video file repair included \u2014 ProRes, R3D, BRAW, MXF"
      bullet3="No Data, No Charge \u2014 free diagnostic included"
      closing="Stop using the card immediately \u2014 don&#39;t record new footage. Fill out the form and let our CFast specialists evaluate your media for free."
      bgImage="/cfast-data-recovery-hero.webp"
    />
    </ClientOnly>

    <!-- CONTACT BAND -->
    <section class="s-contact-band contact-band-bg">
      <div class="container">
        <div class="contact-banner-card">
          <h2 class="contact-banner-heading">Start Your CFast Recovery Today</h2>
        </div>
        <p class="contact-body-text">Whether you&#39;re dealing with a corrupt CFast card, accidental deletion, or damaged media files, we&#39;re here to help. We offer free diagnostics, transparent pricing, and fast results.</p>
        <ul class="contact-bullets">
          <li>Free diagnostic \u2014 no obligation</li>
          <li>Flat-rate pricing \u2014 no hidden fees</li>
          <li>No Data, No Charge (most cases)</li>
          <li>Free round-trip shipping nationwide</li>
        </ul>
        <NuxtLink to="/start-recovery" class="btn-start-recovery">Start Your Recovery</NuxtLink>
      </div>
    </section>

    <!-- FAQ -->
    <section class="s-white">
      <div class="container">
        <h2 class="s-heading" style="text-align:center; margin-bottom:36px;">Frequently Asked Questions</h2>
        <div class="faq-wrap">
          <div v-for="(faq, i) in faqs" :key="i" class="faq-row">
            <button class="faq-trigger" @click="toggleFaq(i)">
              <span>{{ faq.q }}</span>
              <span class="faq-toggle">{{ openFaq === i ? '−' : '+' }}</span>
            </button>
            <div v-if="openFaq === i" class="faq-answer" v-html="faq.a" />
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<style scoped>
*, *::before, *::after { box-sizing: border-box; }
.page-content { font-family: 'Inter', sans-serif; color: #1a1a2e; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 28px; }
.s-white { background: #fff; padding: 72px 0; }
.s-grey { background: #f4f7fc; padding: 72px 0; }
.s-heading { font-size: clamp(1.5rem, 2.8vw, 2rem); font-weight: 900; color: #1a1a2e; line-height: 1.25; margin-bottom: 20px; }
.s-body { font-size: 0.95rem; color: #4a5568; line-height: 1.8; margin-bottom: 14px; }
.inline-link { color: #7A5500; font-weight: 600; text-decoration: underline; }
.content-list { list-style: none; padding: 0 0 0 20px; margin: 0 0 20px; display: flex; flex-direction: column; gap: 10px; }
.content-list li { font-size: 0.95rem; color: #4a5568; line-height: 1.65; position: relative; padding-left: 16px; }
.content-list li::before { content: '»'; color: #C9A84C; font-weight: 900; position: absolute; left: -4px; top: 0; }
.two-col-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
.section-img-wrap { border-radius: 12px; overflow: hidden; }
.section-img { width: 100%; height: auto; display: block; border-radius: 12px; object-fit: cover; }
.process-steps { display: flex; flex-direction: column; }
.process-step { display: flex; align-items: flex-start; gap: 24px; padding: 28px 0; border-bottom: 1px solid #e2e6ee; }
.process-step:last-child { border-bottom: none; }
.step-num { width: 48px; height: 48px; background: #1a1a2e; color: #C9A84C; font-size: 1.2rem; font-weight: 900; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.step-title { font-size: 1rem; font-weight: 800; color: #1a1a2e; margin-bottom: 8px; }
.step-body { font-size: 0.93rem; color: #4a5568; line-height: 1.7; margin: 0; }
.s-contact-band { background: #0f1623; padding: 44px 0; border-top: 3px solid #C9A84C; border-bottom: 3px solid #C9A84C; }
.contact-band-bg { background: linear-gradient(to right, rgba(15,22,35,0.92) 0%, rgba(15,22,35,0.75) 60%, rgba(15,22,35,0.5) 100%), url('/cfast-card-recovery-professional.webp') center center / cover no-repeat !important; }
.contact-banner-card { border: none; border-radius: 0; padding: 0; margin-bottom: 16px; }
.contact-banner-heading { font-size: clamp(1.4rem, 2.5vw, 1.9rem); font-weight: 900; color: #fff; margin: 0; }
.contact-body-text { font-size: 0.95rem; color: rgba(255,255,255,0.7); line-height: 1.75; margin-bottom: 20px; }
.contact-bullets { list-style: none; padding: 0; margin: 0 0 28px; display: flex; flex-direction: column; gap: 8px; }
.contact-bullets li { font-size: 0.93rem; color: rgba(255,255,255,0.65); display: flex; align-items: center; gap: 10px; }
.contact-bullets li::before { content: '✓'; color: #C9A84C; font-weight: 700; }
.btn-start-recovery { display: inline-block; background: #C9A84C; color: #1a1a1a; font-weight: 800; font-size: 1rem; padding: 16px 36px; border-radius: 6px; text-decoration: none; transition: background 0.2s; }
.btn-start-recovery:hover { background: #b8923e; }
.faq-wrap { display: flex; flex-direction: column; border: 1.5px solid #e2e6ee; border-radius: 12px; overflow: hidden; }
.faq-row { border-bottom: 1px solid #e2e6ee; }
.faq-row:last-child { border-bottom: none; }
.faq-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 20px 24px; background: #fff; border: none; cursor: pointer; text-align: left; gap: 16px; font-family: inherit; }
.faq-trigger span:first-child { font-size: 0.95rem; font-weight: 700; color: #1a1a2e; line-height: 1.4; }
.faq-toggle { font-size: 1.4rem; font-weight: 300; color: #7A5500; flex-shrink: 0; }
.faq-answer { padding: 0 24px 22px; font-size: 0.92rem; color: #4a5568; line-height: 1.75; }
@media (max-width: 768px) { .two-col-layout { grid-template-columns: 1fr; } }
</style>
