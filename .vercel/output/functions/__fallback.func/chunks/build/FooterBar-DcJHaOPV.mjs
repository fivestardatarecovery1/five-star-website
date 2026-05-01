import { _ as __nuxt_component_0$1 } from './nuxt-link-B7llGaxe.mjs';
import { defineComponent, ref, watch, mergeProps, withCtx, createVNode, createTextVNode, unref, toDisplayString, reactive, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderSlot, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _export_sfc, d as useRoute } from './server.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';

const _imports_0 = publicAssetsURL("/logo.png");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const menuOpen = ref(false);
    const servicesOpen = ref(false);
    const services = [
      { label: "Hard Drive Recovery", href: "/services/hard-drive-recovery" },
      { label: "SSD Recovery", href: "/services/ssd-recovery" },
      { label: "RAID Recovery", href: "/services/raid-recovery" },
      { label: "Laptop Recovery", href: "/services/laptop-recovery" },
      { label: "External HDD Recovery", href: "/services/external-hdd-recovery" },
      { label: "Mac / iMac Recovery", href: "/services/mac-recovery" },
      { label: "iPhone & Mobile Recovery", href: "/services/mobile-recovery" },
      { label: "USB & Flash Recovery", href: "/services/usb-recovery" }
    ];
    function closeAll() {
      menuOpen.value = false;
      servicesOpen.value = false;
    }
    watch(() => route.path, closeAll);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar" }, _attrs))} data-v-5aa717cd><div class="container nav-inner" data-v-5aa717cd>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "nav-logo",
        onClick: closeAll
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} alt="Five Star Data Recovery" height="44" data-v-5aa717cd${_scopeId}><span class="nav-logo-text" data-v-5aa717cd${_scopeId}>Five Star Data Recovery</span>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                alt: "Five Star Data Recovery",
                height: "44"
              }),
              createVNode("span", { class: "nav-logo-text" }, "Five Star Data Recovery")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<ul class="nav-links" data-v-5aa717cd><li data-v-5aa717cd>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="has-dropdown" data-v-5aa717cd><span class="dropdown-trigger" data-v-5aa717cd>Services <svg width="12" height="8" viewBox="0 0 12 8" fill="none" data-v-5aa717cd><path d="M1 1l5 5 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" data-v-5aa717cd></path></svg></span>`);
      if (unref(servicesOpen)) {
        _push(`<ul class="dropdown" data-v-5aa717cd><!--[-->`);
        ssrRenderList(services, (s) => {
          _push(`<li data-v-5aa717cd>`);
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: s.href
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(s.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(s.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li><li data-v-5aa717cd>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/pricing" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Pricing`);
          } else {
            return [
              createTextVNode("Pricing")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-5aa717cd>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li data-v-5aa717cd>`);
      _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul><div class="nav-cta" data-v-5aa717cd><a href="tel:3236723000" class="nav-phone" data-v-5aa717cd>323-672-3000</a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn btn-gold nav-quote-btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Get Free Quote`);
          } else {
            return [
              createTextVNode("Get Free Quote")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="${ssrRenderClass([{ open: unref(menuOpen) }, "hamburger"])}" aria-label="Toggle menu" data-v-5aa717cd><span data-v-5aa717cd></span><span data-v-5aa717cd></span><span data-v-5aa717cd></span></button></div>`);
      if (unref(menuOpen)) {
        _push(`<div class="mobile-menu" data-v-5aa717cd>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          onClick: closeAll
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Home`);
            } else {
              return [
                createTextVNode("Home")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="mobile-section-label" data-v-5aa717cd>Services</div><!--[-->`);
        ssrRenderList(services, (s) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: s.href,
            to: s.href,
            onClick: closeAll
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(s.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(s.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]-->`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/pricing",
          onClick: closeAll
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Pricing`);
            } else {
              return [
                createTextVNode("Pricing")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/about",
          onClick: closeAll
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`About`);
            } else {
              return [
                createTextVNode("About")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          onClick: closeAll
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Contact`);
            } else {
              return [
                createTextVNode("Contact")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<a href="tel:3236723000" class="mobile-phone" data-v-5aa717cd>\u{1F4DE} 323-672-3000</a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5aa717cd"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {},
    description: {}
  },
  setup(__props) {
    const submitted = ref(false);
    const form = reactive({
      deviceType: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      issue: "",
      description: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero" }, _attrs))} data-v-11459b1e><div class="container hero-inner" data-v-11459b1e><div class="hero-copy" data-v-11459b1e><div class="hero-badge" data-v-11459b1e>\u2B50 Trusted Data Recovery Experts</div><h1 class="hero-title" data-v-11459b1e>${ssrInterpolate(__props.title)}</h1><p class="hero-subtitle" data-v-11459b1e>${ssrInterpolate(__props.subtitle)}</p>`);
      if (__props.description) {
        _push(`<p class="hero-description" data-v-11459b1e>${ssrInterpolate(__props.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "badges", {}, null, _push, _parent);
      _push(`</div><div class="hero-form-wrap" data-v-11459b1e>`);
      if (!unref(submitted)) {
        _push(`<div class="hero-form-card" data-v-11459b1e><h3 class="form-title" data-v-11459b1e>Request a Free <span class="form-title-underline" data-v-11459b1e>Consultation</span></h3><p class="form-intro" data-v-11459b1e>Get a free quote within 1 hour. No commitment required.</p><form class="consult-form" data-v-11459b1e><div class="form-group" data-v-11459b1e><label data-v-11459b1e>Select Your Device Type</label><select required data-v-11459b1e><option value="" disabled data-v-11459b1e${ssrIncludeBooleanAttr(Array.isArray(unref(form).deviceType) ? ssrLooseContain(unref(form).deviceType, "") : ssrLooseEqual(unref(form).deviceType, "")) ? " selected" : ""}>\u2014 Choose device \u2014</option><option data-v-11459b1e${ssrIncludeBooleanAttr(Array.isArray(unref(form).deviceType) ? ssrLooseContain(unref(form).deviceType, null) : ssrLooseEqual(unref(form).deviceType, null)) ? " selected" : ""}>Hard Drive</option><option data-v-11459b1e${ssrIncludeBooleanAttr(Array.isArray(unref(form).deviceType) ? ssrLooseContain(unref(form).deviceType, null) : ssrLooseEqual(unref(form).deviceType, null)) ? " selected" : ""}>SSD</option><option data-v-11459b1e${ssrIncludeBooleanAttr(Array.isArray(unref(form).deviceType) ? ssrLooseContain(unref(form).deviceType, null) : ssrLooseEqual(unref(form).deviceType, null)) ? " selected" : ""}>RAID/Server</option><option data-v-11459b1e${ssrIncludeBooleanAttr(Array.isArray(unref(form).deviceType) ? ssrLooseContain(unref(form).deviceType, null) : ssrLooseEqual(unref(form).deviceType, null)) ? " selected" : ""}>Laptop</option><option data-v-11459b1e${ssrIncludeBooleanAttr(Array.isArray(unref(form).deviceType) ? ssrLooseContain(unref(form).deviceType, null) : ssrLooseEqual(unref(form).deviceType, null)) ? " selected" : ""}>External HDD</option><option data-v-11459b1e${ssrIncludeBooleanAttr(Array.isArray(unref(form).deviceType) ? ssrLooseContain(unref(form).deviceType, null) : ssrLooseEqual(unref(form).deviceType, null)) ? " selected" : ""}>Mac/iMac</option><option data-v-11459b1e${ssrIncludeBooleanAttr(Array.isArray(unref(form).deviceType) ? ssrLooseContain(unref(form).deviceType, null) : ssrLooseEqual(unref(form).deviceType, null)) ? " selected" : ""}>iPhone/Mobile</option><option data-v-11459b1e${ssrIncludeBooleanAttr(Array.isArray(unref(form).deviceType) ? ssrLooseContain(unref(form).deviceType, null) : ssrLooseEqual(unref(form).deviceType, null)) ? " selected" : ""}>USB Flash Drive</option><option data-v-11459b1e${ssrIncludeBooleanAttr(Array.isArray(unref(form).deviceType) ? ssrLooseContain(unref(form).deviceType, null) : ssrLooseEqual(unref(form).deviceType, null)) ? " selected" : ""}>SD Card</option><option data-v-11459b1e${ssrIncludeBooleanAttr(Array.isArray(unref(form).deviceType) ? ssrLooseContain(unref(form).deviceType, null) : ssrLooseEqual(unref(form).deviceType, null)) ? " selected" : ""}>NAS Device</option><option data-v-11459b1e${ssrIncludeBooleanAttr(Array.isArray(unref(form).deviceType) ? ssrLooseContain(unref(form).deviceType, null) : ssrLooseEqual(unref(form).deviceType, null)) ? " selected" : ""}>Other</option></select></div><div class="form-row" data-v-11459b1e><div class="form-group" data-v-11459b1e><label data-v-11459b1e>First Name</label><input${ssrRenderAttr("value", unref(form).firstName)} type="text" placeholder="John" required data-v-11459b1e></div><div class="form-group" data-v-11459b1e><label data-v-11459b1e>Last Name</label><input${ssrRenderAttr("value", unref(form).lastName)} type="text" placeholder="Smith" required data-v-11459b1e></div></div><div class="form-group" data-v-11459b1e><label data-v-11459b1e>Email Address</label><input${ssrRenderAttr("value", unref(form).email)} type="email" placeholder="john@email.com" required data-v-11459b1e></div><div class="form-group" data-v-11459b1e><label data-v-11459b1e>Phone Number</label><input${ssrRenderAttr("value", unref(form).phone)} type="tel" placeholder="(555) 000-0000" required data-v-11459b1e></div><div class="form-group" data-v-11459b1e><label data-v-11459b1e>Select Your Issue</label><select required data-v-11459b1e><option value="" disabled data-v-11459b1e${ssrIncludeBooleanAttr(Array.isArray(unref(form).issue) ? ssrLooseContain(unref(form).issue, "") : ssrLooseEqual(unref(form).issue, "")) ? " selected" : ""}>\u2014 Choose issue \u2014</option><option data-v-11459b1e${ssrIncludeBooleanAttr(Array.isArray(unref(form).issue) ? ssrLooseContain(unref(form).issue, null) : ssrLooseEqual(unref(form).issue, null)) ? " selected" : ""}>Not Detected</option><option data-v-11459b1e${ssrIncludeBooleanAttr(Array.isArray(unref(form).issue) ? ssrLooseContain(unref(form).issue, null) : ssrLooseEqual(unref(form).issue, null)) ? " selected" : ""}>Clicking/Grinding Noise</option><option data-v-11459b1e${ssrIncludeBooleanAttr(Array.isArray(unref(form).issue) ? ssrLooseContain(unref(form).issue, null) : ssrLooseEqual(unref(form).issue, null)) ? " selected" : ""}>Water Damage</option><option data-v-11459b1e${ssrIncludeBooleanAttr(Array.isArray(unref(form).issue) ? ssrLooseContain(unref(form).issue, null) : ssrLooseEqual(unref(form).issue, null)) ? " selected" : ""}>Corrupted Files</option><option data-v-11459b1e${ssrIncludeBooleanAttr(Array.isArray(unref(form).issue) ? ssrLooseContain(unref(form).issue, null) : ssrLooseEqual(unref(form).issue, null)) ? " selected" : ""}>Accidental Deletion</option><option data-v-11459b1e${ssrIncludeBooleanAttr(Array.isArray(unref(form).issue) ? ssrLooseContain(unref(form).issue, null) : ssrLooseEqual(unref(form).issue, null)) ? " selected" : ""}>Physical Damage</option><option data-v-11459b1e${ssrIncludeBooleanAttr(Array.isArray(unref(form).issue) ? ssrLooseContain(unref(form).issue, null) : ssrLooseEqual(unref(form).issue, null)) ? " selected" : ""}>Not Spinning</option><option data-v-11459b1e${ssrIncludeBooleanAttr(Array.isArray(unref(form).issue) ? ssrLooseContain(unref(form).issue, null) : ssrLooseEqual(unref(form).issue, null)) ? " selected" : ""}>Other</option></select></div><div class="form-group" data-v-11459b1e><label data-v-11459b1e>Describe Your Issue</label><textarea rows="3" placeholder="Briefly describe what happened and what data you need recovered..." data-v-11459b1e>${ssrInterpolate(unref(form).description)}</textarea></div><button type="submit" class="form-submit" data-v-11459b1e> Get My Free Quote \u2192 </button></form></div>`);
      } else {
        _push(`<div class="form-success" data-v-11459b1e><div class="success-icon" data-v-11459b1e>\u2705</div><h3 data-v-11459b1e>Thank you!</h3><p data-v-11459b1e>We&#39;ll be in touch within 1 hour.</p><p class="success-phone" data-v-11459b1e>Or call us now: <a href="tel:3236723000" data-v-11459b1e>323-672-3000</a></p></div>`);
      }
      _push(`</div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-11459b1e"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-17fbec4c><div class="container footer-grid" data-v-17fbec4c><div class="footer-brand" data-v-17fbec4c><img${ssrRenderAttr("src", _imports_0)} alt="Five Star Data Recovery" class="footer-logo" data-v-17fbec4c><p class="footer-tagline" data-v-17fbec4c>Recovering what can&#39;t be replaced \u2014 professional data recovery services you can trust.</p><div class="footer-stars" data-v-17fbec4c>\u2605\u2605\u2605\u2605\u2605</div><p class="footer-rating-text" data-v-17fbec4c>5.0 Rating \xB7 21,000+ Drives Recovered</p></div><div class="footer-col" data-v-17fbec4c><h4 class="footer-heading" data-v-17fbec4c>Common Issues</h4><ul data-v-17fbec4c><li data-v-17fbec4c>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/services/hard-drive-recovery" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Not Detected / Not Spinning`);
      } else {
        return [
          createTextVNode("Not Detected / Not Spinning")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-17fbec4c>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/services/hard-drive-recovery" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Clicking / Grinding Noise`);
      } else {
        return [
          createTextVNode("Clicking / Grinding Noise")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-17fbec4c>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/services/hard-drive-recovery" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Water Damage Recovery`);
      } else {
        return [
          createTextVNode("Water Damage Recovery")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-17fbec4c>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/services/hard-drive-recovery" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Corrupted / Deleted Files`);
      } else {
        return [
          createTextVNode("Corrupted / Deleted Files")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-17fbec4c>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/services/raid-recovery" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`RAID Array Failure`);
      } else {
        return [
          createTextVNode("RAID Array Failure")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-17fbec4c>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/services/ssd-recovery" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`SSD Not Recognized`);
      } else {
        return [
          createTextVNode("SSD Not Recognized")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-17fbec4c>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/services/mobile-recovery" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Phone Data Loss`);
      } else {
        return [
          createTextVNode("Phone Data Loss")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="footer-col" data-v-17fbec4c><h4 class="footer-heading" data-v-17fbec4c>Helpful Links</h4><ul data-v-17fbec4c><li data-v-17fbec4c>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-17fbec4c>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/pricing" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pricing`);
      } else {
        return [
          createTextVNode("Pricing")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-17fbec4c>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About Us`);
      } else {
        return [
          createTextVNode("About Us")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-17fbec4c>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contact`);
      } else {
        return [
          createTextVNode("Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-17fbec4c>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/blog" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Blog`);
      } else {
        return [
          createTextVNode("Blog")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li data-v-17fbec4c>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/faq" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`FAQ`);
      } else {
        return [
          createTextVNode("FAQ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="footer-col" data-v-17fbec4c><h4 class="footer-heading" data-v-17fbec4c>Contact Us</h4><ul class="contact-list" data-v-17fbec4c><li data-v-17fbec4c><span class="contact-icon" data-v-17fbec4c>\u{1F4CD}</span><span data-v-17fbec4c>1731 S Brand Blvd Suite 100<br data-v-17fbec4c>Glendale, CA 91204</span></li><li data-v-17fbec4c><span class="contact-icon" data-v-17fbec4c>\u{1F4DE}</span><a href="tel:3236723000" data-v-17fbec4c>323-672-3000</a></li><li data-v-17fbec4c><span class="contact-icon" data-v-17fbec4c>\u23F0</span><span data-v-17fbec4c>Available 24/7/365</span></li><li data-v-17fbec4c><span class="contact-icon" data-v-17fbec4c>\u2708\uFE0F</span><span data-v-17fbec4c>Free Nationwide Shipping</span></li></ul></div></div><div class="footer-bottom" data-v-17fbec4c><div class="container footer-bottom-inner" data-v-17fbec4c><p data-v-17fbec4c>\xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Five Star Data Recovery. All rights reserved.</p><p class="footer-disclaimer" data-v-17fbec4c>No data recovered = No charge. Results may vary by case complexity.</p></div></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterBar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-17fbec4c"]]);

export { __nuxt_component_0 as _, __nuxt_component_1 as a, __nuxt_component_2 as b };
//# sourceMappingURL=FooterBar-DcJHaOPV.mjs.map
