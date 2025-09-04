import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BackHome from "@/components/BackHome";
import EmojiTitle from "@/components/EmojiTitle";
import { diary } from "@/content/diary";
import { isoYear, formatISODateLabel } from "@/lib/date";

type Params = { params: { year: string; slug: string } };

export function generateStaticParams() {
  return diary.map((e) => ({ year: isoYear(e.date), slug: e.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const entry = diary.find((e) => e.slug === params.slug && isoYear(e.date) === params.year);
  if (!entry) return { title: "Diary • My Garden" };
  return {
    title: `${entry.title} • My Diary`,
    description: entry.bodyMarkdown.replace(/\s+/g, " ").slice(0, 140),
  };
}

export default function DiaryEntryPage({ params }: Params) {
  const entry = diary.find((e) => e.slug === params.slug && isoYear(e.date) === params.year);
  if (!entry) return notFound();

  const paragraphs = entry.bodyMarkdown.trim().split(/\n{2,}/);

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-6">
      <BackHome />
      <header className="mb-3">
        <EmojiTitle emoji="📖" text={entry.title} />
        <p className="mt-1 text-sm text-ink/60">
          <time dateTime={entry.date}>
            {formatISODateLabel(entry.date, { month: "long" })}
          </time>
        </p>
      </header>

      <article className="leading-relaxed text-ink/90 [text-wrap:pretty]">
        <div className="space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>
    </div>
  );
}