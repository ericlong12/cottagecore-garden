type Props = {
  emoji: string;
  title?: string;      // preferred
  text?: string;       // legacy alias
  subtitle?: string;
};

export default function EmojiTitle({ emoji, title, text, subtitle }: Props) {
  const heading = title ?? text ?? "";
  return (
    <div className="mb-2">
      <h1 className="font-serif text-2xl text-ink flex items-center gap-2">
        <span aria-hidden="true">{emoji}</span>
        <span>{heading}</span>
      </h1>
      {subtitle ? <p className="text-ink/70">{subtitle}</p> : null}
    </div>
  );
}
