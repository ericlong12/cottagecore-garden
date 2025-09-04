export type DiaryEntry = {
  slug: string;
  date: string; // ISO YYYY-MM-DD
  title: string;
  bodyMarkdown: string;
};

export const diary: DiaryEntry[] = [
  {
    slug: "on-plushie-conversations",
    date: "2025-08-28",
    title: "On Plushie Conversations",
    bodyMarkdown: `Sometimes I wonder if my plushies are little mirrors, reflecting moods I don't say out loud.

Today Sprout was especially chirpy, so maybe I was too. Mochi disagreed, but Mochi often does.`,
  },
  {
    slug: "tea-as-weather",
    date: "2025-08-15",
    title: "Tea as Weather",
    bodyMarkdown: `Hojicha feels like draping myself in dusk. Heavy, earthy, grounding.

I needed that after a day where my head felt like clouds about to burst.`,
  },
  {
    slug: "quiet-friday",
    date: "2025-06-06",
    title: "Quiet Friday",
    bodyMarkdown: `Fixed a tiny bug, watered the basil, and let Thistle guard a fresh stack of books.

Small progress tastes like honey.`,
  },
];
