<template>
  <footer class="footer">
    <div class="container footer-grid">
      <!-- Col 1: Brand -->
      <div class="footer-brand">
        <img src="/logo.png" alt="Five Star Data Recovery" class="footer-logo" />
        <p class="footer-tagline">Recovering what can't be replaced — professional data recovery services you can trust.</p>
        <div class="footer-stars">★★★★★</div>
        <p class="footer-rating-text">5.0 Rating · 21,000+ Drives Recovered</p>
      </div>

      <!-- Col 2: Common Issues -->
      <div class="footer-col">
        <h4 class="footer-heading">Common Issues</h4>
        <ul>
          <li><NuxtLink to="/services/hard-drive-recovery">Not Detected / Not Spinning</NuxtLink></li>
          <li><NuxtLink to="/services/hard-drive-recovery">Clicking / Grinding Noise</NuxtLink></li>
          <li><NuxtLink to="/services/hard-drive-recovery">Water Damage Recovery</NuxtLink></li>
          <li><NuxtLink to="/services/hard-drive-recovery">Corrupted / Deleted Files</NuxtLink></li>
          <li><NuxtLink to="/services/raid-recovery">RAID Array Failure</NuxtLink></li>
          <li><NuxtLink to="/services/ssd-recovery">SSD Not Recognized</NuxtLink></li>
          <li><NuxtLink to="/services/mobile-recovery">Phone Data Loss</NuxtLink></li>
        </ul>
      </div>

      <!-- Col 3: Helpful Links -->
      <div class="footer-col">
        <h4 class="footer-heading">Helpful Links</h4>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/pricing">Pricing</NuxtLink></li>
          <li><NuxtLink to="/about">About Us</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
          <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
        </ul>
      </div>

      <!-- Col 4: Contact -->
      <div class="footer-col">
        <h4 class="footer-heading">Contact Us</h4>
        <ul class="contact-list">
          <li>
            <span class="contact-icon">📍</span>
            <span>1731 S Brand Blvd Suite 100<br>Glendale, CA 91204</span>
          </li>
          <li>
            <span class="contact-icon">📞</span>
            <a href="tel:3236723000">323-672-3000</a>
          </li>
          <li>
            <span class="contact-icon">⏰</span>
            <span>Available 24/7/365</span>
          </li>
          <li>
            <span class="contact-icon">✈️</span>
            <span>Free Nationwide Shipping</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>© {{ new Date().getFullYear() }} Five Star Data Recovery. All rights reserved.</p>
        <p class="footer-disclaimer">No data recovered = No charge. Results may vary by case complexity.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #070910;
  border-top: 1px solid var(--border);
  padding-top: 64px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1fr;
  gap: 48px;
  padding-bottom: 56px;
}

.footer-logo {
  height: 44px;
  width: auto;
  margin-bottom: 16px;
}
.footer-tagline {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 16px;
}
.footer-stars {
  color: var(--gold);
  font-size: 20px;
  letter-spacing: 2px;
  margin-bottom: 6px;
}
.footer-rating-text {
  font-size: 13px;
  color: var(--muted);
}

.footer-heading {
  font-family: var(--font-heading);
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--white);
  margin-bottom: 20px;
}

.footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer-col ul li a,
.footer-col ul li {
  font-size: 14px;
  color: var(--muted);
  transition: color 0.2s;
}
.footer-col ul li a:hover { color: var(--gold); }

.contact-list { display: flex; flex-direction: column; gap: 14px !important; }
.contact-list li { display: flex; gap: 10px; align-items: flex-start; }
.contact-icon { font-size: 16px; flex-shrink: 0; margin-top: 1px; }
.contact-list a { color: var(--gold); font-weight: 600; }
.contact-list a:hover { text-decoration: underline; }

.footer-bottom {
  border-top: 1px solid var(--border);
  padding: 20px 0;
}
.footer-bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}
.footer-bottom p { font-size: 13px; color: var(--muted); }
.footer-disclaimer { font-style: italic; }

@media (max-width: 1024px) {
  .footer-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 640px) {
  .footer-grid { grid-template-columns: 1fr; gap: 32px; }
  .footer-bottom-inner { flex-direction: column; text-align: center; }
}
</style>
