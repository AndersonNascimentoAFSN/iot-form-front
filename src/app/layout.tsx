import type { Metadata } from 'next'
import './globals.css'

import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'In Orbit',
  description: 'In Orbit App',
  icons: {
    shortcut: {
      url: '/logo-in-orbit.svg',
      type: 'image/svg+xml',
      sizes: '192x192',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
      // className={`antialiased bg-zinc-950 text-zinc-50 min-h-screen`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
// ${geistSans.variable} ${geistMono.variable}
