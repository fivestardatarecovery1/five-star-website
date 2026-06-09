<script setup lang="ts">
useSeoMeta({
  title: 'Sony Venice X-OCN File Recovery: 35 Files Saved After 3 Labs Failed | Five Star Data Recovery',
  description: 'How we recovered 35 corrupted Sony Venice X-OCN files — including partially overwritten footage — after three data recovery labs said it couldn\'t be done. A real case study in professional video file repair.',
  ogTitle: 'Sony Venice X-OCN File Recovery: 35 Files Saved After 3 Labs Failed',
  ogDescription: 'How we recovered 35 corrupted Sony Venice X-OCN files after a power loss, macOS First Aid damage, and overwrite — when three other labs had already failed.',
  ogUrl: 'https://www.fivestardatarecovery.com/blog/sony-venice-xcn-footage-recovery',
  ogImage: 'https://www.fivestardatarecovery.com/blog-sony-venice-film-set.jpg',
  ogType: 'article',
  ogSiteName: 'Five Star Data Recovery',
  twitterCard: 'summary_large_image',
  twitterTitle: 'They Flew the Drives Cross-Country After Three Labs Failed',
  twitterDescription: 'A real Sony Venice X-OCN case study from Five Star Data Recovery.',
})
</script>

<template>
  <div>
    <NavBar />

    <!-- HERO -->
    <section class="blog-hero">
      <div class="hero-bg-overlay" />
      <div class="container hero-inner">
        <div class="blog-meta">
          <span class="blog-date">June 9, 2026</span>
          <span class="blog-category">Success Stories &amp; Case Studies</span>
          <span class="blog-category video-tag">Video File Repair</span>
        </div>
        <h1 class="blog-title">They Flew the Drives Cross-Country After Three Labs Failed.<br>Here's How We Saved the Footage.</h1>
        <p class="blog-excerpt">A real case involving a 15-day Sony Venice shoot, X-OCN file corruption, catastrophic overwrite damage — and the recovery that wasn't supposed to be possible.</p>
        <div class="blog-author">
          <div class="author-avatar">M</div>
          <div>
            <div class="author-name">Marco · Video Repair Specialist, Five Star Data Recovery</div>
          </div>
        </div>
        <a href="#article-start" class="read-cta">
          <span>Read Case Study</span>
          <span class="read-cta-arrow">↓</span>
        </a>
      </div>
    </section>

    <!-- ARTICLE BODY -->
    <section class="blog-body">
      <div class="container blog-layout">
        <!-- MAIN ARTICLE -->
        <article class="blog-main" id="article-start">

        <!-- Lead -->
        <div class="lead-block">
          <p>A production company based in New York had just wrapped a 15-day narrative shoot. They'd invested heavily in the right gear — Sony Venice cameras, shooting native X-OCN at 8632×4856. Raw, pristine, irreplaceable.</p>
          <p>Then the footage disappeared.</p>
        </div>

        <!-- Section: When Every Other Option Is Gone -->
        <h2 class="section-heading">When Every Other Option Is Gone</h2>

        <p>Not all of it. But 35 files across three 24TB Seagate drives — entire days of the shoot — were gone.</p>
        <p>They went to one data recovery firm. No luck. They went to a second. Same result. A third. Nothing. Each lab looked at the drives and either turned them away or returned them in the same condition they arrived: footage missing, no path forward.</p>
        <p>So they did something most people only do as a last resort. They put the drives in a bag, bought a plane ticket, and flew from New York to California to hand-deliver them to us in person.</p>
        <p>That's how bad it was. And that's why we knew we couldn't give them the same answer everyone else had.</p>

        <!-- Hero image -->
        <div class="blog-image-block">
          <img src="/blog-sony-venice-film-set.jpg" alt="Sony Venice cinema camera on a professional film set" class="blog-img" />
          <p class="img-caption">Three labs had already failed. A production company flew their drives from New York to our California lab as a last resort.</p>
        </div>

        <!-- Section: Chain of Errors -->
        <h2 class="section-heading">What Happened: A Chain of Errors That Compounded Into a Crisis</h2>

        <p>To understand how we solved this, you have to understand how it broke. Because this wasn't a single point of failure. It was a cascade — each decision made in good faith, each one making the next step harder.</p>

        <div class="callout-card">
          <h3>The Setup</h3>
          <p>The DIT on this shoot was using a standard, responsible backup strategy: two Seagate 24TB drives synchronized continuously. Mirror each day's shoot. Redundancy built in. It's the right call — on paper.</p>
        </div>

        <div class="callout-card">
          <h3>The Power Loss</h3>
          <p>Midway through the shoot, a power loss hit. Both drives were mid-write during an active sync operation when everything cut. Both drives unmounted uncleanly. When power returned, neither drive would mount. The filesystem structures on both drives were in an inconsistent state — some file entries intact, others pointing to corrupted or shifted data, others pointing nowhere at all.</p>
        </div>

        <div class="callout-card warning">
          <h3>The First Aid Decision</h3>
          <p>The DIT opened Disk Utility and ran First Aid on both drives. We understand why. First Aid is what macOS tells you to do. It's built into the operating system. It sounds like the right move.</p>
          <p>Here's what actually happened: First Aid scanned both drives, found filesystem inconsistencies it couldn't cleanly reconcile, and resolved them the only way it knows how — by marking uncertain file space as free and available. Some of the files it cleared had corrupted directory entries but intact data underneath. First Aid couldn't see that. It just cleaned up what looked like garbage. The drives remounted. Some files were gone.</p>
        </div>

        <div class="callout-card danger">
          <h3>The Part Nobody Told Us At First</h3>
          <p>The DIT had new footage coming in. Days 12, 13, 14, 15 of the shoot still needed backing up. The drives were now mounting. They showed available space. So he used them.</p>
          <p>New footage was written directly onto the drives — occupying sectors that had belonged to the missing clips. This is the part that the other three labs couldn't get past. When data is overwritten, the common industry assumption is that it's gone. Full stop.</p>
          <p>By the time the drives reached us, we were looking at three categories of files: intact files (unaffected), structurally damaged files (container headers corrupted, data present), and partially overwritten files (some segments intact, some replaced by new footage data). Thirty-five files missing. Three labs had already looked and walked away.</p>
        </div>

        <!-- Seagate drives image -->
        <div class="blog-image-block">
          <img src="/blog-sony-venice-drives.jpg" alt="Three 24TB drives on a forensic recovery workbench" class="blog-img" />
          <p class="img-caption">Three 24TB Seagate drives — two of which had new footage written over the missing clips before reaching us.</p>
        </div>

        <!-- Section: Why This Is Video File Repair -->
        <h2 class="section-heading">Why This Is Video File Repair — Not Data Recovery</h2>

        <p>This distinction matters, and most labs miss it.</p>

        <p>Traditional data recovery tools are looking for file signatures — magic bytes, known headers — and trying to reconstruct file system references. That approach works for JPEGs, documents, even standard H.264 video. It breaks down completely when you're dealing with Sony X-OCN.</p>

        <p>X-OCN (Extended tonal range Original Camera Negative) is Sony's proprietary raw capture format, built for the Venice sensor. It's not a simple container with a header and a stream. It's a complex, multi-layer structure:</p>

        <ul class="blog-list">
          <li>Frame containers with individual metadata per frame</li>
          <li>Color science baked at the capture level</li>
          <li>Precise interleaving of video and audio components</li>
          <li>Codec dependencies that require understanding the format at a forensic level — not just finding its magic bytes</li>
        </ul>

        <p>When an X-OCN file has a corrupted container structure, you don't just 'extract' it. You have to reconstruct the frame hierarchy, verify the codec stream against known Venice output characteristics, and rebuild the container metadata from what remains. That's not recovery. That's repair.</p>

        <p>And when segments of that file have been overwritten by new data? You have to identify exactly where the overwrite begins, determine what's still intact before and after the overwrite boundary, and decide whether those segments can be reconstructed into a usable file — or whether the damage is too deep.</p>

        <div class="insight-block">
          <p>That's work that requires domain expertise in video codecs, not just drive forensics. It's why three labs failed. <strong>They were looking at the problem as a storage problem. We looked at it as a video problem.</strong></p>
        </div>

        <!-- Internal platters image -->
        <div class="blog-image-block">
          <img src="/blog-sony-venice-post-production.jpg" alt="Filmmaker frustrated after footage is lost and three labs have failed" class="blog-img" />
          <p class="img-caption">Three labs had already turned them away. By the time the drives reached us, they were out of options.</p>
        </div>

        <!-- Section: What We Did -->
        <h2 class="section-heading">What We Did</h2>

        <div class="phase-block">
          <div class="phase-number">Phase 1</div>
          <h3 class="phase-title">Drive Imaging and Triage</h3>
          <p>Before touching anything, we created forensic sector-by-sector images of all three drives. Nothing we do ever touches the originals. This is non-negotiable — and it's also likely why some of the earlier recovery attempts failed. Any write operation to a damaged drive, any additional First Aid pass, any mounting in read-write mode further erodes what's recoverable. We image first, always.</p>
          <p>With clean images in hand, we began triage: cataloging every file reference, mapping out which sectors had been written by new footage, identifying the boundaries of the overwrite zones, and cross-referencing filesystem metadata against raw sector patterns to locate X-OCN frame structures that no longer had valid directory entries pointing to them.</p>
        </div>

        <div class="phase-block">
          <div class="phase-number">Phase 2</div>
          <h3 class="phase-title">X-OCN Container Reconstruction</h3>
          <p>For the structurally damaged files — files where the data was present but the container metadata was corrupted — we rebuilt the container structures. Sony X-OCN has a specific architecture. We analyzed the known-good files on the same drives for reference patterns, then used those patterns to reconstruct the damaged containers frame by frame.</p>
          <p><strong>24 files came back from this process completely intact. Playable. Full resolution. Every frame present.</strong></p>
        </div>

        <div class="phase-block">
          <div class="phase-number phase-hard">Phase 3</div>
          <h3 class="phase-title">Partial Recovery of Overwritten Files</h3>
          <p>The remaining 11 files were the hard problem. These were files where new footage had been written into sectors that previously belonged to missing clips. The overwrite wasn't uniform — in most cases, new data had landed in the middle or at the end of the original file, with the beginning still intact on disk.</p>
          <p>For each of these 11 files, we identified the intact segments, reconstructed what was recoverable, and delivered the partial files with precise documentation of where each file was complete and where the overwrite boundary began. In a case like this, even a partial recovery matters enormously — a scene that's 80% intact may still be usable, especially with the right editorial workaround or pickup shoot for a few key moments.</p>
          <p><strong>Eleven files partially recovered. Not a single file returned blank.</strong></p>
        </div>

        <!-- Lab engineers image -->
        <div class="blog-image-block">
          <img src="/blog-sony-venice-recovery-results.jpg" alt="MacBook at a workstation — recovered footage back in post-production" class="blog-img" />
          <p class="img-caption">24 files fully recovered. 11 partially recovered. Zero files returned blank.</p>
        </div>

        <!-- Section: Results -->
        <h2 class="section-heading">The Results</h2>

        <div class="results-table-wrap">
          <table class="results-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Files</th>
                <th>Outcome</th>
              </tr>
            </thead>
            <tbody>
              <tr class="row-success">
                <td><span class="result-badge full">Full Recovery</span></td>
                <td class="result-count">24</td>
                <td>100% intact — every frame, full X-OCN fidelity</td>
              </tr>
              <tr class="row-partial">
                <td><span class="result-badge partial">Partial Recovery</span></td>
                <td class="result-count">11</td>
                <td>Recoverable segments delivered with overwrite documentation</td>
              </tr>
              <tr class="row-zero">
                <td><span class="result-badge zero">Unrecoverable</span></td>
                <td class="result-count">0</td>
                <td>Every file returned something</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="results-quote">
          Three labs said it couldn't be done. We didn't give them that answer.
        </div>

        <!-- Section: What Every Production Team Needs to Learn -->
        <h2 class="section-heading">What Every Production Team Needs to Learn From This</h2>

        <p>We're not telling this story to embarrass anyone. The DIT on this shoot made the decisions most people would make. He ran First Aid because that's what you do. He kept backing up because the shoot had to continue. None of those decisions came from negligence. They came from not knowing.</p>

        <div class="lesson-block">
          <div class="lesson-number">1</div>
          <div>
            <h3>Power loss on a mid-write drive is a forensic event, not a tech support ticket.</h3>
            <p>Stop. Do not run First Aid. Do not mount the drive in read-write mode. Do not attempt to copy files off it. Call a specialist before you touch anything.</p>
          </div>
        </div>

        <div class="lesson-block">
          <div class="lesson-number">2</div>
          <div>
            <h3>First Aid is not a data recovery tool.</h3>
            <p>It is a filesystem repair utility. It does not know what your files contain. It does not know that the 'inconsistency' it's clearing is actually a Sony X-OCN frame structure with recoverable data beneath a corrupted directory entry. It clears. That's what it does.</p>
          </div>
        </div>

        <div class="lesson-block lesson-critical">
          <div class="lesson-number">3</div>
          <div>
            <h3>Writing new data to a damaged drive is the point of no return.</h3>
            <p>Once new data occupies sectors that belong to missing files, those sectors are gone. You may still recover partial files — as we did here — but every byte written reduces what's salvageable. If drives are damaged, they go offline immediately and stay offline until they're in a specialist's hands.</p>
          </div>
        </div>

        <div class="lesson-block">
          <div class="lesson-number">4</div>
          <div>
            <h3>Not all labs are equal for video file repair.</h3>
            <p>Standard data recovery tools are not built for X-OCN, ARRIRAW, BRAW, R3D, or other professional camera formats. If a lab doesn't understand the codec, they can't repair the container. A failed attempt from a general recovery lab doesn't mean the footage is gone — it may mean you haven't reached the right specialist yet.</p>
          </div>
        </div>

        <div class="lesson-block">
          <div class="lesson-number">5</div>
          <div>
            <h3>Distance is not a barrier.</h3>
            <p>This production company flew drives from New York to our lab in California. We work with clients across the country and internationally. If the footage is irreplaceable, logistics are a solvable problem.</p>
          </div>
        </div>

        <!-- Section: If You're Reading This Because It's Already Happened -->
        <div class="emergency-block">
          <h2>If You're Reading This Because It's Already Happened</h2>
          <p class="emergency-lead"><strong>Stop everything. Stop running tools. Stop mounting drives. Stop trying things.</strong></p>
          <p>The single most important move you can make right now is to stop adding variables to the problem. Every tool you run, every mount attempt, every copy operation changes the state of the drive and potentially reduces what's recoverable.</p>
          <p><strong>Then call us.</strong></p>
          <p>We specialize in video file repair for professional camera formats — Sony Venice X-OCN, ARRIRAW, Blackmagic RAW, RED R3D, MXF, and more. We work with production companies, post facilities, forensic investigators, and individual filmmakers. We've recovered footage that three other labs declared unrecoverable.</p>
          <p>We don't promise miracles. We promise expertise, forensic discipline, and a straight answer about what's actually possible — before we touch anything.</p>

          <div class="emergency-cta">
            <NuxtLink to="/start-recovery" class="btn-emergency">Start Recovery Now</NuxtLink>
            <a href="tel:8182728866" class="btn-call">📞 818-272-8866</a>
          </div>
        </div>

        <!-- Disclaimer -->
        <p class="disclaimer">Case details anonymized to protect client confidentiality. Technical specifications and recovery outcomes are accurate.</p>

        </article>

        <!-- SIDEBAR -->
        <aside class="blog-sidebar">

          <!-- More Articles -->
          <div class="sidebar-card">
            <h3 class="sidebar-heading">More Articles</h3>
            <div class="sidebar-posts">
              <NuxtLink to="/blog/how-to-repair-external-hard-drive-after-it-was-dropped" class="sidebar-post">
                <div class="sidebar-post-img-wrap">
                  <img src="/blog-dropped-hard-drive.jpg" alt="How to repair a dropped external hard drive" class="sidebar-post-img" loading="lazy" />
                </div>
                <div class="sidebar-post-body">
                  <div class="sidebar-post-cat">Data Recovery Guide</div>
                  <div class="sidebar-post-title">How to Repair an External Hard Drive After It Was Dropped</div>
                  <p class="sidebar-post-snippet">Stop trying to power it on. Clicking or beeping after a drop means the heads may have crashed — every spin risks permanent platter damage.</p>
                  <div class="sidebar-post-read">8 min read →</div>
                </div>
              </NuxtLink>
              <NuxtLink to="/blog/usb-data-recovery-chip-off" class="sidebar-post">
                <div class="sidebar-post-img-wrap">
                  <img src="/blog-usb-chip-off.jpg" alt="USB chip-off data recovery" class="sidebar-post-img" loading="lazy" />
                </div>
                <div class="sidebar-post-body">
                  <div class="sidebar-post-cat">Case Study</div>
                  <div class="sidebar-post-title">USB Data Recovery Using the Chip-Off Technique</div>
                  <p class="sidebar-post-snippet">When a USB drive stops being detected entirely, chip-off recovery reads the NAND flash directly — bypassing the failed controller.</p>
                  <div class="sidebar-post-read">6 min read →</div>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Emergency CTA -->
          <div class="sidebar-cta">
            <div class="sidebar-cta-icon">🎬</div>
            <h3>Lost Video Footage?</h3>
            <p>We recover Sony Venice, ARRIRAW, BRAW, RED, and MXF files other labs can't touch.</p>
            <NuxtLink to="/start-recovery" class="sidebar-cta-btn">Start Recovery</NuxtLink>
            <a href="tel:8182728866" class="sidebar-cta-phone">📞 818-272-8866</a>
          </div>

          <!-- About the Author -->
          <div class="sidebar-card">
            <h3 class="sidebar-heading">About the Author</h3>
            <div class="sidebar-author">
              <div class="sidebar-author-avatar">M</div>
              <div>
                <div class="sidebar-author-name">Marco</div>
                <div class="sidebar-author-role">Video Repair Specialist<br>Five Star Data Recovery</div>
              </div>
            </div>
            <p class="sidebar-author-bio">Marco leads our video file repair division, specializing in professional camera formats including Sony X-OCN, ARRIRAW, and Blackmagic RAW.</p>
          </div>

        </aside>

      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="cta-section">
      <div class="container cta-inner">
        <h2 class="cta-title">Need Professional Video File Recovery?</h2>
        <p class="cta-sub">Sony Venice X-OCN · ARRIRAW · Blackmagic RAW · RED R3D · MXF<br>Free evaluation. No recovery, no charge.</p>
        <div class="cta-buttons">
          <NuxtLink to="/start-recovery" class="btn-primary">Start Recovery</NuxtLink>
          <NuxtLink to="/data-recovery/free-data-recovery-quote" class="btn-outline">Get a Free Quote</NuxtLink>
        </div>
      </div>
    </section>

    <FooterBar />
  </div>
</template>

<style scoped>
/* ── Hero ── */
.blog-hero {
  position: relative;
  background: linear-gradient(to bottom, rgba(10,14,24,0.96) 0%, rgba(10,14,24,0.88) 100%), url('/blog-sony-venice-film-set.jpg') center / cover no-repeat;
  color: #fff;
  padding: 100px 0 80px;
  text-align: center;
  overflow: hidden;
}
.hero-bg-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center top, rgba(201,168,76,0.06) 0%, transparent 60%);
  pointer-events: none;
}
.hero-inner { position: relative; z-index: 1; }
.blog-meta {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 24px;
  font-size: 0.8rem;
}
.blog-date { color: #C9A84C; font-weight: 600; }
.blog-category {
  background: rgba(201,168,76,0.15);
  color: #C9A84C;
  padding: 3px 14px;
  border-radius: 20px;
  font-weight: 600;
}
.video-tag {
  background: rgba(99,102,241,0.15);
  color: #a5b4fc;
}
.blog-title {
  font-size: clamp(1.7rem, 3.8vw, 2.8rem);
  font-weight: 800;
  max-width: 860px;
  margin: 0 auto 24px;
  line-height: 1.2;
  letter-spacing: -0.02em;
}
.blog-excerpt {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.65);
  max-width: 680px;
  margin: 0 auto 36px;
  line-height: 1.75;
  font-style: italic;
}
.blog-author {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 50px;
  padding: 10px 20px;
}
.author-avatar {
  width: 36px;
  height: 36px;
  background: #C9A84C;
  color: #1a1a2e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1rem;
  flex-shrink: 0;
}
.author-name { font-size: 0.85rem; font-weight: 700; color: #fff; text-align: left; }
.author-sub { font-size: 0.75rem; color: rgba(255,255,255,0.45); text-align: left; }

/* ── Read CTA (hero) ── */
.read-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 32px;
  background: #C9A84C;
  color: #1a1a2e;
  font-weight: 800;
  font-size: 0.95rem;
  padding: 14px 28px;
  border-radius: 50px;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
  letter-spacing: 0.02em;
}
.read-cta:hover { background: #b8963e; transform: translateY(2px); }
.read-cta-arrow {
  display: inline-block;
  font-size: 1.2rem;
  animation: bounce 1.6s infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(5px); }
}

/* ── Body layout ── */
.blog-body { background: #f8f9fc; }
.blog-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 40px;
  align-items: start;
  padding: 56px 20px 80px;
  max-width: 1160px;
  margin: 0 auto;
}

/* ── Main article ── */
.blog-main {
  background: #fff;
  border-radius: 14px;
  padding: 52px 48px 60px;
  color: #222;
  font-size: 1.06rem;
  line-height: 1.85;
  box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  border: 1px solid #e8edf5;
}
.blog-main p { margin-bottom: 22px; }

/* ── Sidebar ── */
.blog-sidebar {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 88px;
  align-self: start;
}
.sidebar-card {
  background: #fff;
  border-radius: 12px;
  padding: 18px;
  border: 1px solid #e8edf5;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
}
.sidebar-heading {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #a0aec0;
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 2px solid #C9A84C;
  display: inline-block;
}

/* Sidebar posts */
.sidebar-posts { display: flex; flex-direction: column; gap: 16px; }
.sidebar-post {
  text-decoration: none;
  color: inherit;
  border-radius: 10px;
  border: 1px solid #f0f4f8;
  background: #fafbff;
  display: block;
  overflow: hidden;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.sidebar-post:hover { border-color: #C9A84C; box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
.sidebar-post-img-wrap {
  width: 100%;
  height: 110px;
  overflow: hidden;
}
.sidebar-post-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.35s ease;
}
.sidebar-post:hover .sidebar-post-img { transform: scale(1.04); }
.sidebar-post-body { padding: 14px; }
.sidebar-post-cat {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #C9A84C;
  margin-bottom: 6px;
}
.sidebar-post-title {
  font-size: 0.88rem;
  font-weight: 700;
  color: #1a1a2e;
  line-height: 1.4;
  margin-bottom: 8px;
}
.sidebar-post-snippet {
  font-size: 0.78rem;
  color: #718096;
  line-height: 1.6;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.sidebar-post-read {
  font-size: 0.75rem;
  color: #C9A84C;
  font-weight: 700;
}

/* Sidebar CTA */
.sidebar-cta {
  background: linear-gradient(135deg, #0d111f, #1a2035);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  color: #fff;
  border: 1px solid rgba(201,168,76,0.25);
}
.sidebar-cta-icon { font-size: 2rem; margin-bottom: 12px; }
.sidebar-cta h3 {
  font-size: 1.05rem;
  font-weight: 800;
  color: #fff;
  margin-bottom: 10px;
  line-height: 1.3;
}
.sidebar-cta p {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.6);
  line-height: 1.65;
  margin-bottom: 18px;
}
.sidebar-cta-btn {
  display: block;
  background: #C9A84C;
  color: #1a1a2e;
  font-weight: 800;
  font-size: 0.9rem;
  padding: 12px 20px;
  border-radius: 6px;
  text-decoration: none;
  margin-bottom: 10px;
  transition: background 0.2s;
}
.sidebar-cta-btn:hover { background: #b8963e; }
.sidebar-cta-phone {
  display: block;
  color: rgba(255,255,255,0.6);
  font-size: 0.82rem;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s;
}
.sidebar-cta-phone:hover { color: #C9A84C; }

/* Sidebar author */
.sidebar-author {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}
.sidebar-author-avatar {
  width: 40px;
  height: 40px;
  background: #C9A84C;
  color: #1a1a2e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 1rem;
  flex-shrink: 0;
}
.sidebar-author-name {
  font-weight: 800;
  font-size: 0.9rem;
  color: #1a1a2e;
}
.sidebar-author-role {
  font-size: 0.75rem;
  color: #718096;
  line-height: 1.4;
}
.sidebar-author-bio {
  font-size: 0.82rem;
  color: #4a5568;
  line-height: 1.65;
  margin: 0;
}

/* Lead */
.lead-block {
  font-size: 1.18rem;
  line-height: 1.8;
  color: #1a1a2e;
  border-left: 4px solid #C9A84C;
  padding-left: 24px;
  margin-bottom: 48px;
}
.lead-block p:last-child { font-weight: 700; font-size: 1.25rem; margin-bottom: 0; }

/* Section headings */
.section-heading {
  font-size: 1.6rem;
  font-weight: 800;
  color: #1a1a2e;
  margin: 56px 0 20px;
  padding-bottom: 12px;
  border-bottom: 3px solid #C9A84C;
  line-height: 1.25;
}

/* Callout cards */
.callout-card {
  background: #f8f9fc;
  border: 1px solid #e2e8f0;
  border-left: 4px solid #C9A84C;
  border-radius: 8px;
  padding: 24px 28px;
  margin-bottom: 20px;
}
.callout-card.warning { border-left-color: #F59E0B; background: #fffdf0; }
.callout-card.danger { border-left-color: #DC2626; background: #fff5f5; }
.callout-card h3 {
  font-size: 1.05rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 12px;
}
.callout-card p { margin-bottom: 12px; }
.callout-card p:last-child { margin-bottom: 0; }

/* Images */
.blog-image-block {
  margin: 40px 0;
}
.blog-img {
  width: 100%;
  border-radius: 10px;
  display: block;
  object-fit: cover;
  max-height: 420px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}
.img-caption {
  font-size: 0.82rem;
  color: #718096;
  text-align: center;
  margin-top: 12px;
  font-style: italic;
  margin-bottom: 0;
}

/* Lists */
.blog-list {
  margin: 0 0 24px 24px;
  padding: 0;
}
.blog-list li {
  margin-bottom: 10px;
  list-style: disc;
  padding-left: 6px;
}

/* Insight block */
.insight-block {
  background: linear-gradient(135deg, #0d111f, #1a2035);
  color: #fff;
  border-radius: 10px;
  padding: 28px 32px;
  margin: 32px 0;
  font-size: 1.08rem;
  line-height: 1.75;
}
.insight-block p { margin-bottom: 0; }
.insight-block strong { color: #C9A84C; }

/* Phase blocks */
.phase-block {
  background: #f8f9fc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 28px 32px;
  margin-bottom: 24px;
  position: relative;
}
.phase-number {
  display: inline-block;
  background: #C9A84C;
  color: #1a1a2e;
  font-size: 0.72rem;
  font-weight: 900;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 12px;
}
.phase-number.phase-hard { background: #DC2626; color: #fff; }
.phase-title {
  font-size: 1.1rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 14px;
}
.phase-block p { margin-bottom: 14px; }
.phase-block p:last-child { margin-bottom: 0; }

/* Results table */
.results-table-wrap {
  overflow-x: auto;
  margin: 32px 0;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.07);
}
.results-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.96rem;
}
.results-table thead tr {
  background: #1a1a2e;
  color: #fff;
}
.results-table th {
  padding: 14px 20px;
  text-align: left;
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.results-table td {
  padding: 16px 20px;
  vertical-align: middle;
}
.row-success { background: #f0fdf4; }
.row-partial { background: #fffbf0; }
.row-zero { background: #f0f9ff; }
.result-count {
  font-size: 1.4rem;
  font-weight: 900;
  text-align: center;
}
.row-success .result-count { color: #16a34a; }
.row-partial .result-count { color: #d97706; }
.row-zero .result-count { color: #0369a1; }
.result-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 800;
  white-space: nowrap;
}
.result-badge.full { background: #dcfce7; color: #166534; }
.result-badge.partial { background: #fef3c7; color: #92400e; }
.result-badge.zero { background: #dbeafe; color: #1e40af; }

/* Results quote */
.results-quote {
  background: #1a1a2e;
  color: #C9A84C;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 800;
  font-style: italic;
  padding: 28px 32px;
  border-radius: 10px;
  margin: 24px 0 48px;
  line-height: 1.5;
}

/* Lessons */
.lesson-block {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-bottom: 28px;
  padding: 24px;
  background: #f8f9fc;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
}
.lesson-block.lesson-critical { background: #fff5f5; border-color: #fecaca; }
.lesson-number {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: #C9A84C;
  color: #1a1a2e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 1rem;
}
.lesson-block.lesson-critical .lesson-number { background: #DC2626; color: #fff; }
.lesson-block h3 {
  font-size: 1rem;
  font-weight: 800;
  color: #1a1a2e;
  margin-bottom: 8px;
}
.lesson-block p { margin-bottom: 0; font-size: 0.96rem; color: #444; line-height: 1.75; }

/* Emergency block */
.emergency-block {
  background: linear-gradient(135deg, #0d111f 0%, #1a0505 100%);
  color: #fff;
  border-radius: 14px;
  padding: 44px 40px;
  margin: 56px 0 40px;
  border: 1px solid rgba(220,38,38,0.3);
}
.emergency-block h2 {
  font-size: 1.5rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 16px;
}
.emergency-lead {
  font-size: 1.1rem;
  color: #fca5a5;
  margin-bottom: 20px !important;
}
.emergency-block p { color: rgba(255,255,255,0.75); margin-bottom: 16px; }
.emergency-block p:last-of-type { margin-bottom: 28px; }
.emergency-block strong { color: #fff; }
.emergency-cta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 8px;
}
.btn-emergency {
  background: #DC2626;
  color: #fff;
  font-weight: 800;
  font-size: 15px;
  padding: 14px 28px;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s;
}
.btn-emergency:hover { background: #b91c1c; }
.btn-call {
  border: 2px solid #C9A84C;
  color: #C9A84C;
  font-weight: 700;
  font-size: 15px;
  padding: 12px 24px;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s;
}
.btn-call:hover { background: #C9A84C; color: #1a1a2e; }

/* Disclaimer */
.disclaimer {
  font-size: 0.78rem;
  color: #a0aec0;
  font-style: italic;
  text-align: center;
  margin-top: 40px;
}

/* ── Bottom CTA ── */
.cta-section {
  background: linear-gradient(135deg, #0d111f, #1a2035);
  padding: 80px 0;
  text-align: center;
}
.cta-inner { max-width: 680px; margin: 0 auto; }
.cta-title {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 900;
  color: #fff;
  margin-bottom: 16px;
}
.cta-sub {
  color: rgba(255,255,255,0.6);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 36px;
}
.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}
.btn-primary {
  background: #C9A84C;
  color: #1a1a2e;
  font-weight: 800;
  font-size: 1rem;
  padding: 16px 36px;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.2s;
}
.btn-primary:hover { background: #b8963e; }
.btn-outline {
  border: 2px solid rgba(255,255,255,0.3);
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  padding: 14px 32px;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s;
}
.btn-outline:hover { border-color: #fff; background: rgba(255,255,255,0.05); }

/* ── Responsive ── */
@media (max-width: 1024px) {
  .blog-layout { grid-template-columns: 1fr; }
  .blog-sidebar { position: static; top: auto; }
}
@media (max-width: 768px) {
  .blog-hero { padding: 70px 0 56px; }
  .blog-layout { padding: 24px 16px 48px; gap: 24px; }
  .blog-main { padding: 28px 20px 40px; }
  .emergency-block { padding: 28px 20px; }
  .phase-block { padding: 20px 20px; }
  .lesson-block { flex-direction: column; gap: 12px; }
  .results-table th, .results-table td { padding: 12px 14px; }
  .blog-author { flex-direction: column; gap: 8px; text-align: center; }
  .author-name { text-align: center; }
  .read-cta { margin-top: 24px; }
}
</style>
