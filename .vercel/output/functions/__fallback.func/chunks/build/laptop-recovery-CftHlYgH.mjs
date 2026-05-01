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
  __name: "laptop-recovery",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Laptop Data Recovery",
      description: "Laptop data recovery for Dell, HP, Lenovo, Asus, Acer, and all brands. Water spills, drops, dead drives. No data = no charge. Glendale, CA."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      const _component_HeroSection = __nuxt_component_1;
      const _component_FooterBar = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-0a32fb9c>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(ssrRenderComponent(_component_HeroSection, {
        title: "Laptop Data Recovery",
        subtitle: "Dropped It. Spilled On It. We've Got It.",
        description: "Laptop data loss happens in seconds. Whether from a drop, a spill, or just a dead drive, our team recovers your documents, photos, and files fast."
      }, {
        badges: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="trust-badges" data-v-0a32fb9c${_scopeId}><span class="badge" data-v-0a32fb9c${_scopeId}>\u2705 All Laptop Brands</span><span class="badge" data-v-0a32fb9c${_scopeId}>\u2705 Liquid Damage</span><span class="badge" data-v-0a32fb9c${_scopeId}>\u2705 Same-Day Evaluation</span></div>`);
          } else {
            return [
              createVNode("div", { class: "trust-badges" }, [
                createVNode("span", { class: "badge" }, "\u2705 All Laptop Brands"),
                createVNode("span", { class: "badge" }, "\u2705 Liquid Damage"),
                createVNode("span", { class: "badge" }, "\u2705 Same-Day Evaluation")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section data-v-0a32fb9c><div class="container" data-v-0a32fb9c><div class="section-header" data-v-0a32fb9c><h2 class="section-title" data-v-0a32fb9c>Common Laptop <span class="gold-underline gold" data-v-0a32fb9c>Scenarios</span></h2></div><div class="grid-3" data-v-0a32fb9c><!--[-->`);
      ssrRenderList([
        { icon: "\u{1F4A7}", title: "Liquid Spill", desc: "Coffee, water, juice \u2014 we've seen it all. Act fast and don't turn it on. Bring it to us immediately." },
        { icon: "\u{1F4A5}", title: "Dropped Laptop", desc: "Impact damage can shock the drive heads into a platter. We perform head replacements in our cleanroom." },
        { icon: "\u26A1", title: "Won't Turn On", desc: "Dead laptops with intact drives are straightforward. We remove and image the drive directly." },
        { icon: "\u{1F5A5}\uFE0F", title: "Broken Screen", desc: "Broken screens don't damage the drive. We connect externally and extract all your data." },
        { icon: "\u{1F525}", title: "Overheating", desc: "Thermal damage from overheating can corrupt data and damage drive electronics. We recover both." },
        { icon: "\u{1F5D1}\uFE0F", title: "Accidental Delete", desc: "Accidentally deleted important files or emptied the trash? We recover them before they're overwritten." }
      ], (s) => {
        _push(`<div class="card" data-v-0a32fb9c><div style="${ssrRenderStyle({ "font-size": "32px", "margin-bottom": "12px" })}" data-v-0a32fb9c>${ssrInterpolate(s.icon)}</div><h3 style="${ssrRenderStyle({ "font-family": "var(--font-heading)", "font-size": "16px", "font-weight": "700", "margin-bottom": "8px" })}" data-v-0a32fb9c>${ssrInterpolate(s.title)}</h3><p style="${ssrRenderStyle({ "font-size": "14px", "color": "var(--muted)", "line-height": "1.6" })}" data-v-0a32fb9c>${ssrInterpolate(s.desc)}</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/laptop-recovery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const laptopRecovery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0a32fb9c"]]);

export { laptopRecovery as default };
//# sourceMappingURL=laptop-recovery-CftHlYgH.mjs.map
