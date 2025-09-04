/** TZ-safe label: build a UTC-noon date so local timezones don't shift the day. */
export function formatISODateLabel(
  iso: string,
  opts?: Intl.DateTimeFormatOptions
): string {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d, 12));
  return new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    ...opts,
  }).format(dt);
}

/** Grab the year without parsing. */
export function isoYear(iso: string): string {
  return iso.slice(0, 4);
}

/** Today's local date as YYYY-MM-DD. */
export function todayISO(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** ISO strings compare lexicographically in chronological order. */
export function isoCompare(a: string, b: string): number {
  return a.localeCompare(b);
}
