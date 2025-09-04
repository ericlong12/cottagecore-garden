"use client";
import * as React from "react";

export function TeaStars({
  rating,
  className = "",
}: { rating?: number; className?: string }) {
  if (rating == null) return null;

  // Clamp 0..5 and snap to nearest 0.5
  const clamped = Math.max(0, Math.min(5, Math.round(rating * 2) / 2));
  const full = Math.floor(clamped);
  const half = clamped - full === 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  const clipId = React.useId(); // unique per instance to avoid SVG ID collisions

  return (
    <div
      aria-label={`${clamped} out of 5 stars`}
      className={`flex items-center gap-0.5 text-moss ${className}`}
    >
      {Array.from({ length: full }).map((_, i) => <Star key={`f${i}`} />)}
      {half === 1 && <StarHalf clipId={clipId} />}
      {Array.from({ length: empty }).map((_, i) => (
        <Star key={`e${i}`} className="text-ink/25" />
      ))}
    </div>
  );
}

function Star({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className={`h-4 w-4 fill-current ${className}`}>
      <path d="M10 1.7l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.9l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.7z" />
    </svg>
  );
}

function StarHalf({ clipId }: { clipId: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4">
      {/* outline */}
      <path
        d="M10 1.7l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.9l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.7z"
        className="fill-ink/25"
      />
      {/* left half fill */}
      <clipPath id={`${clipId}-half`}>
        <rect x="0" y="0" width="10" height="20" />
      </clipPath>
      <path
        d="M10 1.7l2.5 5.1 5.6.8-4 3.9.9 5.6L10 14.9l-5 2.6.9-5.6-4-3.9 5.6-.8L10 1.7z"
        className="fill-moss"
        clipPath={`url(#${clipId}-half)`}
      />
    </svg>
  );
}
