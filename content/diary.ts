export type DiaryEntry = {
  slug: string;
  date: string;           // ISO date
  title: string;
  bodyMarkdown: string;   // paragraphs split by blank lines
  photo?: string;         // optional image under /public/**
  alt?: string;           // required if photo is provided
};

export const diary: DiaryEntry[] = [
  {
    slug: "san-francisco-tech-week",
    date: "2025-10-11",
    title: "San Francisco Tech Week",
    bodyMarkdown: `This has to be one of the craziest events I've been to. I had so much fun in SF, me and a group of friends went to SF using the Cal Train. I highly recommend that train btw, it takes about 1hr and 20mins to reach SF from San Jose.

Anyway, this event was crazy because it was going on the same time as fleet week, which is a week where the blue Angels are flying. (a super elite planes and pilots) However, this year the blue angels got defunded because our government shut down LOL.

One memorable experience from this trip was that I met QQQQQQQ which was talking about his relationship situation to me. I think he was QQQQQQQ, but I loved his energy LOL.`,
    photo: "/diary/dj.webp",
    alt: "DJ setup at an outdoor event during San Francisco Tech Week",
  },
  {
    slug: "meeting-the-founder-of-mingle",
    date: "2025-10-16",
    title: "Meeting the Founder of Mingle",
    bodyMarkdown: `Thursday October 16

Today was great. I got to shoot and film some cool and funny videos with the creator of Mingle, he such a funny guy. We went around the SJSU campus and asked students if they wanted to help us promote the app Mingle by shooting funny interviews. By the way Mingle is a dating app made exclusively for SJSU students. It was fun because I got to talk and meet with a bunch of new people while we were filming. I realized that a lot of people are more shy than I originally thought, they usually don't want to be interviewed. However the people who did interview were awesome and had a great time. I think I learned that being an out going person is more rewarding than being someone shy 

https://www.getmingel.com`,
    photo: "/diary/mingle.webp",
    alt: "Filming around SJSU campus to promote the Mingle app",
  },
];
