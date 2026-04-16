import './style.css'
import { photoById } from './season'
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
  'join',
  renderPage(
    'join',
    `
    <section class="section section-crimson">
      <div class="story-grid">
        <article class="story-panel">
          <p class="eyebrow">Joining The Team</p>
          <h1 class="section-title">Joining the team</h1>
          <p class="section-copy">
            Steps to join the team:
          </p>
          <div class="button-row">
            <a class="button button-primary" href="mailto:rsettle@wcpss.net?subject=Interested%20in%20Joining%20FRC%2011179">Email Ms. Settle</a>
            <a class="button button-secondary" href="mailto:asousa@wcpss.net?subject=Interested%20in%20Joining%20FRC%2011179">Email Ms. Sousa</a>
          </div>
        </article>

        <div class="photo-stack">
          ${['team-group', 'hero-celebration'].map((id) => renderPhotoCard(id)).join('')}
        </div>
      </div>
    </section>

    <section class="section section-cyan">
      <header class="section-header">
        <div>
          <p class="eyebrow">Steps To Join</p>
          <h2 class="section-title">Add section title for how students join.</h2>
        </div>
      </header>

      <div class="join-steps">
        <article class="join-step">
          <p class="step-num">01</p>
          <h3>Eligibility</h3>
          <p>Add one sentence explaining who can join the team.</p>
        </article>
        <article class="join-step">
          <p class="step-num">02</p>
          <h3>Contact Coaches</h3>
          <p>Add one sentence telling students to email the coaches.</p>
        </article>
        <article class="join-step">
          <p class="step-num">03</p>
          <h3>Registration Steps</h3>
          <p>Add one sentence about FIRST registration, Remind, and any setup steps.</p>
        </article>
        <article class="join-step">
          <p class="step-num">04</p>
          <h3>Attend Meetings</h3>
          <p>Add one sentence about showing up, meeting subteams, and getting involved.</p>
        </article>
      </div>
    </section>

    <section class="section section-gold">
      <div class="schedule-grid">
        <article class="schedule-card">
          <p class="eyebrow">Meeting Times</p>
          <h2 class="section-title">Meeting times</h2>
          <ul class="clean-list">
            <li>Tuesdays, Wednesdays, Thursdays: 2:30 PM - 5:00 PM</li>
            <li>Saturdays: 9:00 AM - 4:00 PM</li>
          </ul>
        </article>

        <article class="schedule-card">
          <p class="eyebrow">Coach Emails</p>
          <h2 class="section-title">Contact</h2>
          <ul class="clean-list">
            <li><a href="mailto:rsettle@wcpss.net">rsettle@wcpss.net</a></li>
            <li><a href="mailto:asousa@wcpss.net">asousa@wcpss.net</a></li>
            <li><a href="mailto:frcteam11179@gmail.com">frcteam11179@gmail.com</a></li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section cta-band section-crimson">
      <div>
        <p class="eyebrow">Instagram</p>
        <h2 class="section-title">Check out our Instagram.</h2>
        <p class="section-copy">
          Add one short sentence inviting students to follow Instagram or email questions.
        </p>
      </div>

      <div class="cta-panel">
        <a class="button button-primary" href="https://www.instagram.com/afhs_frc11179/" target="_blank" rel="noreferrer">Instagram</a>
        <a class="button button-secondary" href="team.html">Meet The Team</a>
        ${renderPhotoCard('team-heart', 'compact')}
      </div>
    </section>
  `
  )
)
