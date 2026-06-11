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
    name: 'Mechanical',
    description: 'Designs and builds the physical robot — from the chassis and drivetrain to every custom mechanism that scores game pieces and moves on the field.'
  },
  {
    name: 'Programming',
    description: 'Writes the code behind everything the robot does — autonomous routines, driver controls, sensor feedback, and the systems that make split-second decisions during a match.'
  },
  {
    name: 'Business',
    description: 'Handles the business side: fundraising, grant applications, sponsor relationships, and the financial planning that keeps the team going season after season.'
  },
  {
    name: 'Electrical',
    description: 'Wires the entire robot from scratch — motors, sensors, control hardware, and power distribution. When things go wrong at competition, this team fixes it.'
  },
  {
    name: 'Outreach',
    description: 'Plans and runs STEM events at local schools, brings the robot to the community, and builds the relationships that make our mission more than just a slogan.'
  },
  {
    name: 'Design',
    description: 'Creates CAD models, technical drawings, and visual assets the team relies on — from part designs for manufacturing to graphics for shirts, the website, and the competition pit.'
  },
  {
    name: 'Media',
    description: "Documents the team's season through photos, video, and social media — making sure our community knows what we're building, how we compete, and why it matters."
  },
  {
    name: 'Safety',
    description: 'Keeps every build session, meeting, and competition day running safely — enforcing protocols, conducting checks, and making sure everyone knows and follows the rules.'
  }
]

const subteamLeads: Member[] = [
  { role: 'Mechanical Lead', name: 'Ted B.', photo: 'assets/ted.png' },
  { role: 'Vice Captain', name: 'Josh A.', photo: 'assets/josh.png' },
  { role: 'Business Lead', name: 'Avi M.', photo: 'assets/avi.png' },
  { role: 'Programming Lead', name: 'Senuk W.' },
  { role: 'Scouting Lead', name: 'Yahavi A.', photo: 'assets/yahavi.jpg' },
  { role: 'Outreach Lead', name: 'Joanna W.', photo: 'assets/joanna.png' },
  { role: 'Design Lead', name: 'Akshay S.', photo: 'assets/akshay.png', photoClass: 'photo-akshay' },
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
    </figure>
  `
}

mount(
  'team',
  renderPage(
    'team',
    `
      <section class="section section-crimson will-reveal">
        <div class="story-grid">
          <article class="story-panel">
            <p class="eyebrow">The Team</p>
            <h1 class="section-title">Different skills. One team.</h1>
            <p class="section-copy">
              You don't need to be a programmer or an engineer to be part of Team 11179. Our eight subteams
              cover everything from building the robot to running social media — there's a role for every
              kind of student.
            </p>
            <p class="section-copy">
              Below is how the team is organized — the subteams that make the season work, the captains who
              lead them, and the leads who run each area day to day.
            </p>
          </article>

          <div class="photo-stack">
            ${['team-group', 'team-hype'].map((id) => renderPhotoCard(id)).join('')}
          </div>
        </div>
      </section>

      <section class="section section-cyan will-reveal">
        <header class="section-header">
          <div>
            <p class="eyebrow">Subteams</p>
            <h2 class="section-title">Eight subteams. Every role matters.</h2>
          </div>
          <p class="section-copy">
            Each subteam handles a distinct part of what it takes to run a competitive FRC program — from
            the robot itself to the community work that defines our mission.
          </p>
        </header>

        <div class="perk-grid stagger-reveal">
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

      <section class="section section-spectrum will-reveal">
        <header class="section-header">
          <div>
            <p class="eyebrow">Captains</p>
            <h2 class="section-title">Leading the charge.</h2>
          </div>
          <p class="section-copy">
            Our co-captains are responsible for the team's overall direction — keeping everyone aligned
            through build season, competition weekends, and everything in between.
          </p>
        </header>

        <div class="member-grid member-grid-two stagger-reveal" style="margin-left:auto; margin-right:auto;">
          ${captains.map((member) => renderMemberCard(member)).join('')}
        </div>
      </section>

      <section class="section section-gold will-reveal">
        <header class="section-header">
          <div>
            <p class="eyebrow">Subteam Leads</p>
            <h2 class="section-title">The people running each area.</h2>
          </div>
          <p class="section-copy">
            Each subteam has a dedicated lead responsible for organizing their area, managing members, and
            keeping their work on track through the season.
          </p>
        </header>

        <div class="member-grid member-grid-five stagger-reveal">
          ${subteamLeads.map((member) => renderMemberCard(member)).join('')}
        </div>
      </section>
    `
  )
)
