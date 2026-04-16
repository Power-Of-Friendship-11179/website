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
    description: 'Add one or two sentences about what the mechanical subteam does.'
  },
  {
    name: 'Programming Subteam',
    description: 'Add one or two sentences about what the programming subteam does.'
  },
  {
    name: 'Business Subteam',
    description: 'Add one or two sentences about what the business subteam does.'
  },
  {
    name: 'Electrical Subteam',
    description: 'Add one or two sentences about what the electrical subteam does.'
  },
  {
    name: 'Outreach Subteam',
    description: 'Add one or two sentences about what the outreach subteam does.'
  },
  {
    name: 'Design Subteam',
    description: 'Add one or two sentences about what the design subteam does.'
  },
  {
    name: 'Media Subteam',
    description: 'Add one or two sentences about what the media subteam does.'
  },
  {
    name: 'Safety Subteam',
    description: 'Add one or two sentences about what the safety subteam does.'
  }
]

const subteamLeads: Member[] = [
  { role: 'Mechanical Lead', name: 'Ted B.', photo: 'assets/ted.png' },
  { role: 'Vice Captain', name: 'Josh A.', photo: 'assets/josh.png' },
  { role: 'Business Lead', name: 'Avi M.', photo: 'assets/avi.png' },
  { role: 'Programming Lead', name: 'Senuk W.' },
  { role: 'Scouting Lead', name: 'Yahavi A.', photo: 'assets/yahavi.jpg' },
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
          ? `<div class="member-photo-frame"><img class="member-photo ${member.photoClass ?? ''}" src="${member.photo}" alt="${member.name} headshot" loading="lazy" decoding="async" /></div>`
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
      <img src="${photo.src}" alt="${photo.alt}" loading="lazy" decoding="async" />
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
            <h1 class="section-title">Add team page intro title.</h1>
            <p class="section-copy">
              Add one or two sentences explaining that students can contribute in technical and non-technical roles.
            </p>
            <p class="section-copy">Add one sentence introducing the subteams below.</p>
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
            <h2 class="section-title">Add section title for how the team is organized.</h2>
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
            <h2 class="section-title">Add section title for captains.</h2>
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
            <h2 class="section-title">Add section title for subteam leads.</h2>
          </div>
        </header>

        <div class="member-grid member-grid-three">
          ${subteamLeads.map((member) => renderMemberCard(member)).join('')}
        </div>
      </section>
    `
  )
)
