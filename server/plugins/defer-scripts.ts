/**
 * defer-scripts.ts — Nitro render hook
 *
 * Adds explicit `defer` to any <script type="module"> in <head> that doesn't
 * already have it. `type="module"` implies defer per spec, but audit tools
 * (PageSpeed, Wendy, etc.) flag the missing attribute regardless.
 *
 * Skips inline scripts (no src), JSON blobs, and scripts that already have defer.
 */
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {
    html.head = html.head.map((chunk) => {
      return chunk.replace(
        /<script\b([^>]*\btype="module"[^>]*)>/g,
        (match, attrs) => {
          // Skip inline scripts (no src) and scripts already deferred
          if (!attrs.includes('src=') || attrs.includes('defer')) return match
          return `<script${attrs} defer>`
        }
      )
    })
  })
})
