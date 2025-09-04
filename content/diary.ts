
export type Diary = {
  id: string
  title: string
  date: string
  slug: string
  content: string
}

export const diary: Diary[] = [
  {
    id: '2025-09-01-rainy-nest',
    title: 'Rainy Day Nest',
    date: '2025-09-01',
    slug: 'rainy-day-nest',
    content: `It rained all day, and Puddlewick insisted on sitting at the window, pretending he could swim through the glass. Malice claimed the blanket, Powder dozed without moving, and Thistle fell from a stack of books with a sigh. I drank genmaicha and felt like time had paused, just for us.`
  },
  {
    id: '2025-08-20-first-balloon-flower',
    title: 'First Balloon Flower',
    date: '2025-08-20',
    slug: 'first-balloon-flower',
    content: `I twisted my first flower balloon today. It squeaked and threatened to pop, but in the end it held together. I think it’s the most fragile thing I’ve ever made. I liked it anyway, because fragile things are worth making too.`
  },
  {
    id: '2025-07-11-tea-as-weather',
    title: 'Tea as Weather',
    date: '2025-07-11',
    slug: 'tea-as-weather',
    content: `Drinking hojicha feels like draping myself in dusk. It’s heavy, earthy, grounding. I needed that after a day where my head felt like clouds ready to burst.`
  }
]
