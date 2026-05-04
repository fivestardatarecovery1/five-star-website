const issues: { icon: string; title: string; text: string }[] = [
  { icon: '🔊', title: 'Making clicking or grinding sounds', text: '' },
  { icon: '❌', title: 'Not spinning or not detected at all', text: '' },
  { icon: '💥', title: 'Dropped or crushed', text: '' },
  { icon: '💧', title: 'Exposed to water, smoke, or high heat', text: '' },
  { icon: '⚠️', title: 'Showing signs of internal failure', text: '' },
]
const causesIntro = 'A data recovery clean room maintains a highly controlled environment that filters out dust, static, and airborne particles. This sterile setup is essential for safely working on the internal components of a hard disk drive (HDD). Even the smallest contaminant can scratch a platter or interfere with a head replacement.'
const causesOutro = 'Our facility includes an ISO-certified Class 100 cleanroom environment, which means there are fewer than 100 particles per cubic foot of air. Inside, our engineers perform precision repairs like head swaps, spindle adjustments, and platter removal.'
const causes: string[] = []
const processIntro = 'Our data recovery process inside the clean room begins with a detailed evaluation.'
const steps: { num: string; title: string; text: string }[] = [
  { num: '1', title: 'Evaluation', text: 'A data recovery engineer opens the storage device in a static and dust-free environment to assess internal damage.' },
  { num: '2', title: 'Component Repair', text: 'If needed, we replace heads or repair mechanical parts using matching donor components.' },
  { num: '3', title: 'Forensic Imaging', text: 'We use forensic-grade imaging tools to clone the drive, sector by sector.' },
  { num: '4', title: 'Data Extraction', text: 'Our software team extracts and organizes the files using professional tools that handle damaged partitions, bad sectors, and degraded media.' },
]
const driveTypesIntro = 'We serve individuals, businesses, and IT professionals across the U.S. Our data recovery labs regularly handle jobs involving:'
const driveTypesOutro = ''
const driveTypes: string[] = [
  'Personal external hard drives with family photos',
  'Business servers with client data',
  'Law firms and healthcare organizations',
  'Photography and video production drives',
]
const tipIntro = ''
const tipOutro = ''
const tips: string[] = []
const d2Texts: string[] = []
const d3Texts = [
  "In professional data recovery, cutting corners can cost you your files. DIY attempts, or working with companies that lack cleanroom capabilities, often result in permanent data loss. That's because once someone scratches platters or misaligns heads, no tool — no matter how advanced — can undo the damage.",
  "With Five Star Data Recovery, your critical data stays in expert hands. We never outsource and never open drives without cleanroom protection. You'll receive a full breakdown of what we can recover, along with professional drive recovery options if needed.",
]
const d4Texts: string[] = []
const midBody: string[] = []
const contactText = "When your hard drive has suffered physical damage, recovery isn't something you should attempt on your own. Opening a drive outside the proper environment can lead to permanent lost data."
const contactList: string[] = [
  "We have helped thousands of customers recover data from drives that wouldn't spin, wouldn't mount, or that computers did not recognize.",
  'Visit our lab in Glendale, CA or ship your device to us from anywhere in the U.S.',
  'Call us today for a free evaluation and quote.',
]
const contactOutro = ''
const reviews: { text: string; name: string; location: string }[] = []
const faqs = [
  { q: 'What is a clean room for data recovery?', a: 'A clean room is a controlled environment that filters out dust, static, and airborne particles. This is essential for safely opening hard drives and working on internal components. Our facility includes an ISO-certified Class 100 cleanroom, meaning fewer than 100 particles per cubic foot of air.' },
  { q: 'When do I need clean room data recovery?', a: "You need clean room recovery when your drive is making clicking or grinding sounds, is not spinning or not detected, has been dropped or crushed, or has been exposed to water, smoke, or high heat. Software-based recovery won't work in these cases and attempting it can cause permanent data loss." },
  { q: 'Can I attempt data recovery at home before sending it in?', a: 'If your drive is physically damaged or making unusual noises, do not attempt home recovery. Running software on a physically failing drive can permanently destroy your data. Power it off and contact a professional immediately.' },
  { q: 'How much does clean room data recovery cost?', a: 'Clean room recovery is priced based on the severity of the damage and the type of drive. We provide a free evaluation and a clear flat-rate quote before any work begins. There are no hidden fees, and we follow a No Data, No Charge policy for most cases.' },
  { q: 'How long does clean room recovery take?', a: 'Timelines vary depending on the damage and parts availability. Standard clean room cases typically take 5 to 10 business days. If you need it faster, we offer Expedited and Expedited Plus service options.' },
]
