#!/usr/bin/env python3
"""Fix issues sections on all Five Star Data Recovery pages."""

import xml.etree.ElementTree as ET
import re
import os

xml_path = '/Users/agent/.openclaw/media/inbound/fivestardatarecovery.WordPress.2026-05-02---b613f4fb-be4f-41e9-b22e-438c1ced8a48.xml'
base_path = '/Users/agent/.openclaw/workspace/five-star-website'

print("Parsing WordPress XML...")
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
            # Prefer closest match
            if len(title) < best_len:
                best_len = len(title)
                best_match = (title, raw)
    if best_match:
        print(f"  Found WP post: '{best_match[0]}'")
        return best_match[1]
    return ''

def clean_text(html):
    if not html: return ''
    html = re.sub(r'<!--.*?-->', '', html, flags=re.DOTALL)
    html = re.sub(r'\[/?[^\]]+\]', '', html)
    html = re.sub(r'<svg[^>]*>.*?</svg>', '', html, flags=re.DOTALL)
    html = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
    html = re.sub(r'&nbsp;', ' ', html)
    html = re.sub(r'&amp;', '&', html)
    html = re.sub(r'&#8217;', "'", html)
    html = re.sub(r'&#8216;', "'", html)
    html = re.sub(r'&#8220;|&#8221;', '"', html)
    html = re.sub(r'&#\d+;', '', html)
    html = re.sub(r'<[^>]+>', '', html)
    return html.strip()

def assign_icon(title):
    t = title.lower()
    if any(w in t for w in ['power', 'blinking', 'not powering', 'no power', "doesn't turn", 'spin up']):
        return '🔌'
    if any(w in t for w in ['not detected', 'not showing', 'not recognized', 'not visible', 'undetected', 'invisible']):
        return '🔍'
    if any(w in t for w in ['click', 'beep', 'grinding', 'noise', 'sound', 'scraping']):
        return '🔊'
    if any(w in t for w in ['corrupt', 'error', 'format', 'inaccessible', 'damage', 'failed', 'failure', 'firmware', 'logical']):
        return '⚠️'
    if any(w in t for w in ['drop', 'physical', 'impact', 'broken', 'crack', 'shatter']):
        return '💥'
    if any(w in t for w in ['water', 'flood', 'liquid', 'heat', 'fire', 'burn', 'wet']):
        return '💧'
    if any(w in t for w in ['slow', 'bad sector', 'sector', 'performance']):
        return '🐢'
    if any(w in t for w in ['deleted', 'lost', 'missing', 'accidental', 'erased', 'removed']):
        return '🗑️'
    if any(w in t for w in ['raid', 'server', 'nas', 'array']):
        return '🖥️'
    if any(w in t for w in ['firmware', 'software', 'controller']):
        return '⚙️'
    if any(w in t for w in ['video', 'media', 'film', 'footage', 'movie']):
        return '🎬'
    if any(w in t for w in ['iphone', 'android', 'mobile', 'phone', 'ios']):
        return '📱'
    return '💾'

def extract_sub_issues(raw, common_heading_keyword='Common'):
    """Extract sub-issues from within the Common Issues section"""
    if not raw:
        return []
    
    # Find the Common Issues section
    idx = raw.lower().find(common_heading_keyword.lower())
    if idx < 0:
        # Try other keywords
        for kw in ['common', 'issues', 'problems', 'symptoms', 'failure', 'causes']:
            idx = raw.lower().find(kw)
            if idx >= 0:
                break
    if idx < 0:
        return []
    
    # Get a larger chunk to work with
    chunk = raw[idx:idx+10000]
    
    # Extract sub-headings and their following paragraphs
    # Look for H3, H4, H5 headings which are sub-issues
    pattern = r'<h([3-6])[^>]*>(.*?)</h\1>(.*?)(?=<h[2-6]|$)'
    matches = re.findall(pattern, chunk, re.DOTALL)
    
    skip_words = ['Start Recovery', 'Request a Quote', 'Get Your Data', 'Available 24/7',
                  'No Data =', 'Free Evaluation', 'Contact Us', 'Call Us', 'Why Choose',
                  'Our Process', 'What to Expect', 'How It Works', 'Service Area']
    
    issues = []
    for level, heading, content in matches[:8]:
        h_clean = re.sub(r'<[^>]+>', '', heading).strip()
        h_clean = clean_text(h_clean)
        
        if any(s.lower() in h_clean.lower() for s in skip_words):
            continue
        if len(h_clean) < 5 or len(h_clean) > 150:
            continue
        
        # Skip headings that look like section titles (too generic)
        generic = ['Common ', 'Why Choose', 'Our ', 'About ', 'Contact', 'Service', 'Process',
                   'What We', 'How We', 'Benefits']
        if any(h_clean.startswith(g) for g in generic):
            continue
        
        # Get paragraph text
        paras = re.findall(r'<p[^>]*>(.*?)</p>', content, re.DOTALL)
        paras = [re.sub(r'<[^>]+>', '', p).strip() for p in paras]
        paras = [clean_text(p) for p in paras if len(p) > 20]
        paras = [p for p in paras if not any(s in p for s in ['Start Recovery', 'Request a Quote', 'Call Us', 'Contact Us'])]
        
        if paras and h_clean:
            text = ' '.join(paras[:2])
            if len(text) > 300:
                text = text[:300].rsplit(' ', 1)[0] + '...'
            icon = assign_icon(h_clean)
            issues.append({'icon': icon, 'title': h_clean, 'text': text})
        
        if len(issues) >= 4:
            break
    
    return issues

def update_issues_in_file(filepath, new_issues):
    if not os.path.exists(filepath):
        print(f"  SKIP: File not found: {filepath}")
        return False
    
    with open(filepath, 'r') as f:
        content = f.read()
    
    if 'const issues = [' not in content:
        print(f"  SKIP: No 'const issues = [' found in {filepath}")
        return False
    
    # Build new issues array string
    lines = ['const issues = [']
    for issue in new_issues:
        icon = issue['icon']
        title = issue['title'].replace("'", "\\'").replace('"', '\\"')
        text = issue['text'].replace("'", "\\'").replace('"', '\\"')
        lines.append(f"  {{ icon: '{icon}', title: '{title}', text: '{text}' }},")
    lines.append(']')
    new_array = '\n'.join(lines)
    
    # Replace old issues array
    pattern = r'const issues = \[.*?\]'
    new_content = re.sub(pattern, new_array, content, flags=re.DOTALL)
    
    if new_content == content:
        print(f"  WARNING: No change made to {filepath}")
        return False
    
    with open(filepath, 'w') as f:
        f.write(new_content)
    return True

# Page definitions: (file_path, wp_keyword, common_heading_keyword)
pages = [
    ('pages/data-recovery/seagate-recovery.vue', 'Seagate Data Recovery', 'Common Seagate'),
    ('pages/data-recovery/hard-drive-recovery.vue', 'Hard Drive Data Recovery Services', 'Common Hard Drive'),
    ('pages/data-recovery/raid-recovery.vue', 'RAID Data Recovery', 'Common RAID'),
    ('pages/data-recovery/mac-recovery.vue', 'Mac Data Recovery', 'Common Mac'),
    ('pages/data-recovery/laptop-recovery.vue', 'Laptop Data Recovery', 'Common Laptop'),
    ('pages/data-recovery/external-hard-drive.vue', 'External Hard Drive Data Recovery', 'Common External'),
    ('pages/data-recovery/ssd-recovery.vue', 'SSD Data Recovery', 'Common SSD'),
    ('pages/data-recovery/nas-recovery.vue', 'NAS Data Recovery', 'Common NAS'),
    ('pages/data-recovery/sd-card-recovery.vue', 'SD Card Data Recovery', 'Common SD Card'),
    ('pages/data-recovery/deleted-files.vue', 'Deleted File Recovery', 'Common Causes'),
    ('pages/data-recovery/iphone-recovery.vue', 'iPhone Data Recovery', 'Common iPhone'),
    ('pages/data-recovery/desktop-recovery.vue', 'Desktop Data Recovery', 'Common Desktop'),
    ('pages/data-recovery/dropped-hard-drive.vue', 'Dropped Hard Drive', 'Common'),
    ('pages/data-recovery/bad-sectors.vue', 'Bad Sectors Data Recovery', 'Common'),
    ('pages/data-recovery/hard-drive-not-showing-up.vue', 'Hard Drive Not Showing Up', 'Common'),
    ('pages/data-recovery/cfast-recovery.vue', 'CFast Data Recovery', 'Common CFast'),
    ('pages/data-recovery/clean-room.vue', 'Clean Room Data Recovery', 'Common'),
    ('pages/data-recovery/lacie-recovery.vue', 'Lacie Data Recovery', 'Common LaCie'),
    ('pages/data-recovery/hitachi-recovery.vue', 'Hitachi Data Recovery', 'Common Hitachi'),
    ('pages/data-recovery/toshiba-recovery.vue', 'Toshiba Data Recovery', 'Common Toshiba'),
    ('pages/data-recovery/samsung-recovery.vue', 'Samsung Data Recovery', 'Common Samsung'),
    ('pages/data-recovery/usb-recovery.vue', 'USB Data Recovery', 'Common USB'),
    ('pages/data-recovery/video-file-repair.vue', 'Video File Repair', 'Common Video'),
    ('pages/data-recovery/mail-in-service.vue', 'Data Recovery Mail in', 'Common'),
    ('pages/data-recovery/express-drop-off.vue', 'Express Drop Off', 'Common'),
    ('pages/data-recovery-burbank.vue', 'Data Recovery Burbank', 'Common'),
    ('pages/data-recovery-los-angeles.vue', 'Data Recovery Los Angeles', 'Common'),
    ('pages/data-recovery-glendale.vue', 'Data Recovery Glendale', 'Common'),
    ('pages/data-recovery-beverly-hills.vue', 'Data Recovery Beverly Hills', 'Common'),
    ('pages/data-recovery-hollywood.vue', 'Data Recovery Hollywood', 'Common'),
    ('pages/data-recovery-pasadena.vue', 'Data Recovery Pasadena', 'Common'),
    ('pages/hard-drive-clicking.vue', 'Hard Drive Clicking', 'Common'),
    ('pages/drive-doesnt-power-on.vue', 'Hard Drive No Power', 'Common'),
    ('pages/expedited-service-plus.vue', 'Expedited Service Plus', 'Common'),
    ('pages/expedited-service.vue', 'Data Recovery Expedited Service', 'Common'),
    ('pages/payment-plan.vue', 'Payment Plan', 'Common'),
    ('pages/pricing.vue', 'Data Recovery Service Pricing', 'Common'),
    ('pages/terms.vue', 'Terms And Conditions', 'Common'),
]

fixed = 0
skipped = 0
no_issues = []

for rel_path, wp_keyword, heading_kw in pages:
    filepath = os.path.join(base_path, rel_path)
    print(f"\n{'='*60}")
    print(f"Processing: {rel_path}")
    print(f"  WP keyword: '{wp_keyword}'")
    
    raw = get_raw(wp_keyword)
    if not raw:
        print(f"  WARNING: No WordPress content found for '{wp_keyword}'")
        no_issues.append(rel_path)
        skipped += 1
        continue
    
    issues = extract_sub_issues(raw, heading_kw)
    
    if not issues:
        # Try fallback with just 'Common'
        issues = extract_sub_issues(raw, 'Common')
    
    if not issues:
        # Try to get ANY h3/h4 from the content
        print(f"  WARNING: No sub-issues found, trying broad extraction")
        pattern = r'<h([3-5])[^>]*>(.*?)</h\1>(.*?)(?=<h[2-6]|$)'
        matches = re.findall(pattern, raw[:15000], re.DOTALL)
        skip_words = ['Start Recovery', 'Request a Quote', 'Get Your Data', 'Available 24/7',
                      'No Data =', 'Free Evaluation', 'Contact Us', 'Call Us', 'Why Choose',
                      'Our Process', 'What to Expect', 'How It Works']
        for level, heading, content in matches[:10]:
            h_clean = clean_text(re.sub(r'<[^>]+>', '', heading).strip())
            if any(s.lower() in h_clean.lower() for s in skip_words): continue
            if len(h_clean) < 5 or len(h_clean) > 150: continue
            paras = re.findall(r'<p[^>]*>(.*?)</p>', content, re.DOTALL)
            paras = [clean_text(re.sub(r'<[^>]+>', '', p).strip()) for p in paras if len(p) > 20]
            paras = [p for p in paras if not any(s in p for s in ['Start Recovery', 'Request a Quote'])]
            if paras:
                text = ' '.join(paras[:2])
                if len(text) > 300:
                    text = text[:300].rsplit(' ', 1)[0] + '...'
                issues.append({'icon': assign_icon(h_clean), 'title': h_clean, 'text': text})
            if len(issues) >= 4:
                break
    
    if not issues:
        print(f"  ERROR: Could not extract any issues from WP content")
        no_issues.append(rel_path)
        skipped += 1
        continue
    
    print(f"  Extracted {len(issues)} issues:")
    for i in issues:
        print(f"    {i['icon']} {i['title']}")
    
    if update_issues_in_file(filepath, issues):
        print(f"  ✅ Updated")
        fixed += 1
    else:
        skipped += 1

print(f"\n{'='*60}")
print(f"SUMMARY:")
print(f"  Fixed: {fixed}")
print(f"  Skipped: {skipped}")
if no_issues:
    print(f"  No issues found for:")
    for p in no_issues:
        print(f"    - {p}")
