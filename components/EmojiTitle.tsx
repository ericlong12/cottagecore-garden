import * as React from "react";

type Props = {
  emoji: string;
  text?: string;   // canonical prop
  title?: string;  // TEMP alias; we'll remove after callers migrate
  className?: string;
};

export default function EmojiTitle({ emoji, text, title, className = "" }: Props) {
  const label = text ?? title ?? "";
  return (
    <h1 className={`flex items-center gap-2 font-serif text-2xl text-ink md:text-3xl ${className}`}>
      <span aria-hidden="true">{emoji}</span>
      <span>{label}</span>
    </h1>
  );
}
