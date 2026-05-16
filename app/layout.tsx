import type { Metadata } from 'next'
import Script from 'next/script'
import { Manrope, JetBrains_Mono, Oswald } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

const oswald = Oswald({
  subsets: ['latin', 'cyrillic'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://snarkatv.com'),
  title: 'СНАРК — Российские вездеходы с двигателями Toyota',
  description: 'Премиальные квадроциклы СНАРК собственного производства в Санкт-Петербурге. Двигатели Toyota 1ZZ-FE, постоянный полный привод, 30+ лет опыта.',
  keywords: 'квадроцикл, вездеход, СНАРК, Toyota, полный привод, внедорожник, ATV, Россия',
  authors: [{ name: 'СНАРК ГРУП' }],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'СНАРК — Российские вездеходы с двигателями Toyota',
    description: 'Премиальные квадроциклы СНАРК собственного производства в Санкт-Петербурге.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'СНАРК',
    url: '/',
    // TODO: положи 1200×630 OG-картинку в public/og-image.jpg
    images: ['/og-image.jpg'],
  },
  // TODO: положи favicon.ico в public/ — иначе будет 404 на корне
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const yandexMetrikaId = process.env.NEXT_PUBLIC_YM_ID

  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${jetbrainsMono.variable} ${oswald.variable} dark bg-background`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        {/* TODO: впиши NEXT_PUBLIC_YM_ID в .env.local или environment variables хостинга */}
        {yandexMetrikaId && (
          <>
            <Script id="yandex-metrika" strategy="afterInteractive">
              {`
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(${yandexMetrikaId}, "init", {
                  clickmap: true,
                  trackLinks: true,
                  accurateTrackBounce: true,
                  webvisor: true
                });
              `}
            </Script>
            <noscript>
              <div>
                <img
                  src={`https://mc.yandex.ru/watch/${yandexMetrikaId}`}
                  style={{ position: 'absolute', left: '-9999px' }}
                  alt=""
                />
              </div>
            </noscript>
          </>
        )}
      </body>
    </html>
  )
}
