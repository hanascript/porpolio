import type { Metadata } from 'next'

import { cn } from '@/lib/utils'
import { Noto_Sans_Mono as FontSans } from 'next/font/google'

import { Navbar } from '@/components/navbar'
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
    <html lang='en' className='!scroll-smooth'>
      <body
        className={cn('bg-background font-sans antialiased', fontSans.variable)}
      >
        {/* <Header /> */}
        {children}
        <Navbar />
      </body>
    </html>
  )
}
