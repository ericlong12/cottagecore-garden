"use client";

import * as React from "react";
import type { TeaType } from "@/content/teas";

const styles: Record<TeaType, string> = {
  black:  "bg-ink/15 text-ink",
  green:  "bg-sage/20 text-moss",
  white:  "bg-butter/40 text-ink",
  oolong: "bg-blush/25 text-ink",
  dark:   "bg-ink/25 text-ink",
  yellow: "bg-butter/40 text-ink",
  herbal: "bg-lavender/25 text-ink", // ← added
};

export function TypeChip({ type }: { type: TeaType }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ${styles[type]}`}>
      {type}
    </span>
  );
}
