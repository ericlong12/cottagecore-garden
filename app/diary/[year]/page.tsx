import type { Metadata } from "next";
import Link from "next/link";
import BackHome from "@/components/BackHome";
import EmojiTitle from "@/components/EmojiTitle";
import { diary } from "@/content/diary";
import { formatISODateLabel, isoYear } from "@/lib/date";

type Params = { params: { year: string } };

export function generateStaticParams() {
  const years = Array.from(new Set(diary.map((d) => isoYear(d.date))));
  return years.map((y) => ({ year: y }));
}

export function generateMetadata({ params }: Params): Metadata {
  return {
    title: `Diary • ${params.year} • My Garden`,
    description: `Diary entries from ${params.year}.`,
  };
}

export default function YearArchive({ params }: Params) {
  const { year } = params;
  const list = diary
    .filter((e) => isoYear(e.date) === year)
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-6" id="main">
      <BackHome />
      <header className="mb-6">
        <EmojiTitle emoji="📖" text={`Diary — ${year}`} />
      </header>

      {list.length === 0 ? (
        <p className="text-ink/70">nothing here yet—maybe later ✨</p>
      ) : (
        <ul className="space-y-3">
          {list.map((e) => (
            <li key={`${year}-${e.slug}`} className="card p-4">
              <Link
                href={`/diary/${year}/${e.slug}`}
                className="block focus-ring"
              >
                <div className="text-sm text-ink/60">
                  <time dateTime={e.date}>{formatISODateLabel(e.date)}</time>
                </div>
                <h3 className="font-serif text-lg text-ink">{e.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
