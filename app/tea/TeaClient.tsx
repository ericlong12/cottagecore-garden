"use client";

import * as React from "react";
import { teas } from "@/content/teas";
import type { TeaType } from "@/content/teas";
import BackHome from "@/components/BackHome";
import EmojiTitle from "@/components/EmojiTitle";
import { TeaCard } from "@/components/TeaCard";

type SortKey = "rating" | "date";
const TYPES: Array<"all" | TeaType> = ["all", "black", "green", "white", "oolong", "dark", "yellow"];

export default function TeaClient() {
  const [type, setType] = React.useState<"all" | TeaType>("all");
  const [sort, setSort] = React.useState<SortKey>("rating");

  const list = React.useMemo(() => {
    let out = teas.slice();

    // Filter
    if (type !== "all") out = out.filter((t) => t.type === type);

    // Sort
    out.sort((a, b) => {
      if (sort === "rating") {
        const ra = a.rating ?? Number.NEGATIVE_INFINITY;
        const rb = b.rating ?? Number.NEGATIVE_INFINITY;
        if (rb !== ra) return rb - ra; // desc rating
        const da = a.dateTried ? Date.parse(a.dateTried) : 0;
        const db = b.dateTried ? Date.parse(b.dateTried) : 0;
        return db - da; // newer first
      } else {
        const da = a.dateTried ? Date.parse(a.dateTried) : Number.NEGATIVE_INFINITY;
        const db = b.dateTried ? Date.parse(b.dateTried) : Number.NEGATIVE_INFINITY;
        if (db !== da) return db - da; // newer first
        const ra = a.rating ?? Number.NEGATIVE_INFINITY;
        const rb = b.rating ?? Number.NEGATIVE_INFINITY;
        return rb - ra;
      }
    });

    return out;
  }, [type, sort]);

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-6">
      <BackHome />

      <header className="mb-6">
        <EmojiTitle emoji="🍵" title="Tea Journal" />
        <p className="mt-1 text-ink/70">sips, ratings, and steeped thoughts</p>
      </header>

      {/* Toolbar */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {TYPES.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setType(t as any)}
              className={`rounded-full border px-3 py-1 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage
                ${type === t ? "border-sage bg-sage/20 text-ink" : "border-ink/10 bg-cream/60 text-ink/80 hover:bg-ink/5"}`}
              aria-pressed={type === t}
            >
              {t}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 text-sm text-ink/70">
          Sort by
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="rounded-lg border border-ink/10 bg-cream px-2 py-1 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
          >
            <option value="rating">Rating</option>
            <option value="date">Date tried</option>
          </select>
        </label>
      </div>

      {/* Results count */}
      <p className="text-sm text-ink/60 mb-4" aria-live="polite" role="status">
        {list.length} teas • sorted by {sort}
        {type !== "all" && <> • type: {type}</>}
      </p>

      {/* Empty state */}
      {list.length === 0 ? (
        <div className="mx-auto mt-12 max-w-md rounded-2xl border border-ink/10 bg-cream/60 p-6 shadow-sm text-center">
          <h2 className="mb-2 text-lg font-semibold heading-serif">No teas match that filter yet</h2>
          <p className="mb-4 text-sm text-ink/70">Try a different type, or peek at the wishlist.</p>
          <a
            href="/tea/wishlist"
            className="inline-flex items-center rounded-full border border-ink/10 bg-lavender/20 px-3 py-1 text-ink/80 hover:bg-lavender/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
          >
            View wishlist →
          </a>
        </div>
      ) : (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((tea) => (
            <TeaCard key={tea.slug} tea={tea} />
          ))}
        </section>
      )}

      <div className="mt-8 text-sm">
        <a
          href="/tea/wishlist"
          className="inline-flex items-center rounded-full border border-ink/10 bg-lavender/20 px-3 py-1 text-ink/80 hover:bg-lavender/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
        >
          View wishlist →
        </a>
      </div>
    </div>
  );
}
