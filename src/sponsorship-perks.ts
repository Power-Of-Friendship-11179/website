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
  'sponsorship-perks',
  renderPage(
    'sponsors',
    `
    <section class="section section-gold will-reveal">
      <div class="story-grid">
        <article class="story-panel">
          <p class="eyebrow">Sponsorship Perks</p>
          <h1 class="section-title">What you get as a sponsor.</h1>
          <p class="section-copy">
            In addition to these perks, sponsoring Team 11179 is tax-deductible on your federal income tax
            return. We're happy to provide documentation, our tax ID, and a full breakdown of what your
            contribution funds.
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

    <section class="section section-spectrum will-reveal">
      <header class="section-header">
        <div>
          <p class="eyebrow">Sponsor Tiers</p>
          <h2 class="section-title">Perks by sponsor level.</h2>
        </div>
        <p class="section-copy">
          Every level includes the perks from tiers below it. More contribution means more visibility,
          more access, and a deeper partnership with the team.
        </p>
      </header>

      <div class="perk-grid stagger-reveal">
        <article class="perk-card">
          <p class="eyebrow">Tier 01</p>
          <h3>Friend of 11179 ($1–$499)</h3>
          <ul class="clean-list">
            <li>Personalized thank-you email or letter</li>
            <li>Team updates throughout the season</li>
            <li>Recognition on social media (group post)</li>
            <li>Opportunity to attend a robot demo or community outreach event</li>
          </ul>
        </article>

        <article class="perk-card">
          <p class="eyebrow">Tier 02</p>
          <h3>Community Level ($500–$999)</h3>
          <p>All previous perks, plus:</p>
          <ul class="clean-list">
            <li>Company name on the team website sponsors page</li>
            <li>Social media shoutout thanking your organization</li>
            <li>Personalized thank-you letter from the team</li>
          </ul>
        </article>

        <article class="perk-card">
          <p class="eyebrow">Tier 03</p>
          <h3>Build Level ($1,000–$2,999)</h3>
          <p>All previous perks, plus:</p>
          <ul class="clean-list">
            <li>Small company logo on the team website's sponsors page</li>
            <li>Clickable link to your company website on our site</li>
            <li>Company logo displayed in the competition pit</li>
            <li>Invitation to team open house or outreach event</li>
            <li>Company logo printed on team shirts (size scaled to contribution)</li>
          </ul>
        </article>

        <article class="perk-card">
          <p class="eyebrow">Tier 04</p>
          <h3>Alliance Level ($3,000–$5,999)</h3>
          <p>All previous perks, plus:</p>
          <ul class="clean-list">
            <li>Medium company logo on the team website's sponsors page</li>
            <li>Logo displayed on the competition robot</li>
            <li>Medium company logo printed on team shirts</li>
            <li>Option to schedule a team visit at your business or organization</li>
            <li>Recognition in a dedicated sponsor appreciation post</li>
          </ul>
        </article>

        <article class="perk-card">
          <p class="eyebrow">Tier 05</p>
          <h3>Power Level ($6,000+)</h3>
          <p>All previous perks, plus:</p>
          <ul class="clean-list">
            <li>Large company logo featured on the team website home page and sponsors page</li>
            <li>Company name recognized as a sponsor at competitions and public events</li>
            <li>Logo displayed prominently in the competition pit</li>
            <li>Invitation to attend a team meeting, build session, or competition</li>
            <li>Personalized sponsor appreciation plaque or framed team photo</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section cta-band section-crimson will-reveal">
      <div>
        <p class="eyebrow">Questions</p>
        <h2 class="section-title">Have questions about sponsorship?</h2>
        <p class="section-copy">
          Email <a href="mailto:frcteam11179@gmail.com">frcteam11179@gmail.com</a> and we'll send you a full
          breakdown of perks, proof of our tax ID, and whatever else you need to move forward.
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
