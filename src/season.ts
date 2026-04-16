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
    value: 'Apex',
    label: 'Location',
    note: 'Team 11179 is located in Apex, NC.'
  },
  {
    value: 'K-12',
    label: 'Community',
    note: 'The team works to make a positive impact on its K-12 campus and community.'
  },
  {
    value: '2',
    label: 'Competitions',
    note: 'The team has completed two competitions so far.'
  }
]

export const seasonEvents: SeasonEvent[] = [
  {
    title: '03/06-03/08 Competition',
    award: 'Created our own alliance and finished fourth overall',
    performance: 'First competition',
    summary:
      'The first competition gave the team a strong first look at FRC and many ideas for how to improve the robot.',
    photoId: 'pit-handshake'
  },
  {
    title: '03/20-03/22 Competition',
    award: 'Third place finish',
    performance: 'Second competition',
    summary:
      'The team worked through robot disconnections and major electrical repairs before finishing in third place.',
    photoId: 'team-embrace'
  },
  {
    title: 'FIRST North Carolina State Championship',
    award: 'Coming soon',
    summary: 'The team is preparing for the state championship.',
    photoId: 'drive-win'
  }
]

export const featuredPhotos: FeaturedPhoto[] = [
  {
    id: 'hero-robot',
    title: 'Robot On The Field',
    src: 'assets/season/hero-robot.jpg',
    alt: 'Team 11179 robot surrounded by yellow game pieces on the field',
    caption: 'Team 11179 robot during competition.',
    category: 'flicks'
  },
  {
    id: 'hero-celebration',
    title: 'Team Celebration',
    src: 'assets/season/hero-celebration.jpg',
    alt: 'Team 11179 members high-fiving at the driver station under the 11179 sign',
    caption: 'Team members celebrating during a match.',
    category: 'flicks'
  },
  {
    id: 'hero-clean',
    title: 'Match Photo',
    src: 'assets/season/hero-clean.jpg',
    alt: 'Team 11179 high-fiving other teams near a driver station scoreboard that reads clean',
    caption: 'Competition photo from the driver station.',
    category: 'flicks'
  },
  {
    id: 'team-embrace',
    title: 'Team Celebration',
    src: 'assets/season/team-embrace.jpg',
    alt: 'Team 11179 students celebrating together in the pit area',
    caption: 'Students celebrating together in the pit area.',
    category: 'flicks'
  },
  {
    id: 'pit-handshake',
    title: 'Pit Photo',
    src: 'assets/season/pit-handshake.jpg',
    alt: 'Team 11179 students interacting with another student team near the field',
    caption: 'Team members with another student team at competition.',
    category: 'team'
  },
  {
    id: 'team-heart',
    title: 'Team Photo',
    src: 'assets/season/team-heart.jpg',
    alt: 'Three Team 11179 members making heart shapes at the driver station glass',
    caption: 'Team members at the driver station.',
    category: 'team'
  },
  {
    id: 'team-group',
    title: 'Group Photo',
    src: 'assets/season/team-group.jpg',
    alt: 'Group photo of Team 11179 students in blue shirts at competition',
    caption: 'Group photo of Team 11179 students.',
    category: 'team'
  },
  {
    id: 'family-moment',
    title: 'Community Photo',
    src: 'assets/season/family-moment.jpg',
    alt: 'Team member standing with family and younger kids at a competition venue',
    caption: 'Community-facing team photo.',
    category: 'team'
  },
  {
    id: 'team-portrait',
    title: 'Portrait Photo',
    src: 'assets/season/team-portrait.jpg',
    alt: 'Close-up portrait of a Team 11179 student wearing safety glasses',
    caption: 'Portrait of a Team 11179 student.',
    category: 'team'
  },
  {
    id: 'team-hype',
    title: 'Team Reaction',
    src: 'assets/season/team-hype.jpg',
    alt: 'Team 11179 student reacting energetically at competition',
    caption: 'Reaction photo from competition.',
    category: 'flicks'
  },
  {
    id: 'robot-front',
    title: 'Robot Front',
    src: 'assets/season/robot-front.jpg',
    alt: 'Front-facing image of Team 11179 robot with yellow game pieces around it',
    caption: 'Front-facing image of the robot.',
    category: 'robot'
  },
  {
    id: 'robot-matchup',
    title: 'Robot Match',
    src: 'assets/season/robot-matchup.jpg',
    alt: 'Team 11179 robot on the field near another robot and scattered game pieces',
    caption: 'Robot on the field during a match.',
    category: 'robot'
  },
  {
    id: 'robot-closeup',
    title: 'Robot Closeup',
    src: 'assets/season/robot-closeup.jpg',
    alt: 'Close-up shot of a Team 11179 robot mechanism',
    caption: 'Close-up of a robot mechanism.',
    category: 'robot'
  },
  {
    id: 'robot-ball-load',
    title: 'Robot With Game Pieces',
    src: 'assets/season/robot-ball-load.jpg',
    alt: 'Team 11179 robot carrying several yellow game pieces on the field',
    caption: 'Robot carrying game pieces during competition.',
    category: 'robot'
  },
  {
    id: 'robot-lane',
    title: 'Robot Driving',
    src: 'assets/season/robot-lane.jpg',
    alt: 'Team 11179 robot driving on the field with yellow game pieces nearby',
    caption: 'Robot driving on the field.',
    category: 'robot'
  },
  {
    id: 'drive-win',
    title: 'Driver Station Photo',
    src: 'assets/season/drive-win.jpg',
    alt: 'Team 11179 celebrating with another team inside the driver station after a clean cycle',
    caption: 'Team celebration in the driver station.',
    category: 'flicks'
  }
]

export const homeHeroPhotoIds = ['hero-robot']

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
