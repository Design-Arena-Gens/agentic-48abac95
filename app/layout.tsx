import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hindi Moral Stories - YouTube Channel Manager',
  description: 'Complete YouTube channel management platform for Hindi moral stories content creators',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
