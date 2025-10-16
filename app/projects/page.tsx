import type { Metadata } from "next";
import BackHome from "@/components/BackHome";
import EmojiTitle from "@/components/EmojiTitle";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects I’ve Built • My Garden",
  description: "Tiny builds & code curiosities.",
};

export default function ProjectsPage() {
  const list = [...projects].sort(
    (a, b) => b.year - a.year || a.title.localeCompare(b.title),
  );

  // JSON-LD for project list
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: list.map((p, i) => ({
      "@type": "CreativeWork",
      position: i + 1,
      name: p.title,
      url: p.live ?? p.github ?? undefined,
      dateCreated: String(p.year),
    })),
  };

  return (
    <main className="mx-auto max-w-5xl px-4 pb-16 pt-6" id="main">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BackHome />
      <header className="mb-6">
        <EmojiTitle emoji="🧪" text="Projects I’ve Built" />
        <p className="mt-1 text-ink/70">tiny builds & code curiosities</p>
      </header>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {list.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </main>
  );
}
