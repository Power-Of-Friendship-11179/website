import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        about: 'about.html',
        team: 'team.html',
        outreach: 'outreach.html',
        sponsors: 'sponsors.html',
        join: 'join.html',
        sponsorshipPerks: 'sponsorship-perks.html'
      }
    }
  },
  server: {
    port: 5173,
    open: false
  }
})
