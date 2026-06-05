import type { Metadata } from 'next'
import Script from 'next/script'
import { Manrope, JetBrains_Mono, Oswald } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import JsonLd from '@/components/JsonLd'
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
  metadataBase: new URL('https://snarkatv.ru'),
  title: 'СНАРК 1800 — российский вездеход на колесах низкого давления с двигателем Toyota | Официальный сайт',
  description: 'СНАРК 1800 — премиальный российский вездеход на колесах низкого давления с двигателем Toyota 1ZZ-FE. 140 л.с., постоянный 4×4, 300 мм клиренс. Производство в России. 1000+ часов испытаний. Официальные дилеры по всей стране.',
  keywords: 'вездеход СНАРК, СНАРК 1800, квадроцикл на колесах низкого давления, вездеход Toyota, болотоход СНАРК, вездеход для охоты, вездеход Бурлак',
  authors: [{ name: 'СНАРК ГРУП' }],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'СНАРК 1800 — российский вездеход на колесах низкого давления',
    description: 'Премиальный российский вездеход СНАРК 1800 с двигателем Toyota. 140 л.с., 4×4, 300 мм клиренс. 1000+ часов испытаний.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'СНАРК',
    url: '/',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const yandexMetrikaId = process.env.NEXT_PUBLIC_YM_ID

  // Organization + LocalBusiness structured data
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    name: 'ООО «СНАРК ГРУП»',
    alternateName: 'СНАРК',
    description: 'Производитель российских вездеходов СНАРК на колёсах низкого давления с двигателями Toyota.',
    url: 'https://snarkatv.ru',
    email: 'sales@snark.ru',
    telephone: '+7 800 333-50-59',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Екатерининский пр-кт, д. 1, лит. А, пом. 6Н, офис 11',
      addressLocality: 'Санкт-Петербург',
      postalCode: '195067',
      addressCountry: 'RU',
    },
    // Production address in Kurgan can be mentioned in description or added as additional location
  }

  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${jetbrainsMono.variable} ${oswald.variable} dark bg-background`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased min-h-screen bg-background text-foreground">
        <JsonLd data={organizationSchema} />

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
