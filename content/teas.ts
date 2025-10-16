// content/teas.ts
export type TeaType =
  | "black"
  | "green"
  | "white"
  | "oolong"
  | "dark"
  | "yellow"
  | "herbal";

export type Tea = {
  slug: string;
  name: string;
  type: TeaType;
  origin?: string;
  vendor?: string;
  rating?: number;     // 0..5 (halves ok)
  notes: string;       // your words
  photo?: string;      // /tea/*.webp
  dateTried?: string;
  wishlist?: boolean;
  alt?: string;
};

export const teas: Tea[] = [
  {
    slug: "kings-oolong",
    name: "King's Oolong",
    type: "oolong",
    rating: 4, // 4/5
    notes: `My sister bought this one for me in Texas and shipped it over. OMG this has to be one of the best oolong teas I've had ever it is so good. I give it a 4/5`,
    photo: "/tea/kings-oolong.webp",
    alt: "Cup of oolong tea",
  },
  {
    slug: "duck-shit",
    name: "Duck Shit Oolong",
    type: "oolong",
    rating: 5, // 5/5
    notes: `this one has a funny name so I had to get it LOL. I don't know why they would call it shit, because this is a 5/5. yummy, maybe I should try some cat piss coffee next!`,
    photo: "/tea/duck-shit.webp",
    alt: "Cup of dancong oolong",
  },
  {
    slug: "yunnan-black",
    name: "Yunnan Black",
    type: "black",
    rating: 4.5, // 4.5/5
    notes: `wow. just wow. This is sooooo good holy cow. I want to drink this every damn day its so good  4.5/5`,
    photo: "/tea/yunnan-black.webp",
    alt: "Cup of Yunnan black tea",
  },
  {
    slug: "dragon-well",
    name: "Dragon Well (Longjing)",
    type: "green",
    rating: 1, // 2/10 ≈ 1/5
    notes: `Okay I got this one because I heard it is the flagship of green teas. Which means it's supposed to be the best and most popular green tea. however, when I brew it, it looks like clear water. It taste like I'm sucking on a penny, ew 2/10`,
    photo: "/tea/dragon-well.webp",
    alt: "Cup of green tea",
  },
  {
    slug: "frosty-peak",
    name: "Frosty Peak (Dong Ding)",
    type: "oolong",
    rating: 3, // 3/5
    notes: `alright, I was so hyped to try this one because I love the name, it sounds so cool...However it doesn't taste like anything, I feel like it has little taste idk 3/5`,
    photo: "/tea/frosty-peak.webp",
    alt: "Cup of oolong tea",
  },
  {
    slug: "tai-ping-hou-kui",
    name: "Tai Ping Hou Kui",
    type: "green",
    // no explicit score given; will sort to the end
    notes: `another one which I was excited to try, but omg it was like no good at all. no taste, disappointed.`,
    photo: "/tea/tai-ping-hou-kui.webp",
    alt: "Cup of Tai Ping Hou Kui",
  },
  {
    slug: "ti-kuan-yin",
    name: "Ti Kuan Yin (Tie Guan Yin)",
    type: "oolong",
    rating: 0, // 0/5
    notes: `I haven't tried it enough times to give it a rating, so.. 0/5`,
    photo: "/tea/ti-kuan-yin.webp",
    alt: "Cup of Tie Guan Yin",
  },
  {
    slug: "sencha",
    name: "Sencha",
    type: "green",
    rating: 5, // 5/5
    notes: `wow this one is actually my favorite green tea ever. my parents bought it for me when they were in Japan. omg BEST GREEN TEA EVER BY FAR. 5/5`,
    photo: "/tea/sencha.webp",
    alt: "Cup of sencha",
  },
  {
    slug: "mint-melody-rishi",
    name: "Mint (Rishi)",
    type: "herbal",
    rating: 1, // 1/5
    notes: `first of all, I gotta say mint is my absolute favorite. so good, it feels great there is nothing bad you can say about it... maybe it might be spicy for some people!?! LOL, however, I got to say. this flavor was really dissapointing, I thought because it has black liquocie root inside of it. I hate that flavor, it has such a sweet aftertaste which feels weird. 1/5`,
    photo: "/tea/mint-melody-rishi.webp",
    alt: "Cup of mint herbal tea",
  },
  {
    slug: "lavender",
    name: "Lavender",
    type: "herbal",
    rating: 5, // 5/5
    notes: `OMG I am in love with lavender, this stuff taste like spa water. Makes me feel like I own a whole salon and I'm worth a million bucks. 5/5`,
    photo: "/tea/lavender.webp",
    alt: "Cup of lavender tisane",
  },
  {
    slug: "chrysanthemum",
    name: "Chrysanthemum",
    type: "herbal",
    rating: 2, // 2/5
    notes: `wow I was played by the salesman for this one. he said that chrysanthemum was the best thing on his menu and he said that it is his flagship of herbal teas. I took his word for it, this shit taste like ass. he screwed me LOL. 2/5`,
    photo: "/tea/chrysanthemum.webp",
    alt: "Cup of chrysanthemum tea",
  },
  {
    slug: "furry-peak",
    name: "Furry Peak",
    type: "green",
    notes: ``,
    photo: "/tea/furry-peak.webp",
    alt: "Cup of green tea",
  },
];
