import Image from "next/image";
import { TechChip } from "./TechChip";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  const { slug, title, year, blurb, tech, github, live, thumbnail, alt } = project;
  const headingId = `project-${slug}`;

  return (
    <article className="card group p-4" aria-labelledby={headingId}>
      <div className="flex gap-4">
        {thumbnail ? (
          <div className="relative aspect-[16/9] w-40 min-w-0 overflow-hidden rounded-xl bg-ink/5">
            <Image
              src={thumbnail}
              alt={alt ?? title}
              fill
              className="object-cover transition will-change-transform group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
              sizes="(max-width: 640px) 40vw, 160px"
            />
          </div>
        ) : null}

        <div className={thumbnail ? "min-w-0 flex-1" : "w-full"}>
          <div className="mb-1 flex items-center gap-2">
            <h3 id={headingId} className="truncate font-serif text-lg md:text-xl text-ink">
              {title}
            </h3>
            <span className="text-xs text-ink/60">{year}</span>
          </div>

          <p className="mb-2 text-sm text-ink/80">{blurb}</p>

          <div className="mb-2 flex flex-wrap gap-2">
            {tech.map((t) => (
              <TechChip key={t} label={t} />
            ))}
          </div>

          <div className="flex gap-2">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open GitHub for ${title}`}
                className="text-xs underline hover:no-underline rounded px-1 focus-ring"
              >
                GitHub
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open Live site for ${title}`}
                className="text-xs underline hover:no-underline rounded px-1 focus-ring"
              >
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
