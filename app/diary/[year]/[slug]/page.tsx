import type { Metadata } from "next";
import Image from "next/image";
import BackHome from "@/components/BackHome";
import EmojiTitle from "@/components/EmojiTitle";
import { diary } from "@/content/diary";
import { autoLink } from "@/lib/text";

type Params = { params: { year: string; slug: string } };

export function generateStaticParams() {
  return diary.map((d) => ({ year: String(new Date(d.date).getFullYear()), slug: d.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const entry = diary.find((d) => d.slug === params.slug);
  return {
    title: entry ? `${entry.title} • My Garden — Eric` : "Diary • My Garden — Eric",
    description: entry?.bodyMarkdown?.slice(0, 140),
  };
}

function paraSplit(s: string) {
  return s.replace(/\r\n/g, "\n").split(/\n\s*\n/);
}

export default function DiaryEntry({ params }: Params) {
  const entry = diary.find((d) => d.slug === params.slug);
  if (!entry) {
    return (
      <div className="mx-auto max-w-3xl px-4 pb-16 pt-6" id="main">
        <BackHome />
        <p className="text-ink/70">couldn’t load that just now</p>
      </div>
    );
  }

  const paras = paraSplit(entry.bodyMarkdown);

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-6" id="main">
      <BackHome />
      <header className="mb-4">
        <EmojiTitle emoji="📓" text={entry.title} />
        <p className="text-ink/60">
          {new Date(entry.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            timeZone: "America/Los_Angeles",
          })}
        </p>
      </header>

      {entry.photo ? (
        <figure className="mb-4">
          <Image
            src={entry.photo}
            alt={entry.alt ?? ""}
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 720px"
            className="mx-auto rounded-xl border border-ink/10 bg-cream/50 object-cover"
          />
        </figure>
      ) : null}

      <article>
        {paras.map((p, i) => (
          <p key={i} className="mb-4 leading-relaxed text-ink/90" dangerouslySetInnerHTML={{ __html: autoLink(p) }} />
        ))}
      </article>
    </div>
  );
}