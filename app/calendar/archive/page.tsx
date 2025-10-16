import Link from "next/link";
import type { Metadata } from "next";
import BackHome from "@/components/BackHome";
import EmojiTitle from "@/components/EmojiTitle";
import { events as allEvents } from "@/content/events";

export const metadata: Metadata = {
  title: "Calendar Archive • My Garden — Eric",
  description: "Past events by year.",
};

function yearsFromEvents() {
  const set = new Set<number>();
  for (const e of allEvents) set.add(new Date(e.date).getFullYear());
  return Array.from(set).sort((a, b) => b - a);
}

export default function ArchiveIndex() {
  const years = yearsFromEvents();
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-6" id="main">
      <BackHome />
      <header className="mb-6">
        <EmojiTitle emoji="🗂️" text="calendar archive" />
        <p className="mt-1 text-ink/70">past years, neatly stacked</p>
      </header>

      <ul className="space-y-2">
        {years.map((y) => (
          <li key={y}>
            <Link
              href={`/calendar/archive/${y}`}
              className="inline-flex items-center rounded-full border border-ink/10 bg-cream px-3 py-1 text-ink hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
            >
              {y} →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
