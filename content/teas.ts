// content/teas.ts
export type TeaType =
  | "black"
  | "green"
  | "white"
  | "oolong"
  | "dark"
  | "yellow"
  | "herbal"; // for lavender/chrysanthemum/mint

export type Tea = {
  slug: string;
  name: string;
  type: TeaType;
  origin?: string;
  vendor?: string;
  rating?: number;     // 0..5 (halves ok)
  notes: string;       // short tasting notes
  photo?: string;      // /tea/*.webp (or .jpg)
  dateTried?: string;  // YYYY-MM-DD
  wishlist?: boolean;
  alt?: string;
};

export const teas: Tea[] = [
  {
    slug: "tai-ping-hou-kui",
    name: "Tai Ping Hou Kui",
    type: "green",
    origin: "Anhui, China",
    rating: 4.0,
    notes: "Orchid aroma, gentle bean-sweetness, crisp finish.",
    photo: "/tea/tai-ping-hou-kui.webp",
    alt: "Tai Ping Hou Kui green tea in a white cup",
  },
  {
    slug: "kings-oolong",
    name: "King's Oolong",
    type: "oolong",
    vendor: "Ten Ten 409",
    rating: 4.5,
    notes: "Buttercream body, gardenia florals; very cozy.",
    photo: "/tea/kings-oolong.webp",
    alt: "Amber oolong liquor with soft highlights",
  },
  {
    slug: "frosty-peak",
    name: "Frosty Peak (Dong Ding)",
    type: "oolong",
    origin: "Taiwan",
    rating: 4.0,
    notes: "Roasty-nutty nose, caramelized sugar, smooth finish.",
    photo: "/tea/frosty-peak.webp",
    alt: "Dong Ding oolong in a porcelain cup",
  },
  {
    slug: "dragon-well",
    name: "Dragon Well (Longjing)",
    type: "green",
    origin: "Hangzhou, China",
    rating: 4.0,
    notes: "Toasted chestnut, steamed greens, silky texture.",
    photo: "/tea/dragon-well.webp",
    alt: "Longjing green tea with pale gold liquor",
  },
  {
    slug: "duck-shit",
    name: "Duck Shit Oolong (Ya Shi Xiang)",
    type: "oolong",
    origin: "Fenghuang, Guangdong",
    rating: 4.2,
    notes: "Honey-orchid fragrance, mineral snap, lingering sweetness.",
    photo: "/tea/duck-shit.webp",
    alt: "Dancong oolong tea with amber hue",
  },
  {
    slug: "lavender",
    name: "Lavender",
    type: "herbal",
    rating: 3.5,
    notes: "Soft floral, soothing and clean; bedtime friendly.",
    photo: "/tea/lavender.webp",
    alt: "Lavender tisane in a glass cup",
  },
  {
    slug: "furry-peak",
    name: "Furry Peak",
    type: "green", // adjust if you prefer another style
    rating: 3.8,
    notes: "Fresh meadowy aroma, light sweetness, crisp finish.",
    photo: "/tea/furry-peak.webp",
    alt: "Green tea with light yellow liquor",
  },
  {
    slug: "sencha",
    name: "Sencha",
    type: "green",
    origin: "Japan",
    rating: 3.7,
    notes: "Spinachy-grassy umami; bright and refreshing.",
    photo: "/tea/sencha.webp",
    alt: "Sencha with vibrant green tone",
  },
  {
    slug: "yunnan-black",
    name: "Yunnan Black",
    type: "black",
    origin: "Yunnan, China",
    rating: 4.1,
    notes: "Malt and cocoa, soft fruit sweetness; comfy daily cup.",
    photo: "/tea/yunnan-black.webp",
    alt: "Deep amber Yunnan black tea",
  },
  {
    slug: "chrysanthemum",
    name: "Chrysanthemum",
    type: "herbal",
    rating: 3.6,
    notes: "Honeyed floral, cooling finish; great iced.",
    photo: "/tea/chrysanthemum.webp",
    alt: "Yellow chrysanthemum infusion in a cup",
  },
  {
    slug: "mint-melody-rishi",
    name: "Mint Melody",
    type: "herbal",
    vendor: "Rishi",
    rating: 3.8,
    notes: "Cooling mint blend, clean sweetness, super refreshing.",
    photo: "/tea/mint-melody-rishi.webp",
    alt: "Mint herbal infusion",
  },
  {
    slug: "ti-kuan-yin",
    name: "Ti Kuan Yin (Tie Guan Yin)",
    type: "oolong",
    origin: "Fujian, China",
    rating: 4.0,
    notes: "Orchid and lilac aromatics, buttery and bright.",
    photo: "/tea/ti-kuan-yin.webp",
    alt: "Light golden Tie Guan Yin oolong",
  },
];
