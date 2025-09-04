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
