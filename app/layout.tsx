import type { Metadata } from 'next'

import { cn } from '@/lib/utils'
import { Noto_Sans_Mono as FontSans } from 'next/font/google'

import { DesktopNav } from '@/components/desktop-nav'
import { MobileNav } from '@/components/mobile-nav'
import './globals.css'
import { Clock } from '@/components/clock'
import { TerminalLayer } from '@/components/terminal'
import { Button } from '@/components/ui/button'
import { EllipsisIcon, EllipsisVertical } from 'lucide-react'
import { Header } from '@/components/header'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Nathan Marcellous Web Dev',
  description: 'Nathan Marcellous Web Developer Portfolio'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'mx-auto bg-background p-4 font-sans antialiased',
          fontSans.variable
        )}
      >
        <Header />
        <main className='mx-auto max-w-screen-lg'>{children}</main>
        <MobileNav />
      </body>
    </html>
  )
}
