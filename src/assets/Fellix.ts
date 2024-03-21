import localFont from 'next/font/local';

export const fellix = localFont({
  src: [
    { path: './fonts/FellixVF/FellixVF.woff2', style: 'normal' },

    // preload will force fonts to be loaded, and italic is not used, should be uncommented only when used
    // { path: '/fonts/Fellix/FellixItalicVF.woff2', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-sans',
  fallback: ['sans-serif'],
  adjustFontFallback: false,
});
