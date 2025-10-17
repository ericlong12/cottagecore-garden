import type { Metadata } from "next";
import Link from "next/link";
import BackHome from "@/components/BackHome";
import { events } from "@/content/events";

export const metadata: Metadata = {
  title: "Future Calendar • My Garden",
  description: "Upcoming plans for this year.",
};

function formatDate(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  } catch {
    return iso;
  }
}

function mapTagToToken(t: string) {
  const slug = t.toLowerCase().replace(/\s+/g, "-");
  return `tag:${slug}`;
}

function displayLabel(tag: string) {
  if (!tag) return tag;
  const parts = tag.split(":", 2);
  const raw = parts.length === 2 ? parts[1] : parts[0];
  return raw.replace(/-/g, " ");
}

export default function CalendarPage() {
  const visible = events; // use events list

  const statusBySlug: Record<string, string> = {
    "give-thanks-2025": "status:going",
    "cruise-2025": "status:maybe",
    "fanime-con-2025": "status:wishlist",
    "anime-expo-2025": "status:unlikely",
  };

  const statusClassMap: Record<string, string> = {
    "status:going": "bg-green-50 text-green-800 ring-green-600/30",
    "status:likely": "bg-emerald-50 text-emerald-800 ring-emerald-600/30",
    "status:maybe": "bg-yellow-50 text-yellow-900 ring-yellow-700/25",
    "status:unlikely": "bg-amber-50 text-amber-900 ring-amber-700/25",
    "status:not-going": "bg-slate-50 text-slate-700 ring-slate-600/25",
    "status:wishlist": "bg-violet-50 text-violet-800 ring-violet-600/25",
  };

  const statusLabelMap: Record<string, string> = {
    "status:going": "For sure going",
    "status:likely": "Likely",
    "status:maybe": "Maybe",
    "status:unlikely": "Unlikely",
    "status:not-going": "Not going",
    "status:wishlist": "Wishlist",
  };

  return (
    <div className="min-h-screen bg-amber-50 text-ink">
      <header className="border-b border-black/5 bg-amber-50/80">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center gap-4">
          <BackHome />
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Future Calendar</h1>
            <p className="text-sm text-ink/70 -mt-0.5">upcoming plans for this year</p>
          </div>
          <div className="ml-auto" />
        </div>
      </header>

      {/* main is transparent to match page bg exactly */}
      <main className="mx-auto max-w-4xl px-6 py-10">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visible.map((e) => {
            const statusToken = statusBySlug[e.slug] ?? "status:maybe";
            const chipClass = statusClassMap[statusToken] ?? statusClassMap["status:maybe"];
            const statusLabel = statusLabelMap[statusToken] ?? "Maybe";

            // produce canonical tokens but display labels without prefix
            const canonicalTags = (e.tags ?? []).map(mapTagToToken);
            const labels = canonicalTags.map(displayLabel);

            const shown = labels.slice(0, 2);
            const extra = Math.max(0, labels.length - 2);

            return (
              <article
                key={e.slug}
                className="group rounded-2xl bg-amber-50 ring-1 ring-black/10 shadow-sm overflow-hidden transition-transform will-change-transform hover:-translate-y-0.5 hover:shadow-md focus-within:shadow-md"
                tabIndex={0}
                aria-labelledby={`title-${e.slug}`}
              >
                <figure className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
                  <img
                    src={e.photo}
                    alt={e.alt ?? e.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                    width={800}
                    height={600}
                  />

                  <time className="absolute left-2 top-2 rounded-full bg-black/55 text-white text-[11px] px-2 py-0.5 shadow-sm backdrop-blur-md whitespace-nowrap">
                    {formatDate(e.date)}
                  </time>
                </figure>

                <div className="p-4">
                  <h3 id={`title-${e.slug}`} className="text-lg font-semibold tracking-tight leading-snug text-ink line-clamp-2">
                    {e.title}
                  </h3>

                  <div className="mt-2 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset whitespace-nowrap ${chipClass}`}
                    >
                      {statusLabel}
                    </span>

                    <div className="flex flex-wrap gap-2">
                      {shown.map((lab, idx) => (
                        <span
                          key={lab + idx}
                          className="rounded-full bg-slate-100 text-slate-700 ring-1 ring-slate-300 px-2 py-0.5 text-xs whitespace-nowrap"
                          title={canonicalTags[idx]}
                        >
                          {lab}
                        </span>
                      ))}

                      {extra > 0 && (
                        <span className="rounded-full bg-slate-100 text-slate-700 ring-1 ring-slate-300 px-2 py-0.5 text-xs">+{extra}</span>
                      )}
                    </div>

                    <Link
                      href={`/calendar/${e.slug}`}
                      className="ml-auto text-sm font-medium text-amber-700 hover:text-amber-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 rounded"
                    >
                      Details →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
}
