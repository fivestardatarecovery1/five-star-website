#!/usr/bin/env python3
"""Final cleanup for quality-flagged pages."""

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
    
    if new_content == content:
        print(f"  WARNING: No change made to {filepath}")
        return
    
    with open(filepath, 'w') as f:
        f.write(new_content)
    print(f"  ✅ Updated: {os.path.basename(filepath)}")

# Express Drop-Off - replace process steps with actual drive issue types they accept
express_issues = [
    {'icon': '🔊', 'title': 'Clicking or Grinding Hard Drive', 'text': 'Bring in your clicking or grinding hard drive for same-day diagnosis. Our engineers will assess the mechanical damage in our clean room and provide an immediate recovery quote.'},
    {'icon': '🔌', 'title': 'Drive Not Powering On', 'text': 'If your external or internal drive won\'t spin up or power on, drop it off for a free diagnostic. We identify PCB failures, blown fuses, and power circuitry damage on the spot.'},
    {'icon': '⚠️', 'title': 'Corrupted or Inaccessible Drive', 'text': 'Logical failures, corrupted file systems, and drives showing up as unformatted can often be resolved quickly. Drop off your drive and we\'ll have a diagnosis ready within hours.'},
    {'icon': '💥', 'title': 'Physically Damaged Device', 'text': 'Dropped drives, water-damaged devices, or cracked enclosures — drop them off in person for a hands-on assessment. Our lab is equipped to handle all levels of physical damage.'},
]
update_file(os.path.join(base_path, 'pages/data-recovery/express-drop-off.vue'), express_issues)

# Burbank - replace testimonial story snippets with real issues
burbank_issues = [
    {'icon': '🔊', 'title': 'Clicking or Unresponsive Hard Drives', 'text': 'Burbank residents and businesses regularly bring us clicking, grinding, or completely unresponsive drives. Our Glendale lab is just minutes away — same-day drop-off available.'},
    {'icon': '💥', 'title': 'Physically Damaged Storage Devices', 'text': 'Dropped laptops, water-damaged drives, and cracked SSDs are among the most common cases we handle from the Burbank area. We recover data even from severely damaged devices.'},
    {'icon': '⚠️', 'title': 'Corrupted Files or Unreadable Drives', 'text': 'File system corruption, accidental formatting, and drives that show up empty are all recoverable. Our Burbank-area clients trust us for fast, reliable logical recovery services.'},
    {'icon': '🖥️', 'title': 'RAID and Server Failures', 'text': 'Burbank\'s film and TV production industry relies on us for RAID and server data recovery. We handle all RAID levels and NAS devices with emergency turnaround options available.'},
]
update_file(os.path.join(base_path, 'pages/data-recovery-burbank.vue'), burbank_issues)

# Clean room - replace "who uses it" list with "why you need clean room" issues
clean_room_issues = [
    {'icon': '💥', 'title': 'Physical Head Crash or Platter Damage', 'text': 'When the read/write head crashes into the platter, even a tiny dust particle can cause irreversible damage. Clean room recovery prevents further scratching and maximizes data retrieval.'},
    {'icon': '🔊', 'title': 'Clicking, Grinding, or Seized Drive', 'text': 'Mechanical sounds indicate internal damage requiring clean room intervention. Our ISO Class 5 clean room allows us to safely open the drive and address head, spindle, or platter issues.'},
    {'icon': '🔌', 'title': 'Power Failure or Burnt Components', 'text': 'Electrical damage can burn the PCB and damage internal components. Our clean room engineers replace burnt components and perform board repairs to restore drive operation and extract data.'},
    {'icon': '💧', 'title': 'Water or Liquid Damage', 'text': 'Liquid-damaged drives must be cleaned and dried in a controlled environment before any recovery attempt. Our clean room procedures safely remove contaminants without causing additional harm.'},
]
update_file(os.path.join(base_path, 'pages/data-recovery/clean-room.vue'), clean_room_issues)

# Los Angeles - replace device type list with real issues
la_issues = [
    {'icon': '🔊', 'title': 'Failed Hard Drives and Clicking Sounds', 'text': 'From Hollywood studios to downtown offices, we recover data from clicking, seized, or completely failed hard drives throughout the Los Angeles area. Same-day drop-off at our Glendale lab.'},
    {'icon': '⚠️', 'title': 'Corrupted SSDs and Flash Storage', 'text': 'SSD failures, corrupted USB drives, and unreadable SD cards are common throughout LA. Our engineers use specialized tools to recover data from all flash-based storage devices.'},
    {'icon': '🖥️', 'title': 'RAID and NAS Server Failures', 'text': 'Los Angeles businesses depend on RAID systems and NAS devices for critical data. We recover from all RAID levels with emergency turnaround options for time-sensitive cases.'},
    {'icon': '📱', 'title': 'Mac and iPhone Data Recovery', 'text': 'We provide component-level Mac and iPhone data recovery for LA-area clients. From Ventura Blvd to Beverly Hills, we handle T2 chip Macs, M-series MacBooks, and liquid-damaged iPhones.'},
]
update_file(os.path.join(base_path, 'pages/data-recovery-los-angeles.vue'), la_issues)

# Hollywood - replace service link list with real issues
hollywood_issues = [
    {'icon': '🎬', 'title': 'Video Production Drive Failures', 'text': 'Hollywood filmmakers and editors trust us when their drives fail mid-project. We recover footage from RAID arrays, SSDs, CFast cards, and external drives used in professional production.'},
    {'icon': '💥', 'title': 'Physically Damaged or Dropped Drives', 'text': 'On-set accidents happen. Whether a drive was dropped, stepped on, or damaged by power fluctuations, we recover data from physically damaged storage used by Hollywood\'s creative community.'},
    {'icon': '⚠️', 'title': 'Corrupted Project Files and Drives', 'text': 'Sudden drive failures, file system corruption, and accidental formatting can wipe out hours of work. Our recovery specialists restore project files, footage, and creative assets quickly.'},
    {'icon': '🖥️', 'title': 'RAID and Server Data Loss', 'text': 'Post-production houses and studios rely on RAID systems for shared storage. We recover data from all RAID configurations with emergency same-day options for urgent Hollywood deadlines.'},
]
update_file(os.path.join(base_path, 'pages/data-recovery-hollywood.vue'), hollywood_issues)

# Deleted files - replace file type list with actual causes of deletion
deleted_issues = [
    {'icon': '🗑️', 'title': 'Accidentally Deleted Files or Folders', 'text': 'Whether you emptied the Recycle Bin or shift-deleted important files, we can recover them. Our forensic recovery tools scan every sector of your drive to find and restore deleted data.'},
    {'icon': '💾', 'title': 'Formatted Drive or Partition', 'text': 'Accidentally formatting a drive, SD card, or USB flash drive doesn\'t permanently erase your data. Our experts recover files from formatted storage even when the OS reports it as empty.'},
    {'icon': '⚙️', 'title': 'OS Crash or Failed Update', 'text': 'A failed Windows or macOS update, or a corrupted system drive, can make your files inaccessible. We recover personal files and documents even when the operating system won\'t boot.'},
    {'icon': '⚠️', 'title': 'Virus or Ransomware Attack', 'text': 'Malware and ransomware can delete, encrypt, or corrupt your files. Our recovery team has experience bypassing encryption and recovering data from drives affected by malicious software.'},
]
update_file(os.path.join(base_path, 'pages/data-recovery/deleted-files.vue'), deleted_issues)

# Pricing page - pricing tiers are actually fine, but let's make them better descriptions
pricing_issues = [
    {'icon': '⚙️', 'title': 'Logical Recovery — Starting at $300', 'text': 'For software-level failures including file system corruption, deleted files, accidental formatting, and partition loss. No clean room required. Most cases completed in 3–5 business days.'},
    {'icon': '💾', 'title': 'Logical Recovery (+) — Advanced Cases', 'text': 'For more complex logical failures including encrypted drives, RAID reconstruction, NAS recovery, and database recovery. Pricing based on complexity and drive configuration.'},
    {'icon': '💥', 'title': 'Clean Room Recovery — Physical Damage', 'text': 'For mechanically damaged drives requiring head replacement, platter work, or PCB repair in our ISO Class 5 clean room. Pricing based on damage severity and drive model.'},
    {'icon': '🚫', 'title': 'No Data = No Charge Guarantee', 'text': 'If we can\'t recover your data, you pay nothing. Our no-data-no-fee policy means you only pay when we successfully retrieve your files. Free diagnostic evaluation on every case.'},
]
update_file(os.path.join(base_path, 'pages/pricing.vue'), pricing_issues)

# Payment plan - 3 items is fine but let's make them about payment options not marketing
payment_issues = [
    {'icon': '💳', 'title': 'Flexible Payment Plans Available', 'text': 'We understand data recovery can be an unexpected expense. We offer flexible payment options so you can get your data back without financial stress. Ask us about financing at checkout.'},
    {'icon': '🔍', 'title': 'Free Upfront Diagnostic', 'text': 'Every case starts with a free diagnosis. You\'ll know exactly what it costs before any work begins. No hidden fees, no surprises — transparent pricing from day one.'},
    {'icon': '🚫', 'title': 'No Data = No Fee Guarantee', 'text': 'If we can\'t recover your data, you owe us nothing. Our no-data-no-fee policy means zero financial risk for you. We only get paid when your files are successfully recovered.'},
    {'icon': '⚡', 'title': 'Multiple Pricing Tiers Available', 'text': 'Choose standard or expedited service based on your timeline and budget. Logical recoveries start at $300, with clean room and emergency options available for complex cases.'},
]
update_file(os.path.join(base_path, 'pages/payment-plan.vue'), payment_issues)

# Terms page - leave empty, it's a legal page
print("\n  ℹ️  terms.vue left empty (legal page - no issues section appropriate)")

print("\n✅ All cleanup complete!")
