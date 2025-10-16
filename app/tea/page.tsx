import type { Metadata } from "next";
import TeaClient from "./TeaClient";

export const metadata: Metadata = {
  title: "Tea Journal • My Garden",
  description: "Sips, ratings, and steeped thoughts.",
};

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 pb-16 pt-6" id="main">
      <TeaClient />
    </div>
  );
}
