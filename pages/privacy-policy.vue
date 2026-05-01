<script setup lang="ts">
useSeoMeta({
  title: 'Privacy Policy | Five Star Data Recovery',
  description: 'Privacy policy for Five Star Data Recovery. Learn how we collect, use, and protect your personal information.'
})
</script>
<template>
  <div>
    <NavBar />
    <HeroSection title="Privacy Policy" subtitle="Your Privacy Is Our Priority." description="Five Star Data Recovery is committed to protecting your personal information and maintaining the confidentiality of your data." >
      <template #badges><div class="trust-badges"><span class="badge">🔒 Data Confidential</span><span class="badge">✅ NDA Available</span></div></template>
    </HeroSection>
    <section class="legal-section">
      <div class="container">
        <div class="legal-content">
          <p class="updated">Last Updated: January 1, 2025</p>
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you request a free evaluation, contact us by phone or email, or use our services. This may include your name, email address, phone number, physical address, and information about the device and data loss situation.</p>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to provide our data recovery services, communicate with you about your case, send you updates and status reports, process payments, and improve our services. We do not sell or share your personal information with third parties for marketing purposes.</p>
          <h2>3. Data Confidentiality</h2>
          <p>We take the confidentiality of your data extremely seriously. All recovered data is handled with strict confidentiality protocols. Our engineers sign confidentiality agreements and we can provide NDAs for clients who request them. We do not access, copy, or share your personal files beyond what is necessary for the recovery process.</p>
          <h2>4. Data Retention</h2>
          <p>After successful data recovery, we retain a temporary backup of your recovered data for 30 days to ensure delivery integrity. Upon your request, we will permanently delete all copies of your data from our systems. We retain business records (invoices, communications) as required by law.</p>
          <h2>5. Security</h2>
          <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our lab uses physical security controls, access restrictions, and encrypted storage for all client data.</p>
          <h2>6. Cookies</h2>
          <p>Our website uses essential cookies to function properly and analytics cookies to understand how visitors use our site. You can opt out of analytics cookies through your browser settings.</p>
          <h2>7. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at info@fivestardatarecovery.com or call 323-672-3000.</p>
          <h2>8. Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at:<br><strong>Five Star Data Recovery</strong><br>1731 S Brand Blvd Suite 100, Glendale, CA 91204<br>Phone: 323-672-3000<br>Email: info@fivestardatarecovery.com</p>
        </div>
      </div>
    </section>
    <FooterBar />
  </div>
</template>
<style scoped>
.trust-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 8px; }
.badge { background: rgba(255,255,255,0.06); border: 1px solid var(--border); color: var(--white); padding: 7px 14px; border-radius: 20px; font-size: 13px; font-weight: 500; }
.legal-section { padding: 80px 0; }
.legal-content { max-width: 800px; }
.updated { font-size: 14px; color: var(--muted); margin-bottom: 40px; font-style: italic; }
.legal-content h2 { font-family: var(--font-heading); font-size: 20px; font-weight: 700; color: var(--gold); margin: 40px 0 12px; }
.legal-content p { font-size: 15px; color: var(--muted); line-height: 1.8; margin-bottom: 16px; }
</style>
