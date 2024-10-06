import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../components/common/Footer'
import Footer from '../components/common/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Joe Kuroha | 黒羽　晟',
  description: 'ウェブアプリの開発からインフラ構築まで。一人で完結できるフルスタック人材です。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
