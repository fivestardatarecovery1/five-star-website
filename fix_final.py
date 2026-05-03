#!/usr/bin/env python3
"""Final fixes for remaining pages."""

import re, os

base_path = '/Users/agent/.openclaw/workspace/five-star-website'

def update_file(filepath, new_issues):
    with open(filepath, 'r') as f:
        content = f.read()
    
    lines = ['const issues = [']
    for issue in new_issues:
        icon = issue['icon']
        title = issue['title'].replace('\\', '\\\\').replace("'", "\\'")
        text = issue['text'].replace('\\', '\\\\').replace("'", "\\'")
        lines.append(f"  {{ icon: '{icon}', title: '{title}', text: '{text}' }},")
    lines.append(']')
    new_array = '\n'.join(lines)
    
    pattern = r'const issues = \[.*?\]'
    new_content = re.sub(pattern, new_array, content, flags=re.DOTALL)
    
    with open(filepath, 'w') as f:
        f.write(new_content)
    print(f"Updated: {filepath}")

# Laptop recovery - content has prose not bullets
laptop_issues = [
    {'icon': '💥', 'title': 'Physical Damage from Drops or Impacts', 'text': 'Laptops dropped on hard surfaces can suffer damaged read/write heads, broken PCBs, or dislodged connectors. Our engineers recover data from physically damaged laptop drives using clean room procedures.'},
    {'icon': '💧', 'title': 'Liquid Spills and Overheating', 'text': 'Coffee, water, and other liquids can short-circuit internal components or corrode the drive. Overheating from blocked vents causes similar damage. We recover data from liquid-damaged laptop drives.'},
    {'icon': '⚙️', 'title': 'Failed OS Updates or Corruption', 'text': 'A Windows or macOS update gone wrong can corrupt the file system or boot sector, leaving your data inaccessible. Our software recovery tools can extract your files even when the OS won\'t load.'},
    {'icon': '🗑️', 'title': 'Accidental Formatting or Deletion', 'text': 'Accidentally formatting your laptop\'s drive or deleting important files doesn\'t mean they\'re gone forever. Our recovery specialists can restore deleted partitions and files quickly and safely.'},
]
update_file(os.path.join(base_path, 'pages/data-recovery/laptop-recovery.vue'), laptop_issues)

# Expedited service - is at pages/expedited-service.vue not pages/data-recovery/
expedited_issues = [
    {'icon': '⚡', 'title': 'Priority Lab Processing', 'text': 'Your device jumps to the front of our queue. Expedited cases receive immediate attention from our senior engineers, with recovery typically completed in 1–3 business days.'},
    {'icon': '🔍', 'title': 'Same-Day Diagnosis Available', 'text': 'Need answers fast? Our expedited service includes same-day diagnostic evaluation. You\'ll know the scope of damage and our recovery plan within hours of drop-off or receipt.'},
    {'icon': '📞', 'title': 'Dedicated Case Manager', 'text': 'Every expedited recovery is assigned a dedicated case manager who keeps you updated at every stage. Direct communication, no guesswork, and no surprises.'},
    {'icon': '🔒', 'title': 'Secure and Confidential Handling', 'text': 'Speed doesn\'t compromise security. All expedited recoveries follow our strict data handling and confidentiality protocols inside our certified clean room lab.'},
]
update_file(os.path.join(base_path, 'pages/expedited-service.vue'), expedited_issues)

# Verify all target files now have proper content
print("\n=== Verification: checking all 38 pages ===")
pages = [
    'pages/data-recovery/seagate-recovery.vue',
    'pages/data-recovery/hard-drive-recovery.vue',
    'pages/data-recovery/raid-recovery.vue',
    'pages/data-recovery/mac-recovery.vue',
    'pages/data-recovery/laptop-recovery.vue',
    'pages/data-recovery/external-hard-drive.vue',
    'pages/data-recovery/ssd-recovery.vue',
    'pages/data-recovery/nas-recovery.vue',
    'pages/data-recovery/sd-card-recovery.vue',
    'pages/data-recovery/deleted-files.vue',
    'pages/data-recovery/iphone-recovery.vue',
    'pages/data-recovery/desktop-recovery.vue',
    'pages/data-recovery/dropped-hard-drive.vue',
    'pages/data-recovery/bad-sectors.vue',
    'pages/data-recovery/hard-drive-not-showing-up.vue',
    'pages/data-recovery/cfast-recovery.vue',
    'pages/data-recovery/clean-room.vue',
    'pages/data-recovery/lacie-recovery.vue',
    'pages/data-recovery/hitachi-recovery.vue',
    'pages/data-recovery/toshiba-recovery.vue',
    'pages/data-recovery/samsung-recovery.vue',
    'pages/data-recovery/usb-recovery.vue',
    'pages/data-recovery/video-file-repair.vue',
    'pages/data-recovery/mail-in-service.vue',
    'pages/data-recovery/express-drop-off.vue',
    'pages/data-recovery-burbank.vue',
    'pages/data-recovery-los-angeles.vue',
    'pages/data-recovery-glendale.vue',
    'pages/data-recovery-beverly-hills.vue',
    'pages/data-recovery-hollywood.vue',
    'pages/data-recovery-pasadena.vue',
    'pages/hard-drive-clicking.vue',
    'pages/drive-doesnt-power-on.vue',
    'pages/expedited-service-plus.vue',
    'pages/expedited-service.vue',
    'pages/payment-plan.vue',
    'pages/pricing.vue',
    'pages/terms.vue',
]

good = 0
empty = 0
missing = 0

for rel_path in pages:
    filepath = os.path.join(base_path, rel_path)
    if not os.path.exists(filepath):
        print(f"  MISSING: {rel_path}")
        missing += 1
        continue
    
    with open(filepath) as f:
        content = f.read()
    
    m = re.search(r'const issues = \[(.*?)\]', content, re.DOTALL)
    if m:
        inner = m.group(1).strip()
        if inner:
            # Count items
            items = re.findall(r'\{[^}]+\}', inner)
            # Extract titles
            titles = re.findall(r"title: '([^']+)'", inner)
            print(f"  ✅ {rel_path} ({len(items)} items): {[t[:40] for t in titles[:2]]}")
            good += 1
        else:
            print(f"  ⚠️  EMPTY: {rel_path}")
            empty += 1
    else:
        print(f"  ❌ NO ISSUES FOUND: {rel_path}")
        missing += 1

print(f"\nTotal: {good} good, {empty} empty, {missing} missing/broken")
