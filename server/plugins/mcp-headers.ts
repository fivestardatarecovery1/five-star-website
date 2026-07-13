/**
 * mcp-headers.ts — Inject WebMCP discovery headers on every page response
 *
 * PageSpeed's Agentic Browsing audit detects WebMCP via the HTTP Link header:
 * Link: <https://.../.well-known/mcp.json>; rel="mcp"
 *
 * Also adds the MCP server endpoint as a Link header for direct agent discovery.
 */
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html, { event }) => {
    const host = 'https://www.fivestardatarecovery.com'
    event.node.res.setHeader(
      'Link',
      [
        `<${host}/.well-known/mcp.json>; rel="mcp"`,
        `<${host}/api/mcp>; rel="mcp-server"`,
      ].join(', ')
    )
  })
})
