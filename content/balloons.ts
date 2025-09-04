export type Balloon = {
  slug: string
  name: string
  difficulty: 1|2|3|4|5
  timeMins?: number
  notes?: string
  photo?: string   // optional, /balloons/*.webp|.jpg (4:3 or square)
  alt?: string
}

export const balloons: Balloon[] = [
  { slug: "dog",    name: "Dog",    difficulty: 1, timeMins: 2, notes: "Classic and quick; instant smiles.", photo: "/balloons/dog.webp", alt: "A simple balloon dog" },
  { slug: "sword",  name: "Sword",  difficulty: 1, timeMins: 1, notes: "Fun to hand out; too many duels though." },
  { slug: "flower", name: "Flower", difficulty: 2, timeMins: 4, notes: "Prettiest; squeaky twists need patience." },
  { slug: "giraffe",name: "Giraffe",difficulty: 3, timeMins: 3, notes: "Neck drama but worth it." },
  { slug: "hat",    name: "Hat",    difficulty: 2, timeMins: 3, notes: "Looks great in photos; sizing is a puzzle." },
  { slug: "heart",  name: "Heart",  difficulty: 1, timeMins: 2, notes: "Sweet and simple; good for thank‑yous." },
  { slug: "teddy",  name: "Teddy",  difficulty: 3, timeMins: 5, notes: "A little fiddly; very cuddly when it works." },
  { slug: "flower-bracelet", name: "Flower Bracelet", difficulty: 2, timeMins: 4, notes: "Cute accessory; pops if over‑inflated." },
]
