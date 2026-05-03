#!/usr/bin/env python3
"""Debug: check Common Issues structure across multiple pages."""

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
    return best_match[1] if best_match else ''

pages_to_check = [
    ('Hard Drive Data Recovery Services', 'Common Hard Drive'),
    ('RAID Data Recovery', 'Common RAID'),
    ('Mac Data Recovery', 'Common Mac'),
    ('Laptop Data Recovery', 'Common Laptop'),
    ('iPhone Data Recovery', 'Common iPhone'),
    ('Deleted File Recovery', 'Common'),
    ('Hard Drive Clicking', 'Common'),
]

for keyword, section in pages_to_check:
    raw = get_raw(keyword)
    # Find common issues
    idx = raw.lower().find(section.lower())
    if idx < 0:
        idx = raw.lower().find('common')
    if idx < 0:
        print(f"\n{keyword}: NO COMMON SECTION FOUND")
        continue
    
    chunk = raw[idx:idx+3000]
    # Show headings in this chunk
    headings = re.findall(r'<h([1-6])[^>]*>(.*?)</h\1>', chunk, re.DOTALL)
    # Show list items in this chunk
    lis = re.findall(r'<li[^>]*>(.*?)</li>', chunk[:2000], re.DOTALL)
    
    print(f"\n{keyword} (section: {section}):")
    print(f"  Headings: {[(h, re.sub(r'<[^>]+>', '', t).strip()[:60]) for h, t in headings[:5]]}")
    print(f"  LI items: {[re.sub(r'<[^>]+>', '', li).strip()[:80] for li in lis[:6]]}")
