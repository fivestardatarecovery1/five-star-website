import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2 } from './FooterBar-DcJHaOPV.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-B7llGaxe.mjs';
import { defineComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "About Us",
      description: "Learn about Five Star Data Recovery \u2014 10+ years of professional data recovery in Glendale, CA. ISO cleanroom, certified engineers, 21,000+ drives recovered."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      const _component_HeroSection = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_FooterBar = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6b3d5ef6>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(ssrRenderComponent(_component_HeroSection, {
        title: "About Five Star Data Recovery",
        subtitle: "10 Years. 21,000+ Drives. One Mission.",
        description: "We started Five Star Data Recovery because we saw how devastating data loss could be \u2014 for families, small businesses, and large enterprises alike. Our mission is simple: recover your data, or you don't pay."
      }, null, _parent));
      _push(`<section data-v-6b3d5ef6><div class="container" data-v-6b3d5ef6><div class="about-grid" data-v-6b3d5ef6><div class="about-copy" data-v-6b3d5ef6><h2 class="section-title" data-v-6b3d5ef6>Our <span class="gold" data-v-6b3d5ef6>Story</span></h2><p data-v-6b3d5ef6>Five Star Data Recovery was founded in Glendale, California over a decade ago by a team of data forensics engineers who believed the industry needed more transparency and less price-gouging.</p><p data-v-6b3d5ef6>Today, we&#39;re one of the most trusted data recovery labs on the West Coast \u2014 with a 5.0-star rating across hundreds of reviews, a dedicated ISO Class 5 cleanroom, and a team that works 24/7/365 to recover your data.</p><p data-v-6b3d5ef6>We&#39;ve seen it all: RAID arrays from Fortune 500 companies, wedding photos from irreplaceable moments, medical records, financial data, and decades of family memories. Every case matters to us.</p></div><div class="about-stats" data-v-6b3d5ef6><div class="about-stat" data-v-6b3d5ef6><span class="about-stat-num" data-v-6b3d5ef6>21,000+</span><span class="about-stat-label" data-v-6b3d5ef6>Drives Recovered</span></div><div class="about-stat" data-v-6b3d5ef6><span class="about-stat-num" data-v-6b3d5ef6>10+</span><span class="about-stat-label" data-v-6b3d5ef6>Years Experience</span></div><div class="about-stat" data-v-6b3d5ef6><span class="about-stat-num" data-v-6b3d5ef6>5.0</span><span class="about-stat-label" data-v-6b3d5ef6>Star Rating</span></div><div class="about-stat" data-v-6b3d5ef6><span class="about-stat-num" data-v-6b3d5ef6>24/7</span><span class="about-stat-label" data-v-6b3d5ef6>Available</span></div></div></div></div></section><section class="values-section" data-v-6b3d5ef6><div class="container" data-v-6b3d5ef6><div class="section-header" data-v-6b3d5ef6><h2 class="section-title" data-v-6b3d5ef6>Our <span class="gold-underline gold" data-v-6b3d5ef6>Core Values</span></h2></div><div class="grid-3" data-v-6b3d5ef6><!--[-->`);
      ssrRenderList([
        { icon: "\u{1F3C6}", title: "Integrity", desc: "We tell you exactly what's recoverable and what isn't. No false hope. No hidden fees. No surprises." },
        { icon: "\u{1F52C}", title: "Precision", desc: "Data recovery is surgery. We treat every drive with the care and precision of a medical procedure." },
        { icon: "\u{1F91D}", title: "Trust", desc: "You're handing us your most irreplaceable data. We take that responsibility seriously, every single time." }
      ], (v) => {
        _push(`<div class="card values-card" data-v-6b3d5ef6><div class="values-icon" data-v-6b3d5ef6>${ssrInterpolate(v.icon)}</div><h3 class="values-title" data-v-6b3d5ef6>${ssrInterpolate(v.title)}</h3><p class="values-desc" data-v-6b3d5ef6>${ssrInterpolate(v.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="location-section" data-v-6b3d5ef6><div class="container location-inner" data-v-6b3d5ef6><div data-v-6b3d5ef6><h2 class="section-title" data-v-6b3d5ef6>Visit Our <span class="gold" data-v-6b3d5ef6>Lab</span></h2><div class="location-details" data-v-6b3d5ef6><p data-v-6b3d5ef6>\u{1F4CD} <strong data-v-6b3d5ef6>1731 S Brand Blvd Suite 100</strong><br data-v-6b3d5ef6>Glendale, CA 91204</p><p data-v-6b3d5ef6>\u{1F4DE} <a href="tel:3236723000" data-v-6b3d5ef6>323-672-3000</a></p><p data-v-6b3d5ef6>\u23F0 Walk-ins welcome \xB7 Emergency 24/7 by appointment</p></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn btn-gold",
        style: { "margin-top": "24px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Get In Touch`);
          } else {
            return [
              createTextVNode("Get In Touch")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="map-placeholder" data-v-6b3d5ef6><div class="map-card" data-v-6b3d5ef6><p style="${ssrRenderStyle({ "font-size": "48px" })}" data-v-6b3d5ef6>\u{1F5FA}\uFE0F</p><p style="${ssrRenderStyle({ "font-weight": "700", "margin-top": "12px" })}" data-v-6b3d5ef6>Glendale, CA</p><p style="${ssrRenderStyle({ "color": "var(--muted)", "font-size": "14px", "margin-top": "4px" })}" data-v-6b3d5ef6>1731 S Brand Blvd Suite 100</p><a href="https://maps.google.com/?q=1731+S+Brand+Blvd+Suite+100+Glendale+CA+91204" target="_blank" rel="noopener" class="btn btn-outline" style="${ssrRenderStyle({ "margin-top": "16px", "font-size": "13px" })}" data-v-6b3d5ef6>Open in Maps</a></div></div></div></section>`);
      _push(ssrRenderComponent(_component_FooterBar, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6b3d5ef6"]]);

export { about as default };
//# sourceMappingURL=about-qagEfvZk.mjs.map
