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
    (a, b) => b.year - a.year || a.title.localeCompare(b.title)
  );

  return (
    <main className="mx-auto max-w-5xl px-4 pb-16 pt-6">
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
