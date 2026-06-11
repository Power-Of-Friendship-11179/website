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
  'outreach',
  renderPage(
    'outreach',
    `
      <section class="section section-gold will-reveal">
        <div class="story-grid">
          <article class="story-panel">
            <p class="eyebrow">Events</p>
            <h1 class="section-title">Outreach</h1>
            <p class="section-copy">
              Part of our mission is providing STEM opportunities to the youth in our community. This page
              highlights the outreach events our team has led — and the upcoming ones we're preparing for —
              to share robotics with students across Apex.
            </p>
            <p class="section-copy">
              We've run demos at local elementary schools, participated in engineering expos right on our own
              campus, and we're just getting started.
            </p>
          </article>

          <div class="photo-stack">
            ${['family-moment', 'team-group'].map((id) => renderPhotoCard(id)).join('')}
          </div>
        </div>
      </section>

      <section class="section section-cyan will-reveal">
        <header class="section-header">
          <div>
            <p class="eyebrow">On The Calendar</p>
            <h2 class="section-title">Upcoming outreach events.</h2>
          </div>
          <p class="section-copy">
            These events are where our mission gets real — hands-on STEM for students who haven't seen
            robotics up close. Come find us.
          </p>
        </header>

        <div class="info-grid stagger-reveal">
          <article class="info-card">
            <h3>Lacy Elementary STEM Night</h3>
            <p><strong>January 15, 2026</strong></p>
            <p>An evening of hands-on robotics for K-5 students at Lacy Elementary. We bring the robot, the demos, and the energy — students get to see what STEM looks like in action.</p>
          </article>
          <article class="info-card">
            <h3>Academy of Engineering Expo</h3>
            <p><strong>February 25, 2026</strong></p>
            <p>Showcasing Team 11179 and our robot to students, teachers, and visitors at Apex Friendship's own Academy of Engineering — right where we practice.</p>
          </article>
          <article class="info-card">
            <h3>Woods Creek Elementary STEAM Night</h3>
            <p><strong>March 26, 2026</strong></p>
            <p>Robotics demos and STEM activities for K-5 students at Woods Creek Elementary. Another school, more students, the same mission.</p>
          </article>
        </div>
      </section>

      <section class="section section-spectrum will-reveal">
        <div class="story-grid reverse">
          <div class="photo-stack">
            ${['pit-handshake', 'team-heart'].map((id) => renderPhotoCard(id)).join('')}
          </div>

          <article class="story-panel">
            <p class="eyebrow">This Season</p>
            <h2 class="section-title">Competitions</h2>
            <p class="section-copy">
              We've competed in two regional competitions this season. Both were more than just matches —
              they showed us what coopertition and gracious professionalism actually look like on a competition
              floor, and left us better than we arrived.
            </p>
            <ul class="clean-list">
              <li><strong>03/06–03/08 Regional:</strong> Our first competition. By the end of qualifications, we created our own alliance and finished fourth overall. A strong first look at what FRC is.</li>
              <li><strong>03/20–03/22 Regional:</strong> The robot kept disconnecting during matches. We replaced most of the electrical system on site and still earned a third place finish.</li>
              <li><strong>FIRST NC State Championship:</strong> Coming soon — the team is preparing.</li>
            </ul>
          </article>
        </div>
      </section>
    `
  )
)
