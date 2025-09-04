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
      className="group rounded-2xl border border-ink/10 bg-cream/60 p-4 shadow-sm transition hover:shadow-md focus-within:shadow-md"
      tabIndex={-1}
      aria-labelledby={headingId}
    >
      <div className="flex gap-4">
        {photo ? (
          <div className="relative aspect-[4/3] w-36 overflow-hidden rounded-xl bg-ink/5">
            <Image
              src={photo}
              alt={alt ?? name}
              fill
              className="object-cover transition will-change-transform group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
              sizes="(max-width: 640px) 40vw, 180px"
            />
          </div>
        ) : null}

        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-2">
            <h3 id={headingId} className="truncate font-serif text-lg text-ink">
              {name}
            </h3>
            <TypeChip type={type} />
          </div>

          {wishlist ? (
            <span className="mb-1 inline-flex items-center rounded-full bg-lavender/25 px-2 py-0.5 text-xs text-ink">
              Wishlist
            </span>
          ) : (
            <TeaStars rating={rating} />
          )}

          <p className="mt-2 text-sm text-ink/80">{notes}</p>
        </div>
      </div>
    </article>
  );
}
