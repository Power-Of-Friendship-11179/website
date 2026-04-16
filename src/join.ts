import './style.css'
import { photoById } from './season'
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
  'join',
  renderPage(
    'join',
    `
    <section class="section section-crimson">
      <div class="story-grid">
        <article class="story-panel">
          <p class="eyebrow">Join 11179</p>
          <h1 class="section-title">Plug into a team that is still accelerating.</h1>
          <p class="section-copy">
            Team 11179 is building more than one robot. The team needs builders, coders,
            strategists, designers, storytellers, and people willing to learn fast inside
            a high-standard environment.
          </p>
          <div class="button-row">
            <a class="button button-primary" href="mailto:rsettle@wcpss.net?subject=Interested%20in%20Joining%20FRC%2011179">Email The Advisors</a>
            <a class="button button-secondary" href="team.html">Meet The Team</a>
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
          <p class="eyebrow">Who Should Join</p>
          <h2 class="section-title">There is room for more than one type of student here.</h2>
        </div>
      </header>

      <div class="join-grid">
        <article class="join-card">
          <p class="eyebrow">Eligibility</p>
          <h3>Who can join</h3>
          <p>Students in grades 9-12 at Apex Friendship High School can join Team 11179.</p>
        </article>

        <article class="join-card">
          <p class="eyebrow">Where You Fit</p>
          <h3>Technical and non-technical roles matter.</h3>
          <p>Mechanical, electrical, programming, strategy, media, design, business, and outreach all move the program forward.</p>
        </article>

        <article class="join-card">
          <p class="eyebrow">Expectation</p>
          <h3>Show up ready to contribute.</h3>
          <p>The standard is simple: stay engaged, learn fast, help the team, and keep raising the level around you.</p>
        </article>
      </div>
    </section>

    <section class="section section-spectrum">
      <header class="section-header">
        <div>
          <p class="eyebrow">Process</p>
          <h2 class="section-title">How to get in.</h2>
        </div>
        <p class="section-copy">
          The onboarding path should be clear and low-friction so interested students can move quickly from interest to involvement.
        </p>
      </header>
      <div class="join-steps">
        <article class="join-step">
          <p class="step-num">01</p>
          <h3>Reach out</h3>
          <p>Email Ms. Settle or Ms. Sousa to let them know you want to join the team.</p>
        </article>
        <article class="join-step">
          <p class="step-num">02</p>
          <h3>Finish registration</h3>
          <p>Follow the setup steps from the team email, including FIRST registration and team communication channels.</p>
        </article>
        <article class="join-step">
          <p class="step-num">03</p>
          <h3>Start showing up</h3>
          <p>Come to meetings, meet the subteams, and start finding the lane where you can contribute most.</p>
        </article>
      </div>
    </section>

    <section class="section section-gold">
      <div class="schedule-grid">
        <article class="schedule-card">
          <p class="eyebrow">Meeting Times</p>
          <h2 class="section-title">Weekly build rhythm.</h2>
          <ul class="clean-list">
            <li>Tuesdays, Wednesdays, Thursdays: 2:30 PM - 5:00 PM</li>
            <li>Saturdays: 9:00 AM - 4:00 PM</li>
          </ul>
        </article>

        <article class="schedule-card">
          <p class="eyebrow">Contact</p>
          <h2 class="section-title">Questions first. Then jump in.</h2>
          <ul class="clean-list">
            <li><a href="mailto:rsettle@wcpss.net">rsettle@wcpss.net</a></li>
            <li><a href="mailto:asousa@wcpss.net">asousa@wcpss.net</a></li>
            <li>Reach out if you want to learn more about subteams, time commitment, or the season schedule.</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section cta-band section-crimson">
      <div>
        <p class="eyebrow">Next Step</p>
        <h2 class="section-title">Show up hungry.</h2>
        <p class="section-copy">
          The best way into the program is simple: reach out, get registered, and start building with the team.
        </p>
      </div>

      <div class="cta-panel">
        <a class="button button-primary" href="mailto:rsettle@wcpss.net?subject=Interested%20in%20Joining%20FRC%2011179">Contact Ms. Settle</a>
        <a class="button button-secondary" href="mailto:asousa@wcpss.net?subject=Interested%20in%20Joining%20FRC%2011179">Contact Ms. Sousa</a>
        ${renderPhotoCard('team-heart', 'compact')}
      </div>
    </section>
  `
  )
)
