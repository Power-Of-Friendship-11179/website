import './style.css'
import {
  galleryFilterIds,
  homeHeroPhotoIds,
  photoById,
  robotShowcaseIds,
  seasonEvents,
  seasonStats,
  teamShowcaseIds
} from './season'
import { mount, renderPage } from './site'

function renderPhotoCard(id: string, className = ''): string {
  const photo = photoById(id)

  return `
    <figure class="photo-card ${className}">
      <img src="${photo.src}" alt="${photo.alt}" loading="lazy" />
      <figcaption>
        <strong>${photo.title}</strong>
        <span>${photo.caption}</span>
      </figcaption>
    </figure>
  `
}

mount(
  'home',
  renderPage(
    'home',
    `
      <section class="section hero-section section-spectrum">
        <div class="hero-stage">
          <div class="hero-copy">
            <div>
              <p class="eyebrow">Apex Friendship High School • North Carolina • FRC 11179</p>
              <h1 class="hero-title">Rookie year. Real momentum.</h1>
              <p class="hero-lead">
                The Power of Friendship did not look like a first-year program. Team 11179
                went from rookie debut to a state-championship appearance, collected major
                awards at every stop, and finished its first season ranked 20th in North Carolina.
              </p>

              <div class="button-row">
                <a class="button button-primary" href="join.html">Join The Team</a>
                <a class="button button-secondary" href="sponsors.html">Back The Build</a>
                <a class="button button-ghost" href="team.html">Meet The Crew</a>
              </div>

              <div class="data-strip">
                <span class="data-pill">Wake County #1: Team Spirit Award</span>
                <span class="data-pill">Wake County #2: Rookie All-Star Award</span>
                <span class="data-pill">NC States: Rising All-Star Award</span>
              </div>
            </div>

            <div class="hero-metrics">
              ${seasonStats
                .map(
                  (stat) => `
                    <article class="metric-card">
                      <p class="metric-value">${stat.value}</p>
                      <p class="metric-label">${stat.label}</p>
                      <p class="metric-note">${stat.note}</p>
                    </article>
                  `
                )
                .join('')}
            </div>
          </div>

          <div class="hero-visual" data-hero-rotator>
            ${homeHeroPhotoIds
              .map((id, index) => {
                const photo = photoById(id)

                return `
                  <article class="hero-slide ${index === 0 ? 'active' : ''}" data-slide>
                    <img src="${photo.src}" alt="${photo.alt}" />
                  </article>
                `
              })
              .join('')}

            <div class="hero-flash-card">
              <p class="eyebrow">Season Summary</p>
              <h3>2 Districts + States</h3>
              <p>Quarterfinalists. Semifinalists. Rising All-Star at the state championship.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-crimson">
        <header class="section-header">
          <div>
            <p class="eyebrow">Season Highlights</p>
            <h2 class="section-title">Exact results, front and center.</h2>
          </div>
          <p class="section-copy">
            This season needs to read like a real competitive arc: strong first event, faster second event,
            then a state-level finish that made the trajectory obvious.
          </p>
        </header>

        <div class="results-grid">
          ${seasonEvents
            .map((event) => {
              const photo = photoById(event.photoId)

              return `
                <article class="result-card">
                  <img class="result-photo" src="${photo.src}" alt="${photo.alt}" loading="lazy" />
                  <div class="result-body">
                    <p class="eyebrow">2026 Season Stop</p>
                    <h3>${event.title}</h3>
                    <p class="result-line"><span>Awards Won:</span> ${event.award}</p>
                    ${
                      event.performance
                        ? `<p class="result-line"><span>Performance:</span> ${event.performance}</p>`
                        : ''
                    }
                    <p class="result-summary">${event.summary}</p>
                  </div>
                </article>
              `
            })
            .join('')}
        </div>
      </section>

      <section class="section section-cyan">
        <div class="story-grid">
          <article class="story-panel">
            <p class="eyebrow">Who We Are</p>
            <h2 class="section-title">Not a generic club site. A team with direction.</h2>
            <p class="section-copy">
              The story is simple: 11179 builds with intent, competes hard, and already looks like a program
              that belongs at serious events. The site should reflect that same standard.
            </p>

            <div class="value-stack">
              <article class="value-card">
                <h3>Built to compete</h3>
                <p>Engineering choices, match prep, and pit presence all need to feel deliberate.</p>
              </article>
              <article class="value-card">
                <h3>Culture with edge</h3>
                <p>The team personality matters, but it needs to read as confident and credible, not corny.</p>
              </article>
              <article class="value-card">
                <h3>Just getting started</h3>
                <p>This rookie season was the opening statement, not the ceiling.</p>
              </article>
            </div>
          </article>

          <div class="photo-stack">
            ${teamShowcaseIds.slice(0, 2).map((id) => renderPhotoCard(id)).join('')}
          </div>
        </div>
      </section>

      <section class="section section-steel">
        <header class="section-header">
          <div>
            <p class="eyebrow">Robot / Engineering</p>
            <h2 class="section-title">Show the machine like it earned the spotlight.</h2>
          </div>
          <p class="section-copy">
            The robot gallery should focus on the shots that actually communicate build quality,
            mechanism intent, and match context.
          </p>
        </header>

        <div class="media-grid media-grid-four">
          ${robotShowcaseIds.map((id) => renderPhotoCard(id)).join('')}
        </div>
      </section>

      <section class="section section-gold">
        <div class="story-grid reverse">
          <div class="photo-stack">
            ${['team-group', 'family-moment'].map((id) => renderPhotoCard(id)).join('')}
          </div>

          <article class="story-panel">
            <p class="eyebrow">Team Culture</p>
            <h2 class="section-title">The energy is part of the brand.</h2>
            <p class="section-copy">
              The strongest team photos do more than prove members were in the room. They show chemistry,
              confidence, and the kind of buy-in that makes a rookie team dangerous fast.
            </p>
            <ul class="clean-list">
              <li>Use celebration and driver-station moments to show competitiveness.</li>
              <li>Use sharp group shots to establish credibility and identity.</li>
              <li>Keep novelty photos off the public-facing gallery unless they add real character.</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="section gallery-shell section-spectrum" data-gallery>
        <header class="section-header">
          <div>
            <p class="eyebrow">Photo Gallery</p>
            <h2 class="section-title">Curated, not crowded.</h2>
          </div>
          <p class="section-copy">
            The public gallery should only carry photos that strengthen the team’s image. Robot, Team, and Flicks
            are filterable below. Unusable shots stay out of the site.
          </p>
        </header>

        <div class="filter-row">
          <button class="filter-btn active" data-filter="all" aria-pressed="true">All</button>
          <button class="filter-btn" data-filter="robot" aria-pressed="false">Robot</button>
          <button class="filter-btn" data-filter="team" aria-pressed="false">Team</button>
          <button class="filter-btn" data-filter="flicks" aria-pressed="false">Flicks</button>
        </div>

        <div class="gallery-grid">
          ${galleryFilterIds
            .map((id) => {
              const photo = photoById(id)

              return `
                <figure class="gallery-card" data-category="${photo.category}">
                  <img src="${photo.src}" alt="${photo.alt}" loading="lazy" />
                  <figcaption>
                    <strong>${photo.title}</strong>
                  </figcaption>
                </figure>
              `
            })
            .join('')}
        </div>
      </section>

      <section class="section cta-band section-crimson">
        <div>
          <p class="eyebrow">Next Move</p>
          <h2 class="section-title">Join the build or help power the next season.</h2>
          <p class="section-copy">
            The site should close with action: new members, sponsors, and supporters should know exactly where to go next.
          </p>
        </div>

        <div class="cta-panel">
          <a class="button button-primary" href="join.html">Start Here</a>
          <a class="button button-secondary" href="sponsors.html">Sponsor 11179</a>
          ${renderPhotoCard('team-hype', 'compact')}
        </div>
      </section>
    `
  )
)
