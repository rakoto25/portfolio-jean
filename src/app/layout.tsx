import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Jean Rakotondrasoa - Développeur WordPress Full-Stack',
  description: 'Portfolio | 20+ projets WordPress, React, Next.js, WooCommerce | Madagascar ↔ Réunion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      {/* ❌ supprime toute logique qui ajoute `loaded` dynamiquement */}
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}