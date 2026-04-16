import './style.css'
import { homeHeroPhotoIds, photoById, teamShowcaseIds } from './season'
import { mount, renderPage } from './site'

function renderPhotoCard(id: string, className = ''): string {
  const photo = photoById(id)

  return `
    <figure class="photo-card ${className}">
      <img src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async" />
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
                <p class="metric-label">Add stat label</p>
                <p class="metric-note">Add one short sentence explaining what this number means.</p>
              </article>
              <article class="metric-card">
                <p class="metric-value">9-12</p>
                <p class="metric-label">Add stat label</p>
                <p class="metric-note">Add one short sentence explaining what this number means.</p>
              </article>
              <article class="metric-card">
                <p class="metric-value">STEM</p>
                <p class="metric-label">Add stat label</p>
                <p class="metric-note">Add one short sentence explaining what this number means.</p>
              </article>
            </div>
          </div>

          <div class="hero-visual" data-hero-rotator>
            ${homeHeroPhotoIds
              .map((id, index) => {
                const photo = photoById(id)

                return `
                  <article class="hero-slide ${index === 0 ? 'active' : ''}" data-slide>
                    <img
                      src="${photo.src}"
                      alt="${photo.alt}"
                      loading="${index === 0 ? 'eager' : 'lazy'}"
                      decoding="async"
                      fetchpriority="${index === 0 ? 'high' : 'low'}"
                    />
                  </article>
                `
              })
              .join('')}

            <div class="hero-flash-card">
              <p class="eyebrow">Hero Callout</p>
              <h3>Add short hero callout title</h3>
              <p>Add one short sentence for the hero callout box.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section section-crimson">
        <header class="section-header">
          <div>
            <p class="eyebrow">Team 11179</p>
            <h2 class="section-title">Add section title about what the team does.</h2>
          </div>
          <p class="section-copy">
            The beauty of FRC is that everyone plays their own role in many different ways. You do not need
            expertise in everything, and there are plenty of non-technical roles that still help the team.
          </p>
        </header>

        <div class="info-grid">
          <article class="info-card">
            <h3>Add card title for robot work</h3>
            <p>Add one sentence about designing, building, or programming the robot.</p>
          </article>
          <article class="info-card">
            <h3>Add card title for outreach</h3>
            <p>Add one sentence about STEM outreach or community impact.</p>
          </article>
          <article class="info-card">
            <h3>Add card title for student roles</h3>
            <p>Add one sentence about how different students contribute to the team.</p>
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
            <p class="eyebrow">Site Guide</p>
            <h2 class="section-title">Add section title that helps visitors navigate the site.</h2>
          </div>
          <p class="section-copy">
            Add one short sentence explaining what visitors can find on the pages below.
          </p>
        </header>

        <div class="info-grid">
          <article class="info-card">
            <h3>About Us</h3>
            <p>Add one sentence about what visitors should learn on the About Us page.</p>
          </article>
          <article class="info-card">
            <h3>Meet The Team</h3>
            <p>Add one sentence about what visitors should find on the Meet The Team page.</p>
          </article>
          <article class="info-card">
            <h3>Events</h3>
            <p>Add one sentence about what visitors should find on the Events page.</p>
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
            <h2 class="section-title">Add section title about outreach or community impact.</h2>
            <p class="section-copy">
              Add one or two sentences about outreach, STEM access, or community impact.
            </p>
            <ul class="clean-list">
              <li>Add one example of how the team supports STEM in the community.</li>
              <li>Add one example of an outreach activity, event, or partnership.</li>
              <li>Add one example of the impact the team wants visitors to remember.</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="section cta-band section-crimson">
        <div>
          <p class="eyebrow">Next Step</p>
          <h2 class="section-title">Add final call-to-action title.</h2>
          <p class="section-copy">
            Add one short closing sentence telling visitors what to do next.
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
