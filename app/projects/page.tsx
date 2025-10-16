import type { Metadata } from "next";
import BackHome from "@/components/BackHome";
import EmojiTitle from "@/components/EmojiTitle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects • My Garden — Eric",
  description: "small, friendly builds and code curiosities.",
};

export default function Page() {
  const list = [...projects].sort(
    (a, b) => b.year - a.year || a.title.localeCompare(b.title)
  );

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
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-6" id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BackHome />
      <header className="mb-6">
        <EmojiTitle emoji="🧰" text="Projects" />
        <p className="mt-1 text-ink/70">
          small, friendly builds and code curiosities.
        </p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2">
        {list.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
