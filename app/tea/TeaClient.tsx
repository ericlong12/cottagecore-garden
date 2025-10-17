"use client";

import * as React from "react";
import { teas } from "@/content/teas";
import type { TeaType } from "@/content/teas";
import BackHome from "@/components/BackHome";
import EmojiTitle from "@/components/EmojiTitle";
import { TeaCard } from "@/components/TeaCard";

type SortKey = "rating" | "date";
const TYPES: Array<"all" | TeaType> = ["all", "black", "green", "white", "oolong", "dark", "yellow", "herbal"];

export default function TeaClient() {
  const [type, setType] = React.useState<"all" | TeaType>("all");
  const [sort, setSort] = React.useState<SortKey>("rating");

  let list = [...teas];

  if (type !== "all") {
    list = list.filter((t) => t.type === type);
  }

  list.sort((a, b) => {
    if (sort === "rating") {
      const ar = a.rating ?? -1;
      const br = b.rating ?? -1;
      return br - ar || a.name.localeCompare(b.name);
    }
    const ad = a.dateTried ? new Date(a.dateTried).getTime() : 0;
    const bd = b.dateTried ? new Date(b.dateTried).getTime() : 0;
    return bd - ad || a.name.localeCompare(b.name);
  });

  const count = list.length;

  return (
    <div className="mx-auto max-w-4xl px-4 pb-16 pt-6" id="main">
      <BackHome />
      <header className="mb-2">
        <EmojiTitle emoji="🍵" text="Tea Journal" />
        <p className="mt-1 text-ink/70">sips, ratings, and steeped thoughts</p>
      </header>

      {/* Filters */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {TYPES.map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={[
              "inline-flex items-center rounded-full border border-moss/30 px-2 py-0.5 text-sm transition",
              type === t ? "bg-butter/40" : "bg-white/70 hover:bg-white/90",
            ].join(" ")}
          >
            {t}
          </button>
        ))}

        <div className="ml-auto flex items-center gap-2">
          <label htmlFor="sort" className="text-sm text-ink/70">
            Sort by
          </label>
          <select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-lg border border-moss/30 bg-white/70 px-2 py-1 text-sm outline-none transition focus-visible:ring-2 focus-visible:ring-sage"
          >
            <option value="rating">Rating</option>
            <option value="date">Date</option>
          </select>
        </div>
      </div>

      <p className="mt-3 text-sm text-ink/70">
        {count} {count === 1 ? "tea" : "teas"} • sorted by {sort}
      </p>

      {count === 0 ? (
        <div className="mt-8 rounded-2xl border border-moss/30 bg-white/60 p-6 text-ink/70">
          I never tried this tea before 😭
        </div>
      ) : (
        <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {list.map((t) => (
            <TeaCard key={t.slug} tea={t} />
          ))}
        </section>
      )}

      <div className="mt-8 text-sm">
        <a href="/tea/wishlist" className="btn">
          View wishlist →
        </a>
      </div>
    </div>
  );
}
