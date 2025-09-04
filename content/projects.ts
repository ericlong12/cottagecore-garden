export type Project = {
  slug: string
  title: string
  year: number
  blurb: string
  tech: string[]
  github?: string
  live?: string
  thumbnail?: string   // /projects/*.webp or .jpg (16:9)
  alt?: string
}

export const projects: Project[] = [
  {
    slug: "garden-journal",
    title: "Garden Journal",
    year: 2025,
    blurb: "A gentle web app for tracking plant growth, weather, and cozy garden notes. Built for slow mornings and rainy afternoons.",
    tech: ["Next.js", "TypeScript", "Tailwind", "SQLite"],
    github: "https://github.com/ericlong12/garden-journal",
    live: "https://garden-journal.vercel.app",
    thumbnail: "/projects/garden-journal.webp",
    alt: "Screenshot of Garden Journal app with plant entries",
  },
  {
    slug: "tea-timer",
    title: "Tea Timer",
    year: 2024,
    blurb: "Minimalist tea steeping timer with gentle alerts and a cottagecore palette. For mindful brewing and quiet breaks.",
    tech: ["React", "Vite", "Tailwind"],
    github: "https://github.com/ericlong12/tea-timer",
    live: "https://tea-timer.vercel.app",
    thumbnail: "/projects/tea-timer.webp",
    alt: "Tea Timer app showing countdown and tea types",
  },
  {
    slug: "plushie-catalog",
    title: "Plushie Catalog",
    year: 2023,
    blurb: "A playful catalog for plushie collections, with photos, stories, and favorite teas. Made for sharing soft things.",
    tech: ["Next.js", "TypeScript", "Cloudinary"],
    github: "https://github.com/ericlong12/plushie-catalog",
    thumbnail: "/projects/plushie-catalog.webp",
    alt: "Plushie Catalog grid with plushie photos",
  },
  {
    slug: "cozy-links",
    title: "Cozy Links",
    year: 2024,
    blurb: "A simple link-in-bio site with warm colors and gentle animations. For sharing projects and journal entries.",
    tech: ["Astro", "Tailwind"],
    live: "https://cozy-links.vercel.app",
    thumbnail: "/projects/cozy-links.webp",
    alt: "Cozy Links homepage with soft color blocks",
  },
  {
    slug: "balloon-animal-guide",
    title: "Balloon Animal Guide",
    year: 2023,
    blurb: "Tiny guide for balloon animal basics, with step-by-step photos and tips for beginners. Wholesome and fun.",
    tech: ["Svelte", "Tailwind"],
    // No thumbnail, so omit
  },
]
