import { NextResponse } from "next/server";
import { diary } from "@/content/diary";

export const dynamic = "force-static";

export async function GET() {
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cottagecore-garden.vercel.app";
  const items = [...diary].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  const title = "My Garden — Eric";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"><channel>
<title>${title}</title>
<link>${site}/diary</link>
<description>soft things • small tech • warm cups</description>
${items
  .map(
    (e) => `
  <item>
    <title><![CDATA[${e.title}]]></title>
    <link>${site}/diary/${new Date(e.date).getFullYear()}/${e.slug}</link>
    <guid>${site}/diary/${new Date(e.date).getFullYear()}/${e.slug}</guid>
    <pubDate>${new Date(e.date).toUTCString()}</pubDate>
    <description><![CDATA[${e.bodyMarkdown.slice(0, 400)}]]></description>
  </item>`,
  )
  .join("")}
</channel></rss>`;

  return new NextResponse(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
