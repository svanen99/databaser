import { Albert_Sans } from 'next/font/google'
import type { Metadata } from 'next'

import { cn } from '@/utils/classnames'
import { Header } from '@/components/header'
import './globals.css'

const albertSans = Albert_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Social media app',
  description: 'This is a practice repository for a social media app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          albertSans.className,
          'flex flex-col items-center bg-zinc-50 font-medium text-zinc-800',
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
