import { defineNitroPlugin } from 'nitropack/runtime'

/**
 * async-css: Convert render-blocking Nuxt CSS link tags to non-blocking preload pattern.
 *
 * WHY: experimental.inlineStyles=true inlines ALL component CSS into <style> tags in the
 * SSR HTML, but still outputs <link rel="stylesheet"> for those same files. Those linked
 * files are render-blocking — the browser can't paint until they download (200-400ms on
 * slow mobile), which pushes LCP out by ~1,900ms.
 *
 * FIX: Convert <link rel="stylesheet" href="/_nuxt/*.css"> to preload + onload so the
 * browser paints the SSR HTML (including the hero image) immediately, then quietly loads
 * the CSS in the background for client-side navigation. Since the styles are already
 * inlined, the onload recalculation is invisible — same styles, no layout shift.
 *
 * WHY render:response instead of render:html:
 * Nuxt adds the CSS <link> tags AFTER the render:html hook fires (via the unhead SSR
 * serialization step). Using render:response processes the complete, final HTML body
 * so we catch all link tags regardless of when Nuxt added them.
 *
 * SCOPE: Only /_nuxt/*.css links (Nuxt-generated component CSS). Does NOT touch any
 * third-party or manually added stylesheets.
 */
export default defineNitroPlugin((nitroApp) => {
  // @ts-ignore — render:response is a valid Nitro hook
  nitroApp.hooks.hook('render:response', (response: { body: string }) => {
    if (typeof response.body !== 'string') return

    response.body = response.body.replace(
      /<link rel="stylesheet" href="(\/_nuxt\/[^"]+\.css)"([^>]*)>/g,
      (_match: string, href: string, rest: string) =>
        // preload → onload swap (industry-standard non-blocking CSS pattern)
        // noscript fallback for JS-disabled environments
        `<link rel="preload" as="style" href="${href}"${rest} onload="this.onload=null;this.rel='stylesheet'">` +
        `<noscript><link rel="stylesheet" href="${href}"></noscript>`
    )
  })
})
