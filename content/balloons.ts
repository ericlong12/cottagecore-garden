
export type Balloon = {
  id: string
  name: string
  difficulty: 'seedling' | 'leaf' | 'tree'
  thoughts: string
  tip?: string
}

export const balloons: Balloon[] = [
  { id: 'dog', name: 'Dog', difficulty: 'seedling', thoughts: 'Quick and easy, always makes people smile.' },
  { id: 'sword', name: 'Sword', difficulty: 'seedling', thoughts: 'Fun to hand out, but invites too many duels.' },
  { id: 'flower', name: 'Flower', difficulty: 'leaf', thoughts: 'Very pretty, but pops if twisted too tight.' },
  { id: 'giraffe', name: 'Giraffe', difficulty: 'tree', thoughts: 'Tricky balance, worth it for the long neck.' },
  { id: 'bunny', name: 'Bunny', difficulty: 'leaf', thoughts: 'Fits the theme; ears are the fun part.' },
  { id: 'heart', name: 'Heart', difficulty: 'seedling', thoughts: 'Cute and simple; great for photos.' },
  { id: 'butterfly', name: 'Butterfly', difficulty: 'leaf', thoughts: 'Delicate feel, rewarding shape.' },
]
