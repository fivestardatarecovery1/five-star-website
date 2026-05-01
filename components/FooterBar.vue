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

      <!-- Col 2: Services -->
      <div class="footer-col">
        <h4 class="footer-heading">Services</h4>
        <ul>
          <li><NuxtLink to="/data-recovery/hard-drive-recovery">Hard Drive Recovery</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/ssd-recovery">SSD Recovery</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/raid-recovery">RAID Recovery</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/laptop-recovery">Laptop Recovery</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/mac-recovery">Mac Recovery</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/iphone-recovery">iPhone Recovery</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/external-hard-drive">External HDD</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/nas-recovery">NAS Recovery</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/usb-recovery">USB Recovery</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/sd-card-recovery">SD Card Recovery</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/clean-room">Clean Room Recovery</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/mail-in-service">Mail-In Service</NuxtLink></li>
        </ul>
      </div>

      <!-- Col 3: Quick Links -->
      <div class="footer-col">
        <h4 class="footer-heading">Quick Links</h4>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/data-recovery">All Services</NuxtLink></li>
          <li><NuxtLink to="/pricing">Pricing</NuxtLink></li>
          <li><NuxtLink to="/about">About Us</NuxtLink></li>
          <li><NuxtLink to="/reviews">Reviews</NuxtLink></li>
          <li><NuxtLink to="/faq">FAQ</NuxtLink></li>
          <li><NuxtLink to="/contact">Contact</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
          <li><NuxtLink to="/start-recovery">Start a Recovery</NuxtLink></li>
          <li><NuxtLink to="/expedited-service">Expedited Service</NuxtLink></li>
          <li><NuxtLink to="/payment-plan">Payment Plans</NuxtLink></li>
        </ul>
        <h4 class="footer-heading" style="margin-top:20px">Locations</h4>
        <ul>
          <li><NuxtLink to="/data-recovery-los-angeles">Los Angeles</NuxtLink></li>
          <li><NuxtLink to="/data-recovery-glendale">Glendale</NuxtLink></li>
          <li><NuxtLink to="/data-recovery-burbank">Burbank</NuxtLink></li>
          <li><NuxtLink to="/data-recovery-pasadena">Pasadena</NuxtLink></li>
          <li><NuxtLink to="/data-recovery-hollywood">Hollywood</NuxtLink></li>
          <li><NuxtLink to="/data-recovery-beverly-hills">Beverly Hills</NuxtLink></li>
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
            <span class="contact-icon">✉️</span>
            <a href="mailto:info@fivestardatarecovery.com">info@fivestardatarecovery.com</a>
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
        <div class="footer-legal-links">
          <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms">Terms &amp; Conditions</NuxtLink>
        </div>
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
  margin-bottom: 16px;
}

.footer-col ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.footer-col ul li a,
.footer-col ul li {
  font-size: 13px;
  color: var(--muted);
  transition: color 0.2s;
  text-decoration: none;
}
.footer-col ul li a:hover { color: var(--gold); }

.contact-list { display: flex; flex-direction: column; gap: 12px !important; }
.contact-list li { display: flex; gap: 10px; align-items: flex-start; }
.contact-icon { font-size: 15px; flex-shrink: 0; margin-top: 1px; }
.contact-list a { color: var(--gold); font-weight: 600; text-decoration: none; }
.contact-list a:hover { text-decoration: underline; }

.footer-legal-links {
  display: flex;
  gap: 16px;
  margin-top: 20px;
}
.footer-legal-links a {
  font-size: 12px;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
}
.footer-legal-links a:hover { color: var(--gold); }

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
