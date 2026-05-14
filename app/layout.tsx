import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const manrope = Manrope({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
})

export const metadata: Metadata = {
  title: 'СНАРК — Российские вездеходы с двигателями Toyota',
  description: 'Премиальные квадроциклы СНАРК собственного производства в Санкт-Петербурге. Двигатели Toyota 1ZZ-FE, постоянный полный привод, 30+ лет опыта.',
  keywords: 'квадроцикл, вездеход, СНАРК, Toyota, полный привод, внедорожник, ATV, Россия',
  authors: [{ name: 'СНАРК ГРУП' }],
  openGraph: {
    title: 'СНАРК — Российские вездеходы с двигателями Toyota',
    description: 'Премиальные квадроциклы СНАРК собственного производства в Санкт-Петербурге.',
    type: 'website',
    locale: 'ru_RU',
    siteName: 'СНАРК',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
