import type { Metadata } from 'next'

import { Navbar } from '@/components/navbar'
import { Noto_Sans_Mono as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'

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
          'mx-auto min-h-screen max-w-screen-lg bg-background px-6 py-12 font-sans antialiased sm:py-24',
          fontSans.variable
        )}
      >
        <Navbar />
        <main className='mx-auto max-w-screen-lg px-6 md:px-3'>{children}</main>
        <footer className='flex flex-col items-center justify-center pb-6 text-xs tracking-widest'>
          <p>2024 Nathan Marcellous</p>
        </footer>
      </body>
    </html>
  )
}
