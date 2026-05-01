import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2 } from './FooterBar-DcJHaOPV.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-B7llGaxe.mjs';
import { defineComponent, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Blog \u2014 Data Recovery Tips & Guides",
      description: "Expert data recovery tips, guides, and industry news from Five Star Data Recovery. Learn how to protect and recover your data."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      const _component_HeroSection = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_FooterBar = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-76f15647>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(ssrRenderComponent(_component_HeroSection, {
        title: "Data Recovery Blog",
        subtitle: "Expert Tips & Guides.",
        description: "Stay informed with the latest data recovery advice, hardware guides, and industry insights from our team of certified engineers."
      }, null, _parent));
      _push(`<section data-v-76f15647><div class="container" data-v-76f15647><div class="section-header" data-v-76f15647><h2 class="section-title" data-v-76f15647>Latest <span class="gold-underline gold" data-v-76f15647>Articles</span></h2></div><div class="grid-3" data-v-76f15647><!--[-->`);
      ssrRenderList([
        { title: "What To Do When Your Hard Drive Starts Clicking", date: "May 1, 2025", desc: "A clicking hard drive is a medical emergency for your data. Here's exactly what to do \u2014 and what NOT to do \u2014 in the next 60 minutes.", href: "/blog/clicking-hard-drive" },
        { title: "SSD vs HDD: Which Is Harder to Recover?", date: "April 28, 2025", desc: "SSDs and HDDs fail in very different ways. We break down the recovery complexity and what it means for your chances of getting data back.", href: "/blog/ssd-vs-hdd-recovery" },
        { title: "RAID Recovery: The Complete Business Guide", date: "April 25, 2025", desc: "RAID arrays provide redundancy, but they're not immune to catastrophic failure. Here's what every IT manager needs to know.", href: "/blog/raid-recovery-guide" }
      ], (post) => {
        _push(`<div class="card blog-card" data-v-76f15647><div class="blog-date" data-v-76f15647>${ssrInterpolate(post.date)}</div><h3 class="blog-title" data-v-76f15647>${ssrInterpolate(post.title)}</h3><p class="blog-excerpt" data-v-76f15647>${ssrInterpolate(post.desc)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: post.href,
          class: "blog-link"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Read More \u2192`);
            } else {
              return [
                createTextVNode("Read More \u2192")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-76f15647"]]);

export { index as default };
//# sourceMappingURL=index-CxkysMsz.mjs.map
