"use client";

import Image from "next/image";
import * as React from "react";
import type { Tea } from "@/content/teas";
import { TypeChip } from "./TypeChip";
import { TeaStars } from "./TeaStars";

export type TeaCardProps = { tea: Tea };

export function TeaCard({ tea }: TeaCardProps) {
  const { name, type, notes, rating, photo, alt, wishlist, slug } = tea;
  const headingId = "tea-" + slug;

  return (
    <article
      aria-labelledby={`t-${tea.slug}`}
      className="rounded-2xl border border-ink/10 bg-cream/60 p-3 shadow-soft transition hover:shadow-md motion-reduce:transition-none"
    >
      {photo ? (
        <div className="relative aspect-[4/3] w-full bg-ink/5">
          <Image
            src={photo}
            alt={alt ?? name}
            fill
            className="object-cover transition group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
            sizes="(max-width: 640px) 100vw, 50vw"
            priority={false}
          />
        </div>
      ) : (
        <div className="aspect-[4/3] w-full bg-ink/5" />
      )}

      <div className="flex flex-col gap-2 p-2">
        <div className="flex items-start justify-between gap-3">
          <h3
            id={`t-${tea.slug}`}
            className="truncate font-serif text-lg text-ink md:text-xl"
          >
            {name}
          </h3>
          <TypeChip
            type={type}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
          />
        </div>

        {wishlist ? (
          <span className="inline-flex w-fit items-center rounded-full bg-lavender/25 px-2 py-0.5 text-xs text-ink">
            Wishlist
          </span>
        ) : (
          <TeaStars rating={rating ?? 0} />
        )}

        <p className="text-sm text-ink/80">{notes}</p>
      </div>
    </article>
  );
}
