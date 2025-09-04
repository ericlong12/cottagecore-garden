import Image from "next/image";
import * as React from "react";
import type { Balloon } from "@/content/balloons";
import { DifficultyDots } from "./DifficultyDots";

export function BalloonRow({ item }: { item: Balloon }) {
  const { name, difficulty, timeMins, notes, photo, alt } = item;

  return (
    <article className="rounded-2xl border border-ink/10 bg-cream/60 p-4 shadow-sm transition hover:shadow-md motion-reduce:transition-none motion-reduce:hover:shadow-sm">
      <div className="flex gap-4">
        {photo ? (
          <div className="relative aspect-[4/3] w-28 overflow-hidden rounded-lg bg-ink/5">
            <Image src={photo} alt={alt ?? name} fill className="object-cover" sizes="112px" />
          </div>
        ) : null}

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-serif text-lg text-ink">{name}</h3>
            <DifficultyDots level={difficulty as 1|2|3|4|5} />
            {timeMins ? (
              <span className="text-xs text-ink/60">
                <span aria-hidden="true">· </span>{timeMins} min
              </span>
            ) : null}
          </div>
          {notes ? <p className="mt-1 text-sm text-ink/80">{notes}</p> : null}
        </div>
      </div>
    </article>
  );
}
