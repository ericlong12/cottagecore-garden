import Link from "next/link";
import { formatISODateLabel } from "@/lib/date";
import type { Event } from "@/content/events";

export function EventRow({ event }: { event: Event }) {
  return (
    <article className="rounded-2xl border border-ink/10 bg-cream/60 p-4 shadow-sm transition hover:shadow-md motion-reduce:transition-none motion-reduce:hover:shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <div className="text-sm text-ink/60 flex flex-wrap items-center gap-2">
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
          <strong className="font-serif text-lg text-ink">{event.title}</strong>
          {event.note && (
            <p className="text-sm text-ink/80">{event.note}</p>
          )}
        </div>
        {event.link && (
          <Link
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open details for ${event.title}`}
            className="inline-flex items-center rounded focus-visible:ring-2 focus-visible:ring-sage focus-visible:outline-none text-sm underline hover:no-underline px-2 py-1"
          >
            Details →
          </Link>
        )}
      </div>
    </article>
  );
}
