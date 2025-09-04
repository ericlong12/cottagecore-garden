
export type Tea = {
  id: string
  name: string
  type: 'black' | 'green' | 'white' | 'oolong' | 'dark' | 'yellow'
  origin?: string
  rating?: 1|2|3|4|5
  photo?: string
  notes?: string
  status: 'tried' | 'want'
  dateTried?: string
  vendor?: string
  brew?: string
}

export const teas: Tea[] = [
  { id: 'hojicha', name: 'Hojicha', type: 'green', rating: 5, photo: '/images/tea-hojicha.svg', notes: 'Toasty, grounding; tastes like autumn evenings. Calming before bed.', status: 'tried' },
  { id: 'genmaicha', name: 'Genmaicha', type: 'green', rating: 4, photo: '/images/tea-genmaicha.svg', notes: 'Nutty, popcorn-like comfort. Sweater weather in a cup.', status: 'tried' },
  { id: 'tieguanyin', name: 'Tieguanyin', type: 'oolong', rating: 4, photo: '/images/tea-oolong.svg', notes: 'Floral, buttery, smooth—like sipping melted petals.', status: 'tried' },
  { id: 'assam', name: 'Assam', type: 'black', rating: 3, photo: '/images/tea-black.svg', notes: 'Strong, malty, brisk; great for mornings.', status: 'tried' },
  { id: 'keemun', name: 'Keemun', type: 'black', rating: 4, photo: '/images/tea-black.svg', notes: 'Winey-sweet with cocoa hints; afternoon treat.', status: 'tried' },
  { id: 'bai-mudan', name: 'White Peony (Bai Mudan)', type: 'white', status: 'want', notes: 'Hoping for soft and delicate sweetness.' },
  { id: 'lapsang', name: 'Lapsang Souchong', type: 'black', status: 'want', notes: 'Curious if it tastes like a campfire in a cup.' },
  { id: 'golden-monkey', name: 'Golden Monkey', type: 'black', status: 'want', notes: 'Supposed to be sweet and smooth; charming name.' },
  { id: 'sheng-pu', name: 'Sheng Pu-erh (young)', type: 'dark', status: 'want', notes: 'Earthy, bright; forest-floor adventure.' },
  { id: 'shou-pu', name: 'Shou Pu-erh (ripe)', type: 'dark', status: 'want', notes: 'Deep, earthy comfort on cold days.' },
  { id: 'junshan', name: 'Junshan Yinzhen', type: 'yellow', status: 'want', notes: 'Rare yellow tea; gentle, sweet curiosity.' },
]
