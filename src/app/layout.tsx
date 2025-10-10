import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import type { ReactNode } from 'react'
import { ScrollProgress } from '@/components/ScrollProgress'

export const metadata: Metadata = {
  title: 'Jonathan Edwards — Portfolio',
  description: 'University student • Software Engineering',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <ScrollProgress />
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}
