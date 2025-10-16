import type { Metadata } from "next";
import BackHome from "@/components/BackHome";
import EmojiTitle from "@/components/EmojiTitle";
import { balloons } from "@/content/balloons";
import { BalloonRow } from "@/components/BalloonRow";

export const metadata: Metadata = {
  title: "Balloon Animals • My Garden",
  description: "Twists, pops, and favorites.",
};

export default function Page() {
  const list = [...balloons].sort(
    (a, b) => a.difficulty - b.difficulty || a.name.localeCompare(b.name)
  );

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-6">
      <BackHome />
      <header className="mb-6">
        <EmojiTitle emoji="🎈" text="balloons" />
        <p className="mb-2 text-xs text-ink/60">difficulty: 1 easy — 5 tricky</p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2 list-none pl-0">
        {list.map((it) => (
          <BalloonRow key={it.slug} item={it} />
        ))}
      </ul>
    </div>
  );
}
