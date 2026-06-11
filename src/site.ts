export type NavItem = { href: string; label: string; id: string }

const navItems: NavItem[] = [
  { href: 'index.html',   label: 'Home',     id: 'home'     },
  { href: 'about.html',   label: 'About',    id: 'about'    },
  { href: 'team.html',    label: 'Team',     id: 'team'     },
  { href: 'outreach.html',label: 'Events',   id: 'outreach' },
  { href: 'sponsors.html',label: 'Sponsors', id: 'sponsors' },
]

export function renderPage(pageId: string, content: string): string {
  const links = navItems
    .map((item) =>
      `<a class="nav-link ${item.id === pageId ? 'active' : ''}" href="${item.href}">${item.label}</a>`
    )
    .join('')

  const footerLinks = navItems
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join('')

  return `
    <div class="site-shell page-${pageId}">
      <header class="site-header">
        <div class="nav-inner">
          <a class="brand" href="index.html" aria-label="FRC Team 11179 Home">
            <img class="brand-logo" src="assets/logo.png" alt="FRC Team 11179 logo" />
            <div class="brand-copy">
              <span class="brand-num">11179</span>
              <span class="brand-name">The Power of Friendship</span>
            </div>
          </a>
          <nav class="site-nav" aria-label="Primary navigation">
            ${links}
          </nav>
          <a class="nav-cta" href="join.html">Join the Team</a>
        </div>
      </header>

      ${content}

      <footer class="site-footer">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="footer-logo-row">
              <img src="assets/logo.png" alt="Team 11179 logo" />
              <div class="footer-logo-copy">
                <p class="f-num">FRC 11179</p>
                <p class="f-name">The Power of Friendship</p>
              </div>
            </div>
            <p class="footer-tagline">
              Building robots, building community, and competing at the highest level —
              all at Apex Friendship High School, Apex, NC.
            </p>
          </div>
          <div class="footer-col">
            <h4>Navigate</h4>
            <div class="footer-links">
              ${footerLinks}
              <a href="sponsorship-perks.html">Sponsor Perks</a>
            </div>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <div class="footer-links">
              <a href="mailto:frcteam11179@gmail.com">frcteam11179@gmail.com</a>
              <a href="mailto:rsettle@wcpss.net">rsettle@wcpss.net — Ms. Settle</a>
              <a href="mailto:asousa@wcpss.net">asousa@wcpss.net — Ms. Sousa</a>
              <a href="https://www.instagram.com/afhs_frc11179/" target="_blank" rel="noreferrer">@afhs_frc11179 on Instagram</a>
            </div>
          </div>
        </div>
        <div class="footer-base">
          <p class="footer-copy">© 2025 FRC Team 11179 — The Power of Friendship</p>
          <p class="footer-copy">Apex Friendship High School · Apex, NC</p>
        </div>
      </footer>
    </div>
  `
}

function animateCounter(el: HTMLElement): void {
  const target = parseInt(el.dataset.count ?? '0', 10)
  if (isNaN(target) || target === 0) return
  const duration = 1800
  const start = performance.now()
  const tick = (now: number): void => {
    const p = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - p, 4)
    el.textContent = Math.round(eased * target).toString()
    if (p < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

function initScrollReveal(): void {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const el = entry.target as HTMLElement
        el.classList.add('revealed')

        if (el.classList.contains('stagger-reveal')) {
          const items = Array.from(el.children) as HTMLElement[]
          items.forEach((item, i) => {
            item.style.transitionDelay = `${i * 90}ms`
          })
        }

        el.querySelectorAll<HTMLElement>('[data-count]').forEach((counter) => {
          setTimeout(() => animateCounter(counter), 200)
        })

        observer.unobserve(el)
      })
    },
    { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
  )

  const sideObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        ;(entry.target as HTMLElement).classList.add('revealed')
        sideObserver.unobserve(entry.target)
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  )

  document.querySelectorAll('.will-reveal, .stagger-reveal').forEach((el) => observer.observe(el))
  document.querySelectorAll('.reveal-left, .reveal-right, .reveal-scale').forEach((el) => sideObserver.observe(el))
}

function initParallax(): void {
  const heroBg      = document.querySelector<HTMLElement>('#hero-parallax')
  const featureImg  = document.querySelector<HTMLElement>('#feature-parallax')

  if (!heroBg && !featureImg) return

  let raf: number | null = null

  const update = (): void => {
    const y = window.scrollY
    if (heroBg) {
      heroBg.style.transform = `translateY(${y * 0.18}px)`
    }
    if (featureImg) {
      const rect = featureImg.closest('.feature-section')?.getBoundingClientRect()
      if (rect) {
        const offset = (window.innerHeight / 2 - rect.top - rect.height / 2) * 0.14
        featureImg.style.transform = `translateY(${-offset}px)`
      }
    }
    raf = null
  }

  window.addEventListener(
    'scroll',
    () => { if (!raf) raf = requestAnimationFrame(update) },
    { passive: true }
  )
  update()
}

function bindGalleryFilters(): void {
  const galleries = document.querySelectorAll<HTMLElement>('[data-gallery]')
  galleries.forEach((gallery) => {
    const buttons = Array.from(gallery.querySelectorAll<HTMLButtonElement>('[data-filter]'))
    const cards   = Array.from(gallery.querySelectorAll<HTMLElement>('[data-category]'))
    if (!buttons.length || !cards.length) return
    const applyFilter = (filter: string) => {
      buttons.forEach((button) => {
        button.classList.toggle('active', button.dataset.filter === filter)
        button.setAttribute('aria-pressed', String(button.dataset.filter === filter))
      })
      cards.forEach((card) => {
        const visible = filter === 'all' || card.dataset.category === filter
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
    if (slides.length < 2) return
    let activeIndex = 0
    slides[0]?.classList.add('active')
    window.setInterval(() => {
      slides[activeIndex]?.classList.remove('active')
      activeIndex = (activeIndex + 1) % slides.length
      slides[activeIndex]?.classList.add('active')
    }, 4400)
  })
}

export function mount(pageId: string, html: string): void {
  const app = document.querySelector<HTMLDivElement>('#app')
  if (!app) throw new Error('App root was not found')
  document.body.dataset.page = pageId
  app.innerHTML = html
  bindGalleryFilters()
  bindHeroRotators()
  initScrollReveal()
  initParallax()
}
