#!/usr/bin/env python3
"""Debug failing pages - show what content exists."""

import xml.etree.ElementTree as ET
import re

xml_path = '/Users/agent/.openclaw/media/inbound/fivestardatarecovery.WordPress.2026-05-02---b613f4fb-be4f-41e9-b22e-438c1ced8a48.xml'
tree = ET.parse(xml_path)
root = tree.getroot()
ns = {'content': 'http://purl.org/rss/1.0/modules/content/', 'wp': 'http://wordpress.org/export/1.2/'}

def get_raw(title_keyword):
    best_match = None
    best_len = 999999
    for item in root.findall('.//item'):
        title = item.findtext('title', '')
        status = item.findtext('{http://wordpress.org/export/1.2/}status', '')
        if title_keyword.lower() in title.lower() and status == 'publish':
            content = item.find('content:encoded', ns)
            raw = content.text or '' if content is not None else ''
            if len(title) < best_len:
                best_len = len(title)
                best_match = (title, raw)
    if best_match:
        return best_match[0], best_match[1]
    return None, ''

pages = [
    'Laptop Data Recovery',
    'External Hard Drive Data Recovery',
    'Deleted File Recovery',
    'CFast Data Recovery',
    'Lacie Data Recovery',
    'Toshiba Data Recovery',
    'Video File Repair',
    'Express Drop Off',
    'Dropped Hard Drive',
    'Data Recovery Service Pricing',
    'Terms And Conditions',
]

for kw in pages:
    title, raw = get_raw(kw)
    if not raw:
        print(f"\n{kw}: NOT FOUND")
        continue
    
    # Show all headings
    headings = re.findall(r'<h([1-6])[^>]*>(.*?)</h\1>', raw, re.DOTALL)
    # Show list items
    lis = re.findall(r'<li[^>]*>(.*?)</li>', raw[:20000], re.DOTALL)
    
    print(f"\n=== {title} (len={len(raw)}) ===")
    print("  Headings:", [(h, re.sub(r'<[^>]+>', '', t).strip()[:60]) for h, t in headings[:8]])
    print("  First LI items:", [re.sub(r'<[^>]+>', '', li).strip()[:70] for li in lis[:6]])
