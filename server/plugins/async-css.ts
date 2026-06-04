/**
 * async-css.ts — Nitro render hook
 *
 * Converts per-component CSS <link rel="stylesheet"> tags to async (non-blocking) loads.
 * The entry.css is kept blocking (it's the tiny global reset/vars, needed immediately).
 * All component-level CSS chunks (NavBar, HeroSection, etc.) are deferred via the
 * print media trick: browser downloads them in the background and applies on load.
 *
 * This eliminates the "Render-blocking requests" PageSpeed warning for component CSS.
 */
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    html.head = html.head.map((chunk) => {
      return chunk.replace(
        /<link rel="stylesheet" href="\/_nuxt\/(?!entry)[^"]*" crossorigin>/g,
        (match) => {
          const href = match.match(/href="([^"]+)"/)?.[1]
          if (!href) return match
          // Load async via print media trick — browser fetches in background, applies on load
          return `<link rel="preload" as="style" href="${href}" crossorigin onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${href}" crossorigin></noscript>`
        }
      )
    })
  })
})
