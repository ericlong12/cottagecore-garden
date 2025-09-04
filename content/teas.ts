export type TeaType = "black" | "green" | "white" | "oolong" | "dark" | "yellow"

export type Tea = {
  slug: string
  name: string
  type: TeaType
  origin?: string
  vendor?: string
  rating?: number       // 0..5, halves allowed; omitted for wishlist
  notes: string
  photo?: string        // /tea/*.webp
  dateTried?: string    // ISO date
  wishlist?: boolean
  alt?: string          // explicit alt text for the photo
}

export const teas: Tea[] = [
  // BLACK
  {
    slug: "lapsang-souchong",
    name: "Lapsang Souchong",
    type: "black",
    origin: "Fujian, China",
    rating: 4.0,
    notes: "Campfire smoke, pine resin, smooth finish—great with a rainy playlist.",
    photo: "/tea/lapsang-souchong.webp",
    dateTried: "2025-02-10",
    alt: "Dark amber cup of lapsang souchong with a curl of steam",
  },
  {
    slug: "assam-second-flush",
    name: "Assam Second Flush",
    type: "black",
    origin: "Assam, India",
    rating: 3.5,
    notes: "Malt and brown sugar; solid morning tea.",
    photo: "/tea/assam-second-flush.webp",
    dateTried: "2025-01-22",
    alt: "Cup of deep brown Assam tea beside a jam toast",
  },

  // GREEN
  {
    slug: "sencha-shincha",
    name: "Shincha Sencha",
    type: "green",
    origin: "Shizuoka, Japan",
    rating: 4.5,
    notes: "Fresh cut grass, steamed spinach sweetness; very spring.",
    photo: "/tea/sencha-shincha.webp",
    dateTried: "2025-03-18",
    alt: "Bright green cup of shincha with leaves in a kyusu",
  },
  {
    slug: "gyokuro",
    name: "Gyokuro",
    type: "green",
    origin: "Uji, Japan",
    rating: 4.0,
    notes: "Umami seaweed, buttery body; low-temp brews shine.",
    photo: "/tea/gyokuro.webp",
    dateTried: "2025-03-25",
    alt: "Small glass of pale green gyokuro next to needles of leaf",
  },

  // WHITE
  {
    slug: "silver-needle",
    name: "Silver Needle (Bai Hao Yin Zhen)",
    type: "white",
    origin: "Fujian, China",
    rating: 3.5,
    notes: "Melon rind, light honey; whisper-soft, good for late nights.",
    photo: "/tea/silver-needle.webp",
    dateTried: "2025-01-05",
    alt: "Porcelain cup of pale white tea with fuzzy silver buds",
  },
  {
    slug: "white-peony",
    name: "White Peony (Bai Mudan)",
    type: "white",
    origin: "Fujian, China",
    rating: 3.0,
    notes: "Peach skin and hay; forgiving and cozy.",
    photo: "/tea/white-peony.webp",
    dateTried: "2025-02-01",
    alt: "Light gold baimudan in a glass cup with leaf fragments",
  },

  // OOLONG
  {
    slug: "ali-shan-high-mountain",
    name: "Alishan High Mountain Oolong",
    type: "oolong",
    origin: "Chiayi, Taiwan",
    rating: 4.5,
    notes: "Orchid, buttered greens, cloud-soft texture.",
    photo: "/tea/alishan.webp",
    dateTried: "2025-02-20",
    alt: "Rolled green oolong balls and a jade cup",
  },
  {
    slug: "da-hong-pao",
    name: "Da Hong Pao (Rock Oolong)",
    type: "oolong",
    origin: "Wuyi, China",
    rating: 4.0,
    notes: "Minerality with cocoa and roasted nuts; dramatic.",
    photo: "/tea/da-hong-pao.webp",
    dateTried: "2025-02-28",
    alt: "Dark roasted oolong liquor with rocky background",
  },

  // DARK (fermented / hei cha)
  {
    slug: "ripe-puerh-2012",
    name: "Ripe Pu-erh (2012)",
    type: "dark",
    origin: "Yunnan, China",
    rating: 4.0,
    notes: "Earthy, clean barn, sweet date finish; perfect coding tea.",
    photo: "/tea/ripe-puerh-2012.webp",
    dateTried: "2025-01-29",
    alt: "Deep mahogany pu-erh in a gaiwan",
  },
  {
    slug: "liu-bao",
    name: "Liu Bao",
    type: "dark",
    origin: "Guangxi, China",
    rating: 3.5,
    notes: "Woods and camphor; settles the mind.",
    photo: "/tea/liu-bao.webp",
    dateTried: "2025-03-07",
    alt: "Clay cup of liu bao with basket leaf behind",
  },

  // YELLOW
  {
    slug: "junshan-yinzhen",
    name: "Junshan Yinzhen",
    type: "yellow",
    origin: "Hunan, China",
    rating: 3.5,
    notes: "Soft corn-sweetness, silky; rare treat.",
    photo: "/tea/junshan-yinzhen.webp",
    dateTried: "2025-03-01",
    alt: "Pale yellow liquor in a porcelain cup",
  },
  {
    slug: "huang-cha-wishlist",
    name: "Huang Cha (Wishlist Sample)",
    type: "yellow",
    notes: "Want to compare pan-yellowing profiles from two regions.",
    wishlist: true,
    photo: "/tea/huang-cha.webp",
    alt: "Loose yellow tea leaves in a small dish",
  },
];
