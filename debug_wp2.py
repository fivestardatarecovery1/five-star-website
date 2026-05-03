#!/usr/bin/env python3
"""Debug: look at Common Issues section content in detail."""

import xml.etree.ElementTree as ET
import re

xml_path = '/Users/agent/.openclaw/media/inbound/fivestardatarecovery.WordPress.2026-05-02---b613f4fb-be4f-41e9-b22e-438c1ced8a48.xml'
tree = ET.parse(xml_path)
root = tree.getroot()
ns = {'content': 'http://purl.org/rss/1.0/modules/content/', 'wp': 'http://wordpress.org/export/1.2/'}

def get_raw(title_keyword):
    for item in root.findall('.//item'):
        title = item.findtext('title', '')
        status = item.findtext('{http://wordpress.org/export/1.2/}status', '')
        if title_keyword.lower() in title.lower() and status == 'publish':
            content = item.find('content:encoded', ns)
            return content.text or '' if content is not None else ''
    return ''

raw = get_raw('Seagate Data Recovery')

# Find the Common Seagate Drive Issues section
idx = raw.lower().find('common seagate')
if idx >= 0:
    # Show surrounding content
    print("=== Content around 'Common Seagate' ===")
    chunk = raw[idx:idx+5000]
    print(chunk[:5000])
else:
    print("Not found")
