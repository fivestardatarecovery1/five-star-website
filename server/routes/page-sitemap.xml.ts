import { defineEventHandler, getHeader, setHeader } from 'h3'
import { PAGE_URLS, renderUrlsetHTML, renderUrlsetXML } from '../utils/sitemap-data'

const BUILD_DATE = new Date().toISOString()

export default defineEventHandler((event) => {
  const accept = getHeader(event, 'accept') || ''
  const isBrowser = accept.includes('text/html')

  if (isBrowser) {
    setHeader(event, 'Content-Type', 'text/html; charset=utf-8')
    return renderUrlsetHTML('Page Sitemap', PAGE_URLS, BUILD_DATE)
  }

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  return renderUrlsetXML(PAGE_URLS)
})
