import type { Metadata } from 'next'

import { cn } from '@/lib/utils'
import { Noto_Sans_Mono as FontSans } from 'next/font/google'

import { DesktopNav } from '@/components/desktop-nav'
import { MobileNav } from '@/components/mobile-nav'
import './globals.css'

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
          'mx-auto min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <main className='flex'>
          <div className='mx-auto flex flex-1 flex-col gap-16 py-12'>
            {children}
          </div>
          <div className='hidden min-h-screen w-1/5 border-l border-black lg:block'>
            <DesktopNav />
          </div>
        </main>
        <MobileNav />
      </body>
    </html>
  )
}
