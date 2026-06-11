import './style.css'
import { photoById } from './season'
import { mount, renderPage } from './site'

function renderPhotoCard(id: string): string {
  const photo = photoById(id)

  return `
    <figure class="photo-card">
      <img src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async" />
    </figure>
  `
}

mount(
  'sponsors',
  renderPage(
    'sponsors',
    `
      <section class="section section-crimson will-reveal">
        <div class="story-grid">
          <article class="story-panel">
            <p class="eyebrow">Sponsors</p>
            <h1 class="section-title">Become a sponsor.</h1>
            <p class="section-copy">
              Sponsoring Team 11179 is tax-deductible, straightforward, and a direct investment in students
              pursuing STEM in the Apex community. It takes two steps — and we handle the rest.
            </p>

            <div class="button-row">
              <a class="button button-primary" href="sponsorship-perks.html">View Sponsorship Perks</a>
              <a class="button button-secondary" href="mailto:frcteam11179@gmail.com?subject=FRC%2011179%20Sponsorship%20Interest">Email The Team</a>
            </div>
          </article>

          <div class="photo-stack">
            ${['hero-robot', 'family-moment'].map((id) => renderPhotoCard(id)).join('')}
          </div>
        </div>
      </section>

      <section class="section section-cyan will-reveal">
        <div class="info-grid stagger-reveal">
          <article class="info-card">
            <h3>How To Contact Us</h3>
            <p>Email us at <a href="mailto:frcteam11179@gmail.com">frcteam11179@gmail.com</a> with any questions. We'll send back a full breakdown of sponsorship perks, proof of our tax ID, and anything else you need.</p>
          </article>
          <article class="info-card">
            <h3>How To Donate</h3>
            <p>Use the donation link we'll provide, enter your organization or individual name, and hit continue. It's quick, secure, and tax-deductible on your federal return.</p>
          </article>
          <article class="info-card">
            <h3>Tax Information</h3>
            <p>Sponsoring Team 11179 is tax-deductible on your federal income tax return. We'll provide all documentation needed upon request.</p>
          </article>
        </div>
      </section>

      <section class="section section-gold will-reveal">
        <header class="section-header">
          <div>
            <p class="eyebrow">Current Partners</p>
            <h2 class="section-title">Our sponsors</h2>
          </div>
          <p class="section-copy">
            These organizations have backed Team 11179 this season. We're grateful for every one of them.
          </p>
        </header>

        <div class="sponsor-logo-grid sponsor-logo-grid-single will-reveal">
          <article class="logo-panel">
            <p class="eyebrow">Power Level Sponsor</p>
            <img class="tier-logo big-logo" src="assets/nasa-logo.png" alt="NASA sponsor logo" loading="lazy" decoding="async" />
          </article>
        </div>

        <div class="sponsor-logo-grid sponsor-logo-grid-single will-reveal" style="margin-top: 16px;">
          <article class="logo-panel">
            <p class="eyebrow">Alliance Level Sponsor</p>
            <img class="tier-logo big-logo" src="assets/argosy-foundation.png" alt="Argosy Foundation sponsor logo" loading="lazy" decoding="async" />
          </article>
        </div>

        <div class="sponsor-logo-grid will-reveal" style="margin-top: 16px;">
          <article class="logo-panel">
            <p class="eyebrow">Build Level Sponsor</p>
            <img class="tier-logo big-logo" src="assets/rev-sponsor.png" alt="REV Robotics sponsor logo" loading="lazy" decoding="async" />
          </article>
          <article class="logo-panel">
            <p class="eyebrow">Build Level Sponsor</p>
            <img class="tier-logo big-logo" src="assets/first-sponsor.png" alt="FIRST sponsor logo" loading="lazy" decoding="async" />
          </article>
        </div>
      </section>

      <section class="section section-spectrum will-reveal">
        <div class="story-grid reverse">
          <div class="photo-stack">
            ${['robot-front', 'drive-win'].map((id) => renderPhotoCard(id)).join('')}
          </div>

          <article class="story-panel">
            <p class="eyebrow">Get In Touch</p>
            <h2 class="section-title">Sponsorship contact</h2>
            <p class="section-copy">
              Reach out through any of the contacts below. We're happy to answer questions, schedule a
              call, or send over documentation — whatever you need to move forward.
            </p>
            <ul class="clean-list">
              <li><a href="mailto:rsettle@wcpss.net">rsettle@wcpss.net</a> — Ms. Settle</li>
              <li><a href="mailto:asousa@wcpss.net">asousa@wcpss.net</a> — Ms. Sousa</li>
              <li><a href="mailto:frcteam11179@gmail.com">frcteam11179@gmail.com</a> — Team email</li>
              <li><a href="https://www.instagram.com/afhs_frc11179/" target="_blank" rel="noreferrer">@afhs_frc11179 on Instagram</a></li>
            </ul>
          </article>
        </div>
      </section>
    `
  )
)
