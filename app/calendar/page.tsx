import type { Metadata } from "next";
import Link from "next/link";
import BackHome from "@/components/BackHome";
import EmojiTitle from "@/components/EmojiTitle";
import { eventsByYear, type Event } from "@/content/events";
import { todayISO, isoYear, isoCompare } from "@/lib/date";
import { EventRow } from "@/components/EventRow";

export const metadata: Metadata = {
  title: "Future Calendar • My Garden",
  description: "Upcoming plans for this year.",
};

export default function CalendarPage() {
  const currentYear = Number(isoYear(todayISO()));
  const all = [...(eventsByYear[currentYear] ?? [])].sort((a, b) => isoCompare(a.date, b.date));
  const today = todayISO();
  const upcoming = all.filter((e) => isoCompare(e.date, today) >= 0);

  const archiveYears = Object.keys(eventsByYear)
    .map(Number)
    .filter((y) => y !== currentYear)
    .sort((a, b) => b - a);

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-6" id="main">
      <BackHome />
      <header className="mb-6">
        <EmojiTitle emoji="📅" text="Future Calendar" />
        <p className="mt-1 text-ink/70">upcoming plans for this year</p>
      </header>

      {upcoming.length === 0 ? (
        <div className="rounded-2xl border border-ink/10 bg-cream/60 p-6 shadow-sm text-center">
          <p className="text-ink/70 mb-2">no upcoming plans yet—check the archive 🌿</p>
          {archiveYears.length > 0 && (
            <div className="mt-4">
              <p className="mb-2 text-ink/70">archive</p>
              <ul className="flex flex-wrap gap-2 justify-center">
                {archiveYears.map((y) => (
                  <li key={y}>
                    <Link
                      href={`/calendar/archive/${y}`}
                      className="inline-flex items-center rounded-full border border-ink/10 bg-cream px-3 py-1 hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                    >
                      {y} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <>
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {upcoming.map((event: Event) => (
              <EventRow key={event.id} event={event} />
            ))}
          </section>
          {archiveYears.length > 0 && (
            <div className="mt-8 text-sm">
              <p className="mb-2 text-ink/70">archive</p>
              <ul className="flex flex-wrap gap-2">
                {archiveYears.map((y) => (
                  <li key={y}>
                    <Link
                      href={`/calendar/archive/${y}`}
                      className="inline-flex items-center rounded-full border border-ink/10 bg-cream px-3 py-1 hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                    >
                      {y} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
}
