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
  'about',
  renderPage(
    'about',
    `
      <section class="section section-cyan will-reveal">
        <div class="story-grid">
          <article class="story-panel">
            <p class="eyebrow">About 11179</p>
            <h1 class="section-title">About Us</h1>
            <p class="section-copy">
              Team 11179, The Power of Friendship, is an FRC team located in Apex, NC. Our mission is to
              inspire students of all backgrounds to explore STEM and make a positive impact on our K-12
              campus and community.
            </p>
            <p class="section-copy">
              We're a first-year team based at Apex Friendship High School, competing in the FIRST Robotics
              Competition — a program that challenges students to design, build, and program a robot in six
              weeks and compete against teams from across the region.
            </p>
          </article>

          <div class="photo-stack">
            ${['team-group', 'robot-front'].map((id) => renderPhotoCard(id)).join('')}
          </div>
        </div>
      </section>

      <section class="section section-crimson will-reveal">
        <header class="section-header">
          <div>
            <p class="eyebrow">Quick Facts</p>
            <h2 class="section-title">Who we are — by the numbers.</h2>
          </div>
        </header>

        <div class="info-grid stagger-reveal">
          <article class="info-card">
            <h3>Location</h3>
            <p>Apex, NC — Apex Friendship High School (AFHS). A 9–12 campus in the heart of the Research Triangle area.</p>
          </article>
          <article class="info-card">
            <h3>Mission</h3>
            <p>To inspire students of all backgrounds to explore STEM and make a positive impact on our K-12 campus and community.</p>
          </article>
          <article class="info-card">
            <h3>Team Number</h3>
            <p>FRC Team 11179 — competing in the FIRST Robotics Competition under the FIRST North Carolina district.</p>
          </article>
        </div>
      </section>

      <section class="section section-spectrum will-reveal">
        <div class="story-grid reverse">
          <div class="photo-stack">
            ${['hero-robot', 'family-moment'].map((id) => renderPhotoCard(id)).join('')}
          </div>

          <article class="story-panel">
            <p class="eyebrow">Open Doors</p>
            <h2 class="section-title">Built for everyone. Open to all.</h2>
            <p class="section-copy">
              You don't need robotics experience to join Team 11179. We're built on the idea that every
              student has something to contribute — whether you code, build, design, or just show up ready to learn.
            </p>
            <ul class="clean-list">
              <li>Any student at Apex Friendship High School can join — no prior experience needed.</li>
              <li>Our eight subteams cover technical and non-technical roles for every kind of student.</li>
              <li>We run outreach events at local K-12 schools to spread STEM access across Apex.</li>
              <li>Email <a href="mailto:frcteam11179@gmail.com">frcteam11179@gmail.com</a> or follow <a href="https://www.instagram.com/afhs_frc11179/" target="_blank" rel="noreferrer">@afhs_frc11179</a> to get started.</li>
            </ul>
          </article>
        </div>
      </section>
    `
  )
)
