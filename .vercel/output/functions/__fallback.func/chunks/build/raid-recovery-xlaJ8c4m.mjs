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
  __name: "raid-recovery",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "RAID & Server Recovery",
      description: "Professional RAID 0, 1, 5, 6, 10 and NAS array recovery in Glendale, CA. Enterprise data recovery with fast turnaround. No data = no charge."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      const _component_HeroSection = __nuxt_component_1;
      const _component_FooterBar = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-fa8043b9>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(ssrRenderComponent(_component_HeroSection, {
        title: "RAID & Server Recovery",
        subtitle: "Enterprise Data Recovery, Done Right.",
        description: "RAID failures are catastrophic for businesses. Our engineers specialize in all RAID levels \u2014 from simple mirror failures to complex parity reconstructions. We minimize your downtime."
      }, {
        badges: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="trust-badges" data-v-fa8043b9${_scopeId}><span class="badge" data-v-fa8043b9${_scopeId}>\u2705 All RAID Levels</span><span class="badge" data-v-fa8043b9${_scopeId}>\u2705 NAS &amp; SAN Recovery</span><span class="badge" data-v-fa8043b9${_scopeId}>\u2705 Emergency 24/7</span></div>`);
          } else {
            return [
              createVNode("div", { class: "trust-badges" }, [
                createVNode("span", { class: "badge" }, "\u2705 All RAID Levels"),
                createVNode("span", { class: "badge" }, "\u2705 NAS & SAN Recovery"),
                createVNode("span", { class: "badge" }, "\u2705 Emergency 24/7")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section data-v-fa8043b9><div class="container" data-v-fa8043b9><div class="section-header" data-v-fa8043b9><h2 class="section-title" data-v-fa8043b9>RAID Levels <span class="gold-underline gold" data-v-fa8043b9>We Support</span></h2></div><div class="grid-4" data-v-fa8043b9><!--[-->`);
      ssrRenderList([
        { level: "RAID 0", desc: "Stripe sets \u2014 no redundancy. We reconstruct the stripe layout to recover all data." },
        { level: "RAID 1", desc: "Mirror sets. Even with both drives failing, we can often extract data via imaging." },
        { level: "RAID 5", desc: "Single-parity arrays. We rebuild parity and recover data even from 2+ drive failures." },
        { level: "RAID 6", desc: "Double-parity. Handles two simultaneous drive failures with full data reconstruction." },
        { level: "RAID 10", desc: "Mirrored stripes. We recover from multiple drive failures within the array." },
        { level: "NAS Devices", desc: "Synology, QNAP, Buffalo, Western Digital My Cloud \u2014 all supported." },
        { level: "SAN Storage", desc: "Enterprise SAN arrays from NetApp, EMC, HP StorageWorks, and more." },
        { level: "ZFS / BTRFS", desc: "Modern filesystem RAID recovered with full metadata and data integrity checks." }
      ], (r) => {
        _push(`<div class="card raid-card" data-v-fa8043b9><h3 class="raid-level" data-v-fa8043b9>${ssrInterpolate(r.level)}</h3><p class="raid-desc" data-v-fa8043b9>${ssrInterpolate(r.desc)}</p></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/raid-recovery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const raidRecovery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fa8043b9"]]);

export { raidRecovery as default };
//# sourceMappingURL=raid-recovery-xlaJ8c4m.mjs.map
