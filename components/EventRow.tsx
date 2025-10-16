import Link from "next/link";
import { formatISODateLabel } from "@/lib/date";
import type { Event } from "@/content/events";

export function EventRow({ event }: { event: Event }) {
  const headingId = `event-${event.slug ?? event.title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <article className="card p-4" aria-labelledby={headingId}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-ink/60">
            <time dateTime={event.date}>
              {formatISODateLabel(event.date, { month: "short", day: "numeric" })}
            </time>
            {event.location && (
              <>
                <span aria-hidden="true">·</span>
                <span>{event.location}</span>
              </>
            )}
          </div>

          <h3 id={headingId} className="font-serif text-lg md:text-xl text-ink">
            {event.title}
          </h3>

          {event.note && <p className="text-sm text-ink/80">{event.note}</p>}
          {event.notes && <p className="text-sm text-ink/80">{event.notes}</p>}
        </div>

        {event.link && (
          <Link
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open details for ${event.title}`}
            className="inline-flex items-center rounded px-2 py-1 text-sm underline hover:no-underline focus-ring"
          >
            Details →
          </Link>
        )}
        {event.url && !event.link && (
          <Link
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open details for ${event.title}`}
            className="inline-flex items-center rounded px-2 py-1 text-sm underline hover:no-underline focus-ring"
          >
            Details →
          </Link>
        )}
      </div>
    </article>
  );
}
