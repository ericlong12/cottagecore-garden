import type { Metadata } from "next";
import Link from "next/link";
import BackHome from "@/components/BackHome";
import EmojiTitle from "@/components/EmojiTitle";
import { eventsByYear } from "@/content/events";
import { isoCompare } from "@/lib/date";
import { EventRow } from "@/components/EventRow";

type Params = { params: { year: string } };

export function generateStaticParams() {
  return Object.keys(eventsByYear).map((y) => ({ year: String(y) }));
}

export function generateMetadata({ params }: Params): Metadata {
  return {
    title: `Calendar Archive ${params.year} • My Garden`,
    description: `Events from ${params.year}.`,
  };
}

export default function YearArchive({ params }: Params) {
  const yearNum = Number(params.year);
  const list = [...(eventsByYear[yearNum] ?? [])].sort((a, b) => isoCompare(b.date, a.date));

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-6">
      <BackHome />
      <header className="mb-6">
        <EmojiTitle emoji="📚" text="Archive" />
        <p className="mt-1 text-ink/70">past plans from {params.year}</p>
      </header>

      {list.length === 0 ? (
        <div className="rounded-2xl border border-ink/10 bg-cream/60 p-6 shadow-sm text-center">
          <p className="text-ink/70 mb-2">no entries for {params.year} yet</p>
          <Link
            href="/calendar"
            className="inline-flex items-center rounded-full border border-ink/10 bg-cream px-3 py-1 mt-4 hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
          >
            ← Back to calendar
          </Link>
        </div>
      ) : (
        <section className="space-y-4">
          {list.map((event) => (
            <EventRow key={event.id} event={event} />
          ))}
        </section>
      )}
    </div>
  );
}
