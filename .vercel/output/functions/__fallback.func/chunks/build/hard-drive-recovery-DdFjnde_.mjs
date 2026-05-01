import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2 } from './FooterBar-DcJHaOPV.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as useSeoMeta } from './v3-BlJdoZgg.mjs';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-B7llGaxe.mjs';
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
  __name: "hard-drive-recovery",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Hard Drive Recovery",
      description: "Professional hard drive data recovery in Glendale, CA. Clicking drives, failed heads, firmware issues, water damage. No data = no charge. Call 323-672-3000."
    });
    const features = [
      { icon: "\u{1F527}", title: "Head Replacement", desc: "Failed read/write heads replaced in our ISO Class 5 cleanroom with compatible donor parts." },
      { icon: "\u{1F4BB}", title: "Firmware Recovery", desc: "Corrupted firmware modules repaired using specialized hardware tools and manufacturer data." },
      { icon: "\u{1F4A7}", title: "Water Damage", desc: "Drives submerged in water or exposed to liquid damage treated before corrosion sets in." },
      { icon: "\u{1F50A}", title: "Clicking Drives", desc: "Clicking or grinding noises indicate head failure \u2014 we perform emergency surgery to recover data." },
      { icon: "\u{1F5C3}\uFE0F", title: "Partition Recovery", desc: "Lost or corrupted partitions, MBR damage, and accidental formatting reversed." },
      { icon: "\u{1F525}", title: "Physical Damage", desc: "Fire and extreme heat damage, bent platters, and trauma from drops and impacts." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      const _component_HeroSection = __nuxt_component_1;
      const _component_FooterBar = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1aeec080>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(ssrRenderComponent(_component_HeroSection, {
        title: "Hard Drive Data Recovery",
        subtitle: "We Recover What Others Can't.",
        description: "From clicking and grinding drives to water-damaged platters and failed PCBs \u2014 our certified engineers use cleanroom technology to recover your critical data."
      }, {
        badges: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="trust-badges" data-v-1aeec080${_scopeId}><span class="badge" data-v-1aeec080${_scopeId}>\u2705 No Data = No Charge</span><span class="badge" data-v-1aeec080${_scopeId}>\u2705 ISO Class 5 Cleanroom</span><span class="badge" data-v-1aeec080${_scopeId}>\u2705 All HDD Brands</span></div>`);
          } else {
            return [
              createVNode("div", { class: "trust-badges" }, [
                createVNode("span", { class: "badge" }, "\u2705 No Data = No Charge"),
                createVNode("span", { class: "badge" }, "\u2705 ISO Class 5 Cleanroom"),
                createVNode("span", { class: "badge" }, "\u2705 All HDD Brands")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section data-v-1aeec080><div class="container" data-v-1aeec080><div class="section-header" data-v-1aeec080><h2 class="section-title" data-v-1aeec080>What We <span class="gold-underline gold" data-v-1aeec080>Recover</span></h2><p class="section-subtitle" data-v-1aeec080>We handle all types of hard drive failures \u2014 mechanical, electrical, logical, and physical.</p></div><div class="grid-3" data-v-1aeec080><!--[-->`);
      ssrRenderList(features, (f) => {
        _push(`<div class="card feature-card" data-v-1aeec080><div class="feature-icon" data-v-1aeec080>${ssrInterpolate(f.icon)}</div><h3 class="feature-title" data-v-1aeec080>${ssrInterpolate(f.title)}</h3><p class="feature-desc" data-v-1aeec080>${ssrInterpolate(f.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="brands-section" data-v-1aeec080><div class="container" data-v-1aeec080><h2 class="section-title" style="${ssrRenderStyle({ "text-align": "center", "margin-bottom": "32px" })}" data-v-1aeec080>Supported <span class="gold" data-v-1aeec080>Brands &amp; Models</span></h2><div class="brand-list" data-v-1aeec080><!--[-->`);
      ssrRenderList(["Western Digital", "Seagate", "Toshiba", "HGST", "Samsung", "Maxtor", "Hitachi", "Fujitsu", "IBM", "LaCie"], (b) => {
        _push(`<span class="brand-pill" data-v-1aeec080>${ssrInterpolate(b)}</span>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/hard-drive-recovery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const hardDriveRecovery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1aeec080"]]);

export { hardDriveRecovery as default };
//# sourceMappingURL=hard-drive-recovery-DdFjnde_.mjs.map
