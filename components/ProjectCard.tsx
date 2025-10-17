import Image from "next/image";
import * as React from "react";
import type { Project } from "@/content/projects";
import { splitTech } from "@/lib/tech";

export type ProjectCardProps = { project: Project };

export default function ProjectCard({ project }: ProjectCardProps) {
  const { slug, title, year, blurb, tech = [], github, live, thumbnail, alt } = project;
  const headingId = `p-${slug}`;
  const { canon, unknown } = splitTech(tech);
  const techToShow = [...canon, ...unknown];

  return (
    <article
      className="rounded-2xl border border-ink/10 bg-cream/60 p-4 shadow-soft transition hover:shadow-md motion-reduce:transition-none"
      aria-labelledby={headingId}
    >
      <div className="flex flex-col gap-3">
        {thumbnail ? (
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-ink/5">
            <Image
              src={thumbnail}
              alt={alt ?? title}
              fill
              className="object-contain p-2"
              sizes="(max-width: 640px) 90vw, 520px"
            />
          </div>
        ) : null}

        <div className="min-w-0">
          <h3 id={headingId} className="truncate font-serif text-lg text-ink md:text-xl">
            {title}
          </h3>
          <p className="text-sm text-ink/70">{year}</p>
          {blurb ? <p className="mt-1 text-ink/80">{blurb}</p> : null}

          {techToShow.length ? (
            <div className="mt-2 flex flex-wrap gap-1">
              {techToShow.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-ink/10 bg-cream px-2 py-0.5 text-xs text-ink"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-3 flex flex-wrap items-center gap-3">
            {live ? (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
              >
                Live
              </a>
            ) : null}
            {github ? (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
              >
                GitHub
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
