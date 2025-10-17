export type Event = {
  id: string;
  date: string;      // ISO YYYY-MM-DD
  title: string;
  location?: string;
  link?: string;
  note?: string;
};

export const eventsByYear: Record<number, Event[]> = {
  2025: [
    {
      id: "2025-10-12-maker-fair",
      date: "2025-10-12",
      title: "Local Maker Fair",
      note: "Walkable circuits & crafts.",
    },
    {
      id: "2025-11-03-tea-meetup",
      date: "2025-11-03",
      title: "Tea Meetup",
      note: "Oolongs and stories.",
    },
    {
      id: "2025-12-07-indie-dev-night",
      date: "2025-12-07",
      title: "Indie Dev Night",
      note: "Show-and-tell builds.",
    },
  ],

  2024: [
    {
      id: "cozy-coding-2024-01-20",
      date: "2024-01-20",
      title: "Cozy Coding Jam",
      location: "Home",
      note: "socks + soup day",
    },
    {
      id: "spring-tea-2024-03-15",
      date: "2024-03-15",
      title: "Spring Tea Gathering",
      note: "Cherry blossoms & gaiwan practice.",
    },
  ],
};

export type CalendarEvent = {
  slug: string;
  date: string;           // ISO YYYY-MM-DD (all-day)
  title: string;
  location?: string;
  url?: string;
  notes?: string;
  tags?: string[];        // talk, meetup, workshop, conference, hackathon, playtest, travel, personal ... (tolerant to others)
  photo?: string;         // OPTIONAL: small thumb under /public/**
  alt?: string;           // alt text when photo present
};

// Placeholder empty list — populate with your real events later
export const events: CalendarEvent[] = [
  {
    slug: "give-thanks-2025",
    date: "2025-11-27",               // US Thanksgiving (4th Thu of Nov 2025)
    title: "Give Thanks 2025",
    tags: ["personal"],
    photo: "/calendar/givethanks.webp",
    alt: "table with thanksgiving-themed food and decor",
  },
  {
    slug: "cruise-2025",
    date: "2025-09-12",               // pick a representative all-day date
    title: "Cruise Ship Trip",
    location: "Pacific Coast",
    tags: ["travel"],
    photo: "/calendar/cruiseship.webp",
    alt: "sunset over cruise ship deck",
  },
  {
    slug: "fanime-con-2025",
    date: "2025-05-24",               // Memorial Day weekend (Fanime runs Fri–Mon)
    title: "Fanime Con",
    location: "San Jose McEnery Convention Center",
    tags: ["conference", "travel"],
    photo: "/calendar/fananime.webp",
    alt: "crowd at Fanime Con with cosplay",
  },
  {
    slug: "anime-expo-2025",
    date: "2025-07-04",               // AX is usually around July 4 weekend
    title: "Anime Expo",
    location: "Los Angeles Convention Center",
    tags: ["conference", "travel"],
    photo: "/calendar/animeexpo.webp",
    alt: "Anime Expo signage with attendees",
  },
];
