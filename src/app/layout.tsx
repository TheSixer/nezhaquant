import type { Metadata } from 'next'
import 'styles/globals.scss'

import { Geist, Geist_Mono } from 'next/font/google'

import Launch from '@/components/Launch'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import { serverTranslate } from '@/i18n/server'

import { HeroUIProviders } from './HeroUIProvider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Nezha Quant',
  description: 'Quantitative Trading Platform',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>) {
  const lang = (await params).lang

  serverTranslate(lang, 'common')

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Launch lang={lang} />

        <HeroUIProviders>
          <div className="relative flex flex-col">
            <Header />
            {children}
            <Footer />
          </div>
        </HeroUIProviders>
      </body>
    </html>
  )
}
