/**
 * POST /.well-known/mcp
 *
 * Alternate MCP server endpoint at the well-known path.
 * Some AI agents look for MCP servers at /.well-known/mcp directly.
 * Proxies to /api/mcp.
 */
import { defineEventHandler, readBody, setHeader } from 'h3'

export default defineEventHandler(async (event) => {
  setHeader(event, 'Access-Control-Allow-Origin', '*')
  setHeader(event, 'Access-Control-Allow-Methods', 'POST, OPTIONS')
  setHeader(event, 'Access-Control-Allow-Headers', 'Content-Type')
  setHeader(event, 'Content-Type', 'application/json')

  // Forward to the main MCP handler
  const body = await readBody(event)
  const res = await $fetch('/api/mcp', {
    method: 'POST',
    body,
    headers: { 'Content-Type': 'application/json' }
  })
  return res
})
