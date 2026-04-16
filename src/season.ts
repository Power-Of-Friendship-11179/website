export type PhotoCategory = 'robot' | 'team' | 'flicks'

export type FeaturedPhoto = {
  id: string
  title: string
  src: string
  alt: string
  caption: string
  category: PhotoCategory
}

export type SeasonStat = {
  value: string
  label: string
  note: string
}

export type SeasonEvent = {
  title: string
  award: string
  performance?: string
  summary: string
  photoId: string
}

export const seasonStats: SeasonStat[] = [
  {
    value: '20th',
    label: 'Rank In NC',
    note: 'Finished our first season ranked 20th in North Carolina.'
  },
  {
    value: '3',
    label: 'Awards',
    note: 'Team Spirit, Rookie All-Star, and Rising All-Star.'
  },
  {
    value: '3',
    label: 'Events',
    note: 'Two FNC district events plus the state championship.'
  }
]

export const seasonEvents: SeasonEvent[] = [
  {
    title: 'FNC District Wake County Event #1',
    award: 'Team Spirit Award',
    performance: 'Quarterfinalists',
    summary:
      'The team opened its rookie campaign with energy, execution, and a quarterfinal run that put 11179 on the map.',
    photoId: 'pit-handshake'
  },
  {
    title: 'FNC District Wake County Event #2',
    award: 'Rookie All-Star Award',
    performance: 'Semifinalists',
    summary:
      'Wake County #2 was the breakthrough weekend: stronger playoff performance, sharper presence, and a Rookie All-Star banner.',
    photoId: 'team-embrace'
  },
  {
    title: 'FIRST North Carolina State Championship',
    award: 'Rising All-Star Award',
    summary:
      'The state championship validated the trajectory: 11179 showed up with credibility, culture, and momentum that carried beyond the rookie label.',
    photoId: 'drive-win'
  }
]

export const featuredPhotos: FeaturedPhoto[] = [
  {
    id: 'hero-robot',
    title: 'Robot Surrounded By Traffic',
    src: 'assets/season/hero-robot.jpg',
    alt: 'Team 11179 robot surrounded by yellow game pieces on the field',
    caption: 'Field-ready and built to get through traffic.',
    category: 'flicks'
  },
  {
    id: 'hero-celebration',
    title: 'Scoreboard High Fives',
    src: 'assets/season/hero-celebration.jpg',
    alt: 'Team 11179 members high-fiving at the driver station under the 11179 sign',
    caption: 'Proof the rookie season was real, not theoretical.',
    category: 'flicks'
  },
  {
    id: 'hero-clean',
    title: 'Clean Cycle',
    src: 'assets/season/hero-clean.jpg',
    alt: 'Team 11179 high-fiving other teams near a driver station scoreboard that reads clean',
    caption: 'Clean cycles, loud reactions, and real match pressure.',
    category: 'flicks'
  },
  {
    id: 'team-embrace',
    title: 'Semifinal Energy',
    src: 'assets/season/team-embrace.jpg',
    alt: 'Team 11179 students celebrating together in the pit area',
    caption: 'One of the strongest team-culture photos from the season.',
    category: 'flicks'
  },
  {
    id: 'pit-handshake',
    title: 'Pit Connection',
    src: 'assets/season/pit-handshake.jpg',
    alt: 'Team 11179 students interacting with another student team near the field',
    caption: 'Competition is performance and presence, not just hardware.',
    category: 'team'
  },
  {
    id: 'team-heart',
    title: 'Heart Window',
    src: 'assets/season/team-heart.jpg',
    alt: 'Three Team 11179 members making heart shapes at the driver station glass',
    caption: 'Culture without losing the edge.',
    category: 'team'
  },
  {
    id: 'team-group',
    title: 'Drive Team Group Portrait',
    src: 'assets/season/team-group.jpg',
    alt: 'Group photo of Team 11179 students in blue shirts at competition',
    caption: 'A sharp team portrait for about and team storytelling.',
    category: 'team'
  },
  {
    id: 'family-moment',
    title: 'Community Moment',
    src: 'assets/season/family-moment.jpg',
    alt: 'Team member standing with family and younger kids at a competition venue',
    caption: 'Good for outreach, family, and community-facing moments.',
    category: 'team'
  },
  {
    id: 'team-portrait',
    title: 'Safety Glasses Portrait',
    src: 'assets/season/team-portrait.jpg',
    alt: 'Close-up portrait of a Team 11179 student wearing safety glasses',
    caption: 'Close-up portrait with personality and competition context.',
    category: 'team'
  },
  {
    id: 'team-hype',
    title: 'Hype Shot',
    src: 'assets/season/team-hype.jpg',
    alt: 'Team 11179 student reacting energetically at competition',
    caption: 'High-energy culture shot for the team page.',
    category: 'flicks'
  },
  {
    id: 'robot-front',
    title: 'Robot Front Profile',
    src: 'assets/season/robot-front.jpg',
    alt: 'Front-facing image of Team 11179 robot with yellow game pieces around it',
    caption: 'Best clean robot profile from the season library.',
    category: 'robot'
  },
  {
    id: 'robot-matchup',
    title: 'Robot Matchup',
    src: 'assets/season/robot-matchup.jpg',
    alt: 'Team 11179 robot on the field near another robot and scattered game pieces',
    caption: 'Competition context makes the engineering feel real.',
    category: 'robot'
  },
  {
    id: 'robot-closeup',
    title: 'Mechanism Closeup',
    src: 'assets/season/robot-closeup.jpg',
    alt: 'Close-up shot of a Team 11179 robot mechanism',
    caption: 'Tighter mechanism framing for engineering storytelling.',
    category: 'robot'
  },
  {
    id: 'robot-ball-load',
    title: 'Game Piece Control',
    src: 'assets/season/robot-ball-load.jpg',
    alt: 'Team 11179 robot carrying several yellow game pieces on the field',
    caption: 'Shows the robot doing actual work instead of sitting static.',
    category: 'robot'
  },
  {
    id: 'robot-lane',
    title: 'Field Lane Shot',
    src: 'assets/season/robot-lane.jpg',
    alt: 'Team 11179 robot driving on the field with yellow game pieces nearby',
    caption: 'Useful secondary action shot for the robot section.',
    category: 'robot'
  },
  {
    id: 'drive-win',
    title: 'Driver Station Win',
    src: 'assets/season/drive-win.jpg',
    alt: 'Team 11179 celebrating with another team inside the driver station after a clean cycle',
    caption: 'Best image for the state-championship result card.',
    category: 'flicks'
  }
]

export const homeHeroPhotoIds = ['hero-robot', 'hero-celebration', 'hero-clean']

export const robotShowcaseIds = ['robot-front', 'robot-ball-load', 'robot-closeup', 'robot-matchup']

export const teamShowcaseIds = ['team-group', 'team-heart', 'pit-handshake', 'family-moment']

export const galleryFilterIds = [
  'robot-front',
  'robot-ball-load',
  'robot-closeup',
  'robot-matchup',
  'pit-handshake',
  'team-heart',
  'team-group',
  'family-moment',
  'hero-robot',
  'team-embrace',
  'hero-celebration',
  'hero-clean'
]

export function photoById(id: string): FeaturedPhoto {
  const photo = featuredPhotos.find((item) => item.id === id)

  if (!photo) {
    throw new Error(`Unknown photo id: ${id}`)
  }

  return photo
}
