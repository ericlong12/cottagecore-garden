// lib/calendar.ts
// Google Calendar link + simple ICS data URI (all-day events)
function escICS(s: string) {
  return s.replace(/([,;])/g, "\\$1").replace(/\n/g, "\\n");
}

export type CalendarLike = {
  title: string;
  date: string;          // YYYY-MM-DD (all-day)
  location?: string;
  url?: string;
  notes?: string;
};

export function googleLink(e: CalendarLike) {
  const d = e.date.replace(/-/g, "");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: e.title,
    dates: `${d}/${d}`,
    location: e.location ?? "",
    details: [e.notes, e.url].filter(Boolean).join("\n"),
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function icsDataURI(e: CalendarLike) {
  const d = e.date.replace(/-/g, "");
  const desc = [e.notes, e.url].filter(Boolean).join("\n");
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//My Garden//Calendar//EN",
    "BEGIN:VEVENT",
    `UID:${d}-${encodeURIComponent(e.title)}@mygarden`,
    `DTSTAMP:${d}T000000Z`,
    `DTSTART;VALUE=DATE:${d}`,
    `SUMMARY:${escICS(e.title)}`,
    e.location ? `LOCATION:${escICS(e.location)}` : "",
    desc ? `DESCRIPTION:${escICS(desc)}` : "",
    "END:VEVENT",
    "END:VCALENDAR",
  ]
    .filter(Boolean)
    .join("\r\n");
  return "data:text/calendar;charset=utf-8," + encodeURIComponent(ics);
}
