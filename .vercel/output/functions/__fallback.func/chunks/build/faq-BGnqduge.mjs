import { _ as __nuxt_component_0, a as __nuxt_component_1, b as __nuxt_component_2 } from './FooterBar-DcJHaOPV.mjs';
import { defineComponent, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "FAQ \u2014 Data Recovery Questions Answered",
      description: "Frequently asked questions about data recovery pricing, process, turnaround times, and more. Five Star Data Recovery, Glendale CA."
    });
    const faqs = [
      { q: "How much does data recovery cost?", a: "Our pricing depends on the type of device and severity of damage. Standard logical recovery starts at $299. Advanced mechanical recovery ranges from $599\u2013$1,199. Emergency service is $1,199\u2013$2,500+. All cases receive a free evaluation and firm quote before work begins." },
      { q: 'What does "No Data = No Charge" mean?', a: "If our engineers determine that the data cannot be recovered \u2014 or if we attempt recovery and fail \u2014 you pay absolutely nothing. This policy applies to all cases." },
      { q: "How long does data recovery take?", a: "Standard turnaround is 3-5 business days. Rush service (24-48 hours) is available for urgent cases. The timeline depends on the type and extent of damage." },
      { q: "Do I need to bring my device in person?", a: "No. We provide free prepaid shipping labels for customers nationwide. Just contact us and we'll email you a shipping label. We pay for return shipping too." },
      { q: "Is my data safe with you?", a: "Your privacy is our highest priority. We operate under strict confidentiality policies, and we can sign an NDA upon request. Your data is never shared, sold, or accessed beyond what's necessary for recovery." },
      { q: "My hard drive is clicking \u2014 what should I do?", a: "Stop using it immediately! A clicking drive has failing read/write heads that are scratching the platters. Every spin causes more damage. Power it down and contact us right away." },
      { q: "Can you recover data from a water-damaged drive?", a: "Yes \u2014 but time is critical. Water causes corrosion, and the longer you wait, the worse it gets. Do not try to dry it out or turn it on. Contact us immediately." },
      { q: "What file types can you recover?", a: "We recover all file types: documents, photos, videos, databases, emails, CAD files, audio, and more. We also recover entire file system structures, not just individual files." },
      { q: "Do you offer corporate / enterprise contracts?", a: "Yes. We work with businesses of all sizes and offer priority service agreements for enterprise clients. Contact us to discuss a custom contract." },
      { q: "What if only some of my data is recovered?", a: "We present you with a full list of recoverable files before you pay anything. You can decide whether to proceed based on what we've found. Partial recovery is sometimes the reality \u2014 and we're honest about it." }
    ];
    const openFaq = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      const _component_HeroSection = __nuxt_component_1;
      const _component_FooterBar = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-f83b0a53>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      _push(ssrRenderComponent(_component_HeroSection, {
        title: "Frequently Asked Questions",
        subtitle: "Honest Answers to Real Questions.",
        description: "We believe in full transparency. Here are the questions we get asked most \u2014 answered clearly and without jargon."
      }, null, _parent));
      _push(`<section data-v-f83b0a53><div class="container" data-v-f83b0a53><div class="faq-list" data-v-f83b0a53><!--[-->`);
      ssrRenderList(faqs, (faq2, i) => {
        _push(`<div class="${ssrRenderClass([{ open: unref(openFaq) === i }, "faq-item"])}" data-v-f83b0a53><button class="faq-question" data-v-f83b0a53><span data-v-f83b0a53>${ssrInterpolate(faq2.q)}</span><span class="faq-icon" data-v-f83b0a53>${ssrInterpolate(unref(openFaq) === i ? "\u2212" : "+")}</span></button>`);
        if (unref(openFaq) === i) {
          _push(`<div class="faq-answer" data-v-f83b0a53>${ssrInterpolate(faq2.a)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="faq-cta" data-v-f83b0a53><p data-v-f83b0a53>Still have questions? We&#39;re here 24/7.</p><a href="tel:3236723000" class="btn btn-gold" data-v-f83b0a53>Call 323-672-3000</a></div></div></section>`);
      _push(ssrRenderComponent(_component_FooterBar, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faq = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f83b0a53"]]);

export { faq as default };
//# sourceMappingURL=faq-BGnqduge.mjs.map
