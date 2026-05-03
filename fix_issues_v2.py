#!/usr/bin/env python3
"""Fix issues sections on all Five Star Data Recovery pages - v2 with correct extraction."""

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
            if len(title) < best_len:
                best_len = len(title)
                best_match = (title, raw)
    if best_match:
        return best_match[0], best_match[1]
    return None, ''

def clean_html(html):
    if not html: return ''
    html = re.sub(r'<!--.*?-->', '', html, flags=re.DOTALL)
    html = re.sub(r'\[/?[^\]]+\]', '', html)
    html = re.sub(r'<svg[^>]*>.*?</svg>', '', html, flags=re.DOTALL)
    html = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
    html = re.sub(r'<[^>]+>', '', html)
    html = re.sub(r'&nbsp;', ' ', html)
    html = re.sub(r'&amp;', '&', html)
    html = re.sub(r'&#8217;', "'", html)
    html = re.sub(r'&#8216;', "'", html)
    html = re.sub(r'&#8220;|&#8221;', '"', html)
    html = re.sub(r'&#\d+;', '', html)
    html = re.sub(r'\s+', ' ', html)
    return html.strip()

def assign_icon(title):
    t = title.lower()
    if any(w in t for w in ['power', 'blinking', 'not powering', 'no power', "doesn't turn", 'spin up', 'turn on', 'power on', 'won\'t power']):
        return '🔌'
    if any(w in t for w in ['not detected', 'not showing', 'not recognized', 'not visible', 'undetected', 'invisible', 'not found']):
        return '🔍'
    if any(w in t for w in ['click', 'beep', 'grinding', 'noise', 'sound', 'scraping', 'buzzing']):
        return '🔊'
    if any(w in t for w in ['drop', 'physical', 'impact', 'broken', 'crack', 'shatter', 'damage', 'dropped']):
        return '💥'
    if any(w in t for w in ['water', 'flood', 'liquid', 'heat', 'fire', 'burn', 'wet', 'spill', 'moisture']):
        return '💧'
    if any(w in t for w in ['slow', 'bad sector', 'sector', 'performance', 'degraded']):
        return '🐢'
    if any(w in t for w in ['deleted', 'lost', 'missing', 'accidental', 'erased', 'removed', 'deletion', 'formatting', 'formatted', 'overwritten']):
        return '🗑️'
    if any(w in t for w in ['raid', 'server', 'nas', 'array', 'mirroring', 'striping', 'parity']):
        return '🖥️'
    if any(w in t for w in ['firmware', 'software', 'controller', 'logical', 'file system', 'partition', 'bios']):
        return '⚙️'
    if any(w in t for w in ['corrupt', 'error', 'inaccessible', 'failure', 'failed', 'format request']):
        return '⚠️'
    if any(w in t for w in ['video', 'media', 'film', 'footage', 'movie', 'codec', 'render']):
        return '🎬'
    if any(w in t for w in ['iphone', 'android', 'mobile', 'phone', 'ios', 'tablet']):
        return '📱'
    return '💾'

JUNK_STRINGS = [
    'start recovery', 'request a quote', 'get your data', 'available 24/7',
    'no data =', 'free evaluation', 'call us', 'see why thousands',
    'trusted by', 'get started with', 'get a free', 'start your',
    'contact us', 'learn more', 'click here', 'our process',
    'step 1', 'step 2', 'step 3', 'step 4', 'step 5',
    '10+ years', 'no data, no charge', 'free nationwide',
    'let\'s recover', 'do you offer', 'what\'s the average',
]

def is_junk(text):
    t = text.lower()
    return any(j in t for j in JUNK_STRINGS)

def get_section_content(raw, section_keywords):
    """Find a section by keywords and return content until next H2."""
    for keyword in section_keywords:
        idx = raw.lower().find(keyword.lower())
        if idx >= 0:
            # Get from this point to next H2 (or 6000 chars max)
            end_idx = idx + 8000
            # Find next h2 after section heading
            next_h2 = re.search(r'<h2', raw[idx+10:idx+8000])
            if next_h2:
                end_idx = idx + 10 + next_h2.start()
            return raw[idx:end_idx]
    return ''

def extract_issues_from_lis(chunk, max_items=4):
    """Extract issues from list items."""
    issues = []
    lis = re.findall(r'<li[^>]*>(.*?)</li>', chunk, re.DOTALL)
    # Also get any paragraph before the list as context
    intro_para = ''
    intro_match = re.search(r'<p[^>]*>(.*?)</p>', chunk, re.DOTALL)
    if intro_match:
        intro_para = clean_html(intro_match.group(1))
    
    for li in lis:
        text = clean_html(li)
        if not text or is_junk(text) or len(text) < 8:
            continue
        if len(text) > 120:
            # Too long for a title, skip
            continue
        icon = assign_icon(text)
        # Build descriptive text from the li itself + context
        desc = text
        if intro_para and len(intro_para) > 30 and not is_junk(intro_para):
            desc = intro_para
        else:
            desc = f"Our expert team specializes in recovering data from cases involving {text.lower()}. Contact us for a free diagnosis."
        issues.append({'icon': icon, 'title': text, 'text': desc})
        if len(issues) >= max_items:
            break
    return issues

def extract_issues_from_h2s(chunk, max_items=4):
    """Extract issues from H2 sub-sections with paragraph content."""
    issues = []
    pattern = r'<h2[^>]*>(.*?)</h2>(.*?)(?=<h2|$)'
    matches = re.findall(pattern, chunk, re.DOTALL)
    
    for heading, content in matches:
        h_clean = clean_html(heading)
        if not h_clean or is_junk(h_clean) or len(h_clean) < 5 or len(h_clean) > 150:
            continue
        # Skip numeric headings (like "1", "2", etc.)
        if re.match(r'^\d+$', h_clean):
            continue
        
        # Get paragraph text
        paras = re.findall(r'<p[^>]*>(.*?)</p>', content, re.DOTALL)
        paras = [clean_html(p) for p in paras]
        paras = [p for p in paras if len(p) > 30 and not is_junk(p)]
        
        if not paras:
            # Try raw text content
            raw_text = clean_html(content)
            if len(raw_text) > 30:
                paras = [raw_text]
        
        if paras:
            text = ' '.join(paras[:2])
            if len(text) > 350:
                text = text[:350].rsplit(' ', 1)[0] + '...'
            icon = assign_icon(h_clean)
            issues.append({'icon': icon, 'title': h_clean, 'text': text})
        
        if len(issues) >= max_items:
            break
    
    return issues

def extract_issues_from_h3s(chunk, max_items=4):
    """Extract issues from H3 sub-sections."""
    issues = []
    pattern = r'<h3[^>]*>(.*?)</h3>(.*?)(?=<h[23]|$)'
    matches = re.findall(pattern, chunk, re.DOTALL)
    
    for heading, content in matches:
        h_clean = clean_html(heading)
        if not h_clean or is_junk(h_clean) or len(h_clean) < 5 or len(h_clean) > 150:
            continue
        
        paras = re.findall(r'<p[^>]*>(.*?)</p>', content, re.DOTALL)
        paras = [clean_html(p) for p in paras]
        paras = [p for p in paras if len(p) > 30 and not is_junk(p)]
        
        if not paras:
            raw_text = clean_html(content)
            if len(raw_text) > 30:
                paras = [raw_text]
        
        if paras:
            text = ' '.join(paras[:2])
            if len(text) > 350:
                text = text[:350].rsplit(' ', 1)[0] + '...'
            icon = assign_icon(h_clean)
            issues.append({'icon': icon, 'title': h_clean, 'text': text})
        
        if len(issues) >= max_items:
            break
    
    return issues

# Define per-page extraction strategy
# (file, wp_keyword, [section search keywords], strategy_hints)
# strategy: 'li', 'h2', 'h3', 'auto'
pages = [
    ('pages/data-recovery/seagate-recovery.vue', 'Seagate Data Recovery',
     ['Common Seagate Drive Issues', 'Common Seagate'], 'li'),
    ('pages/data-recovery/hard-drive-recovery.vue', 'Hard Drive Data Recovery Services',
     ['Common Hard Drive Issues', 'Common Causes of Hard Drive', 'Common Hard Drive'], 'li'),
    ('pages/data-recovery/raid-recovery.vue', 'RAID Data Recovery',
     ['A Closer Look at Common RAID', 'RAID 0 (Striping', 'Types of RAID Levels'], 'h2'),
    ('pages/data-recovery/mac-recovery.vue', 'Mac Data Recovery',
     ['Common Mac Issues', 'Common Mac', 'Common Causes of Mac'], 'li'),
    ('pages/data-recovery/laptop-recovery.vue', 'Laptop Data Recovery',
     ['Common Causes of Laptop Data Loss', 'Common Laptop'], 'li'),
    ('pages/data-recovery/external-hard-drive.vue', 'External Hard Drive Data Recovery',
     ['What To Do (And Not Do)', 'Do NOT attempt to open', 'Common External'], 'h3'),
    ('pages/data-recovery/ssd-recovery.vue', 'SSD Data Recovery',
     ['Common SSD Issues', 'Common SSD', 'Common Causes of SSD'], 'li'),
    ('pages/data-recovery/nas-recovery.vue', 'NAS Data Recovery',
     ['Common NAS Issues', 'Common NAS', 'Common Causes of NAS'], 'li'),
    ('pages/data-recovery/sd-card-recovery.vue', 'SD Card Data Recovery',
     ['Common SD Card Issues', 'Common SD Card', 'Common Causes'], 'li'),
    ('pages/data-recovery/deleted-files.vue', 'Deleted File Recovery',
     ['Our Deleted File Recovery Process', 'Forensic Clone', 'Devices We Offer'], 'h2'),
    ('pages/data-recovery/iphone-recovery.vue', 'iPhone Data Recovery',
     ['Common iPhone Issues', 'Common iPhone', 'What Is Component-Level'], 'li'),
    ('pages/data-recovery/desktop-recovery.vue', 'Desktop Data Recovery',
     ['Common Desktop Issues', 'Common Desktop', 'Common Causes of Desktop'], 'li'),
    ('pages/data-recovery/dropped-hard-drive.vue', 'Dropped Hard Drive',
     ['Common', 'Physical', 'Dropped'], 'li'),
    ('pages/data-recovery/bad-sectors.vue', 'Bad Sectors Data Recovery',
     ['Common Bad Sector', 'Common Causes of Bad', 'Common'], 'li'),
    ('pages/data-recovery/hard-drive-not-showing-up.vue', 'Hard Drive Not Showing Up',
     ['What To Do', 'Common Reasons', 'Common'], 'li'),
    ('pages/data-recovery/cfast-recovery.vue', 'CFast Data Recovery',
     ['Common Issues with CFast', 'Common CFast'], 'li'),
    ('pages/data-recovery/clean-room.vue', 'Clean Room Data Recovery',
     ['Common', 'Physical Damage', 'Types of Damage'], 'li'),
    ('pages/data-recovery/lacie-recovery.vue', 'Lacie Data Recovery',
     ['Common Issues with Lacie', 'Accidental Deletion or Formatting'], 'h2'),
    ('pages/data-recovery/hitachi-recovery.vue', 'Hitachi Data Recovery',
     ['Common Hitachi Issues', 'Common Hitachi', 'Common Causes'], 'li'),
    ('pages/data-recovery/toshiba-recovery.vue', 'Toshiba Data Recovery',
     ['Why Toshiba Hard Drives Stop Working', 'Signs Your Toshiba', 'Common'], 'li'),
    ('pages/data-recovery/samsung-recovery.vue', 'Samsung Data Recovery',
     ['Common Samsung Issues', 'Common Samsung', 'Common Causes'], 'li'),
    ('pages/data-recovery/usb-recovery.vue', 'USB Data Recovery',
     ['Common USB Issues', 'Common USB', 'Common Causes of USB'], 'li'),
    ('pages/data-recovery/video-file-repair.vue', 'Video File Repair',
     ['Why Do Video Files Get Corrupted?', 'Common Video'], 'li'),
    ('pages/data-recovery/mail-in-service.vue', 'Data Recovery Mail in',
     ['Common', 'Why Mail In', 'Benefits'], 'li'),
    ('pages/data-recovery/express-drop-off.vue', 'Express Drop Off',
     ['Common', 'Express', 'Drop Off'], 'li'),
    ('pages/data-recovery-burbank.vue', 'Data Recovery Burbank',
     ['Common Data Loss', 'Common Causes', 'Common'], 'li'),
    ('pages/data-recovery-los-angeles.vue', 'Data Recovery Los Angeles',
     ['Common Data Loss', 'Common Causes', 'Common'], 'li'),
    ('pages/data-recovery-glendale.vue', 'Data Recovery Glendale',
     ['Common Data Loss', 'Common Causes', 'Common'], 'li'),
    ('pages/data-recovery-beverly-hills.vue', 'Data Recovery Beverly Hills',
     ['Common Data Loss', 'Common Causes', 'Common'], 'li'),
    ('pages/data-recovery-hollywood.vue', 'Data Recovery Hollywood',
     ['Common Data Loss', 'Common Causes', 'Common'], 'li'),
    ('pages/data-recovery-pasadena.vue', 'Data Recovery Pasadena',
     ['Common Data Loss', 'Common Causes', 'Common'], 'li'),
    ('pages/hard-drive-clicking.vue', 'Hard Drive Clicking',
     ['Common causes of a clicking', 'Common causes'], 'li'),
    ('pages/drive-doesnt-power-on.vue', 'Hard Drive No Power',
     ['Common', 'Signs', 'Causes'], 'li'),
    ('pages/expedited-service-plus.vue', 'Expedited Service Plus',
     ['Common', 'Benefits', 'Why'], 'li'),
    ('pages/expedited-service.vue', 'Data Recovery Expedited Service',
     ['Common', 'Benefits', 'Why Expedited'], 'li'),
    ('pages/payment-plan.vue', 'Payment Plan',
     ['Common', 'Benefits', 'Payment'], 'li'),
    ('pages/pricing.vue', 'Data Recovery Service Pricing',
     ['Logical Data Recovery', 'Clean Room', 'Additional'], 'h2'),
    ('pages/terms.vue', 'Terms And Conditions',
     ['Terms', 'Service', 'Agreement'], 'h2'),
]

def extract_issues_smart(raw, section_keywords, strategy):
    """Smart extraction based on strategy."""
    chunk = get_section_content(raw, section_keywords)
    
    if not chunk:
        # Fallback: use the full raw content but skip first 1000 chars (usually intro)
        chunk = raw[1000:10000]
    
    issues = []
    
    if strategy == 'li':
        issues = extract_issues_from_lis(chunk)
        # If not enough, try from different section
        if len(issues) < 2:
            issues = extract_issues_from_lis(raw[500:15000])
    elif strategy == 'h2':
        issues = extract_issues_from_h2s(chunk)
        if len(issues) < 2:
            issues = extract_issues_from_h2s(raw[500:12000])
    elif strategy == 'h3':
        issues = extract_issues_from_h3s(chunk)
        if len(issues) < 2:
            issues = extract_issues_from_h3s(raw[500:12000])
    
    # Still nothing? Try all methods
    if not issues:
        issues = extract_issues_from_lis(raw[500:12000])
    if not issues:
        issues = extract_issues_from_h3s(raw[500:12000])
    if not issues:
        issues = extract_issues_from_h2s(raw[500:12000])
    
    return issues[:4]

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
        title = issue['title'].replace('\\', '\\\\').replace("'", "\\'")
        text = issue['text'].replace('\\', '\\\\').replace("'", "\\'")
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

# ------- MAIN -------
fixed = 0
skipped = 0
no_issues_pages = []

for rel_path, wp_keyword, section_keywords, strategy in pages:
    filepath = os.path.join(base_path, rel_path)
    print(f"\n{'='*60}")
    print(f"Processing: {rel_path}")
    
    title, raw = get_raw(wp_keyword)
    if not raw:
        print(f"  WARNING: No WordPress content found for '{wp_keyword}'")
        no_issues_pages.append(rel_path)
        skipped += 1
        continue
    
    print(f"  WP post: '{title}' ({len(raw)} chars)")
    
    issues = extract_issues_smart(raw, section_keywords, strategy)
    
    if not issues:
        print(f"  ERROR: Could not extract any issues")
        no_issues_pages.append(rel_path)
        skipped += 1
        continue
    
    print(f"  Extracted {len(issues)} issues:")
    for i in issues:
        print(f"    {i['icon']} {i['title'][:60]}")
    
    if update_issues_in_file(filepath, issues):
        print(f"  ✅ Updated successfully")
        fixed += 1
    else:
        skipped += 1

print(f"\n{'='*60}")
print(f"SUMMARY:")
print(f"  Fixed: {fixed}")
print(f"  Skipped/Failed: {skipped}")
if no_issues_pages:
    print(f"  No issues found for:")
    for p in no_issues_pages:
        print(f"    - {p}")
