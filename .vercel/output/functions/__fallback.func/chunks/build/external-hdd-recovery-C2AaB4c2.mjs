import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2 } from './FooterBar-DcJHaOPV.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "external-hdd-recovery",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "External HDD Recovery",
      description: "External hard drive data recovery for WD, Seagate, LaCie, and more. Dropped, not detected, clicking. No data = no charge."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      const _component_HeroSection = __nuxt_component_1;
      const _component_FooterBar = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-78b4281d>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(ssrRenderComponent(_component_HeroSection, {
        title: "External HDD Recovery",
        subtitle: "Your Backup Just Failed \u2014 We'll Fix It.",
        description: "External drives are often your only backup. When they fail, we treat it as an emergency. Fast evaluation, transparent pricing, and no charge if we can't recover."
      }, {
        badges: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="trust-badges" data-v-78b4281d${_scopeId}><span class="badge" data-v-78b4281d${_scopeId}>\u2705 WD, Seagate, LaCie</span><span class="badge" data-v-78b4281d${_scopeId}>\u2705 Not Detected Drives</span><span class="badge" data-v-78b4281d${_scopeId}>\u2705 Free Shipping</span></div>`);
          } else {
            return [
              createVNode("div", { class: "trust-badges" }, [
                createVNode("span", { class: "badge" }, "\u2705 WD, Seagate, LaCie"),
                createVNode("span", { class: "badge" }, "\u2705 Not Detected Drives"),
                createVNode("span", { class: "badge" }, "\u2705 Free Shipping")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section data-v-78b4281d><div class="container section-header" data-v-78b4281d><h2 class="section-title" data-v-78b4281d>Supported <span class="gold-underline gold" data-v-78b4281d>External Drives</span></h2><div style="${ssrRenderStyle({ "display": "flex", "flex-wrap": "wrap", "justify-content": "center", "gap": "12px", "margin-top": "32px" })}" data-v-78b4281d><!--[-->`);
      ssrRenderList(["WD My Passport", "WD My Book", "Seagate Backup Plus", "Seagate Expansion", "LaCie Rugged", "G-Drive", "Samsung T7", "SanDisk Extreme", "Toshiba Canvio", "Buffalo MiniStation", "Iomega", "Verbatim"], (b) => {
        _push(`<span style="${ssrRenderStyle({ "background": "rgba(245,200,66,0.08)", "border": "1px solid rgba(245,200,66,0.2)", "color": "var(--gold)", "padding": "8px 20px", "border-radius": "20px", "font-size": "14px", "font-weight": "600" })}" data-v-78b4281d>${ssrInterpolate(b)}</span>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/external-hdd-recovery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const externalHddRecovery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-78b4281d"]]);

export { externalHddRecovery as default };
//# sourceMappingURL=external-hdd-recovery-C2AaB4c2.mjs.map
