import type { Metadata } from "next";
import * as React from "react";
import { teas } from "@/content/teas";
import BackHome from "@/components/BackHome";
import EmojiTitle from "@/components/EmojiTitle";
import { TeaCard } from "@/components/TeaCard";

export const metadata: Metadata = {
  title: "Tea Wishlist • My Garden",
  description: "Teas I’d like to try next.",
};

export default function WishlistPage() {
  const list = teas.filter((t) => t.wishlist);

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-6">
      <BackHome />
      <header className="mb-6">
        <EmojiTitle emoji="📝" title="Tea Wishlist" />
        <p className="mt-1 text-ink/70">teas I’d like to try next</p>
      </header>

      {list.length === 0 ? (
        <div className="mx-auto mt-12 max-w-md rounded-2xl border border-ink/10 bg-cream/60 p-6 shadow-sm text-center">
          <h2 className="mb-2 text-lg font-semibold heading-serif">
            Wishlist is empty
          </h2>
          <p className="mb-4 text-sm text-ink/70">
            Add a few teas you’re curious about and they’ll appear here.
          </p>
        </div>
      ) : (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((tea) => (
            <TeaCard key={tea.slug} tea={tea} />
          ))}
        </section>
      )}
    </div>
  );
}
