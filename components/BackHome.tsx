import Link from "next/link";

export default function BackHome() {
  return (
    <div className="mb-4">
      <Link href="/" className="text-sm underline underline-offset-2 focus-ring">
        ← back to home
      </Link>
    </div>
  );
}
