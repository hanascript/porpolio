import localFont from 'next/font/local';

import { Silkscreen } from 'next/font/google';

export const satoshi = localFont({
  src: './Satoshi-Variable.woff',
  variable: '--font-satoshi',
  weight: '900',
});

export const silkscreen = Silkscreen({
  variable: '--font-silkscreen',
  subsets: ['latin'],
  weight: ['400'],
});


export const gohu = localFont({
  src: './gohufont.ttf', // Adjust path if needed
  variable: '--font-gohu',
  weight: '400',
});
