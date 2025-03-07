import type { Metadata, Viewport } from 'next'
import 'styles/globals.scss'
import '@/assets/fonts/tmrwdao-icon.css'

import { Geist, Geist_Mono } from 'next/font/google'

import Launch from '@/components/Launch'
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import { serverTranslate } from '@/i18n/server'

import { HeroUIProviders } from './HeroUIProvider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: {
    default: 'Nezha Quant - 量化交易平台',
    template: '%s | Nezha Quant'
  },
  description: '哪吒量化平台提供专业的量化交易策略、算法与培训服务，帮助投资者实现自动化交易',
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://nezhaquant.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'zh-CN': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://nezhaquant.com/',
    title: 'Nezha Quant - 量化交易平台',
    description: '哪吒量化平台提供专业的量化交易策略、算法与培训服务，帮助投资者实现自动化交易',
    siteName: 'Nezha Quant',
    images: [
      {
        url: '/assets/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nezha Quant Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nezha Quant - 量化交易平台',
    description: '哪吒量化平台提供专业的量化交易策略、算法与培训服务',
    images: ['/assets/images/twitter-image.jpg'],
    creator: '@NeZhaQuant',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
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
    <html
      lang={lang}
      dir="ltr"
    >
      <head>
        <link rel="preload" href="/assets/fonts/YouSheBiaoTiHei.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/images/logo.svg" as="image" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
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
