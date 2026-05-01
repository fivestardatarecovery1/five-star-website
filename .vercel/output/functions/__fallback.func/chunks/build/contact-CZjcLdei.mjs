import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2 } from './FooterBar-DcJHaOPV.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-B7llGaxe.mjs';
import { defineComponent, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Contact Us",
      description: "Contact Five Star Data Recovery in Glendale, CA. Call 323-672-3000 or fill out our form for a free evaluation. Available 24/7/365."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      const _component_HeroSection = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_FooterBar = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-5d2e946b>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(ssrRenderComponent(_component_HeroSection, {
        title: "Contact Us",
        subtitle: "We Respond Within 1 Hour.",
        description: "Our team is available 24/7/365. Call us, fill out the form, or walk into our Glendale lab. We'll evaluate your case for free and give you an honest quote."
      }, {
        badges: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="trust-badges" data-v-5d2e946b${_scopeId}><span class="badge" data-v-5d2e946b${_scopeId}>\u{1F4DE} 323-672-3000</span><span class="badge" data-v-5d2e946b${_scopeId}>\u23F0 Available 24/7</span><span class="badge" data-v-5d2e946b${_scopeId}>\u2705 Free Evaluation</span></div>`);
          } else {
            return [
              createVNode("div", { class: "trust-badges" }, [
                createVNode("span", { class: "badge" }, "\u{1F4DE} 323-672-3000"),
                createVNode("span", { class: "badge" }, "\u23F0 Available 24/7"),
                createVNode("span", { class: "badge" }, "\u2705 Free Evaluation")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section data-v-5d2e946b><div class="container" data-v-5d2e946b><div class="contact-options" data-v-5d2e946b><div class="contact-option card" data-v-5d2e946b><div class="option-icon" data-v-5d2e946b>\u{1F4DE}</div><h3 class="option-title" data-v-5d2e946b>Call Us Now</h3><p class="option-desc" data-v-5d2e946b>Speak directly with a recovery specialist. Available 24 hours a day, 7 days a week, 365 days a year.</p><a href="tel:3236723000" class="btn btn-gold" data-v-5d2e946b>323-672-3000</a></div><div class="contact-option card" data-v-5d2e946b><div class="option-icon" data-v-5d2e946b>\u{1F4CD}</div><h3 class="option-title" data-v-5d2e946b>Visit Our Lab</h3><p class="option-desc" data-v-5d2e946b>Walk-ins welcome during business hours. Bring your device and we&#39;ll evaluate it on the spot \u2014 no appointment needed.</p><a href="https://maps.google.com/?q=1731+S+Brand+Blvd+Suite+100+Glendale+CA+91204" target="_blank" rel="noopener" class="btn btn-outline" data-v-5d2e946b>Get Directions</a></div><div class="contact-option card" data-v-5d2e946b><div class="option-icon" data-v-5d2e946b>\u2708\uFE0F</div><h3 class="option-title" data-v-5d2e946b>Ship Your Device</h3><p class="option-desc" data-v-5d2e946b>We provide a free prepaid shipping label. Pack your device securely, attach the label, and drop it off at any carrier location.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn btn-outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Request Shipping Label`);
          } else {
            return [
              createTextVNode("Request Shipping Label")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="address-bar" data-v-5d2e946b><div class="address-item" data-v-5d2e946b><strong data-v-5d2e946b>Address:</strong> 1731 S Brand Blvd Suite 100, Glendale, CA 91204 </div><div class="address-item" data-v-5d2e946b><strong data-v-5d2e946b>Phone:</strong> <a href="tel:3236723000" data-v-5d2e946b>323-672-3000</a></div><div class="address-item" data-v-5d2e946b><strong data-v-5d2e946b>Hours:</strong> 24/7/365 \u2014 Emergency service always available </div></div></div></section>`);
      _push(ssrRenderComponent(_component_FooterBar, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5d2e946b"]]);

export { contact as default };
//# sourceMappingURL=contact-CZjcLdei.mjs.map
