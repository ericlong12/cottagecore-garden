
export type Project = {
  id: string
  title: string
  blurb: string
  tech: string[]
  links: { type: 'demo' | 'repo', url: string }[]
  thumb?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'plushie-db',
    title: 'Plushie DB',
    blurb: 'A cozy catalog for all my plush friends, with profiles and stories.',
    tech: ['Next.js','Tailwind','Supabase'],
    links: [{ type: 'demo', url: '#' }, { type: 'repo', url: '#' }],
  },
  {
    id: 'tea-tracker',
    title: 'Tea Tracker',
    blurb: 'Rate and remember every cup I’ve tried, with tasting notes and photos.',
    tech: ['React','Prisma','Postgres'],
    links: [{ type: 'demo', url: '#' }, { type: 'repo', url: '#' }],
  },
  {
    id: 'feelings-radio',
    title: 'Feelings Radio',
    blurb: 'A minimal mood diary that whispers back to you.',
    tech: ['Next.js','Tailwind'],
    links: [{ type: 'demo', url: '#' }, { type: 'repo', url: '#' }],
  },
]
