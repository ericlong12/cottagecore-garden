import * as React from "react";
import type { TeaType } from "@/content/teas";

const styles: Record<TeaType, string> = {
  black: "bg-moss/15 text-moss",
  green: "bg-sage/20 text-moss",
  white: "bg-butter/40 text-ink",
  oolong: "bg-blush/30 text-ink",
  dark: "bg-ink/10 text-ink",
  yellow: "bg-lavender/30 text-ink",
};

export function TypeChip({ type }: { type: TeaType }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[type]}`}>
      {type}
    </span>
  );
}
