import type { Metadata } from 'next';

import './globals.css';

import { gohu, satoshi } from '@/fonts/font';

import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Hanascript - Nathan Marcellous Portfolio',
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
      <body className={`${satoshi.variable} ${gohu.variable} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
