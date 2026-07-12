/**
 * async-css.ts — Nitro render hook
 *
 * Defers ALL per-component CSS <link rel="stylesheet"> tags (including entry.css).
 * entry.css contains only ChatWidget styles — nothing above-the-fold — so it's safe
 * to load async. The critical styles (CSS vars, reset, fonts) are inlined via
 * inlineSSRStyles and the global main.css.
 *
 * Uses the print media trick: browser fetches CSS in background, applies on load.
 * Eliminates the remaining "Render-blocking requests" PageSpeed warning.
 */
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    html.head = html.head.map((chunk) => {
      // Match any <link> tag that has BOTH rel="stylesheet" AND href="/_nuxt/*.css"
      // Uses lookaheads so attribute order doesn't matter
      return chunk.replace(
        /<link(?=[^>]*\brel="stylesheet")(?=[^>]*\bhref="(\/_nuxt\/[^"]+\.css)")[^>]*>/g,
        (match) => {
          const href = match.match(/href="([^"]+)"/)?.[1]
          if (!href) return match
          return `<link rel="preload" as="style" href="${href}" crossorigin onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${href}" crossorigin></noscript>`
        }
      )
    })
  })
})
