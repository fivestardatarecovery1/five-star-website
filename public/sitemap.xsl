<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <title>XML Sitemap — Five Star Data Recovery</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <style type="text/css">
        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background-color: #0A0C14;
          color: #E2E8F0;
          font-size: 14px;
          line-height: 1.6;
        }

        /* Header */
        #header {
          background: linear-gradient(135deg, #0D1020 0%, #141828 100%);
          border-bottom: 2px solid #F5C842;
          padding: 28px 40px;
          display: flex;
          align-items: center;
          gap: 20px;
        }
        #header img {
          height: 44px;
          width: auto;
        }
        #header-text h1 {
          font-size: 22px;
          font-weight: 700;
          color: #F5C842;
          letter-spacing: -0.3px;
        }
        #header-text p {
          font-size: 12px;
          color: #94A3B8;
          margin-top: 2px;
        }

        /* Content */
        #content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 36px 40px 60px;
        }

        /* Info bar */
        .info-bar {
          background: #141828;
          border: 1px solid #1E2640;
          border-left: 4px solid #F5C842;
          border-radius: 6px;
          padding: 14px 20px;
          margin-bottom: 28px;
          font-size: 13px;
          color: #94A3B8;
        }
        .info-bar strong {
          color: #F5C842;
        }
        .info-bar a {
          color: #F5C842;
          text-decoration: none;
        }
        .info-bar a:hover {
          text-decoration: underline;
        }

        /* Table */
        table {
          width: 100%;
          border-collapse: collapse;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.4);
        }

        thead {
          background: #F5C842;
        }
        thead th {
          padding: 13px 18px;
          text-align: left;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: #0A0C14;
        }

        tbody tr {
          border-bottom: 1px solid #1A2035;
          transition: background 0.15s;
        }
        tbody tr:nth-child(odd) {
          background: #0F1422;
        }
        tbody tr:nth-child(even) {
          background: #111624;
        }
        tbody tr:hover {
          background: #1A2240;
        }

        td {
          padding: 11px 18px;
          font-size: 13px;
          vertical-align: middle;
        }

        td a {
          color: #93C5FD;
          text-decoration: none;
          word-break: break-all;
        }
        td a:hover {
          color: #F5C842;
          text-decoration: underline;
        }
        td a:visited {
          color: #818CF8;
        }

        /* Badge for index sitemaps */
        .badge {
          display: inline-block;
          background: rgba(245,200,66,0.15);
          color: #F5C842;
          border: 1px solid rgba(245,200,66,0.3);
          border-radius: 4px;
          font-size: 10px;
          font-weight: 700;
          padding: 2px 8px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-left: 8px;
          vertical-align: middle;
        }

        /* Priority indicator */
        .priority {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 6px;
          vertical-align: middle;
        }
        .p-high { background: #22C55E; }
        .p-med  { background: #F5C842; }
        .p-low  { background: #64748B; }

        /* Date */
        .date {
          color: #64748B;
          font-size: 12px;
          white-space: nowrap;
        }

        /* Footer */
        #footer {
          text-align: center;
          margin-top: 40px;
          font-size: 12px;
          color: #374151;
        }
        #footer a {
          color: #F5C842;
          text-decoration: none;
        }

        @media (max-width: 600px) {
          #header { padding: 20px; }
          #content { padding: 20px; }
          thead th:nth-child(2),
          td:nth-child(2) { display: none; }
        }
      </style>
    </head>
    <body>

      <div id="header">
        <img src="/logo-wide.png" alt="Five Star Data Recovery"/>
        <div id="header-text">
          <h1>XML Sitemap</h1>
          <p>Five Star Data Recovery — fivestardatarecovery.com</p>
        </div>
      </div>

      <div id="content">

        <!-- SITEMAP INDEX -->
        <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
          <div class="info-bar">
            This sitemap index contains <strong><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> sub-sitemaps</strong>.
            XML Sitemaps help search engines discover and index all pages on this site.
            Learn more at <a href="https://sitemaps.org" target="_blank" rel="noopener">sitemaps.org</a>.
          </div>
          <table>
            <thead>
              <tr>
                <th width="75%">Sitemap</th>
                <th width="25%">Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                <xsl:variable name="sitemapURL">
                  <xsl:value-of select="sitemap:loc"/>
                </xsl:variable>
                <tr>
                  <td>
                    <a href="{$sitemapURL}"><xsl:value-of select="sitemap:loc"/></a>
                    <span class="badge">sitemap</span>
                  </td>
                  <td class="date">
                    <xsl:value-of select="substring(sitemap:lastmod,0,11)"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </xsl:if>

        <!-- URL SET -->
        <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &lt; 1">
          <div class="info-bar">
            This sitemap contains <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs</strong>.
            XML Sitemaps help search engines discover and index all pages on this site.
            Learn more at <a href="https://sitemaps.org" target="_blank" rel="noopener">sitemaps.org</a>.
          </div>
          <table>
            <thead>
              <tr>
                <th width="65%">URL</th>
                <th width="15%">Priority</th>
                <th width="20%">Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <xsl:variable name="itemURL">
                  <xsl:value-of select="sitemap:loc"/>
                </xsl:variable>
                <tr>
                  <td>
                    <a href="{$itemURL}"><xsl:value-of select="sitemap:loc"/></a>
                  </td>
                  <td>
                    <xsl:choose>
                      <xsl:when test="sitemap:priority &gt;= 0.9">
                        <span class="priority p-high"/>
                        <xsl:value-of select="sitemap:priority"/>
                      </xsl:when>
                      <xsl:when test="sitemap:priority &gt;= 0.7">
                        <span class="priority p-med"/>
                        <xsl:value-of select="sitemap:priority"/>
                      </xsl:when>
                      <xsl:otherwise>
                        <span class="priority p-low"/>
                        <xsl:value-of select="sitemap:priority"/>
                      </xsl:otherwise>
                    </xsl:choose>
                  </td>
                  <td class="date">
                    <xsl:value-of select="substring(sitemap:lastmod,0,11)"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </xsl:if>

        <div id="footer">
          <p>© Five Star Data Recovery · <a href="https://www.fivestardatarecovery.com">fivestardatarecovery.com</a></p>
        </div>

      </div>
    </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
