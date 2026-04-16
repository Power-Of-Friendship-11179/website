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
            <p class="eyebrow">Outreach</p>
            <h1 class="section-title">Competition credibility should feed community impact.</h1>
            <p class="section-copy">
              Part of the team mission is opening the door to STEM for younger students and families.
              Outreach matters more when the team looks credible doing it, so this page keeps the same polished
              visual standard as the rest of the site.
            </p>
            <div class="value-stack">
              <article class="value-card">
                <h3>Robot demos</h3>
                <p>Use the robot as a conversation starter for design, programming, and engineering.</p>
              </article>
              <article class="value-card">
                <h3>Student leadership</h3>
                <p>Members explain the build process, share their experience, and make STEM feel reachable.</p>
              </article>
              <article class="value-card">
                <h3>Campus and community</h3>
                <p>Every event should reinforce that the team belongs in the school and the larger local robotics scene.</p>
              </article>
            </div>
          </article>

          <div class="photo-stack">
            ${['family-moment', 'team-group'].map((id) => renderPhotoCard(id)).join('')}
          </div>
        </div>
      </section>

      <section class="section section-cyan">
        <header class="section-header">
          <div>
            <p class="eyebrow">How We Show Up</p>
            <h2 class="section-title">Outreach should feel inviting and legit at the same time.</h2>
          </div>
        </header>

        <div class="info-grid">
          <article class="info-card">
            <h3>Interactive demos</h3>
            <p>Let younger students see the robot close-up, ask questions, and connect real engineering to something memorable.</p>
          </article>
          <article class="info-card">
            <h3>STEM storytelling</h3>
            <p>Explain how strategy, fabrication, code, and teamwork all connect inside one competition season.</p>
          </article>
          <article class="info-card">
            <h3>Recruitment pipeline</h3>
            <p>Outreach is also how the team builds future interest, future members, and future confidence in STEM.</p>
          </article>
        </div>
      </section>

      <section class="section section-spectrum">
        <div class="story-grid reverse">
          <div class="photo-stack">
            ${['pit-handshake', 'team-heart'].map((id) => renderPhotoCard(id)).join('')}
          </div>

          <article class="story-panel">
            <p class="eyebrow">Why It Matters</p>
            <h2 class="section-title">The team brand should travel beyond the field.</h2>
            <p class="section-copy">
              A strong outreach page is not filler. It shows that 11179 is building something durable:
              a team that competes hard, represents itself well, and brings other people into the process.
            </p>
            <ul class="clean-list">
              <li>Students act as mentors and translators for STEM concepts.</li>
              <li>Families and younger students get a direct look at what the team is building.</li>
              <li>Every outreach moment reinforces the long-term identity of the program.</li>
            </ul>
          </article>
        </div>
      </section>
    `
  )
)
