import './style.css'
import { photoById, seasonStats } from './season'
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
            <h1 class="section-title">Back a team that already has proof of concept.</h1>
            <p class="section-copy">
              Sponsors are not just logos on a page. They are part of what allowed Team 11179 to build,
              compete, reach the state championship, and establish itself this quickly in North Carolina.
            </p>

            <div class="button-row">
              <a class="button button-primary" href="sponsorship-perks.html">View Sponsorship Perks</a>
              <a class="button button-secondary" href="mailto:rsettle@wcpss.net?subject=FRC%2011179%20Sponsorship%20Interest">Become A Sponsor</a>
            </div>
          </article>

          <div class="photo-stack">
            ${['hero-robot', 'family-moment'].map((id) => renderPhotoCard(id)).join('')}
          </div>
        </div>
      </section>

      <section class="section section-cyan">
        <div class="info-grid">
          ${seasonStats
            .map(
              (stat) => `
                <article class="info-card">
                  <p class="metric-value">${stat.value}</p>
                  <h3>${stat.label}</h3>
                  <p>${stat.note}</p>
                </article>
              `
            )
            .join('')}
        </div>
      </section>

      <section class="section section-gold">
        <header class="section-header">
          <div>
            <p class="eyebrow">Current Partners</p>
            <h2 class="section-title">The companies and organizations behind the season.</h2>
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
            <p class="eyebrow">Partnership Value</p>
            <h2 class="section-title">Why support 11179 now.</h2>
            <ul class="clean-list">
              <li>Your support funds robot development, tools, travel, and student opportunity.</li>
              <li>The team is already producing visible results, which makes new support immediately meaningful.</li>
              <li>Sponsorship also extends into community outreach and STEM access beyond competition weekends.</li>
            </ul>
            <p class="section-copy">
              Contact the team at <a href="mailto:rsettle@wcpss.net">rsettle@wcpss.net</a> or
              <a href="mailto:asousa@wcpss.net">asousa@wcpss.net</a> to start the conversation.
            </p>
          </article>
        </div>
      </section>
    `
  )
)
