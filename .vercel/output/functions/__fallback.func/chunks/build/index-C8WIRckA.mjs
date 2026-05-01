import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2 } from './FooterBar-DcJHaOPV.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-B7llGaxe.mjs';
import { defineComponent, ref, withCtx, createVNode, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import { u as useSeoMeta } from './v3-BlJdoZgg.mjs';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'unified';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'micromark-util-sanitize-uri';
import 'hast-util-to-string';
import 'github-slugger';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'unhead/plugins';
import 'unhead/utils';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Expert Data Recovery Services \u2014 Glendale, CA",
      description: "Five Star Data Recovery \u2014 professional hard drive, SSD, RAID, and mobile data recovery in Glendale, CA. No data, no charge. Free evaluation. Call 323-672-3000."
    });
    const services = [
      { icon: "\u{1F4BE}", title: "Hard Drive Recovery", desc: "Mechanical failures, clicking drives, read errors, and firmware corruption. We recover from all major HDD brands.", href: "/services/hard-drive-recovery" },
      { icon: "\u26A1", title: "SSD Recovery", desc: "Flash memory failures, controller issues, and NAND chip recovery. Modern SSD forensics and data extraction.", href: "/services/ssd-recovery" },
      { icon: "\u{1F5A5}\uFE0F", title: "RAID / Server Recovery", desc: "RAID 0, 1, 5, 6, 10, and NAS array reconstruction. Enterprise-grade recovery with minimal downtime.", href: "/services/raid-recovery" },
      { icon: "\u{1F4BB}", title: "Laptop Recovery", desc: "Dropped laptops, liquid spills, and dead drives from all brands \u2014 Dell, HP, Lenovo, Asus, and more.", href: "/services/laptop-recovery" },
      { icon: "\u{1F5C4}\uFE0F", title: "External HDD Recovery", desc: "WD My Passport, Seagate Backup Plus, LaCie, and other portable drives recovered quickly.", href: "/services/external-hdd-recovery" },
      { icon: "\u{1F34E}", title: "Mac / iMac Recovery", desc: "Apple Fusion Drive, T2/M1/M2 chip Macs, and Time Machine failures handled by certified Apple technicians.", href: "/services/mac-recovery" },
      { icon: "\u{1F4F1}", title: "iPhone & Mobile", desc: "iOS and Android data recovery from broken screens, water damage, and failed updates.", href: "/services/mobile-recovery" },
      { icon: "\u{1F50C}", title: "USB Flash Drive", desc: "Broken connectors, failed controllers, and corrupted partitions on USB and thumb drives.", href: "/services/usb-recovery" },
      { icon: "\u{1F4F7}", title: "SD Card Recovery", desc: "Camera cards, drone footage, and dashcam recovery from all SD card formats.", href: "/services/hard-drive-recovery" },
      { icon: "\u{1F310}", title: "NAS Device Recovery", desc: "Synology, QNAP, Buffalo, and custom NAS enclosures with failed drives or corrupted volumes.", href: "/services/raid-recovery" },
      { icon: "\u{1F4A7}", title: "Water Damage Recovery", desc: "Submerged and flood-damaged drives recovered in our cleanroom before corrosion sets in.", href: "/services/hard-drive-recovery" },
      { icon: "\u{1F525}", title: "Fire & Disaster Recovery", desc: "Smoke, heat, and physical trauma recovery. We specialize in extreme-condition data extraction.", href: "/services/hard-drive-recovery" }
    ];
    const whyUs = [
      { icon: "\u{1F3C6}", title: "No Data = No Charge", desc: "You only pay if we successfully recover your data. Zero risk to you." },
      { icon: "\u{1F512}", title: "Cleanroom Facility", desc: "ISO Class 5 cleanroom for all hard drive and physical media repairs." },
      { icon: "\u26A1", title: "24-48 Hour Turnaround", desc: "Emergency same-day service available. We work around the clock." },
      { icon: "\u2708\uFE0F", title: "Free Nationwide Shipping", desc: "Ship your device to us for free. We pay both ways." },
      { icon: "\u2B50", title: "5.0 Star Rating", desc: "Hundreds of 5-star reviews from businesses and individuals across the US." },
      { icon: "\u{1F510}", title: "100% Confidential", desc: "Your data is never shared. Strict privacy policy and NDA available." },
      { icon: "\u{1F4DE}", title: "Available 24/7/365", desc: "Our team never sleeps. Call us anytime, even on holidays." },
      { icon: "\u{1F6E1}\uFE0F", title: "10+ Years Experience", desc: "Over a decade recovering critical data for businesses and families." }
    ];
    const steps = [
      { num: "01", title: "Contact Us", desc: "Call 323-672-3000 or fill out our form. We respond within 1 hour." },
      { num: "02", title: "Free Evaluation", desc: "Ship your device to us for free. We assess the damage at no charge." },
      { num: "03", title: "Get a Quote", desc: "We provide a flat-rate quote before any work begins. No surprises." },
      { num: "04", title: "Recovery Work", desc: "Our engineers work in our cleanroom to recover every recoverable file." },
      { num: "05", title: "Data Delivered", desc: "Receive your data on a new drive or via secure download. Done." }
    ];
    const reviews = [
      {
        name: "Michael T.",
        role: "Small Business Owner",
        stars: 5,
        text: "My RAID server failed and I thought 8 years of business data was gone forever. Five Star recovered 100% of it within 48 hours. Worth every penny."
      },
      {
        name: "Sarah K.",
        role: "Photographer",
        stars: 5,
        text: "Dropped my external hard drive with 3 years of wedding photography. They recovered every single file. I cried when I got the call. Incredible team."
      },
      {
        name: "James R.",
        role: "IT Manager",
        stars: 5,
        text: "We use Five Star for all our enterprise data emergencies. Professional, fast, and the cleanroom facility is state-of-the-art. Highly recommend."
      }
    ];
    const faqs = [
      { q: "How much does data recovery cost?", a: "Our pricing depends on the type of device and severity of damage. We offer free evaluations and flat-rate quotes before any work begins. Standard recovery starts from $299." },
      { q: "How long does the recovery process take?", a: "Standard turnaround is 3-5 business days. Rush service (24-48 hours) is available for emergencies. We'll give you a timeline after evaluation." },
      { q: "What if you can't recover my data?", a: 'Simple \u2014 you pay nothing. Our "No Data = No Charge" policy means you only pay if we successfully recover your files.' },
      { q: "Do I need to bring my device in person?", a: "No. We provide free nationwide shipping both ways. Just contact us and we'll send a prepaid shipping label." },
      { q: "Is my data kept confidential?", a: "Absolutely. We have strict confidentiality policies and can sign an NDA upon request. Your data is never shared or copied." },
      { q: "What types of drives can you recover from?", a: "We recover from all storage media: hard drives, SSDs, RAID arrays, NAS devices, external drives, USB flash drives, SD cards, and mobile devices." },
      { q: "My hard drive is making a clicking noise \u2014 is recovery still possible?", a: "Yes, but time is critical. A clicking drive means head failure. Stop using it immediately and contact us. The sooner we receive it, the better the recovery chances." },
      { q: "Do you have a physical location I can visit?", a: "Yes! Our lab is located at 1731 S Brand Blvd Suite 100, Glendale, CA 91204. Walk-ins are welcome during business hours." }
    ];
    const openFaq = ref(null);
    const partners = ["Western Digital", "Seagate", "Samsung", "Toshiba", "HGST", "LaCie", "SanDisk", "Kingston", "Synology", "QNAP"];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      const _component_HeroSection = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_FooterBar = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-8c6d7dd4>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(ssrRenderComponent(_component_HeroSection, {
        title: "Recovering What Can't Be Replaced",
        subtitle: "Get Your Data Back. Guaranteed.",
        description: "Professional data recovery for hard drives, SSDs, RAID systems, and mobile devices. No data recovered = no charge. Free evaluation on every case."
      }, {
        badges: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="trust-badges" data-v-8c6d7dd4${_scopeId}><span class="badge" data-v-8c6d7dd4${_scopeId}>\u2705 Available 24/7/365</span><span class="badge" data-v-8c6d7dd4${_scopeId}>\u2705 No Data = No Charge</span><span class="badge" data-v-8c6d7dd4${_scopeId}>\u2705 10+ Years in Business</span><span class="badge" data-v-8c6d7dd4${_scopeId}>\u2705 Free Nationwide Shipping</span></div>`);
          } else {
            return [
              createVNode("div", { class: "trust-badges" }, [
                createVNode("span", { class: "badge" }, "\u2705 Available 24/7/365"),
                createVNode("span", { class: "badge" }, "\u2705 No Data = No Charge"),
                createVNode("span", { class: "badge" }, "\u2705 10+ Years in Business"),
                createVNode("span", { class: "badge" }, "\u2705 Free Nationwide Shipping")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="trust-strip" data-v-8c6d7dd4><div class="container" data-v-8c6d7dd4><p class="strip-label" data-v-8c6d7dd4>We Recover From All Major Brands</p><div class="logo-badges" data-v-8c6d7dd4><!--[-->`);
      ssrRenderList(partners, (p) => {
        _push(`<span class="logo-badge" data-v-8c6d7dd4>${ssrInterpolate(p)}</span>`);
      });
      _push(`<!--]--></div></div></section><section class="services-section" data-v-8c6d7dd4><div class="container" data-v-8c6d7dd4><div class="section-header" data-v-8c6d7dd4><h2 class="section-title" data-v-8c6d7dd4>Our <span class="gold-underline gold" data-v-8c6d7dd4>Recovery Services</span></h2><p class="section-subtitle" data-v-8c6d7dd4>Whatever the device, whatever the damage \u2014 we&#39;ve seen it before and we&#39;ve recovered it before.</p></div><div class="services-grid" data-v-8c6d7dd4><!--[-->`);
      ssrRenderList(services, (s) => {
        _push(`<div class="service-card card" data-v-8c6d7dd4><div class="service-icon" data-v-8c6d7dd4>${ssrInterpolate(s.icon)}</div><h3 class="service-title" data-v-8c6d7dd4>${ssrInterpolate(s.title)}</h3><p class="service-desc" data-v-8c6d7dd4>${ssrInterpolate(s.desc)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: s.href,
          class: "service-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Learn More \u2192`);
            } else {
              return [
                createTextVNode("Learn More \u2192")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section><section class="why-section" data-v-8c6d7dd4><div class="container" data-v-8c6d7dd4><div class="section-header" data-v-8c6d7dd4><h2 class="section-title" data-v-8c6d7dd4>Why Choose <span class="gold-underline gold" data-v-8c6d7dd4>Five Star</span>?</h2><p class="section-subtitle" data-v-8c6d7dd4>We&#39;ve built our reputation on results, transparency, and treating every client&#39;s data like it&#39;s irreplaceable \u2014 because it is.</p></div><div class="grid-4" data-v-8c6d7dd4><!--[-->`);
      ssrRenderList(whyUs, (w) => {
        _push(`<div class="why-card card" data-v-8c6d7dd4><div class="why-icon" data-v-8c6d7dd4>${ssrInterpolate(w.icon)}</div><h3 class="why-title" data-v-8c6d7dd4>${ssrInterpolate(w.title)}</h3><p class="why-desc" data-v-8c6d7dd4>${ssrInterpolate(w.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="process-section" data-v-8c6d7dd4><div class="container" data-v-8c6d7dd4><div class="section-header" data-v-8c6d7dd4><h2 class="section-title" data-v-8c6d7dd4>How It <span class="gold-underline gold" data-v-8c6d7dd4>Works</span></h2><p class="section-subtitle" data-v-8c6d7dd4>Simple, transparent, and stress-free from start to finish.</p></div><div class="process-steps" data-v-8c6d7dd4><!--[-->`);
      ssrRenderList(steps, (step, i) => {
        _push(`<div class="process-step" data-v-8c6d7dd4><div class="step-num" data-v-8c6d7dd4>${ssrInterpolate(step.num)}</div><div class="step-content" data-v-8c6d7dd4><h3 class="step-title" data-v-8c6d7dd4>${ssrInterpolate(step.title)}</h3><p class="step-desc" data-v-8c6d7dd4>${ssrInterpolate(step.desc)}</p></div>`);
        if (i < steps.length - 1) {
          _push(`<div class="step-arrow" data-v-8c6d7dd4>\u2192</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section><section class="stats-bar" data-v-8c6d7dd4><div class="container stats-inner" data-v-8c6d7dd4><div class="stat" data-v-8c6d7dd4><span class="stat-num" data-v-8c6d7dd4>10+</span><span class="stat-label" data-v-8c6d7dd4>Years in Business</span></div><div class="stat-divider" data-v-8c6d7dd4></div><div class="stat" data-v-8c6d7dd4><span class="stat-num" data-v-8c6d7dd4>5.0</span><span class="stat-label" data-v-8c6d7dd4>Star Rating</span></div><div class="stat-divider" data-v-8c6d7dd4></div><div class="stat" data-v-8c6d7dd4><span class="stat-num" data-v-8c6d7dd4>21,000+</span><span class="stat-label" data-v-8c6d7dd4>Drives Recovered</span></div><div class="stat-divider" data-v-8c6d7dd4></div><div class="stat" data-v-8c6d7dd4><span class="stat-num" data-v-8c6d7dd4>100%</span><span class="stat-label" data-v-8c6d7dd4>Confidential</span></div></div></section><section class="reviews-section" data-v-8c6d7dd4><div class="container" data-v-8c6d7dd4><div class="section-header" data-v-8c6d7dd4><h2 class="section-title" data-v-8c6d7dd4>What Our <span class="gold-underline gold" data-v-8c6d7dd4>Clients Say</span></h2><p class="section-subtitle" data-v-8c6d7dd4>Real stories from real people who trusted us with their most important data.</p></div><div class="grid-3" data-v-8c6d7dd4><!--[-->`);
      ssrRenderList(reviews, (r) => {
        _push(`<div class="review-card card" data-v-8c6d7dd4><div class="review-stars" data-v-8c6d7dd4>${ssrInterpolate("\u2605".repeat(r.stars))}</div><p class="review-text" data-v-8c6d7dd4>&quot;${ssrInterpolate(r.text)}&quot;</p><div class="review-author" data-v-8c6d7dd4><span class="author-name" data-v-8c6d7dd4>${ssrInterpolate(r.name)}</span><span class="author-role" data-v-8c6d7dd4>${ssrInterpolate(r.role)}</span></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="cta-section" data-v-8c6d7dd4><div class="container cta-inner" data-v-8c6d7dd4><div class="cta-copy" data-v-8c6d7dd4><h2 class="section-title" data-v-8c6d7dd4>Don&#39;t Wait \u2014 <span class="gold" data-v-8c6d7dd4>Every Hour Matters</span></h2><p class="section-subtitle" style="${ssrRenderStyle({ "max-width": "480px" })}" data-v-8c6d7dd4>The longer a failing drive operates, the lower your chances of full recovery. Contact us now for a free, no-obligation evaluation.</p><a href="tel:3236723000" class="btn btn-gold" style="${ssrRenderStyle({ "font-size": "18px", "padding": "16px 36px" })}" data-v-8c6d7dd4>\u{1F4DE} Call 323-672-3000</a></div><div class="cta-form-wrap" data-v-8c6d7dd4>`);
      _push(ssrRenderComponent(_component_HeroSection, {
        title: "",
        subtitle: ""
      }, null, _parent));
      _push(`</div></div></section><section class="faq-section" data-v-8c6d7dd4><div class="container" data-v-8c6d7dd4><div class="section-header" data-v-8c6d7dd4><h2 class="section-title" data-v-8c6d7dd4>Frequently Asked <span class="gold-underline gold" data-v-8c6d7dd4>Questions</span></h2></div><div class="faq-list" data-v-8c6d7dd4><!--[-->`);
      ssrRenderList(faqs, (faq, i) => {
        _push(`<div class="${ssrRenderClass([{ open: unref(openFaq) === i }, "faq-item"])}" data-v-8c6d7dd4><button class="faq-question" data-v-8c6d7dd4><span data-v-8c6d7dd4>${ssrInterpolate(faq.q)}</span><span class="faq-icon" data-v-8c6d7dd4>${ssrInterpolate(unref(openFaq) === i ? "\u2212" : "+")}</span></button>`);
        if (unref(openFaq) === i) {
          _push(`<div class="faq-answer" data-v-8c6d7dd4>${ssrInterpolate(faq.a)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_FooterBar, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8c6d7dd4"]]);

export { index as default };
//# sourceMappingURL=index-C8WIRckA.mjs.map
