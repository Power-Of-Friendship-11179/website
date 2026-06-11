import './style.css'
import { photoById } from './season'
import { mount, renderPage } from './site'

function renderPhotoCard(id: string, className = ''): string {
  const photo = photoById(id)

  return `
    <figure class="photo-card ${className}">
      <img src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async" />
    </figure>
  `
}

mount(
  'join',
  renderPage(
    'join',
    `
    <section class="section section-crimson will-reveal">
      <div class="story-grid">
        <article class="story-panel">
          <p class="eyebrow">Joining The Team</p>
          <h1 class="section-title">Join Team 11179.</h1>
          <p class="section-copy">
            Team 11179 is open to any student at Apex Friendship High School. No experience required —
            just show up ready to work and learn. Here's how to get started.
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

    <section class="section section-cyan will-reveal">
      <header class="section-header">
        <div>
          <p class="eyebrow">Steps To Join</p>
          <h2 class="section-title">How to get on the team.</h2>
        </div>
        <p class="section-copy">
          Four steps is all it takes. We'll walk you through it — and once you're in, you'll find your
          place across one of our eight subteams.
        </p>
      </header>

      <div class="join-steps stagger-reveal">
        <article class="join-step">
          <p class="step-num">01</p>
          <h3>Eligibility</h3>
          <p>Any student at Apex Friendship High School can join. All grade levels and skill levels are welcome — we have technical and non-technical roles for every kind of student.</p>
        </article>
        <article class="join-step">
          <p class="step-num">02</p>
          <h3>Contact the Coaches</h3>
          <p>Email Ms. Settle at <a href="mailto:rsettle@wcpss.net">rsettle@wcpss.net</a> or Ms. Sousa at <a href="mailto:asousa@wcpss.net">asousa@wcpss.net</a> to express your interest. Put "FRC 11179" in the subject line.</p>
        </article>
        <article class="join-step">
          <p class="step-num">03</p>
          <h3>Complete Registration</h3>
          <p>Once you're in contact with the coaches, you'll complete registration through FIRST, sign up on Remind for team updates, and take care of any required onboarding steps.</p>
        </article>
        <article class="join-step">
          <p class="step-num">04</p>
          <h3>Attend Meetings</h3>
          <p>Come to a meeting, meet the subteams, and find where you fit. We'll get you oriented — then you're part of the team.</p>
        </article>
      </div>
    </section>

    <section class="section section-gold will-reveal">
      <div class="schedule-grid stagger-reveal">
        <article class="schedule-card">
          <p class="eyebrow">When We Meet</p>
          <h2 class="section-title">Meeting times</h2>
          <ul class="clean-list">
            <li><strong>Tuesday, Wednesday, Thursday:</strong> 2:30 PM – 5:00 PM</li>
            <li><strong>Saturday:</strong> 9:00 AM – 4:00 PM</li>
          </ul>
          <p style="margin-top: 14px; color: var(--muted); font-size: 0.94rem; line-height: 1.65;">
            Meeting schedules may shift during build season and around competitions. Check Remind or
            Instagram for the latest updates.
          </p>
        </article>

        <article class="schedule-card">
          <p class="eyebrow">How To Reach Us</p>
          <h2 class="section-title">Contact</h2>
          <ul class="clean-list">
            <li><a href="mailto:rsettle@wcpss.net">rsettle@wcpss.net</a> — Ms. Settle</li>
            <li><a href="mailto:asousa@wcpss.net">asousa@wcpss.net</a> — Ms. Sousa</li>
            <li><a href="mailto:frcteam11179@gmail.com">frcteam11179@gmail.com</a> — Team email</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section cta-band section-crimson will-reveal">
      <div>
        <p class="eyebrow">Follow Along</p>
        <h2 class="section-title">Find us on Instagram.</h2>
        <p class="section-copy">
          We post competition updates, build season highlights, and outreach events. Follow
          <a href="https://www.instagram.com/afhs_frc11179/" target="_blank" rel="noreferrer">@afhs_frc11179</a> to stay in the loop.
        </p>
      </div>

      <div class="cta-panel">
        <a class="button button-primary" href="https://www.instagram.com/afhs_frc11179/" target="_blank" rel="noreferrer">@afhs_frc11179</a>
        <a class="button button-secondary" href="team.html">Meet The Team</a>
        ${renderPhotoCard('team-heart', 'compact')}
      </div>
    </section>
  `
  )
)
