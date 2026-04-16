import './style.css'
import { photoById } from './season'
import { mount, renderPage } from './site'

type Member = {
  name: string
  role?: string
  photo?: string
  photoClass?: string
}

const captains: Member[] = [
  { name: 'Dhruv M.', role: 'Co-Captain', photo: 'assets/dhruv.png' },
  { name: 'Dhanvin P.', role: 'Co-Captain', photo: 'assets/dhanvin.png' }
]

const subteamLeads: Member[] = [
  { role: 'Mechanical Lead Captain', name: 'Ted B.', photo: 'assets/ted.png' },
  { role: 'Mechanical Lead Vice-Captain', name: 'Josh A.', photo: 'assets/josh.png' },
  { role: 'Business Lead', name: 'Avi M.', photo: 'assets/avi.png' },
  { role: 'Programming Lead', name: 'Senuk W.' },
  { role: 'Outreach Lead', name: 'Joanna W.', photo: 'assets/joanna.png' },
  { role: 'Design Lead', name: 'Akshay S.', photo: 'assets/akshay.jpeg', photoClass: 'photo-akshay' },
  { role: 'Media Lead', name: 'Karma M.', photo: 'assets/karma.png' },
  { role: 'Electrical Lead', name: 'Matthew T.', photo: 'assets/matthew.png' },
  { role: 'Safety Lead', name: 'Chelsea B.' }
]

const founders: Member[] = [
  { name: 'Dhruv M.', photo: 'assets/dhruv.png' },
  { name: 'Dhanvin P.', photo: 'assets/dhanvin.png' },
  { name: 'Avi M.', photo: 'assets/avi.png' },
  { name: 'Joshua A.' },
  { name: 'Ritvik S.' },
  { name: 'Sandeep J.', photo: 'assets/sandeep.png' },
  { name: 'Chelsea B.' }
]

function initials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function renderMemberCard(member: Member): string {
  return `
    <article class="member-card">
      ${
        member.photo
          ? `<div class="member-photo-frame"><img class="member-photo ${member.photoClass ?? ''}" src="${member.photo}" alt="${member.name} headshot" /></div>`
          : `<div class="member-avatar" aria-hidden="true">${initials(member.name)}</div>`
      }
      ${member.role ? `<p class="member-role">${member.role}</p>` : ''}
      <h3>${member.name}</h3>
    </article>
  `
}

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
  'team',
  renderPage(
    'team',
    `
      <section class="section section-crimson">
        <div class="story-grid">
          <article class="story-panel">
            <p class="eyebrow">The Team</p>
            <h1 class="section-title">Students who make the team feel alive.</h1>
            <p class="section-copy">
              The strongest team page needs more than names in boxes. It should show leadership, chemistry,
              and the mix of technical focus and personality that powered the rookie season.
            </p>
            <div class="value-stack">
              <article class="value-card">
                <h3>Leadership on the floor</h3>
                <p>From drive team to pit communication, members are visible in the work and the results.</p>
              </article>
              <article class="value-card">
                <h3>Subteams with ownership</h3>
                <p>Mechanical, electrical, programming, business, outreach, design, and media each carry real responsibility.</p>
              </article>
            </div>
          </article>

          <div class="photo-stack">
            ${['team-group', 'team-hype'].map((id) => renderPhotoCard(id)).join('')}
          </div>
        </div>
      </section>

      <section class="section section-cyan">
        <header class="section-header">
          <div>
            <p class="eyebrow">Captains</p>
            <h2 class="section-title">Set the pace.</h2>
          </div>
        </header>

        <div class="member-grid member-grid-two">
          ${captains.map((member) => renderMemberCard(member)).join('')}
        </div>
      </section>

      <section class="section section-spectrum">
        <header class="section-header">
          <div>
            <p class="eyebrow">Subteam Leads</p>
            <h2 class="section-title">Run the build, the code, and the story.</h2>
          </div>
        </header>

        <div class="member-grid member-grid-three">
          ${subteamLeads.map((member) => renderMemberCard(member)).join('')}
        </div>
      </section>

      <section class="section section-gold">
        <div class="story-grid reverse">
          <div class="photo-stack">
            ${['team-heart', 'pit-handshake'].map((id) => renderPhotoCard(id)).join('')}
          </div>

          <article class="story-panel">
            <p class="eyebrow">Culture</p>
            <h2 class="section-title">Serious about the work, not stiff about the atmosphere.</h2>
            <p class="section-copy">
              The team photos that make the cut are the ones that show real chemistry without weakening the team’s image.
              That balance matters. It is part of why 11179 feels hungry instead of generic.
            </p>
            <ul class="clean-list">
              <li>Driver-station reactions show competitive emotion.</li>
              <li>Group photos establish identity and cohesion.</li>
              <li>Sharp candid shots keep the site from feeling staged.</li>
            </ul>
          </article>
        </div>
      </section>

      <section class="section section-steel">
        <header class="section-header">
          <div>
            <p class="eyebrow">Founders</p>
            <h2 class="section-title">The people who got it off the ground.</h2>
          </div>
        </header>

        <div class="member-grid member-grid-three">
          ${founders.map((member) => renderMemberCard(member)).join('')}
        </div>
      </section>
    `
  )
)
