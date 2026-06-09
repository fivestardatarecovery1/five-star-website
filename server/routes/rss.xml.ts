import { serverQueryContent } from '#content/server'
import { defineEventHandler, setHeader } from 'h3'

const BASE = 'https://www.fivestardatarecovery.com'

export default defineEventHandler(async (event) => {
  const posts = await serverQueryContent(event, '/blog')
    .where({ _path: { $ne: '/blog' } })
    .sort({ date: -1 })
    .find()

  const items = posts.map((post) => {
    const pubDate = post.date
      ? new Date(post.date).toUTCString()
      : new Date().toUTCString()
    const url = `${BASE}${post._path}`

    return `  <item>
    <title><![CDATA[${post.title || ''}]]></title>
    <link>${url}</link>
    <guid isPermaLink="true">${url}</guid>
    <description><![CDATA[${post.description || ''}]]></description>
    <pubDate>${pubDate}</pubDate>
  </item>`
  }).join('\n')

  setHeader(event, 'Content-Type', 'application/rss+xml; charset=utf-8')
  setHeader(event, 'Cache-Control', 'max-age=3600, public')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Five Star Data Recovery — Blog</title>
    <link>${BASE}/blog</link>
    <description>Expert data recovery guides, real case studies, and technical insights from Five Star Data Recovery in Glendale, CA.</description>
    <language>en-us</language>
    <atom:link href="${BASE}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${BASE}/logo-wide.png</url>
      <title>Five Star Data Recovery</title>
      <link>${BASE}/blog</link>
    </image>
${items}
  </channel>
</rss>`
})
