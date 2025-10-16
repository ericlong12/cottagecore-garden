// app/sitemap.ts
import type { MetadataRoute } from "next";
import { diary } from "@/content/diary";
import { projects } from "@/content/projects";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cottagecore-garden.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const core = ["/", "/plushies", "/projects", "/tea", "/balloons", "/diary", "/calendar"].map((p) => ({
    url: base + p,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const diaryLinks = diary.map((e) => ({
    url: `${base}/diary/${new Date(e.date).getFullYear()}/${e.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const projectAnchors = projects.map((p) => ({
    url: `${base}/projects#${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...core, ...diaryLinks, ...projectAnchors];
}
