import type { Metadata } from "next";
import TeaClient from "./TeaClient";

export const metadata: Metadata = {
  title: "Tea Journal • My Garden",
  description: "Sips, ratings, and steeped thoughts.",
};

export default function Page() {
  return <TeaClient />;
}
