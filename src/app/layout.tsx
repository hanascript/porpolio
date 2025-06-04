import type { Metadata } from 'next';
import './globals.css';

import { Filter } from '@/components/animations/filter';
import { gohu, satoshi, silkscreen } from '@/fonts/font';

export const metadata: Metadata = {
  title: 'Nathan Marcellous Web Dev',
  description: 'Nathan Marcellous Web Developer Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${silkscreen.variable} ${satoshi.variable} ${gohu.variable} antialiased`}>
        <Filter>{children}</Filter>
      </body>
    </html>
  );
}
