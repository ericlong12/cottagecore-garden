// content/plushies.ts
export type Plushie = {
  id: string
  name: string
  species: string
  avatar: string
  traits: string[]
  funFact?: string
  about: string
  favorites: string[]
}

export const plushies: Plushie[] = [
  {
    id: "malice",
    name: "Malice",
    species: "grey bunny",
    avatar: "/plushies/malice.png",
    traits: ["mischievous", "soft-spoken", "dusk walker"],
    funFact: "Collects shiny bottle caps and hides them under teacups.",
    about:
      "Malice looks a bit goth but is secretly gentle; loves moonlit window perches, low-volume lofi, and nibbling on carrot macarons.",
    favorites: ["Earl Grey with bergamot", "acorn buttons", "midnight coding streams"],
  },
  {
    id: "powder",
    name: "Powder",
    species: "white bear",
    avatar: "/plushies/powder.png",
    traits: ["comfort creature", "steady paws", "blanket sommelier"],
    funFact: "Can identify 7 blanket fabrics by touch alone.",
    about:
      "Powder is the studio’s emotional support bear—keeps vibes calm, watches builds compile, and insists on warm socks.",
    favorites: ["snow chrysanthemum tea", "fresh laundry day", "soft piano playlists"],
  },
  {
    id: "thistle",
    name: "Thistle",
    species: "sky dragon (Jellycat)",
    avatar: "/plushies/thistle.png",
    traits: ["curious", "nerd sparkle", "bug hunter"],
    funFact: "Names clouds after programming languages.",
    about:
      "Thistle is a curious cloud-dweller who loves oolong tastings, stack traces, and explaining things with tiny claw gestures.",
    favorites: ["high-mountain oolong", "neat commit histories", "rainy Sundays"],
  },
  {
    id: "puddlewick",
    name: "Puddlewick",
    species: "frog",
    avatar: "/plushies/puddlewick.png",
    traits: ["bouncy", "garden scout", "balloon-animal apprentice"],
    funFact: "Knows how to twist 3 balloon animals without popping them (usually).",
    about:
      "Puddlewick is a green bean of chaos who loves puddle-splash speedruns and cheering during deploys.",
    favorites: ["ceremonial matcha", "lily-pad naps", "spicy ramen"],
  },
]
