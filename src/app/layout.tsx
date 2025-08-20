import type { Metadata } from 'next';
import './globals.css';

import { gohu, satoshi, silkscreen } from '@/fonts/font';

export const metadata: Metadata = {
  title: 'Hanascript',
  description: 'Web developer portfolio for Nathan Marcellous',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={`${silkscreen.variable} ${satoshi.variable} ${gohu.variable} antialiased`}>{children}</body>
    </html>
  );
}
