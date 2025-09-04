
export default function EmojiTitle({ emoji, title, subtitle }: { emoji: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-semibold" style={{ fontFamily: 'DM Serif Text, serif' }}>
        <span className="mr-2">{emoji}</span>{title}
      </h1>
      {subtitle && <p className="text-ink/70">{subtitle}</p>}
    </div>
  )
}
