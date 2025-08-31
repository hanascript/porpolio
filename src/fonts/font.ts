import localFont from 'next/font/local';

export const satoshi = localFont({
  src: './Satoshi-Variable.woff',
  variable: '--font-satoshi',
  weight: '900',
});

export const gohu = localFont({
  src: './gohufont.ttf',
  variable: '--font-gohu',
  weight: '400',
});
