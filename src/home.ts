import './style.css'
import { photoById } from './season'
import { mount, renderPage } from './site'

const hero  = photoById('hero-robot')
const team  = photoById('team-group')
const pit   = photoById('pit-handshake')
const win   = photoById('drive-win')
const hype  = photoById('team-hype')
const state = photoById('hero-celebration')

mount(
  'home',
  renderPage(
    'home',
    `
    <!-- ── HERO ───────────────────────────────────── -->
    <section class="hero-section">
      <div class="hero-bg">
        <img src="${hero.src}" alt="" id="hero-parallax" loading="eager" fetchpriority="high" />
      </div>
      <div class="hero-watermark" aria-hidden="true">11179</div>

      <div class="hero-content">
        <p class="hero-eyebrow">
          <span class="hero-dot"></span>
          FRC Team 11179 · Apex Friendship HS · Apex, NC · Season 2024–2025
        </p>
        <h1 class="hero-title">
          The Power<br>of <em>Friendship</em>
        </h1>
        <p class="hero-sub">
          We build robots, run STEM events across Apex, qualify for states,
          and win awards — all while having a great time doing it.
        </p>
        <div class="hero-actions">
          <a href="join.html" class="btn btn-primary">Join the Team →</a>
          <a href="team.html" class="btn btn-secondary">Meet Everyone</a>
        </div>
      </div>

      <!-- bottom stats bar -->
      <div class="hero-stats-strip">
        <div class="hstat">
          <strong>3</strong>
          <span>Competitions</span>
        </div>
        <div class="hstat red">
          <strong>3rd</strong>
          <span>Best Regional Finish</span>
        </div>
        <div class="hstat">
          <strong>20th</strong>
          <span>NC State Championship</span>
        </div>
        <div class="hstat gold">
          <strong>★</strong>
          <span>Rising All Star Award</span>
        </div>
        <div class="hstat cyan">
          <strong>8</strong>
          <span>Active Subteams</span>
        </div>
      </div>

      <div class="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- ── AWARD ANNOUNCEMENT BAND ────────────────── -->
    <div class="state-band">
      <div class="state-band-inner">
        <span class="state-dot"></span>
        <strong>★ Rising All Star Award — NC State Championship, April 2026</strong>
        <span class="state-chip">State Qualified</span>
      </div>
    </div>

    <!-- ── DOUBLE MARQUEE ─────────────────────────── -->
    <div class="double-marquee" aria-hidden="true">
      <!-- Row 1 — forward -->
      <div class="marquee-track">
        <div class="marquee-run">
          <span class="marquee-item hi">FRC Team 11179</span>
          <span class="marquee-item red">Regional One — 4th Place</span>
          <span class="marquee-item hi">Created Our Own Alliance</span>
          <span class="marquee-item gold">Regional Two — 3rd Place</span>
          <span class="marquee-item hi">Rebuilt Electrical Mid-Match</span>
          <span class="marquee-item cyan">NC State Championship — 20th Place</span>
          <span class="marquee-item gold">★ Rising All Star Award</span>
          <span class="marquee-item hi">Apex Friendship High School</span>
          <span class="marquee-item hi">FRC Team 11179</span>
          <span class="marquee-item red">Regional One — 4th Place</span>
          <span class="marquee-item hi">Created Our Own Alliance</span>
          <span class="marquee-item gold">Regional Two — 3rd Place</span>
          <span class="marquee-item hi">Rebuilt Electrical Mid-Match</span>
          <span class="marquee-item cyan">NC State Championship — 20th Place</span>
          <span class="marquee-item gold">★ Rising All Star Award</span>
          <span class="marquee-item hi">Apex Friendship High School</span>
        </div>
      </div>
      <!-- Row 2 — reverse -->
      <div class="marquee-track">
        <div class="marquee-run reverse-dir">
          <span class="marquee-item">NASA Power Level Sponsor</span>
          <span class="marquee-item red">8 Subteams</span>
          <span class="marquee-item">Mechanical · Programming · Business</span>
          <span class="marquee-item gold">Electrical · Outreach · Design</span>
          <span class="marquee-item">Media · Safety</span>
          <span class="marquee-item cyan">STEM Outreach · K-12 Apex</span>
          <span class="marquee-item">Season 2024–2025</span>
          <span class="marquee-item red">Apex, North Carolina</span>
          <span class="marquee-item">NASA Power Level Sponsor</span>
          <span class="marquee-item red">8 Subteams</span>
          <span class="marquee-item">Mechanical · Programming · Business</span>
          <span class="marquee-item gold">Electrical · Outreach · Design</span>
          <span class="marquee-item">Media · Safety</span>
          <span class="marquee-item cyan">STEM Outreach · K-12 Apex</span>
          <span class="marquee-item">Season 2024–2025</span>
          <span class="marquee-item red">Apex, North Carolina</span>
        </div>
      </div>
    </div>

    <!-- ── RISING ALL STAR AWARD SECTION ─────────── -->
    <section class="award-section will-reveal">
      <div class="award-inner">
        <div class="award-meta">
          <span class="award-meta-tag">NC State Championship · April 9–12, 2026</span>
          <span class="award-meta-tag">20th Place Finish</span>
        </div>
        <div class="award-body">
          <div class="award-star-wrap">
            <span class="award-star" aria-hidden="true">★</span>
            <span class="award-place-tag">2026 Award Winner</span>
          </div>
          <div class="award-copy">
            <p class="award-eyebrow">NC State Championship</p>
            <h2 class="award-title">Rising<br>All Star</h2>
            <p class="award-desc">
              The Rising All Star Award recognizes a team that demonstrates exceptional performance
              in Gracious Professionalism, Coopertition, and community impact. We earned it at the
              state level — competing against the best teams in North Carolina. Team 11179 won it in
              our first season.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── METRICS — 4 STATS ──────────────────────── -->
    <div class="metrics-band metrics-4 will-reveal">
      <div class="metrics-inner stagger-reveal">
        <div class="metric-item">
          <p class="metric-num" data-count="3">0</p>
          <p class="metric-label">Competitions</p>
          <p class="metric-desc">Two regionals and the NC State Championship — all in year one.</p>
        </div>
        <div class="metric-item">
          <p class="metric-num red">3rd</p>
          <p class="metric-label">Best Regional Finish</p>
          <p class="metric-desc">After rebuilding our electrical system on-site, mid-competition.</p>
        </div>
        <div class="metric-item">
          <p class="metric-num">20th</p>
          <p class="metric-label">State Championship</p>
          <p class="metric-desc">Placed 20th at the NC State Championship in our debut season.</p>
        </div>
        <div class="metric-item">
          <p class="metric-num" data-count="8">0</p>
          <p class="metric-label">Subteams</p>
          <p class="metric-desc">Every skill matters here — technical, creative, and everything between.</p>
        </div>
      </div>
    </div>

    <!-- ── ABOUT SPLIT ────────────────────────────── -->
    <section class="section tint-red will-reveal">
      <div class="split">
        <div class="split-media reveal-left">
          <div class="media-frame">
            <img src="${team.src}" alt="${team.alt}" loading="lazy" decoding="async" />
          </div>
          <div class="media-badge">
            <p class="media-badge-num">11179</p>
            <p class="media-badge-label">Apex, NC</p>
          </div>
        </div>
        <div class="split-content reveal-right">
          <p class="eyebrow">Who We Are</p>
          <h2 class="section-title">A team that<br><span class="grad-red">actually has fun.</span></h2>
          <p class="section-copy">
            Yes, we compete seriously — podium finishes, state championships, award wins. But Team 11179
            is also the group that rebuilds electrical systems live at events, creates their own alliance
            from scratch, and runs robotics demos for elementary schoolers across Apex every semester.
          </p>
          <p class="section-copy">
            Eight subteams. Dozens of students. One season they won't forget.
          </p>
          <div class="btn-row" style="margin-top: 8px;">
            <a href="about.html" class="btn btn-primary">Learn More</a>
            <a href="team.html" class="btn btn-outline">Meet the Roster →</a>
          </div>
        </div>
      </div>
    </section>

    <!-- ── FEATURE PHOTO — TEAM MOMENT ───────────── -->
    <section class="feature-section">
      <img
        src="${hype.src}"
        alt="Team 11179 celebrating"
        class="feature-img"
        id="feature-parallax"
        loading="lazy"
        decoding="async"
      />
      <div class="feature-overlay">
        <h2 class="feature-title">All in.<br><em>Every day.</em></h2>
        <p class="feature-sub">The whole team — build season, competitions, outreach, and everything between.</p>
        <a href="team.html" class="btn btn-secondary">Meet the Team →</a>
      </div>
    </section>

    <!-- ── COMPETITION RESULTS ───────────────────── -->
    <section class="section tint-cyan">
      <div class="wrap">
        <div class="section-head center will-reveal">
          <p class="eyebrow">2024–2025 Season Results</p>
          <h2 class="section-title">Three events.<br>Every one counted.</h2>
        </div>

        <!-- first two regionals -->
        <div class="comp-grid stagger-reveal" style="margin-bottom: 20px;">
          <article class="comp-card">
            <div class="comp-img">
              <img src="${pit.src}" alt="${pit.alt}" loading="lazy" decoding="async" />
            </div>
            <div class="comp-body">
              <p class="comp-date">March 6–8, 2025 · Regional One</p>
              <h3>First Regional Competition</h3>
              <span class="comp-badge badge-default">4th Place</span>
              <p>Our debut. Created our own alliance during qualifications and finished fourth — learning everything we needed going into round two.</p>
            </div>
          </article>
          <article class="comp-card">
            <div class="comp-img">
              <img src="${win.src}" alt="${win.alt}" loading="lazy" decoding="async" />
            </div>
            <div class="comp-body">
              <p class="comp-date">March 20–22, 2025 · Regional Two</p>
              <h3>Second Regional Competition</h3>
              <span class="comp-badge badge-gold">3rd Place</span>
              <p>The robot kept disconnecting. We rebuilt most of the electrical system on-site and still earned a podium finish.</p>
            </div>
          </article>
          <article class="comp-card">
            <div class="comp-img">
              <img src="${state.src}" alt="${state.alt}" loading="lazy" decoding="async" />
            </div>
            <div class="comp-body">
              <p class="comp-date">April 9–12, 2026 · NC State Championship</p>
              <h3>State Championship</h3>
              <span class="comp-badge badge-gold">20th Place + Rising All Star Award</span>
              <p>We qualified, competed at the state level, placed 20th, and brought home the Rising All Star Award. First season. Already winning.</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ── SUBTEAMS ───────────────────────────────── -->
    <section class="section">
      <div class="wrap">
        <div class="section-head center will-reveal">
          <p class="eyebrow">How We're Built</p>
          <h2 class="section-title">Eight subteams.<br>One mission.</h2>
          <p class="section-copy" style="margin-left:auto; margin-right:auto;">
            Technical or not — there's a real role here for you. Every skill matters.
          </p>
        </div>
        <div class="subteam-grid stagger-reveal">
          <div class="subteam-card">
            <span class="subteam-tag">01 · Mechanical</span>
            <h3>Mechanical</h3>
            <p>Designs and builds the robot — chassis, drivetrain, and every mechanism that touches the field.</p>
          </div>
          <div class="subteam-card">
            <span class="subteam-tag">02 · Programming</span>
            <h3>Programming</h3>
            <p>Writes the code behind autonomous routines, driver controls, and all robot sensor systems.</p>
          </div>
          <div class="subteam-card">
            <span class="subteam-tag">03 · Business</span>
            <h3>Business</h3>
            <p>Handles fundraising, grant writing, sponsor relationships, and financial planning.</p>
          </div>
          <div class="subteam-card">
            <span class="subteam-tag">04 · Electrical</span>
            <h3>Electrical</h3>
            <p>Wires the robot from scratch — motors, sensors, control hardware, power distribution.</p>
          </div>
          <div class="subteam-card">
            <span class="subteam-tag">05 · Outreach</span>
            <h3>Outreach</h3>
            <p>Plans and runs STEM events at local schools — the public face of our community mission.</p>
          </div>
          <div class="subteam-card">
            <span class="subteam-tag">06 · Design</span>
            <h3>Design</h3>
            <p>Creates CAD models, technical drawings, and visual assets for the robot and team brand.</p>
          </div>
          <div class="subteam-card">
            <span class="subteam-tag">07 · Media</span>
            <h3>Media</h3>
            <p>Documents the season through photos, video, and social media — telling the team's story.</p>
          </div>
          <div class="subteam-card">
            <span class="subteam-tag">08 · Safety</span>
            <h3>Safety</h3>
            <p>Keeps every build session and competition day safe — protocols, checks, and accountability.</p>
          </div>
        </div>
        <div style="text-align:center; margin-top:44px;">
          <a href="team.html" class="btn btn-secondary">See the Full Roster →</a>
        </div>
      </div>
    </section>

    <!-- ── OUTREACH ───────────────────────────────── -->
    <section class="section tint-gold">
      <div class="wrap">
        <div class="section-head center will-reveal">
          <p class="eyebrow">Community First</p>
          <h2 class="section-title">Robotics for<br>the whole community.</h2>
        </div>
        <div class="outreach-grid stagger-reveal">
          <article class="outreach-card">
            <span class="outreach-tag">Jan 15, 2026 · Lacy Elementary</span>
            <h3>STEM Night</h3>
            <p>Hands-on robotics for K-5 students. We bring the robot, the demos, and the energy — students see STEM in action.</p>
          </article>
          <article class="outreach-card">
            <span class="outreach-tag">Feb 25, 2026 · Apex Friendship HS</span>
            <h3>Engineering Expo</h3>
            <p>Showcasing Team 11179 at our own school's Academy of Engineering Expo — right where we practice.</p>
          </article>
          <article class="outreach-card">
            <span class="outreach-tag">Mar 26, 2026 · Woods Creek Elem.</span>
            <h3>STEAM Night</h3>
            <p>Robotics demos and STEM activities for K-5 students. More schools, more students, same mission.</p>
          </article>
        </div>
        <div style="text-align:center; margin-top:44px;">
          <a href="outreach.html" class="btn btn-secondary">View All Events →</a>
        </div>
      </div>
    </section>

    <!-- ── SPONSORS ───────────────────────────────── -->
    <section class="sponsor-strip will-reveal">
      <div class="sponsor-strip-inner">
        <p class="sponsor-strip-label">Backed by great partners</p>
        <div class="sponsor-logos stagger-reveal">
          <div class="sponsor-logo">
            <img src="assets/nasa-logo.png" alt="NASA" loading="lazy" />
            <span class="sponsor-tier">Power Level</span>
          </div>
          <div class="sponsor-logo">
            <img src="assets/argosy-foundation.png" alt="Argosy Foundation" loading="lazy" />
            <span class="sponsor-tier">Alliance Level</span>
          </div>
          <div class="sponsor-logo">
            <img src="assets/rev-sponsor.png" alt="REV Robotics" loading="lazy" />
            <span class="sponsor-tier">Build Level</span>
          </div>
          <div class="sponsor-logo">
            <img src="assets/first-sponsor.png" alt="FIRST" loading="lazy" />
            <span class="sponsor-tier">Build Level</span>
          </div>
        </div>
        <div style="text-align:center; margin-top:36px;">
          <a href="sponsorship-perks.html" class="btn btn-outline">Sponsor Perks →</a>
        </div>
      </div>
    </section>

    <!-- ── JOIN CTA ───────────────────────────────── -->
    <section class="cta-section will-reveal">
      <div class="cta-inner">
        <p class="eyebrow" style="justify-content:center;">Open to all AFHS students</p>
        <h2 class="cta-title">Your spot<br>is <em>open.</em></h2>
        <p class="cta-sub">
          No experience. No prerequisites. Every AFHS student is welcome — just show up ready
          to learn, and we'll find exactly where you fit.
        </p>
        <div class="hero-actions" style="justify-content:center;">
          <a href="join.html" class="btn btn-primary">Join the Team →</a>
          <a href="mailto:frcteam11179@gmail.com" class="btn btn-secondary">Email Us</a>
        </div>
      </div>
    </section>
    `
  )
)
