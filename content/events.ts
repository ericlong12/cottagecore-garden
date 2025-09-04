
export type Event = {
  id: string
  title: string
  date: string // YYYY-MM-DD
  location?: string
  note?: string
  status: 'upcoming' | 'past'
  link?: string
}

export const events: Event[] = [
  // Past (archive 2025)
  { id: '2025-01-20-cozy-coding', title: 'Cozy Coding Jam', date: '2025-01-20', note: 'Warm drinks + tiny builds.', status: 'past' },
  { id: '2025-03-15-spring-tea', title: 'Spring Tea Gathering', date: '2025-03-15', note: 'Cherry blossom vibes.', status: 'past' },
  { id: '2025-06-02-summer-hack', title: 'Summer Hack Night', date: '2025-06-02', note: 'Little experiments.', status: 'past' },

  // Upcoming (current date Sep 3, 2025)
  { id: '2025-09-21-local-flea', title: 'Local Flea Market', date: '2025-09-21', note: 'Hoping to find a teacup.', status: 'upcoming' },
  { id: '2025-10-12-maker-fair', title: 'Local Maker Fair', date: '2025-10-12', note: 'Bring balloons + gadgets.', status: 'upcoming' },
  { id: '2025-11-03-tea-meetup', title: 'Tea Meetup', date: '2025-11-03', note: 'Oolongs and stories.', status: 'upcoming' },
  { id: '2025-12-07-indie-dev', title: 'Indie Dev Night', date: '2025-12-07', note: 'Show-and-tell builds.', status: 'upcoming' },
]
