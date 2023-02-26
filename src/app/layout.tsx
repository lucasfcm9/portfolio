'use client'

import '../styles/global.css'

// eslint-disable-next-line
import { DM_Sans } from '@next/font/google'
import { ThemeProvider } from 'next-themes'

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '700'] })

export default function RootLayout({
  children,
}: {
  // eslint-disable-next-line
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={dmSans.className}>
      <head />
      <body>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  )
}
