<template>
  <footer class="footer">
    <div class="container footer-grid">

      <!-- Col 1: Brand -->
      <div class="footer-brand">
        <h3 class="footer-heading">Contact Us</h3>
        <div class="footer-contact-item">
          <span class="contact-emoji">📍</span>
          <span>1731 S Brand Blvd.<br>Glendale, CA 91204</span>
        </div>
        <div class="footer-contact-item">
          <span class="contact-emoji">📞</span>
          <a href="tel:8182728866">818-272-8866</a>
        </div>
        <div class="footer-hours">
          <p class="hours-label">Lab Hours</p>
          <p>Mon – Friday: 10am to 6pm</p>
          <p>Saturday: 10am to 2pm</p>
        </div>
      </div>

      <!-- Col 2: Common Issues -->
      <div class="footer-col">
        <h3 class="footer-heading">Common Issues:</h3>
        <ul>
          <li><NuxtLink to="/hard-drive-clicking">Hard Drive Clicking</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/hard-drive-not-showing-up">Hard Drive Not Showing Up</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/dropped-hard-drive">Dropped Hard Drive</NuxtLink></li>
          <li><NuxtLink to="/drive-doesnt-power-on">Hard Drive Has No Power</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/deleted-files">Deleted File Recovery</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/bad-sectors">Bad Sectors</NuxtLink></li>
        </ul>
      </div>

      <!-- Col 3: Helpful Links -->
      <div class="footer-col">
        <h3 class="footer-heading">Helpful Links</h3>
        <ul>
          <li><NuxtLink to="/appointments">Schedule Appointment</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/express-drop-off-form">Express Drop Off</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/data-recovery-mail-in-service">Mail in Service</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/free-data-recovery-quote">Request a Quote</NuxtLink></li>
          <li><NuxtLink to="/payment-plan">Payment Plan</NuxtLink></li>
          <li><NuxtLink to="/faq">FAQ's</NuxtLink></li>
          <li><NuxtLink to="/reviews">Reviews</NuxtLink></li>
        </ul>
      </div>

      <!-- Col 4: Service Areas -->
      <div class="footer-col">
        <h3 class="footer-heading">Service Areas</h3>
        <ul>
          <li><NuxtLink to="/data-recovery-burbank-ca">Burbank</NuxtLink></li>
          <li><NuxtLink to="/data-recovery-los-angeles">Los Angeles</NuxtLink></li>
          <li><NuxtLink to="/data-recovery-pasadena-ca">Pasadena</NuxtLink></li>
          <li><NuxtLink to="/data-recovery-hollywood-ca">Hollywood</NuxtLink></li>
          <li><NuxtLink to="/data-recovery-services-glendale-ca">Glendale</NuxtLink></li>
          <li><NuxtLink to="/data-recovery-beverly-hills">Beverly Hills</NuxtLink></li>
        </ul>
      </div>

      <!-- Col 5: Common Drives -->
      <div class="footer-col">
        <h3 class="footer-heading">Common Drives:</h3>
        <ul>
          <li><NuxtLink to="/data-recovery/lacie-data-recovery">LaCie</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/hitachi-data-recovery">Hitachi</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/seagate-data-recovery">Seagate</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/western-digital-data-recovery">Western Digital</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/toshiba-data-recovery">Toshiba</NuxtLink></li>
          <li><NuxtLink to="/data-recovery/samsung-data-recovery">Samsung</NuxtLink></li>
        </ul>
      </div>

    </div>

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <p>© {{ new Date().getFullYear() }} Five Star Data Recovery Services. All rights reserved.</p>
        <div class="footer-legal-links">
          <NuxtLink to="/privacy-policy">Privacy and Policy</NuxtLink>
          <NuxtLink to="/terms-and-conditions">Terms of Service</NuxtLink>
        </div>
      </div>
      <div class="footer-powered">
        <a href="https://opulex.ai" target="_blank" rel="noopener">Powered by Opulex.ai</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #000000;
  border-top: 3px solid rgba(245,200,66,0.2);
  padding-top: 56px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

/* Brand col */
.footer-logo {
  height: 52px;
  width: auto;
  margin-bottom: 20px;
  display: block;
}
.contact-emoji { font-size: 16px; flex-shrink: 0; margin-top: 1px; }
.footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 13px;
  color: #9ba3b8;
  line-height: 1.6;
}
.footer-contact-item a {
  color: #9ba3b8;
  text-decoration: none;
  font-size: 13px;
  font-weight: 400;
  transition: color 0.2s;
}
.footer-contact-item a:hover { color: var(--gold); }
.footer-hours {
  margin-top: 14px;
  font-size: 13px;
  color: #9ba3b8;
  line-height: 1.8;
}
.hours-label {
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
}

/* Column headings */
.footer-heading {
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 6px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--gold);
  display: inline-block;
}

.footer-col ul {
  list-style: none;
  padding: 0;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.footer-col ul li a {
  font-size: 13px;
  color: #c8d0e0;
  text-decoration: none;
  transition: color 0.2s;
}
.footer-col ul li a:hover { color: var(--gold); }

/* Bottom bar */
.footer-bottom {
  padding: 18px 0;
}
.footer-bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}
.footer-bottom p { font-size: 13px; color: #9ba3b8; }
.footer-legal-links {
  display: flex;
  gap: 24px;
}
.footer-legal-links a {
  font-size: 13px;
  color: #9ba3b8;
  text-decoration: none;
  transition: color 0.2s;
}
.footer-legal-links a:hover { color: var(--gold); }
.footer-powered { text-align: center; padding: 8px 0 4px; }
/* #5a6275 on black = 3.82:1 fails. #9ba3b8 on black = 8.76:1 passes WCAG AA */
.footer-powered a { font-size: 11px; color: #9ba3b8; text-decoration: none; letter-spacing: 0.03em; transition: color 0.2s; }
.footer-powered a:hover { color: var(--gold); }

@media (max-width: 1100px) {
  .footer-grid { grid-template-columns: 1fr 1fr 1fr; }
}
@media (max-width: 640px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 28px; }
  .footer-brand { grid-column: 1 / -1; }
  .footer-bottom-inner { flex-direction: column; text-align: center; }
}
@media (max-width: 420px) {
  .footer-grid { grid-template-columns: 1fr; }
  .footer-brand { grid-column: auto; }
}
</style>
