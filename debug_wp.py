#!/usr/bin/env python3
"""Debug WordPress content structure for a few pages."""

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
            raw = content.text or '' if content is not None else ''
            print(f"Found: '{title}' (len={len(raw)})")
            return raw
    return ''

# Check seagate
print("=== SEAGATE ===")
raw = get_raw('Seagate Data Recovery')

# Show all headings
print("\nAll headings in Seagate:")
matches = re.findall(r'<h([1-6])[^>]*>(.*?)</h\1>', raw, re.DOTALL)
for level, text in matches[:30]:
    clean = re.sub(r'<[^>]+>', '', text).strip()
    print(f"  H{level}: {clean[:100]}")

print("\n--- First 3000 chars of raw ---")
print(raw[:3000])
