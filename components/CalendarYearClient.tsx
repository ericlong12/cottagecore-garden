"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { googleLink, icsDataURI } from "@/lib/calendar";

export type CalendarEvent = {
  slug: string;
  date: string;
  title: string;
  location?: string;
  url?: string;
  notes?: string;
  tags?: string[];
  photo?: string;
  alt?: string;
};

function formatDateLA(iso: string) {
  const d = new Date(iso + "T00:00:00");
  const weekday = d.toLocaleDateString("en-US", { weekday: "short", timeZone: "America/Los_Angeles" });
  const md = d.toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "America/Los_Angeles" });
  return `${weekday} • ${md}`;
}

export default function CalendarYearClient({ year, events }: { year: number; events: CalendarEvent[] }) {
  const [tag, setTag] = useState<string>("All");
  const tags = useMemo(() => {
    const s = new Set<string>();
    events.forEach((e) => (e.tags ?? []).forEach((t) => s.add(t)));
    return ["All", ...Array.from(s).sort((a, b) => a.localeCompare(b))];
  }, [events]);

  const filtered = tag === "All" ? events : events.filter((e) => (e.tags ?? []).includes(tag));

  return (
    <section>
      {/* Tag chips */}
      {tags.length > 1 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`rounded-full border px-3 py-1 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage ${
                t === tag ? "border-sage bg-sage/10 text-ink" : "border-ink/10 bg-cream text-ink hover:bg-ink/5"
              }`}
              aria-pressed={t === tag}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      {/* List */}
      {filtered.length === 0 ? (
        <p className="text-ink/70">nothing here yet — try a different filter</p>
      ) : (
        <ul className="space-y-3">
          {filtered.map((e) => (
            <li
              key={e.slug}
              className="rounded-2xl border border-ink/10 bg-cream/60 p-4 shadow-soft transition hover:shadow-md motion-reduce:transition-none"
              aria-label={`${e.title} on ${e.date}`}
            >
              <div className="flex items-start gap-3">
                {e.photo ? (
                  <div className="relative h-16 w-24 overflow-hidden rounded-lg bg-ink/5">
                    <Image
                      src={e.photo}
                      alt={e.alt ?? ""}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                ) : null}

                <div className="min-w-0 flex-1">
                  <div className="text-sm text-ink/70">{formatDateLA(e.date)}</div>
                  <h3 className="font-serif text-lg text-ink">{e.title}</h3>
                  {e.location && <div className="text-sm text-ink/70">{e.location}</div>}
                  {e.tags?.length ? (
                    <div className="mt-1 flex flex-wrap gap-1">
                      {e.tags.map((t) => (
                        <span key={t} className="rounded-full border border-ink/10 bg-cream px-2 py-0.5 text-xs text-ink">
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <a
                      href={googleLink(e)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                    >
                      Add to Google
                    </a>
                    <a
                      href={icsDataURI(e)}
                      download={`${e.slug}.ics`}
                      className="text-sm underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                    >
                      Download .ics
                    </a>
                    {e.url && (
                      <a
                        href={e.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                      >
                        Link
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
