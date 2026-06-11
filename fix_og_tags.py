#!/usr/bin/env python3
"""
Fix og:title and og:description on all pages to match the live WordPress site.
"""
import re, os

BASE = '/Users/agent/.openclaw/workspace/five-star-website/pages'

# {relative_vue_path: (ogTitle, ogDescription)}
PAGE_OG = {
    'data-recovery/hard-drive-recovery.vue': (
        'Hard Drive Data Recovery Services',
        'Lost Data? We can help with professional data recovery services. We specialize in HDD Data Recovery and Internal Hard Drive Data Recovery.'
    ),
    'data-recovery/ssd-data-recovery.vue': (
        'SSD Data Recovery - Five Star Data Recovery',
        'Need help Recovering Data from your SSD? We offers affordable SSD Hard Drive Data Recovery Services. Get your data back with us.'
    ),
    'data-recovery/raid-data-recovery.vue': (
        'Data Recovery RAID Services - Five Star Data Recovery',
        'Lost Data and need Data Recovery RAID services? Our engineers provide RAID Data Recovery that can restore your valuable information.'
    ),
    'data-recovery/laptop-data-recovery.vue': (
        'Laptop Data Recovery',
        'Experiencing laptop troubles? Our Laptop Data Recovery experts can help you retrieve lost data quickly and safely.'
    ),
    'data-recovery/external-hard-drive-data-recovery.vue': (
        'External Hard Drive Data Recovery',
        'Is your External Hard Drive Not Showing Up? Our professional team can help with all data recovery services. Give us a call today.'
    ),
    'data-recovery/mac-data-recovery.vue': (
        'Mac Data Recovery - Five Star Data Recovery',
        'Five Star Data Recovery is the premier Mac Data Recovery Company. Our team offers reliable services for Mac to help recover lost files.'
    ),
    'data-recovery/iphone-data-recovery.vue': (
        'iPhone Data Recovery Services Experts - Five Star Data Recovery',
        'Is your iPhone stuck or not powering on? Our data recovery engineers specialize in component level recoveries on iPhones.'
    ),
    'data-recovery/nas-data-recovery.vue': (
        'NAS Data Recovery - Five Star Data Recovery',
        'We specialize in NAS Server Data Recovery. Our engineers offer a fast and reliable turn around for all NAS units. Give us a call today.'
    ),
    'data-recovery/clean-room-data-recovery.vue': (
        'Clean Room Data Recovery Services You Can Trust',
        'Looking for an Affordable Clean Room Data Recovery Company? Five Star Data Recovery offers flat rate pricing and free same day diagnosis!'
    ),
    'data-recovery/data-recovery-mail-in-service.vue': (
        'Data Recovery Mail-in Services - Five Star Data Recovery',
        'Not local and need Data Recovery? Simply fill out our mail-in form, ship your storage device to us, and get your data back in no time.'
    ),
    'data-recovery/video-file-repair.vue': (
        'Video File Repair Service - Corrupted & Damaged Video Repair',
        'Struggling with broken or unplayable video files? Our expert Video File Repair service restores corrupted footage from any device.'
    ),
    'data-recovery/deleted-files.vue': (
        'Deleted File Recovery - Five Star Data Recovery',
        'Accidentally deleted important files? Five Star Data Recovery recovers deleted files from hard drives, SSDs, USB drives, and SD cards. $200 flat rate. Free nationwide shipping.'
    ),
    'data-recovery/sd-card-data-recovery.vue': (
        'SD Card Recovery - Five Star Data Recovery',
        'Looking for a reliable SD Card Recovery Company? We got you covered! Our Professional Recovery Services offer a fast turnaround of your data.'
    ),
    'data-recovery/cfast-card-data-recovery.vue': (
        'CFast Card Data Recovery - Five Star Data Recovery',
        'Five Star Data Recovery is the leading CFast Data Recovery Company. We offer fast and secure services to get back your valuable data.'
    ),
    'data-recovery/bad-sectors.vue': (
        'Bad Sectors Data Recovery - Five Star Data Recovery',
        "If your hard drive has bad sectors then it's time to bring it in to Five Star Data Recovery to receive a free diagnosis and price quote."
    ),
    'data-recovery/hard-drive-not-showing-up.vue': (
        'Hard Drive Not Showing Up - Five Star Data Recovery',
        'Need help recovering data from a hard drive not showing up? Our team offers expert Data Recovery Services with quick turnaround times.'
    ),
    'data-recovery/hitachi-data-recovery.vue': (
        'Hitachi Data Recovery - Five Star Data Recovery',
        'Our engineers specialize in Hitachi Data Recovery. Get fast, reliable, secure, and cost-effective solutions for all your data recovery needs.'
    ),
    'data-recovery/samsung-data-recovery.vue': (
        'Samsung Data Recovery - Five Star Data Recovery',
        'Our Team specializes in Samsung Data Recovery Services. We offer reliable solutions to recover lost data from your External devices.'
    ),
    'data-recovery/seagate-data-recovery.vue': (
        'Seagate Data Recovery - Five Star Data Recovery',
        'Struggling with a Seagate external hard drive not working? We offer expert and reliable recovery services to help you retrieve your data.'
    ),
    'data-recovery/toshiba-data-recovery.vue': (
        'Toshiba Data Recovery - Five Star Data Recovery',
        'Our engineers specialize in Toshiba Data Recovery. Get fast, reliable, secure, and cost-effective solutions for all your data recovery needs.'
    ),
    'data-recovery/lacie-data-recovery.vue': (
        'Lacie Data Recovery - Five Star Data Recovery',
        'Need help recovering data from your Lacie hard drive? Our team offers expert Lacie Data Recovery Services with quick turnaround times.'
    ),
    'data-recovery/desktop-data-recovery.vue': (
        'Desktop Data Recovery - Five Star Data Recovery',
        'Is your desktop computer no longer recognizing your drive? If yes, Give us a call so we can give you a FREE quote now.'
    ),
    'data-recovery/dropped-hard-drive.vue': (
        'Dropped Hard Drive Recovery Services - Five Star Data Recovery',
        'Accidentally dropped your hard drive? Our data recovery engineers specialize in recovering data from drives with physical damage from a drop.'
    ),
    'about-us.vue': (
        'About us',
        'Learn about Five Star Data Recovery, a trusted leader in professional data recovery services in Glendale, CA. Offering flat-rate pricing, no data no charge policy, and nationwide mail-in service. Call today for a free consultation.'
    ),
    'contact-us.vue': (
        'Contact us',
        'Has your data been lost or corrupted? Contact us today for a free diagnosis and cost estimate for your data recovery needs.'
    ),
    'faq.vue': (
        "FAQ's",
        "Not sure how data recovery services work? Check out Five Star Data Recovery's FAQs page to learn more about data recovery solutions."
    ),
    'reviews.vue': (
        'Reviews',
        "Don't take our word for it - read the Five Star Data Recovery reviews from our happy customers! Our team takes pride with every customers."
    ),
    'data-recovery-services-glendale-ca.vue': (
        'Data Recovery Glendale',
        'Need Data Recovery Services near the Glendale, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!'
    ),
    'data-recovery-los-angeles.vue': (
        'Data Recovery Los Angeles',
        'Need Data Recovery Services near the Los Angeles, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!'
    ),
    'data-recovery-beverly-hills.vue': (
        'Data Recovery Beverly Hills',
        'Need Data Recovery Services near the Beverly Hills, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!'
    ),
    'data-recovery-burbank-ca.vue': (
        'Data Recovery Burbank',
        'Need Data Recovery Services near the Burbank, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!'
    ),
    'data-recovery-hollywood-ca.vue': (
        'Data Recovery Hollywood',
        'Need Data Recovery Services near the Hollywood, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!'
    ),
    'data-recovery-pasadena-ca.vue': (
        'Data Recovery Pasadena',
        'Need Data Recovery Services near the Pasadena, CA area? Our team can help you recover your lost data. Contact us for a free diagnosis!'
    ),
    'expedited-service.vue': (
        'Data Recovery Expedited Service',
        'Five Star Data Recovery offers an expedited data recovery service for our customers. Please feel free to contact us to get this started!'
    ),
    'expedited-service-plus.vue': (
        'Expedited Service Plus',
        'Five Star Data Recovery offers customers the opportunity to expedite their case at the fastest level called Expedited Service Plus.'
    ),
    'payment-plan.vue': (
        'Payment Plan',
        'Five Star Data Recovery offers flexible payment plan options for Data Recovery Services. Contact us today for more details.'
    ),
    'hard-drive-clicking.vue': (
        'Hard Drive Clicking - Five Star Data Recovery',
        'Trust our certified engineers for Hard Drive Clicking Sound Fixing Services. Get fast data recovery with a free consultation and diagnosis.'
    ),
    "drive-doesnt-power-on.vue": (
        "Drive Doesn't Power On - Five Star Data Recovery",
        "Get professional services for when your Drive Doesn't Power On. Our certified engineers provide data recovery services at the best prices."
    ),
}

def escape_for_js(s):
    """Escape for use inside single-quoted JS string."""
    return s.replace("'", "\\'")

fixed = []
skipped = []
errors = []

for rel_path, (og_title, og_desc) in PAGE_OG.items():
    full_path = os.path.join(BASE, rel_path)
    if not os.path.exists(full_path):
        errors.append(f'FILE NOT FOUND: {full_path}')
        continue
    
    with open(full_path, 'r') as f:
        content = f.read()
    
    # Check if ogTitle already set
    if 'ogTitle' in content:
        skipped.append(f'SKIP (ogTitle exists): {rel_path}')
        continue
    
    # Find the useSeoMeta description line and insert ogTitle + ogDescription after it
    # Pattern: find description: '...' or description: "..." line inside useSeoMeta
    # We'll insert after the description line
    
    # Strategy: find `description:` line inside useSeoMeta block, then add after it
    og_title_esc = escape_for_js(og_title)
    og_desc_esc = escape_for_js(og_desc)
    
    insert_str = f"\n  ogTitle: '{og_title_esc}',\n  ogDescription: '{og_desc_esc}',"
    
    # Find description line pattern in useSeoMeta
    # Match:  description: '...' or description: "..."
    pattern = r"(  description: ['\"].*?['\"],?)"
    
    # Find all occurrences
    matches = list(re.finditer(pattern, content))
    
    if not matches:
        errors.append(f'NO description field found: {rel_path}')
        continue
    
    # Use the first match (inside useSeoMeta)
    m = matches[0]
    end = m.end()
    
    new_content = content[:end] + insert_str + content[end:]
    
    with open(full_path, 'w') as f:
        f.write(new_content)
    
    fixed.append(rel_path)

print(f"\n✅ FIXED ({len(fixed)} files):")
for f in fixed:
    print(f"  {f}")

print(f"\n⏭️  SKIPPED ({len(skipped)}):")
for s in skipped:
    print(f"  {s}")

print(f"\n❌ ERRORS ({len(errors)}):")
for e in errors:
    print(f"  {e}")
