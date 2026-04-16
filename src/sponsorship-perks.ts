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
  'sponsorship-perks',
  renderPage(
    'sponsors',
    `
    <section class="section section-gold">
      <div class="story-grid">
        <article class="story-panel">
          <p class="eyebrow">Sponsorship Perks</p>
          <h1 class="section-title">Sponsorship perks</h1>
          <p class="section-copy">
            In addition to these perks, donating to our team is tax-deductible on your federal income tax return.
          </p>
          <div class="button-row">
            <a class="button button-secondary" href="sponsors.html">Back To Sponsors</a>
            <a class="button button-primary" href="mailto:frcteam11179@gmail.com?subject=FRC%2011179%20Sponsorship%20Interest">Become A Sponsor</a>
          </div>
        </article>

        <div class="photo-stack">
          ${['robot-front', 'drive-win'].map((id) => renderPhotoCard(id)).join('')}
        </div>
      </div>
    </section>

    <section class="section section-spectrum">
      <header class="section-header">
        <div>
          <p class="eyebrow">Sponsor Tiers</p>
          <h2 class="section-title">Lorem ipsum.</h2>
        </div>
      </header>

      <div class="perk-grid">
        <article class="perk-card">
          <p class="eyebrow">Tier 01</p>
          <h3>Friend of 11179 ($1-$499)</h3>
          <p>For this amount of money, you receive:</p>
          <ul class="clean-list">
            <li>A personalized thank-you email/letter</li>
            <li>Team updates within the season</li>
            <li>Recognition on social media (group post)</li>
            <li>Opportunity to attend a robot demo or community outreach event</li>
          </ul>
        </article>

        <article class="perk-card">
          <p class="eyebrow">Tier 02</p>
          <h3>Community Level Sponsor ($500 - $999)</h3>
          <p>For this amount of money, you receive all previous perks, plus:</p>
          <ul class="clean-list">
            <li>Company name on the team website sponsors page</li>
            <li>Social media shoutout thanking your business/organization</li>
            <li>A personalized thank-you letter from the team</li>
          </ul>
        </article>

        <article class="perk-card">
          <p class="eyebrow">Tier 03</p>
          <h3>Build Level Sponsor ($1,000 - $2,999)</h3>
          <p>For this amount of money, you receive all previous perks, plus:</p>
          <ul class="clean-list">
            <li>Small company logo on the team website's sponsors page</li>
            <li>Clickable button to your company website on our website</li>
            <li>Company logo displayed in the competition pit</li>
            <li>Invitation to team open house/outreach event</li>
            <li>Company logo printed on team shirts (size scaled to contribution)</li>
          </ul>
        </article>

        <article class="perk-card">
          <p class="eyebrow">Tier 04</p>
          <h3>Alliance Level Sponsor ($3,000 - $5,999)</h3>
          <p>For this amount of money, you receive all previous perks, plus:</p>
          <ul class="clean-list">
            <li>Medium company logo on the team website's sponsors page</li>
            <li>Logo displayed on the competition robot</li>
            <li>Medium company logo printed on team shirts (size scaled to contribution)</li>
            <li>Option to schedule a team visit at your business or organization</li>
            <li>Recognition in a dedicated sponsor appreciation social media post</li>
          </ul>
        </article>

        <article class="perk-card">
          <p class="eyebrow">Tier 05</p>
          <h3>Power Level Sponsor ($6,000+)</h3>
          <p>For this amount of money, you receive all previous perks, plus:</p>
          <ul class="clean-list">
            <li>Large company logo featured on the team website home page and sponsors page</li>
            <li>Company name recognized as a sponsor during competitions and public events</li>
            <li>Logo displayed prominently in the competition pit</li>
            <li>Invitation to attend a team meeting, build session, or competition</li>
            <li>Personalized sponsor appreciation plaque or frame team photo</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section cta-band section-crimson">
      <div>
        <p class="eyebrow">Lorem ipsum</p>
        <h2 class="section-title">Lorem ipsum.</h2>
        <p class="section-copy">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div class="cta-panel">
        <a class="button button-primary" href="mailto:frcteam11179@gmail.com?subject=FRC%2011179%20Sponsorship%20Interest">Email The Team</a>
        <a class="button button-secondary" href="sponsors.html">Back To Sponsors</a>
        ${renderPhotoCard('robot-closeup', 'compact')}
      </div>
    </section>
  `
  )
)
