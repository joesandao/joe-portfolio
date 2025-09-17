import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '0UTL1ER | アウトライヤ株式会社',
  description: '0UTL1ERは東京都千代田区に本社を置く、ウェブアプリケーション開発会社です。批判を恐れず、個人の意思を重視した革新的なプロジェクトを推進しています。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="dark">
      <body className={inter.className}>
        <div className='bg-black text-white'>
         {children}
        </div>
      </body>
    </html>
  )
}
