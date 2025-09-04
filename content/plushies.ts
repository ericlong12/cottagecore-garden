
export type Plush = {
  id: string
  name: string
  species: string
  traits: string[]
  funFact: string
  about: string
  avatar: string
  birthday?: string
  favorites?: string[]
}

export const plushies: Plush[] = [
  {
    id: 'malice',
    name: 'Malice',
    species: 'grey bunny',
    traits: ['watchful','wry','quietly stubborn'],
    funFact: 'Pretends not to care, but always sits closest to the teapot.',
    about: 'Malice has a sharp little smirk stitched into their face. They act like they’re above it all, but secretly they like being fussed over. If a blanket is free, Malice claims it first.',
    avatar: '/images/plush-malice.svg',
    birthday: 'April 8',
    favorites: ['blankets','window seats']
  },
  {
    id: 'powder',
    name: 'Powder',
    species: 'white bear',
    traits: ['soft','calm','endlessly patient'],
    funFact: 'Can sleep through anything, even balloon pops.',
    about: 'Powder is the embodiment of a snow day: calm, slow, a little chilly but deeply comforting. They’re the one the others lean against when everyone piles up on the couch.',
    avatar: '/images/plush-powder.svg',
    birthday: 'January 12',
    favorites: ['naps','quiet music']
  },
  {
    id: 'thistle',
    name: 'Thistle',
    species: 'sky dragon (Jellycat)',
    traits: ['dreamy','curious','protective'],
    funFact: 'Insists every cup of tea must be shared with them.',
    about: 'Thistle’s wings are too small for real flight, but that doesn’t stop them from trying. They like to perch on stacks of books and “guard” the room, occasionally tumbling off in a soft heap of fluff.',
    avatar: '/images/plush-thistle.svg',
    birthday: 'June 22',
    favorites: ['stargazing','tea steam']
  },
  {
    id: 'puddlewick',
    name: 'Puddlewick',
    species: 'frog',
    traits: ['playful','damp','mischief-inclined'],
    funFact: 'Loves sitting on cold mugs, even when there’s nothing inside.',
    about: 'Puddlewick is happiest when things feel a little soggy—puddles, damp grass, half-finished tea cups. He gets into everything, and everyone forgives him, because his stitched smile is impossible to resist.',
    avatar: '/images/plush-puddlewick.svg',
    birthday: 'September 9',
    favorites: ['rainy windows','pond documentaries']
  },
]
