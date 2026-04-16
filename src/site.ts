export type NavItem = {
  href: string
  label: string
  id: string
}

const navItems: NavItem[] = [
  { href: 'index.html', label: 'Home', id: 'home' },
  { href: 'about.html', label: 'About', id: 'about' },
  { href: 'team.html', label: 'Team', id: 'team' },
  { href: 'outreach.html', label: 'Outreach', id: 'outreach' },
  { href: 'sponsors.html', label: 'Sponsors', id: 'sponsors' }
]

export function renderPage(pageId: string, content: string): string {
  const nav = navItems
    .map(
      (item) =>
        `<a class="nav-link ${item.id === pageId ? 'active' : ''}" href="${item.href}">${item.label}</a>`
    )
    .join('')

  return `
    <main class="site-shell page-${pageId}">
      <header class="site-header">
        <a class="brand" href="index.html" aria-label="FRC Team 11179 Home">
          <img class="logo" src="assets/logo.png" alt="FRC Team 11179 logo" />
          <div class="brand-copy">
            <p class="brand-kicker">FRC TEAM 11179</p>
            <h2>The Power of Friendship</h2>
          </div>
        </a>

        <nav class="site-nav" aria-label="Primary navigation">
          ${nav}
        </nav>

        <a class="header-cta" href="join.html">Get Involved</a>
      </header>

      ${content}

      <footer class="site-footer">
        <section class="footer-card footer-card-cyan">
          <p class="eyebrow">Base Camp</p>
          <h3>Apex Friendship High School</h3>
          <p>Student-led robotics, engineering, strategy, media, and outreach.</p>
        </section>

        <section class="footer-card footer-card-gold">
          <p class="eyebrow">Contact</p>
          <ul class="footer-list">
            <li><a href="mailto:rsettle@wcpss.net">rsettle@wcpss.net</a></li>
            <li><a href="mailto:asousa@wcpss.net">asousa@wcpss.net</a></li>
            <li><a href="https://www.instagram.com/afhs_frc11179/" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </section>

        <section class="footer-card footer-card-crimson">
          <p class="eyebrow">Season Signal</p>
          <h3>Rookie season. Legit momentum.</h3>
          <p>Wake County #1, Wake County #2, and the North Carolina State Championship all in year one.</p>
        </section>
      </footer>
    </main>
  `
}

function bindGalleryFilters(): void {
  const galleries = document.querySelectorAll<HTMLElement>('[data-gallery]')

  galleries.forEach((gallery) => {
    const buttons = Array.from(gallery.querySelectorAll<HTMLButtonElement>('[data-filter]'))
    const cards = Array.from(gallery.querySelectorAll<HTMLElement>('[data-category]'))

    if (!buttons.length || !cards.length) {
      return
    }

    const applyFilter = (filter: string) => {
      buttons.forEach((button) => {
        button.classList.toggle('active', button.dataset.filter === filter)
        button.setAttribute('aria-pressed', String(button.dataset.filter === filter))
      })

      cards.forEach((card) => {
        const category = card.dataset.category
        const visible = filter === 'all' || category === filter
        card.hidden = !visible
      })
    }

    buttons.forEach((button) => {
      button.addEventListener('click', () => applyFilter(button.dataset.filter ?? 'all'))
    })

    applyFilter('all')
  })
}

function bindHeroRotators(): void {
  const rotators = document.querySelectorAll<HTMLElement>('[data-hero-rotator]')

  rotators.forEach((rotator) => {
    const slides = Array.from(rotator.querySelectorAll<HTMLElement>('[data-slide]'))

    if (slides.length < 2) {
      return
    }

    let activeIndex = 0
    slides[0]?.classList.add('active')

    window.setInterval(() => {
      slides[activeIndex]?.classList.remove('active')
      activeIndex = (activeIndex + 1) % slides.length
      slides[activeIndex]?.classList.add('active')
    }, 4200)
  })
}

function wireInteractions(): void {
  bindGalleryFilters()
  bindHeroRotators()
}

export function mount(pageId: string, html: string): void {
  const app = document.querySelector<HTMLDivElement>('#app')

  if (!app) {
    throw new Error('App root was not found')
  }

  document.body.dataset.page = pageId
  app.innerHTML = html
  wireInteractions()
}
