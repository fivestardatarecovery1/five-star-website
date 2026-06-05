import chromium from '@sparticuz/chromium-min'
import puppeteerCore from 'puppeteer-core'

/**
 * Convert an HTML string to a PDF Buffer using puppeteer-core + chromium-min.
 * Works in Vercel serverless (Node 18/20).
 */
export async function htmlToPdf(html: string): Promise<Buffer> {
  const isVercel = !!process.env.VERCEL

  const executablePath = isVercel
    ? await chromium.executablePath(
        'https://github.com/Sparticuz/chromium/releases/download/v131.0.1/chromium-v131.0.1-pack.tar'
      )
    : (await import('puppeteer')).executablePath?.() ?? '/usr/bin/google-chrome'

  const browser = await puppeteerCore.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath,
    headless: true,
  })

  try {
    const page = await browser.newPage()
    await page.setContent(html, { waitUntil: 'networkidle0' })
    const pdfBuffer = await page.pdf({
      format: 'Letter',
      printBackground: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    })
    return Buffer.from(pdfBuffer)
  } finally {
    await browser.close()
  }
}
