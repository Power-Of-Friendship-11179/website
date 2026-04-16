import './style.css'
import { photoById } from './season'
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
            <p class="eyebrow">Lorem ipsum</p>
            <h2 class="section-title">Lorem ipsum.</h2>
          </div>
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

      <section class="section section-spectrum">
        <div class="story-grid reverse">
          <div class="photo-stack">
            ${['hero-robot', 'family-moment'].map((id) => renderPhotoCard(id)).join('')}
          </div>

          <article class="story-panel">
            <p class="eyebrow">Lorem ipsum</p>
            <h2 class="section-title">Lorem ipsum.</h2>
            <p class="section-copy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <ul class="clean-list">
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </article>
        </div>
      </section>
    `
  )
)
