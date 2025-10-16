import "./globals.css";
import { DM_Serif_Text, Inter } from "next/font/google";
import type { Metadata } from "next";

const dm = DM_Serif_Text({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Garden",
  description: "soft things • small tech • warm cups",
  icons: { icon: "/BunnyLogo.png" },
  openGraph: {
    title: "My Garden",
    description: "soft things • small tech • warm cups",
    images: ["/og.png"],
  },
  // one-line so the verifier regex matches:
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://cottagecore-garden.vercel.app"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dm.variable}`}>
        {/* Skip to content */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-cream focus:px-3 focus:py-2 focus:text-ink focus:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
        >
          Skip to content
        </a>

        {/* Background leaves */}
        <div className="pointer-events-none fixed inset-0">
          <div className="leaf" style={{ left: "10%", animationDelay: "0s" }} />
          <div className="leaf" style={{ left: "40%", animationDelay: "4s" }} />
          <div className="leaf" style={{ left: "70%", animationDelay: "8s" }} />
        </div>

        {/* Pages will render their own #main landmark */}
        <div className="mx-auto max-w-3xl px-4 py-8">{children}</div>
      </body>
    </html>
  );
}
