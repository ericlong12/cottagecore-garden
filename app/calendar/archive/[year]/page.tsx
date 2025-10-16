import type { Metadata } from "next";
import BackHome from "@/components/BackHome";
import EmojiTitle from "@/components/EmojiTitle";
import CalendarYearClient, { type CalendarEvent } from "@/components/CalendarYearClient";
import { events as allEvents } from "@/content/events";

type Params = { params: { year: string } };

export function generateMetadata({ params }: Params): Metadata {
  const year = Number(params.year);
  return {
    title: `Calendar ${year} • My Garden — Eric`,
    description: `Events from ${year}.`,
  };
}

export default function YearArchive({ params }: Params) {
  const year = Number(params.year);
  const events: CalendarEvent[] = allEvents.filter(
    (e) => new Date(e.date).getFullYear() === year,
  );

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-6" id="main">
      <BackHome />
      <header className="mb-6">
        <EmojiTitle emoji="📅" text={`calendar • ${year}`} />
      </header>

      <CalendarYearClient year={year} events={events} />
    </div>
  );
}
