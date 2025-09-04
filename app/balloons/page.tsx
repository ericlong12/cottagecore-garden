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
        <EmojiTitle emoji="🎈" text="Balloon Animals" />
        <p className="mt-1 text-ink/70">twists, pops, and favorites</p>
      </header>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {list.map((it) => <BalloonRow key={it.slug} item={it} />)}
      </section>
    </div>
  );
}
