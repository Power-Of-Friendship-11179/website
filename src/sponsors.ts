import './style.css'
import { photoById } from './season'
import { mount, renderPage } from './site'

function renderPhotoCard(id: string): string {
  const photo = photoById(id)

  return `
    <figure class="photo-card">
      <img src="${photo.src}" alt="${photo.alt}" loading="lazy" />
      <figcaption>
        <strong>${photo.title}</strong>
        <span>${photo.caption}</span>
      </figcaption>
    </figure>
  `
}

mount(
  'sponsors',
  renderPage(
    'sponsors',
    `
      <section class="section section-crimson">
        <div class="story-grid">
          <article class="story-panel">
            <p class="eyebrow">Sponsors</p>
            <h1 class="section-title">Become a sponsor</h1>
            <p class="section-copy">
              Thank you so much for considering sponsoring us. Becoming a sponsor is tax-deductible, very
              easy, and only requires two simple steps.
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

      <section class="section section-cyan">
        <div class="info-grid">
          <article class="info-card">
            <h3>Lorem ipsum</h3>
            <p>Email us at <a href="mailto:frcteam11179@gmail.com">frcteam11179@gmail.com</a> with any inquiries or for a breakdown of sponsorship perks, proof of our tax ID, and more.</p>
          </article>
          <article class="info-card">
            <h3>Lorem ipsum</h3>
            <p>To donate, use the button below, write your organization's name or your name, and then hit continue.</p>
          </article>
          <article class="info-card">
            <h3>Lorem ipsum</h3>
            <p>Sponsoring Team 11179 is tax-deductible on your federal income tax return.</p>
          </article>
        </div>
      </section>

      <section class="section section-gold">
        <header class="section-header">
          <div>
            <p class="eyebrow">Current Partners</p>
            <h2 class="section-title">Lorem ipsum.</h2>
          </div>
        </header>

        <div class="sponsor-logo-grid sponsor-logo-grid-single">
          <article class="logo-panel">
            <p class="eyebrow">Power Level Sponsor</p>
            <h3>NASA</h3>
            <img class="tier-logo nasa-tier-logo big-logo" src="assets/nasa-logo.png" alt="NASA sponsor logo" />
          </article>
        </div>

        <div class="sponsor-logo-grid sponsor-logo-grid-single">
          <article class="logo-panel">
            <p class="eyebrow">Alliance Level Sponsor</p>
            <h3>Argosy Foundation</h3>
            <img class="tier-logo big-logo" src="assets/argosy-foundation.png" alt="Argosy Foundation sponsor logo" />
          </article>
        </div>

        <div class="sponsor-logo-grid">
          <article class="logo-panel">
            <p class="eyebrow">Build Level Sponsor</p>
            <h3>REV Robotics</h3>
            <img class="tier-logo big-logo" src="assets/rev-sponsor.png" alt="REV Robotics sponsor logo" />
          </article>
          <article class="logo-panel">
            <p class="eyebrow">Build Level Sponsor</p>
            <h3>FIRST</h3>
            <img class="tier-logo big-logo" src="assets/first-sponsor.png" alt="FIRST sponsor logo" />
          </article>
        </div>
      </section>

      <section class="section section-spectrum">
        <div class="story-grid reverse">
          <div class="photo-stack">
            ${['robot-front', 'drive-win'].map((id) => renderPhotoCard(id)).join('')}
          </div>

          <article class="story-panel">
            <p class="eyebrow">Contact</p>
            <h2 class="section-title">Lorem ipsum.</h2>
            <ul class="clean-list">
              <li><a href="mailto:rsettle@wcpss.net">rsettle@wcpss.net</a></li>
              <li><a href="mailto:asousa@wcpss.net">asousa@wcpss.net</a></li>
              <li><a href="mailto:frcteam11179@gmail.com">frcteam11179@gmail.com</a></li>
              <li><a href="https://www.instagram.com/afhs_frc11179/" target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </article>
        </div>
      </section>
    `
  )
)
