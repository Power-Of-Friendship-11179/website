import './style.css'
import { homeHeroPhotoIds, photoById, teamShowcaseIds } from './season'
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
              <p class="eyebrow">Apex Friendship High School • Apex, NC • FRC 11179</p>
              <h1 class="hero-title">The Power of Friendship</h1>
              <p class="hero-lead">
                Team 11179, The Power of Friendship, is an FRC team located in Apex, NC. Our mission is
                to inspire students of all backgrounds to explore STEM and make a positive impact on our
                K-12 campus and community.
              </p>

              <div class="button-row">
                <a class="button button-primary" href="join.html">Join The Team</a>
                <a class="button button-secondary" href="team.html">Meet The Team</a>
                <a class="button button-ghost" href="sponsors.html">Become A Sponsor</a>
              </div>

              <div class="data-strip">
                <span class="data-pill">Apex Friendship High School</span>
                <span class="data-pill">FIRST Robotics Competition Team 11179</span>
                <span class="data-pill">K-12 Campus And Community Impact</span>
              </div>
            </div>

            <div class="hero-metrics">
              <article class="metric-card">
                <p class="metric-value">2</p>
                <p class="metric-label">Lorem ipsum</p>
                <p class="metric-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </article>
              <article class="metric-card">
                <p class="metric-value">9-12</p>
                <p class="metric-label">Lorem ipsum</p>
                <p class="metric-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </article>
              <article class="metric-card">
                <p class="metric-value">STEM</p>
                <p class="metric-label">Lorem ipsum</p>
                <p class="metric-note">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </article>
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
              <p class="eyebrow">Lorem ipsum</p>
              <h3>Lorem ipsum</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-crimson">
        <header class="section-header">
          <div>
            <p class="eyebrow">Team 11179</p>
            <h2 class="section-title">Lorem ipsum.</h2>
          </div>
          <p class="section-copy">
            The beauty of FRC is that everyone plays their own role in many different ways. You do not need
            expertise in everything, and there are plenty of non-technical roles that still help the team.
          </p>
        </header>

        <div class="info-grid">
          <article class="info-card">
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </article>
          <article class="info-card">
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </article>
          <article class="info-card">
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </article>
        </div>
      </section>

      <section class="section section-cyan">
        <div class="story-grid">
          <article class="story-panel">
            <p class="eyebrow">Competitions</p>
            <h2 class="section-title">Two competitions so far.</h2>
            <p class="section-copy">
              We have had two competitions so far. These competitions were a great place to learn, have fun,
              and get inspired by the many wonderful teams we were competing with.
            </p>

            <ul class="clean-list">
              <li>03/06-03/08 Competition: the team created its own alliance and finished fourth overall.</li>
              <li>03/20-03/22 Competition: the team worked through major electrical issues and finished in third place.</li>
              <li>First North Carolina State Championship: coming soon.</li>
            </ul>
          </article>

          <div class="photo-stack">
            ${teamShowcaseIds.slice(0, 2).map((id) => renderPhotoCard(id)).join('')}
          </div>
        </div>
      </section>

      <section class="section section-steel">
        <header class="section-header">
          <div>
            <p class="eyebrow">Lorem ipsum</p>
            <h2 class="section-title">Lorem ipsum.</h2>
          </div>
          <p class="section-copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </header>

        <div class="info-grid">
          <article class="info-card">
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </article>
          <article class="info-card">
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </article>
          <article class="info-card">
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </article>
        </div>
      </section>

      <section class="section section-gold">
        <div class="story-grid reverse">
          <div class="photo-stack">
            ${['team-group', 'family-moment'].map((id) => renderPhotoCard(id)).join('')}
          </div>

          <article class="story-panel">
            <p class="eyebrow">Community</p>
            <h2 class="section-title">Lorem ipsum.</h2>
            <p class="section-copy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ul class="clean-list">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="section cta-band section-crimson">
        <div>
          <p class="eyebrow">Lorem ipsum</p>
          <h2 class="section-title">Lorem ipsum.</h2>
          <p class="section-copy">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div class="cta-panel">
          <a class="button button-primary" href="join.html">Joining The Team</a>
          <a class="button button-secondary" href="sponsors.html">Become A Sponsor</a>
          ${renderPhotoCard('team-hype', 'compact')}
        </div>
      </section>
    `
  )
)
