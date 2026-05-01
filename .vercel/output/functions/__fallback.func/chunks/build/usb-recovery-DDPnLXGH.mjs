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
  __name: "usb-recovery",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "USB Flash Drive & SD Card Recovery",
      description: "USB flash drive and SD card data recovery. Broken connectors, corrupted partitions, failed controllers. No data = no charge."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      const _component_HeroSection = __nuxt_component_1;
      const _component_FooterBar = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f01abebc>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(ssrRenderComponent(_component_HeroSection, {
        title: "USB & Flash Drive Recovery",
        subtitle: "Small Device. Big Data. Fully Recovered.",
        description: "USB flash drives and SD cards fail silently and often. Broken connectors, failed controllers, and corrupted file systems \u2014 we recover them all."
      }, {
        badges: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="trust-badges" data-v-f01abebc${_scopeId}><span class="badge" data-v-f01abebc${_scopeId}>\u2705 All USB Types</span><span class="badge" data-v-f01abebc${_scopeId}>\u2705 SD / MicroSD / CF</span><span class="badge" data-v-f01abebc${_scopeId}>\u2705 Broken Connectors</span></div>`);
          } else {
            return [
              createVNode("div", { class: "trust-badges" }, [
                createVNode("span", { class: "badge" }, "\u2705 All USB Types"),
                createVNode("span", { class: "badge" }, "\u2705 SD / MicroSD / CF"),
                createVNode("span", { class: "badge" }, "\u2705 Broken Connectors")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section data-v-f01abebc><div class="container" data-v-f01abebc><div class="section-header" data-v-f01abebc><h2 class="section-title" data-v-f01abebc>Flash Media <span class="gold-underline gold" data-v-f01abebc>We Recover</span></h2></div><div class="grid-4" data-v-f01abebc><!--[-->`);
      ssrRenderList([
        { icon: "\u{1F50C}", title: "USB Flash Drives", desc: "All capacities and brands. Broken connectors repaired or bypassed." },
        { icon: "\u{1F4F7}", title: "SD Cards", desc: "Camera memory cards from Canon, Nikon, Sony, and all other brands." },
        { icon: "\u{1F4F1}", title: "MicroSD Cards", desc: "Phone and drone storage cards, no matter how small." },
        { icon: "\u{1F4BE}", title: "CompactFlash", desc: "CF cards from professional cameras and older devices." },
        { icon: "\u{1F3AE}", title: "Gaming Cards", desc: "Nintendo Switch, PlayStation Vita, and gaming storage media." },
        { icon: "\u{1F697}", title: "Dashcam Storage", desc: "Loop recording and event data from dashcam SD cards." },
        { icon: "\u{1F3A5}", title: "Video Camera", desc: "4K footage from professional video cameras and camcorders." },
        { icon: "\u{1F6F8}", title: "Drone Storage", desc: "DJI, Parrot, and other drone media recovered completely." }
      ], (m) => {
        _push(`<div class="card" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-f01abebc><div style="${ssrRenderStyle({ "font-size": "28px", "margin-bottom": "10px" })}" data-v-f01abebc>${ssrInterpolate(m.icon)}</div><h3 style="${ssrRenderStyle({ "font-family": "var(--font-heading)", "font-size": "14px", "font-weight": "700", "margin-bottom": "6px" })}" data-v-f01abebc>${ssrInterpolate(m.title)}</h3><p style="${ssrRenderStyle({ "font-size": "13px", "color": "var(--muted)" })}" data-v-f01abebc>${ssrInterpolate(m.desc)}</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/usb-recovery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const usbRecovery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f01abebc"]]);

export { usbRecovery as default };
//# sourceMappingURL=usb-recovery-DDPnLXGH.mjs.map
