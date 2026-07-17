import { defineNitroPlugin } from 'nitropack/runtime'

/**
 * async-css: Remove Nuxt CSS link tags from the HTML entirely.
 *
 * WHY: experimental.inlineStyles=true inlines ALL component CSS into <style>
 * tags in the SSR HTML. The external <link rel="stylesheet"> tags that Nuxt
 * also outputs are 100% redundant on the first page load — every style is
 * already in the <head> as inline <style> blocks.
 *
 * THE LCP PROBLEM WITH onload PATTERN:
 * The previous approach converted <link rel="stylesheet"> to async preloads
 * with onload="this.onload=null;this.rel='stylesheet'". When the CSS file
 * finished downloading (at ~2s on slow mobile), the onload fired and applied
 * the stylesheet, triggering a style recalculation + repaint. Chrome's LCP
 * observer sees this repaint and records it as the new LCP time — causing
 * the 2,000ms element render delay we've been seeing on every page.
 *
 * THE FIX:
 * Remove the <link> tags entirely. Styles are already inlined. For
 * client-side navigation, Nuxt's JS runtime handles styles via dynamic
 * imports — the <link> tags are not needed by JS-enabled browsers.
 * <noscript> fallback retained for JS-disabled environments.
 *
 * SCOPE: Only /_nuxt/*.css links (Nuxt-generated component CSS).
 */
export default defineNitroPlugin((nitroApp) => {
  // @ts-ignore — render:response is a valid Nitro hook
  nitroApp.hooks.hook('render:response', (response: { body: string }) => {
    if (typeof response.body !== 'string') return

    // Remove Nuxt CSS link tags entirely — styles already inlined via inlineStyles:true
    // Keep noscript fallback for JS-disabled browsers
    response.body = response.body.replace(
      /<link rel="stylesheet" href="(\/_nuxt\/[^"]+\.css)"([^>]*)>/g,
      (_match: string, href: string) =>
        `<noscript><link rel="stylesheet" href="${href}"></noscript>`
    )
  })
})
