import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/content/projects";
import BackHome from "@/components/BackHome";
import EmojiTitle from "@/components/EmojiTitle";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: `${p.title} • My Garden`,
    description: p.blurb,
    alternates: { canonical: `/projects/${p.slug}` },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-6" id="main">
      <BackHome />
      <header className="mb-6">
        <EmojiTitle emoji="🧩" text={p.title} />
        {p.blurb ? <p className="mt-1 text-ink/70">{p.blurb}</p> : null}
      </header>

      {p.thumbnail && (
        <div className="relative mb-6 aspect-video overflow-hidden rounded-2xl bg-ink/5">
          <Image src={p.thumbnail} alt={p.alt ?? p.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
        </div>
      )}

      {p.long && (
        <article className="card p-5 whitespace-pre-line text-[15px] leading-7">
          {p.long}
        </article>
      )}

      <div className="mt-6 flex gap-3">
        {p.live && (
          <Link className="btn" href={p.live} target="_blank" rel="noopener">
            Live
          </Link>
        )}
        {p.github && (
          <Link className="btn" href={p.github} target="_blank" rel="noopener">
            GitHub
          </Link>
        )}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: p.title,
            description: p.blurb,
            url: `https://yourdomain.com/projects/${p.slug}`,
            image: p.thumbnail ? `https://yourdomain.com${p.thumbnail}` : undefined,
          }),
        }}
      />
    </div>
  );
}
