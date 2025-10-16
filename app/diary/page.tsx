import type { Metadata } from "next";
import Link from "next/link";
import BackHome from "@/components/BackHome";
import EmojiTitle from "@/components/EmojiTitle";
import { diary, type DiaryEntry } from "@/content/diary";
import { formatISODateLabel, isoYear } from "@/lib/date";

export const metadata: Metadata = {
  title: "My Diary • My Garden",
  description: "Longer reflections, whenever they bloom.",
};

function byDateDesc(a: { date: string }, b: { date: string }) {
  // ISO strings compare lexicographically
  return b.date.localeCompare(a.date);
}

export default function DiaryIndex() {
  const sorted = [...diary].sort(byDateDesc);

  const groups = sorted.reduce<Record<string, DiaryEntry[]>>((acc, entry) => {
    const y = isoYear(entry.date);
    (acc[y] ||= []).push(entry);
    return acc;
  }, {});
  const years = Object.keys(groups).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-6" id="main">
      <BackHome />

      <header className="mb-6">
        <EmojiTitle emoji="📖" text="My Diary" />
        <p className="mt-1 text-ink/70">longer reflections, whenever they bloom</p>
      </header>

      {years.map((year) => (
        <section key={year} className="mb-8">
          <h2 className="mb-3 font-serif text-xl text-ink">{year}</h2>
          <ul className="space-y-3">
            {groups[year].map((e) => (
              <li
                key={`${year}-${e.slug}`}
                className="rounded-2xl border border-ink/10 bg-cream/60 p-4 shadow-sm transition hover:shadow-md motion-reduce:transition-none motion-reduce:hover:shadow-sm"
              >
                <Link
                  href={`/diary/${year}/${e.slug}`}
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                  aria-label={`Open diary entry: ${e.title}`}
                >
                  <div className="text-sm text-ink/60">
                    <time dateTime={e.date}>{formatISODateLabel(e.date)}</time>
                  </div>
                  <h3 className="font-serif text-lg text-ink">{e.title}</h3>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-3">
            <Link
              href={`/diary/${year}`}
              className="text-sm text-ink/70 underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
            >
              View all {year} entries →
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
}