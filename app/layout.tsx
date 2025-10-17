import './globals.css'
import { DM_Serif_Text, Inter } from 'next/font/google'

const dm = DM_Serif_Text({ subsets: ['latin'], weight: '400', variable: '--font-serif' })
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Garden',
  description: 'soft things • small tech • warm cups',
  icons: {
    icon: '/BunnyLogo.png',
  },
  openGraph: {
    title: 'My Garden',
    description: 'soft things • small tech • warm cups',
    images: ['/og.png'],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://cottagecore-garden.vercel.app"),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" href="/plushies/malice.png" />
        <link rel="icon" href="/BunnyLogo.png" type="image/png" />
        <link rel="shortcut icon" href="/BunnyLogo.png" type="image/png" />
      </head>
      <body className={`${inter.className} ${dm.variable}`}>
        {/* Skip to content */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-cream focus:px-3 focus:py-2 focus:text-ink focus:shadow-soft"
        >
          Skip to content
        </a>
        <div className="fixed inset-0 pointer-events-none">
          <div className="leaf" style={{ left: '10%', animationDelay: '0s' }} />
          <div className="leaf" style={{ left: '40%', animationDelay: '4s' }} />
          <div className="leaf" style={{ left: '70%', animationDelay: '8s' }} />
        </div>
        <div className="mx-auto max-w-3xl px-4 py-8">
          {children}
        </div>
      </body>
    </html>
  )
}


