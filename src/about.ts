import './style.css'
import { photoById } from './season'
import { mount, renderPage } from './site'

function renderPhotoCard(id: string): string {
  const photo = photoById(id)

  return `
    <figure class="photo-card">
      <img src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async" />
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
            <h1 class="section-title">About Us</h1>
            <p class="section-copy">
              Team 11179, The Power of Friendship, is an FRC team located in Apex, NC. Our mission is to
              inspire students of all backgrounds to explore STEM and make a positive impact on our K-12
              campus and community.
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
            <p class="eyebrow">Quick Facts</p>
            <h2 class="section-title">Add section title for quick team facts.</h2>
          </div>
        </header>

        <div class="info-grid">
          <article class="info-card">
            <h3>Location</h3>
            <p>Add the team's city and state.</p>
          </article>
          <article class="info-card">
            <h3>School</h3>
            <p>Add the full school name.</p>
          </article>
          <article class="info-card">
            <h3>Mission</h3>
            <p>Add the mission statement in one sentence.</p>
          </article>
        </div>
      </section>

      <section class="section section-spectrum">
        <div class="story-grid reverse">
          <div class="photo-stack">
            ${['hero-robot', 'family-moment'].map((id) => renderPhotoCard(id)).join('')}
          </div>

          <article class="story-panel">
            <p class="eyebrow">Community</p>
            <h2 class="section-title">Add section title about outreach or community impact.</h2>
            <p class="section-copy">
              Add one or two sentences about the team's impact on students, the school, or the community.
            </p>
            <ul class="clean-list">
              <li>Add one fact about who can join the team.</li>
              <li>Add one fact about outreach, mentoring, or STEM access.</li>
              <li>Add one contact detail you want visitors to notice.</li>
              <li>Add one link or action visitors should take next.</li>
            </ul>
          </article>
        </div>
      </section>
    `
  )
)
