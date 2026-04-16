import './style.css'
import { photoById, seasonEvents, seasonStats } from './season'
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
  'about',
  renderPage(
    'about',
    `
      <section class="section section-cyan">
        <div class="story-grid">
          <article class="story-panel">
            <p class="eyebrow">About 11179</p>
            <h1 class="section-title">A rookie program that already looks established.</h1>
            <p class="section-copy">
              Team 11179 is a student-led FIRST Robotics Competition team at Apex Friendship High School.
              The mission is bigger than building one robot: create a program where engineering, leadership,
              strategy, media, and outreach all move with the same standard.
            </p>
            <p class="section-copy">
              The first season proved the formula works. The team showed up with award-winning culture,
              competitive progress from event to event, and a statewide ranking that made the trajectory obvious.
            </p>
          </article>

          <div class="photo-stack">
            ${['team-group', 'robot-front'].map((id) => renderPhotoCard(id)).join('')}
          </div>
        </div>
      </section>

      <section class="section section-crimson">
        <header class="section-header">
          <div>
            <p class="eyebrow">Rookie Season Signal</p>
            <h2 class="section-title">What the first year actually established.</h2>
          </div>
        </header>

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

      <section class="section section-spectrum">
        <header class="section-header">
          <div>
            <p class="eyebrow">Season Arc</p>
            <h2 class="section-title">From rookie entry to state-level credibility.</h2>
          </div>
          <p class="section-copy">
            The site should tell a competitive story, not just list dates. Each event mattered because it pushed the
            team’s standard higher.
          </p>
        </header>

        <div class="timeline-grid">
          ${seasonEvents
            .map((event) => {
              const photo = photoById(event.photoId)

              return `
                <article class="timeline-card">
                  <img src="${photo.src}" alt="${photo.alt}" loading="lazy" />
                  <div>
                    <p class="eyebrow">Competition Stop</p>
                    <h3>${event.title}</h3>
                    <p><strong>Awards Won:</strong> ${event.award}</p>
                    ${event.performance ? `<p><strong>Performance:</strong> ${event.performance}</p>` : ''}
                    <p>${event.summary}</p>
                  </div>
                </article>
              `
            })
            .join('')}
        </div>
      </section>

      <section class="section section-gold">
        <div class="story-grid reverse">
          <div class="photo-stack">
            ${['hero-robot', 'robot-matchup'].map((id) => renderPhotoCard(id)).join('')}
          </div>

          <article class="story-panel">
            <p class="eyebrow">Identity</p>
            <h2 class="section-title">Engineering, culture, and momentum in the same frame.</h2>
            <div class="value-stack">
              <article class="value-card">
                <h3>Student-led execution</h3>
                <p>Members own real decisions across mechanical, programming, media, business, and strategy.</p>
              </article>
              <article class="value-card">
                <h3>Competition maturity</h3>
                <p>The rookie season mattered because the team looked more composed every time it hit the field.</p>
              </article>
              <article class="value-card">
                <h3>Momentum worth investing in</h3>
                <p>The ranking, awards, and state-championship appearance all point to a program still accelerating.</p>
              </article>
            </div>
          </article>
        </div>
      </section>
    `
  )
)
