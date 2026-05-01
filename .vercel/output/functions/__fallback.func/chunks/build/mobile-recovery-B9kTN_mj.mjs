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
  __name: "mobile-recovery",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "iPhone & Mobile Data Recovery",
      description: "iPhone and Android data recovery for water damage, broken screens, and failed updates. Glendale, CA. No data = no charge."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      const _component_HeroSection = __nuxt_component_1;
      const _component_FooterBar = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-00bc1866>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(ssrRenderComponent(_component_HeroSection, {
        title: "iPhone & Mobile Recovery",
        subtitle: "Your Phone Died. Your Data Didn't Have To.",
        description: "Mobile data recovery is one of the most difficult and delicate processes in the field. Our engineers specialize in chip-level recovery from damaged iOS and Android devices."
      }, {
        badges: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="trust-badges" data-v-00bc1866${_scopeId}><span class="badge" data-v-00bc1866${_scopeId}>\u2705 All iPhone Models</span><span class="badge" data-v-00bc1866${_scopeId}>\u2705 Android Support</span><span class="badge" data-v-00bc1866${_scopeId}>\u2705 Water Damage</span></div>`);
          } else {
            return [
              createVNode("div", { class: "trust-badges" }, [
                createVNode("span", { class: "badge" }, "\u2705 All iPhone Models"),
                createVNode("span", { class: "badge" }, "\u2705 Android Support"),
                createVNode("span", { class: "badge" }, "\u2705 Water Damage")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section data-v-00bc1866><div class="container" data-v-00bc1866><div class="section-header" data-v-00bc1866><h2 class="section-title" data-v-00bc1866>Mobile Recovery <span class="gold-underline gold" data-v-00bc1866>Services</span></h2></div><div class="grid-3" data-v-00bc1866><!--[-->`);
      ssrRenderList([
        { icon: "\u{1F4A7}", title: "Water Damage", desc: "Dropped in water, toilet, pool, or ocean. Act fast \u2014 do not try to charge it. Bring it to us immediately." },
        { icon: "\u{1F4F1}", title: "Broken Screen", desc: "Black screen or shattered display doesn't mean the data is gone. We access the storage directly." },
        { icon: "\u{1F504}", title: "Failed iOS Update", desc: "Stuck in recovery mode or bootloop after an iOS update. We extract data without completing the update." },
        { icon: "\u{1F5D1}\uFE0F", title: "Deleted Photos & Videos", desc: "Accidentally deleted photos, messages, or videos? We recover them from device storage." },
        { icon: "\u{1F525}", title: "Overheating / Physical Damage", desc: "Burnt or severely damaged phones require chip-off recovery \u2014 extracting the NAND chip directly." },
        { icon: "\u{1F510}", title: "Locked / Disabled Phones", desc: "Forgot your passcode? Disabled after too many attempts? We work with law enforcement and owners." }
      ], (s) => {
        _push(`<div class="card" data-v-00bc1866><div style="${ssrRenderStyle({ "font-size": "32px", "margin-bottom": "12px" })}" data-v-00bc1866>${ssrInterpolate(s.icon)}</div><h3 style="${ssrRenderStyle({ "font-family": "var(--font-heading)", "font-size": "16px", "font-weight": "700", "margin-bottom": "8px" })}" data-v-00bc1866>${ssrInterpolate(s.title)}</h3><p style="${ssrRenderStyle({ "font-size": "14px", "color": "var(--muted)", "line-height": "1.6" })}" data-v-00bc1866>${ssrInterpolate(s.desc)}</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/mobile-recovery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mobileRecovery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-00bc1866"]]);

export { mobileRecovery as default };
//# sourceMappingURL=mobile-recovery-B9kTN_mj.mjs.map
