import Image from "next/image";
import * as React from "react";
import type { Balloon } from "@/content/balloons";
import { DifficultyDots } from "./DifficultyDots";

export function BalloonRow({ item }: { item: Balloon }) {
  const { slug, name, difficulty, timeMins, notes, photo, alt } = item;
  const headingId = `balloon-${slug ?? name.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <article className="card group p-4" aria-labelledby={headingId}>
      <div className="flex gap-4">
        {photo ? (
          <div className="relative aspect-[4/3] w-28 overflow-hidden rounded-xl bg-ink/5">
            <Image
              src={photo}
              alt={alt ?? name}
              fill
              className="object-cover"
              sizes="112px"
            />
          </div>
        ) : null}

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 id={headingId} className="font-serif text-lg md:text-xl text-ink">
              {name}
            </h3>
            <DifficultyDots level={difficulty as 1 | 2 | 3 | 4 | 5} />
            {timeMins ? (
              <span className="text-xs text-ink/60">
                <span aria-hidden="true">· </span>
                {timeMins} min
              </span>
            ) : null}
          </div>

          {notes ? <p className="mt-1 text-sm text-ink/80">{notes}</p> : null}
        </div>
      </div>
    </article>
  );
}
