import { defineEventHandler, setHeader } from 'h3'

export default defineEventHandler((event) => {
  setHeader(event, 'Content-Type', 'application/xslt+xml; charset=utf-8')
  setHeader(event, 'Cache-Control', 'max-age=86400, public')

  return `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  exclude-result-prefixes="sm image">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Five Star Data Recovery — Sitemap</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f4f7fc; color: #222; }

          .header {
            background: #0A0C14;
            padding: 20px 32px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 12px;
            border-bottom: 3px solid #F5C842;
          }
          .header-brand { display: flex; align-items: center; gap: 12px; }
          .header-logo { font-size: 1.1rem; font-weight: 900; color: #fff; letter-spacing: -0.02em; }
          .header-logo span { color: #F5C842; }
          .header-badge {
            background: rgba(245,200,66,0.15);
            color: #F5C842;
            border: 1px solid rgba(245,200,66,0.3);
            padding: 4px 14px;
            border-radius: 20px;
            font-size: 0.78rem;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }
          .header-date { color: rgba(255,255,255,0.45); font-size: 0.82rem; }

          .back-link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: #F5C842;
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 600;
            padding: 10px 20px;
            border: 1px solid rgba(245,200,66,0.3);
            border-radius: 6px;
            margin: 20px 32px 0;
            width: fit-content;
            transition: background 0.15s;
          }
          .back-link:hover { background: rgba(245,200,66,0.08); }

          .content { padding: 24px 32px 48px; max-width: 1200px; }

          .stats {
            background: #fff;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 16px 24px;
            margin-bottom: 24px;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 0.9rem;
            color: #4a5568;
          }
          .stats strong { color: #1a1a2e; font-weight: 700; }

          table {
            width: 100%;
            border-collapse: collapse;
            background: #fff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 12px rgba(0,0,0,0.06);
            border: 1px solid #e2e8f0;
          }
          thead tr { background: #0A0C14; }
          thead th {
            padding: 14px 18px;
            text-align: left;
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #F5C842;
          }
          tbody tr { border-bottom: 1px solid #f0f4f8; transition: background 0.1s; }
          tbody tr:last-child { border-bottom: none; }
          tbody tr:hover { background: #fafbff; }
          tbody td { padding: 13px 18px; font-size: 0.875rem; vertical-align: middle; }

          .url-cell a {
            color: #2563eb;
            text-decoration: none;
            word-break: break-all;
            font-weight: 500;
          }
          .url-cell a:hover { color: #1d4ed8; text-decoration: underline; }

          .sitemap-cell a {
            color: #2563eb;
            text-decoration: none;
            font-weight: 600;
          }
          .sitemap-cell a:hover { text-decoration: underline; }

          .priority-pill {
            display: inline-block;
            padding: 2px 10px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 700;
            background: rgba(245,200,66,0.12);
            color: #92710a;
          }

          .date-cell { color: #718096; font-size: 0.82rem; white-space: nowrap; }

          @media (max-width: 640px) {
            .header { padding: 16px; }
            .content { padding: 16px; }
            .back-link { margin: 16px 16px 0; }
            thead th:nth-child(3), tbody td:nth-child(3) { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="header-brand">
            <div class="header-logo">Five Star <span>Data Recovery</span></div>
            <xsl:choose>
              <xsl:when test="sm:sitemapindex">
                <span class="header-badge">Sitemap Index</span>
              </xsl:when>
              <xsl:when test="contains(//sm:loc[1], 'post-sitemap')">
                <span class="header-badge">Post Sitemap</span>
              </xsl:when>
              <xsl:otherwise>
                <span class="header-badge">Page Sitemap</span>
              </xsl:otherwise>
            </xsl:choose>
          </div>
          <span class="header-date">fivestardatarecovery.com</span>
        </div>

        <xsl:if test="sm:urlset">
          <a class="back-link" href="/sitemap_index.xml">&#8592; Back to Sitemap Index</a>
        </xsl:if>

        <div class="content">
          <xsl:choose>
            <!-- SITEMAP INDEX -->
            <xsl:when test="sm:sitemapindex">
              <div class="stats">
                This XML Sitemap Index contains
                <strong><xsl:value-of select="count(sm:sitemapindex/sm:sitemap)"/> sitemaps</strong>.
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Sitemap</th>
                    <th>Last Modified</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sm:sitemapindex/sm:sitemap">
                    <tr>
                      <td class="sitemap-cell">
                        <a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a>
                      </td>
                      <td class="date-cell"><xsl:value-of select="sm:lastmod"/></td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:when>

            <!-- URL SET -->
            <xsl:otherwise>
              <div class="stats">
                This XML Sitemap contains
                <strong><xsl:value-of select="count(sm:urlset/sm:url)"/> URLs</strong>.
              </div>
              <table>
                <thead>
                  <tr>
                    <th>URL</th>
                    <th>Last Modified</th>
                    <th>Priority</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sm:urlset/sm:url">
                    <tr>
                      <td class="url-cell">
                        <a href="{sm:loc}"><xsl:value-of select="sm:loc"/></a>
                      </td>
                      <td class="date-cell"><xsl:value-of select="sm:lastmod"/></td>
                      <td>
                        <xsl:if test="sm:priority">
                          <span class="priority-pill"><xsl:value-of select="sm:priority"/></span>
                        </xsl:if>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:otherwise>
          </xsl:choose>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>`
})
