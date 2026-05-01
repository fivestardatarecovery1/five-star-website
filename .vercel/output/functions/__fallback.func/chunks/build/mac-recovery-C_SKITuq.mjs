import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2 } from './FooterBar-DcJHaOPV.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "mac-recovery",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Mac & iMac Data Recovery",
      description: "Apple Mac, MacBook, and iMac data recovery. T2, M1, M2 chip support, Fusion Drive, Time Machine. No data = no charge."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      const _component_HeroSection = __nuxt_component_1;
      const _component_FooterBar = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b8474f10>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(ssrRenderComponent(_component_HeroSection, {
        title: "Mac & iMac Data Recovery",
        subtitle: "Apple Expertise. Real Results.",
        description: "Recovering data from modern Macs requires specialized knowledge. T2 security chips, Apple Silicon, and Fusion Drives demand tools and expertise that most labs don't have. We do."
      }, {
        badges: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="trust-badges" data-v-b8474f10${_scopeId}><span class="badge" data-v-b8474f10${_scopeId}>\u2705 M1 / M2 / M3 Macs</span><span class="badge" data-v-b8474f10${_scopeId}>\u2705 T2 Chip Support</span><span class="badge" data-v-b8474f10${_scopeId}>\u2705 Fusion Drive</span></div>`);
          } else {
            return [
              createVNode("div", { class: "trust-badges" }, [
                createVNode("span", { class: "badge" }, "\u2705 M1 / M2 / M3 Macs"),
                createVNode("span", { class: "badge" }, "\u2705 T2 Chip Support"),
                createVNode("span", { class: "badge" }, "\u2705 Fusion Drive")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section data-v-b8474f10><div class="container" data-v-b8474f10><div class="section-header" data-v-b8474f10><h2 class="section-title" data-v-b8474f10>Mac Recovery <span class="gold-underline gold" data-v-b8474f10>Scenarios</span></h2></div><div class="grid-3" data-v-b8474f10><!--[-->`);
      ssrRenderList([
        { icon: "\u{1F512}", title: "T2 Chip Macs", desc: "Apple's T2 security chip encrypts the internal SSD. Recovery requires owner authentication and specialized tools." },
        { icon: "\u{1F34E}", title: "Apple Silicon (M1/M2/M3)", desc: "Soldered storage on Apple Silicon requires advanced chip-off techniques and proprietary knowledge." },
        { icon: "\u{1F300}", title: "Fusion Drive Failure", desc: "When the HDD component of a Fusion Drive fails, the entire volume disappears. We reconstruct the volume." },
        { icon: "\u{1F4BE}", title: "Time Machine Recovery", desc: "Corrupted Time Machine backups and failed Time Capsule devices recovered by our Mac specialists." },
        { icon: "\u{1F4A7}", title: "MacBook Liquid Damage", desc: "Spilled liquid on your MacBook? Shut it down immediately and call us. Time is critical." },
        { icon: "\u{1F5D1}\uFE0F", title: "macOS Recovery", desc: "Accidental deletion, emptied Trash, and corrupted macOS volumes all recovered with Mac-specific tools." }
      ], (s) => {
        _push(`<div class="card" data-v-b8474f10><div style="${ssrRenderStyle({ "font-size": "32px", "margin-bottom": "12px" })}" data-v-b8474f10>${ssrInterpolate(s.icon)}</div><h3 style="${ssrRenderStyle({ "font-family": "var(--font-heading)", "font-size": "16px", "font-weight": "700", "margin-bottom": "8px" })}" data-v-b8474f10>${ssrInterpolate(s.title)}</h3><p style="${ssrRenderStyle({ "font-size": "14px", "color": "var(--muted)", "line-height": "1.6" })}" data-v-b8474f10>${ssrInterpolate(s.desc)}</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/mac-recovery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const macRecovery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b8474f10"]]);

export { macRecovery as default };
//# sourceMappingURL=mac-recovery-C_SKITuq.mjs.map
