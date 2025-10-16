import Image from "next/image";
import * as React from "react";
import type { Project } from "@/content/projects";
import { splitTech } from "@/lib/tech";

export type ProjectCardProps = { project: Project };

export default function ProjectCard({ project }: ProjectCardProps) {
  const { slug, title, year, blurb, tech = [], github, live, thumbnail, alt } = project;
  const headingId = `p-${slug}`;

  // Canonicalize tech labels for display (content stays untouched)
  const { canon, unknown } = splitTech(tech);
  const techToShow = [...canon, ...unknown];

  return (
    <article
      className="card px-5 py-4"
      aria-labelledby={headingId}
    >
      <div className="flex gap-4">
        {thumbnail ? (
          <div className="relative aspect-[16/9] w-48 overflow-hidden rounded-xl bg-ink/5">
            <Image
              src={thumbnail}
              alt={alt ?? title}
              fill
              className="object-cover transition will-change-transform group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
              sizes="(max-width: 640px) 60vw, 192px"
            />
          </div>
        ) : null}

        <div className="min-w-0 flex-1">
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
