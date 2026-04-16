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
  'outreach',
  renderPage(
    'outreach',
    `
      <section class="section section-gold">
        <div class="story-grid">
          <article class="story-panel">
            <p class="eyebrow">Events</p>
            <h1 class="section-title">Outreach</h1>
            <p class="section-copy">
              This page highlights the outreach events our team has led to share STEM and robotics with our
              community. Part of our mission statement is to provide STEM opportunities to the youth in our
              community, and we conduct several outreach events to fulfill that mission.
            </p>
          </article>

          <div class="photo-stack">
            ${['family-moment', 'team-group'].map((id) => renderPhotoCard(id)).join('')}
          </div>
        </div>
      </section>

      <section class="section section-cyan">
        <header class="section-header">
          <div>
            <p class="eyebrow">Lorem ipsum</p>
            <h2 class="section-title">Lorem ipsum.</h2>
          </div>
        </header>

        <div class="info-grid">
          <article class="info-card">
            <h3>Lacy Elementary School STEM Night</h3>
            <p>1/15/26</p>
            <p>Coming soon!</p>
          </article>
          <article class="info-card">
            <h3>Academy of Engineering Expo</h3>
            <p>2/25/26</p>
            <p>Coming soon!</p>
          </article>
          <article class="info-card">
            <h3>Woods Creek Elementary STEAM Night</h3>
            <p>3/26/26</p>
            <p>Coming soon!</p>
          </article>
        </div>
      </section>

      <section class="section section-spectrum">
        <div class="story-grid reverse">
          <div class="photo-stack">
            ${['pit-handshake', 'team-heart'].map((id) => renderPhotoCard(id)).join('')}
          </div>

          <article class="story-panel">
            <p class="eyebrow">Competitions</p>
            <h2 class="section-title">Competitions</h2>
            <p class="section-copy">
              We have had two competitions so far. These competitions were a great place to learn, have fun,
              and get inspired by the many wonderful teams we were competing with. These events had the kind
              of atmosphere that showed the coopertition and gracious professionalism that are central to FIRST.
            </p>
            <ul class="clean-list">
              <li><strong>03/06-03/08 Competition:</strong> Our first competition was a great first look into what it means to be on an FRC team. By the end of qualification rounds, we created our own alliance and finished fourth in the competition.</li>
              <li><strong>03/20-03/22 Competition:</strong> Our second competition was more stressful. The robot kept disconnecting during matches and we had to replace most of the electrical system, but the team still earned a third place finish.</li>
              <li><strong>First North Carolina State Championship:</strong> Coming soon!</li>
            </ul>
          </article>
        </div>
      </section>
    `
  )
)
