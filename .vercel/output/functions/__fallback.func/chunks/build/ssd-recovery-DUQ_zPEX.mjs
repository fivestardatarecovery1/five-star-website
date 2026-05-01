import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2 } from './FooterBar-DcJHaOPV.mjs';
import { defineComponent, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "ssd-recovery",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "SSD Data Recovery",
      description: "Expert SSD data recovery for M.2, NVMe, SATA, and PCIe drives. Controller failures, NAND chip recovery, deleted partitions. No data = no charge."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      const _component_HeroSection = __nuxt_component_1;
      const _component_FooterBar = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-ce32da95>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(ssrRenderComponent(_component_HeroSection, {
        title: "SSD Data Recovery",
        subtitle: "Advanced Flash Memory Recovery.",
        description: "SSD failures are complex \u2014 controller failures, NAND wear, and firmware corruption require specialized tools. Our engineers are trained in the latest flash memory forensics."
      }, {
        badges: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="trust-badges" data-v-ce32da95${_scopeId}><span class="badge" data-v-ce32da95${_scopeId}>\u2705 NVMe &amp; M.2 Support</span><span class="badge" data-v-ce32da95${_scopeId}>\u2705 NAND Chip Recovery</span><span class="badge" data-v-ce32da95${_scopeId}>\u2705 No Data = No Charge</span></div>`);
          } else {
            return [
              createVNode("div", { class: "trust-badges" }, [
                createVNode("span", { class: "badge" }, "\u2705 NVMe & M.2 Support"),
                createVNode("span", { class: "badge" }, "\u2705 NAND Chip Recovery"),
                createVNode("span", { class: "badge" }, "\u2705 No Data = No Charge")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section data-v-ce32da95><div class="container" data-v-ce32da95><div class="section-header" data-v-ce32da95><h2 class="section-title" data-v-ce32da95>SSD Failure <span class="gold-underline gold" data-v-ce32da95>Types We Fix</span></h2></div><div class="grid-3" data-v-ce32da95><!--[-->`);
      ssrRenderList([
        { icon: "\u26A1", title: "Controller Failure", desc: "The controller chip manages all read/write operations. When it fails, we bypass it using direct NAND access techniques." },
        { icon: "\u{1F50C}", title: "Power Surge Damage", desc: "Voltage spikes can destroy the controller and NAND simultaneously. We perform chip-level recovery on damaged boards." },
        { icon: "\u{1F4BE}", title: "Firmware Corruption", desc: "Corrupted firmware can make an SSD invisible to the OS. We repair or bypass firmware using specialized programmers." },
        { icon: "\u{1F5D1}\uFE0F", title: "Accidental Deletion", desc: "TRIM-enabled SSDs present unique challenges. Our tools recover deleted data before it's permanently overwritten." },
        { icon: "\u{1F4CA}", title: "Wear Leveling Failure", desc: "Over-used SSDs reach their write cycle limit. We use advanced algorithms to extract data from worn NAND." },
        { icon: "\u{1F512}", title: "Encrypted SSDs", desc: "Self-encrypting drives and BitLocker-protected SSDs recovered when owner credentials are available." }
      ], (f) => {
        _push(`<div class="card feature-card" data-v-ce32da95><div class="feature-icon" data-v-ce32da95>${ssrInterpolate(f.icon)}</div><h3 class="feature-title" data-v-ce32da95>${ssrInterpolate(f.title)}</h3><p class="feature-desc" data-v-ce32da95>${ssrInterpolate(f.desc)}</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/ssd-recovery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ssdRecovery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ce32da95"]]);

export { ssdRecovery as default };
//# sourceMappingURL=ssd-recovery-DUQ_zPEX.mjs.map
