import './style.css'
import { photoById } from './season'
import { mount, renderPage } from './site'

type Member = {
  name: string
  role?: string
  photo?: string
  photoClass?: string
}

type Subteam = {
  name: string
  description: string
}

const captains: Member[] = [
  { name: 'Dhruv M.', role: 'Co-Captain', photo: 'assets/dhruv.png' },
  { name: 'Dhanvin P.', role: 'Co-Captain', photo: 'assets/dhanvin.png' }
]

const subteams: Subteam[] = [
  {
    name: 'Mechanical Subteam',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Programming Subteam',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Business Subteam',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Electrical Subteam',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Outreach Subteam',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Design Subteam',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Media Subteam',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Safety Subteam',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
]

const subteamLeads: Member[] = [
  { role: 'Mechanical Lead', name: 'Ted B.', photo: 'assets/ted.png' },
  { role: 'Vice Captain', name: 'Josh A.', photo: 'assets/josh.png' },
  { role: 'Business Lead', name: 'Avi M.', photo: 'assets/avi.png' },
  { role: 'Programming Lead', name: 'Senuk W.' },
  { role: 'Scouting Lead', name: 'Yahavi A.', photo: 'assets/yahavi.png' },
  { role: 'Outreach Lead', name: 'Joanna W.', photo: 'assets/joanna.png' },
  { role: 'Design Lead', name: 'Akshay S.', photo: 'assets/akshay.jpeg', photoClass: 'photo-akshay' },
  { role: 'Media Lead', name: 'Karma M.', photo: 'assets/karma.png' },
  { role: 'Electrical Lead', name: 'Matthew T.', photo: 'assets/matthew.png' },
  { role: 'Safety Lead', name: 'Chelsea B.' }
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
            <p class="eyebrow">Subteams</p>
            <h1 class="section-title">Lorem ipsum.</h1>
            <p class="section-copy">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p class="section-copy">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </article>

          <div class="photo-stack">
            ${['team-group', 'team-hype'].map((id) => renderPhotoCard(id)).join('')}
          </div>
        </div>
      </section>

      <section class="section section-cyan">
        <header class="section-header">
          <div>
            <p class="eyebrow">Subteams</p>
            <h2 class="section-title">Lorem ipsum.</h2>
          </div>
        </header>

        <div class="perk-grid">
          ${subteams
            .map(
              (subteam) => `
                <article class="perk-card">
                  <h3>${subteam.name}</h3>
                  <p>${subteam.description}</p>
                </article>
              `
            )
            .join('')}
        </div>
      </section>

      <section class="section section-spectrum">
        <header class="section-header">
          <div>
            <p class="eyebrow">Captains</p>
            <h2 class="section-title">Lorem ipsum.</h2>
          </div>
        </header>

        <div class="member-grid member-grid-two">
          ${captains.map((member) => renderMemberCard(member)).join('')}
        </div>
      </section>

      <section class="section section-gold">
        <header class="section-header">
          <div>
            <p class="eyebrow">Subteam Leads</p>
            <h2 class="section-title">Lorem ipsum.</h2>
          </div>
        </header>

        <div class="member-grid member-grid-three">
          ${subteamLeads.map((member) => renderMemberCard(member)).join('')}
        </div>
      </section>
    `
  )
)
