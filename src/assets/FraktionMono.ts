import localFont from "next/font/local";

export const fraktionMono = localFont({
  src: [
    { path: "./fonts/FraktionMono/FraktionMono-Medium.woff2", style: "normal" },

    // preload will force fonts to be loaded, and italic is not used, should be uncommented only when used
    // { path: '/fonts/FraktionMono/FraktionMonoItalic.woff2', style: 'italic' },
  ],
  display: "swap",
  variable: "--font-mono",
  fallback: ["monospace"],
  adjustFontFallback: false,
});
