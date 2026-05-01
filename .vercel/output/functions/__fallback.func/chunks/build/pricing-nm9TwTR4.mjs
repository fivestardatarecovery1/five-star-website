import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2 } from './FooterBar-DcJHaOPV.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-B7llGaxe.mjs';
import { defineComponent, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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
  __name: "pricing",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Pricing",
      description: "Transparent flat-rate data recovery pricing. No hidden fees. No data = no charge. Free evaluation on every case. Glendale, CA."
    });
    const tiers = [
      {
        name: "Standard",
        price: "$299\u2013$599",
        turnaround: "3\u20135 Business Days",
        highlight: false,
        features: [
          "Logical / software failures",
          "Deleted files & folders",
          "Formatted drives",
          "Corrupted partitions",
          "Failed OS / boot issues",
          "Free evaluation included",
          "No data = no charge"
        ]
      },
      {
        name: "Advanced",
        price: "$599\u2013$1,199",
        turnaround: "2\u20134 Business Days",
        highlight: true,
        features: [
          "Mechanical head failures",
          "PCB & electronic damage",
          "Firmware corruption",
          "SSD controller failures",
          "NAND chip recovery",
          "Priority queue",
          "No data = no charge"
        ]
      },
      {
        name: "Emergency",
        price: "$1,199\u2013$2,500+",
        turnaround: "24\u201348 Hours",
        highlight: false,
        features: [
          "Severe physical damage",
          "Cleanroom head swap",
          "Platter recovery",
          "RAID reconstruction",
          "After-hours service",
          "24/7 engineer access",
          "No data = no charge"
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      const _component_HeroSection = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_FooterBar = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-8b71ce7b>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(ssrRenderComponent(_component_HeroSection, {
        title: "Transparent, Flat-Rate Pricing",
        subtitle: "No Surprises. No Hidden Fees.",
        description: "We give you a firm quote before any work begins. You only pay if we successfully recover your data. No fine print."
      }, {
        badges: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="trust-badges" data-v-8b71ce7b${_scopeId}><span class="badge" data-v-8b71ce7b${_scopeId}>\u2705 Free Evaluation</span><span class="badge" data-v-8b71ce7b${_scopeId}>\u2705 Flat-Rate Quotes</span><span class="badge" data-v-8b71ce7b${_scopeId}>\u2705 No Data = No Charge</span></div>`);
          } else {
            return [
              createVNode("div", { class: "trust-badges" }, [
                createVNode("span", { class: "badge" }, "\u2705 Free Evaluation"),
                createVNode("span", { class: "badge" }, "\u2705 Flat-Rate Quotes"),
                createVNode("span", { class: "badge" }, "\u2705 No Data = No Charge")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section data-v-8b71ce7b><div class="container" data-v-8b71ce7b><div class="section-header" data-v-8b71ce7b><h2 class="section-title" data-v-8b71ce7b>Recovery <span class="gold-underline gold" data-v-8b71ce7b>Pricing Tiers</span></h2><p class="section-subtitle" data-v-8b71ce7b>Prices vary by device type and damage severity. All cases start with a free evaluation.</p></div><div class="pricing-grid" data-v-8b71ce7b><!--[-->`);
      ssrRenderList(tiers, (tier) => {
        _push(`<div class="${ssrRenderClass([{ featured: tier.highlight }, "pricing-card card"])}" data-v-8b71ce7b>`);
        if (tier.highlight) {
          _push(`<div class="featured-badge" data-v-8b71ce7b>Most Popular</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h3 class="tier-name" data-v-8b71ce7b>${ssrInterpolate(tier.name)}</h3><div class="tier-price" data-v-8b71ce7b>${ssrInterpolate(tier.price)}</div><div class="tier-turnaround" data-v-8b71ce7b>\u26A1 ${ssrInterpolate(tier.turnaround)}</div><ul class="tier-features" data-v-8b71ce7b><!--[-->`);
        ssrRenderList(tier.features, (f) => {
          _push(`<li data-v-8b71ce7b><span class="check" data-v-8b71ce7b>\u2713</span> ${ssrInterpolate(f)}</li>`);
        });
        _push(`<!--]--></ul>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          class: ["btn", tier.highlight ? "btn-gold" : "btn-outline"],
          style: { "width": "100%", "justify-content": "center", "margin-top": "auto" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Get Started `);
            } else {
              return [
                createTextVNode(" Get Started ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><p class="pricing-note" data-v-8b71ce7b>* Final pricing determined after free evaluation. Emergency same-day service available. Call <a href="tel:3236723000" style="${ssrRenderStyle({ "color": "var(--gold)", "font-weight": "600" })}" data-v-8b71ce7b>323-672-3000</a> for a quote.</p></div></section>`);
      _push(ssrRenderComponent(_component_FooterBar, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pricing = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8b71ce7b"]]);

export { pricing as default };
//# sourceMappingURL=pricing-nm9TwTR4.mjs.map
